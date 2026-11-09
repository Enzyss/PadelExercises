// Rig: drives the Mixamo skeleton of the mannequin from an anatomical pose
// description. Legs always use analytic two-bone IK (feet stay planted on
// the floor), arms use either joint angles (FK) or IK towards a target.
// Every hinge joint (elbow, knee) bends only in its own anatomical plane.
import * as THREE from 'three';

export const DEG = Math.PI / 180;
const V3 = THREE.Vector3;
const Q = THREE.Quaternion;

const AX = { x: new V3(1, 0, 0), y: new V3(0, 1, 0), z: new V3(0, 0, 1) };

export function eulerQ(r) {
  return new Q().setFromEuler(new THREE.Euler(r[0] * DEG, r[1] * DEG, r[2] * DEG, 'YXZ'));
}
function axisQ(axis, angle) {
  return new Q().setFromAxisAngle(axis.clone().normalize(), angle);
}
function basis(dir, hinge) {
  const x = dir.clone().normalize();
  const y = hinge.clone().addScaledVector(x, -hinge.dot(x));
  if (y.lengthSq() < 1e-10) y.set(0, 0, 1).addScaledVector(x, -x.z);
  y.normalize();
  const z = new V3().crossVectors(x, y);
  return new THREE.Matrix4().makeBasis(x, y, z);
}
// rotation that maps bind frame (dirB, hB) onto (dir, h), applied to bind world quat
function frameQuat(dirB, hB, dir, h, bindQ) {
  const m = basis(dir, h).multiply(basis(dirB, hB).transpose());
  return new Q().setFromRotationMatrix(m).multiply(bindQ);
}

export class Rig {
  constructor(root) {
    this.root = root;
    this.b = {};
    root.traverse((o) => {
      if (o.isBone) this.b[o.name.replace('mixamorig', '')] = o;
    });
    root.updateMatrixWorld(true);
    this.bind = {};
    for (const n in this.b) {
      const bone = this.b[n];
      this.bind[n] = {
        lq: bone.quaternion.clone(),
        lp: bone.position.clone(),
        wp: bone.getWorldPosition(new V3()),
        wq: bone.getWorldQuaternion(new Q()),
      };
    }
    const limb = (a, m, e, hinge) => {
      const A = this.bind[a].wp, M = this.bind[m].wp, E = this.bind[e].wp;
      return {
        a: this.b[a], m: this.b[m], e: this.b[e],
        L1: A.distanceTo(M), L2: M.distanceTo(E),
        d1: M.clone().sub(A).normalize(), d2: E.clone().sub(M).normalize(),
        hB: hinge, q1: this.bind[a].wq, q2: this.bind[m].wq,
      };
    };
    this.limbs = {
      LA: limb('LeftArm', 'LeftForeArm', 'LeftHand', new V3(0, -1, 0)),
      RA: limb('RightArm', 'RightForeArm', 'RightHand', new V3(0, 1, 0)),
      LL: limb('LeftUpLeg', 'LeftLeg', 'LeftFoot', new V3(1, 0, 0)),
      RL: limb('RightUpLeg', 'RightLeg', 'RightFoot', new V3(1, 0, 0)),
    };
    // foot geometry: ankle -> ball of the foot
    this.ankleY = this.bind.LeftFoot.wp.y;
    this.ballOff = this.bind.LeftToeBase.wp.clone().sub(this.bind.LeftFoot.wp);
    this.hipsY = this.bind.Hips.wp.y;
    this.chestQ = new Q();
    this.state = {}; // last solved joint data (for checks)
  }

  reset() {
    for (const n in this.b) {
      this.b[n].quaternion.copy(this.bind[n].lq);
      this.b[n].position.copy(this.bind[n].lp);
    }
  }

  setWorldQuat(bone, q) {
    const pq = bone.parent.getWorldQuaternion(new Q());
    bone.quaternion.copy(pq.invert().multiply(q));
    bone.updateMatrixWorld(true);
  }

  // place limb bones so that upper bone points along dir1 and lower along dir2,
  // both hinged around h (world)
  setChain(L, dir1, dir2, h) {
    this.setWorldQuat(L.a, frameQuat(L.d1, L.hB, dir1, h, L.q1));
    this.setWorldQuat(L.m, frameQuat(L.d2, L.hB, dir2, h, L.q2));
  }

