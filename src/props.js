import * as THREE from 'three';
const V3 = THREE.Vector3;

// Place equipment for the current pose: band, anchor post, bench, dumbbell, mat.
export function applyProps(stage, ex, pose) {
  const rig = stage.rig;
  const pr = ex.props || {};
  const pp = pose.props || {};
  // mat
  const m = pr.mat || [0.62, 1.75, 0, 0.1];
  stage.setMat(m[0], m[1], m[2], m[3]);
  // bench
  stage.bench.visible = !!pp.bench;
  if (pp.bench) stage.bench.position.set(pp.bench[0], 0, pp.bench[2]);
  // anchor post
  stage.post.visible = !!pp.anchor;
  if (pp.anchor) stage.post.position.set(pp.anchor[0], 0, pp.anchor[2] - 0.05);
  // band
  const gl = rig.gripPoint('L'), gr = rig.gripPoint('R');
  if (pr.band === 'hands') {
    const d = gl.distanceTo(gr);
    const sag = Math.max(0, (pr.bandRest || 0.3) - d) * 0.45;
    const mid = gl.clone().add(gr).multiplyScalar(0.5);
    mid.y -= sag;
    stage.updateBand([gl, mid, gr]);
  } else if (pr.band === 'anchor' && pp.anchor) {
    const a = new V3(...pp.anchor);
    const h = gl.clone().add(gr).multiplyScalar(0.5);
    // the band leaves the anchor and splits to both fists
    stage.updateBand([a, a.clone().lerp(h, 0.5), h]);
  } else stage.updateBand(null, false);
  // dumbbell in one hand
  const db = pp.dumbbell;
  stage.dumbbell.visible = !!db;
  if (db) {
    const s = db;
    const q = rig.handFrame(s);
    stage.dumbbell.position.copy(rig.gripPoint(s));
    // cylinder axis (Y) -> hand local Z (across the palm)
    stage.dumbbell.quaternion.copy(q).multiply(new THREE.Quaternion().setFromAxisAngle(new V3(1, 0, 0), Math.PI / 2));
  }
}
