import { PATH, MISSIONS, WORD_GROUPS, LEVELS, levelGroups, levelOfGroup, testsOf } from './content.js';
import { CONFIG, paywallOn, setTestPaywall } from './config.js';

let curLevel = null;
import * as E from './engine.js';
import * as I from './i18n.js';

const { t } = I;
const root = document.getElementById('app');

/* ---------- помощни функции ---------- */
function el(tag, props = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'class') e.className = v;
    else if (k === 'style') e.style.cssText = v;
    else if (k === 'text') e.textContent = v;
    else if (k === 'fi') { e.setAttribute('dir', 'ltr'); e.setAttribute('lang', 'fi'); }
    else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v === true ? '' : v);
  }
  for (const kid of kids.flat()) {
    if (kid === null || kid === undefined || kid === false) continue;
    e.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
  }
  return e;
}

const ICONS = {
  check: '<path d="M5 12l5 5L20 7"/>',
  play: '<path d="M7 5l12 7-12 7z"/>',
  mic: '<path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/>',
  volume: '<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9a4 4 0 0 1 0 6"/>',
  back: '<path d="M15 5l-7 7 7 7"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  user: '<path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  circle: '<circle cx="12" cy="12" r="8"/>',
};
function icon(name) {
  const s = document.createElement('span');
  s.innerHTML = '<svg class="ic' + (name === 'back' ? ' flip' : '') + '" viewBox="0 0 24 24" aria-hidden="true">' + ICONS[name] + '</svg>';
  return s.firstChild;
}

function shuffle(a) {
  const x = a.slice();
  for (let i = x.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [x[i], x[j]] = [x[j], x[i]];
  }
  return x;
}

function applyScale() {
  document.documentElement.style.setProperty('--s', String(E.ageProfile().scale));
}

function applyLang() {
  const pref = E.getState().lang;
  I.setLang(pref && I.SUPPORTED.includes(pref) ? pref : I.detect());
}

function ageLabel(k) { return t({ kid: 'ageKid', adult: 'ageAdult', senior: 'ageSenior' }[k]); }
function ageSub(k) { return t({ kid: 'ageKidSub', adult: 'ageAdultSub', senior: 'ageSeniorSub' }[k]); }

function show(...nodes) {
  root.replaceChildren(...nodes.flat().filter(Boolean));
  window.scrollTo(0, 0);
}

function speak(text, holder) {
  try {
    if (!window.speechSynthesis) throw new Error('няма');
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'fi-FI';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
    if (holder) holder.textContent = '';
  } catch (e) {
    if (holder) holder.textContent = t('soundMissing');
  }
}

function buzz() { try { if (navigator.vibrate) navigator.vibrate(15); } catch (e) { /* няма */ } }

function msg(kind, text) { return el('div', { class: 'msg ' + kind, text }); }

function backBar(label, onBack, right) {
  return el('div', { class: 'spread', style: 'margin-bottom:12px' },
    el('button', { class: 'icon ghost', 'aria-label': t('back'), onclick: onBack }, icon('back')),
    el('p', { class: 'muted small', text: label }),
    right || el('span', { style: 'width:44px' }));
}

function counterCard(group, title) {
  const c = E.groupCounts(group);
  const pct = (n) => (c.total ? (n / c.total) * 100 : 0);
  return el('div', { class: 'card' },
    el('div', { class: 'spread' },
      el('b', { text: title || t('learnedWords') }),
      el('span', { class: 'muted small', text: t('ofTotal', { k: c.known, n: c.total }) })),
    el('div', { class: 'bar', style: 'margin-top:8px' },
      el('i', { class: 'k', style: 'width:' + pct(c.known) + '%' }),
      el('i', { class: 'l', style: 'width:' + pct(c.learning) + '%' })),
    el('div', { class: 'stats' },
      el('div', { class: 'stat' }, el('b', { text: String(c.known) }), el('span', { text: t('learned') })),
      el('div', { class: 'stat' }, el('b', { text: String(c.learning) }), el('span', { text: t('learning') })),
      el('div', { class: 'stat' }, el('b', { text: String(c.fresh) }), el('span', { text: t('fresh') }))));
}

/* ---------- начало ---------- */
function onboarding() {
  show(
    el('h1', { text: t('welcome') }),
    el('p', { class: 'muted', style: 'margin:6px 0 16px', text: t('whoLearns') }),
    ...['kid', 'adult', 'senior'].map((k) =>
      el('button', {
        style: 'margin-bottom:10px; text-align:start',
        onclick: () => { E.setAge(k); applyScale(); home(); },
      },
      el('b', { text: ageLabel(k) }),
      el('div', { class: 'muted small', text: ageSub(k) }))),
    el('p', { class: 'muted small', style: 'margin-top:16px', text: t('calmNote') }));
}

