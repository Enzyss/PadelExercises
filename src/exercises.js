// Exercise library: pre-match routine for padel.
// Each exercise is a keyframed motion of one repetition, authored in
// anatomical terms (joint angles for arms, IK targets for feet / hands).
import { deepMerge, lerpPose, mirrorPose } from './rig.js';

// ---------- base poses ----------
const ARM_RELAX = { mode: 'fk', flex: 4, abd: 7, rot: 0, elbow: 12, pron: 15, grip: 0.25, scap: [0, 0] };
export const STAND = {
  hips: { p: [0, 1.039, 0.02], r: [0, 0, 0] },
  spine: [0, 0, 0],
  head: [0, 0, 0],
  L: ARM_RELAX,
  R: ARM_RELAX,
  FL: { x: 0.1, z: -0.02, out: 8, heel: 0 },
  FR: { x: -0.1, z: -0.02, out: 8, heel: 0 },
  effort: 0,
};
const P = (over, base = STAND) => deepMerge(base, over);

// ---------- easing ----------
const EASE = {
  io: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
  sine: (t) => -(Math.cos(Math.PI * t) - 1) / 2,
  lin: (t) => t,
  out: (t) => 1 - (1 - t) * (1 - t),
  in: (t) => t * t,
  hold: () => 0,
};

// keys: [{ t, pose, ease }] with t in [0,1]; mirror: 'alt' -> the cycle shows
// side A then side B (mirrored); sided: user picks the side (default A)
export function samplePose(ex, phase, side = 0) {
  let t = ((phase % 1) + 1) % 1;
  let mirror = side === 1;
  if (ex.mirror === 'alt') {
    mirror = t >= 0.5;
    t = (t % 0.5) * 2;
  }
  const keys = ex.keys;
  let i = 0;
  while (i < keys.length - 2 && t >= keys[i + 1].t) i++;
  const a = keys[i], b = keys[i + 1];
  const span = b.t - a.t;
  const u = span <= 0 ? 1 : Math.min(1, Math.max(0, (t - a.t) / span));
  const e = (EASE[b.ease || 'sine'] || EASE.sine)(u);
  const pose = lerpPose(a.pose, b.pose, e);
  return mirror ? mirrorPose(pose) : pose;
}

// ===================================================================
//  1. Rotazione esterna spalle con elastico
// ===================================================================
const erA = { mode: 'fk', flex: 6, abd: 9, rot: 12, elbow: 90, pron: -75, grip: 0.85, scap: [0, 4], wflex: -5 };
const erB = { ...erA, rot: -42, scap: [-3, 13] };
const ER = {
  id: 'rotazione-esterna',
  name: 'Rotazione esterna con elastico',
  short: 'Rotazione esterna',
  sets: 2, reps: 12, unit: 'rip',
  tempo: '1 s fuori · breve pausa · 1,5 s ritorno',
  dur: 3.0,
  equip: 'Elastico leggero',
  prim: ['cuffia', 'deltPost'],
  sec: ['romboidi'],
  why: 'Rinforza i muscoli che stabilizzano la spalla in smash, bandeja e vibora. Una cuffia dei rotatori attiva riduce il rischio di dolore anteriore alla spalla quando colpisci sopra la testa.',
  cues: [
    'Gomiti attaccati ai fianchi, piegati a 90°. Puoi stringere un asciugamano arrotolato tra gomito e busto.',
    'Avambracci paralleli al pavimento, palmi verso l\'alto.',
    'Ruota solo gli avambracci verso l\'esterno: i gomiti restano fermi.',
    'Scapole leggermente indietro e in basso, collo rilassato.',
    'Torna piano, senza far scattare l\'elastico.',
  ],
  errors: ['Staccare i gomiti dal busto', 'Inarcare la schiena per tirare di più', 'Alzare le spalle verso le orecchie'],
  props: { band: 'hands', bandRest: 0.34 },
  cam: { p: [1.5, 1.75, 2.6], t: [0, 1.05, 0] },
  keys: [
    { t: 0, pose: P({ L: erA, R: erA, spine: [0, 0, 0] }) },
    { t: 0.36, pose: P({ L: erB, R: erB, effort: 1, spine: [-2, 0, 0] }), ease: 'io' },
    { t: 0.52, pose: P({ L: erB, R: erB, effort: 1, spine: [-2, 0, 0] }), ease: 'lin' },
    { t: 1, pose: P({ L: erA, R: erA }), ease: 'sine' },
  ],
};

