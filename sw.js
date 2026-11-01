// Прост офлайн режим: пази файловете на приложението след първото отваряне.
const CACHE = 'finapp-v9';
const FILES = ['./', './index.html', './styles.css', './src/app.js', './src/engine.js', './src/content.js', './src/config.js','./src/level-a2.js','./src/level-a2b.js','./src/level-b.js','./src/i18n/b/bg.js','./src/i18n/b/en.js','./src/i18n/b/ru.js','./src/i18n/b/ur.js','./src/i18n/b/ps.js','./src/i18n/b/prs.js','./src/i18n/b/hi.js','./src/i18n/b/vi.js','./src/i18n/b/lv.js','./src/i18n/b/lt.js','./src/i18n/b/pl.js','./src/i18n/b/es.js','./src/i18n/b/pt.js','./src/i18n/a2b/bg.js','./src/i18n/a2b/en.js','./src/i18n/a2b/ru.js','./src/i18n/a2b/ur.js','./src/i18n/a2b/ps.js','./src/i18n/a2b/prs.js','./src/i18n/a2b/hi.js','./src/i18n/a2b/vi.js','./src/i18n/a2b/lv.js','./src/i18n/a2b/lt.js','./src/i18n/a2b/pl.js','./src/i18n/a2b/es.js','./src/i18n/a2b/pt.js','./src/i18n.js','./src/i18n/a2/bg.js','./src/i18n/a2/en.js','./src/i18n/a2/ru.js','./src/i18n/a2/ur.js','./src/i18n/a2/ps.js','./src/i18n/a2/prs.js','./src/i18n/a2/hi.js','./src/i18n/a2/vi.js','./src/i18n/a2/lv.js','./src/i18n/a2/lt.js','./src/i18n/a2/pl.js','./src/i18n/a2/es.js','./src/i18n/a2/pt.js', './src/i18n/bg.js', './src/i18n/en.js', './src/i18n/ru.js','./src/i18n/ur.js','./src/i18n/ps.js','./src/i18n/prs.js','./src/i18n/hi.js','./src/i18n/vi.js','./src/i18n/lv.js','./src/i18n/lt.js','./src/i18n/pl.js','./src/i18n/es.js','./src/i18n/pt.js', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request))
  );
});
