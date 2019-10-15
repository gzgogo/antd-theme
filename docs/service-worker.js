'use strict';

// Update cache names any time any of the cached files change.
const ASSET_CACHE_NAME = 'asset-cache-v1';
const DATA_CACHE_NAME = 'data-cache-v1';

// Add list of files to cache here.
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/antd.less',
  '/less.min.js',
  '/install.js',
  '/main.3e0a6d71.js',
  '/main.a43601ae11fb6457e673.css',
  '/vendor.a015c1d9.js',
  '/favicon.png'
];

self.addEventListener('install', (evt) => {
  console.log('[ServiceWorker] Install');
  // Precache static resources here.
  evt.waitUntil(
    caches.open(ASSET_CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  console.log('[ServiceWorker] Activate');
  // Remove previous cached data from disk.
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== ASSET_CACHE_NAME && key !== DATA_CACHE_NAME) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  // Add fetch event handler here.
  if (evt.request.url.includes('/forecast/')) {
    console.log('[Service Worker] Fetch (data)', evt.request.url);
    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then((cache) => {
        return fetch(evt.request)
          .then((response) => {
            // If the response was good, clone it and store it in the cache.
            if (response.status === 200) {
              cache.put(evt.request.url, response.clone());
            }
            return response;
          }).catch((err) => {
            // Network request failed, try to get it from the cache.
            return cache.match(evt.request);
          });
      }));
    return;
  }
  evt.respondWith(
    caches.open(ASSET_CACHE_NAME).then((cache) => {
      return cache.match(evt.request)
        .then((response) => {
          return response || fetch(evt.request);
        });
    })
  );
});
