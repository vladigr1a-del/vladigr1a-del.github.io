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
import { a1x as a1x_bg } from './i18n/a1x/bg.js';
import { a1x as a1x_en } from './i18n/a1x/en.js';
import { a1x as a1x_ru } from './i18n/a1x/ru.js';
import { a1x as a1x_ur } from './i18n/a1x/ur.js';
import { a1x as a1x_ps } from './i18n/a1x/ps.js';
import { a1x as a1x_prs } from './i18n/a1x/prs.js';
import { a1x as a1x_hi } from './i18n/a1x/hi.js';
import { a1x as a1x_vi } from './i18n/a1x/vi.js';
import { a1x as a1x_lv } from './i18n/a1x/lv.js';
import { a1x as a1x_lt } from './i18n/a1x/lt.js';
import { a1x as a1x_pl } from './i18n/a1x/pl.js';
import { a1x as a1x_es } from './i18n/a1x/es.js';
import { a1x as a1x_pt } from './i18n/a1x/pt.js';

import { a2c as a2c_bg } from './i18n/a2c/bg.js';
import { a2c as a2c_en } from './i18n/a2c/en.js';
import { a2c as a2c_ru } from './i18n/a2c/ru.js';
import { a2c as a2c_ur } from './i18n/a2c/ur.js';
import { a2c as a2c_ps } from './i18n/a2c/ps.js';
import { a2c as a2c_prs } from './i18n/a2c/prs.js';
import { a2c as a2c_hi } from './i18n/a2c/hi.js';
import { a2c as a2c_vi } from './i18n/a2c/vi.js';
import { a2c as a2c_lv } from './i18n/a2c/lv.js';
import { a2c as a2c_lt } from './i18n/a2c/lt.js';
import { a2c as a2c_pl } from './i18n/a2c/pl.js';
import { a2c as a2c_es } from './i18n/a2c/es.js';
import { a2c as a2c_pt } from './i18n/a2c/pt.js';

import { b1c as b1c_bg } from './i18n/b1c/bg.js';
import { b1c as b1c_en } from './i18n/b1c/en.js';
import { b1c as b1c_ru } from './i18n/b1c/ru.js';
import { b1c as b1c_ur } from './i18n/b1c/ur.js';
import { b1c as b1c_ps } from './i18n/b1c/ps.js';
import { b1c as b1c_prs } from './i18n/b1c/prs.js';
import { b1c as b1c_hi } from './i18n/b1c/hi.js';
import { b1c as b1c_vi } from './i18n/b1c/vi.js';
import { b1c as b1c_lv } from './i18n/b1c/lv.js';
import { b1c as b1c_lt } from './i18n/b1c/lt.js';
import { b1c as b1c_pl } from './i18n/b1c/pl.js';
import { b1c as b1c_es } from './i18n/b1c/es.js';
import { b1c as b1c_pt } from './i18n/b1c/pt.js';

import { b2c as b2c_bg } from './i18n/b2c/bg.js';
import { b2c as b2c_en } from './i18n/b2c/en.js';
import { b2c as b2c_ru } from './i18n/b2c/ru.js';
import { b2c as b2c_ur } from './i18n/b2c/ur.js';
import { b2c as b2c_ps } from './i18n/b2c/ps.js';
import { b2c as b2c_prs } from './i18n/b2c/prs.js';
import { b2c as b2c_hi } from './i18n/b2c/hi.js';
import { b2c as b2c_vi } from './i18n/b2c/vi.js';
import { b2c as b2c_lv } from './i18n/b2c/lv.js';
import { b2c as b2c_lt } from './i18n/b2c/lt.js';
import { b2c as b2c_pl } from './i18n/b2c/pl.js';
import { b2c as b2c_es } from './i18n/b2c/es.js';
import { b2c as b2c_pt } from './i18n/b2c/pt.js';

