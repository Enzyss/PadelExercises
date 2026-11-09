import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { Rig } from './rig.js';
import { computeMuscleWeights } from './muscles.js';

const V3 = THREE.Vector3;

export class Stage {
  constructor(container, { modelUrl = 'Xbot.glb', bloom = true, pixelRatio } = {}) {
    this.container = container;
    const r = (this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true }));
    r.setPixelRatio(pixelRatio || Math.min(window.devicePixelRatio || 1, 2));
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFSoftShadowMap;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.05;
    container.appendChild(r.domElement);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0b111b);
    this.scene.fog = new THREE.Fog(0x0b111b, 6, 14);
    this.camera = new THREE.PerspectiveCamera(32, 1, 0.05, 50);
    this.camera.position.set(2.2, 1.6, 3.4);
    this.controls = new OrbitControls(this.camera, r.domElement);
    this.controls.enableDamping = true;
    this.controls.minDistance = 1.2;
    this.controls.maxDistance = 8;
    this.controls.maxPolarAngle = Math.PI * 0.495;
    this.controls.target.set(0, 0.9, 0);

    this.buildLights();
    this.buildFloor();
    this.buildProps();

    if (bloom) {
      this.composer = new EffectComposer(r);
      this.composer.addPass(new RenderPass(this.scene, this.camera));
      this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.55, 0.5, 0.82);
      this.composer.addPass(this.bloom);
      this.composer.addPass(new OutputPass());
    }
    this.ready = this.loadModel(modelUrl);
    this.resize();
    this.camAnim = null;
  }

  buildLights() {
    const s = this.scene;
    s.add(new THREE.HemisphereLight(0xbcd3ff, 0x141b26, 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(2.5, 5, 3);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    const c = key.shadow.camera;
    c.left = -2; c.right = 2; c.top = 2.5; c.bottom = -1; c.near = 1; c.far = 12;
    key.shadow.bias = -0.0004;
    key.shadow.normalBias = 0.02;
    key.shadow.radius = 4;
    s.add(key);
    const rim = new THREE.DirectionalLight(0x6fa8ff, 1.4);
    rim.position.set(-3, 3, -3);
    s.add(rim);
    const fill = new THREE.DirectionalLight(0xffffff, 0.5);
    fill.position.set(-2, 1.5, 3);
    s.add(fill);
  }

  buildFloor() {
    const floorMat = new THREE.MeshStandardMaterial({ color: 0x121a26, roughness: 0.92 });
    const floor = new THREE.Mesh(new THREE.CircleGeometry(9, 64), floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.008;
    floor.receiveShadow = true;
    this.scene.add(floor);
    // court-blue lines on the floor (padel court markings vibe)
    const lineMat = new THREE.MeshBasicMaterial({ color: 0x2a4f86, transparent: true, opacity: 0.55 });
    for (const z of [-2.4, 2.4]) {
      const l = new THREE.Mesh(new THREE.PlaneGeometry(8, 0.05), lineMat);
      l.rotation.x = -Math.PI / 2; l.position.set(0, -0.007, z);
      this.scene.add(l);
    }
    const mid = new THREE.Mesh(new THREE.PlaneGeometry(0.05, 4.8), lineMat);
    mid.rotation.x = -Math.PI / 2; mid.position.set(0, -0.007, 0);
    mid.visible = false;
    this.scene.add(mid);
    // exercise mat
    const mat = new THREE.Mesh(
      new THREE.BoxGeometry(1, 0.008, 1),
      new THREE.MeshStandardMaterial({ color: 0x232b38, roughness: 0.85 })
    );
    mat.position.y = -0.004;
    mat.receiveShadow = true;
    this.mat = mat;
    this.scene.add(mat);
  }

  setMat(w, d, x = 0, z = 0) {
    this.mat.scale.set(w, 1, d);
    this.mat.position.x = x;
    this.mat.position.z = z;
  }

  buildProps() {
    const s = this.scene;
    // elastic band (tube rebuilt every frame)
    this.bandMat = new THREE.MeshStandardMaterial({ color: 0x2f9e6b, roughness: 0.55 });
    this.band = new THREE.Mesh(new THREE.BufferGeometry(), this.bandMat);
    this.band.castShadow = true;
    this.band.visible = false;
    s.add(this.band);
    // anchor post (door frame / rack)
    const post = new THREE.Group();
    const pm = new THREE.MeshStandardMaterial({ color: 0x3a4659, roughness: 0.5, metalness: 0.4 });
    const pole = new THREE.Mesh(new THREE.BoxGeometry(0.07, 2.1, 0.07), pm);
    pole.position.y = 1.05;
    pole.castShadow = true;
    const base = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.03, 0.3), pm);
    base.position.y = 0.015;
    post.add(pole, base);
    post.visible = false;
    this.post = post;
    s.add(post);
    // bench
    const bench = new THREE.Group();
    const bm = new THREE.MeshStandardMaterial({ color: 0x2b3442, roughness: 0.7 });
    const top = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.06, 0.4), new THREE.MeshStandardMaterial({ color: 0x394456, roughness: 0.6 }));
    top.position.y = 0.44;
    top.castShadow = true; top.receiveShadow = true;
    bench.add(top);
    for (const [x, z] of [[-0.17, -0.16], [0.17, -0.16], [-0.17, 0.16], [0.17, 0.16]]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.41, 0.04), bm);
      leg.position.set(x, 0.205, z);
      leg.castShadow = true;
      bench.add(leg);
    }
    bench.visible = false;
    this.bench = bench;
    s.add(bench);
    // dumbbell
    const db = new THREE.Group();
    const dm = new THREE.MeshStandardMaterial({ color: 0x1b1f26, roughness: 0.35, metalness: 0.6 });
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.014, 0.13, 16), new THREE.MeshStandardMaterial({ color: 0x8b95a5, metalness: 0.8, roughness: 0.3 }));
    db.add(handle);
    for (const y of [-0.085, 0.085]) {
      const plate = new THREE.Mesh(new THREE.CylinderGeometry(0.038, 0.038, 0.045, 24), dm);
      plate.position.y = y;
      plate.castShadow = true;
      db.add(plate);
    }
    db.visible = false;
    this.dumbbell = db;
    s.add(db);
  }

  async loadModel(url) {
    const gltf = await new GLTFLoader().loadAsync(url);
    const root = gltf.scene;
    this.model = root;
    root.updateMatrixWorld(true);
    const meshes = [];
    let minY = Infinity;
    const v = new V3();
    root.traverse((o) => {
      if (!o.isSkinnedMesh) return;
      o.castShadow = true;
      o.receiveShadow = true;
      o.frustumCulled = false;
      for (let i = 0; i < o.geometry.attributes.position.count; i++) {
        o.getVertexPosition(i, v);
        o.localToWorld(v);
        minY = Math.min(minY, v.y);
      }
      meshes.push(o);
    });
    this.hl = [];
    for (const o of meshes) {
      const joints = o.name !== 'Beta_Surface';
      this.prepareSurface(o, joints ? { color: 0x2a3140, roughness: 0.4, metalness: 0.3 } : { color: 0xdfe4ea, roughness: 0.42, metalness: 0.08 });
    }
    root.position.y = -minY;
    root.updateMatrixWorld(true);
    this.scene.add(root);
    this.rig = new Rig(root);
  }

  prepareSurface(mesh, matOpts) {
    const g = mesh.geometry;
    const n = g.attributes.position.count;
    const pos = new Float32Array(n * 3);
    const nor = new Float32Array(n * 3);
    const v = new V3();
    const nm = new THREE.Matrix3().getNormalMatrix(mesh.matrixWorld);
    for (let i = 0; i < n; i++) {
      mesh.getVertexPosition(i, v);
      mesh.localToWorld(v);
      pos.set([v.x, v.y, v.z], i * 3);
      v.fromBufferAttribute(g.attributes.normal, i).applyMatrix3(nm).normalize();
      nor.set([v.x, v.y, v.z], i * 3);
    }
    const aPrim = new THREE.BufferAttribute(new Float32Array(n), 1);
    const aSec = new THREE.BufferAttribute(new Float32Array(n), 1);
    g.setAttribute('aPrim', aPrim);
    g.setAttribute('aSec', aSec);
    this.hl.push({ bindPos: pos, w: computeMuscleWeights(pos, nor), aPrim, aSec });

    const mat = new THREE.MeshStandardMaterial(matOpts);
    const u = (this.uniforms = this.uniforms || {
      uPrimColor: { value: new THREE.Color(0xff4d2e) },
      uSecColor: { value: new THREE.Color(0xffc42e) },
      uPrimI: { value: 0 },
      uSecI: { value: 0 },
    });
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, u);
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nattribute float aPrim;\nattribute float aSec;\nvarying float vPrim;\nvarying float vSec;')
        .replace('#include <begin_vertex>', '#include <begin_vertex>\nvPrim = aPrim; vSec = aSec;');
      sh.fragmentShader = sh.fragmentShader
        .replace('#include <common>', '#include <common>\nuniform vec3 uPrimColor; uniform vec3 uSecColor; uniform float uPrimI; uniform float uSecI;\nvarying float vPrim; varying float vSec;')
        .replace('#include <color_fragment>', '#include <color_fragment>\nfloat hp = clamp(vPrim, 0.0, 1.0); float hs = clamp(vSec, 0.0, 1.0) * (1.0 - hp);\ndiffuseColor.rgb = mix(diffuseColor.rgb, uPrimColor, hp * 0.85);\ndiffuseColor.rgb = mix(diffuseColor.rgb, uSecColor, hs * 0.8);')
        .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += uPrimColor * hp * uPrimI + uSecColor * hs * uSecI;');
    };
    mesh.material = mat;
  }

  // highlight muscles; side: 'L' | 'R' | null (both)
  setMuscles(prim = [], sec = [], side = null) {
    for (const h of this.hl) {
      const n = h.aPrim.count;
      const P = h.aPrim.array, S = h.aSec.array;
      P.fill(0); S.fill(0);
      const X = h.bindPos;
      const paint = (list, arr) => {
        for (const k of list) {
          const w = h.w[k];
          if (!w) continue;
          for (let i = 0; i < n; i++) {
            if (side === 'L' && X[i * 3] < -0.02) continue;
            if (side === 'R' && X[i * 3] > 0.02) continue;
            if (w[i] > arr[i]) arr[i] = w[i];
          }
        }
      };
      paint(prim, P);
      paint(sec, S);
      h.aPrim.needsUpdate = true;
      h.aSec.needsUpdate = true;
    }
  }

  setEffort(e) {
    this.uniforms.uPrimI.value = 0.25 + 1.1 * e;
    this.uniforms.uSecI.value = 0.15 + 0.55 * e;
  }

  updateBand(points, visible = true) {
    this.band.visible = visible && points && points.length >= 2;
    if (!this.band.visible) return;
    const curve = new THREE.CatmullRomCurve3(points);
    this.band.geometry.dispose();
    this.band.geometry = new THREE.TubeGeometry(curve, Math.max(8, points.length * 6), 0.009, 8, false);
  }

  resize() {
    const w = this.container.clientWidth || 1, h = this.container.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    if (this.composer) {
      this.composer.setSize(w, h);
      this.composer.setPixelRatio(this.renderer.getPixelRatio());
    }
  }

  // smooth camera move to [pos], [target]
  frame(pos, target, instant = false) {
    const p = new V3(...pos), t = new V3(...target);
    if (instant) {
      this.camera.position.copy(p);
      this.controls.target.copy(t);
      this.controls.update();
      this.camAnim = null;
      return;
    }
    this.camAnim = { p0: this.camera.position.clone(), t0: this.controls.target.clone(), p, t, k: 0 };
  }

  render(dt) {
    if (this.camAnim) {
      const a = this.camAnim;
      a.k = Math.min(1, a.k + dt / 0.7);
      const e = a.k < 0.5 ? 2 * a.k * a.k : 1 - Math.pow(-2 * a.k + 2, 2) / 2;
      this.camera.position.lerpVectors(a.p0, a.p, e);
      this.controls.target.lerpVectors(a.t0, a.t, e);
      if (a.k >= 1) this.camAnim = null;
    }
    this.controls.update();
    if (this.composer) this.composer.render();
    else this.renderer.render(this.scene, this.camera);
  }
}
