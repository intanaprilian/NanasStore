importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
  console.log("ok");
  const urlsToCache = [
  { url: '/', revision: '3' },
  { url: 'index.html', revision: '3' },
  { url: 'contact.html', revision: '3' },
  { url: 'about.html', revision: '3' },
  { url: 'Assets/Js/swiper.js', revision: '3' },
  { url: 'Assets/Js/script.js', revision: '3' },
  { url: 'Assets/Js/popper.min.js', revision: '3' },
  { url: 'Assets/Js/minicart.js', revision: '3' },
  { url: 'Assets/Js/main.js', revision: '3' },
  { url: 'Assets/Js/jquery.quicksand.js', revision: '3' },
  { url: 'Assets/Js/jquery.prettyPhoto.js', revision: '3' },
  { url: 'Assets/Js/jquery.magnificPopup.js', revision: '3' },
  { url: 'Assets/Js/jquery.flexslider.js', revision: '3' },
  { url: 'Assets/Js/jquery-ui.js', revision: '3' },
  { url: 'Assets/Js/jquery-3.3.1.min.js', revision: '3' },
  { url: 'Assets/Js/jquery-2.1.4.min.js', revision: '3' },
  { url: 'Assets/Js/imagezoom.js', revision: '3' },
  { url: 'Assets/Js/bootstrap.min.js', revision: '3' },
  { url: 'Assets/Js/app.js', revision: '3' },
  { url: 'Assets/Js/all.js', revision: '3' },
  { url: 'Assets/Images/webdev.jpg', revision: '3' },
  { url: 'Assets/Images/nanastore-512x512.png', revision: '3' },
  { url: 'Assets/Images/nanastore-384x384.png', revision: '3' },
  { url: 'Assets/Images/nanastore-192x192.png', revision: '3' },
  { url: 'Assets/Images/nanastore-152x152.png', revision: '3' },
  { url: 'Assets/Images/nanastore-144x144.png', revision: '3' },
  { url: 'Assets/Images/nanastore-128x128.png', revision: '3' },
  { url: 'Assets/Images/nanastore-96x96.png', revision: '3' },
  { url: 'Assets/Images/nanastore-72x72.png', revision: '3' },
  { url: 'Assets/Images/nanas41.jpg', revision: '3' },
  { url: 'Assets/Images/nanas40.jpg', revision: '3' },
  { url: 'Assets/Images/nanas39.jpg', revision: '3' },
  { url: 'Assets/Images/nanas38.jpg', revision: '3' },
  { url: 'Assets/Images/nanas37.jpg', revision: '3' },
  { url: 'Assets/Images/nanas36.jpg', revision: '3' },
  { url: 'Assets/Images/nanas35.jpg', revision: '3' },
  { url: 'Assets/Images/nanas33.jpg', revision: '3' },
  { url: 'Assets/Images/nanas32.jpg', revision: '3' },
  { url: 'Assets/Images/nanas31.jpg', revision: '3' },
  { url: 'Assets/Images/nanas30.jpg', revision: '3' },
  { url: 'Assets/Images/nanas29.jpg', revision: '3' },
  { url: 'Assets/Images/nanas27.jpg', revision: '3' },
  { url: 'Assets/Images/nanas26.jpg', revision: '3' },
  { url: 'Assets/Images/nanas25.jpg', revision: '3' },
  { url: 'Assets/Images/nanas24.jpg', revision: '3' },
  { url: 'Assets/Images/nanas23.jpg', revision: '3' },
  { url: 'Assets/Images/nanas22.jpg', revision: '3' },
  { url: 'Assets/Images/nanas21.jpg', revision: '3' },
  { url: 'Assets/Images/nanas20.jpg', revision: '3' },
  { url: 'Assets/Images/nanas19.jpg', revision: '3' },
  { url: 'Assets/Images/nanas18.jpg', revision: '3' },
  { url: 'Assets/Images/nanas17.jpg', revision: '3' },
  { url: 'Assets/Images/nanas16.jpg', revision: '3' },
  { url: 'Assets/Images/nanas15.jpg', revision: '3' },
  { url: 'Assets/Images/nanas14.jpg', revision: '3' },
  { url: 'Assets/Images/nanas13.jpg', revision: '3' },
  { url: 'Assets/Images/nanas12.jpg', revision: '3' },
  { url: 'Assets/Images/nanas11.jpg', revision: '3' },
  { url: 'Assets/Images/nanas10.jpg', revision: '3' },
  { url: 'Assets/Images/nanas9.jpg', revision: '3' },
  { url: 'Assets/Images/nanas8.jpg', revision: '3' },
  { url: 'Assets/Images/nanas7.jpg', revision: '3' },
  { url: 'Assets/Images/nanas6.jpg', revision: '3' },
  { url: 'Assets/Images/nanas5.jpg', revision: '3' },
  { url: 'Assets/Images/nanas4.jpg', revision: '3' },
  { url: 'Assets/Images/nanas3.jpg', revision: '3' },
  { url: 'Assets/Images/nanas2.jpg', revision: '3' },
  { url: 'Assets/Images/nanas1.jpg', revision: '3' },
  { url: 'Assets/Images/ceo.jpg', revision: '3' },
  { url: 'Assets/Images/c4.jpg', revision: '3' },
  { url: 'Assets/Images/c3.jpg', revision: '3' },
  { url: 'Assets/Images/c2.jpg', revision: '3' },
  { url: 'Assets/Images/c1.jpg', revision: '3' },
  { url: 'Assets/Images/backgroundnanas5.jpg', revision: '3' },
  { url: 'Assets/Images/backgroundnanas4.jpg', revision: '3' },
  { url: 'Assets/Images/backgroundnanas3.jpg', revision: '3' },
  { url: 'Assets/Images/backgroundnanas2.jpg', revision: '3' },
  { url: 'Assets/Images/backgroundnanas1.jpg', revision: '3' },
  { url: 'Assets/Images/backgroundnanas.jpg', revision: '3' },
  { url: 'Assets/fonts/fontawesome-webfont.eot', revision: '3' },
  { url: 'Assets/fonts/fontawesome-webfont.svg', revision: '3' },
  { url: 'Assets/fonts/fontawesome-webfont.ttf', revision: '3' },
  { url: 'Assets/fonts/fontawesome-webfont.woff', revision: '3' },
  { url: 'Assets/fonts/fontawesome-webfont.woff2', revision: '3' },
  { url: 'Assets/CSS/style-starter.css', revision: '3' },
  { url: 'https://fonts.googleapis.com/css?family=Oswald:300,400,500,600&display=swap', revision: '3' },
  { url: 'https://fonts.googleapis.com/css?family=Lato:300,300i,400,400i,700,900&display=swap', revision: '3' },

];
workbox.precaching.precacheAndRoute(urlsToCache, {
ignoreUrlParametersMatching: [/.*/],
});

