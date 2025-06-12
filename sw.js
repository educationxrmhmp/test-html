// sw.js
self.addEventListener('message', (event) => {
  console.log("Service Worker received message:", event.data);

  // Example: respond back to the page (optional)
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage("SW received: " + event.data);
    });
  });
});
