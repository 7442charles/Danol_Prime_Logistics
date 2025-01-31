const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/',
  '/images/hero_ship.webp',
  '/images/hero_plane.webp',
  '/js/main.js',
  '/css/style.css'
];

// Install service worker and cache the resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch assets from the cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached response or fetch from network if not available
        return response || fetch(event.request);
      })
  );
});