// ===================================================================
//  2. Band pull-apart
// ===================================================================
const paA = { mode: 'fk', flex: 88, abd: 14, rot: 0, elbow: 4, pron: 90, grip: 0.85, scap: [0, 0] };
const paB = { ...paA, abd: 82, scap: [-3, 14] };
const PA = {
  id: 'pull-apart',
  name: 'Pull-apart con elastico',
  short: 'Pull-apart',
  sets: 2, reps: 12, unit: 'rip',
  tempo: '1 s apri · breve pausa · 1,5 s chiudi',
  dur: 3.0,
  equip: 'Elastico leggero',
  prim: ['romboidi', 'deltPost'],
  sec: ['cuffia', 'trapSup'],
  why: 'Attiva la muscolatura tra le scapole e la parte posteriore della spalla. Bilancia il lavoro dei pettorali e tiene la spalla centrata nei colpi alti e nelle volée.',
  cues: [
    'Braccia tese davanti al petto, all\'altezza delle spalle, presa con i palmi in giù.',
    'Apri le braccia fino a portare l\'elastico al petto.',
    'Avvicina le scapole alla fine del movimento.',
    'Gomiti quasi tesi ma non bloccati.',
    'Ritorno lento e controllato.',
  ],
  errors: ['Inarcare la zona lombare', 'Alzare le spalle', 'Abbassare le braccia durante l\'apertura'],
  props: { band: 'hands', bandRest: 0.42 },
  cam: { p: [1.7, 1.8, 2.7], t: [0, 1.15, 0] },
  keys: [
    { t: 0, pose: P({ L: paA, R: paA }) },
    { t: 0.36, pose: P({ L: paB, R: paB, effort: 1, spine: [-2, 0, 0] }), ease: 'io' },
    { t: 0.52, pose: P({ L: paB, R: paB, effort: 1, spine: [-2, 0, 0] }), ease: 'lin' },
    { t: 1, pose: P({ L: paA, R: paA }), ease: 'sine' },
  ],
};

// ===================================================================
//  3. Estensione del polso con manubrio (seduto)
// ===================================================================
const SIT = P({
  hips: { p: [0, 0.635, -0.04], r: [34, 0, 0] },
  spine: [16, 0, 0],
  head: [-14, 0, 0],
  FL: { x: 0.16, z: 0.4, out: 10 },
  FR: { x: -0.16, z: 0.4, out: 10 },
  L: { mode: 'ik', space: 'world', t: [0.15, 0.665, 0.3], hint: [0.6, -1, -0.4], pron: 80, wflex: 5, grip: 0.3 },
  props: { bench: [0, 0, -0.1], dumbbell: 'R' },
});
const wristArm = (wflex) => ({ mode: 'ik', space: 'world', t: [-0.14, 0.672, 0.51], hint: [-0.35, -1, -0.5], pron: 88, wflex, grip: 1 });
const WR = {
  id: 'estensione-polso',
  name: 'Estensione del polso con manubrio',
  short: 'Estensione polso',
  sets: 2, reps: 10, unit: 'rip per braccio',
  tempo: '1 s su · 2–3 s giù',
  dur: 4.0,
  sided: true,
  sideLabels: ['Braccio destro', 'Braccio sinistro'],
  sideMuscles: 'R',
  equip: 'Manubrio 1–2 kg o bottiglia d\'acqua, sedia o panca',
  prim: ['estensori'],
  sec: ['flessori'],
  why: 'Gli estensori del polso lavorano a ogni impatto con la palla. Rinforzarli, soprattutto nella fase di discesa lenta, è uno dei metodi più efficaci per prevenire l\'epicondilite (il "gomito del tennista").',
  cues: [
    'Seduto, avambraccio appoggiato sulla coscia, il polso esce oltre il ginocchio.',
    'Palmo verso il basso, presa morbida sul manubrio.',
    'Solleva il dorso della mano muovendo solo il polso.',
    'Scendi lentamente in 2–3 secondi: è la parte più utile dell\'esercizio.',
    'L\'avambraccio resta fermo sulla coscia per tutta la serie.',
  ],
  errors: ['Sollevare l\'avambraccio dalla coscia', 'Usare un peso troppo pesante', 'Scendere di colpo'],
  props: { mat: [0.9, 0.9, 0, 0.1] },
  cam: { p: [-1.9, 1.15, 1.6], t: [0, 0.62, 0.25] },
  keys: [
    { t: 0, pose: P({ R: wristArm(30) }, SIT) },
    { t: 0.25, pose: P({ R: wristArm(-42), effort: 1 }, SIT), ease: 'io' },
    { t: 0.36, pose: P({ R: wristArm(-42), effort: 1 }, SIT), ease: 'lin' },
    { t: 1, pose: P({ R: wristArm(30), effort: 0.2 }, SIT), ease: 'sine' },
  ],
};

