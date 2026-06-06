const CACHE_NAME = 'patient-triage-pwa-v55';
const APP_SHELL = [
  './',
  './index.html',
  './patient-triage_v3.html',
  './patient-triage_v3.app.js',
  './patient-triage_v3_desktop.html',
  './patient-triage_v3_desktop.app.js',
  './prototype_unified_triage.html',
  './prototype_unified_triage.app.js',
  './manifest.webmanifest',
  './manifest-unified.webmanifest',
  './manifest-desktop.webmanifest',
  './pwa-icons/icon-192.png',
  './pwa-icons/icon-512.png',
  './pwa-icons/icon-maskable-512.png',
  './pwa-icons/icon-source.png',
  './patient_triage_vendor/dbc28e58-b689-4d38-85ca-d5774aa34960.js',
  './patient_triage_vendor/402aa1bf-e6bd-4abd-9e2d-1d1b154e991e.js',
  './patient_triage_vendor/BestTen-DOT.otf',
  './patient_triage_vendor/RabbitandFullMoonFree-Regular.otf',
  './patient_triage_vendor/header-nurse-station.png',
  './patient_triage_vendor/header-nurse-station-morning.png',
  './patient_triage_vendor/header-nurse-station-evening.png',
  './patient_triage_vendor/header-nurse-station-night.png',
  './patient_triage_vendor/header-daily-life.png',
  './chibi_split_pngs/blue_white_girl_06_clipboard.png',
  './chibi_split_pngs/red_antler_girl_03_cheer.png',
  './chibi_split_pngs/bat_wing_girl_01_neutral.png',
  './chibi_split_pngs/yushka_09_smug.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  const path = url.pathname;
  const isFreshCode = request.mode === 'navigate' || /\.(?:html|js|webmanifest)$/i.test(path) || path.endsWith('/service-worker.js');

  if (isFreshCode) {
    event.respondWith(
      fetch(request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request).then(cached => cached || caches.match('./index.html')))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        return response;
      });
    })
  );
});
