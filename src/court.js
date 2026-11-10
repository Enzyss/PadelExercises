// Padel court around the player, with the ball: incoming lob, impact on the racket, outgoing shot
// with bounces on the floor, the glass and the wire mesh.
// World frame: player at the origin facing the net (+Z). The court is 10 x 20 m, the net at z = net.
import * as THREE from 'three';

const V3 = THREE.Vector3;
const R_BALL = 0.033;
const G = 9.81;

// ball centre at impact: centre of the racket face, on the side facing the net
export function impactPoint(rig, pose) {
  rig.apply(pose);
  const r = rig.racketFrame(pose.props.racket);
  const n = r.face.clone().multiplyScalar(r.face.z < 0 ? -1 : 1);
  return r.grip.clone().addScaledVector(r.dir, 0.29).addScaledVector(n, 0.055);
}

function label(text, color) {
  const c = document.createElement('canvas');
  c.width = 640; c.height = 112;
  const x = c.getContext('2d');
  let fs = 50;
  const font = () => `600 ${fs}px Barlow, "Arial Narrow", sans-serif`;
  x.font = font();
  while (x.measureText(text).width > 580 && fs > 24) { fs -= 2; x.font = font(); }
  const w = x.measureText(text).width + 48;
  x.fillStyle = 'rgba(8, 13, 22, 0.85)';
  x.beginPath();
  x.roundRect((640 - w) / 2, 14, w, 84, 42);
  x.fill();
  x.lineWidth = 4; x.strokeStyle = color; x.stroke();
  x.fillStyle = '#eef3fa'; x.textAlign = 'center'; x.textBaseline = 'middle';
  x.fillText(text, 320, 58);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  // constant size on screen, always readable
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true, sizeAttenuation: false }));
  s.scale.set(0.3, 0.0525, 1);
  s.renderOrder = 10;
  return s;
}

function meshTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const x = c.getContext('2d');
  x.strokeStyle = 'rgba(200, 212, 228, 1)'; x.lineWidth = 3;
  x.beginPath(); x.moveTo(0, 0); x.lineTo(64, 64); x.moveTo(64, 0); x.lineTo(0, 64); x.stroke();
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
}

function buildCourt() {
  const g = new THREE.Group();
  // floor: court blue, dark surround
  const sur = new THREE.Mesh(new THREE.PlaneGeometry(40, 50), new THREE.MeshStandardMaterial({ color: 0x0d1520, roughness: 0.95 }));
  sur.rotation.x = -Math.PI / 2; sur.position.y = -0.012; sur.receiveShadow = true;
  const fl = new THREE.Mesh(new THREE.PlaneGeometry(10, 20), new THREE.MeshStandardMaterial({ color: 0x1f4f9a, roughness: 0.95 }));
  fl.rotation.x = -Math.PI / 2; fl.position.y = -0.008; fl.receiveShadow = true;
  g.add(sur, fl);
  const lm = new THREE.MeshBasicMaterial({ color: 0xf2f6fb });
  const line = (w, d, x, z) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, d), lm); m.rotation.x = -Math.PI / 2; m.position.set(x, -0.006, z); g.add(m); };
  for (const z of [-6.95, 6.95]) line(10, 0.05, 0, z);
  line(0.05, 13.9, 0, 0);
  for (const z of [-10, 10]) line(10, 0.05, 0, z - Math.sign(z) * 0.025);
  // net
  const nt = meshTexture();
  nt.repeat.set(10 / 0.06, 0.86 / 0.06);
  const net = new THREE.Mesh(new THREE.PlaneGeometry(10, 0.86, 1, 1), new THREE.MeshBasicMaterial({ map: nt, color: 0x0a0f16, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false }));
  net.position.set(0, 0.43, 0);
  const netBack = new THREE.Mesh(new THREE.PlaneGeometry(10, 0.86), new THREE.MeshBasicMaterial({ color: 0x05080d, transparent: true, opacity: 0.25, side: THREE.DoubleSide, depthWrite: false }));
  netBack.position.copy(net.position);
  g.add(netBack);
  const tape = new THREE.Mesh(new THREE.BoxGeometry(10, 0.05, 0.02), new THREE.MeshStandardMaterial({ color: 0xf2f6fb, roughness: 0.6 }));
  tape.position.set(0, 0.885, 0);
  g.add(net, tape);
  const metal = new THREE.MeshStandardMaterial({ color: 0x2a3446, roughness: 0.5, metalness: 0.5 });
  for (const x of [-5.05, 5.05]) { const p = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.95, 0.08), metal); p.position.set(x, 0.475, 0); g.add(p); }
  // walls: glass at the back and in the last 4 m of the sides, wire mesh elsewhere
  const glass = new THREE.MeshStandardMaterial({ color: 0xa9d6ff, transparent: true, opacity: 0.1, roughness: 0.1, side: THREE.DoubleSide, depthWrite: false });
  const mtex = meshTexture();
  const wire = (w, h) => { const t = mtex.clone(); t.needsUpdate = true; t.repeat.set(w / 0.12, h / 0.12); return new THREE.MeshBasicMaterial({ map: t, color: 0x9aa8bb, transparent: true, opacity: 0.2, side: THREE.DoubleSide, depthWrite: false }); };
  const panel = (mat, w, h, x, y, z, ry) => { const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat); m.position.set(x, y, z); m.rotation.y = ry; g.add(m); };
  const post = (x, z, h) => { const p = new THREE.Mesh(new THREE.BoxGeometry(0.06, h, 0.06), metal); p.position.set(x, h / 2, z); g.add(p); };
  for (const s of [-1, 1]) {
    // back wall
    panel(glass, 10, 3, 0, 1.5, s * 10, 0);
    panel(wire(10, 1), 10, 1, 0, 3.5, s * 10, 0);
    for (let x = -5; x <= 5; x += 2) post(x, s * 10, 4);
    for (const x of [-5, 5]) {
      panel(glass, 2, 3, x, 1.5, s * 9, Math.PI / 2);
      panel(glass, 2, 2, x, 1, s * 7, Math.PI / 2);
      panel(wire(2, 1), 2, 1, x, 2.5, s * 7, Math.PI / 2);
      panel(wire(12, 3), 12, 3, x, 1.5, 0, Math.PI / 2);
      for (const z of [6, 8]) post(x, s * z, 3);
    }
  }
  for (const x of [-5, 5]) for (let z = -4; z <= 4; z += 2) post(x, z, 3);
  return g;
}

