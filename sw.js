self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => new Response('离线中'))
  );
});
