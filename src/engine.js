// Двигател: запазване на напредъка, умно повторение, подбор на думи за сесия.
import { WORD_GROUPS, PATH, ALL_PATH } from './content.js';
import { wordMeaning } from './i18n.js';
import { CONFIG, paywallOn } from './config.js';
import { levelOfGroup } from './content.js';

const KEY = 'finapp.v1';
// След успешно повторение думата се връща след 1, 3, 7, 14, 30 дни.
export const INTERVALS = [1, 3, 7, 14, 30];
// Дума е „научена“ след три успешни повторения (box >= 2).
export const KNOWN_BOX = 2;

// Имената на профилите са в преводите (ageKid, ageAdult, ageSenior).
export const AGE = {
  kid: { newPerSession: 5, scale: 1 },
  adult: { newPerSession: 6, scale: 1 },
  senior: { newPerSession: 4, scale: 1.25 },
};

function defaults() {
  // lang: null = автоматично (езикът на телефона)
  return { v: 1, age: null, lang: null, words: {}, missions: {}, dayOffset: 0, trialStart: null, unlocked: false };
}

let state = load();

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaults();
    const parsed = JSON.parse(raw);
    return Object.assign(defaults(), parsed);
  } catch (e) {
    return defaults();
  }
}

export function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch (e) {
    /* хранилището може да не е налично */
  }
}

export function getState() { return state; }

export function resetAll() {
  const keepLang = state.lang;
  const keepTrial = { trialStart: state.trialStart, unlocked: state.unlocked };
  state = defaults();
  state.lang = keepLang;
  Object.assign(state, keepTrial);
  save();
}

export function setAge(age) { state.age = age; save(); }
export function setLangPref(lang) { state.lang = lang; save(); }

export function today() {
  const d = new Date();
  return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000) + state.dayOffset;
}

function realToday() {
  const d = new Date();
  return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
}

// Пробният период тръгва при първото отваряне и не се нулира при изтриване на напредъка.
export function ensureTrial() {
  if (state.trialStart === null || state.trialStart === undefined) { state.trialStart = realToday(); save(); }
}
export function trialDaysLeft() {
  ensureTrial();
  return Math.max(0, CONFIG.trialDays - (today() - state.trialStart));
}
export function trialDaysUsed() {
  ensureTrial();
  return Math.max(0, today() - state.trialStart);
}
export function setUnlocked(v) { state.unlocked = !!v; save(); }
export function isUnlocked() { return !!state.unlocked; }

export function isLevelLocked(levelId) {
  if (!paywallOn() || state.unlocked) return false;
  if (CONFIG.freeLevels.includes(levelId)) return false;
  return trialDaysLeft() <= 0;
}
export function isGroupLocked(group) { return isLevelLocked(levelOfGroup(group)); }

export function advanceDay() { state.dayOffset += 1; save(); }

// Всички думи като обекти
export function allWords() {
  const out = [];
  for (const gid of Object.keys(WORD_GROUPS)) {
    WORD_GROUPS[gid].words.forEach((fi, idx) => {
      // tr е значението на езика на приложението
      out.push({ id: gid + ':' + fi, group: gid, fi, tr: wordMeaning(gid, idx) });
    });
  }
  return out;
}

export function wordsOf(group) { return allWords().filter((w) => (Array.isArray(group) ? group.includes(w.group) : w.group === group)); }

export function wState(id) {
  return state.words[id] || { box: -1, due: 0 };
}

export function isKnown(id) { return wState(id).box >= KNOWN_BOX; }

export function groupCounts(group) {
  const ws = group ? wordsOf(group) : allWords();
  let k = 0, p = 0, n = 0;
  for (const w of ws) {
    const s = wState(w.id);
    if (s.box === -1) n++; else if (s.box >= KNOWN_BOX) k++; else p++;
  }
  return { known: k, learning: p, fresh: n, total: ws.length };
}

export function dueWords(group) {
  const t = today();
  const ws = group ? wordsOf(group) : allWords();
  return ws.filter((w) => { const s = wState(w.id); return s.box >= 0 && s.due <= t && !isGroupLocked(w.group); });
}

export function freshWords(group, limit) {
  let ws;
  if (group) {
    ws = wordsOf(group).filter((w) => wState(w.id).box === -1);
  } else {
    // по реда на пътя: първата група, която още има нови думи
    ws = [];
    for (const item of ALL_PATH) {
      if (isGroupLocked(item.group)) continue;
      const g = wordsOf(item.group).filter((w) => wState(w.id).box === -1);
      if (g.length) { ws = g; break; }
    }
  }
  return ws.slice(0, limit);
}

export function ageProfile() { return AGE[state.age] || AGE.adult; }

// Сесия: думи за повторение + нови думи.
export function buildSession(group) {
  const due = dueWords(group).slice(0, 12);
  const fresh = freshWords(group, ageProfile().newPerSession);
  return { due, fresh, list: due.concat(fresh) };
}

