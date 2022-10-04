const cacheName = "cache-insects";

//Når websitet indlæses, cache ressourcer i listen //

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(["/insects/", "/insects/index.html", "insects/butterflies.jpg", "insects/butterfly.jpg", "insects/dragonfly.jpg"])
        })
    )
})

self.addEventListener("fetch", function(event){
    event.respondWIth(fetch(event.request).catch(()=>
    caches.open(cacheName).then(cache=>cache.match(event.request))
    ))
})
