/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

(function() {
  'use strict';

  // TODO 2 - cache the application shell
    var filesToCache = [
  '.',
  'assets/css/bootstrap.min.css',
  'assets/css/now-ui-kit.css',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
  'assets/img/media.jpg',
  'assets/img/mensday.jpg',        
  'assets/img/picollage.jpg',
  'assets/js/now-ui-kit.js',
  'assets/js/core/bootstrap.min.js',
  'assets/js/core/jquery.3.2.1.min.js',
  'assets/js/core/tether.min.js',        
  'assets/img/logo.png',
  'offline-page.html',
  '404.html'

];

var staticCacheName = 'pages-cache-v2';

self.addEventListener('install', function(event) {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open(staticCacheName)
    .then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

  // TODO 3 - intercept network requests
self.addEventListener('fetch', function(event) {
  console.log('Fetch event for ', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log('Found ', event.request.url, ' in cache');
        return response;
      }
      console.log('Network request for ', event.request.url);
      return fetch(event.request)

      // TODO 4 - Add fetched files to the cache
 .then(function(response) {

  // TODO 5 - Respond with custom 404 page

  return caches.open(staticCacheName).then(function(cache) {
    if (event.request.url.indexOf('test') < 0) {
      cache.put(event.request.url, response.clone());
    }
    return response;
  });
});        

    }).catch(function(error) {

      // TODO 6 - Respond with custom offline page

    })
  );
});    

  // TODO 7 - delete unused caches
self.addEventListener('activate', function(event) {
  console.log('Activating new service worker...');

  var cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});    

})();
