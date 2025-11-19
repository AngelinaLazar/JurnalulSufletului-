self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("jurnal-cache").then(cache => {
            return cache.addAll([
                "index.html",
                "istoric.html",
                "style.css",
                "manifest.json"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    );
});
