import { Stage } from '../src/scene.js';
import { EXERCISES, samplePose } from '../src/exercises.js';
import { applyProps } from '../src/props.js';
import { impactPoint, aimFor } from '../src/court.js';
import * as THREE from 'three';
const stage = new Stage(document.getElementById('v'), { modelUrl: 'Xbot.glb', bloom: true, pixelRatio: 1 });
window.stage = stage;
await stage.ready;
const byId = (k) => typeof k === 'number' ? EXERCISES[k] : EXERCISES.find(e => e.id === k);
window.show = (ex, t, side = 0, cam, over, aim) => {
  const e = byId(ex);
  let pose = samplePose(e, t, side, aim);
  if (over) for (const k in over) pose[k] = typeof over[k] === 'object' && !Array.isArray(over[k]) ? { ...pose[k], ...over[k] } : over[k];
  stage.rig.apply(pose);
  applyProps(stage, e, pose);
  stage.setMuscles(e.prim, e.sec, null);
  stage.setEffort(pose.effort || 0);
  if (cam) stage.frame(cam.p, cam.t, true);
  else { const c = e.cam; stage.frame(c.p, c.t, true); }
  stage.render(0.016);
  return { pose, legs: stage.rig.state.legs, arms: stage.rig.state.arms };
};
window.lowByBone = () => {
  const v = new THREE.Vector3(); const res = {};
  stage.model.traverse(o => { if (!o.isSkinnedMesh) return; const si = o.geometry.attributes.skinIndex, sw = o.geometry.attributes.skinWeight;
    for (let i = 0; i < o.geometry.attributes.position.count; i += 2) { o.getVertexPosition(i, v); o.localToWorld(v);
      let bi = 0, bw = -1; for (let k = 0; k < 4; k++) if (sw.getComponent(i, k) > bw) { bw = sw.getComponent(i, k); bi = si.getComponent(i, k); }
      const n = o.skeleton.bones[bi].name.replace('mixamorig','').replace(/(Left|Right)Hand.*/, '$1Hand'); if (!(n in res) || v.y < res[n]) res[n] = +v.y.toFixed(3); } });
  return res;
};
window.ready = true;
// For each key of an exercise: racket-arm stats, plus the face orientation (rotating the face
// around the racket axis) that minimises wrist bending.
window.keyStats = (exId, side = 0) => {
  const e = byId(exId); const out = [];
  const rig = stage.rig;
  for (const k of e.keys) {
    const pose = structuredClone(k.pose);
    const s = pose.props && pose.props.racket; if (!s) continue;
    rig.apply(pose); const cur = rig.state.arms[s];
    const a = pose[s]; if (!a.racket) { out.push(`t=${k.t} (no racket ik)`); continue; }
    const d = new THREE.Vector3(...a.racket.dir).normalize();
    const f0 = new THREE.Vector3(...a.racket.face); f0.addScaledVector(d, -f0.dot(d)).normalize();
    let best = null;
    for (let ang = 0; ang < 360; ang += 10) {
      const f = f0.clone().applyAxisAngle(d, ang * Math.PI / 180);
      a.racket.face = f.toArray(); rig.apply(pose); const st = rig.state.arms[s];
      const cost = Math.max(0, st.wrist - 25) + Math.max(0, Math.abs(st.pron) - 70) * 2;
      if (!best || cost < best.cost) best = { cost, ang, wrist: Math.round(st.wrist), pron: Math.round(st.pron), face: f.toArray().map(x => +x.toFixed(2)) };
    }
    out.push(`t=${k.t} cur wrist ${Math.round(cur.wrist)} pron ${Math.round(cur.pron)} | best rot ${best.ang}° wrist ${best.wrist} pron ${best.pron} face ${JSON.stringify(best.face)}`);
  }
  return out.join('\n');
};
// Keep racket dir + face fixed (technique), search the elbow direction that makes the wrist most natural.
window.hintSearch = (exId) => {
  const e = byId(exId); const out = []; const rig = stage.rig;
  for (const k of e.keys) {
    const pose = structuredClone(k.pose);
    const s = pose.props && pose.props.racket; if (!s) continue;
    const a = pose[s]; if (!a.racket) continue;
    rig.apply(pose); const cur = rig.state.arms[s];
    let best = null;
    for (let th = 20; th <= 180; th += 10) for (let ph = 0; ph < 360; ph += 15) {
      const h = [Math.sin(th * Math.PI / 180) * Math.cos(ph * Math.PI / 180), Math.cos(th * Math.PI / 180), Math.sin(th * Math.PI / 180) * Math.sin(ph * Math.PI / 180)];
      a.hint = h; rig.apply(pose); const st = rig.state.arms[s];
      const cost = Math.max(0, st.wrist - 20) + Math.max(0, Math.abs(st.pron) - 70) * 2;
      if (!best || cost < best.cost) best = { cost, wrist: Math.round(st.wrist), pron: Math.round(st.pron), flex: Math.round(st.flex), hint: h.map(x => +x.toFixed(2)) };
    }
    out.push(`t=${k.t} cur w${Math.round(cur.wrist)} p${Math.round(cur.pron)} | best w${best.wrist} p${best.pron} elbow${best.flex} hint ${JSON.stringify(best.hint)}`);
  }
  return out.join('\n');
};
// Fit racket-arm joint angles (within anatomical ranges) to a technique target:
// grip position, racket head direction and face normal (all world space).
const RANGES = { flex: [-40, 180], abd: [-30, 170], hflex: [-30, 130], rot: [-90, 90], elbow: [0, 140], pron: [-85, 85], wflex: [-60, 55], wdev: [-25, 30] };
window.fitArm = (exId, t, target, side = 0) => {
  const e = byId(exId);
  const base = samplePose(e, t, side);
  const s = base.props.racket; const rig = stage.rig;
  const T = new THREE.Vector3(...target.grip), D = new THREE.Vector3(...target.dir).normalize();
  const F = new THREE.Vector3(...target.face); F.addScaledVector(D, -F.dot(D)).normalize();
  const keys = Object.keys(RANGES);
  const evalP = (p) => {
    const pose = structuredClone(base); pose[s] = { mode: 'fk', grip: 1, ...p };
    rig.apply(pose);
    const r = rig.racketFrame(s);
    const pe = r.grip.distanceTo(T), de = 1 - r.dir.dot(D), fe = 1 - r.face.dot(F);
    const reg = ((p.wflex ** 2 + p.wdev ** 2) / 3600) * 0.5 + (p.pron ** 2 / 8100) * 0.25 + (p.rot ** 2 / 8100) * 0.1;
    return { cost: pe * pe * 400 + de * 6 + fe * 4 + reg, pe, dAng: Math.acos(Math.min(1, 1 - de)) * 57.3, fAng: Math.acos(Math.max(-1, Math.min(1, 1 - fe))) * 57.3 };
  };
  const clampP = (p) => { for (const k of keys) p[k] = Math.max(RANGES[k][0], Math.min(RANGES[k][1], p[k])); return p; };
  let best = null;
  const seeds = [target.init || {}];
  for (let i = 0; i < 14; i++) { const r = {}; for (const k of keys) r[k] = RANGES[k][0] + Math.random() * (RANGES[k][1] - RANGES[k][0]); seeds.push(r); }
  for (const sd of seeds) {
    let p = clampP({ flex: 30, abd: 20, hflex: 0, rot: 0, elbow: 60, pron: 0, wflex: 0, wdev: 0, ...sd });
    let c = evalP(p).cost;
    for (const step of [24, 12, 6, 3, 1.5]) {
      let improved = true;
      while (improved) {
        improved = false;
        for (const k of keys) for (const dd of [step, -step]) {
          const q = clampP({ ...p, [k]: p[k] + dd }); const cq = evalP(q).cost;
          if (cq < c - 1e-6) { p = q; c = cq; improved = true; }
        }
      }
    }
    if (!best || c < best.c) best = { c, p };
  }
  const r = evalP(best.p);
  const p = Object.fromEntries(Object.entries(best.p).map(([k, v]) => [k, Math.round(v)]));
  return JSON.stringify(p) + `  // err pos ${(r.pe * 100).toFixed(1)}cm dir ${r.dAng.toFixed(0)}° face ${r.fAng.toFixed(0)}°`;
};
window.fitArmIK = (exId, t, target, side = 0) => {
  const e = byId(exId);
  const base = samplePose(e, t, side);
  const s = base.props.racket; const rig = stage.rig; const sg = s === 'L' ? 1 : -1;
  const G = new THREE.Vector3(...target.grip), D = new THREE.Vector3(...target.dir).normalize();
  const F = new THREE.Vector3(...target.face); F.addScaledVector(D, -F.dot(D)).normalize();
  rig.apply(base);
  const S = rig.limbs[s + 'A'].a.getWorldPosition(new THREE.Vector3());
  const ax = G.clone().sub(S).normalize();
  const u = new THREE.Vector3(0, -1, 0).addScaledVector(ax, ax.y).normalize();
  const v = new THREE.Vector3().crossVectors(ax, u);
  const hintAt = (phi) => u.clone().multiplyScalar(Math.cos(phi * Math.PI / 180)).addScaledVector(v, Math.sin(phi * Math.PI / 180));
  const R = { phi: [-180, 180], pron: [-85, 85], wflex: [-60, 50], wdev: [-25, 28] };
  const evalP = (p) => {
    const h = hintAt(p.phi);
    let tt = G.clone(); let r;
    for (let it = 0; it < 3; it++) {
      const pose = structuredClone(base);
      pose[s] = { mode: 'ik', space: 'world', t: tt.toArray(), hint: h.toArray(), pron: p.pron, wflex: p.wflex, wdev: p.wdev, grip: 1 };
      rig.apply(pose); r = rig.racketFrame(s);
      tt.add(G.clone().sub(r.grip));
    }
    const pe = r.grip.distanceTo(G), de = 1 - r.dir.dot(D), fe = 1 - r.face.dot(F);
    const reg = ((p.wflex ** 2 + p.wdev ** 2) / 3600) * 0.4 + (p.pron ** 2 / 8100) * 0.2;
    return { cost: pe * pe * 400 + de * 6 + fe * 4 + reg, pe, de, fe, t: tt, h, flex: rig.state.arms[s].flex };
  };
  const clampP = (p) => { for (const k in R) p[k] = Math.max(R[k][0], Math.min(R[k][1], p[k])); return p; };
  let best = null;
  for (let phi = -180; phi < 180; phi += 30) for (const pron of [-60, 0, 60]) {
    let p = { phi, pron, wflex: 0, wdev: 0 }; let c = evalP(p).cost;
    for (const step of [16, 8, 4, 2, 1]) { let imp = true; while (imp) { imp = false; for (const k in R) for (const dd of [step, -step]) { const q = clampP({ ...p, [k]: p[k] + dd }); const cq = evalP(q).cost; if (cq < c - 1e-6) { p = q; c = cq; imp = true; } } } }
    if (!best || c < best.c) best = { c, p };
  }
  const r = evalP(best.p);
  const f3 = (x) => x.toArray().map(n => +n.toFixed(3));
  const arm = { mode: 'ik', space: 'world', t: f3(r.t), hint: f3(r.h), pron: Math.round(best.p.pron), wflex: Math.round(best.p.wflex), wdev: Math.round(best.p.wdev), grip: 1 };
  return JSON.stringify(arm).replace(/"(\w+)":/g, '$1: ').replace(/"/g, "'") + ` // elbow ${Math.round(r.flex)}° err ${(r.pe * 100).toFixed(1)}cm dir ${(Math.acos(1 - r.de) * 57.3).toFixed(0)}° face ${(Math.acos(Math.max(-1, 1 - r.fe)) * 57.3).toFixed(0)}°`;
};
window.fitWrist = (exId, t, target, side = 0) => {
  const e = byId(exId);
  const base = samplePose(e, t, side);
  const s = base.props.racket; const rig = stage.rig;
  const G = new THREE.Vector3(...target.grip), D = new THREE.Vector3(...target.dir).normalize();
  const F = new THREE.Vector3(...target.face); F.addScaledVector(D, -F.dot(D)).normalize();
  const H = target.hint;
  const R = { pron: [-85, 85], wflex: [-60, 50], wdev: [-25, 28] };
  const evalP = (p) => {
    let tt = G.clone(); let r;
    for (let it = 0; it < 3; it++) {
      const pose = structuredClone(base);
      pose[s] = { mode: 'ik', space: 'world', t: tt.toArray(), hint: H, pron: p.pron, wflex: p.wflex, wdev: p.wdev, grip: 1 };
      rig.apply(pose); r = rig.racketFrame(s); tt.add(G.clone().sub(r.grip));
    }
    const de = 1 - r.dir.dot(D), fe = 1 - r.face.dot(F);
    const reg = ((p.wflex ** 2 + p.wdev ** 2) / 3600) * 0.3 + (p.pron ** 2 / 8100) * 0.15;
    return { cost: de * (target.wd ?? 6) + fe * (target.wf ?? 4) + reg, de, fe, t: tt, flex: rig.state.arms[s].flex, dir: r.dir, face: r.face };
  };
  const clampP = (p) => { for (const k in R) p[k] = Math.max(R[k][0], Math.min(R[k][1], p[k])); return p; };
  let best = null;
  for (const pron of [-70, -35, 0, 35, 70]) for (const wflex of [-40, 0, 30]) {
    let p = { pron, wflex, wdev: 0 }; let c = evalP(p).cost;
    for (const step of [16, 8, 4, 2, 1]) { let imp = true; while (imp) { imp = false; for (const k in R) for (const dd of [step, -step]) { const q = clampP({ ...p, [k]: p[k] + dd }); const cq = evalP(q).cost; if (cq < c - 1e-6) { p = q; c = cq; imp = true; } } } }
    if (!best || c < best.c) best = { c, p };
  }
  const r = evalP(best.p);
  const f3 = (x) => x.toArray().map(n => +n.toFixed(3));
  const f2 = (x) => x.toArray().map(n => +n.toFixed(2));
  return `{ mode: 'ik', space: 'world', t: [${f3(r.t)}], hint: [${H}], pron: ${Math.round(best.p.pron)}, wflex: ${Math.round(best.p.wflex)}, wdev: ${Math.round(best.p.wdev)}, grip: 1 } // elbow ${Math.round(r.flex)}° dir err ${(Math.acos(1 - r.de) * 57.3).toFixed(0)}° face err ${(Math.acos(Math.max(-1, 1 - r.fe)) * 57.3).toFixed(0)}° got dir ${f2(r.dir)} face ${f2(r.face)}`;
};
window.keyClear = (exId, side = 0) => {
  const e = byId(exId); const rig = stage.rig; const out = [];
  const V = THREE.Vector3; const wp = (n) => rig.b[n].getWorldPosition(new V());
  const segDist = (p1, q1, p2, q2) => { const d1 = q1.clone().sub(p1), d2 = q2.clone().sub(p2), r = p1.clone().sub(p2); const a = d1.dot(d1), ee = d2.dot(d2), f = d2.dot(r); let s, t; const c = d1.dot(r), b = d1.dot(d2), den = a * ee - b * b; s = den > 1e-9 ? Math.min(1, Math.max(0, (b * f - c * ee) / den)) : 0; t = (b * s + f) / ee; if (t < 0) { t = 0; s = Math.min(1, Math.max(0, -c / a)); } else if (t > 1) { t = 1; s = Math.min(1, Math.max(0, (b - c) / a)); } return p1.clone().addScaledVector(d1, s).distanceTo(p2.clone().addScaledVector(d2, t)); };
  for (let f = 0; f < 144; f++) {
    const ph = f / 144; const pose = samplePose(e, ph, side); rig.apply(pose);
    const tA = wp('Hips'), tB = wp('Spine2'); const msg = [];
    for (const s of ['Left', 'Right']) {
      const ba = segDist(wp(s + 'Arm').lerp(wp(s + 'ForeArm'), 0.35), wp(s + 'ForeArm'), tA, tB) - 0.16;
      const fa = segDist(wp(s + 'ForeArm'), wp(s + 'Hand'), tA, tB) - 0.15;
      const fl = rig.state.arms[s[0]].flex;
      if (ba < -0.015) msg.push(`${s} braccio-busto ${ba.toFixed(3)}`);
      if (fa < -0.015) msg.push(`${s} avambr-busto ${fa.toFixed(3)}`);
      if (fl > 150) msg.push(`${s} gomito ${fl.toFixed(0)}`);
    }
    const rs = pose.props && pose.props.racket;
    if (rs) { const r = rig.racketFrame(rs); const h0 = r.grip.clone().addScaledVector(r.dir, 0.16), h1 = r.grip.clone().addScaledVector(r.dir, 0.42);
      const dh = segDist(h0, h1, wp('Head'), wp('Head').add(new V(0, 0.12, 0))) - 0.13; if (dh < -0.015) msg.push(`racchetta-testa ${dh.toFixed(3)}`); }
    if (msg.length) out.push(`ph ${ph.toFixed(3)}: ${msg.join(', ')}`);
  }
  return out.join('\n');
};
window.lowScan = (exId, side = 0) => { const e = byId(exId); const out = []; for (let f = 0; f < 60; f++) { const pose = samplePose(e, f / 60, side); stage.rig.apply(pose); const lb = window.lowByBone(); const bad = Object.entries(lb).filter(([k, v]) => v < -0.01); if (bad.length) out.push(`ph ${(f / 60).toFixed(3)} ${JSON.stringify(bad)} FR ${JSON.stringify(pose.FR)} FL ${JSON.stringify(pose.FL)}`); } return out.join('\n'); };
window.slideScan = (exId, side = 0) => { const e = byId(exId); const out = []; let prev = null; const V = THREE.Vector3; for (let f = 0; f < 72; f++) { const pose = samplePose(e, f / 72, side); stage.rig.apply(pose); const b = ['LeftToeBase', 'RightToeBase'].map(n => stage.rig.b[n].getWorldPosition(new V())); if (prev) ['L', 'R'].forEach((s, k) => { if (!(pose['F' + s].y > 0.001) && !prev[k].air) { const d = Math.hypot(b[k].x - prev[k].p.x, b[k].z - prev[k].p.z); if (d > 0.002) out.push(`f${f} ${s} ${d.toFixed(4)} ${JSON.stringify(pose['F' + s])}`); } }); prev = ['L', 'R'].map((s, k) => ({ p: b[k], air: pose['F' + s].y > 0.001 })); } return out.join('\n'); };
// racket frame + arm state at each key (or given phases)
window.racketAt = (exId, ts, side = 0) => {
  const e = byId(exId); const rig = stage.rig; const out = [];
  const list = ts || e.keys.map(k => k.t);
  const f2 = (v) => v.toArray().map(n => +n.toFixed(2));
  for (const t of list) {
    const pose = samplePose(e, t, side); rig.apply(pose);
    const s = pose.props && pose.props.racket; if (!s) continue;
    const r = rig.racketFrame(s); const head = r.grip.clone().addScaledVector(r.dir, 0.3);
    const hp = rig.b.Head.getWorldPosition(new THREE.Vector3());
    out.push(`t=${t} grip ${f2(r.grip)} dir ${f2(r.dir)} face ${f2(r.face)} headC ${f2(head)} | head ${f2(hp)} | L ${JSON.stringify(Object.fromEntries(Object.entries(rig.state.arms.L).map(([k,v])=>[k,typeof v==='number'?Math.round(v):v])))}`);
  }
  return out.join('\n');
};
// keep the FK arm angles of a key, search pron/wflex/wdev for a racket dir + face (world)
window.fitWristFK = (exId, t, target, side = 0) => {
  const e = byId(exId); const base = samplePose(e, t, side);
  const s = base.props.racket; const rig = stage.rig;
  const D = new THREE.Vector3(...target.dir).normalize();
  const F = new THREE.Vector3(...target.face); F.addScaledVector(D, -F.dot(D)).normalize();
  const R = { pron: [-85, 85], wflex: [-60, 50], wdev: [-25, 28] };
  const evalP = (p) => { const pose = structuredClone(base); Object.assign(pose[s], p); rig.apply(pose); const r = rig.racketFrame(s);
    const de = 1 - r.dir.dot(D), fe = 1 - r.face.dot(F); const reg = ((p.wflex ** 2 + p.wdev ** 2) / 3600) * 0.3 + (p.pron ** 2 / 8100) * 0.15;
    return { cost: de * (target.wd ?? 6) + fe * (target.wf ?? 4) + reg, de, fe }; };
  const clampP = (p) => { for (const k in R) p[k] = Math.max(R[k][0], Math.min(R[k][1], p[k])); return p; };
  let best = null;
  for (const pron of [-70, -35, 0, 35, 70]) for (const wflex of [-40, 0, 30]) {
    let p = { pron, wflex, wdev: 0 }; let c = evalP(p).cost;
    for (const step of [16, 8, 4, 2, 1]) { let imp = true; while (imp) { imp = false; for (const k in R) for (const dd of [step, -step]) { const q = clampP({ ...p, [k]: p[k] + dd }); const cq = evalP(q).cost; if (cq < c - 1e-6) { p = q; c = cq; imp = true; } } } }
    if (!best || c < best.c) best = { c, p };
  }
  const r = evalP(best.p);
  return `pron: ${best.p.pron}, wflex: ${best.p.wflex}, wdev: ${best.p.wdev} // dir err ${(Math.acos(1 - r.de) * 57.3).toFixed(0)}° face err ${(Math.acos(Math.max(-1, 1 - r.fe)) * 57.3).toFixed(0)}°`;
};
// fit all FK racket-arm angles to grip + dir + face, staying close to a seed and to a
// comfortable wrist (small wflex/wdev, moderate pronation)
window.fitArmNear = (exId, t, target, side = 0) => {
  const e = byId(exId); const base = samplePose(e, t, side);
  const s = base.props.racket; const rig = stage.rig;
  const G = new THREE.Vector3(...target.grip), D = new THREE.Vector3(...target.dir).normalize();
  const F = new THREE.Vector3(...target.face); F.addScaledVector(D, -F.dot(D)).normalize();
  const seed = { ...RANGES0, ...Object.fromEntries(Object.keys(RANGES).map(k => [k, base[s][k] || 0])), ...(target.seed || {}) };
  const keys = Object.keys(RANGES);
  const evalP = (p) => { const pose = structuredClone(base); Object.assign(pose[s], p); rig.apply(pose); const r = rig.racketFrame(s);
    const pe = r.grip.distanceTo(G), de = 1 - r.dir.dot(D), fe = 1 - r.face.dot(F);
    let near = 0; for (const k of ['flex', 'abd', 'hflex', 'rot', 'elbow']) near += ((p[k] - seed[k]) / 60) ** 2;
    const comfort = (p.wflex ** 2 + p.wdev ** 2) / 1600 + Math.max(0, Math.abs(p.pron) - 50) ** 2 / 900;
    const ee = target.elbow ? rig.b.RightForeArm.getWorldPosition(new THREE.Vector3()).distanceTo(new THREE.Vector3(...target.elbow)) : 0;
    return { cost: pe * pe * 300 + ee * ee * 200 + de * 8 + fe * (target.wf ?? 4) + near * (target.wn ?? 0.3) + comfort * 0.5, pe, de, fe }; };
  const clampP = (p) => { for (const k of keys) p[k] = Math.max(RANGES[k][0], Math.min(RANGES[k][1], p[k])); return p; };
  let p = clampP({ ...seed }); let c = evalP(p).cost;
  for (const step of [16, 8, 4, 2, 1]) { let imp = true; while (imp) { imp = false; for (const k of keys) for (const dd of [step, -step]) { const q = clampP({ ...p, [k]: p[k] + dd }); const cq = evalP(q).cost; if (cq < c - 1e-6) { p = q; c = cq; imp = true; } } } }
  const r = evalP(p);
  return Object.entries(p).map(([k, v]) => `${k}: ${Math.round(v)}`).join(', ') + ` // pos ${(r.pe * 100).toFixed(1)}cm dir ${(Math.acos(1 - r.de) * 57.3).toFixed(0)}° face ${(Math.acos(Math.max(-1, 1 - r.fe)) * 57.3).toFixed(0)}°`;
};
const RANGES0 = { flex: 0, abd: 0, hflex: 0, rot: 0, elbow: 90, pron: 0, wflex: 0, wdev: 0 };
// full racket-head sweep: rim + face points against body capsules (positive = gap)
window.racketSweep = (exId, side = 0, N = 120) => {
  const e = byId(exId); const rig = stage.rig; const V = THREE.Vector3; const out = [];
  const wp = (n) => rig.b[n].getWorldPosition(new V());
  const segD = (p, a, b) => { const ab = b.clone().sub(a); const t = Math.max(0, Math.min(1, p.clone().sub(a).dot(ab) / ab.lengthSq())); return p.distanceTo(a.clone().addScaledVector(ab, t)); };
  const local = []; for (let k = 0; k < 24; k++) { const a = k / 24 * Math.PI * 2; local.push([0.13 * Math.cos(a), 0.262 + 0.143 * Math.sin(a)]); }
  for (const y of [0.18, 0.262, 0.34]) for (const x of [-0.07, 0, 0.07]) local.push([x, y]);
  local.push([0, 0.15], [0, 0.1]);
  for (let f = 0; f < N; f++) {
    const t = f / N; const pose = samplePose(e, t, side); rig.apply(pose);
    const s = pose.props && pose.props.racket; if (!s) continue;
    const r = rig.racketFrame(s); const wx = new V().crossVectors(r.dir, r.face).normalize();
    const o = s === 'L' ? 'R' : 'L'; const S = { L: 'Left', R: 'Right' };
    const caps = [['busto', wp('Hips'), wp('Spine2'), 0.12], ['petto', wp('Spine2'), wp('Neck'), 0.11], ['testa', wp('Head'), wp('Head').add(new V(0, 0.14, 0)), 0.1],
      ['braccio-' + o, wp(S[o] + 'Arm'), wp(S[o] + 'ForeArm'), 0.045], ['coscia-L', wp('LeftUpLeg'), wp('LeftLeg'), 0.08], ['coscia-R', wp('RightUpLeg'), wp('RightLeg'), 0.08],
      ['braccio-' + s, wp(S[s] + 'Arm').lerp(wp(S[s] + 'ForeArm'), 0.2), wp(S[s] + 'ForeArm'), 0.045], ['avamb-' + s, wp(S[s] + 'ForeArm'), wp(S[s] + 'ForeArm').lerp(wp(S[s] + 'Hand'), 0.6), 0.035]];
    const attached = pose[o] && pose[o].attachW > 0.05;
    if (!attached) caps.push(['avamb-' + o, wp(S[o] + 'ForeArm'), wp(S[o] + 'Hand'), 0.035], ['mano-' + o, wp(S[o] + 'Hand'), wp(S[o] + 'HandMiddle2'), 0.03]);
    let worst = { d: 9 };
    for (const [x, y] of local) { const p = r.grip.clone().addScaledVector(r.dir, y).addScaledVector(wx, x);
      for (const [n, a, b, rad] of caps) { const d = segD(p, a, b) - rad - 0.02; if (d < worst.d) worst = { d, n, x, y }; } }
    out.push(`${t.toFixed(3)} ${worst.d.toFixed(3)} ${worst.n} (${worst.x.toFixed(2)},${worst.y.toFixed(2)})${worst.d < 0 ? '  <<<' : ''}`);
  }
  return out.join('\n');
};
// racket head vs real skinned mesh vertices: counts vertices inside the head volume, by bone
const penCount = (pose, pad = 0.01) => {
  const rig = stage.rig; const V = THREE.Vector3; const v = new V();
  rig.apply(pose); stage.model.updateMatrixWorld(true);
  const s = pose.props && pose.props.racket; if (!s) return { n: 0, hits: {} };
  const meshes = []; stage.model.traverse(o => { if (o.isSkinnedMesh) meshes.push(o); });
  const r = rig.racketFrame(s); const wx = new V().crossVectors(r.dir, r.face).normalize();
  const o = s === 'L' ? 'Right' : 'Left'; const own = s === 'L' ? 'Left' : 'Right';
  const attached = pose[s === 'L' ? 'R' : 'L'].attachW > 0.05;
  const hits = {}; let n = 0;
  for (const m of meshes) {
    const sk = m.skeleton; const si = m.geometry.attributes.skinIndex, sw = m.geometry.attributes.skinWeight;
    for (let i = 0; i < m.geometry.attributes.position.count; i++) {
      let bi = 0, bw = -1; for (let k = 0; k < 4; k++) { const w = sw.getComponent(i, k); if (w > bw) { bw = w; bi = si.getComponent(i, k); } }
      const bn = sk.bones[bi].name.replace('mixamorig', '').replace(':', '');
      if (bn.startsWith(own + 'Hand')) continue;
      if (attached && bn.startsWith(o + 'Hand')) continue;
      m.getVertexPosition(i, v); m.localToWorld(v);
      const d = v.clone().sub(r.grip); const y = d.dot(r.dir), x = d.dot(wx), z = d.dot(r.face);
      if (y < 0.09 || y > 0.415 || Math.abs(z) > 0.022 + pad) continue;
      const ex = x / (0.13 + pad), ey = (y - 0.262) / (0.143 + pad);
      if (ex * ex + ey * ey > 1 && !(y < 0.17 && Math.abs(x) < 0.05)) continue;
      n++; hits[bn] = (hits[bn] || 0) + 1; (hits._y = hits._y || []).push([+x.toFixed(2), +y.toFixed(2), +z.toFixed(3)]);
    }
  }
  return { n, hits };
};
const mergeOver = (pose, over) => { if (over) for (const k in over) pose[k] = typeof over[k] === 'object' && !Array.isArray(over[k]) ? { ...pose[k], ...over[k] } : over[k]; return pose; };
window.racketMesh = (exId, side = 0, N = 120) => {
  const e = byId(exId); const out = [];
  for (let f = 0; f < N; f++) { const t = f / N; const { n, hits } = penCount(samplePose(e, t, side)); if (n) out.push(`${t.toFixed(3)} n=${n} ${JSON.stringify(hits)}`); }
  return out.join('\n') || 'nessuna';
};
window.penAt = (exId, t, side = 0, overs = [{}]) => overs.map(o => { const r = penCount(mergeOver(samplePose(byId(exId), t, side), o)); const rf = stage.rig.racketFrame('R'); return { o, n: r.n, dir: rf.dir.toArray().map(x => +x.toFixed(2)), face: rf.face.toArray().map(x => +x.toFixed(2)) }; });
// true min distance racket-head surface (approx: outline + grid) to body mesh vertices (excl. holding hands)
window.racketGap = (exId, side = 0, N = 96) => {
  const e = byId(exId); const rig = stage.rig; const V = THREE.Vector3; const v = new V(); const out = [];
  const meshes = []; stage.model.traverse(o => { if (o.isSkinnedMesh) meshes.push(o); });
  const local = []; for (let k = 0; k < 32; k++) { const a = k / 32 * Math.PI * 2; local.push([0.13 * Math.cos(a), 0.262 + 0.143 * Math.sin(a)]); }
  for (let y = 0.16; y < 0.4; y += 0.04) for (let x = -0.1; x <= 0.1; x += 0.04) if ((x / 0.13) ** 2 + ((y - 0.262) / 0.143) ** 2 < 1) local.push([x, y]);
  const one = (pose) => { rig.apply(pose); stage.model.updateMatrixWorld(true);
    const s = pose.props && pose.props.racket; if (!s) return null;
    const r = rig.racketFrame(s); const wx = new V().crossVectors(r.dir, r.face).normalize();
    const pts = local.map(([x, y]) => r.grip.clone().addScaledVector(r.dir, y).addScaledVector(wx, x));
    const o = s === 'L' ? 'Right' : 'Left'; const own = s === 'L' ? 'Left' : 'Right';
    const attached = pose[s === 'L' ? 'R' : 'L'].attachW > 0.05;
    let best = { d: 9 };
    for (const m of meshes) {
      const sk = m.skeleton; const si = m.geometry.attributes.skinIndex, sw = m.geometry.attributes.skinWeight;
      for (let i = 0; i < m.geometry.attributes.position.count; i += 2) {
        let bi = 0, bw = -1; for (let k = 0; k < 4; k++) { const w = sw.getComponent(i, k); if (w > bw) { bw = w; bi = si.getComponent(i, k); } }
        const bn = sk.bones[bi].name.replace('mixamorig', '').replace(':', '');
        if (bn.startsWith(own + 'Hand') || bn === own + 'ForeArm') continue;
        if (attached && (bn.startsWith(o + 'Hand') || bn === o + 'ForeArm')) continue;
        m.getVertexPosition(i, v); m.localToWorld(v);
        for (const p of pts) { const d = Math.abs(v.clone().sub(p).dot(r.face)) < 0.03 ? p.distanceTo(v) : 9; if (d < best.d) best = { d, bn }; }
      }
    }
    return best; };
  if (window.__gapOver) return window.__gapOver.map(([t, o]) => { const b = one(mergeOver(samplePose(e, t, side), o)); return `${t} ${JSON.stringify(o)} ${b.d.toFixed(3)} ${b.bn}`; }).join('\n');
  for (let f = 0; f < N; f++) { const t = f / N; const best = one(samplePose(e, t, side)); if (best) out.push(`${t.toFixed(3)} ${best.d.toFixed(3)} ${best.bn || ''}`); }
  return out.join('\n');
};

window.showCourt = (ex, t, side = 0, shot, cam) => {
  const e = byId(ex); stage.setCourt(true);
  const sh = e.court.shots.find((s) => s.id === shot) || e.court.shots[0];
  const aim = aimFor(e, side, sh, stage.rig, samplePose);
  stage.court.configure(e.court, impactPoint(stage.rig, samplePose(e, e.court.hit, side, aim)), side, sh.id, e.dur);
  const r = window.show(ex, t, side, cam, null, aim);
  stage.court.update(t, stage.camera.aspect); stage.render(0.016);
  const o = stage.court.out; const f = (v) => v.toArray().map(n => +n.toFixed(2));
  return { netY: o.netY && +o.netY.toFixed(2), events: o.events.map(e => `${e.type}@${e.t.toFixed(2)} ${f(e.p)}`), lobApex: +(stage.court.lob.O.y + stage.court.lob.v.y ** 2 / 19.62).toFixed(2), aim: [Math.round(aim.yaw), Math.round(aim.hflex)] };
};
window.armProbe = (exId, t, overs, side = 0) => overs.map((o) => {
  const pose = mergeOver(samplePose(byId(exId), t, side), o); const rig = stage.rig; rig.apply(pose);
  const V = THREE.Vector3; const wp = (n) => rig.b[n].getWorldPosition(new V());
  const seg = (p1, q1, p2, q2) => { let best = 9; for (let i = 0; i <= 20; i++) { const a = p1.clone().lerp(q1, i / 20); const ab = q2.clone().sub(p2); const tt = Math.max(0, Math.min(1, a.clone().sub(p2).dot(ab) / ab.lengthSq())); best = Math.min(best, a.distanceTo(p2.clone().addScaledVector(ab, tt))); } return best; };
  const d = seg(wp('RightArm').lerp(wp('RightForeArm'), 0.35), wp('RightForeArm'), wp('Hips'), wp('Spine2')) - 0.16;
  const r = rig.racketFrame('R'); const f = (v) => v.toArray().map((x) => +x.toFixed(2));
  return `${JSON.stringify(o.R)} clr ${d.toFixed(3)} grip ${f(r.grip)} dir ${f(r.dir)} face ${f(r.face)} elbow ${f(wp('RightForeArm'))}`;
}).join('\n');
window.aimCheck = (exId) => { const e = byId(exId); const out = [];
  for (const side of [0, 1]) for (const sh of e.court.shots) { const aim = aimFor(e, side, sh, stage.rig, samplePose);
    const pose = samplePose(e, e.court.hit, side, aim); stage.rig.apply(pose); const r = stage.rig.racketFrame(pose.props.racket);
    const n = r.face.clone().multiplyScalar(r.face.z < 0 ? -1 : 1); const H = r.grip.clone().addScaledVector(r.dir, 0.262);
    const tgt = Math.atan2(sh.land[0] - H.x, sh.land[1] - H.z) * 57.3, f = Math.atan2(n.x, n.z) * 57.3;
    out.push(`${side ? 'mancino ' : 'destro  '} ${sh.id.padEnd(6)} target ${tgt.toFixed(0)}° piatto ${f.toFixed(0)}° aim yaw ${aim.yaw.toFixed(0)} hflex ${aim.hflex.toFixed(0)} fine ${aim.yawF.toFixed(0)}`); }
  return out.join('\n'); };
window.aimSafety = (exId) => { const e = byId(exId); const rig = stage.rig; const V = THREE.Vector3; const out = [];
  const wp = (n) => rig.b[n].getWorldPosition(new V());
  const seg = (p1, q1, p2, q2) => { let best = 9; for (let i = 0; i <= 12; i++) { const a = p1.clone().lerp(q1, i / 12); const ab = q2.clone().sub(p2); const tt = Math.max(0, Math.min(1, a.clone().sub(p2).dot(ab) / ab.lengthSq())); best = Math.min(best, a.distanceTo(p2.clone().addScaledVector(ab, tt))); } return best; };
  for (const side of [0, 1]) for (const sh of e.court.shots) { const aim = aimFor(e, side, sh, rig, samplePose); let arm = 9, rh = 9, reach = 0, slide = 0, prev = null;
    for (let f = 0; f < 120; f++) { const t = f / 120; const pose = samplePose(e, t, side, aim); rig.apply(pose); const rs = pose.props.racket; const S = rs === 'R' ? 'Right' : 'Left';
      arm = Math.min(arm, seg(wp(S + 'Arm').lerp(wp(S + 'ForeArm'), 0.35), wp(S + 'ForeArm'), wp('Hips'), wp('Spine2')) - 0.16);
      const r = rig.racketFrame(rs); rh = Math.min(rh, seg(r.grip.clone().addScaledVector(r.dir, 0.16), r.grip.clone().addScaledVector(r.dir, 0.42), wp('Head'), wp('Head').add(new V(0, 0.12, 0))) - 0.12 - 0.13);
      for (const s of ['L', 'R']) reach = Math.max(reach, rig.state.legs[s].reachError);
      const b = ['LeftToeBase', 'RightToeBase'].map(wp); if (prev) ['L', 'R'].forEach((s, k) => { if (!(pose['F' + s].y > 0.001) && !prev[k].air) slide = Math.max(slide, Math.hypot(b[k].x - prev[k].p.x, b[k].z - prev[k].p.z)); }); prev = ['L', 'R'].map((s, k) => ({ p: b[k], air: pose['F' + s].y > 0.001 })); }
    out.push(`${side ? 'mancino' : 'destro '} ${sh.id.padEnd(6)} braccio-busto ${arm.toFixed(3)} racchetta-testa ${rh.toFixed(3)} gambe ${reach.toFixed(3)} scivolo ${slide.toFixed(4)}`); }
  return out.join('\n'); };
window.handInfo = () => { const rig = stage.rig; const V = THREE.Vector3; const out = [];
  const hand = rig.b.RightHand; const inv = hand.matrixWorld.clone().invert();
  const names = Object.keys(rig.b).filter((n) => n.startsWith('RightHand'));
  for (const n of names) { const p = rig.b[n].getWorldPosition(new V()).applyMatrix4(inv); out.push(`${n.padEnd(22)} local(cm) ${p.toArray().map((x) => x.toFixed(1)).join(', ')}`); }
  const g = rig.gripPoint('R').applyMatrix4(inv); out.push('grip ' + g.toArray().map((x) => x.toFixed(1)).join(', '));
  return out.join('\n'); };
// keep each racket key where it was (grip, axis, face) after changing the grip: refit forearm/wrist
window.refitGrip = (exId, twistOld = 0, extra = []) => { const e = byId(exId); const rig = stage.rig; const out = []; const seen = new Set();
  for (const k of e.keys) { if (seen.has(k.pose)) continue; seen.add(k.pose); const base = structuredClone(k.pose); const a = base.R;
    if (!base.props || base.props.racket !== 'R' || !a || a.mode !== 'fk') continue;
    rig.racketTwist = twistOld; rig.apply(base); const o = rig.racketFrame('R'); const G = o.grip.clone(), D = o.dir.clone(), F = o.face.clone();
    rig.racketTwist = undefined;
    const keys = ['pron', 'wflex', 'wdev', 'rot', ...extra];
    const lim = { pron: [-85, 85], wflex: [-70, 70], wdev: [-30, 25], rot: [-90, 90], elbow: [0, 140], hflex: [-40, 140], abd: [-30, 170], flex: [-60, 170] };
    const ev = (p) => { const pose = structuredClone(base); Object.assign(pose.R, p); rig.apply(pose); const r = rig.racketFrame('R');
      return r.grip.distanceTo(G) ** 2 * 400 + (1 - r.dir.dot(D)) * 10 + (1 - r.face.dot(F)) * 10 + ((p.rot - (a.rot || 0)) / 90) ** 2 * 0.5 + extra.reduce((acc, kk) => acc + ((p[kk] - (a[kk] || 0)) / 60) ** 2 * 0.5, 0) + (Math.max(0, Math.abs(p.wflex) - 45) / 30) ** 2; };
    let p = { pron: a.pron || 0, wflex: a.wflex || 0, wdev: a.wdev || 0, rot: a.rot || 0 }; for (const kk of extra) p[kk] = a[kk] || 0; let c = ev(p);
    for (const st of [16, 8, 4, 2, 1, 0.5]) { let imp = true; while (imp) { imp = false; for (const kk of keys) for (const d of [st, -st]) { const q = { ...p, [kk]: Math.max(lim[kk][0], Math.min(lim[kk][1], p[kk] + d)) }; const cq = ev(q); if (cq < c - 1e-7) { p = q; c = cq; imp = true; } } } }
    const pose = structuredClone(base); Object.assign(pose.R, p); rig.apply(pose); const r = rig.racketFrame('R');
    out.push(`t=${k.t} old {pron:${a.pron || 0}, wflex:${a.wflex || 0}, wdev:${a.wdev || 0}, rot:${a.rot || 0}} -> ${JSON.stringify(Object.fromEntries(Object.entries(p).map(([k, v]) => [k, Math.round(v)])))} err pos ${(r.grip.distanceTo(G) * 100).toFixed(1)}cm dir ${(Math.acos(Math.min(1, r.dir.dot(D))) * 57.3).toFixed(0)}° face ${(Math.acos(Math.min(1, r.face.dot(F))) * 57.3).toFixed(0)}°`); }
  rig.racketTwist = undefined; return out.join('\n'); };
// fit finger curls (and the thumb) so that every finger wraps the handle: segments on the handle surface
window.fitFingers = (exId = 'volee-dritto', t = 0, s = 'R') => { const e = byId(exId); const rig = stage.rig; const V = THREE.Vector3; const Qt = THREE.Quaternion;
  const pose = samplePose(e, t, s === 'R' ? 0 : 1); rig.apply(pose);
  const side = s === 'L' ? 'Left' : 'Right'; const sg = s === 'L' ? 1 : -1;
  const r = rig.racketFrame(s); const C = r.grip.clone(), A = r.dir.clone();
  const target = 0.0172 + 0.0085; // handle radius + finger radius
  const dAx = (p) => { const v = p.clone().sub(C); const along = v.dot(A); return { d: v.addScaledVector(A, -along).length(), along }; };
  const bone = (n) => rig.b[`${side}Hand${n}`];
  const wp = (n) => bone(n).getWorldPosition(new V());
  const ax = new V(0, 0, -sg); const out = {};
  for (const f of ['Index', 'Middle', 'Ring', 'Pinky']) { let best = null;
    for (let m = 0; m <= 100; m += 5) for (let p = 0; p <= 110; p += 5) for (let d = 0; d <= 80; d += 5) {
      bone(f + 1).quaternion.copy(new Qt().setFromAxisAngle(ax, m * DEGR)); bone(f + 2).quaternion.copy(new Qt().setFromAxisAngle(ax, p * DEGR)); bone(f + 3).quaternion.copy(new Qt().setFromAxisAngle(ax, d * DEGR));
      bone(f + 1).updateMatrixWorld(true);
      const pts = [1, 2, 3, 4].map((i) => wp(f + i)); let c = 0;
      for (let i = 0; i < 3; i++) for (const u of [0, 0.5, 1]) { if (i === 0 && u === 0) continue; const q = pts[i].clone().lerp(pts[i + 1], u); const { d: dd } = dAx(q); const err = dd - target; c += err < 0 ? err * err * 30 : err * err; }
      c += ((p - 1.2 * d) / 100) ** 2 * 0.0004; // DIP follows PIP
      if (!best || c < best.c) best = { c, m, p, d }; }
    out[f] = [best.m, best.p, best.d, +(Math.sqrt(best.c / 8) * 100).toFixed(2)];
    bone(f + 1).quaternion.copy(new Qt().setFromAxisAngle(ax, best.m * DEGR)); bone(f + 2).quaternion.copy(new Qt().setFromAxisAngle(ax, best.p * DEGR)); bone(f + 3).quaternion.copy(new Qt().setFromAxisAngle(ax, best.d * DEGR)); bone(f + 1).updateMatrixWorld(true); }
  // thumb: Euler on Thumb1, flexion on Thumb2/3 about their local Z; tip towards the middle phalanx of the middle finger
  const mid = wp('Middle2').lerp(wp('Middle3'), 0.5); let best = null;
  for (let x = -60; x <= 60; x += 10) for (let y = -60; y <= 60; y += 10) for (let z = -60; z <= 60; z += 10) for (let f2 = 0; f2 <= 70; f2 += 10) {
    bone('Thumb1').quaternion.setFromEuler(new THREE.Euler(x * DEGR, y * DEGR, z * DEGR)); const qf = new Qt().setFromAxisAngle(new V(0, 0, 1), -sg * f2 * DEGR); bone('Thumb2').quaternion.copy(qf); bone('Thumb3').quaternion.copy(qf);
    bone('Thumb1').updateMatrixWorld(true);
    const pts = [1, 2, 3, 4].map((i) => wp('Thumb' + i)); let c = 0;
    for (let i = 1; i < 3; i++) for (const u of [0, 0.5, 1]) { const q = pts[i].clone().lerp(pts[i + 1], u); const { d: dd } = dAx(q); const err = dd - target; c += err < 0 ? err * err * 30 : err * err; }
    c += pts[3].distanceTo(mid) ** 2 * 0.3;
    if (!best || c < best.c) best = { c, x, y, z, f2 }; }
  out.Thumb = [best.x, best.y, best.z, best.f2, +(Math.sqrt(best.c / 6) * 100).toFixed(2)];
  return JSON.stringify(out); };
const DEGR = Math.PI / 180;
// body metrics in the same convention as the video pose analysis (x = left, y = up, z = net)
window.bodyMetrics = (exId, ts, side = 0, aim = null) => { const e = byId(exId); const rig = stage.rig; const V = THREE.Vector3; const out = [];
  const wp = (n) => rig.b[n].getWorldPosition(new V());
  const yaw = (v) => Math.atan2(v.z, v.x) * 57.3; const ang = (a, b) => Math.acos(Math.max(-1, Math.min(1, a.dot(b) / a.length() / b.length()))) * 57.3;
  out.push(' t     hipYaw shYaw  lean  RelbH  RwrH  Relb  RuaUp RuaOut RuaFwd | LuaUp Lelb | kneeL kneeR  stance');
  for (const t of ts) { const pose = samplePose(e, t, side, aim); rig.apply(pose);
    const hipL = wp('LeftUpLeg'), hipR = wp('RightUpLeg'), shL = wp('LeftArm'), shR = wp('RightArm');
    const hm = hipL.clone().add(hipR).multiplyScalar(0.5), sm = shL.clone().add(shR).multiplyScalar(0.5), tr = sm.clone().sub(hm);
    const lean = Math.atan2(tr.z, tr.y) * 57.3;
    const ua = wp('RightForeArm').sub(shR), fa = wp('RightHand').sub(wp('RightForeArm')), lua = wp('LeftForeArm').sub(shL), lfa = wp('LeftHand').sub(wp('LeftForeArm'));
    const X = shL.clone().sub(shR).normalize(); const Y = tr.clone().addScaledVector(X, -tr.dot(X)).normalize(); const Z = new V().crossVectors(X, Y);
    const u = ua.clone().normalize(), lu = lua.clone().normalize();
    const kn = (a, k, f) => 180 - ang(wp(a).sub(wp(k)), wp(f).sub(wp(k)));
    const st = Math.hypot(wp('LeftFoot').x - wp('RightFoot').x, wp('LeftFoot').z - wp('RightFoot').z);
    const f = (x, n = 0, w = 6) => x.toFixed(n).padStart(w);
    out.push(`${t.toFixed(2)} ${f(yaw(hipL.clone().sub(hipR)))} ${f(yaw(shL.clone().sub(shR)))} ${f(lean, 0, 5)} ${f(wp('RightForeArm').y - shR.y, 2)} ${f(wp('RightHand').y - shR.y, 2, 5)} ${f(180 - ang(ua.clone().negate(), fa), 0, 5)} ${f(u.dot(Y), 2)} ${f(-u.dot(X), 2)} ${f(u.dot(Z), 2)} | ${f(lu.dot(Y), 2, 5)} ${f(180 - ang(lua.clone().negate(), lfa), 0, 4)} | ${f(kn('LeftUpLeg', 'LeftLeg', 'LeftFoot'), 0, 4)} ${f(kn('RightUpLeg', 'RightLeg', 'RightFoot'), 0, 5)} ${f(st, 2)}`); }
  return out.join('\n'); };
// retarget a key onto segment directions measured on the reference video (world, x = left, y = up, z = net)
window.fitBody = (exId, t, tgt, opt = {}) => { const e = byId(exId); const rig = stage.rig; const V = THREE.Vector3;
  const base = structuredClone(opt.pose || samplePose(e, t, 0)); if (opt.over) mergeOver(base, opt.over); const wp = (n) => rig.b[n].getWorldPosition(new V());
  const dirs = () => { const m = (a, b) => wp(a).add(wp(b)).multiplyScalar(0.5); const d = (a, b) => b.sub(a).normalize();
    return { pelvis: d(wp('RightUpLeg'), wp('LeftUpLeg')), shoulders: d(wp('RightArm'), wp('LeftArm')), trunk: d(m('LeftUpLeg', 'RightUpLeg'), m('LeftArm', 'RightArm')),
      Rua: d(wp('RightArm'), wp('RightForeArm')), Rfa: d(wp('RightForeArm'), wp('RightHand')), Lua: d(wp('LeftArm'), wp('LeftForeArm')), Lfa: d(wp('LeftForeArm'), wp('LeftHand')),
      Lth: d(wp('LeftUpLeg'), wp('LeftLeg')), Lsh: d(wp('LeftLeg'), wp('LeftFoot')), Rth: d(wp('RightUpLeg'), wp('RightLeg')), Rsh: d(wp('RightLeg'), wp('RightFoot')) }; };
  const W = { pelvis: 2, shoulders: 3, trunk: 3, Rua: 4, Rfa: 4, Lua: 2, Lfa: 2, Lth: 1, Lsh: 1, Rth: 1, Rsh: 1, ...(opt.w || {}) };
  const T = Object.fromEntries(Object.entries(tgt).filter(([k]) => k in W).map(([k, v]) => [k, new V(...v).normalize()]));
  const R0 = base.R; const L0 = base.L;
  const spec = [['hp', 1, () => base.hips.r[0]], ['hy', 1, () => base.hips.r[1]], ['hr', 1, () => base.hips.r[2]], ['sp', 1, () => base.spine[0]], ['sy', 1, () => base.spine[1]], ['sr', 1, () => base.spine[2] || 0],
    ['px', 0.01, () => base.hips.p[0]], ['py', 0.01, () => base.hips.p[1]], ['pz', 0.01, () => base.hips.p[2]],
    ['flex', 1, () => R0.flex], ['abd', 1, () => R0.abd], ['hflex', 1, () => R0.hflex], ['rot', 1, () => R0.rot], ['elbow', 1, () => R0.elbow]];
  if (opt.left !== false && L0.mode === 'ik' && !(L0.attachW > 0)) spec.push(['lx', 0.01, () => L0.t[0]], ['ly', 0.01, () => L0.t[1]], ['lz', 0.01, () => L0.t[2]]);
  if (opt.step) spec.push(['flx', 0.01, () => base.FL.x], ['flz', 0.01, () => base.FL.z]);
  if (opt.feet) spec.push(['flx', 0.01, () => base.FL.x], ['flz', 0.01, () => base.FL.z], ['frx', 0.01, () => base.FR.x], ['frz', 0.01, () => base.FR.z]);
  if (tgt.racket) spec.push(['pron', 1, () => R0.pron || 0], ['wflex', 1, () => R0.wflex || 0], ['wdev', 1, () => R0.wdev || 0]);
  const p0 = Object.fromEntries(spec.map(([k, , g]) => [k, g()]));
  for (const k of (opt.fix || [])) { const i = spec.findIndex((s) => s[0] === k); if (i >= 0) spec.splice(i, 1); }
  const mk = (p) => { const pose = structuredClone(base); pose.hips = { ...pose.hips, r: [p.hp, p.hy, p.hr], p: [p.px, p.py, p.pz] }; pose.spine = [p.sp, p.sy, p.sr];
    pose.R = { ...pose.R, flex: p.flex, abd: p.abd, hflex: p.hflex, rot: p.rot, elbow: p.elbow };
    if ('pron' in p) Object.assign(pose.R, { pron: p.pron, wflex: p.wflex, wdev: p.wdev });
    if ('lx' in p) pose.L = { ...pose.L, t: [p.lx, p.ly, p.lz] };
    if ('flx' in p) pose.FL = { ...pose.FL, x: p.flx, z: p.flz };
    if ('frx' in p) pose.FR = { ...pose.FR, x: p.frx, z: p.frz };
    return pose; };
  const fill = (p) => ({ ...p0, ...p });
  const ev = (p) => { const pose = mk(fill(p)); rig.apply(pose); const D = dirs(); let c = 0; const err = {};
    for (const k in T) { const a = Math.acos(Math.max(-1, Math.min(1, D[k].dot(T[k])))) * 57.3; err[k] = Math.round(a); c += W[k] * (1 - D[k].dot(T[k])); }
    for (const s of ['L', 'R']) c += rig.state.legs[s].reachError * 50;
    if (tgt.racket) { const r = rig.racketFrame('R'); const rd = new V(...tgt.racket.dir).normalize(), rf = new V(...tgt.racket.face); rf.addScaledVector(rd, -rf.dot(rd)).normalize();
      err.rdir = Math.round(Math.acos(Math.min(1, r.dir.dot(rd))) * 57.3); err.rface = Math.round(Math.acos(Math.max(-1, Math.min(1, r.face.dot(rf)))) * 57.3);
      c += (1 - r.dir.dot(rd)) * (tgt.racket.wd ?? 4) + (1 - r.face.dot(rf)) * (tgt.racket.wf ?? 2.5);
      c += ((p.wflex ** 2 + p.wdev ** 2) / 1600 + Math.max(0, Math.abs(p.pron) - 60) ** 2 / 900) * 0.4 + Math.max(0, p.wdev - 28) ** 2 * 0.02 + Math.max(0, -25 - p.wdev) ** 2 * 0.02 + Math.max(0, Math.abs(p.wflex) - 60) ** 2 * 0.02 + Math.max(0, Math.abs(p.pron) - 85) ** 2 * 0.02; }
    c += ((p.sr || 0) ** 2 + (p.hr || 0) ** 2) / 900 * 0.02 + Math.max(0, (p.elbow ?? 0) - 135) ** 2 * 0.01;
    c += (((p.hp - p0.hp) / 20) ** 2 + ((p.sp - p0.sp) / 20) ** 2 + ((p.hp - p.sp * 0.6 - 4) / 25) ** 2) * (opt.reg ?? 0.05);
    return { c, err }; };
  const lim = { flex: [-40, 180], abd: [-30, 170], hflex: [-40, 140], rot: [-90, 90], elbow: [0, 145], pron: [-90, 90], wflex: [-70, 70], wdev: [-30, 30] };
  let p = { ...p0 }; let c = ev(p).c;
  for (const st of [16, 8, 4, 2, 1, 0.5]) { let imp = true; while (imp) { imp = false; for (const [k, sc] of spec) for (const dd of [st, -st]) { const q = { ...p, [k]: p[k] + dd * sc }; if (lim[k]) q[k] = Math.max(lim[k][0], Math.min(lim[k][1], q[k])); const cq = ev(q).c; if (cq < c - 1e-7) { p = q; c = cq; imp = true; } } } }
  const r = ev(p); const rd = (x, n = 0) => +x.toFixed(n);
  const res = { hips: { p: [rd(p.px, 3), rd(p.py, 3), rd(p.pz, 3)], r: [rd(p.hp), rd(p.hy), rd(p.hr)] }, spine: [rd(p.sp), rd(p.sy), rd(p.sr)],
    R: { flex: rd(p.flex), abd: rd(p.abd), hflex: rd(p.hflex), rot: rd(p.rot), elbow: rd(p.elbow) } };
  if ('pron' in p) Object.assign(res.R, { pron: rd(p.pron), wflex: rd(p.wflex), wdev: rd(p.wdev) });
  if ('lx' in p) res.L = [rd(p.lx, 3), rd(p.ly, 3), rd(p.lz, 3)];
  if ('flx' in p) res.FL = [rd(p.flx, 3), rd(p.flz, 3)];
  if ('frx' in p) res.FR = [rd(p.frx, 3), rd(p.frz, 3)];
  const before = ev(p0).err;
  return JSON.stringify(res) + '\nerr ' + JSON.stringify(r.err) + '\nwas ' + JSON.stringify(before); };
// verify-style arm/torso clearances of the racket arm for override poses at phase t
window.armClr = (exId, t, overs, side = 0) => { const rig = stage.rig; const V = THREE.Vector3; const wp = (n) => rig.b[n].getWorldPosition(new V());
  const segD = (p1, q1, p2, q2) => { let best = 9; for (let i = 0; i <= 20; i++) { const a = p1.clone().lerp(q1, i / 20); const ab = q2.clone().sub(p2); const tt = Math.max(0, Math.min(1, a.clone().sub(p2).dot(ab) / ab.lengthSq())); best = Math.min(best, a.distanceTo(p2.clone().addScaledVector(ab, tt))); } return best; };
  return overs.map((o) => { rig.apply(mergeOver(samplePose(byId(exId), t, side), o)); const A = wp('Hips'), B = wp('Spine2'); const S = side ? 'Left' : 'Right';
    const fa = segD(wp(S + 'ForeArm'), wp(S + 'Hand'), A, B) - 0.15, ua = segD(wp(S + 'Arm').lerp(wp(S + 'ForeArm'), 0.35), wp(S + 'ForeArm'), A, B) - 0.16;
    const r = rig.racketFrame(side ? 'L' : 'R'); const f = (v) => v.toArray().map((x) => +x.toFixed(2));
    return `${JSON.stringify(o.R || {})} avamb ${fa.toFixed(3)} braccio ${ua.toFixed(3)} grip ${f(r.grip)} dir ${f(r.dir)} sh ${f(wp(S + 'Arm'))}`; }).join('\n'); };