// ===================================================================
//  4. Sollevamenti sui polpacci
// ===================================================================
const calfUp = { hips: { p: [0, 1.083, 0.03] }, FL: { heel: 36 }, FR: { heel: 36 }, effort: 1 };
const CR = {
  id: 'polpacci',
  name: 'Sollevamenti sui polpacci',
  short: 'Polpacci',
  sets: 2, reps: 12, unit: 'rip',
  tempo: '1 s su · breve pausa · 1,5 s giù',
  dur: 2.6,
  equip: 'Nessuno (puoi appoggiarti a un muro)',
  prim: ['polpacci'],
  sec: [],
  why: 'Prepara polpacci e tendine d\'Achille agli scatti, allo split-step e ai cambi di direzione. È la zona che soffre di più sul campo in erba sintetica.',
  cues: [
    'Piedi alla larghezza delle anche, punte leggermente in fuori.',
    'Sali sugli avampiedi il più in alto possibile, ginocchia distese.',
    'Peso sull\'alluce e sul secondo dito: la caviglia non deve cedere verso l\'esterno.',
    'Fermati un secondo in alto, poi scendi lentamente.',
  ],
  errors: ['Rimbalzare velocemente', 'Piegare le ginocchia', 'Caricare il bordo esterno del piede'],
  cam: { p: [1.9, 1.0, -2.4], t: [0, 0.65, 0] },
  keys: [
    { t: 0, pose: P({}) },
    { t: 0.3, pose: P(calfUp), ease: 'io' },
    { t: 0.5, pose: P(calfUp), ease: 'lin' },
    { t: 1, pose: P({}), ease: 'sine' },
  ],
};

// ===================================================================
//  5. Ponte glutei
// ===================================================================
const lieArm = (s) => ({ mode: 'ik', space: 'world', t: [s * 0.25, 0.085, 0.1], hint: [s * 1, 0.15, 0], pron: 85, grip: 0.1, wflex: -8 });
const BRIDGE_DOWN = P({
  hips: { p: [0, 0.168, 0], r: [-90, 0, 0] },
  spine: [0, 0, 0],
  head: [6, 0, 0],
  L: lieArm(1), R: lieArm(-1),
  FL: { x: 0.12, z: 0.42, out: 4, knee: [0.15, 1, 0.5] },
  FR: { x: -0.12, z: 0.42, out: 4, knee: [-0.15, 1, 0.5] },
});
const BRIDGE_UP = P({ hips: { p: [0, 0.41, -0.1], r: [-131, 0, 0] }, spine: [14, 0, 0], head: [34, 0, 0], effort: 1 }, BRIDGE_DOWN);
const GB = {
  id: 'ponte-glutei',
  name: 'Ponte glutei',
  short: 'Ponte glutei',
  sets: 2, reps: 12, unit: 'rip',
  tempo: '1 s su · 1 s fermo · 1,5 s giù',
  dur: 3.4,
  equip: 'Tappetino',
  prim: ['glutei'],
  sec: ['femorali', 'lombari'],
  why: 'Accende i glutei, il motore di spinte, affondi e rotazioni. Glutei attivi tolgono carico alla zona lombare e alle ginocchia nei movimenti bassi.',
  cues: [
    'Supino, ginocchia piegate, piedi alla larghezza delle anche e vicini ai glutei.',
    'Spingi con i talloni e solleva il bacino fino ad allineare spalle, anche e ginocchia.',
    'Stringi i glutei in alto per un secondo, senza inarcare la schiena.',
    'Scendi vertebra dopo vertebra.',
  ],
  errors: ['Inarcare la zona lombare in alto', 'Spingere con le punte', 'Aprire o chiudere le ginocchia'],
  props: { mat: [0.66, 1.9, 0, -0.35] },
  cam: { p: [2.4, 0.5, 0.45], t: [0, 0.27, -0.12] },
  keys: [
    { t: 0, pose: BRIDGE_DOWN },
    { t: 0.26, pose: BRIDGE_UP, ease: 'io' },
    { t: 0.6, pose: BRIDGE_UP, ease: 'lin' },
    { t: 1, pose: BRIDGE_DOWN, ease: 'sine' },
  ],
};