// Видове задачи за дума според напредъка ѝ
export function taskSequence(w) {
  const s = wState(w.id);
  const canLetters = !/\s/.test(w.fi) && w.fi.length <= 10;
  let seq;
  if (s.box === -1) seq = ['tr', 'fi', 'say'];
  else if (s.box < KNOWN_BOX) seq = ['fi', 'letters'];
  else seq = ['letters'];
  return seq.map((t) => (t === 'letters' && !canLetters ? 'fi' : t));
}

// Прилага резултатите от сесията. fails: множество от id на думи с грешка.
export function applyResults(list, fails) {
  const t = today();
  let newlyKnown = 0;
  for (const w of list) {
    const s = wState(w.id);
    let box;
    let due;
    if (fails.has(w.id)) {
      box = Math.max(0, s.box === -1 ? 0 : s.box - 1);
      due = t + 1;
    } else {
      box = Math.min(INTERVALS.length - 1, s.box + 1);
      due = t + INTERVALS[box];
      if (box === KNOWN_BOX && s.box < KNOWN_BOX) newlyKnown++;
    }
    state.words[w.id] = { box, due };
  }
  save();
  return newlyKnown;
}

// Минимално „знам този набор“: всички думи на групата стават научени.
export function markGroupKnown(group) {
  const t = today();
  for (const w of wordsOf(group)) {
    state.words[w.id] = { box: KNOWN_BOX, due: t + INTERVALS[KNOWN_BOX] };
  }
  save();
}

export function missionDone(id) { return !!state.missions[id]; }
export function setMissionDone(id) { state.missions[id] = true; save(); }

export function pathStatus(item) {
  if (item.type === 'mission') {
    return missionDone(item.id) ? 'done' : 'todo';
  }
  const c = groupCounts(item.group);
  return c.known === c.total ? 'done' : 'todo';
}

export function dueBuckets() {
  const t = today();
  const b = { d1: 0, d3: 0, d7: 0, later: 0 };
  for (const w of allWords()) {
    const s = wState(w.id);
    if (s.box < 0) continue;
    const d = s.due - t;
    if (d <= 1) b.d1++; else if (d <= 3) b.d3++; else if (d <= 7) b.d7++; else b.later++;
  }
  return b;
}

export function requiredDone() {
  return PATH.filter((p) => p.required).every((p) => pathStatus(p) === 'done');
}

// ---------- резервно копие (код за пренос на нов телефон) ----------
// Пази се само напредъкът (думи, уроци, профил, език). Пробният период и покупката не се пренасят.
const CODE_PREFIX = 'FIN2.';

function toB64(bytes) {
  let bin = '';
  for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function fromB64(str) {
  const b = atob(str.replace(/-/g, '+').replace(/_/g, '/'));
  const out = new Uint8Array(b.length);
  for (let i = 0; i < b.length; i++) out[i] = b.charCodeAt(i);
  return out;
}
async function pipe(bytes, stream) {
  const res = new Response(new Blob([bytes]).stream().pipeThrough(stream));
  return new Uint8Array(await res.arrayBuffer());
}

export async function exportCode() {
  const data = { a: state.age, l: state.lang, d: state.dayOffset, w: state.words, m: state.missions };
  const raw = new TextEncoder().encode(JSON.stringify(data));
  const bytes = typeof CompressionStream === 'function' ? await pipe(raw, new CompressionStream('gzip')) : raw;
  return CODE_PREFIX + (typeof CompressionStream === 'function' ? 'z' : 'r') + toB64(bytes);
}

export async function importCode(code) {
  try {
    const c = String(code || '').replace(/\s+/g, '');
    if (!c.startsWith(CODE_PREFIX)) return false;
    const mode = c[CODE_PREFIX.length];
    let bytes = fromB64(c.slice(CODE_PREFIX.length + 1));
    if (mode === 'z') bytes = await pipe(bytes, new DecompressionStream('gzip'));
    else if (mode !== 'r') return false;
    const data = JSON.parse(new TextDecoder().decode(bytes));
    if (!data || typeof data.w !== 'object' || typeof data.m !== 'object') return false;
    for (const v of Object.values(data.w)) if (!v || typeof v.box !== 'number' || typeof v.due !== 'number') return false;
    state.words = data.w;
    state.missions = data.m;
    if (data.a === 'kid' || data.a === 'adult' || data.a === 'senior') state.age = data.a;
    if (typeof data.l === 'string' || data.l === null) state.lang = data.l;
    state.dayOffset = typeof data.d === 'number' ? data.d : 0;
    save();
    return true;
  } catch (e) {
    return false;
  }
}

// Иска от браузъра да не изтрива данните при липса на място.
export async function requestPersist() {
  try {
    if (navigator.storage && navigator.storage.persist) return await navigator.storage.persist();
  } catch (e) { /* не е налично */ }
  return false;
}
