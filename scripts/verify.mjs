// Biomechanical sanity checks over every frame of every exercise.
// usage: node scripts/verify.mjs  (expects the dist/ server on :8124)
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 900, height: 700 } });
page.on('pageerror', e => console.log('[pageerror]', e.message));
await page.goto('http://localhost:8124/index.html');
await page.waitForFunction(() => window.__app && window.__app.stage.rig, null, { timeout: 60000 });
const res = await page.evaluate(() => {
  const { stage, EXERCISES, samplePose, applyProps } = window.__app;
  const rig = stage.rig; const THREE_V = rig.b.Hips.position.constructor;
  const wp = (n) => rig.b[n].getWorldPosition(new THREE_V());
  const segDist = (p1, q1, p2, q2) => { // closest distance between segments
    const d1 = q1.clone().sub(p1), d2 = q2.clone().sub(p2), r = p1.clone().sub(p2);
    const a = d1.dot(d1), e = d2.dot(d2), f = d2.dot(r); let s, t;
    const c = d1.dot(r), b = d1.dot(d2), den = a * e - b * b;
    s = den > 1e-9 ? Math.min(1, Math.max(0, (b * f - c * e) / den)) : 0;
    t = (b * s + f) / e;
    if (t < 0) { t = 0; s = Math.min(1, Math.max(0, -c / a)); } else if (t > 1) { t = 1; s = Math.min(1, Math.max(0, (b - c) / a)); }
    return p1.clone().addScaledVector(d1, s).distanceTo(p2.clone().addScaledVector(d2, t));
  };
  const v = new THREE_V();
  const minY = () => { let m = Infinity; stage.model.traverse(o => { if (!o.isSkinnedMesh) return; for (let i = 0; i < o.geometry.attributes.position.count; i += 3) { o.getVertexPosition(i, v); o.localToWorld(v); if (v.y < m) m = v.y; } }); return m; };
  const out = [];
  EXERCISES.forEach((ex, i) => {
    const sides = ex.sided ? [0, 1] : [0];
    const r = { name: ex.short, minY: 1, footDetach: 0, knee: [999, -999], elbow: [999, -999], clear: {} , slide: 0};
    const clr = (k, d) => { r.clear[k] = Math.min(r.clear[k] ?? 9, d); };
    for (const side of sides) {
      let prevBall = null;
      for (let f = 0; f < 72; f++) {
        const ph = f / 72;
        const pose = samplePose(ex, ph, side);
        rig.apply(pose); applyProps(stage, ex, pose);
        r.minY = Math.min(r.minY, minY());
        for (const s of ['L', 'R']) {
          const lg = rig.state.legs[s]; const fp = pose['F' + s];
          if (!(fp.y > 0.001)) r.footDetach = Math.max(r.footDetach, lg.reachError);
          r.knee[0] = Math.min(r.knee[0], lg.flex); r.knee[1] = Math.max(r.knee[1], lg.flex);
          const ar = rig.state.arms[s]; r.elbow[0] = Math.min(r.elbow[0], ar.flex); r.elbow[1] = Math.max(r.elbow[1], ar.flex);
        }
        // planted foot sliding: balls of feet on the floor must not move between consecutive frames
        const balls = ['LeftToeBase', 'RightToeBase'].map(wp);
        if (prevBall) ['L', 'R'].forEach((s, k) => { const fp = pose['F' + s]; if (!(fp.y > 0.001) && !prevBall[k].air) r.slide = Math.max(r.slide, Math.hypot(balls[k].x - prevBall[k].p.x, balls[k].z - prevBall[k].p.z)); });
        prevBall = ['L', 'R'].map((s, k) => ({ p: balls[k], air: pose['F' + s].y > 0.001 }));
        // capsule clearances (positive = gap between surfaces)
        const torsoA = wp('Hips'), torsoB = wp('Spine2');
        for (const s of ['Left', 'Right']) {
          const o = s === 'Left' ? 'Right' : 'Left';
          clr('avambraccio-busto', segDist(wp(s + 'ForeArm'), wp(s + 'Hand'), torsoA, torsoB) - 0.035 - 0.115);
          clr('mano-busto', segDist(wp(s + 'Hand'), wp(s + 'HandMiddle2'), torsoA, torsoB) - 0.03 - 0.115);
          clr('braccio-busto', segDist(wp(s + 'Arm').lerp(wp(s + 'ForeArm'), 0.35), wp(s + 'ForeArm'), torsoA, torsoB) - 0.045 - 0.115);
          clr('avambraccio-coscia', segDist(wp(s + 'ForeArm'), wp(s + 'Hand'), wp(o + 'UpLeg'), wp(o + 'Leg')) - 0.035 - 0.07);
          clr('avambraccio-coscia', segDist(wp(s + 'ForeArm'), wp(s + 'Hand'), wp(s + 'UpLeg'), wp(s + 'Leg')) - 0.035 - 0.07);
        }
        // racket: head must not pass through torso, head, legs or the floor
        const rs = pose.props && pose.props.racket;
        if (rs) {
          const r = rig.racketFrame(rs);
          const h0 = r.grip.clone().addScaledVector(r.dir, 0.16), h1 = r.grip.clone().addScaledVector(r.dir, 0.42);
          clr('racchetta-busto', segDist(h0, h1, torsoA, torsoB) - 0.115 - 0.03);
          clr('racchetta-testa', segDist(h0, h1, wp('Head'), wp('Head').add(new THREE_V(0, 0.12, 0))) - 0.1 - 0.03);
          for (const s of ['Left', 'Right']) clr('racchetta-coscia', segDist(h0, h1, wp(s + 'UpLeg'), wp(s + 'Leg')) - 0.08 - 0.03);
          clr('racchetta-pavimento', Math.min(h0.y, h1.y) - 0.1);
        }
        // joint ranges of forearm and wrist
        for (const s of ['L', 'R']) {
          const a = pose[s];
          r.wrist = r.wrist || [0, 0, 0, 0, 0, 0];
          r.wrist[0] = Math.min(r.wrist[0], a.pron || 0); r.wrist[1] = Math.max(r.wrist[1], a.pron || 0);
          r.wrist[2] = Math.min(r.wrist[2], a.wflex || 0); r.wrist[3] = Math.max(r.wrist[3], a.wflex || 0);
          r.wrist[4] = Math.min(r.wrist[4], a.wdev || 0); r.wrist[5] = Math.max(r.wrist[5], a.wdev || 0);
        }
        clr('coscia-coscia', segDist(wp('LeftUpLeg').lerp(wp('LeftLeg'), 0.25), wp('LeftLeg'), wp('RightUpLeg').lerp(wp('RightLeg'), 0.25), wp('RightLeg')) - 0.13);
        clr('tibia-tibia', segDist(wp('LeftLeg'), wp('LeftFoot'), wp('RightLeg'), wp('RightFoot')) - 0.09);
        clr('ginocchio-pavimento', Math.min(wp('LeftLeg').y, wp('RightLeg').y) - 0.05);
      }
    }
    r.minY = +r.minY.toFixed(3); r.footDetach = +r.footDetach.toFixed(3); r.slide = +r.slide.toFixed(4);
    r.knee = r.knee.map(x => Math.round(x)); r.elbow = r.elbow.map(x => Math.round(x));
    for (const k in r.clear) r.clear[k] = +r.clear[k].toFixed(3);
    out.push(r);
  });
  return out;
});
let bad = 0;
for (const r of res) {
  const issues = [];
  if (r.minY < -0.012) issues.push(`corpo sotto il pavimento ${r.minY}`);
  if (r.footDetach > 0.004) issues.push(`piede staccato ${r.footDetach}`);
  if (r.slide > 0.002) issues.push(`piede che scivola ${r.slide}`);
  if (r.knee[0] < 0 || r.knee[1] > 150) issues.push(`ginocchio fuori range ${r.knee}`);
  if (r.elbow[0] < 0 || r.elbow[1] > 150) issues.push(`gomito fuori range ${r.elbow}`);
  for (const [k, d] of Object.entries(r.clear)) if (d < -0.015) issues.push(`compenetrazione ${k} ${d}`);
  const w = r.wrist || [0, 0, 0, 0, 0, 0];
  if (w[0] < -90 || w[1] > 90) issues.push(`prono-supinazione fuori range ${w[0]}..${w[1]}`);
  if (w[2] < -65 || w[3] > 60) issues.push(`flesso-estensione polso fuori range ${w[2]}..${w[3]}`);
  if (w[4] < -30 || w[5] > 30) issues.push(`deviazione polso fuori range ${w[4]}..${w[5]}`);
  if (issues.length) bad++;
  console.log((issues.length ? 'KO ' : 'OK ') + r.name.padEnd(22), `minY ${r.minY} ginocchio ${r.knee} gomito ${r.elbow}`, issues.length ? '\n    -> ' + issues.join('\n    -> ') : '', '\n    clearances', JSON.stringify(r.clear));
}
await browser.close();
process.exit(bad ? 1 : 0);