// ===================================================================
//  6. Affondo laterale alternato
// ===================================================================
const clasp = (s) => ({ mode: 'ik', t: [s * 0.045, -0.12, 0.26], hint: [s * 0.8, -1, -0.2], pron: 10, grip: 0.6 });
const WIDE = P({
  hips: { p: [0, 0.955, 0.02], r: [4, 0, 0] },
  FL: { x: 0.46, z: -0.02, out: 14 },
  FR: { x: -0.46, z: -0.02, out: 14 },
  L: clasp(1), R: clasp(-1),
});
const LL_DOWN = P({ hips: { p: [0.29, 0.66, -0.1], r: [36, 0, 0] }, spine: [6, 0, 0], head: [-26, 0, 0], effort: 1 }, WIDE);
const LL = {
  id: 'affondo-laterale',
  name: 'Affondo laterale alternato',
  short: 'Affondo laterale',
  sets: 2, reps: 8, unit: 'rip per lato',
  tempo: '1 s giù · 1 s su, alternando i lati',
  dur: 5.0,
  mirror: 'alt',
  equip: 'Nessuno',
  prim: ['adduttori', 'quadricipiti', 'glutei'],
  sec: ['gluteoMedio'],
  why: 'Riproduce gli spostamenti laterali del padel. Scalda adduttori e anche, le zone più colpite da stiramenti negli scatti laterali e nei recuperi bassi.',
  cues: [
    'Piedi larghi circa il doppio delle spalle, punte leggermente in fuori.',
    'Siediti su un lato spingendo il bacino indietro, come per sederti.',
    'Il ginocchio piegato resta in linea con la punta del piede.',
    'L\'altra gamba resta tesa, piede intero a terra.',
    'Petto aperto, schiena lunga. Spingi con il tallone per tornare al centro.',
  ],
  errors: ['Ginocchio che cade verso l\'interno', 'Tallone che si solleva', 'Schiena curva'],
  props: { mat: [1.3, 0.9, 0, 0] },
  cam: { p: [0.6, 1.3, 3.6], t: [0, 0.75, 0] },
  keys: [
    { t: 0, pose: WIDE },
    { t: 0.45, pose: LL_DOWN, ease: 'sine' },
    { t: 0.55, pose: LL_DOWN, ease: 'lin' },
    { t: 1, pose: WIDE, ease: 'io' },
  ],
};

