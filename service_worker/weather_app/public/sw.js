const staticAssets = [
    '/',
    '../stylesheets/style.css',
    './weather_app.js',
    '../data/cities.json',
    '../data/fallback.json'
];


self.addEventListener('install', async event => {
    console.log('sw install');
    const cache = await caches.open('Weather');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    console.log('sw fetch');
    const req = event.request;
    const url = new URL(req.url);
    console.log(req);
    console.log(url);
    console.log('url.origin=' + url.origin);
    console.log('location.origin=' + location.origin);
    if (url.origin === location.origin){
        console.log('using cache first');
        event.respondWith(cacheFirst(req));
    } else {
        console.log('using network first');
        event.respondWith(networkFirst(req));
    }
});

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open('weather-dynamic');
    try{
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch(error){
        const cachedResponse = await cache.match(req);
        return cachedResponse || await caches.match('../data/fallback.json');
        //return await cache.match(req);
    }
}


