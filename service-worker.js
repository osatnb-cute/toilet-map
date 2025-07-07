self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('toimap-cache').then(cache => {
      return cache.addAll([
        '/',
        'index.html',
        'manifest.json',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
        'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