// ===================================================================
//  7. Affondo in avanti con rotazione del busto
// ===================================================================
const reach = (s) => ({ mode: 'ik', t: [s * 0.05, -0.02, 0.44], hint: [s * 0.6, -1, -0.3], pron: 5, grip: 0.6 });
const LR0 = P({ L: reach(1), R: reach(-1) });
const LR_LIFT = P({ hips: { p: [0, 1.02, 0.1] }, FL: { z: 0.3, y: 0.09, heel: -6, toeFlat: false } }, LR0);
const LR_HEEL = P({ hips: { p: [0, 0.9, 0.3] }, FL: { z: 0.8, y: 0.035, heel: -10, toeFlat: false }, FR: { heel: 18 } }, LR0);
const LR_PUSH = P({ hips: { p: [0, 0.9, 0.3] }, FL: { z: 0.8, y: 0.03, heel: 12, toeFlat: false }, FR: { heel: 20 } }, LR0);
const LR_PLANT = P({ hips: { p: [0, 0.875, 0.34] }, FL: { z: 0.8, y: 0, heel: 0 }, FR: { heel: 28 } }, LR0);
const LR_DOWN = P({ hips: { p: [0, 0.6, 0.36], r: [4, 0, 0] }, FL: { z: 0.8 }, FR: { heel: 58 }, spine: [2, 0, 0] }, LR0);
const LR_TWIST = P({ spine: [2, 38, 0], hips: { r: [4, 6, 0] }, head: [0, 10, 0], effort: 1 }, LR_DOWN);
const LUNGE_ROT = {
  id: 'affondo-rotazione',
  name: 'Affondo con rotazione del busto',
  short: 'Affondo + rotazione',
  sets: 2, reps: 6, unit: 'rip per lato',
  tempo: 'controllato, 1 s di rotazione',
  dur: 7.6,
  mirror: 'alt',
  equip: 'Nessuno',
  prim: ['quadricipiti', 'glutei', 'obliqui'],
  sec: ['adduttori', 'addome'],
  why: 'Unisce la spinta delle gambe alla rotazione del busto, la stessa catena che usi nel dritto, nel rovescio e nelle uscite dalla parete. Mobilizza anche e colonna toracica.',
  cues: [
    'Fai un passo lungo in avanti e scendi finché entrambe le ginocchia sono a circa 90°.',
    'Il ginocchio davanti resta sopra la caviglia, quello dietro si avvicina al pavimento.',
    'Braccia tese davanti al petto: ruota il busto verso la gamba avanti.',
    'Ruota dal torace, il bacino resta frontale.',
    'Torna al centro e spingi con il piede avanti per rientrare.',
  ],
  errors: ['Ginocchio avanti che cade all\'interno', 'Busto che si piega in avanti', 'Ruotare solo con le braccia'],
  props: { mat: [0.75, 1.6, 0, 0.3] },
  cam: { p: [3.1, 1.35, 2.0], t: [0, 0.8, 0.3] },
  keys: [
    { t: 0, pose: LR0 },
    { t: 0.13, pose: LR_LIFT, ease: 'sine' },
    { t: 0.22, pose: LR_HEEL, ease: 'out' },
    { t: 0.27, pose: LR_PLANT, ease: 'sine' },
    { t: 0.4, pose: LR_DOWN, ease: 'sine' },
    { t: 0.54, pose: LR_TWIST, ease: 'io' },
    { t: 0.6, pose: LR_TWIST, ease: 'lin' },
    { t: 0.72, pose: LR_DOWN, ease: 'io' },
    { t: 0.83, pose: LR_PLANT, ease: 'sine' },
    { t: 0.88, pose: LR_PUSH, ease: 'sine' },
    { t: 0.94, pose: LR_LIFT, ease: 'sine' },
    { t: 1, pose: LR0, ease: 'in' },
  ],
};