function trialBanner() {
  if (!paywallOn() || E.isUnlocked()) return null;
  const left = E.trialDaysLeft();
  const used = E.trialDaysUsed();
  let text = null;
  let withBtn = false;
  if (left <= 0) { text = t('trialOverMsg'); withBtn = true; }
  else if (left <= 2) { text = t('trialEndingMsg', { n: left }); withBtn = true; }
  else if (used <= 1) { text = t('trialStartMsg', { n: left }); }
  if (!text) return null;
  return el('div', { class: 'card', style: 'margin-bottom:12px' },
    el('p', { class: 'muted', text }),
    withBtn ? el('button', { style: 'margin-top:10px', onclick: paywall }, t('plansBtn')) : null);
}

function paywall() {
  const note = el('div');
  const plan = (label, price, accent) => el('button', {
    class: accent ? 'selected' : '',
    style: 'margin-bottom:8px; display:flex; justify-content:space-between; width:100%; text-align:start',
    onclick: () => note.replaceChildren(msg('no', t('billingSoon'))),
  }, el('span', { text: label }), el('b', { text: price }));
  show(
    backBar(t('plansBtn'), home),
    el('h1', { text: t('planHeading') }),
    el('p', { class: 'muted', style: 'margin:6px 0 16px', text: t('planSub') }),
    plan(t('planMonthly'), CONFIG.prices.monthly, false),
    plan(t('planYearly'), CONFIG.prices.yearly, false),
    plan(t('planLifetime'), CONFIG.prices.lifetime, true),
    el('button', { class: 'primary', style: 'margin-top:8px', onclick: () => note.replaceChildren(msg('no', t('billingSoon'))) }, t('choosePlan')),
    note,
    el('p', { class: 'muted small', style: 'margin-top:12px; text-align:center', text: t('cancelAnytime') }),
    el('button', { class: 'ghost', style: 'margin-top:8px', onclick: () => note.replaceChildren(msg('no', t('billingSoon'))) }, t('restorePurchase')));
}

function home() {
  applyScale();
  E.ensureTrial();
  const due = E.dueWords(null).length;
  const fresh = Math.min(E.ageProfile().newPerSession, E.freshWords(null, 99).length);
  if (!curLevel) curLevel = E.requiredDone() && LEVELS[0].path.every((p) => E.pathStatus(p) === 'done') ? 'A2' : 'A1';
  const lv = LEVELS.find((l) => l.id === curLevel);
  const next = lv.path.find((p) => E.pathStatus(p) !== 'done');
  const req = lv.path.filter((p) => p.required);
  const reqDone = req.filter((p) => E.pathStatus(p) === 'done').length;

  const todayCard = el('div', { class: 'card' },
    el('h2', { text: t('todayWords') }),
    due + fresh > 0
      ? el('p', { class: 'muted', text: t('todayCount', { due, fresh }) })
      : el('p', { class: 'muted', text: t('todayNone') }),
    due + fresh > 0 ? el('button', { class: 'primary', style: 'margin-top:12px', onclick: () => sessionRun(null, home) }, t('start')) : null);

  const tabs = el('div', { class: 'spread', style: 'gap:8px; margin-bottom:12px' },
    ...LEVELS.map((l) => el('button', { class: l.id === curLevel ? 'primary' : '', style: 'flex:1', 'aria-pressed': String(l.id === curLevel), onclick: () => { curLevel = l.id; home(); } }, l.id)));

  const list = lv.path.map((p) => {
    const st = E.pathStatus(p);
    const isNext = next && next.id === p.id;
    return el('div', {
      class: 'item ' + (st === 'done' ? 'done ' : '') + (isNext ? 'next' : ''),
      tabindex: '0', role: 'button',
      onclick: () => itemScreen(p),
      onkeydown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); itemScreen(p); } },
    },
    el('div', { class: 'dot' }, icon(st === 'done' ? 'check' : isNext ? 'play' : 'circle')),
    el('div', { style: 'flex:1; min-width:0' },
      el('div', { class: 't' }, I.pathTitle(p.id), p.required ? el('span', { class: 'badge', text: t('requiredBadge') }) : null),
      el('div', { fi: true, class: 'muted small', text: p.sub })));
  });

  show(
    el('div', { class: 'spread', style: 'margin-bottom:12px' },
      el('h1', { text: t('appTitle').replace(/A1$/, curLevel) }),
      el('button', { class: 'icon ghost', 'aria-label': t('settingsAria'), onclick: settings }, icon('gear'))),
    trialBanner(),
    tabs,
    counterCard(levelGroups(curLevel)),
    todayCard,
    el('h2', { text: t('path') }),
    req.length ? el('p', { class: 'muted small', style: 'margin-bottom:8px', text: t('requiredNote', { done: reqDone, total: req.length }) }) : null,
    ...list,
    testsSection(lv),
    curLevel === 'A1' && E.requiredDone() ? msg('ok', t('requiredAllDone')) : null);
}

