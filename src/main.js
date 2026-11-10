import { Stage } from './scene.js';
import { EXERCISES, samplePose } from './exercises.js';
import { MUSCLES } from './muscles.js';
import { applyProps } from './props.js';
import { impactPoint, aimFor } from './court.js';

const $ = (s, r = document) => r.querySelector(s);
const el = (tag, cls, txt) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (txt != null) e.textContent = txt;
  return e;
};

const REST_SET = 20;
const REST_EX = 25;
const SWITCH_SIDE = 6;

const state = {
  idx: 0,
  side: 0,
  hand: 0, // 0 = destrorso, 1 = mancino (vale per tutti i colpi)
  playing: true,
  speed: 1,
  phase: 0, // animation phase in reps
  view: 'auto',
  court: false, // ball on a padel court (strokes only)
  aim: null, // body turned towards the chosen shot (court mode)
  shot: null,
  // routine
  routine: null, // { set, rep, side, mode: 'work'|'rest'|'switch'|'done', left }
};

// ---------- stage ----------
const stageEl = $('#stage-canvas');
const stage = new Stage(stageEl, { modelUrl: window.MODEL_URL || 'Xbot.glb' });
window.addEventListener('resize', () => stage.resize());
new ResizeObserver(() => stage.resize()).observe(stageEl);

