self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('LooLoop-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './images/icon.png',
        './style.css',
        './app.js'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});