/* ---------- тестове за напредък ---------- */
function testsSection(lv) {
  const tests = testsOf(lv.id);
  if (!tests.length) return null;
  const L = lv.path.length;
  const cards = tests.map((test, i) => {
    const res = E.testResult(test.id);
    const a = Math.round((i * L) / tests.length) + 1;
    const b = Math.round(((i + 1) * L) / tests.length);
    return el('div', {
      class: 'item ' + (res ? 'done' : ''), tabindex: '0', role: 'button', 'data-test': test.id,
      onclick: () => testRun(test),
      onkeydown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); testRun(test); } },
    },
    el('div', { class: 'dot' }, icon(res ? 'check' : 'circle')),
    el('div', { style: 'flex:1; min-width:0' },
      el('div', { class: 't', text: t('testName', { n: test.n }) }),
      el('div', { class: 'muted small', text: res ? t('testBest', { k: res.k, n: res.n }) : t('testCovers', { a, b }) })));
  });
  return el('div', { style: 'margin-top:20px' },
    el('h2', { text: t('testsHeading') }),
    el('p', { class: 'muted small', style: 'margin:4px 0 8px', text: t('testsDesc') }),
    ...cards);
}

function testRun(test) {
  if (E.isLevelLocked(test.level)) { paywall(); return; }
  const name = t('testName', { n: test.n });
  const total = test.sentences.length;
  let i = 0;
  let clean = 0;
  const back = () => { curLevel = test.level; home(); };

  function segs(all) {
    return el('div', { class: 'segs' }, ...test.sentences.map((_, k) => el('i', { class: all ? 'done' : k < i ? 'done' : k === i ? 'cur' : '' })));
  }

  function step() {
    const s = test.sentences[i];
    const n = s.answer.length;
    const slots = new Array(n).fill(null);
    const slotsEl = el('div', { class: 'slots' });
    const bank = el('div');
    const fb = el('div');
    let solved = false;
    let helped = false;
    const next = el('button', { class: 'primary', style: 'display:none; margin-top:8px', onclick: () => { i++; i < total ? step() : finish(); } }, i === total - 1 ? t('testFinish') : t('continue'));
    const check = el('button', { class: 'primary', style: 'margin-top:6px' }, t('check'));
    const hint = el('button', { style: 'margin-top:8px' }, t('hintBtn'));

    function draw() {
      slotsEl.replaceChildren(); bank.replaceChildren();
      const nx = slots.indexOf(null);
      slots.forEach((w, k) => {
        const sl = el('div', { class: 'slot' + (k === nx && !solved ? ' next' : '') }, el('span', { class: 'n', text: String(k + 1) }));
        if (w) sl.append(el('span', { fi: true, class: 'chip', tabindex: '0', role: 'button', onclick: () => { if (solved) return; slots[k] = null; fb.replaceChildren(); draw(); } }, w));
        slotsEl.append(sl);
      });
      s.words.filter((w) => !slots.includes(w)).forEach((w) => {
        bank.append(el('span', { fi: true, class: 'chip', tabindex: '0', role: 'button', onclick: () => {
          if (solved) return;
          const f = slots.indexOf(null);
          if (f >= 0) { slots[f] = w; buzz(); }
          fb.replaceChildren(); draw();
        } }, w));
      });
    }
    check.onclick = () => {
      if (solved) return;
      if (slots.includes(null)) { fb.replaceChildren(msg('no', t('placeAll'))); return; }
      if (slots.join(' ') === s.answer.join(' ')) {
        solved = true;
        if (!helped) clean++;
        fb.replaceChildren(msg('ok', t('right')));
        check.style.display = 'none'; hint.style.display = 'none';
        next.style.display = 'block';
        draw();
      } else {
        helped = true;
        fb.replaceChildren(msg('no', t('startWith', { w: I.iso(s.answer[0]) })));
      }
    };
    hint.onclick = () => {
      if (solved) return;
      helped = true;
      const cp = slots.indexOf(s.answer[0]);
      if (cp !== 0) { if (cp > 0) slots[cp] = null; slots[0] = s.answer[0]; }
      fb.replaceChildren(msg('no', t('hintFirst', { w: I.iso(s.answer[0]) })));
      draw();
    };
    draw();
    show(
      backBar(name, back),
      segs(false),
      el('p', { class: 'muted small', style: 'text-align:center', text: t('testProgress', { i: i + 1, n: total }) }),
      el('p', { class: 'prompt', text: t('testPrompt') }),
      el('div', { class: 'bigword' }, el('span', { text: I.testSentenceTr(test.id, i) })),
      slotsEl, bank, check, hint, fb, next);
  }

  function finish() {
    E.setTestResult(test.id, clean, total);
    const res = E.testResult(test.id);
    const ratio = clean / total;
    const note = ratio >= 0.8 ? t('testHigh') : ratio >= 0.5 ? t('testMid') : t('testLow');
    show(
      backBar(name, back),
      segs(true),
      el('h1', { text: t('testDoneTitle') }),
      el('div', { class: 'card', style: 'margin-top:12px; background:var(--ok-bg); color:var(--ok)' },
        el('b', { 'data-test-score': String(clean), text: t('testScore', { k: clean, n: total }) }),
        el('p', { style: 'margin-top:8px', text: note }),
        el('p', { class: 'small', style: 'margin-top:8px', text: t('testBest', { k: res.k, n: res.n }) })),
      el('button', { class: 'primary', style: 'margin-top:12px', onclick: () => testRun(test) }, t('testRetry')),
      el('button', { style: 'margin-top:8px', onclick: back }, t('toPath')));
  }

  step();
}