export class Court {
  constructor(scene) {
    this.root = new THREE.Group();
    this.root.visible = false;
    scene.add(this.root);
    this.court = buildCourt();
    this.root.add(this.court);
    this.fx = new THREE.Group();
    this.root.add(this.fx);
    const ball = new THREE.Mesh(new THREE.SphereGeometry(0.05, 20, 14), new THREE.MeshStandardMaterial({ color: 0xe6ff3c, emissive: 0x8fb000, emissiveIntensity: 0.7, roughness: 0.6 }));
    ball.castShadow = true;
    this.ball = ball;
    const blob = new THREE.Mesh(new THREE.CircleGeometry(0.06, 20), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.4, depthWrite: false }));
    blob.rotation.x = -Math.PI / 2;
    this.blob = blob;
    this.root.add(ball, blob);
    // depth band: between the service line and the back glass of the other half
    const band = new THREE.Mesh(new THREE.PlaneGeometry(10, 3.05), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.07, depthWrite: false }));
    band.rotation.x = -Math.PI / 2;
    band.position.set(0, -0.004, 8.475);
    this.court.add(band);
    this.band = band;
    this.bandLabel = label('Profondità: tra linea e vetro', '#e9eff8');
    this.bandLabel.position.set(0, 0.05, 7.3);
    this.court.add(this.bandLabel);
    this.cfg = null;
  }

  setVisible(on) { this.root.visible = on; }

  // cfg: exercise.court; hit: world impact point (ball centre); side 0/1; shot id; dur: seconds per rep
  configure(cfg, hit, side, shotId, dur) {
    this.cfg = cfg;
    this.dur = dur;
    // destrorsi e mancini stanno entrambi nella metà destra del campo: il mancino così ha il
    // dritto verso il centro. Solo il corpo è a specchio (impatto a sinistra), campo e direzioni no.
    const sg = 1;
    this.sg = sg;
    this.cx = 2.5;
    this.court.position.set(this.cx, 0, cfg.net);
    const shot = cfg.shots.find((s) => s.id === shotId) || cfg.shots[0];
    this.shot = shot;
    this.tHit = cfg.hit * dur;
    this.tLob = cfg.lob.start * dur;
    // incoming lob: ballistic from the opponent to the impact point
    const O = new V3(sg * cfg.lob.from[0], cfg.lob.from[1], cfg.lob.from[2]);
    const T = this.tHit - this.tLob;
    this.lob = { O, v: new V3((hit.x - O.x) / T, (hit.y - O.y + 0.5 * G * T * T) / T, (hit.z - O.z) / T), T };
    // outgoing shot
    this.out = this.simulate(hit, shot);
    // drawables
    this.fx.clear();
    const col = new THREE.Color(shot.color);
    const lobPts = [];
    for (let i = 0; i <= 60; i++) lobPts.push(this.lobAt((i / 60) * T));
    this.lobLine = new THREE.Line(new THREE.BufferGeometry().setFromPoints(lobPts), new THREE.LineDashedMaterial({ color: 0xffffff, dashSize: 0.25, gapSize: 0.18, transparent: true, opacity: 0.35 }));
    this.lobLine.computeLineDistances();
    const outPts = this.out.pts.map((s) => s.p);
    this.ghost = new THREE.Line(new THREE.BufferGeometry().setFromPoints(outPts), new THREE.LineBasicMaterial({ color: col, transparent: true, opacity: 0.28 }));
    this.trail = new THREE.Line(new THREE.BufferGeometry().setFromPoints(outPts), new THREE.LineBasicMaterial({ color: col }));
    this.fx.add(this.lobLine, this.ghost, this.trail);
    this.marks = this.out.events.map((e) => {
      const ring = new THREE.Mesh(new THREE.RingGeometry(0.11, 0.17, 32), new THREE.MeshBasicMaterial({ color: col, transparent: true, side: THREE.DoubleSide, depthWrite: false }));
      ring.position.copy(e.p);
      if (e.n.y > 0.5) { ring.rotation.x = -Math.PI / 2; ring.position.y = 0.004; } else ring.lookAt(e.p.clone().add(e.n));
      const lb = e.text ? label(e.text, shot.color) : null;
      if (lb) {
        // spread the labels: floor below the mark, back glass above it, side glass inwards
        const off = { floor: new V3(0, 0.05, -0.9), end: new V3(0, 0.05, -1.2), back: new V3(0, 1.5, 0), side: new V3(0, 0.55, 0).addScaledVector(e.n, 1.1), grid: new V3(0, 0.9, 0).addScaledVector(e.n, 0.6) }[e.type];
        lb.position.copy(e.p).add(off);
        this.fx.add(lb);
      }
      this.fx.add(ring);
      return { e, ring, lb };
    });
    this.impact = new THREE.Mesh(new THREE.RingGeometry(0.07, 0.1, 28), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, side: THREE.DoubleSide, depthWrite: false }));
    this.impact.position.copy(hit);
    this.impact.lookAt(hit.clone().add(new V3(0, 0, 1)));
    this.fx.add(this.impact);
    // depth label on the half of the band the ball does not land in
    const landLocal = sg * shot.land[0] - this.cx;
    this.bandLabel.position.set(landLocal > 0 ? -2.6 : 2.6, 0.05, 7.4);
    this.band.material.color.set(shot.error ? 0xffffff : shot.color);
    this.band.material.opacity = shot.error ? 0.05 : 0.1;
  }

  lobAt(t) {
    const { O, v } = this.lob;
    return new V3(O.x + v.x * t, O.y + v.y * t - 0.5 * G * t * t, O.z + v.z * t);
  }

  simulate(hit, shot) {
    const cfg = this.cfg, sg = this.sg;
    const gEff = shot.flat ? G : 7.2; // backspin keeps the ball up a little
    const L = new V3(sg * shot.land[0], R_BALL, shot.land[1]);
    const T = shot.time;
    const v = new V3((L.x - hit.x) / T, (L.y - hit.y + 0.5 * gEff * T * T) / T, (L.z - hit.z) / T);
    const p = hit.clone();
    const pts = [{ t: 0, p: p.clone() }], events = [];
    const xMin = this.cx - 5 + R_BALL, xMax = this.cx + 5 - R_BALL, zMax = cfg.net + 10 - R_BALL;
    const dt = 1 / 240, tEnd = this.dur - this.tHit - 0.15;
    let floors = 0, netY = null;
    const names = { floor: ['Rimbalzo'], back: 'Vetro di fondo', side: 'Vetro laterale', grid: 'Griglia' };
    const ev = (type, n) => {
      let text = type === 'floor' ? names.floor[floors] || '' : names[type];
      if (type === 'floor') floors++;
      if (events.some((e) => e.type === type && type !== 'floor')) text = '';
      events.push({ t: pts[pts.length - 1].t, p: p.clone(), n, type, text });
    };
    for (let t = dt, k = 0; t <= tEnd; t += dt, k++) {
      const pz = p.z;
      v.y -= (floors ? G : gEff) * dt;
      v.multiplyScalar(1 - 0.12 * dt);
      p.addScaledVector(v, dt);
      if (netY === null && pz < cfg.net && p.z >= cfg.net) netY = p.y;
      if (p.y < R_BALL && v.y < 0) {
        p.y = R_BALL;
        v.y = -v.y * (shot.flat ? 0.68 : 0.6);
        v.x *= 0.82; v.z *= 0.82;
        if (Math.abs(v.y) > 0.6) ev('floor', new V3(0, 1, 0));
        else v.y = 0;
      }
      if (p.z > zMax && v.z > 0) {
        p.z = zMax; v.z = -v.z * 0.72;
        if (v.y > 0) v.y *= shot.glassUp;
        ev('back', new V3(0, 0, -1));
      }
      for (const [lim, s] of [[xMin, -1], [xMax, 1]]) {
        if (s * (p.x - lim) > 0 && s * v.x > 0) {
          p.x = lim;
          const u = p.z - cfg.net;
          const glassH = u >= 8 ? 3 : u >= 6 ? 2 : 0;
          if (p.y < glassH) {
            v.x = -v.x * 0.72;
            if (v.y > 0) v.y *= shot.glassUp;
            ev('side', new V3(-s, 0, 0));
          } else {
            v.x = -v.x * 0.25; v.z *= 0.5; v.y *= 0.35;
            ev('grid', new V3(-s, 0, 0));
          }
        }
      }
      if (k % 2 === 1) pts.push({ t, p: p.clone() });
    }
    if (shot.error) {
      // where the mistake shows: by default where the ball ends up, or at its first bounce
      const first = events.find((e) => e.type === 'floor');
      if (shot.errorAt === 'bounce' && first) {
        first.text = shot.errorLabel;
      } else {
        const last = pts[pts.length - 1].p;
        events.push({ t: pts[pts.length - 1].t - 0.2, p: new V3(last.x, R_BALL, last.z), n: new V3(0, 1, 0), type: 'end', text: shot.errorLabel || 'Al centro: palla comoda' });
      }
    }
    return { pts, events, netY };
  }

  // phase: fraction of the current rep [0, 1)
  update(phase, aspect = 1.5) {
    if (!this.cfg || !this.root.visible) return;
    // labels keep a constant size on screen; narrower on portrait screens
    const ls = Math.min(1, Math.max(0.62, aspect / 1.3));
    for (const sp of [this.bandLabel, ...this.marks.map((m) => m.lb).filter(Boolean)]) sp.scale.set(0.3 * ls, 0.0525 * ls, 1);
    const s = (((phase % 1) + 1) % 1) * this.dur;
    let p = null;
    const tOut = s - this.tHit;
    if (s >= this.tLob && s < this.tHit) p = this.lobAt(s - this.tLob);
    else if (tOut >= 0) {
      const pts = this.out.pts;
      let i = Math.min(pts.length - 1, Math.floor(tOut / (2 / 240)));
      p = pts[i].p;
      this.trail.geometry.setDrawRange(0, i + 1);
    }
    if (tOut < 0) this.trail.geometry.setDrawRange(0, 0);
    const fade = tOut > this.dur - this.tHit - 0.45 ? Math.max(0, (this.dur - this.tHit - 0.15 - tOut) / 0.3) : 1;
    this.ball.visible = this.blob.visible = !!p && fade > 0.05;
    if (p) {
      this.ball.position.copy(p);
      this.blob.position.set(p.x, 0.003, p.z);
      const k = Math.max(0.4, 1.2 - p.y * 0.12);
      this.blob.scale.setScalar(k);
      this.blob.material.opacity = 0.45 * Math.max(0.2, 1 - p.y / 6);
    }
    this.lobLine.material.opacity = tOut < 0 ? 0.4 : 0.14;
    this.ghost.material.opacity = 0.28;
    for (const m of this.marks) {
      const age = s - this.tHit - m.e.t;
      const a = age < 0 ? 0 : Math.min(1, age / 0.12);
      m.ring.material.opacity = a * 0.9;
      m.ring.visible = a > 0;
      if (m.lb) { m.lb.visible = a > 0; m.lb.material.opacity = a; }
    }
    const ia = Math.abs(s - this.tHit) < 0.25 ? 1 - Math.abs(s - this.tHit) / 0.25 : 0;
    this.impact.visible = ia > 0;
    this.impact.material.opacity = ia;
    this.impact.scale.setScalar(1 + (1 - ia) * 1.5);
  }
}
