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
// aim: optional { yaw, hflex, win: [a, b, c, d] } that turns the stroke towards a target, in world
// degrees (+ = towards +X, the player's left). Ramps in between a and b, holds to c, out by d.
// yaw goes to hips (40%) and chest (60%); hflex swings the racket arm around the chest.
function applyAim(pose, t, aim) {
  const [a, b, c, d] = aim.win;
  const sm = (x) => x * x * (3 - 2 * x);
  const w = t <= a || t >= d ? 0 : t < b ? sm((t - a) / (b - a)) : t <= c ? 1 : sm((d - t) / (d - c));
  if (!w) return pose;
  // from the impact to the end of the follow-through the chest goes on turning towards the target
  const k = t <= b ? 0 : t >= c ? 1 : sm((t - b) / (c - b));
  const yaw = aim.yaw + ((aim.yawF ?? aim.yaw) - aim.yaw) * k;
  pose.hips.r[1] += 0.4 * yaw * w;
  pose.spine[1] += 0.6 * yaw * w;
  if (pose.head) pose.head[1] -= 0.45 * yaw * w;
  const rs = pose.props && pose.props.racket;
  if (rs && pose[rs].mode === 'fk') pose[rs].hflex = (pose[rs].hflex || 0) + (rs === 'R' ? 1 : -1) * aim.hflex * w;
  return pose;
}