workbox.routing.registerRoute(
/.*(?:png|svg|jpg|jpeg)$/,
workbox.strategies.cacheFirst({
  cacheName: "images-cache",
  plugins: [
    new workbox.cacheableResponse.Plugin({
      statuses: [0, 200],
    }),
    new workbox.expiration.Plugin({
      maxEntries: 100,
      maxAgeSeconds: 60 * 60 * 24 * 30,
    }),
  ],
})
);

workbox.routing.registerRoute(
new RegExp('Assets/Js/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'js'
  })
);

workbox.routing.registerRoute(
new RegExp('Assets/CSS/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'css'
  })
);

workbox.routing.registerRoute(
    new RegExp('Assets/fonts/'),
      workbox.strategies.staleWhileRevalidate({
        cacheName: 'fonts'
    })
);
    
} else {
console.log("Fail");
}

  self.addEventListener("activate", function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheName != CACHE_NAME) {
              console.log("ServiceWorker: cache " + cacheName + " dihapus");
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });

  self.addEventListener('push', function(event) {
    var body;
    if (event.data) {
      body = event.data.text();
    } else {
      body = 'Push message no payload';
    }
    var options = {
      body: body,
      icon: 'Assets/Images/nanastore-192x192',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    event.waitUntil(
      self.registration.showNotification('Push Notification', options)
    );
  });