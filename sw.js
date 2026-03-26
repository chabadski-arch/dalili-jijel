const CACHE_NAME = 'dalili-jijel-v1';
const urlsToCache = [
  './',
  './index.html',
  './home.html',
  './manifest.json'
];

// تثبيت السيرفس وركر وتخزين الملفات الأساسية
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// استراتيجية العرض: جلب من الإنترنت أولاً، وإذا فشل نجلب من الكاش
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});