  // analytic two-bone IK; bend = direction the middle joint should bulge to
  solveIK(L, target, bend) {
    const A = L.a.getWorldPosition(new V3());
    const d = target.clone().sub(A);
    let dist = d.length();
    const dir = d.normalize();
    const maxR = (L.L1 + L.L2) * 0.9995;
    const minR = Math.abs(L.L1 - L.L2) + 0.02;
    const reach = dist;
    dist = Math.min(Math.max(dist, minR), maxR);
    let perp = bend.clone().addScaledVector(dir, -bend.dot(dir));
    if (perp.lengthSq() < 1e-8) perp = new V3(0, 0, 1).addScaledVector(dir, -dir.z);
    perp.normalize();
    const cosA = Math.min(1, Math.max(-1, (L.L1 * L.L1 + dist * dist - L.L2 * L.L2) / (2 * L.L1 * dist)));
    const sinA = Math.sqrt(1 - cosA * cosA);
    const B = A.clone().addScaledVector(dir, L.L1 * cosA).addScaledVector(perp, L.L1 * sinA);
    const C = A.clone().addScaledVector(dir, dist);
    const h = new V3().crossVectors(perp, dir).normalize();
    const d1 = B.clone().sub(A).normalize();
    const d2 = C.clone().sub(B).normalize();
    this.setChain(L, d1, d2, h);
    return { reachError: Math.max(0, reach - maxR), flex: Math.acos(Math.min(1, d1.dot(d2))) / DEG };
  }