// ===================================================================
//  8. Pallof press
// ===================================================================
const press = (s, z, y = -0.07) => ({ mode: 'ik', t: [s * 0.04, y, z], hint: [s * 0.5, -1, -0.4], pron: 0, grip: 0.9 });
const ATH = P({
  hips: { p: [0, 0.985, -0.01], r: [10, 0, 0] },
  spine: [-4, 0, 0],
  head: [-4, 0, 0],
  FL: { x: 0.17, z: -0.02, out: 10 },
  FR: { x: -0.17, z: -0.02, out: 10 },
  props: { anchor: [1.05, 1.2, 0.2] },
});
const PP_IN = P({ L: press(1, 0.2, -0.1), R: press(-1, 0.2, -0.1), effort: 0.4 }, ATH);
const PP_OUT = P({ L: press(1, 0.5, -0.04), R: press(-1, 0.5, -0.04), effort: 1 }, ATH);
const PALLOF = {
  id: 'pallof-press',
  name: 'Pallof press',
  short: 'Pallof press',
  sets: 2, reps: 8, unit: 'rip per lato',
  tempo: '1 s avanti · 2 s fermo · 1 s indietro',
  dur: 4.2,
  sided: true,
  sideLabels: ['Elastico a sinistra', 'Elastico a destra'],
  equip: 'Elastico agganciato a una porta o a un palo, all\'altezza del petto',
  prim: ['obliqui', 'addome'],
  sec: ['gluteoMedio', 'deltAnt'],
  why: 'Allena il core a resistere alla rotazione. Un tronco stabile trasferisce la forza delle gambe alla racchetta e protegge la schiena quando colpisci in torsione.',
  cues: [
    'Di fianco all\'ancoraggio, elastico in tensione, mani unite al centro del petto.',
    'Ginocchia morbide, bacino neutro, addome attivo.',
    'Spingi le mani dritte in avanti senza farti ruotare dall\'elastico.',
    'Tieni 2 secondi a braccia tese, poi torna al petto.',
    'Fai tutte le ripetizioni, poi gira dall\'altro lato.',
  ],
  errors: ['Lasciare ruotare busto o bacino', 'Trattenere il respiro', 'Spalle che salgono'],
  props: { band: 'anchor', mat: [0.8, 0.9, 0, 0] },
  cam: { p: [1.2, 1.5, 3.3], t: [0.3, 1.0, 0.1] },
  keys: [
    { t: 0, pose: PP_IN },
    { t: 0.2, pose: PP_OUT, ease: 'io' },
    { t: 0.66, pose: PP_OUT, ease: 'lin' },
    { t: 0.86, pose: PP_IN, ease: 'io' },
    { t: 1, pose: PP_IN, ease: 'lin' },
  ],
};

// ===================================================================
//  9. Rotazione esplosiva con elastico
// ===================================================================
const rotArms = (s) => ({ mode: 'ik', t: [s * 0.045, -0.04, 0.46], hint: [s * 0.6, -1, -0.3], pron: 0, grip: 0.9 });
const ROT_BASE = P({
  hips: { p: [0, 0.965, -0.01], r: [12, 0, 0] },
  FL: { x: 0.25, z: -0.02, out: 12, pivot: 'ball' },
  FR: { x: -0.25, z: -0.02, out: 12, pivot: 'ball' },
  L: rotArms(1), R: rotArms(-1),
  props: { anchor: [1.1, 1.12, 0.35] },
});
const ROT_LOAD = P({ hips: { r: [12, 32, 0], p: [0.03, 0.955, -0.01] }, spine: [4, 30, 0], head: [-6, -10, 0], FR: { heel: 16, out: -14 }, effort: 0.3 }, ROT_BASE);
const ROT_FIRE = P({ hips: { r: [10, -34, 0], p: [-0.04, 0.975, -0.01] }, spine: [4, -32, 0], head: [-6, 12, 0], FL: { heel: 24, out: -22 }, effort: 1 }, ROT_BASE);
const ROT = {
  id: 'rotazione-esplosiva',
  name: 'Rotazione esplosiva con elastico',
  short: 'Rotazione esplosiva',
  sets: 2, reps: 8, unit: 'rip per lato',
  tempo: 'veloce in rotazione · 1,5 s ritorno',
  dur: 2.4,
  sided: true,
  sideLabels: ['Elastico a sinistra', 'Elastico a destra'],
  equip: 'Elastico medio agganciato all\'altezza del petto',
  prim: ['obliqui', 'glutei'],
  sec: ['addome', 'deltAnt', 'pettorali'],
  why: 'Allena la rotazione veloce che genera potenza nel dritto, nello smash e nella vibora. La forza parte dai piedi, passa dalle anche e arriva alle braccia.',
  cues: [
    'Di fianco all\'ancoraggio, piedi larghi, ginocchia morbide, braccia tese davanti al petto.',
    'Ruota in modo esplosivo partendo dalle anche, le braccia seguono il busto.',
    'Il piede dietro ruota sull\'avampiede, come nel colpo.',
    'Ritorna lentamente controllando l\'elastico.',
    'Fai tutte le ripetizioni, poi gira dall\'altro lato.',
  ],
  errors: ['Tirare solo con le braccia', 'Piegare i gomiti', 'Bloccare il piede dietro'],
  props: { band: 'anchor', mat: [0.9, 0.9, 0, 0] },
  cam: { p: [0.4, 1.65, 3.5], t: [0.2, 1.0, 0.1] },
  keys: [
    { t: 0, pose: ROT_LOAD },
    { t: 0.17, pose: ROT_FIRE, ease: 'out' },
    { t: 0.3, pose: ROT_FIRE, ease: 'lin' },
    { t: 1, pose: ROT_LOAD, ease: 'sine' },
  ],
};

