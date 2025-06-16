// sw.js

// Handle messages sent from the Android TWA
self.addEventListener('message', (event) => {
  console.log("Service Worker received message from Android:", event.data);

  // Echo it back to all open clients (i.e., browser windows/tabs)
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage("Echo from Service Worker: " + event.data);
    });
  });
});

// Cache assets on install
self.addEventListener('install', (event) => {
  console.log('[SW] Installed');
  event.waitUntil(
    caches.open('twa-cache-v1').then(cache => {
      return cache.addAll([
        '/', 'index.html', 'sw.js'
      ]);
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