export function samplePose(ex, phase, side = 0, aim = null) {
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
  const out = mirror ? mirrorPose(pose) : pose;
  return aim ? applyAim(out, t, aim) : out;
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
//  3. Estensione del polso con elastico sotto il piede (seduto)
// ===================================================================
const SIT = P({
  hips: { p: [0, 0.635, -0.04], r: [34, 0, 0] },
  spine: [16, 0, 0],
  head: [-14, 0, 0],
  FL: { x: 0.16, z: 0.4, out: 10 },
  FR: { x: -0.16, z: 0.4, out: 10 },
  L: { mode: 'ik', space: 'world', t: [0.15, 0.665, 0.3], hint: [0.6, -1, -0.4], pron: 80, wflex: 5, grip: 0.3 },
  props: { bench: [0, 0, -0.1], bandFoot: 'R', bandHand: 'R' },
});
const wristArm = (wflex) => ({ mode: 'ik', space: 'world', t: [-0.14, 0.672, 0.51], hint: [-0.35, -1, -0.5], pron: 88, wflex, grip: 1 });
const WR = {
  id: 'estensione-polso',
  name: 'Estensione del polso con elastico',
  short: 'Estensione polso',
  sets: 2, reps: 10, unit: 'rip per braccio',
  tempo: '1 s su · 2–3 s giù',
  dur: 4.0,
  sided: true,
  sideLabels: ['Braccio destro', 'Braccio sinistro'],
  sideMuscles: 'R',
  equip: 'Elastico leggero e una sedia',
  prim: ['estensori'],
  sec: ['flessori'],
  why: 'Gli estensori del polso lavorano a ogni impatto con la palla. Rinforzarli, soprattutto nella fase di discesa lenta, è uno dei metodi più efficaci per prevenire l\'epicondilite (il "gomito del tennista").',
  cues: [
    'Seduto, avambraccio appoggiato sulla coscia, il polso esce oltre il ginocchio.',
    'Blocca un capo dell\'elastico sotto il piede dello stesso lato, l\'altro capo in mano con il palmo verso il basso.',
    'Solleva il dorso della mano muovendo solo il polso.',
    'Scendi lentamente in 2–3 secondi: è la parte più utile dell\'esercizio.',
    'L\'avambraccio resta fermo sulla coscia per tutta la serie.',
  ],
  errors: ['Sollevare l\'avambraccio dalla coscia', 'Usare un elastico troppo duro', 'Lasciar tornare l\'elastico di colpo'],
  props: { band: 'foot', mat: [0.9, 0.9, 0, 0.1] },
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
//  8. Dead bug
// ===================================================================
const DB_LEG = { x: 0.11, z: 0.493, y: 0.7, heel: -90, toeFlat: false, toe: 6 };
const DB_BASE = P({
  hips: { p: [0, 0.168, 0], r: [-90, 0, 0] },
  spine: [0, 0, 0],
  head: [8, 0, 0],
  L: { mode: 'fk', flex: 90, abd: 6, rot: 0, elbow: 4, pron: 0, grip: 0.3 },
  R: { mode: 'fk', flex: 90, abd: 6, rot: 0, elbow: 4, pron: 0, grip: 0.3 },
  FL: { ...DB_LEG, knee: [0.1, 1, -0.4] },
  FR: { ...DB_LEG, x: -0.11, knee: [-0.1, 1, -0.4] },
});
// right arm overhead + left leg long, a few cm above the floor
const DB_EXT = P({
  R: { flex: 165, abd: 8, elbow: 6 },
  FL: { z: 0.935, y: 0.35, heel: -82 },
  effort: 1,
}, DB_BASE);
const DEADBUG = {
  id: 'dead-bug',
  name: 'Dead bug',
  short: 'Dead bug',
  sets: 2, reps: 8, unit: 'rip per lato',
  tempo: '2 s in allungamento · 2 s ritorno',
  dur: 7.2,
  mirror: 'alt',
  equip: 'Tappetino',
  prim: ['addome', 'obliqui'],
  sec: ['quadricipiti', 'deltAnt'],
  why: 'Insegna al core a tenere ferma la zona lombare mentre braccia e gambe si muovono. È la stessa stabilità che ti serve quando colpisci in allungo o sopra la testa senza perdere l\'equilibrio.',
  cues: [
    'Supino, braccia tese verso il soffitto, anche e ginocchia piegate a 90°.',
    'Schiaccia la zona lombare contro il tappetino e tienila lì per tutta la serie.',
    'Allunga lentamente un braccio dietro la testa e la gamba opposta in avanti, appena sopra il pavimento.',
    'Espira mentre allunghi, torna al centro e cambia lato.',
  ],
  errors: ['Staccare la zona lombare dal tappetino', 'Andare veloce', 'Trattenere il respiro'],
  props: { mat: [0.66, 1.9, 0, 0.0] },
  cam: { p: [2.7, 1.25, 0.6], t: [0, 0.35, 0.05] },
  keys: [
    { t: 0, pose: DB_BASE },
    { t: 0.42, pose: DB_EXT, ease: 'sine' },
    { t: 0.52, pose: DB_EXT, ease: 'lin' },
    { t: 1, pose: DB_BASE, ease: 'sine' },
  ],
};

// ===================================================================
//  9. Diagonale con elastico sotto il piede (dal basso al alto)
// ===================================================================
const LIFT_BASE = P({
  FL: { x: 0.21, z: 0, out: 12 },
  FR: { x: -0.21, z: 0, out: 12 },
  props: { bandFoot: 'L' },
});
const liftLow = P({
  hips: { p: [0.04, 0.79, -0.1], r: [34, 20, 0] },
  spine: [12, 16, 0],
  head: [-20, 10, 0],
  L: { mode: 'ik', space: 'world', t: [0.3, 0.46, 0.3], hint: [0.6, -0.4, -0.7], pron: 30, grip: 1 },
  R: { mode: 'ik', space: 'world', t: [0.22, 0.48, 0.35], hint: [-0.3, -0.5, -0.8], pron: 30, grip: 1 },
  effort: 0.3,
}, LIFT_BASE);
const liftHigh = P({
  hips: { p: [-0.02, 1.03, 0.01], r: [2, -12, 0] },
  spine: [-4, -30, 0],
  head: [4, -14, 0],
  L: { mode: 'ik', space: 'world', t: [-0.22, 1.76, 0.3], hint: [0.4, -1, 0.1], pron: 20, grip: 1 },
  R: { mode: 'ik', space: 'world', t: [-0.3, 1.72, 0.25], hint: [-0.7, -1, -0.1], pron: 20, grip: 1 },
  effort: 1,
}, LIFT_BASE);
const LIFT = {
  id: 'diagonale-elastico',
  name: 'Diagonale con elastico sotto il piede',
  short: 'Diagonale elastico',
  sets: 2, reps: 8, unit: 'rip per lato',
  tempo: 'veloce in salita · 2 s in discesa',
  dur: 2.8,
  sided: true,
  sideLabels: ['Sotto il piede sinistro', 'Sotto il piede destro'],
  equip: 'Elastico medio',
  prim: ['obliqui', 'glutei'],
  sec: ['quadricipiti', 'deltAnt', 'addome'],
  why: 'Allena la rotazione dal basso verso l\'alto che dà potenza a smash, vibora e uscite di parete. La forza parte dalle gambe, passa dalle anche e arriva alle braccia, senza bisogno di agganciare l\'elastico.',
  cues: [
    'Blocca l\'elastico sotto il piede sinistro, impugna l\'altro capo con entrambe le mani.',
    'Parti accosciato, busto ruotato verso il piede sinistro, mani vicino alla caviglia.',
    'Spingi con le gambe e ruota, portando le mani in diagonale sopra la spalla destra.',
    'Le braccia restano quasi tese: il movimento lo fanno anche e busto.',
    'Torna giù lentamente, poi fai l\'altro lato.',
  ],
  errors: ['Tirare solo con le braccia', 'Inarcare la schiena in alto', 'Piegare le ginocchia verso l\'interno'],
  props: { band: 'foot', mat: [0.9, 0.9, 0, 0] },
  cam: { p: [0.5, 1.4, 3.4], t: [0, 1.0, 0.1] },
  keys: [
    { t: 0, pose: liftLow },
    { t: 0.24, pose: liftHigh, ease: 'out' },
    { t: 0.34, pose: liftHigh, ease: 'lin' },
    { t: 1, pose: liftLow, ease: 'sine' },
  ],
};

// ===================================================================
//  COLPI A VUOTO (shadow) — destrorso; il lato B è il mancino
//  La rete è verso +Z. Mano destra = racchetta.
// ===================================================================
// racket arm by joint angles; the racket orientation follows from the hand
const fk = (o) => ({ mode: 'fk', flex: 0, abd: 0, hflex: 0, rot: 0, elbow: 90, pron: 0, wflex: 0, wdev: 0, grip: 1, ...o });
// free (left) hand: chest-space target, blended onto the racket throat by attachW
const freeL = (t, hint, attachW = 0, grip = 0.3) => ({ mode: 'ik', t, hint, attachW, grip, pron: 10 });
const throat = freeL([0.02, -0.16, 0.3], [0.7, -1, -0.3], 1, 0.85);
const R_READY = { mode: 'ik', space: 'world', t: [-0.131, 1.092, 0.296], hint: [-0.4, -1, -0.2], pron: -9, wflex: -8, wdev: 20, grip: 1 };
const NET = P({
  hips: { p: [0, 0.95, -0.02], r: [12, 0, 0] },
  spine: [4, 0, 0],
  head: [-10, 0, 0],
  FL: { x: 0.24, z: 0, out: 10, pivot: 'ball' },
  FR: { x: -0.24, z: 0, out: 10, pivot: 'ball' },
  R: R_READY,
  L: throat,
  props: { racket: 'R' },
});

// ---------- Bandeja ----------
// Ricostruita sul video di riferimento (fasi: attesa, girata con due mani,
// preparazione alta con braccio sinistro che indica la palla, impatto davanti
// e sopra la spalla destra, accompagnamento in avanti verso sinistra, rientro).
// Il braccio della racchetta è in angoli articolari (FK): tra una fase e l'altra
// le articolazioni ruotano in modo continuo, senza scorciatoie davanti al viso.
const B_READY = P({ R: fk({ flex: 30, abd: 18, rot: 49, elbow: 105, pron: 27, wflex: -36, wdev: -9 }) }, NET);
const B_TURN = P({
  hips: { p: [0, 0.96, -0.06], r: [8, -55, 0] }, spine: [2, -15, 0], head: [-6, 50, 0],
  FL: { x: 0.24, z: 0, out: -45 },
  FR: { x: -0.1, z: -0.34, out: 72 },
  R: fk({ flex: 15, abd: 30, hflex: 45, rot: -21, elbow: 120, pron: 12, wflex: -30, wdev: -17, scap: [4, 0] }),
  L: freeL([0.02, -0.1, 0.3], [0.7, -1, -0.3], 1, 0.85),
}, B_READY);
const B_PREP = P({
  hips: { p: [0, 0.97, -0.12], r: [6, -62, 0] }, spine: [0, -18, 0], head: [-14, 58, 0],
  FL: { x: 0.24, z: 0, out: -50 },
  FR: { x: -0.1, z: -0.34, out: 74 },
  R: fk({ flex: 0, abd: 100, hflex: 20, rot: -60, elbow: 105, pron: -24, wflex: -32, wdev: -30, scap: [12, 4] }),
  L: freeL([0.3, 0.55, 0.28], [0.6, -0.4, -0.6], 0, 0.15),
}, B_TURN);
const B_LOOP = P({ R: fk({ flex: 0, abd: 112, hflex: 31, rot: -81, elbow: 112, pron: -34, wflex: -49, wdev: -30, scap: [14, 6] }) }, B_PREP);
const B_HIT = P({
  hips: { p: [0.02, 0.98, -0.04], r: [4, -38, 0] }, spine: [0, -4, 0], head: [-16, 38, 0],
  FR: { heel: 22 },
  R: fk({ flex: 0, abd: 130, hflex: 90, rot: 0, elbow: 20, pron: -8, wflex: -24, wdev: -30, scap: [14, 0] }),
  L: freeL([0.18, 0.05, 0.3], [0.8, -1, -0.3], 0, 0.3),
  effort: 1,
}, B_PREP);
const B_FOLLOW = P({
  hips: { p: [0.05, 0.96, 0.04], r: [8, -18, 0] }, spine: [6, 6, 0], head: [-10, 12, 0],
  FR: { heel: 36 },
  R: fk({ flex: 0, abd: 75, hflex: 100, rot: 16, elbow: 25, pron: -16, wflex: -33, wdev: 2, scap: [4, -6] }),
  L: freeL([0.12, -0.02, 0.24], [0.8, -1, -0.2], 0, 0.3),
  effort: 0.5,
}, B_HIT);
// il piede destro torna in avanti nella posizione di attesa
const B_STEP_FWD = P({ FR: { x: -0.17, z: -0.17, y: 0.07, heel: 10, toeFlat: false } }, lerpPose(B_FOLLOW, B_READY, 0.5));
// racket kept a hand's width in front of the face while the shoulders turn
const B_STEP_BACK = P({ FR: { x: -0.17, z: -0.17, y: 0.07, heel: 10, toeFlat: false },
  R: fk({ flex: 22, abd: 24, hflex: 22, rot: 13, elbow: 95, pron: 16, wflex: -33, wdev: -13, scap: [2, 0] }) }, lerpPose(B_READY, B_TURN, 0.5));

// continental grip, shared by all the strokes
const GRIP_CUES = [
  'Continental: la stessa impugnatura per volée, bandeja, vibora e smash. Non la cambi tra dritto e rovescio.',
  'Per trovarla tieni la racchetta di taglio, con il bordo verso l\'alto, e prendila come un martello: la V tra pollice e indice sta sullo spigolo superiore del manico.',
  'Il fondo del manico resta nel palmo, vicino al tallone della mano. Sopra l\'indice rimane un po\' di manico libero.',
  'Indice leggermente staccato dalle altre dita, lungo il manico come sul grilletto: dà controllo al piatto.',
  'Stretta morbida in attesa, più ferma solo all\'impatto. Una presa sempre stretta irrigidisce polso e gomito.',
  'In attesa l\'altra mano tiene la racchetta dal cuore: la porta su nella preparazione e lascia la mano forte rilassata.',
];

// ---------- Volée di dritto (ricostruita sul tutorial di riferimento) ----------
// Angoli ricavati dal video: stima della postura 3D sulle tre ripetizioni a mezza altezza,
// con le direzioni nel piano dell'immagine corrette sulle posizioni 2D dei fotogrammi.
// Attesa: gomiti vicino ai fianchi, avambracci in avanti, racchetta davanti al petto.
const V_READY = P({ hips: { p: [0.02, 0.94, 0.12], r: [17, 2, -2] }, spine: [8, 1, 1], head: [-20, -3, 0],
  FL: { x: 0.25, z: 0.06, out: 10, pivot: 'ball' }, FR: { x: -0.21, z: -0.06, out: 10, pivot: 'ball' },
  R: fk({ flex: 20, abd: 13, hflex: -6, rot: 25, elbow: 93, pron: -1, wflex: -13, wdev: 25 }) }, B_READY);
const V_SPLIT = P({ hips: { p: [0.01, 0.97, 0.06] }, FL: { heel: 14, y: 0.025, toeFlat: false }, FR: { heel: 14, y: 0.025, toeFlat: false } }, V_READY);
// lo split step atterra un po' più largo, con il piede destro leggermente indietro
const V_LAND = P({ hips: { p: [-0.03, 0.9, 0.04], r: [14, 0, 0] }, FL: { x: 0.29, z: 0.085 }, FR: { x: -0.28, z: -0.2 } }, V_READY);
// Preparazione: gomito alto, all'altezza della spalla e in fuori; avambraccio verso l'alto,
// racchetta verticale sopra la mano; braccio sinistro disteso in avanti e in basso.
const V_PREP = P({ hips: { p: [-0.045, 0.89, 0.01], r: [12, -18, 4] }, spine: [9, -28, 8], head: [-17, 41, 0],
  R: fk({ flex: 68, abd: 113, hflex: 58, rot: -32, elbow: 43, pron: 20, wflex: -29, wdev: -14, scap: [8, 2] }),
  L: freeL([0.62, -0.1, 0.24], [0.4, -1, -0.3], 0, 0.15) }, V_LAND);
// Impatto: il gomito scende davanti al fianco destro all'altezza del petto, l'avambraccio va
// avanti verso la palla, polso fermo e piegato indietro; racchetta inclinata in fuori con la
// testa all'altezza del viso, piatto verso la palla. Braccio sinistro aperto all'altezza della spalla.
const V_HIT = P({ hips: { p: [0.045, 0.885, 0.37], r: [13, -17, 1] }, spine: [9, -22, 9], head: [-18, 34, 0],
  FL: { x: 0.3, z: 0.66, out: 8 }, FR: { heel: 16 },
  R: fk({ flex: 50, abd: 36, hflex: 44, rot: -68, elbow: 100, pron: 55, wflex: -8, wdev: -25, scap: [4, 0] }),
  L: freeL([0.66, -0.04, 0.22], [0.4, -1, -0.3], 0, 0.15), effort: 1 }, V_PREP);
// Chiusura: braccio disteso verso sinistra all'altezza della spalla, racchetta verticale,
// busto in avanti sul piede sinistro; la mano sinistra torna a prendere la racchetta dal cuore.
const V_FOLLOW = P({ hips: { p: [0.035, 0.82, 0.48], r: [28, 4, -2] }, spine: [20, 5, 6], head: [-36, -6, 0],
  FR: { heel: 38 },
  R: fk({ flex: 18, abd: 106, hflex: 120, rot: -28, elbow: 34, pron: -14, wflex: -9, wdev: 10, scap: [2, -4] }),
  L: freeL([0.02, -0.16, 0.3], [0.7, -1, -0.3], 1, 0.85), effort: 0.5 }, V_HIT);
// la racchetta sale sul lato destro della testa, mai davanti al viso
const V_RISE = P({ R: fk({ flex: 19, abd: 43, hflex: 28, rot: -62, elbow: 115, pron: 33, wflex: -22, wdev: -25, scap: [3, 1] }),
  L: freeL([0.4, -0.08, 0.42], [0.7, -1, -0.1], 0.3, 0.3) }, lerpPose(V_LAND, V_PREP, 0.5));
// passo di scarico: dopo la preparazione il piede sinistro va avanti e porta il peso verso la palla
const V_STEP = P({ FL: { x: 0.3, z: 0.36, y: 0.07, heel: 8, out: 8, toeFlat: false } }, lerpPose(V_PREP, V_HIT, 0.4));
// rientro: il piede sinistro torna indietro, poi il destro si rimette in linea
const V_LIFT = P({ FL: { y: 0.04, heel: 10, toeFlat: false } }, V_FOLLOW);
// le due mani riportano la racchetta davanti al petto mentre il piede sinistro rientra
const V_BACK = P({ FL: { x: 0.27, z: 0.36, y: 0.07, heel: 8, toeFlat: false }, R: V_READY.R }, lerpPose(V_FOLLOW, V_LAND, 0.5));
const V_RET = P({ FL: { x: 0.25, z: 0.06 } }, V_LAND);
const V_BACK2 = P({ FR: { x: -0.24, z: -0.13, y: 0.04, heel: 8, toeFlat: false } }, lerpPose(V_RET, V_READY, 0.5));

const VOLEE_FH = {
  id: 'volee-dritto',
  name: 'Volée di dritto a vuoto',
  short: 'Volée dritto',
  section: 'Colpi a vuoto',
  sets: 2, reps: 8, unit: 'rip',
  tempo: 'attesa · preparazione corta · impatto davanti · accompagna verso la rete',
  dur: 3.2,
  sided: true,
  sideLabels: ['Destrorso', 'Mancino'],
  handed: true,
  equip: 'La tua racchetta, senza palla',
  gripCues: GRIP_CUES,
  prim: ['deltAnt', 'estensori'],
  sec: ['obliqui', 'quadricipiti', 'cuffia'],
  why: 'La volée è il colpo con cui comandi il punto da rete. Ripeterla a vuoto fissa la preparazione corta, l\'impatto davanti e il passo che scarica il peso in avanti, e scalda spalla e avambraccio nella posizione che userai in partita.',
  cues: [
    'Attesa a 2-3 metri dalla rete: gambe poco più larghe delle spalle e leggermente piegate, racchetta alta davanti a te. Ti sposti verso il centro se la palla arriva dalla diagonale, verso il centro della tua metà se arriva dal lungolinea.',
    'Preparazione: porti la racchetta di lato, con la mano all\'altezza della testa, girando appena il busto. Il gomito resta alto, all\'altezza della spalla, e la racchetta sta sopra la mano. Non superare mai la linea delle spalle.',
    'Mano sinistra in avanti: la racchetta va verso la mano sinistra e colpisce la palla davanti al corpo.',
    'All\'impatto il gomito scende davanti al fianco, il polso resta fermo e piegato un po\' indietro: la testa della racchetta resta più alta della mano, all\'altezza del viso.',
    'Passo di scarico in avanti mentre colpisci: il peso va verso la palla, la racchetta accompagna in avanti verso l\'altro campo.',
    'A fine colpo la mano sinistra riprende la racchetta dal cuore e insieme la riportano davanti al petto: rientra subito nella posizione di attesa.',
  ],
  errors: [
    'Racchetta bassa in attesa, come in difesa: le palle dalle spalle in su (e bandeja e smash) diventano più difficili.',
    'Preparazione troppo ampia, oltre la linea della spalla, per dare più forza: non fai in tempo e la palla finisce sul vetro.',
    'Fare il passo in avanti mentre prepari: l\'impatto finisce dietro la testa. Prima prepari, poi scarichi il peso.',
    'Volée bassa con taglio o in top spin: si alza dopo la rete, non arriva profonda e diventa comoda per gli avversari.',
  ],
  tactics: [
    'Profondità prima di tutto: la palla deve rimbalzare tra la riga e il vetro, così gli avversari faticano a contrattaccare.',
    'Direzione: soprattutto in diagonale. Hai più spazio per colpire e c\'è l\'angolo: dopo la doppia parete per loro è più difficile.',
    'Varia: gioca nello spazio libero dove non c\'è nessuno, per far spostare uno dei due avversari.',
    'Se la palla è abbastanza alta puoi giocarla verso la griglia: il rimbalzo sarà irregolare.',
    'Mezza altezza: piatta per togliere tempo o con taglio per tenerli in difesa. Alta: piatta, verso lo spazio libero. Bassa: sempre piatta.',
    'Se la palla arriva molto veloce non c\'è tempo per il passo: resta fermo con le gambe e manda avanti solo la racchetta.',
    'Schiaffo al volo, sulla palla lenta a mezza altezza: preparazione un po\' più ampia, colpisci da dietro e cerca molta profondità. La palla rimbalza subito sul vetro e torna verso il tuo campo.',
  ],
  court: {
    hit: 0.46,
    aimWin: [0.36, 0.46, 0.64, 0.84],
    net: 2.5,
    lob: { from: [5.2, 0.9, 11.6], start: 0.2 },
    shots: [
      { id: 'diag', label: 'Diagonale profonda', color: '#3ddc84', land: [5.5, 10.9], time: 0.6, glassUp: 0.35,
        text: 'La scelta principale: profonda, tra la riga e il vetro, e in diagonale. C\'è più spazio e c\'è l\'angolo: dopo la doppia parete per l\'avversario è più difficile.' },
      { id: 'free', label: 'Spazio libero', color: '#4a8cff', land: [-1.3, 11.0], time: 0.55, glassUp: 0.4, flat: true,
        text: 'Gioca dove non c\'è nessuno: qui lungolinea, per far spostare uno dei due avversari.' },
      { id: 'grid', label: 'Alla griglia', color: '#ffc23a', land: [6.85, 6.4], time: 0.5, glassUp: 0.3, flat: true,
        text: 'Se la palla è abbastanza alta: verso la griglia. Dopo il rimbalzo sulla rete metallica la palla esce irregolare.' },
      { id: 'slap', label: 'Schiaffo al volo', color: '#c77dff', land: [3.6, 11.9], time: 0.42, glassUp: 1, flat: true,
        text: 'Volée d\'attacco sulla palla lenta a mezza altezza: molto profonda, rimbalza subito sul vetro e torna verso il tuo campo, togliendo tempo agli avversari.' },
      { id: 'short', label: 'Errore: corta', color: '#ff5233', land: [3.8, 7.0], time: 0.62, glassUp: 0.9, error: true, errorAt: 'bounce', errorLabel: 'Corta: contrattaccano',
        text: 'Da evitare: se rimbalza prima della riga, gli avversari hanno tempo e spazio per contrattaccare e mandarti in difesa.' },
    ],
  },
  props: { mat: [1.0, 1.3, 0, 0.1] },
  cam: { p: [0.3, 1.4, 3.6], t: [0, 1.15, 0] },
  keys: [
    { t: 0, pose: V_READY },
    { t: 0.06, pose: V_SPLIT, ease: 'out' },
    { t: 0.12, pose: V_LAND, ease: 'in' },
    { t: 0.2, pose: V_RISE, ease: 'sine' },
    { t: 0.28, pose: V_PREP, ease: 'sine' },
    { t: 0.36, pose: V_PREP, ease: 'lin' },
    { t: 0.41, pose: V_STEP, ease: 'sine' },
    { t: 0.46, pose: V_HIT, ease: 'in' },
    { t: 0.54, pose: V_FOLLOW, ease: 'out' },
    { t: 0.64, pose: V_FOLLOW, ease: 'lin' },
    { t: 0.69, pose: V_LIFT, ease: 'sine' },
    { t: 0.78, pose: V_BACK, ease: 'sine' },
    { t: 0.86, pose: V_RET, ease: 'sine' },
    { t: 0.93, pose: V_BACK2, ease: 'sine' },
    { t: 1, pose: V_READY, ease: 'sine' },
  ],
};

const BANDEJA = {
  id: 'bandeja',
  name: 'Bandeja a vuoto',
  short: 'Bandeja',
  section: 'Colpi a vuoto',
  sets: 2, reps: 6, unit: 'rip',
  tempo: 'girata · preparazione alta · impatto davanti · accompagna verso l\'altro campo',
  dur: 4.2,
  sided: true,
  sideLabels: ['Destrorso', 'Mancino'],
  handed: true,
  equip: 'La tua racchetta, senza palla',
  gripCues: GRIP_CUES,
  prim: ['deltAnt', 'cuffia'],
  sec: ['obliqui', 'tricipiti', 'estensori'],
  why: 'La bandeja ("vassoio") si gioca sui pallonetti che non ti scavalcano e che non riesci a schiacciare. Serve a difendere la rete: tieni gli avversari dietro e rientri a rete il prima possibile. Ripeterla a vuoto fissa la sequenza giusta e scalda la spalla nella posizione che userai in partita.',
  cues: [
    'Attesa a 2-3 metri dalla rete: racchetta all\'altezza della testa, mano sinistra sul cuore, gambe poco più larghe delle spalle.',
    'Appena vedi il pallonetto: gamba destra indietro e racchetta su con tutte e due le mani, ti metti di profilo. Piccoli passi per fermarti comodo.',
    'Preparazione: gomito all\'altezza della spalla, punta della racchetta in alto, mano sinistra in avanti che indica la palla.',
    'Impatto all\'altezza degli occhi, davanti, con il braccio disteso. Sotto la palla ma un po\' alla sua sinistra, mai esattamente sotto.',
    'Dopo l\'impatto la racchetta va avanti verso l\'altro campo e il piatto gira leggermente verso l\'alto, come un vassoio (taglio). Poi passi veloci in avanti: torna a rete.',
  ],
  errors: [
    'Andare sotto la palla come per lo smash: resta a una distanza di braccio + racchetta, un po\' a sinistra.',
    'Colpire troppo in alto per fretta: dopo il vetro la palla rimbalza alta e comoda.',
    'Gomito basso in preparazione: colpisci dal basso verso l\'alto e la palla sale dopo il vetro.',
    'Preparare con il piatto rivolto verso l\'alto (mano troppo aperta): colpisci la palla da sotto.',
  ],
  tactics: [
    'Profondità: mandala tra la linea di servizio e il vetro di fondo, così gli avversari restano dietro e non contrattaccano.',
    'Direzione: soprattutto in diagonale, verso l\'angolo. Punta prima il vetro di fondo: poi la palla va sul vetro laterale e l\'avversario deve giocare la doppia parete, chiuso nell\'angolo.',
    'Se tocca prima il vetro laterale, dopo il vetro di fondo esce verso il centro: palla comoda, che possono giocare tutti e due gli avversari.',
    'Lungolinea solo per la bandeja d\'attacco, quando vuoi togliere tempo all\'avversario.',
    'Se la palla ti sta scavalcando e non riesci a piazzarti, giocala piatta verso la griglia: il rimbalzo irregolare dà fastidio.',
    'Più sei lontano dalla rete, più è difesa: impatto un po\' più alto e meno effetto. Più sei vicino, più è attacco: impatto più basso e più taglio.',
    'Si gioca da tutti e due i lati del campo. Dopo il colpo, passi veloci in avanti per riprendere la rete.',
  ],
  // ball on a court: impact at phase `hit`; world metres, player at the origin facing the net (+Z)
  court: {
    hit: 0.53,
    aimWin: [0.42, 0.53, 0.72, 0.88],
    net: 4,
    lob: { from: [5.0, 1.0, 12.2], start: 0.08 },
    shots: [
      { id: 'diag', label: 'Diagonale', color: '#3ddc84', land: [5.4, 12.6], time: 0.74, glassUp: 0.3,
        text: 'La scelta principale: diagonale e profonda. Rimbalza tra la linea e il vetro, tocca prima il vetro di fondo e poi il laterale: l\'avversario deve giocare la doppia parete chiuso nell\'angolo.' },
      { id: 'line', label: 'Lungolinea (attacco)', color: '#4a8cff', land: [-1.4, 12.7], time: 0.64, glassUp: 0.3,
        text: 'Bandeja d\'attacco, quando sei vicino alla rete: lungolinea e veloce per togliere tempo all\'avversario.' },
      { id: 'grid', label: 'Piatta alla griglia', color: '#ffc23a', land: [6.9, 8.4], time: 0.6, glassUp: 0.3, flat: true,
        text: 'Quando la palla ti sta scavalcando e non riesci a piazzarti: piatta verso la griglia. Il rimbalzo sulla rete metallica è irregolare e dà fastidio.' },
      { id: 'side', label: 'Errore: vetro laterale', color: '#ff5233', land: [6.75, 10.5], time: 0.74, glassUp: 0.9, error: true,
        text: 'Da evitare: se tocca prima il vetro laterale, dopo il vetro di fondo esce verso il centro, alta e comoda. Diventa un contrattacco per gli avversari.' },
    ],
  },
  props: { mat: [1.0, 1.3, 0, -0.1] },
  cam: { p: [0.4, 1.5, 3.4], t: [0, 1.25, 0] }, // come nel video: dalla rete, davanti al giocatore
  keys: [
    { t: 0, pose: B_READY },
    { t: 0.08, pose: B_STEP_BACK, ease: 'sine' },
    { t: 0.16, pose: B_TURN, ease: 'sine' },
    { t: 0.32, pose: B_PREP, ease: 'sine' },
    { t: 0.42, pose: B_PREP, ease: 'lin' },
    { t: 0.48, pose: B_LOOP, ease: 'sine' },
    { t: 0.53, pose: B_HIT, ease: 'in' },
    { t: 0.62, pose: B_FOLLOW, ease: 'out' },
    { t: 0.72, pose: B_FOLLOW, ease: 'lin' },
    { t: 0.86, pose: B_STEP_FWD, ease: 'sine' },
    { t: 1, pose: B_READY, ease: 'sine' },
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
  section: 'Esplosività',
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

export const EXERCISES = [ER, PA, WR, CR, GB, LL, LUNGE_ROT, DEADBUG, LIFT, VOLEE_FH, BANDEJA, SJ];