import { tst as tst_bg } from './i18n/tests/bg.js';
import { tst as tst_en } from './i18n/tests/en.js';
import { tst as tst_ru } from './i18n/tests/ru.js';
import { tst as tst_ur } from './i18n/tests/ur.js';
import { tst as tst_ps } from './i18n/tests/ps.js';
import { tst as tst_prs } from './i18n/tests/prs.js';
import { tst as tst_hi } from './i18n/tests/hi.js';
import { tst as tst_vi } from './i18n/tests/vi.js';
import { tst as tst_lv } from './i18n/tests/lv.js';
import { tst as tst_lt } from './i18n/tests/lt.js';
import { tst as tst_pl } from './i18n/tests/pl.js';
import { tst as tst_es } from './i18n/tests/es.js';
import { tst as tst_pt } from './i18n/tests/pt.js';
import { m3 as m3_bg } from './i18n/m3/bg.js';
import { m3 as m3_en } from './i18n/m3/en.js';
import { m3 as m3_ru } from './i18n/m3/ru.js';
import { m3 as m3_ur } from './i18n/m3/ur.js';
import { m3 as m3_ps } from './i18n/m3/ps.js';
import { m3 as m3_prs } from './i18n/m3/prs.js';
import { m3 as m3_hi } from './i18n/m3/hi.js';
import { m3 as m3_vi } from './i18n/m3/vi.js';
import { m3 as m3_lv } from './i18n/m3/lv.js';
import { m3 as m3_lt } from './i18n/m3/lt.js';
import { m3 as m3_pl } from './i18n/m3/pl.js';
import { m3 as m3_es } from './i18n/m3/es.js';
import { m3 as m3_pt } from './i18n/m3/pt.js';

function withExtras(pack, extras) {
  const out = { ...pack, ui: { ...pack.ui }, tests: { ...(pack.tests || {}) }, path: { ...pack.path }, words: { ...pack.words }, missions: { ...pack.missions } };
  for (const x of extras) {
    Object.assign(out.path, x.path);
    Object.assign(out.words, x.words);
    Object.assign(out.missions, x.missions);
    if (x.ui) Object.assign(out.ui, x.ui);
    if (x.s) Object.assign(out.tests, x.s);
  }
  return out;
}

const PACKS = {
  bg: withExtras(bg, [a2_bg, a2b_bg, b_bg, a1x_bg, a2c_bg, b1c_bg, b2c_bg, tst_bg, m3_bg]),
  en: withExtras(en, [a2_en, a2b_en, b_en, a1x_en, a2c_en, b1c_en, b2c_en, tst_en, m3_en]),
  ru: withExtras(ru, [a2_ru, a2b_ru, b_ru, a1x_ru, a2c_ru, b1c_ru, b2c_ru, tst_ru, m3_ru]),
  ur: withExtras(ur, [a2_ur, a2b_ur, b_ur, a1x_ur, a2c_ur, b1c_ur, b2c_ur, tst_ur, m3_ur]),
  ps: withExtras(ps, [a2_ps, a2b_ps, b_ps, a1x_ps, a2c_ps, b1c_ps, b2c_ps, tst_ps, m3_ps]),
  prs: withExtras(prs, [a2_prs, a2b_prs, b_prs, a1x_prs, a2c_prs, b1c_prs, b2c_prs, tst_prs, m3_prs]),
  hi: withExtras(hi, [a2_hi, a2b_hi, b_hi, a1x_hi, a2c_hi, b1c_hi, b2c_hi, tst_hi, m3_hi]),
  vi: withExtras(vi, [a2_vi, a2b_vi, b_vi, a1x_vi, a2c_vi, b1c_vi, b2c_vi, tst_vi, m3_vi]),
  lv: withExtras(lv, [a2_lv, a2b_lv, b_lv, a1x_lv, a2c_lv, b1c_lv, b2c_lv, tst_lv, m3_lv]),
  lt: withExtras(lt, [a2_lt, a2b_lt, b_lt, a1x_lt, a2c_lt, b1c_lt, b2c_lt, tst_lt, m3_lt]),
  pl: withExtras(pl, [a2_pl, a2b_pl, b_pl, a1x_pl, a2c_pl, b1c_pl, b2c_pl, tst_pl, m3_pl]),
  es: withExtras(es, [a2_es, a2b_es, b_es, a1x_es, a2c_es, b1c_es, b2c_es, tst_es, m3_es]),
  pt: withExtras(pt, [a2_pt, a2b_pt, b_pt, a1x_pt, a2c_pt, b1c_pt, b2c_pt, tst_pt, m3_pt]),
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

// Превод на изречение от тест за напредък.
export function testSentenceTr(id, idx) {
  const own = PACKS[current].tests[id];
  if (own && own[idx] !== undefined) return own[idx];
  const fb = PACKS[FALLBACK].tests[id];
  return fb ? fb[idx] : '';
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
