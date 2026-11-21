// Автоматична проверка в истински браузър (телефонен размер).
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
import fs from 'node:fs';

const URL = process.env.APP_URL || 'http://127.0.0.1:8123/index.html';
const OUT = '/tmp/shots';
fs.mkdirSync(OUT, { recursive: true });

const errors = [];
const results = [];
function ok(name, cond, extra = '') {
  results.push({ name, pass: !!cond, extra });
  console.log((cond ? 'PASS ' : 'FAIL ') + name + (extra ? ' :: ' + extra : ''));
}

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 800 }, locale: 'bg-BG', deviceScaleFactor: 2, isMobile: true, hasTouch: true, serviceWorkers: 'block' });
const page = await ctx.newPage();
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });

const text = async () => (await page.locator('#app').innerText());
const clickText = async (t, opts = {}) => {
  const loc = page.locator('#app button, #app .item, #app .chip').filter({ hasText: t });
  const n = await loc.count();
  if (!n) throw new Error('Няма елемент: ' + t + ' на екран: ' + (await text()).slice(0, 200));
  await (opts.last ? loc.last() : loc.first()).click();
};
const shot = (n) => page.screenshot({ path: `${OUT}/${n}.png` });

await page.goto(URL);
await page.evaluate(() => localStorage.clear());
await page.reload();

// 1. Начален екран
ok('Показва се изборът кой учи', (await text()).includes('Кой ще учи'));
await shot('01-onboarding');
await clickText('Възрастни');
ok('Показва се началният екран', (await text()).includes('Финландски, A1'));
ok('Показва пътя със 108 урока', (await page.locator('.item:not([data-test])').count()) === 108);
await shot('02-home');

// 2. Мисия 1
await clickText('Поздрави и благодарности');
ok('Екран на урок', (await text()).includes('Разговор'));
await shot('03-item');
await clickText('Започни');
ok('Мисия: стъпка 1', (await text()).includes('Huomenta!'));
// грешен отговор
await clickText('Hyvää yötä.');
ok('Грешен отговор дава мек съвет', (await text()).includes('Почти'));
await clickText('Huomenta!', { last: true });
ok('Верен отговор', (await text()).includes('Точно така'));
await shot('04-mission-step1');
await clickText('Продължи');
await clickText('Ole hyvä.');
await clickText('Продължи');
// подреждане
ok('Стъпка подреждане', (await text()).includes('Подреди думите'));
await clickText('Провери');
ok('Проверка без думи дава съобщение', (await text()).includes('Постави всички'));
for (const w of ['Kiitos', 'ja', 'näkemiin']) {
  await page.locator('#app .chip').filter({ hasText: new RegExp('^' + w + '$') }).last().click();
}
await shot('05-arrange-filled');
await clickText('Провери');
ok('Верен ред + обяснение', (await text()).includes('Защо е в този ред'));
await shot('06-arrange-explained');
await clickText('Продължи');
await clickText('Казах го');
await clickText('Завърши мисията');
ok('Мисията е изпълнена', (await text()).includes('Мисията е изпълнена') && (await text()).includes('Днес можеш да'));
await shot('07-mission-done');