/* ---------- екран на урок ---------- */
function itemScreen(item) {
  if (E.isGroupLocked(item.group)) { paywall(); return; }
  const g = WORD_GROUPS[item.group];
  const title = I.pathTitle(item.id);
  const nodes = [backBar(t('lesson'), home), el('h1', { text: title }), el('p', { fi: true, class: 'muted', style: 'margin:4px 0 14px', text: item.sub })];
  if (item.type === 'mission') {
    nodes.push(el('div', { class: 'card' },
      el('h2', { text: t('conversation') }),
      el('p', { class: 'muted', text: t('conversationDesc') }),
      el('button', { class: 'primary', style: 'margin-top:12px', onclick: () => missionRun(item) }, E.missionDone(item.id) ? t('again') : t('start'))));
  }
  nodes.push(counterCard(item.group, t('wordsOfLesson')));
  nodes.push(el('div', { class: 'card' },
    el('h2', { text: t('words') }),
    el('p', { class: 'muted', text: t('wordsDesc', { n: g.words.length }) }),
    el('button', { class: item.type === 'words' ? 'primary' : '', style: 'margin-top:12px', onclick: () => sessionRun(item.group, () => itemScreen(item)) }, t('learnWords'))));
  if (item.required && E.pathStatus(item) !== 'done') {
    nodes.push(el('button', { onclick: () => skipTest(item) }, t('knowSet')));
  }
  show(...nodes);
}

