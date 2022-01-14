const someProjects = 'some-projects-1';

const assets = [
  '/',
  '/index.html',
  '/index.css',
  '/index.js',
  '/img/2022-01-13 at 21.22.47 - Black Bandicoot.webm',
  '/img/2022-01-13 at 21.30.05 - Olive Hedgehog.webm',
  '/img/2022-01-13 at 21.39.28 - Silver Chimpanzee.webm',
];

self.addEventListener('install', (installEvent) => {
  installEvent.waitUntil(
    caches.open(someProjects).then((cache) => {
      cache.addAll(assets);
    })
  );
});
