f = document.getElementsByClassName('analy')[0];
console.log(f);
    

document.querySelectorAll('.nav-buttons button').forEach(item => {
    
    item.addEventListener('click', event => {
        let k = document.getElementsByClassName(item.id)[0];
        f.classList.add("hidden");
        k.classList.remove("hidden");
        console.log(item);
        f= k;
        
    });
    
})






// give your cache a name
const cacheName = 'my-cache';

// put the static assets and routes you want to cache here
const filesToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/imgs'
];

// the event handler for the activate event
self.addEventListener('activate', e => self.clients.claim());

// the event handler for the install event 
// typically used to cache assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll(filesToCache))
  );
});

// the fetch event handler, to intercept requests and serve all 
// static assets from the cache
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
    .then(response => response ? response : fetch(e.request))
  )
});




if('serviceWorker' in navigator) {
    const registerServiceWorker = async () =>  
    navigator.serviceWorker.register('./service-worker.js');
    const registration = await registerServiceWorker();
  }