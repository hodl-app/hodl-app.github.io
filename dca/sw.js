// 舊網址的清除程式：刪掉舊快取並解除安裝，讓舊的主畫面圖示改看到搬家通知
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (k) { return Promise.all(k.map(function (n) { return caches.delete(n); })); })
    .then(function () { return self.registration.unregister(); })
    .then(function () { return self.clients.matchAll(); })
    .then(function (cs) { cs.forEach(function (c) { c.navigate(c.url); }); }));
});
