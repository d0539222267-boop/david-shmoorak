// Minimal service worker: a network-first passthrough so the app is installable as a PWA.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => { /* passthrough: let the browser handle it */ });
