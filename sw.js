const CACHE = "proenglish-v1";
const ASSETS = [
  "index.html",
  "manifest.json",
  "icon-192.png",
  "icon-512.png"
];

// Installation : mise en cache des fichiers statiques
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activation : suppression des anciens caches
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch : cache-first pour les assets, network-first pour l'API
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);

  // Requêtes API (Groq, Anthropic, Ollama) → toujours réseau
  if (
    url.hostname.includes("groq.com") ||
    url.hostname.includes("anthropic.com") ||
    url.hostname.includes("localhost") ||
    url.hostname.includes("fonts.googleapis.com")
  ) {
    e.respondWith(fetch(e.request).catch(() => new Response("", { status: 503 })));
    return;
  }

  // Assets locaux → cache-first
  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request).then(resp => {
        // Mettre en cache les nouvelles ressources locales
        if (resp.ok && e.request.method === "GET") {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return resp;
      });
    }).catch(() => caches.match("index.html"))
  );
});
