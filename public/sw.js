/*
  Dandyland service worker.

  Strategy:
  - App shell + offline page precached on install.
  - Navigations: network-first, falling back to cache, then the offline page.
  - Interface assets (Next static chunks, fonts): stale-while-revalidate.
  - Large media (the hero video, full-resolution artwork) is deliberately
    NOT cached, to respect device storage.
  - A versioned cache name ensures returning users don't get stuck on stale
    builds — old caches are cleared on activate.
*/

const VERSION = "dandyland-v2";
const SHELL_CACHE = `shell-${VERSION}`;
const ASSET_CACHE = `assets-${VERSION}`;

const SHELL = ["/studio", "/offline.html", "/manifest.json"];

// Paths we never want to fill the cache with.
function isLargeMedia(url) {
  return (
    url.pathname.startsWith("/videos/") ||
    /\.(mp4|webm|mov)$/i.test(url.pathname)
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== SHELL_CACHE && k !== ASSET_CACHE)
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (isLargeMedia(url)) return; // let the network handle big media

  // Navigations: network-first with offline fallback.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(SHELL_CACHE).then((c) => c.put(request, copy));
          return res;
        })
        .catch(() =>
          caches.match(request).then((r) => r || caches.match("/offline.html"))
        )
    );
    return;
  }

  // Interface assets: stale-while-revalidate.
  if (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/fonts/") ||
    /\.(css|js|woff2?)$/i.test(url.pathname)
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const network = fetch(request)
          .then((res) => {
            if (res && res.status === 200) {
              const copy = res.clone();
              caches.open(ASSET_CACHE).then((c) => c.put(request, copy));
            }
            return res;
          })
          .catch(() => cached);
        return cached || network;
      })
    );
  }
});
