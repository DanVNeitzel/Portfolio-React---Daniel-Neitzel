const CACHE_NAME = 'daniel-neitzel-portfolio-v1';
const urlsToCache = [
  './',
  './static/js/bundle.js',
  './static/css/main.css',
  './images/avatar.jpg',
  './images/logo.png',
  './images/workdesk_v2.png',
  './images/webApp.png',
  './manifest.json'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Fetch
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request).catch(() => {
          // Optionally, return a fallback page/image here
          return new Response('Network error occurred', { status: 408 });
        });
      })
  );
});

// Activate
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});