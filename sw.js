// sw.js – minimal, postMessage only

self.addEventListener('message', event => {
  console.log('[ServiceWorker] Received message:', event.data);

  // Echo message back to all clients
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage('SW received: ' + event.data);
    });
  });
});
