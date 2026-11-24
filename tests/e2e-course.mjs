// Проверка на английския курс: превключване, 107 групи, чисти думи, без грешки.
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const URL = process.env.APP_URL || 'http://127.0.0.1:8123/index.html';
const results = [];
const ok = (name, cond, extra = '') => { results.push(!!cond); console.log((cond ? 'PASS ' : 'FAIL ') + name + (extra ? ' :: ' + extra : '')); };
const browser = await chromium.launch();

for (const locale of ['bg-BG', 'ru-RU', 'ar-SA', 'zh-CN', 'ps-AF', 'uk-UA', 'fr-FR', 'bn-BD', 'en-US', 'fi-FI']) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 800 }, locale, isMobile: true, hasTouch: true, serviceWorkers: 'block' });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto(URL);
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  await page.evaluate(() => { window.__app.home(); });
  const sw = await page.locator('[data-course-switch]').count();
  if (locale === 'en-US' || locale === 'fi-FI') {
    ok(`${locale}: превключвателят е скрит`, sw === 0);
    if (locale === 'fi-FI') {
      const f = await page.evaluate(() => ({ course: window.__app.E.getCourse(), n: window.__app.E.allWords().length, items: document.querySelectorAll('#app .item').length, first: document.querySelector('#app .item')?.innerText || '' }));
      ok(`${locale}: курсът е само английски`, f.course === 'en');
      ok(`${locale}: 1498 или повече думи`, f.n >= 1498, String(f.n));
      ok(`${locale}: 107 групи`, f.items === 107, String(f.items));
      ok(`${locale}: заглавието е на финландски`, /Tervehdykset|Tervehdys/i.test(f.first), f.first.replace(/\n/g, ' | '));
    }
  } else {
    ok(`${locale}: има превключвател на курс`, sw === 1);
    await page.locator('[data-course-switch] button[lang="en"]').click();
    const info = await page.evaluate(() => {
      const items = [...document.querySelectorAll('#app .item')];
      return { n: items.length, first: items[0]?.innerText || '', course: window.__app.E.getCourse(), lang: document.querySelector('#app [lang="en"]') ? 1 : 0 };
    });
    ok(`${locale}: курсът е английски`, info.course === 'en');
    ok(`${locale}: 107 групи в A1`, info.n === 107, String(info.n));
    ok(`${locale}: има заглавие на група`, info.first.length > 3, info.first.replace(/\n/g, ' | '));
    await page.locator('#app .item').first().click();
    await page.waitForTimeout(300);
    const t = await page.locator('#app').innerText();
    ok(`${locale}: екранът на групата се отваря`, t.length > 20);
    const hasParen = await page.evaluate(() => {
      const { E } = window.__app;
      return E.allWords().filter((w) => /\(/.test(w.fi)).length;
    });
    ok(`${locale}: в показаните думи няма скоби`, hasParen === 0, String(hasParen));
    const cnt = await page.evaluate(() => window.__app.E.allWords().length);
    ok(`${locale}: 1498 или повече английски думи`, cnt >= 1498, String(cnt));
    const over = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    ok(`${locale}: без хоризонтално превъртане`, !over);
    // връщане към финландския
    await page.evaluate(() => { window.__app.E.setCourse('fi'); window.__app.home(); });
    const fiN = await page.evaluate(() => window.__app.E.allWords().length);
    ok(`${locale}: финландските думи се връщат`, fiN > 9000, String(fiN));
  }
  ok(`${locale}: няма грешки`, errors.length === 0, errors.join(' | '));
  await ctx.close();
}
await browser.close();
const good = results.filter(Boolean).length;
console.log(`\nРезултат: ${good}/${results.length} успешни`);
process.exit(good === results.length ? 0 : 1);
