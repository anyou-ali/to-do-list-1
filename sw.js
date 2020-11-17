importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const {ExpirationPlugin}     = workbox.expiration;
const {registerRoute}        = workbox.routing;
const {StaleWhileRevalidate} = workbox.strategies;
const {CacheableResponsePlugin} = workbox.cacheableResponse;
const {CacheFirst}              = workbox.strategies;

// Cache Google Fonts with a stale-while-revalidate strategy, with
// a maximum number of entries.
registerRoute(
  ({url}) => url.origin === 'https://fonts.googleapis.com' ||
             url.origin === 'https://fonts.gstatic.com',
  new StaleWhileRevalidate({
    cacheName: 'fonts-Google',
    plugins: [
      new ExpirationPlugin({maxEntries: 10}),
    ],
  }),
);

registerRoute(
  ({request}) => request.destination === 'document' ||
                 request.destination === 'script'   ||
                 request.destination === 'style',
  new StaleWhileRevalidate({cacheName: 'cached-files'})
);

registerRoute(
  ({request}) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 10,
      }),
    ],
  }),
);
// test