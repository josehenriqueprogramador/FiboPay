self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("fibopay").then(cache => {
            return cache.addAll([
                "/",
                "/index.html",
                "/style.css",
                "/script.js"
            ]);
        })
    );
});
