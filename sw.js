// Minimal service worker — only exists to satisfy PWA installability.
// It intentionally does NOT cache anything: this app shows live financial
// data from Firestore, and serving a stale cached copy offline would be
// actively misleading. Every request still goes straight to the network.
self.addEventListener('install', () => { self.skipWaiting(); });
self.addEventListener('activate', (event) => { event.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', () => { /* no-op: let the browser handle it normally */ });