/* ---------- мисия ---------- */
function missionRun(item) {
  const m = MISSIONS[item.id];
  const mt = I.missionText(item.id);
  const title = I.pathTitle(item.id);
  let i = 0;

  function segs(done) {
    return el('div', { class: 'segs' }, ...m.steps.map((_, k) => el('i', { class: done ? 'done' : k < i ? 'done' : k === i ? 'cur' : '' })));
  }
  function partnerBubble(s, ts) {
    return el('div', { class: 'who' },
      el('div', { class: 'avatar' }, icon('user')),
      el('div', { class: 'bubble' }, el('div', { fi: true, text: I.fillFrom(s.partner) }), el('div', { class: 'tr', text: ts.partnerTr })));
  }

  function step() {
    const s = m.steps[i];
    const ts = mt.steps[i];
    const fb = el('div');
    const body = el('div');
    const next = el('button', { class: 'primary', style: 'display:none; margin-top:8px', onclick: () => { i++; i < m.steps.length ? step() : finish(); } }, i === m.steps.length - 1 ? t('finishMission') : t('continue'));
    let solved = false;
    const wordNote = I.iso(s.wordFi) + ' = ' + ts.wordTr;
    function win(text) {
      solved = true;
      fb.replaceChildren(msg('ok', text || t('right')));
      next.style.display = 'block';
    }

    if (s.type === 'choose') {
      s.options.forEach((o, k) => {
        body.append(el('button', {
          class: 'opt',
          onclick: () => {
            if (solved) return;
            if (k === s.correct) win(t('rightNewWord', { word: wordNote }));
            else fb.replaceChildren(msg('no', t('almostHint', { hint: ts.hint })));
          },
        }, el('div', { fi: true, text: I.fillFrom(o) }), el('div', { class: 'tr', text: I.fillCountry(ts.optionsTr[k]) })));
      });
    } else if (s.type === 'arrange') {
      const n = s.answer.length;
      const slots = new Array(n).fill(null);
      const slotsEl = el('div', { class: 'slots' });
      const bank = el('div');
      const expl = el('div');
      const check = el('button', { class: 'primary', style: 'margin-top:6px' }, t('check'));
      const hint = el('button', { style: 'margin-top:8px' }, t('hintBtn'));
      function draw() {
        slotsEl.replaceChildren(); bank.replaceChildren();
        const nx = slots.indexOf(null);
        slots.forEach((w, k) => {
          const sl = el('div', { class: 'slot' + (k === nx && !solved ? ' next' : '') }, el('span', { class: 'n', text: String(k + 1) }));
          if (w) sl.append(el('span', { fi: true, class: 'chip', tabindex: '0', role: 'button', onclick: () => { if (solved) return; slots[k] = null; fb.replaceChildren(); draw(); } }, w));
          slotsEl.append(sl);
        });
        s.words.filter((w) => !slots.includes(w)).forEach((w) => {
          bank.append(el('span', { fi: true, class: 'chip', tabindex: '0', role: 'button', onclick: () => {
            if (solved) return;
            const f = slots.indexOf(null);
            if (f >= 0) { slots[f] = w; buzz(); }
            fb.replaceChildren(); draw();
          } }, w));
        });
      }
      check.onclick = () => {
        if (solved) return;
        if (slots.includes(null)) { fb.replaceChildren(msg('no', t('placeAll'))); return; }
        if (slots.join(' ') === s.answer.join(' ')) {
          win(t('rightNewWord', { word: wordNote }));
          expl.replaceChildren(
            el('h2', { style: 'margin-top:8px', text: t('whyOrder') }),
            el('div', { class: 'blocks' }, ...s.blocks.map((b, k) => el('div', { class: 'blk t-' + b.tone }, el('b', { fi: true, text: b.text }), el('span', { text: ts.blocksTr[k] })))),
            el('p', { class: 'muted small', style: 'margin-top:10px', text: ts.pattern }));
          check.style.display = 'none'; hint.style.display = 'none';
          draw();
        } else {
          fb.replaceChildren(msg('no', t('startWith', { w: I.iso(s.answer[0]) })));
        }
      };
      hint.onclick = () => {
        if (solved) return;
        const cp = slots.indexOf(s.answer[0]);
        if (cp !== 0) { if (cp > 0) slots[cp] = null; slots[0] = s.answer[0]; }
        fb.replaceChildren(msg('no', t('hintFirst', { w: I.iso(s.answer[0]) })));
        draw();
      };
      draw();
      body.append(slotsEl, bank, check, hint, expl);
    } else {
      const sn = el('p', { class: 'muted small', style: 'text-align:center; margin-bottom:8px' });
      body.append(
        el('div', { class: 'bigword' }, el('b', { fi: true, text: s.target }), el('span', { text: ts.targetTr })),
        el('button', { style: 'margin-bottom:8px', onclick: () => speak(s.target, sn) }, icon('volume'), ' ' + t('listen')),
        sn,
        el('button', { onclick: () => { if (!solved) win(t('bravoNewWord', { word: wordNote })); } }, icon('mic'), ' ' + t('saidAloud')),
        el('p', { class: 'muted small', style: 'margin-top:8px; text-align:center', text: t('micNote') }));
    }

    show(
      backBar(title, () => itemScreen(item)),
      segs(false),
      partnerBubble(s, ts),
      el('p', { class: 'prompt', text: I.fillCountry(ts.prompt) }),
      body, fb, next);
  }

  function finish() {
    E.setMissionDone(item.id);
    show(
      backBar(title, () => itemScreen(item)),
      segs(true),
      el('h1', { text: t('missionDone') }),
      el('div', { class: 'card', style: 'margin-top:12px; background:var(--ok-bg); color:var(--ok)' },
        el('b', { text: t('todayYouCan') }),
        el('div', { class: 'stack', style: 'margin-top:8px' }, ...mt.can.map((c) => el('p', { text: '• ' + c })))),
      el('button', { class: 'primary', onclick: () => sessionRun(item.group, () => itemScreen(item)) }, t('learnMissionWords')),
      el('button', { style: 'margin-top:8px', onclick: home }, t('toPath')));
  }

  step();
}