  apply(pose) {
    this.reset();
    const b = this.b;
    // ---- pelvis
    const hips = b.Hips;
    hips.parent.updateWorldMatrix(true, false);
    hips.position.copy(hips.parent.worldToLocal(new V3(...pose.hips.p)));
    this.setWorldQuat(hips, eulerQ(pose.hips.r).multiply(this.bind.Hips.wq));
    // ---- spine (distributed)
    const sp = pose.spine;
    const w = [0.3, 0.35, 0.35];
    ['Spine', 'Spine1', 'Spine2'].forEach((n, i) => {
      b[n].quaternion.copy(this.bind[n].lq).multiply(eulerQ([sp[0] * w[i], sp[1] * w[i], sp[2] * w[i]]));
    });
    const hd = pose.head || [0, 0, 0];
    b.Neck.quaternion.copy(this.bind.Neck.lq).multiply(eulerQ([hd[0] * 0.5, hd[1] * 0.5, hd[2] * 0.5]));
    b.Head.quaternion.copy(this.bind.Head.lq).multiply(eulerQ([hd[0] * 0.5, hd[1] * 0.5, hd[2] * 0.5]));
    // clavicles: [elevation, retraction]
    for (const s of ['L', 'R']) {
      const sg = s === 'L' ? 1 : -1;
      const sc = (pose[s] && pose[s].scap) || [0, 0];
      const bone = b[s === 'L' ? 'LeftShoulder' : 'RightShoulder'];
      bone.quaternion.copy(this.bind[bone.name.replace('mixamorig', '')].lq)
        .multiply(axisQ(AX.z, sg * sc[0] * DEG)).multiply(axisQ(AX.y, sg * sc[1] * DEG));
    }
    hips.updateMatrixWorld(true);
    this.chestQ = b.Spine2.getWorldQuaternion(new Q());
    this.chestP = b.Spine2.getWorldPosition(new V3());

    // ---- legs
    this.state.legs = {};
    for (const s of ['L', 'R']) {
      const f = pose['F' + s];
      const sg = s === 'L' ? 1 : -1;
      const yawQ = axisQ(AX.y, sg * (f.out || 0) * DEG);
      const pitchQ = axisQ(AX.x, (f.heel || 0) * DEG);
      const footQ = yawQ.clone().multiply(pitchQ);
      // ball position from ankle ground projection
      // pivot 'ball': the foot turns on the forefoot (x,z = ankle position at 0° yaw)
      const ballFlat = this.ballOff.clone().applyQuaternion(f.pivot === 'ball' ? new Q() : yawQ);
      const ankleFlat = new V3(f.x, this.ankleY + (f.y || 0), f.z);
      const ball = ankleFlat.clone().add(ballFlat);
      const ankle = ball.clone().sub(this.ballOff.clone().applyQuaternion(footQ));
      // the sole under the ball has thickness: rolling onto the forefoot lifts the pivot slightly
      ankle.y += 0.024 * Math.sin(Math.max(0, f.heel || 0) * DEG);
      const L = this.limbs[s + 'L'];
      const fwd = new V3(0, 0, 1).applyQuaternion(yawQ);
      const knee = f.knee ? new V3(...f.knee) : fwd.clone().add(new V3(sg * 0.28, 0, 0));
      const r = this.solveIK(L, ankle, knee);
      const foot = b[s === 'L' ? 'LeftFoot' : 'RightFoot'];
      const fq = footQ.clone().multiply(this.bind[s === 'L' ? 'LeftFoot' : 'RightFoot'].wq);
      this.setWorldQuat(foot, fq);
      const toe = b[s === 'L' ? 'LeftToeBase' : 'RightToeBase'];
      if (f.toeFlat !== false) this.setWorldQuat(toe, yawQ.clone().multiply(axisQ(AX.x, (f.toe || 0) * DEG)));
      else toe.quaternion.copy(axisQ(AX.x, -(f.toe || 0) * DEG));
      toe.updateMatrixWorld(true);
      this.state.legs[s] = { ...r, ankle, ball };
    }

    // ---- arms
    this.state.arms = {};
    this.racketSide = pose.props && pose.props.racket;
    // the racket arm is solved first so the other hand can hold the throat
    const order = this.racketSide === 'L' ? ['L', 'R'] : ['R', 'L'];
    for (const s of order) {
      const a = pose[s];
      const sg = s === 'L' ? 1 : -1;
      const L = this.limbs[s + 'A'];
      let dir1, dir2, h, info = {};
      const toW = (v) => a.space === 'world' ? new V3(...v) : new V3(...v).applyQuaternion(this.chestQ).add(this.chestP);
      const toWd = (v) => a.space === 'world' ? new V3(...v) : new V3(...v).applyQuaternion(this.chestQ);
      if (a.mode === 'ik' && a.attachW > 0 && this.racketSide) {
        // free hand blends between its own target and the racket throat
        const r = this.racketFrame(this.racketSide);
        const throat = r.grip.clone().addScaledVector(r.dir, 0.155).addScaledVector(r.face, 0.02);
        const t = toW(a.t).lerp(throat, Math.min(1, a.attachW));
        info = this.solveIK(L, t, toWd(a.hint || [sg * 0.3, -0.4, -1]));
      } else if (a.mode === 'ik') {
        info = this.solveIK(L, toW(a.t), toWd(a.hint || [sg * 0.3, -0.4, -1]));
      } else {
        // hflex: horizontal flexion (arm swings forward around the vertical axis of the chest)
        const R = axisQ(AX.y, -sg * (a.hflex || 0) * DEG)
          .multiply(axisQ(AX.x, -(a.flex || 0) * DEG))
          .multiply(axisQ(AX.z, sg * (a.abd || 0) * DEG))
          .multiply(axisQ(new V3(0, -1, 0), sg * (a.rot || 0) * DEG));
        const d1 = new V3(0, -1, 0).applyQuaternion(R);
        const hh = new V3(-1, 0, 0).applyQuaternion(R);
        const d2 = d1.clone().applyQuaternion(axisQ(hh, (a.elbow || 0) * DEG));
        dir1 = d1.applyQuaternion(this.chestQ);
        dir2 = d2.applyQuaternion(this.chestQ);
        h = hh.applyQuaternion(this.chestQ);
        this.setChain(L, dir1, dir2, h);
        info.flex = a.elbow || 0;
      }
      if (a.racket) {
        Object.assign(info, this.orientRacketHand(s, L, a.racket, toWd));
        this.grip(s, a.grip == null ? 1 : a.grip);
        this.state.arms[s] = info;
        continue;
      }
      // forearm pronation (+) / supination (-): 65% in the forearm, 35% at the wrist
      const pron = (a.pron || 0) * DEG;
      if (pron) {
        const fq = L.m.getWorldQuaternion(new Q());
        const fdir = L.d2.clone().applyQuaternion(fq.clone().multiply(L.q2.clone().invert()));
        this.setWorldQuat(L.m, axisQ(fdir, sg * pron * 0.65).multiply(fq));
      }
      const hand = L.e;
      const flexAxis = new V3(0, 0, -sg);
      const devAxis = new V3(0, -sg, 0);
      hand.quaternion.copy(this.bind[hand.name.replace('mixamorig', '')].lq)
        .multiply(axisQ(AX.x, pron * 0.35))
        .multiply(axisQ(flexAxis, (a.wflex || 0) * DEG))
        .multiply(axisQ(devAxis, (a.wdev || 0) * DEG));
      hand.updateMatrixWorld(true);
      this.grip(s, a.grip == null ? 0.15 : a.grip);
      this.state.arms[s] = info;
    }
    this.root.updateMatrixWorld(true);
  }

