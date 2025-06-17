# test-html

A simple Progressive Web App (PWA) used for testing `postMessage` communication between a webpage and a Service Worker. Designed to support Trusted Web Activities (TWA), WebView integration, and other Android-to-Web messaging setups.

---

## 📁 Files

### `index.html`
The main HTML page that:
- Registers the service worker (`sw.js`)
- Sends a message to the service worker using `postMessage`
- Listens for and logs responses

### `sw.js`
A minimal service worker script that:
- Listens for incoming messages
- Echoes received messages back to all clients

### `manifest.json`
Defines basic PWA properties like name, icons, theme color, and display mode to make the web app installable.