/* ---------- думи: сесия ---------- */
function sessionRun(group, back) {
  const sess = E.buildSession(group);
  if (!sess.list.length) {
    show(backBar(t('words'), back), el('h1', { text: t('noWordsToday') }),
      el('p', { class: 'muted', style: 'margin:8px 0 16px', text: t('allRepeated') }),
      el('button', { onclick: back }, t('back')));
    return;
  }
  const fails = new Set();
  const tasks = [];
  for (let r = 0; r < 3; r++) {
    for (const w of sess.list) {
      const seq = E.taskSequence(w);
      if (seq[r]) tasks.push({ w, type: seq[r] });
    }
  }
  const pool = group ? E.wordsOf(group) : E.allWords();
  let li = 0;
  let ti = 0;

  function learnCard() {
    const w = sess.fresh[li];
    const sn = el('p', { class: 'muted small', style: 'text-align:center; margin-bottom:8px' });
    show(
      backBar(t('newWordN', { i: li + 1, n: sess.fresh.length }), back),
      el('div', { class: 'bigword' }, el('b', { fi: true, text: w.fi }), el('span', { text: w.tr })),
      el('button', { style: 'margin-bottom:8px', onclick: () => speak(w.fi, sn) }, icon('volume'), ' ' + t('listenWord')),
      sn,
      el('button', { class: 'primary', onclick: () => { li++; li < sess.fresh.length ? learnCard() : task(); } },
        li < sess.fresh.length - 1 ? t('rememberedNext') : t('rememberedGo')));
  }

  function distract(w, key, n) {
    const seen = new Set([w[key]]);
    const out = [];
    for (const x of shuffle(pool.length >= 4 ? pool : E.allWords())) {
      if (x.id === w.id || seen.has(x[key])) continue;
      seen.add(x[key]); out.push(x[key]);
      if (out.length === n) break;
    }
    return out;
  }

  function finishTask(fb, ok, correct, nextBtn) {
    if (!ok) fails.add(tasks[ti].w.id);
    fb.replaceChildren(ok ? msg('ok', t('right')) : msg('no', t('almostAnswer', { a: I.iso(correct) })));
    nextBtn.style.display = 'block';
  }

  function task() {
    if (ti >= tasks.length) { summary(); return; }
    const tk = tasks[ti], w = tk.w;
    const fb = el('div');
    const nextBtn = el('button', { class: 'primary', style: 'display:none; margin-top:8px', onclick: () => { ti++; task(); } }, t('continue'));
    let locked = false;
    const body = el('div');
    const bar = el('div', { class: 'bar', style: 'margin:6px 0 14px' }, el('i', { class: 'l', style: 'width:' + Math.round((ti / tasks.length) * 100) + '%' }));

    if (tk.type === 'tr' || tk.type === 'fi') {
      const q = tk.type === 'tr' ? t('qMeaning', { fi: I.iso(w.fi) }) : t('qHowSay', { tr: w.tr });
      const key = tk.type === 'tr' ? 'tr' : 'fi';
      const ans = w[key];
      body.append(el('p', { class: 'prompt', text: q }));
      shuffle([{ t: ans, ok: true }, ...distract(w, key, 2).map((x) => ({ t: x, ok: false }))]).forEach((o) => {
        body.append(el('button', { class: 'opt', onclick: () => { if (locked) return; locked = true; finishTask(fb, o.ok, ans, nextBtn); } }, o.t));
      });
    } else if (tk.type === 'letters') {
      body.append(el('p', { class: 'prompt', text: t('qBuild', { tr: w.tr }) }));
      const line = el('div', { class: 'line' });
      const bank = el('div');
      const letters = shuffle(w.fi.split('').map((ch, k) => ({ ch, k, used: false })));
      const built = [];
      const draw = () => {
        line.replaceChildren(); bank.replaceChildren();
        built.forEach((l) => line.append(el('span', { fi: true, class: 'chip letter', text: l.ch })));
        letters.filter((l) => !l.used).forEach((l) => {
          bank.append(el('span', { fi: true, class: 'chip letter', tabindex: '0', role: 'button', onclick: () => {
            if (locked) return;
            l.used = true; built.push(l); draw();
            if (built.length === letters.length) {
              locked = true;
              finishTask(fb, built.map((x) => x.ch).join('') === w.fi, w.fi, nextBtn);
            }
          } }, l.ch));
        });
      };
      const del = el('button', { class: 'small-btn', style: 'margin-top:4px', onclick: () => { if (locked || !built.length) return; built.pop().used = false; draw(); } }, t('delLetter'));
      body.append(line, bank, del);
      draw();
    } else {
      const sn = el('p', { class: 'muted small', style: 'text-align:center; margin-bottom:8px' });
      body.append(
        el('p', { class: 'prompt', text: t('qSayAloud') }),
        el('div', { class: 'bigword' }, el('b', { fi: true, text: w.fi }), el('span', { text: w.tr })),
        el('button', { style: 'margin-bottom:8px', onclick: () => speak(w.fi, sn) }, icon('volume'), ' ' + t('listen')),
        sn,
        el('button', { onclick: () => { if (locked) return; locked = true; finishTask(fb, true, w.fi, nextBtn); } }, icon('mic'), ' ' + t('saidAloud')),
        el('p', { class: 'muted small', style: 'margin-top:8px; text-align:center', text: t('micShort') }));
    }
    show(backBar(t('taskN', { i: ti + 1, n: tasks.length }), back), bar, body, fb, nextBtn);
  }

  function summary() {
    const newly = E.applyResults(sess.list, fails);
    const b = E.dueBuckets();
    const lines = [[t('after1'), b.d1], [t('after3'), b.d3], [t('after7'), b.d7], [t('later'), b.later]].filter((x) => x[1] > 0);
    show(
      el('h1', { text: t('sessionDone') }),
      msg('ok', t('sessionTotals', { nn: sess.fresh.length, nd: sess.due.length }) + (newly ? t('newlyKnown', { n: newly }) : '')),
      counterCard(null),
      el('div', { class: 'card' },
        el('b', { text: t('whenReturn') }),
        el('div', { class: 'stack', style: 'margin-top:8px' }, ...lines.map((l) => el('p', { text: t('wordsCount', { label: l[0], n: l[1] }) })))),
      el('button', { class: 'primary', onclick: back }, t('continue')));
  }

  sess.fresh.length ? learnCard() : task();
}

