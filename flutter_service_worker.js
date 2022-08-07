'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "134161ee56a6d6aef8424b3d6046aae5",
"assets/assets/icons/diem_aboutus.svg": "2d3715bcfafc9ff38eba64da2a004365",
"assets/assets/icons/diem_chinh_sach_bao_mat.svg": "60b5a084a9e8663579d3d130d5874b20",
"assets/assets/icons/diem_chi_tiet_cap_do_vip.svg": "3a1aed58e8dfb26d654bd7840d3bf05a",
"assets/assets/icons/diem_chi_tiet_tai_chinh.svg": "e2ba1f7f391505012bd27f7481ba5f3c",
"assets/assets/icons/diem_crown.svg": "4b0828c26112aa01ea08dc852c68577b",
"assets/assets/icons/diem_crown_2.png": "a3262afdac2c5f97a1df4bb64e432f60",
"assets/assets/icons/diem_logout.svg": "9869b570343699e6f15bb66bab339718",
"assets/assets/icons/d_icon_action.svg": "9c6d962148860c760889fe396c76452e",
"assets/assets/icons/d_icon_action_detail.svg": "433fc38f0b4ee22a76ad2b6560083785",
"assets/assets/icons/d_icon_level1_detail.svg": "5359c9daf96d3672c1017d7912e863de",
"assets/assets/icons/d_icon_level2_detail.svg": "949b8c8e868d537f4af288563735fd4e",
"assets/assets/icons/d_lixi.svg": "c85e89919bf10de656dbcf91217e6c61",
"assets/assets/icons/d_update_pw.svg": "83c2535b2a0ecc29b91222b3d62cf8d8",
"assets/assets/icons/img_box_profile_bank.svg": "de1e51fa4f5837fdc91cf7ad51e14986",
"assets/assets/icons/logo_fake.png": "0673b350684f3de948bb95c21eac6bed",
"assets/assets/icons/police.png": "fc0145188b7ce9f938305d92803efa5f",
"assets/assets/images/bg_bottom_form_verify_phone.png": "17362eb113f64a2da598477d6759e7f8",
"assets/assets/images/bg_bottom_form_verify_phone_dark.png": "c106a09b55fe03972e9ecab9fb3e5a0f",
"assets/assets/images/bg_form_login_register.png": "a54d627715737159da77ac253bec8ead",
"assets/assets/images/bg_form_login_register_dark.png": "157d242da79fd5fce88cd3e5cc9217ca",
"assets/assets/images/bg_option_login_register.png": "0c5e7afd17eabb36c1a09cfdcb268ef9",
"assets/assets/images/bg_option_login_register_dark.png": "d60f4cd835fb7423cd6325a79fc17653",
"assets/assets/images/bg_top.svg": "d6066f25de488b4479217e1b593006ad",
"assets/assets/images/diem_bank_card.png": "6fbdb9b967231f16ecdbb063cd459923",
"assets/assets/images/diem_crown_2.png": "a3262afdac2c5f97a1df4bb64e432f60",
"assets/assets/images/diem_cskh.png": "fef25495cbde9ede479733723e954231",
"assets/assets/images/diem_empty_folder.png": "efaac99ac79901ceedf917d4627644c7",
"assets/assets/images/diem_level_vip0.png": "66fbce5a998d88ae08b8d90cf28a2315",
"assets/assets/images/diem_level_vip1.png": "4d61f644c8298379eea81bde48c0028a",
"assets/assets/images/diem_level_vip2.png": "0e9f8c607b95e9aae90b898d293f49e1",
"assets/assets/images/diem_level_vip3.png": "7a2f224bfc8c80d48b03c4126687140a",
"assets/assets/images/diem_level_vip4.png": "be8c47319804d03eb633f3b97b5822fd",
"assets/assets/images/diem_level_vip5.png": "2cf574a712723bf73f7b9a5975fe2346",
"assets/assets/images/diem_level_vip6.png": "25955ef6c905b4eab084c396b8e4d175",
"assets/assets/images/d_bao_lixi.png": "0e8626840074ca80102879b60c324c0f",
"assets/assets/images/error.png": "92b4bd621c7cc3f9470d4edbfa158182",
"assets/assets/images/img_ball_1.png": "f194aed117d3a330ea8a923a3ca05f48",
"assets/assets/images/img_ball_10.png": "01081c96fd44e134e2f1b17a4246805b",
"assets/assets/images/img_ball_11.png": "5532da9b3a3c1c1ab82a32a914e65469",
"assets/assets/images/img_ball_12.png": "76a039ac1ccf0fdff7017708551e5eeb",
"assets/assets/images/img_ball_13.png": "cd93104dca60ef8ba6b67925a2f69789",
"assets/assets/images/img_ball_14.png": "022268a3e9451c3dc22748240c27c89a",
"assets/assets/images/img_ball_15.png": "7915aa52c6e0136269b6243c05ddc7d6",
"assets/assets/images/img_ball_16.png": "582293432d94b988d46eec42e1cdd016",
"assets/assets/images/img_ball_17.png": "077dba7b212c8283b52deb101821f4d4",
"assets/assets/images/img_ball_18.png": "46e3fe3fc2525804437831ed746505df",
"assets/assets/images/img_ball_19.png": "d7c4b04243a74ff0984286c455eba627",
"assets/assets/images/img_ball_2.png": "105d9f930a4bcce14d9ae61229160ec4",
"assets/assets/images/img_ball_20.png": "16f89fa255ecfd5a4a0485353d1e7550",
"assets/assets/images/img_ball_21.png": "13be0f5e124dc91d9c80ab1351c4f9b1",
"assets/assets/images/img_ball_22.png": "b8917eafe1ff09454c5b2959491241a9",
"assets/assets/images/img_ball_23.png": "6a7e25978619b46f72c0ba1b085a2772",
"assets/assets/images/img_ball_24.png": "b1b215126aacf374df1782d5087856a9",
"assets/assets/images/img_ball_25.png": "4fa4ba2fcbe7a8bc8c7d2ea37cabb75b",
"assets/assets/images/img_ball_26.png": "65f9394b3eeb2f2e23e00f9cfbd9a1e0",
"assets/assets/images/img_ball_3.png": "992c25d5fdde0791ef9d62c752b489b7",
"assets/assets/images/img_ball_4.png": "639148488200abaceaa7a506ec2179ec",
"assets/assets/images/img_ball_5.png": "1236e7bd8ebdbd1b7cba7af78084ca99",
"assets/assets/images/img_ball_6.png": "6ee88c1d215c2f667aba9487ea04410f",
"assets/assets/images/img_ball_7.png": "06f02bf943527ad7d21f5e187e5bd9dc",
"assets/assets/images/img_ball_8.png": "cd42f3cad6a59e74de370e6f2ed6f0ed",
"assets/assets/images/img_ball_9.png": "4fa8497d0d1550f07dc52386de8fb077",
"assets/assets/images/img_banner_fake.png": "4e61ea4a90d8ea9a7153d424cc3e2df4",
"assets/assets/images/img_blackball_game.png": "caad4e4d571b9f43565a8898f0a3f9b8",
"assets/assets/images/img_blackball_game_dark.png": "a0af1f5687f4964fa6fbf89268e23012",
"assets/assets/images/img_blackball_game_svg.svg": "03736deb03e421e773cc8013148110b9",
"assets/assets/images/img_box_profile_fillter_button.png": "d792a6eb3d31c66305b7ced16768d9ab",
"assets/assets/images/img_button_option_exchange.svg": "b8233453afd650559a964670ed33f29d",
"assets/assets/images/img_cskh.png": "af580f5cd5116e0610dbd47580f29554",
"assets/assets/images/img_eye_off.png": "eeefa923d1a601e0d94c001faaac6237",
"assets/assets/images/img_eye_on.png": "764baf6b420ca8939324d3121ec757e3",
"assets/assets/images/img_login_avatar_png.png": "ccaadfc27fccaf5428401ec407b8da30",
"assets/assets/images/img_login_lock_password.png": "6d051e7c02d5fce39060b9eb7727f1de",
"assets/assets/images/img_login_phone.png": "b2968049ca7cf15c40c421f6318e40cf",
"assets/assets/images/img_powerball_game.png": "1cb38813a6e2bf2e98fd864263986249",
"assets/assets/images/img_powerball_game_dark.png": "74009fde21e69b86d75de9f9df79cbdc",
"assets/assets/images/img_powerball_game_svg.svg": "92121193461e998a4850dcd1e1fcc236",
"assets/assets/images/img_speed_game.png": "d0fbd2084e21d053d5e676f120af836c",
"assets/assets/images/img_speed_game_dark.png": "dfa49f871b313cfa2cf0d601990cce3b",
"assets/assets/images/img_speed_game_svg.svg": "1068d247e3ec76016c04aa1399976a1a",
"assets/assets/images/img_total_price_power_ball.png": "135ec37807b1534dffe6499583c40322",
"assets/assets/images/logo_app_dark.png": "8966035be84884c7992839084f21c775",
"assets/assets/images/logo_app_lk.png": "19a0509646d636b9eb136f3a2686b873",
"assets/FontManifest.json": "7366e944eaf64035608e4e8afea0ccff",
"assets/fonts/CustomIcons2.ttf": "2cd141a7a1a6a50eafc7d0d8e3a1d0ae",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "0b7011eb21422a7e3bb27492ad3f3600",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a13978e00f66044c5bb4d3730375362f",
"/": "a13978e00f66044c5bb4d3730375362f",
"main.dart.js": "9d52854a1bca8cb240c37149a8b9199e",
"manifest.json": "e1027e16d5c10ccbe115603a89b6c4a3",
"version.json": "df6048a8f02a2b74ff7c0e73671d8b0d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
