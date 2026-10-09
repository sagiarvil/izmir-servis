// ASM Auto Offline-First Service Worker
const CACHE_NAME = 'asm-cache-v9';
const OFFLINE_URLS = [
  '/',
  '/motor-yagi-degisimi/',
  '/ustalik-ve-kalite/',
  '/sikca-sorulan-sorular/',
  '/iletisim/'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(OFFLINE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request) || caches.match('/'))
    );
  }
});