/* ---------- „Знам този набор“ ---------- */
function skipTest(item) {
  const words = shuffle(E.wordsOf(item.group));
  const title = I.pathTitle(item.id);
  let i = 0;
  function ask() {
    const w = words[i];
    const wrongs = shuffle(words.filter((x) => x.id !== w.id && x.tr !== w.tr)).slice(0, 2).map((x) => x.tr);
    const opts = shuffle([{ t: w.tr, ok: true }, ...wrongs.map((x) => ({ t: x, ok: false }))]);
    show(
      backBar(t('setTest', { i: i + 1, n: words.length }), () => itemScreen(item)),
      el('p', { class: 'muted small', style: 'margin-bottom:8px', text: t('allCorrectNeeded') }),
      el('p', { class: 'prompt', text: t('qMeaning', { fi: I.iso(w.fi) }) }),
      ...opts.map((o) => el('button', { class: 'opt', onclick: () => {
        if (!o.ok) {
          show(backBar(title, () => itemScreen(item)), msg('no', t('setFail')), el('button', { class: 'primary', onclick: () => itemScreen(item) }, t('back')));
          return;
        }
        i++;
        if (i >= words.length) {
          E.markGroupKnown(item.group);
          show(backBar(title, home), msg('ok', t('setOk')), el('button', { class: 'primary', onclick: home }, t('toPath')));
        } else ask();
      } }, o.t)));
  }
  ask();
}

