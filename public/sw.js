const CACHE_NAME = "qssc-3-v1";
const ASSETS = [
  "/",
  "/index.html",
  "/logo.png",
  "/manifest.json"
];

// Install Event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Pre-caching static assets");
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[Service Worker] Clearing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event (Network-First approach for fresh Firebase & Firestore updates)
self.addEventListener("fetch", (event) => {
  // Avoid caching Firestore/Firebase auth REST endpoints
  if (event.request.url.includes("firestore.googleapis.com") || event.request.url.includes("identitytoolkit")) {
    return;
  }
  
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If valid response, clone it to cache
        if (response && response.status === 200 && response.type === "basic") {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // If offline, fallback to cache
        return caches.match(event.request);
      })
  );
});

// Handle Push notifications when the phone is locked / backgrounded
self.addEventListener("push", (event) => {
  let data = { title: "New Announcement!", body: "Check the Quanta STEM portal." };
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data = { title: "New Announcement!", body: event.data.text() };
    }
  }

  const options = {
    body: data.body,
    icon: "/logo.png",
    badge: "/logo.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});
