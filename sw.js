// sw.js
self.addEventListener('message', (event) => {
  console.log("Service Worker received message:", event.data);

  // ✅ Respond to Android via postMessage channel (TWA communication)
  if (event.source) {
    event.source.postMessage("ACK: " + event.data);
  }

  // (Optional) Echo to all page clients too
  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage("SW echo: " + event.data);
    });
  });
});
