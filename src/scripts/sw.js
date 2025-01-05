import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';
// const { assets } = global.serviceWorkerOption;

const assetsToCache = [
  './',
  './icons/icon-128x128.png',
  './icons/icon-144x144.png',
  './icons/icon-192x192.png',
  './icons/icon-384x384.png',
  './index.html',
  './bitespot_logo.png',
  './app.bundle.js',
  './manifest',
  './sw.bundle.js',
];

self.addEventListener("install", (event) => {
  // console.log('Installing Service Worker ...');
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});
self.addEventListener("activate", (event) => {
  // console.log('Activating Service Worker ...');
  event.waitUntil(CacheHelper.deleteOldCache());
});
self.addEventListener("fetch", (event) => {
  // console.log(event.request);
 
  // event.respondWith(fetch(event.request));
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
