// Muscle regions painted on the mannequin surface.
// Coordinates are in the mannequin's bind pose (T-pose, metres, facing +Z,
// left side = +X). Each region is a soft ellipsoid (or capsule) optionally
// masked by the surface normal so front / back muscles don't bleed.

export const MUSCLES = {
  cuffia: { name: 'Cuffia dei rotatori', group: 'Spalla' },
  deltPost: { name: 'Deltoide posteriore', group: 'Spalla' },
  deltAnt: { name: 'Deltoide anteriore', group: 'Spalla' },
  romboidi: { name: 'Romboidi e trapezio medio', group: 'Schiena' },
  trapSup: { name: 'Trapezio superiore', group: 'Schiena' },
  dorsali: { name: 'Gran dorsale', group: 'Schiena' },
  lombari: { name: 'Erettori spinali', group: 'Schiena' },
  pettorali: { name: 'Pettorali', group: 'Petto' },
  tricipiti: { name: 'Tricipiti', group: 'Braccia' },
  estensori: { name: 'Estensori del polso', group: 'Avambraccio' },
  flessori: { name: 'Flessori del polso', group: 'Avambraccio' },
  addome: { name: 'Retto addominale', group: 'Core' },
  obliqui: { name: 'Obliqui', group: 'Core' },
  glutei: { name: 'Grande gluteo', group: 'Anca' },
  gluteoMedio: { name: 'Medio gluteo', group: 'Anca' },
  quadricipiti: { name: 'Quadricipiti', group: 'Coscia' },
  femorali: { name: 'Femorali', group: 'Coscia' },
  adduttori: { name: 'Adduttori', group: 'Coscia' },
  polpacci: { name: 'Polpacci', group: 'Gamba' },
};

// region primitives -------------------------------------------------------
const ell = (c, r, mask) => ({ type: 'ell', c, r, mask });
const cap = (a, b, r, mask) => ({ type: 'cap', a, b, r, mask });

// masks on the bind-pose normal
const front = (t = 0.15) => (n) => n[2] > t;
const back = (t = 0.15) => (n) => n[2] < -t;
const up = (t = 0.1) => (n) => n[1] > t;
const down = (t = 0.1) => (n) => n[1] < -t;

function sided(fn) {
  // returns regions for both sides; fn(s) with s = +1 (left) / -1 (right)
  return [...fn(1), ...fn(-1)];
}

const REGIONS = {
  cuffia: sided((s) => [
    ell([s * 0.085, 1.355, -0.085], [0.075, 0.065, 0.06], (n) => n[2] < -0.25),
    ell([s * 0.165, 1.40, -0.07], [0.045, 0.05, 0.05], (n) => n[2] < -0.2),
  ]),
  deltPost: sided((s) => [ell([s * 0.19, 1.43, -0.06], [0.07, 0.07, 0.06], (n) => n[2] < 0.05)]),
  deltAnt: sided((s) => [ell([s * 0.19, 1.43, 0.02], [0.07, 0.07, 0.06], (n) => n[2] > -0.05)]),
  romboidi: sided((s) => [ell([s * 0.045, 1.37, -0.1], [0.055, 0.085, 0.06], back(0.3))]),
  trapSup: sided((s) => [ell([s * 0.08, 1.48, -0.04], [0.07, 0.045, 0.06], up(-0.2))]),
  dorsali: sided((s) => [ell([s * 0.11, 1.24, -0.06], [0.07, 0.11, 0.07], (n) => n[2] < 0.1 && s * n[0] > -0.2)]),
  lombari: sided((s) => [ell([s * 0.035, 1.12, -0.09], [0.04, 0.11, 0.06], back(0.3))]),
  pettorali: sided((s) => [ell([s * 0.085, 1.35, 0.09], [0.085, 0.07, 0.07], front(0.25))]),
  tricipiti: sided((s) => [cap([s * 0.18, 1.44, -0.05], [s * 0.4, 1.44, -0.05], 0.06, (n) => n[2] < -0.1)]),
  estensori: sided((s) => [cap([s * 0.45, 1.44, -0.05], [s * 0.67, 1.44, -0.05], 0.05, up(0.15))]),
  flessori: sided((s) => [cap([s * 0.45, 1.44, -0.05], [s * 0.67, 1.44, -0.05], 0.05, down(0.15))]),
  addome: [ell([0, 1.16, 0.09], [0.075, 0.15, 0.08], front(0.35)), ell([0, 1.17, 0.05], [0.07, 0.09, 0.08], front(0.45))],
  obliqui: sided((s) => [ell([s * 0.11, 1.14, 0.03], [0.06, 0.12, 0.09], (n) => s * n[0] > 0.25), ell([s * 0.07, 1.17, 0.02], [0.06, 0.09, 0.09], (n) => s * n[0] > 0.35)]),
  glutei: sided((s) => [ell([s * 0.085, 0.91, -0.08], [0.1, 0.11, 0.08], back(0.1))]),
  gluteoMedio: sided((s) => [ell([s * 0.15, 0.99, -0.02], [0.06, 0.07, 0.08], (n) => s * n[0] > 0.2)]),
  quadricipiti: sided((s) => [cap([s * 0.095, 0.9, 0.03], [s * 0.085, 0.6, 0.04], 0.085, (n) => n[2] > -0.1)]),
  femorali: sided((s) => [cap([s * 0.09, 0.84, -0.03], [s * 0.085, 0.6, -0.02], 0.08, back(0.15))]),
  adduttori: sided((s) => [cap([s * 0.06, 0.86, 0.0], [s * 0.075, 0.62, 0.0], 0.07, (n) => s * n[0] < -0.25)]),
  polpacci: sided((s) => [cap([s * 0.085, 0.48, -0.04], [s * 0.085, 0.18, -0.04], 0.065, back(0.0))]),
};

function weightFor(region, p, n) {
  if (region.mask && !region.mask(n)) return 0;
  let d;
  if (region.type === 'ell') {
    const dx = (p[0] - region.c[0]) / region.r[0];
    const dy = (p[1] - region.c[1]) / region.r[1];
    const dz = (p[2] - region.c[2]) / region.r[2];
    d = Math.sqrt(dx * dx + dy * dy + dz * dz);
  } else {
    const a = region.a, b = region.b;
    const ab = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
    const ap = [p[0] - a[0], p[1] - a[1], p[2] - a[2]];
    const L2 = ab[0] ** 2 + ab[1] ** 2 + ab[2] ** 2;
    const t = Math.max(0, Math.min(1, (ap[0] * ab[0] + ap[1] * ab[1] + ap[2] * ab[2]) / L2));
    const q = [a[0] + ab[0] * t - p[0], a[1] + ab[1] * t - p[1], a[2] + ab[2] * t - p[2]];
    d = Math.sqrt(q[0] ** 2 + q[1] ** 2 + q[2] ** 2) / region.r;
  }
  if (d >= 1) return 0;
  const x = 1 - d; // 0 at border, 1 at centre
  return Math.min(1, x * 2.2) ** 1.5;
}

// positions / normals: Float32Array (bind pose, model space)
export function computeMuscleWeights(positions, normals) {
  const count = positions.length / 3;
  const out = {};
  for (const key in REGIONS) {
    const arr = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      const p = [positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]];
      const n = [normals[i * 3], normals[i * 3 + 1], normals[i * 3 + 2]];
      let w = 0;
      for (const r of REGIONS[key]) w = Math.max(w, weightFor(r, p, n));
      arr[i] = w;
    }
    out[key] = arr;
  }
  return out;
}
