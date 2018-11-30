self.addEventListener("fetch", event => {
  let url = new URL(event.request.url);
  console.log(event.request);
  if (url.pathname.startsWith("/test")) {
    event.respondWith(new Response("Hello from service worker!"));
  }
});