// ===================================================================
// 10. Squat jump
// ===================================================================
const armsF = (flex, elbow = 14) => ({ mode: 'fk', flex, abd: 8, rot: 0, elbow, pron: 15, grip: 0.4 });
const SJ_STAND = P({ FL: { x: 0.14, out: 14 }, FR: { x: -0.14, out: 14 } });
const SJ_LOW = P({ hips: { p: [0, 0.72, -0.13], r: [36, 0, 0] }, spine: [6, 0, 0], head: [-28, 0, 0], L: armsF(-38, 12), R: armsF(-38, 12), effort: 0.7 }, SJ_STAND);
const SJ_TAKE = P({ hips: { p: [0, 1.065, 0.03], r: [9, 0, 0] }, spine: [2, 0, 0], L: armsF(110, 20), R: armsF(110, 20), FL: { heel: 42 }, FR: { heel: 42 }, effort: 1 }, SJ_STAND);
const SJ_AIR = P({ hips: { p: [0, 1.26, 0.02], r: [0, 0, 0] }, L: armsF(150, 24), R: armsF(150, 24), FL: { heel: 30, y: 0.15, toeFlat: false, toe: 10 }, FR: { heel: 30, y: 0.15, toeFlat: false, toe: 10 }, effort: 0.6 }, SJ_STAND);
const SJ_TOUCH = P({ hips: { p: [0, 1.065, 0.02], r: [3, 0, 0] }, L: armsF(80, 20), R: armsF(80, 20), FL: { heel: 32 }, FR: { heel: 32 }, effort: 0.6 }, SJ_STAND);
const SJ_LAND = P({ hips: { p: [0, 0.79, -0.1], r: [32, 0, 0] }, spine: [6, 0, 0], head: [-26, 0, 0], L: armsF(45, 30), R: armsF(45, 30), effort: 0.9 }, SJ_STAND);
const SJ = {
  id: 'squat-jump',
  name: 'Squat jump',
  short: 'Squat jump',
  sets: 3, reps: 5, unit: 'salti',
  tempo: 'esplosivo · atterraggio morbido · pausa',
  dur: 2.6,
  equip: 'Nessuno',
  prim: ['quadricipiti', 'glutei'],
  sec: ['polpacci', 'femorali'],
  why: 'Attiva il sistema nervoso per la partita: più esplosività nella prima spinta, nei recuperi e nei salti per lo smash. Va fatto per ultimo, quando sei già caldo.',
  cues: [
    'Piedi alla larghezza delle spalle, scendi in mezzo squat portando le braccia indietro.',
    'Spingi forte e salta, le braccia salgono sopra la testa.',
    'Atterra prima sugli avampiedi, poi sul piede intero.',
    'Assorbi piegando anche e ginocchia, ginocchia in linea con le punte.',
    'Fermati un attimo tra un salto e l\'altro: conta la qualità.',
  ],
  errors: ['Atterrare a gambe rigide', 'Ginocchia che si chiudono all\'atterraggio', 'Fare i salti di fila senza controllo'],
  props: { mat: [0.75, 0.9, 0, 0] },
  cam: { p: [2.6, 1.3, 2.8], t: [0, 0.95, 0] },
  keys: [
    { t: 0, pose: SJ_STAND },
    { t: 0.24, pose: SJ_LOW, ease: 'sine' },
    { t: 0.33, pose: SJ_TAKE, ease: 'in' },
    { t: 0.43, pose: SJ_AIR, ease: 'out' },
    { t: 0.53, pose: SJ_TOUCH, ease: 'in' },
    { t: 0.64, pose: SJ_LAND, ease: 'out' },
    { t: 1, pose: SJ_STAND, ease: 'sine' },
  ],
};

export const EXERCISES = [ER, PA, WR, CR, GB, LL, LUNGE_ROT, PALLOF, ROT, SJ];
