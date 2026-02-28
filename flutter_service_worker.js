'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "ecfd8f3128d29f3cb89fac20565a72e0",
"assets/NOTICES": "d6c1678db9a3195d0966ff41fca92471",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"building-shield-solid-full.svg": "5df6719453327d28494ee01116544e95",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "26cee939fe46bdc4f6d2e4f4214bef63",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "db9e2e1e7a1100c6251a43c8933082c7",
"icons/Assets.xcassets/AppIcon.appiconset/Contents.json": "c4934619d6c806643ed52094ff68adaf",
"icons/Assets.xcassets/AppIcon.appiconset/_/100.png": "92c87ba921fb908d60bfc257efca86a5",
"icons/Assets.xcassets/AppIcon.appiconset/_/102.png": "74d0f1eb57c4e031567a2f99ea00c76e",
"icons/Assets.xcassets/AppIcon.appiconset/_/1024.png": "6e46ffa38db4e08f21beac5df0e4dffb",
"icons/Assets.xcassets/AppIcon.appiconset/_/108.png": "656e53996f208f2cc7ff3ae69314c9d7",
"icons/Assets.xcassets/AppIcon.appiconset/_/114.png": "d506ed10a5a50ce4d262ad6deb510475",
"icons/Assets.xcassets/AppIcon.appiconset/_/120.png": "3616271e17eb6b7bc3ef95fcf181e34b",
"icons/Assets.xcassets/AppIcon.appiconset/_/128.png": "c5e717eb2c1d86cf8253c0249637ad9b",
"icons/Assets.xcassets/AppIcon.appiconset/_/144.png": "f170874b12b17fc35d6e346b2b3a8aab",
"icons/Assets.xcassets/AppIcon.appiconset/_/152.png": "6d673b0e5e63aa1a4659165919e35521",
"icons/Assets.xcassets/AppIcon.appiconset/_/16.png": "d95dfbd77f451a97d7d84498f4d93450",
"icons/Assets.xcassets/AppIcon.appiconset/_/167.png": "06819da7d39b8b1c412a0724e6ddc92b",
"icons/Assets.xcassets/AppIcon.appiconset/_/172.png": "5e81a238c61e80277864875121e97cad",
"icons/Assets.xcassets/AppIcon.appiconset/_/180.png": "75273db39413abdd931727f7b403d0cd",
"icons/Assets.xcassets/AppIcon.appiconset/_/196.png": "b28c980ca30a2c407974fe8276b29964",
"icons/Assets.xcassets/AppIcon.appiconset/_/20.png": "32e6dd46ed4f77a0f3f38627e75d0c79",
"icons/Assets.xcassets/AppIcon.appiconset/_/216.png": "c4392972e8479c0267442f3d1b90b334",
"icons/Assets.xcassets/AppIcon.appiconset/_/234.png": "41dbbb14f39af8bd597ec2e1ce24fbac",
"icons/Assets.xcassets/AppIcon.appiconset/_/256.png": "0b66f0259244b62a51ae57ddebf7fb44",
"icons/Assets.xcassets/AppIcon.appiconset/_/258.png": "7cface171ca70db641ef6f47ed315f91",
"icons/Assets.xcassets/AppIcon.appiconset/_/29.png": "1d5f8f8c38940b80adae1342be239adc",
"icons/Assets.xcassets/AppIcon.appiconset/_/32.png": "3209f9535384596dd059233d3a73c994",
"icons/Assets.xcassets/AppIcon.appiconset/_/40.png": "511eda994ee8fdf753cbd9123b4a4b20",
"icons/Assets.xcassets/AppIcon.appiconset/_/48.png": "f0336b2ede3424daf156d709d2c120c6",
"icons/Assets.xcassets/AppIcon.appiconset/_/50.png": "da6dff29cfa8880692ae76053eb700df",
"icons/Assets.xcassets/AppIcon.appiconset/_/512.png": "38192b117139d4523a1fb868d36429f7",
"icons/Assets.xcassets/AppIcon.appiconset/_/55.png": "7f2364f4928b318e19be455941d805e2",
"icons/Assets.xcassets/AppIcon.appiconset/_/57.png": "ed42b6325c5dc0226c39284449d75f42",
"icons/Assets.xcassets/AppIcon.appiconset/_/58.png": "bed5d3c2a2f6d40e861f7d2f6aebdb75",
"icons/Assets.xcassets/AppIcon.appiconset/_/60.png": "66095a7a757333db87467844f6890b0d",
"icons/Assets.xcassets/AppIcon.appiconset/_/64.png": "819c12fa97cf10a6b6d511e2d3504e5a",
"icons/Assets.xcassets/AppIcon.appiconset/_/66.png": "bf199806fa3db66427d0902134f96761",
"icons/Assets.xcassets/AppIcon.appiconset/_/72.png": "0e478e97818fdd31278a1b25541a48d0",
"icons/Assets.xcassets/AppIcon.appiconset/_/76.png": "480633fae3892be5ffc90645e0e290c8",
"icons/Assets.xcassets/AppIcon.appiconset/_/80.png": "d47ca2c09ad7e4e17472079ff11e88e1",
"icons/Assets.xcassets/AppIcon.appiconset/_/87.png": "8d1a1afd696e719140f9a515bfee3e2a",
"icons/Assets.xcassets/AppIcon.appiconset/_/88.png": "8bfeb4071775cda00bcfdf4296a0e5c7",
"icons/Assets.xcassets/AppIcon.appiconset/_/92.png": "94d09773b626899cae9a1dd4ee6842d3",
"icons/Icon-192.png": "6e46ffa38db4e08f21beac5df0e4dffb",
"icons/Icon-512.png": "5384221ae72cd77c07e6519126fa8ef9",
"index.html": "3c50b535bb33c21eaf9fa2b87e9a1b75",
"/": "3c50b535bb33c21eaf9fa2b87e9a1b75",
"main.dart.js": "e5d503e468029291184b3604d6d62957",
"manifest.json": "706d718b256e0ff89905edf4e630f223",
"version.json": "a7e55a991cc69f60ca0a7cbd4169ae40"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
