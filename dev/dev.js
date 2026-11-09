import { Stage } from '../src/scene.js';
import { deepMerge, lerpPose, mirrorPose } from '../src/rig.js';
import { EXERCISES, samplePose } from '../src/exercises.js';
import * as THREE from 'three';
const el = document.getElementById('v');
const stage = new Stage(el, { modelUrl: 'Xbot.glb', bloom: true, pixelRatio: 1 });
window.stage = stage;
window.THREE = THREE;
await stage.ready;
window.show = (ex, t, side = 0, cam) => {
  const e = EXERCISES[ex];
  const pose = samplePose(e, t, side);
  stage.rig.apply(pose);
  stage.applyProps && stage.applyProps(e, pose, side);
  window.applyPropsDev && window.applyPropsDev(e, pose);
  stage.setMuscles(e.prim, e.sec, null);
  stage.setEffort(pose.effort || 0);
  if (cam) stage.frame(cam.p, cam.t, true);
  stage.render(0.016);
  return { pose, legs: stage.rig.state.legs, arms: stage.rig.state.arms };
};
import('../src/props.js').then(m => window.applyPropsDev = (e, pose) => m.applyProps(stage, e, pose));
window.ready = true;
// lowest skinned vertex + dominant bone name
window.minY = () => {
  const v = new THREE.Vector3(); let best = { y: Infinity, bone: '' };
  stage.model.traverse(o => { if (!o.isSkinnedMesh) return; const si = o.geometry.attributes.skinIndex, sw = o.geometry.attributes.skinWeight;
    for (let i = 0; i < o.geometry.attributes.position.count; i += 2) { o.getVertexPosition(i, v); o.localToWorld(v);
      if (v.y < best.y) { let bi = 0, bw = -1; for (let k = 0; k < 4; k++) if (sw.getComponent(i, k) > bw) { bw = sw.getComponent(i, k); bi = si.getComponent(i, k); } best = { y: v.y, bone: o.skeleton.bones[bi].name.replace('mixamorig',''), z: v.z }; } } });
  return best;
};
window.lowByBone = () => {
  const v = new THREE.Vector3(); const res = {};
  stage.model.traverse(o => { if (!o.isSkinnedMesh) return; const si = o.geometry.attributes.skinIndex, sw = o.geometry.attributes.skinWeight;
    for (let i = 0; i < o.geometry.attributes.position.count; i += 2) { o.getVertexPosition(i, v); o.localToWorld(v);
      let bi = 0, bw = -1; for (let k = 0; k < 4; k++) if (sw.getComponent(i, k) > bw) { bw = sw.getComponent(i, k); bi = si.getComponent(i, k); }
      const n = o.skeleton.bones[bi].name.replace('mixamorig','').replace(/(Left|Right)Hand.*/, '$1Hand'); if (!(n in res) || v.y < res[n]) res[n] = +v.y.toFixed(3); } });
  return res;
};
