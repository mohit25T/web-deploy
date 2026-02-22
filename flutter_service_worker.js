'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2b7fce7abda074bc7df0905faf6fed8a",
".git/config": "f84ecff113717b31765c521209565622",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "82265f8926019ef5db5dd653160da884",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "44c9def6f6b8507fd9971e8465304912",
".git/logs/refs/heads/main": "ddea5038b019860a8f64efb56e826e4f",
".git/logs/refs/remotes/origin/main": "02d71ae08b4f344fa634b2a81de15cab",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/2b/1b3b8d56d403634498de35800498c26503e2da": "9b65070060de3e3159558668c778427c",
".git/objects/39/66cc06acbbf479e68e26bd1d095d794b6782ae": "44520458b55f65f9830a9a16f505879d",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/d1214eff1870502dbb474aa98719d4de53f43e": "c1979f605ff519435a6668b804f11545",
".git/objects/8c/5c7741ad8a79371d9b883f99c85914ae23cd28": "9777835940dee4ea4032a9a36056ebf5",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ad/dea5dd9d318b5569b6073a72254e76ff7391c7": "f4d87a72b5efe2991f6417e25177f1af",
".git/objects/b0/2afe1805f243bb5cdc19ac71fd2d98e7c899c9": "2466c2ab6beeef589eb30cfd72920934",
".git/objects/b4/68e52077d066e8b9ea1c9eda589ed7125733af": "659d98d99295b0e8dcede0238f2f6cc8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c3/299340b6433a75b8f0fe04011e6dc705ca8c32": "30731f5f9de9000558ba5b509616d7dd",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/d0/bc7113957d91bde8f3cb60db47e60534102b5a": "c55941dc6c6059744d779d5cb38351fa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/da/78c8f8ecd6f10a37a502bba4f0b5ec914eb380": "e8f294691222313188d329411b1f56d1",
".git/objects/df/98fd8ba29a206abafcf2947d7bec75b2573b6c": "6baa5b69d53d620b0d1523356137eb6c",
".git/objects/e1/7276ee9aede7370954761d90615b3fabdda269": "c8c963874d700b0b29380f46cfcbf126",
".git/objects/e6/2643b2bf6a803ee4d07def6a089762f8a18862": "6f2f09fb0d1ac2c2be30c6f7a9d4bcc0",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/75a081883ea99cb5a0e0f028c921527f9f60ff": "6f918bc8b92aade26ad518ff4427c428",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/main": "b9da4bcc4537fd1fa711a22790816665",
".git/refs/remotes/origin/main": "b9da4bcc4537fd1fa711a22790816665",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c3c5b0179c0b48809b0d9f69cfacaa6e",
"assets/NOTICES": "bb8a18d5b4dfbc163baeb6d046d5bb8b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
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
"flutter_bootstrap.js": "f29b6b378aac14c865dd21c9037e270f",
"icons/appstore.png": "6e46ffa38db4e08f21beac5df0e4dffb",
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
"icons/playstore.png": "5384221ae72cd77c07e6519126fa8ef9",
"index.html": "2b19720e3df7a110b3dcdc62a9f3687d",
"/": "2b19720e3df7a110b3dcdc62a9f3687d",
"main.dart.js": "1394bc232a946b567afa7e5744a0a171",
"manifest.json": "13369e929d852581335928288d39ae5e",
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
