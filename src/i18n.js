// Многоезичност: откриване на езика на телефона и достъп до преводите.
import { bg } from './i18n/bg.js';
import { en } from './i18n/en.js';
import { ru } from './i18n/ru.js';
import { ur } from './i18n/ur.js';
import { ps } from './i18n/ps.js';
import { prs } from './i18n/prs.js';
import { hi } from './i18n/hi.js';
import { vi } from './i18n/vi.js';
import { lv } from './i18n/lv.js';
import { lt } from './i18n/lt.js';
import { pl } from './i18n/pl.js';
import { es } from './i18n/es.js';
import { pt } from './i18n/pt.js';
import { a2 as a2_bg } from './i18n/a2/bg.js';
import { a2b as a2b_bg } from './i18n/a2b/bg.js';
import { b as b_bg } from './i18n/b/bg.js';
import { a2 as a2_en } from './i18n/a2/en.js';
import { a2b as a2b_en } from './i18n/a2b/en.js';
import { b as b_en } from './i18n/b/en.js';
import { a2 as a2_ru } from './i18n/a2/ru.js';
import { a2b as a2b_ru } from './i18n/a2b/ru.js';
import { b as b_ru } from './i18n/b/ru.js';
import { a2 as a2_ur } from './i18n/a2/ur.js';
import { a2b as a2b_ur } from './i18n/a2b/ur.js';
import { b as b_ur } from './i18n/b/ur.js';
import { a2 as a2_ps } from './i18n/a2/ps.js';
import { a2b as a2b_ps } from './i18n/a2b/ps.js';
import { b as b_ps } from './i18n/b/ps.js';
import { a2 as a2_prs } from './i18n/a2/prs.js';
import { a2b as a2b_prs } from './i18n/a2b/prs.js';
import { b as b_prs } from './i18n/b/prs.js';
import { a2 as a2_hi } from './i18n/a2/hi.js';
import { a2b as a2b_hi } from './i18n/a2b/hi.js';
import { b as b_hi } from './i18n/b/hi.js';
import { a2 as a2_vi } from './i18n/a2/vi.js';
import { a2b as a2b_vi } from './i18n/a2b/vi.js';
import { b as b_vi } from './i18n/b/vi.js';
import { a2 as a2_lv } from './i18n/a2/lv.js';
import { a2b as a2b_lv } from './i18n/a2b/lv.js';
import { b as b_lv } from './i18n/b/lv.js';
import { a2 as a2_lt } from './i18n/a2/lt.js';
import { a2b as a2b_lt } from './i18n/a2b/lt.js';
import { b as b_lt } from './i18n/b/lt.js';
import { a2 as a2_pl } from './i18n/a2/pl.js';
import { a2b as a2b_pl } from './i18n/a2b/pl.js';
import { b as b_pl } from './i18n/b/pl.js';
import { a2 as a2_es } from './i18n/a2/es.js';
import { a2b as a2b_es } from './i18n/a2b/es.js';
import { b as b_es } from './i18n/b/es.js';
import { a2 as a2_pt } from './i18n/a2/pt.js';
import { a2b as a2b_pt } from './i18n/a2b/pt.js';
import { b as b_pt } from './i18n/b/pt.js';

// Добавя уроците от нива A2, B1 и B2 към езиковия пакет.
function withExtras(pack, extras) {
  const out = { ...pack, path: { ...pack.path }, words: { ...pack.words }, missions: { ...pack.missions } };
  for (const x of extras) {
    Object.assign(out.path, x.path);
    Object.assign(out.words, x.words);
    Object.assign(out.missions, x.missions);
  }
  return out;
}