// ---------- list ----------
const list = $('#list');
let lastSection = null;
EXERCISES.forEach((ex, i) => {
  const sec = ex.section || 'Attivazione e prevenzione';
  if (sec !== lastSection) {
    list.appendChild(el('div', 'sec-head', sec));
    lastSection = sec;
  }
  const b = el('button', 'item');
  b.type = 'button';
  b.id = 'ex-' + ex.id;
  b.innerHTML = `<span class="num">${String(i + 1).padStart(2, '0')}</span><span class="nm"></span><span class="dose"></span>`;
  $('.nm', b).textContent = ex.name;
  $('.dose', b).textContent = `${ex.sets}×${ex.reps}`;
  b.addEventListener('click', () => {
    stopRoutine();
    select(i);
    if (window.matchMedia('(max-width: 900px)').matches) $('#stage').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  list.appendChild(b);
});

const totalSec = EXERCISES.reduce((acc, ex) => {
  const sides = ex.sided && !ex.handed ? 2 : 1;
  return acc + ex.sets * ex.reps * ex.dur * sides + (ex.sets - 1) * REST_SET + REST_EX;
}, 0);
$('#total').textContent = `${EXERCISES.length} esercizi · circa ${Math.round(totalSec / 60)} min`;

// ---------- selection ----------
const COURT_CAMS = {
  auto: { p: [0.4, 5.4, -7.2], t: [2.7, 0.0, 8.6] },
  front: { p: [2.5, 25, 3.6], t: [2.5, 0, 4.2] },
  side: { p: [-11.5, 5.5, 5.0], t: [2.5, 1.0, 5.5] },
  back: { p: [1.4, 3.4, 13.4], t: [0.4, 1.3, 1.2] },
};
const courtActive = () => state.court && !!EXERCISES[state.idx].court;
function camFor(ex) {
  if (state.court && ex.court) {
    const c = structuredClone(COURT_CAMS[state.view]);
    // the court cameras are set for a player 4 m from the net
    const dz = ex.court.net - 4;
    c.p[2] += dz; c.t[2] += dz;
    return c; // same court half for both hands: the camera is not mirrored
  }
  const c = structuredClone(ex.cam);
  if (state.side === 1 && ex.sided) { c.p[0] = -c.p[0]; c.t[0] = -c.t[0]; }
  if (state.view === 'auto') return c;
  const t = c.t;
  const d = Math.hypot(c.p[0] - t[0], c.p[2] - t[2]);
  const h = c.p[1];
  const v = { front: [t[0], h, t[2] + d], side: [t[0] + d, h, t[2]], back: [t[0], h, t[2] - d] }[state.view];
  return { p: v, t };
}

function sideMuscles(ex) {
  if (!ex.sideMuscles) return null;
  const base = ex.sideMuscles;
  return state.side === 0 ? base : base === 'R' ? 'L' : 'R';
}

function select(i, { keepCam = false, keepSide = false } = {}) {
  state.idx = i;
  const ex = EXERCISES[i];
  if (ex.handed) state.side = state.hand;
  else if (!keepSide) state.side = 0;
  state.phase = 0;
  document.querySelectorAll('.item').forEach((b, k) => b.setAttribute('aria-current', k === i ? 'true' : 'false'));
  $('#ex-num').textContent = `${String(i + 1).padStart(2, '0')} / ${EXERCISES.length}`;
  $('#ex-name').textContent = ex.name;
  $('#dose-big').textContent = `${ex.sets}×${ex.reps}`;
  $('#dose-unit').textContent = ex.unit;
  $('#tempo').textContent = ex.tempo;
  $('#equip').textContent = ex.equip;
  $('#why').textContent = ex.why;
  const cues = $('#cues'); cues.replaceChildren(...ex.cues.map((c) => el('li', null, c)));
  const errs = $('#errors'); errs.replaceChildren(...ex.errors.map((c) => el('li', null, c)));
  const chips = (keys, cls) => keys.map((k) => el('span', 'chip ' + cls, MUSCLES[k].name));
  $('#prim').replaceChildren(...chips(ex.prim, 'p'));
  $('#sec').replaceChildren(...chips(ex.sec, 's'));
  $('#sec-row').hidden = ex.sec.length === 0;
  $('#tactics-block').hidden = !ex.tactics;
  if (ex.tactics) $('#tactics').replaceChildren(...ex.tactics.map((c) => el('li', null, c)));
  $('#court').hidden = !ex.court;
  const sideBox = $('#side');
  sideBox.hidden = !ex.sided;
  if (ex.sided) {
    const labels = ex.sideLabels || ['Lato A', 'Lato B'];
    sideBox.querySelectorAll('button').forEach((b, k) => {
      b.textContent = labels[k];
      b.setAttribute('aria-pressed', k === state.side ? 'true' : 'false');
    });
  }
  if (stage.rig) stage.setMuscles(ex.prim, ex.sec, sideMuscles(ex));
  refreshCourt();
  if (!keepCam) stage.frame(camFor(ex).p, camFor(ex).t, !stage.rig);
  try { history.replaceState(null, '', '#' + ex.id); } catch (e) { /* ignore */ }
  updateRoutineUI();
}

function setSide(s) {
  state.side = s;
  if (EXERCISES[state.idx].handed) state.hand = s;
  const ex = EXERCISES[state.idx];
  $('#side').querySelectorAll('button').forEach((b, k) => b.setAttribute('aria-pressed', k === s ? 'true' : 'false'));
  stage.setMuscles(ex.prim, ex.sec, sideMuscles(ex));
  refreshCourt();
  stage.frame(camFor(ex).p, camFor(ex).t);
}
$('#side').querySelectorAll('button').forEach((b, k) => b.addEventListener('click', () => setSide(k)));

// ---------- controls ----------
const playBtn = $('#play');
function setPlaying(p) {
  state.playing = p;
  playBtn.setAttribute('aria-label', p ? 'Pausa' : 'Riproduci');
  playBtn.dataset.state = p ? 'playing' : 'paused';
}
playBtn.addEventListener('click', () => setPlaying(!state.playing));
$('#prev').addEventListener('click', () => { stopRoutine(); select((state.idx + EXERCISES.length - 1) % EXERCISES.length); });
$('#next').addEventListener('click', () => { stopRoutine(); select((state.idx + 1) % EXERCISES.length); });
$('#speed').addEventListener('click', (e) => {
  state.speed = state.speed === 1 ? 0.5 : 1;
  e.currentTarget.textContent = state.speed === 1 ? '1×' : '0,5×';
  e.currentTarget.setAttribute('aria-pressed', state.speed !== 1 ? 'true' : 'false');
});
const VIEWS = [['auto', 'consigliata', 'consigliata'], ['front', 'fronte', 'dall\'alto'], ['side', 'lato', 'di lato'], ['back', 'dietro', 'dall\'altro campo']];
const viewLabel = () => 'Vista: ' + VIEWS.find((v) => v[0] === state.view)[courtActive() ? 2 : 1];
$('#view').addEventListener('click', (e) => {
  const k = (VIEWS.findIndex((v) => v[0] === state.view) + 1) % VIEWS.length;
  state.view = VIEWS[k][0];
  e.currentTarget.textContent = viewLabel();
  const c = camFor(EXERCISES[state.idx]);
  stage.frame(c.p, c.t);
});

// ---------- court: where the ball goes ----------
function refreshCourt() {
  const ex = EXERCISES[state.idx];
  const on = courtActive();
  $('#court').setAttribute('aria-pressed', on ? 'true' : 'false');
  $('#shots').hidden = !on;
  $('#view').textContent = viewLabel();
  if (!stage.rig) return;
  stage.setCourt(on);
  if (!on) return;
  if (!ex.court.shots.some((s) => s.id === state.shot)) state.shot = ex.court.shots[0].id;
  const shot = ex.court.shots.find((s) => s.id === state.shot);
  const box = $('#shot-pills');
  box.replaceChildren(...ex.court.shots.map((s) => {
    const b = el('button', 'pill shot');
    b.type = 'button';
    b.style.setProperty('--c', s.color);
    b.append(el('i', 'sdot'), s.label);
    b.setAttribute('aria-pressed', s.id === state.shot ? 'true' : 'false');
    b.addEventListener('click', () => { state.shot = s.id; refreshCourt(); });
    return b;
  }));
  $('#shot-text').textContent = shot.text;
  state.aim = aimFor(ex, state.side, shot, stage.rig, samplePose);
  stage.court.configure(ex.court, impactPoint(stage.rig, samplePose(ex, ex.court.hit, state.side, state.aim)), state.side, state.shot, ex.dur);
}
$('#court').addEventListener('click', () => {
  state.court = !state.court;
  state.view = 'auto';
  refreshCourt();
  const c = camFor(EXERCISES[state.idx]);
  stage.frame(c.p, c.t);
});

// ---------- routine (guided workout) ----------
let audioCtx = null;
function beep(freq = 880, dur = 0.12) {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.frequency.value = freq; o.type = 'sine';
    g.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.25, audioCtx.currentTime + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
    o.connect(g).connect(audioCtx.destination);
    o.start(); o.stop(audioCtx.currentTime + dur + 0.02);
  } catch (e) { /* audio not available */ }
}
let wakeLock = null;
async function keepAwake(on) {
  try {
    if (on && navigator.wakeLock) wakeLock = await navigator.wakeLock.request('screen');
    else if (!on && wakeLock) { await wakeLock.release(); wakeLock = null; }
  } catch (e) { /* not granted */ }
}

function startRoutine(from = 0) {
  state.routine = { set: 1, rep: 0, mode: 'work', left: 0 };
  select(from);
  setPlaying(true);
  beep(660); beep(990, 0.18);
  keepAwake(true);
  document.body.classList.add('in-routine');
  updateRoutineUI();
}
function stopRoutine() {
  if (!state.routine) return;
  state.routine = null;
  keepAwake(false);
  document.body.classList.remove('in-routine');
  updateRoutineUI();
}
$('#start').addEventListener('click', () => (state.routine ? stopRoutine() : startRoutine(state.idx)));
$('#stop').addEventListener('click', stopRoutine);
$('#skip').addEventListener('click', () => { if (state.routine) endRest(); });

function onRepDone() {
  const r = state.routine;
  if (!r || r.mode !== 'work') return;
  const ex = EXERCISES[state.idx];
  r.rep++;
  beep(r.rep === ex.reps ? 990 : 740, 0.07);
  if (r.rep < ex.reps) return updateRoutineUI();
  // reps finished
  if (ex.sided && !ex.handed && state.side === 0) {
    r.mode = 'switch'; r.left = SWITCH_SIDE; r.rep = 0;
  } else if (r.set < ex.sets) {
    r.mode = 'rest'; r.left = REST_SET;
  } else if (state.idx < EXERCISES.length - 1) {
    r.mode = 'rest'; r.left = REST_EX; r.nextEx = true;
  } else {
    r.mode = 'done';
    keepAwake(false);
  }
  updateRoutineUI();
}
function endRest() {
  const r = state.routine;
  if (!r) return;
  const ex = EXERCISES[state.idx];
  if (r.mode === 'switch') {
    setSide(1);
  } else if (r.mode === 'rest' && r.nextEx) {
    r.nextEx = false; r.set = 1;
    select(state.idx + 1);
  } else if (r.mode === 'rest') {
    r.set++;
    if (ex.sided && !ex.handed) setSide(0);
  } else return;
  r.mode = 'work'; r.rep = 0; state.phase = 0;
  beep(990, 0.2);
  updateRoutineUI();
}

function updateRoutineUI() {
  const r = state.routine;
  const ex = EXERCISES[state.idx];
  const box = $('#routine');
  $('#start').textContent = r ? 'Esci dalla routine' : 'Inizia routine';
  box.hidden = !r;
  if (!r) return;
  const sideTxt = ex.sided ? ` · ${(ex.sideLabels || ['Lato A', 'Lato B'])[state.side]}` : '';
  $('#r-set').textContent = `Serie ${r.set} di ${ex.sets}${sideTxt}`;
  const resting = r.mode === 'rest' || r.mode === 'switch';
  box.dataset.mode = r.mode;
  $('#r-count').textContent = r.mode === 'done' ? 'Fatto' : resting ? String(Math.ceil(r.left)) : `${r.rep}`;
  $('#r-of').textContent = r.mode === 'done' ? '' : resting ? 's' : `/ ${ex.reps}`;
  $('#r-label').textContent = r.mode === 'done' ? 'Routine completata. Buona partita!'
    : r.mode === 'switch' ? 'Cambia lato'
    : r.mode === 'rest' && r.nextEx ? `Recupero · poi: ${EXERCISES[state.idx + 1].name}`
    : r.mode === 'rest' ? 'Recupero'
    : 'Ripetizioni';
  $('#skip').hidden = !resting;
  const doneEx = state.idx + (r.mode === 'done' ? 1 : 0);
  $('#r-bar').style.width = `${(doneEx / EXERCISES.length) * 100}%`;
}

// ---------- loop ----------
let last = performance.now();
let lastRepInt = 0;
function tick(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  const ex = EXERCISES[state.idx];
  const r = state.routine;
  if (r && (r.mode === 'rest' || r.mode === 'switch')) {
    const before = Math.ceil(r.left);
    r.left -= dt;
    if (Math.ceil(r.left) !== before && r.left <= 3 && r.left > 0) beep(600, 0.06);
    if (r.left <= 0) endRest();
    else $('#r-count').textContent = String(Math.ceil(r.left));
  }
  const animate = state.playing && !(r && r.mode !== 'work');
  if (animate) state.phase += (dt * state.speed) / ex.dur;
  const repInt = Math.floor(state.phase);
  while (lastRepInt < repInt && !(state.routine && state.routine.mode !== 'work')) { lastRepInt++; onRepDone(); }
  lastRepInt = repInt;
  if (r && r.mode !== 'work') { state.phase = 0; lastRepInt = 0; }
  if (stage.rig) {
    const pose = samplePose(ex, state.phase, ex.sided ? state.side : 0, courtActive() ? state.aim : null);
    stage.rig.apply(pose);
    applyProps(stage, ex, pose);
    if (stage.courtOn) stage.court.update(state.phase, stage.camera.aspect);
    const pulse = 0.5 + 0.5 * Math.sin(now / 260);
    stage.setEffort(Math.min(1, (pose.effort || 0) * (0.85 + 0.15 * pulse)));
  }
  stage.render(dt);
  requestAnimationFrame(tick);
}

stage.ready.then(() => {
  document.body.classList.add('ready');
  const ex = EXERCISES[state.idx];
  stage.setMuscles(ex.prim, ex.sec, sideMuscles(ex));
  refreshCourt();
  const c = camFor(ex);
  stage.frame(c.p, c.t, true);
}).catch((err) => {
  $('#loading').textContent = 'Non riesco a caricare il manichino 3D. Ricarica la pagina.';
  console.error(err);
});

const fromHash = EXERCISES.findIndex((e) => '#' + e.id === location.hash);
select(fromHash >= 0 ? fromHash : 0);
setPlaying(true);
requestAnimationFrame(tick);
window.addEventListener('hashchange', () => {
  const k = EXERCISES.findIndex((e) => '#' + e.id === location.hash);
  if (k >= 0 && k !== state.idx) select(k);
});

// test hook
window.__app = { state, stage, EXERCISES, select, setSide, samplePose, applyProps, refreshCourt };
