if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
    .then((registration) => {
      // Successful
      console.log('SW registered')
    }, (err) => {
      // Error
      console.log('Something went wrong :(', err)
    });
  });
}

// Basic Cache Storage
const currentCache = 'cache-v1.0';

const files = [
  "favicon.ico",
  "images/icons/icon-72x72.png",
  "images/icons/icon-96x96.png",
  "images/icons/icon-128x128.png",
  "images/icons/icon-144x144.png",
  "images/icons/icon-152x152.png",
  "images/icons/icon-192x192.png",
  "images/icons/icon-384x384.png",
  "images/icons/icon-512x512.png",
  "index.html",
  "manifest.json",
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(currentCache).then(cache => {
      return cache.addAll(files);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => Promise.all(
      cacheNames.filter(cacheName => {
        return cacheName !== currentCache
      }).map(cacheName => caches.delete(cacheName))
    ))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(currentCache)
    .then((cache) => {
      return cache.match(event.request)
      .then((response) => {
        let fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        })
        return response || fetchPromise;
      })
    })
  );
});

 