  // Orient the hand so the racket points along r.dir with its face normal r.face.
  // The rotation needed relative to the forearm is split anatomically:
  // the twist about the forearm axis is pronation/supination (mostly in the
  // forearm), the remaining swing is wrist flexion / deviation.
  orientRacketHand(s, L, r, toWd) {
    const sg = s === 'L' ? 1 : -1;
    const dir = toWd(r.dir).normalize();
    const face = toWd(r.face);
    const Qh = new Q().setFromRotationMatrix(basis(dir, face).multiply(basis(this.racketAxis(s), new V3(0, -1, 0)).transpose()));
    const fq = L.m.getWorldQuaternion(new Q());
    const rel = fq.clone().invert().multiply(Qh); // hand local
    const axis = new V3(sg, 0, 0);
    const p = new V3(rel.x, rel.y, rel.z);
    const proj = axis.clone().multiplyScalar(p.dot(axis));
    const twist = new Q(proj.x, proj.y, proj.z, rel.w).normalize();
    let tw = 2 * Math.atan2(new V3(twist.x, twist.y, twist.z).dot(axis), twist.w);
    if (tw > Math.PI) tw -= 2 * Math.PI;
    if (tw < -Math.PI) tw += 2 * Math.PI;
    // forearm takes 65% of the twist
    const fdir = L.d2.clone().applyQuaternion(fq.clone().multiply(L.q2.clone().invert()));
    this.setWorldQuat(L.m, axisQ(fdir, tw * 0.65).multiply(fq));
    const fq2 = L.m.getWorldQuaternion(new Q());
    const hand = L.e;
    hand.quaternion.copy(fq2.invert().multiply(Qh));
    hand.updateMatrixWorld(true);
    // wrist swing = hand local rotation without its twist component
    const hl = hand.quaternion;
    const pp = new V3(hl.x, hl.y, hl.z);
    const pj = axis.clone().multiplyScalar(pp.dot(axis));
    const tq = new Q(pj.x, pj.y, pj.z, hl.w).normalize();
    const swing = hl.clone().multiply(tq.invert());
    const swingDeg = 2 * Math.acos(Math.min(1, Math.abs(swing.w))) / DEG;
    // pronation sign: positive = palm turning down from thumb-up neutral
    return { pron: (sg * tw) / DEG, wrist: swingDeg };
  }

  // Continental grip: the handle crosses the palm diagonally, so the racket
  // leaves the hand between thumb and index at ~125° from the forearm.
  racketAxis(s) {
    const sg = s === 'L' ? 1 : -1;
    const a = 35 * DEG;
    return new V3(sg * Math.sin(a), 0, Math.cos(a));
  }

  // racket frame from the hand holding it
  racketFrame(s) {
    const q = this.handFrame(s);
    return {
      grip: this.gripPoint(s),
      dir: this.racketAxis(s).applyQuaternion(q),
      face: new V3(0, -1, 0).applyQuaternion(q),
      q,
    };
  }

