import { Stage } from '../src/scene.js';
import { EXERCISES, samplePose } from '../src/exercises.js';
import { applyProps } from '../src/props.js';
import * as THREE from 'three';
const stage = new Stage(document.getElementById('v'), { modelUrl: 'Xbot.glb', bloom: true, pixelRatio: 1 });
window.stage = stage;
await stage.ready;
const byId = (k) => typeof k === 'number' ? EXERCISES[k] : EXERCISES.find(e => e.id === k);
window.show = (ex, t, side = 0, cam, over) => {
  const e = byId(ex);
  let pose = samplePose(e, t, side);
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
    return { cost: pe * pe * 300 + de * 8 + fe * (target.wf ?? 4) + near * (target.wn ?? 0.3) + comfort * 0.5, pe, de, fe }; };
  const clampP = (p) => { for (const k of keys) p[k] = Math.max(RANGES[k][0], Math.min(RANGES[k][1], p[k])); return p; };
  let p = clampP({ ...seed }); let c = evalP(p).cost;
  for (const step of [16, 8, 4, 2, 1]) { let imp = true; while (imp) { imp = false; for (const k of keys) for (const dd of [step, -step]) { const q = clampP({ ...p, [k]: p[k] + dd }); const cq = evalP(q).cost; if (cq < c - 1e-6) { p = q; c = cq; imp = true; } } } }
  const r = evalP(p);
  return Object.entries(p).map(([k, v]) => `${k}: ${Math.round(v)}`).join(', ') + ` // pos ${(r.pe * 100).toFixed(1)}cm dir ${(Math.acos(1 - r.de) * 57.3).toFixed(0)}° face ${(Math.acos(Math.max(-1, 1 - r.fe)) * 57.3).toFixed(0)}°`;
};
const RANGES0 = { flex: 0, abd: 0, hflex: 0, rot: 0, elbow: 90, pron: 0, wflex: 0, wdev: 0 };