// 3. Сесия с думи на мисията
await clickText('Учи думите на мисията');
ok('Нова дума', (await text()).includes('Нова дума 1 от 6'));
await shot('08-learn-card');
for (let i = 0; i < 6; i++) await page.locator('#app button.primary').click();
// задачи
const words = await page.evaluate(() => window.__app.E.allWords());
let tasks = 0;
for (let guard = 0; guard < 80; guard++) {
  const t = await text();
  if (t.includes('Сесията е готова')) break;
  if (/Какво значи „/.test(t)) {
    const fi = t.match(/Какво значи „(.+?)“\?/)[1];
    const w = words.find((x) => x.fi === fi && x.group === 'm1');
    await page.locator('#app button.opt').filter({ hasText: new RegExp('^' + w.tr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$') }).click();
  } else if (/Как се казва „/.test(t)) {
    const bg = t.match(/Как се казва „(.+?)“ на финландски\?/)[1];
    const w = words.find((x) => x.tr === bg && x.group === 'm1');
    await page.locator('#app button.opt').filter({ hasText: new RegExp('^' + w.fi + '$') }).click();
  } else if (/Състави думата/.test(t)) {
    const bg = t.match(/Състави думата: (.+)/)[1].trim();
    const w = words.find((x) => x.tr === bg && x.group === 'm1');
    for (const ch of w.fi) {
      await page.locator('#app .chip.letter[role=button]').filter({ hasText: new RegExp('^' + ch + '$') }).first().click();
    }
  } else if (/Кажи на глас/.test(t)) {
    await clickText('Казах го');
  } else if (/Чуй думата/.test(t)) {
    await page.locator('#app button.opt').first().click();
  } else if ((await page.locator('#app button.opt[lang=fi]').count()) >= 4) {
    const fis = await page.locator('#app button.opt[lang=fi]').allTextContents();
    for (const f of fis) {
      const w = words.find((x) => x.fi === f && x.group === 'm1');
      await page.locator('#app button.opt[lang=fi]').filter({ hasText: new RegExp('^' + f + '$') }).click();
      await page.locator('#app button.opt:not([lang=fi])').filter({ hasText: new RegExp('^' + w.tr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$') }).click();
    }
  } else {
    throw new Error('Непознат екран: ' + t.slice(0, 200));
  }
  tasks++;
  if (tasks === 3) await shot('09-task');
  await page.locator('#app button.primary').filter({ hasText: 'Продължи' }).click();
}
ok('Сесията приключва', (await text()).includes('Сесията е готова'), 'задачи: ' + tasks);
await shot('10-summary');
const c1 = await page.evaluate(() => window.__app.E.groupCounts('m1'));
ok('Шест думи са в процес след първата сесия', c1.learning === 6 && c1.fresh === 6, JSON.stringify(c1));
await clickText('Продължи');
ok('Връщане към урока', (await text()).includes('Думите на урока'));

// 4. Следващ ден => повторение
await page.evaluate(() => window.__app.home());
await page.locator('button[aria-label="Настройки"]').click();
await clickText('Следващ ден');
await page.locator('button[aria-label="Назад"]').click();
ok('Следващия ден има думи за повторение', (await text()).includes('6 за повторение'));
await shot('11-next-day');

// 5. „Знам този набор“
await clickText('Числа 1–20');
await clickText('Знам този набор');
for (let i = 0; i < 20; i++) {
  const t = await text();
  const fi = t.match(/Какво значи „(.+?)“\?/)[1];
  const w = words.find((x) => x.fi === fi && x.group === 'num');
  await page.locator('#app button.opt').filter({ hasText: new RegExp('^' + w.tr + '$') }).click();
}
ok('Наборът за числа е отбелязан като научен', (await text()).includes('Наборът е отбелязан'));
await shot('12-skip-done');

// 6. Настройки: По-възрастни
await page.evaluate(() => window.__app.home());
await page.locator('button[aria-label="Настройки"]').click();
await clickText('По-възрастни');
const scale = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--s').trim());
ok('По-възрастни: по-голям шрифт', scale === '1.25', 'scale=' + scale);
await shot('13-settings-senior');
await page.locator('button[aria-label="Назад"]').click();
await shot('14-home-senior');

// 7. Запазване след презареждане
await page.reload();
ok('Напредъкът се пази след презареждане', (await text()).includes('Финландски, A1'));
const cAll = await page.evaluate(() => window.__app.E.groupCounts(null));
ok('Научените думи са запазени', cAll.known >= 20, JSON.stringify(cAll));

// 8. Хоризонтално преливане
const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
ok('Няма хоризонтално превъртане', !overflow);

ok('Няма грешки в конзолата', errors.length === 0, errors.join(' | ').slice(0, 400));

await browser.close();
const failed = results.filter((r) => !r.pass);
console.log(`\nРезултат: ${results.length - failed.length}/${results.length} успешни`);
process.exit(failed.length ? 1 : 0);