/* ---------- настройки ---------- */
function backupBlock() {
  const box = el('textarea', { class: 'code', readonly: true, rows: '4', style: 'width:100%; display:none; margin-top:8px; direction:ltr; font-size:12px', 'aria-label': t('backupH') });
  const note = el('div');
  const actions = el('div', { style: 'display:none; margin-top:8px' });
  let code = '';
  actions.append(
    el('button', { style: 'margin-bottom:8px', onclick: async () => {
      try { await navigator.clipboard.writeText(code); } catch (e) { box.select(); try { document.execCommand('copy'); } catch (e2) { /* ръчно копиране */ } }
      note.replaceChildren(msg('ok', t('backupCopied')));
    } }, t('backupCopy')),
    ...(navigator.share ? [el('button', { style: 'margin-bottom:8px', onclick: () => { navigator.share({ text: code }).catch(() => {}); } }, t('backupShare'))] : []));
  return el('div', { style: 'margin-bottom:14px' },
    el('h3', { text: t('backupH') }),
    el('p', { class: 'muted small', style: 'margin:4px 0 8px', text: t('backupDesc') }),
    el('button', { onclick: async () => {
      code = await E.exportCode();
      box.value = code; box.style.display = 'block'; actions.style.display = 'block';
      note.replaceChildren();
    } }, t('backupMake')),
    box, actions, note);
}

function restoreBlock() {
  const box = el('textarea', { rows: '3', style: 'width:100%; margin-top:8px; direction:ltr; font-size:12px', 'aria-label': t('restoreH') });
  const note = el('div');
  return el('div', { style: 'margin-bottom:14px' },
    el('h3', { text: t('restoreH') }),
    el('p', { class: 'muted small', style: 'margin:4px 0 0', text: t('restoreDesc') }),
    box,
    el('button', { style: 'margin-top:8px', onclick: async () => {
      const ok = await E.importCode(box.value);
      if (ok) { applyLang(); applyScale(); note.replaceChildren(msg('ok', t('restoreOk'))); box.value = ''; }
      else note.replaceChildren(msg('no', t('restoreBad')));
    } }, t('restoreBtn')),
    note);
}

function settings() {
  let armed = false;
  const resetBtn = el('button', { onclick: () => {
    if (!armed) { armed = true; resetBtn.textContent = t('resetConfirm'); return; }
    E.resetAll(); applyLang(); applyScale(); onboarding();
  } }, t('resetBtn'));
  const st = E.getState();
  const dayInfo = el('p', { class: 'muted small', style: 'margin-top:6px', text: st.dayOffset ? t('dayTrial', { n: st.dayOffset }) : '' });
  const pref = st.lang;
  const langBtn = (code, label) => el('button', {
    class: (pref || null) === code ? 'selected' : '',
    style: 'margin-bottom:8px; text-align:start',
    onclick: () => { E.setLangPref(code); applyLang(); settings(); },
  }, label);
  show(
    backBar(t('settingsTitle'), home),
    el('h2', { text: t('whoLearnsH') }),
    ...['kid', 'adult', 'senior'].map((k) => el('button', {
      class: E.getState().age === k ? 'selected' : '',
      style: 'margin-bottom:8px; text-align:start',
      onclick: () => { E.setAge(k); applyScale(); settings(); },
    }, t('withNew', { label: ageLabel(k), n: E.AGE[k].newPerSession }))),
    el('h2', { style: 'margin-top:18px', text: t('langH') }),
    el('p', { class: 'muted small', style: 'margin-bottom:8px', text: t('langNote') }),
    langBtn(null, t('langAuto')),
    ...I.SUPPORTED.map((c) => langBtn(c, I.LANG_NAMES[c] + (I.isBeta(c) ? ' · ' + t('betaTag') : ''))),
    el('h2', { style: 'margin-top:18px', text: t('forTest') }),
    el('p', { class: 'muted small', style: 'margin-bottom:8px', text: t('nextDayDesc') }),
    el('button', { onclick: () => { E.advanceDay(); settings(); } }, t('nextDay')),
    dayInfo,
    el('p', { class: 'muted small', style: 'margin-top:14px; margin-bottom:8px', text: t('testPaywallDesc') }),
    el('button', { onclick: () => { setTestPaywall(!paywallOn()); settings(); } }, paywallOn() ? t('testPaywallOff') : t('testPaywallOn')),
    paywallOn() ? el('button', { style: 'margin-top:8px', onclick: paywall }, t('plansBtn')) : null,
    el('h2', { style: 'margin-top:18px', text: t('dataH') }),
    backupBlock(),
    restoreBlock(),
    resetBtn,
    el('p', { class: 'muted small', style: 'margin-top:18px', text: t('trialNote') }));
}

/* ---------- старт ---------- */
E.requestPersist();
applyLang();
if (E.getState().age) { applyScale(); home(); } else { onboarding(); }

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => { /* офлайн режимът не е наличен */ });
}

// за тестване
window.__app = { home, onboarding, E, I, MISSIONS, PATH, CONFIG, paywall };