const PACKS = {
  bg: withExtras(bg, [a2_bg, a2b_bg, b_bg]),
  en: withExtras(en, [a2_en, a2b_en, b_en]),
  ru: withExtras(ru, [a2_ru, a2b_ru, b_ru]),
  ur: withExtras(ur, [a2_ur, a2b_ur, b_ur]),
  ps: withExtras(ps, [a2_ps, a2b_ps, b_ps]),
  prs: withExtras(prs, [a2_prs, a2b_prs, b_prs]),
  hi: withExtras(hi, [a2_hi, a2b_hi, b_hi]),
  vi: withExtras(vi, [a2_vi, a2b_vi, b_vi]),
  lv: withExtras(lv, [a2_lv, a2b_lv, b_lv]),
  lt: withExtras(lt, [a2_lt, a2b_lt, b_lt]),
  pl: withExtras(pl, [a2_pl, a2b_pl, b_pl]),
  es: withExtras(es, [a2_es, a2b_es, b_es]),
  pt: withExtras(pt, [a2_pt, a2b_pt, b_pt]),
};
export const SUPPORTED = Object.keys(PACKS);

// Име на езика на самия език; посока на писане; код за html lang.
export const LANG_NAMES = {
  bg: 'Български', en: 'English', ru: 'Русский',
  ur: 'اردو', ps: 'پښتو', prs: 'دری', hi: 'हिन्दी', vi: 'Tiếng Việt',
  lv: 'Latviešu', lt: 'Lietuvių', pl: 'Polski', es: 'Español', pt: 'Português',
};
const META = {
  ur: { dir: 'rtl', html: 'ur' },
  ps: { dir: 'rtl', html: 'ps' },
  prs: { dir: 'rtl', html: 'fa-AF' },
};
// Български е единственият превод, който авторът може да провери сам. Всички останали са „бета“.
const VERIFIED = new Set(['bg']);

const FALLBACK = 'en';
let current = FALLBACK;

export function isBeta(code) { return !VERIFIED.has(code); }

// Първият поддържан език от списъка на телефона; иначе английски.
// Персийски (fa) се обслужва от дари; пущунски е ps; урду е ur.
export function detect() {
  const list = (typeof navigator !== 'undefined' && (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language])) || [];
  for (const l of list) {
    const code = String(l || '').toLowerCase().split('-')[0];
    if (code === 'fa' || code === 'prs') return 'prs';
    if (SUPPORTED.includes(code)) return code;
  }
  return FALLBACK;
}

export function isRtl() { return (META[current] || {}).dir === 'rtl'; }

export function setLang(code) {
  current = SUPPORTED.includes(code) ? code : FALLBACK;
  if (typeof document !== 'undefined') {
    const m = META[current] || {};
    document.documentElement.lang = m.html || current;
    document.documentElement.dir = m.dir || 'ltr';
    document.title = 'Suomi';
  }
}

export function getLang() { return current; }

function fill(s, vars) {
  if (!vars) return s;
  let out = s;
  for (const k of Object.keys(vars)) out = out.split('{' + k + '}').join(String(vars[k]));
  return out;
}

export function t(key, vars) {
  const s = PACKS[current].ui[key] ?? PACKS[FALLBACK].ui[key] ?? key;
  return fill(s, vars);
}

// Изолира вмъкнат текст (напр. финландска дума в арабски текст), за да не се разбърква посоката.
// В езиците отляво надясно не променя нищо.
export function iso(s) { return isRtl() ? '⁨' + s + '⁩' : String(s); }

export function wordMeaning(group, idx) {
  const own = PACKS[current].words[group];
  if (own && own[idx] !== undefined) return own[idx];
  const fb = PACKS[FALLBACK].words[group];
  return fb ? fb[idx] : '';
}

export function pathTitle(id) {
  return PACKS[current].path[id] ?? PACKS[FALLBACK].path[id] ?? id;
}

export function missionText(id) {
  return PACKS[current].missions[id] ?? PACKS[FALLBACK].missions[id];
}

// Примерна държава за изречението „Откъде си“, различна за всеки език.
export function exampleFrom() { return PACKS[current].ex.from; }
export function exampleCountry() { return PACKS[current].ex.country; }

export function fillCountry(s) { return String(s).split('{country}').join(exampleCountry()); }
export function fillFrom(s) { return String(s).split('{from}').join(exampleFrom()); }

export const _packs = PACKS;