  grip(s, g) {
    const side = s === 'L' ? 'Left' : 'Right';
    const sg = s === 'L' ? 1 : -1;
    const ax = new V3(0, 0, -sg);
    for (const f of ['Index', 'Middle', 'Ring', 'Pinky']) {
      [70, 85, 55].forEach((deg, i) => {
        const bone = this.b[`${side}Hand${f}${i + 1}`];
        if (bone) bone.quaternion.copy(axisQ(ax, g * deg * DEG));
      });
    }
    const t1 = this.b[`${side}HandThumb1`], t2 = this.b[`${side}HandThumb2`], t3 = this.b[`${side}HandThumb3`];
    if (t1) t1.quaternion.copy(axisQ(new V3(sg * 0.3, 0, 1), -sg * g * 25 * DEG));
    if (t2) t2.quaternion.copy(axisQ(new V3(0, 0, 1).add(new V3(sg * 0.6, 0.5, 0)), -sg * g * 35 * DEG));
    if (t3) t3.quaternion.copy(axisQ(new V3(0, 0, 1).add(new V3(sg * 0.6, 0.5, 0)), -sg * g * 30 * DEG));
    this.b[`${side}Hand`].updateMatrixWorld(true);
  }

  // centre of the closed hand (where a handle / band sits), world space
  gripPoint(s, out = new V3()) {
    const hand = this.limbs[s + 'A'].e;
    const sg = s === 'L' ? 1 : -1;
    // local: along fingers (bone axis is +/-X in bind), towards palm (-Y)
    const local = new V3(sg * 8.0, -3.2, 0.2); // cm (armature scale 0.01)
    return out.copy(local).applyMatrix4(hand.matrixWorld);
  }
  handFrame(s) {
    const hand = this.limbs[s + 'A'].e;
    return hand.getWorldQuaternion(new Q());
  }
}

// ---------- pose utilities ----------
export function deepMerge(base, over) {
  if (over === undefined) return structuredClone(base);
  if (Array.isArray(over) || typeof over !== 'object' || over === null) return structuredClone(over);
  const out = structuredClone(base || {});
  for (const k in over) out[k] = deepMerge(out[k], over[k]);
  return out;
}

export function lerpPose(a, b, t) {
  if (typeof a === 'number' && typeof b === 'number') return a + (b - a) * t;
  if (Array.isArray(a) && Array.isArray(b)) return a.map((v, i) => lerpPose(v, b[i], t));
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const o = {};
    for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
      // a field missing on one side means its default: 0 for numbers, absent otherwise
      if (!(k in a)) o[k] = typeof b[k] === 'number' ? b[k] * t : t < 0.5 ? undefined : structuredClone(b[k]);
      else if (!(k in b)) o[k] = typeof a[k] === 'number' ? a[k] * (1 - t) : t < 0.5 ? structuredClone(a[k]) : undefined;
      else o[k] = lerpPose(a[k], b[k], t);
      if (o[k] === undefined) delete o[k];
    }
    return o;
  }
  return t < 0.5 ? a : b;
}

// mirror a pose left <-> right (character facing +Z, left = +X)
export function mirrorPose(p) {
  const m = structuredClone(p);
  const nx = (v) => (v ? [-v[0], v[1], v[2]] : v);
  m.hips.p = nx(p.hips.p);
  m.hips.r = [p.hips.r[0], -p.hips.r[1], -p.hips.r[2]];
  m.spine = [p.spine[0], -p.spine[1], -p.spine[2]];
  if (p.head) m.head = [p.head[0], -p.head[1], -p.head[2]];
  const arm = (a) => {
    const c = structuredClone(a);
    if (c.mode === 'ik') { c.t = nx(c.t); c.hint = nx(c.hint); }
    if (c.racket) c.racket = { dir: nx(c.racket.dir), face: nx(c.racket.face) };
    return c;
  };
  m.L = arm(p.R); m.R = arm(p.L);
  const foot = (f) => ({ ...structuredClone(f), x: -f.x, knee: f.knee ? nx(f.knee) : undefined });
  m.FL = foot(p.FR); m.FR = foot(p.FL);
  if (!m.FL.knee) delete m.FL.knee;
  if (!m.FR.knee) delete m.FR.knee;
  if (p.props) {
    m.props = structuredClone(p.props);
    for (const k in m.props) if (Array.isArray(m.props[k]) && m.props[k].length === 3) m.props[k] = nx(m.props[k]);
    for (const k of ['dumbbell', 'racket', 'bandFoot', 'bandHand']) if (m.props[k]) m.props[k] = m.props[k] === 'L' ? 'R' : 'L';
  }
  if (p.handSwap !== undefined) m.handSwap = p.handSwap;
  return m;
}
