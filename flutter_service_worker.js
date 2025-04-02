'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c76e0c77f59a4a69b8b8aae3ab4e9c99",
"version.json": "e384d8aa808339ace11d8499552c756a",
"index.html": "1381ee4c275f5cc9f28192c396a7036a",
"/": "1381ee4c275f5cc9f28192c396a7036a",
"main.dart.js": "b4ae6ea2e2bf67f4c39fe493318b9d8c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "198f7660cb4c5716a91ca673df64ad12",
".git/ORIG_HEAD": "7df1067c3752039dc949ddc83b54f0d1",
".git/config": "a1235bf1b982f316a35c8aae73b67c91",
".git/objects/61/c51b328a485743c0717585d96f6c4c49e2aad8": "b0575b928ed4c10a790ea6b080095518",
".git/objects/0d/20e60035d55848208aebd5c33b9c29a375d727": "baae1ae5a888c7208f37defcc7971354",
".git/objects/95/373b8fae7b58d9d3185f45554814a53d366df8": "7ec7c326d8ef02d5b9884fcb1f11638e",
".git/objects/92/17413155c6d24e6a13ac13fa1f6493e09e0f49": "138cd3827980c6d455d1993f84462caa",
".git/objects/57/d94c4123abc11e94f1251173f334baa39a3aea": "17a4d56cadc8b5ba5c3d4c58492d492f",
".git/objects/3b/35735152f995a3a7b3d031f02656139fe47c9e": "c596b3382c8bc08c96f54435a39250dc",
".git/objects/03/267b7f21152e974c38166dc8d04609af2475ea": "0f0c0741812bb8992c11ab8c1007fb12",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/bd8a6ae632b671e948a933d9200dd481953dcb": "e9e3a13a4f6505e5a2a141a493419f1b",
".git/objects/35/4a0e134fb897283cf2df4088a7eece1c1e3520": "878296877e6f4e24e2d5b9f3ab5f3f0b",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/58/632120da24cab02197e5e72ec22e013d68b571": "722677a341453108a3d21e878072a124",
".git/objects/67/02fdb10d97caf07ecdb9d9f4a7596075878b1b": "01814c748365c49db49367c7da4d90d4",
".git/objects/0e/201f438aac2fd0057fc0622aa83820a164d0e1": "af347fce88333a673f61cbab346412fd",
".git/objects/5f/4189d2db6c6f762557b2320c1ccba56040c045": "742000ef2c2b35b217aaaf29d015730f",
".git/objects/9d/afb0d0cb370c75fcacf06a198096785dd91d3a": "8c010345dd7a8f30889b021e4accdd4d",
".git/objects/9d/950996414b9ceaa34cb272e6cb19f616997df8": "baf0547e0b2d6155d41fa31992f0f18a",
".git/objects/d9/24875b7e3c077441af43c0e19f403801c67f69": "4baa4d8c9800a9cde6839b208dffc5f7",
".git/objects/ac/b270ff20f2e7121d6addae055c92a612b36719": "96cf8ea526c72a11e6e26805dc8ce05f",
".git/objects/d0/6cb01a4d7e2387aab9ac391f7ebd876d5901f3": "b6c46b54f13273485260cda90acf222c",
".git/objects/a5/afeddd97585e1de602f643fa3154662ad5708d": "e0016ce57697a234fc33721f65702d5a",
".git/objects/d6/ae830fc74b9862361d8c38c1fa7b9b1d5017fa": "489318f30915545705c9e30fea46c610",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/614565b926b79857b5f0990981807f8a56225e": "bb40bc25bfdf91791c312d85fe943d85",
".git/objects/ae/f1021fa5e5ccbf6bdc5d54805d88783b9bda29": "8e28003e4fd9078716d0e0290398c3eb",
".git/objects/f4/2f7d773b623ab348e67842b710fc86881e127a": "6e8b0219b983061f2f275227acbcd6a6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/fec75d013b937577600989edacf3a1b51d1913": "0926840d63b33c452530b502e1b558c5",
".git/objects/c7/18c07d866274828d30e7c70dcaa6ef80cb4d32": "e50d56b9d08cf8cfb8d7f0813cc58de1",
".git/objects/c7/d334b5930a930cc3e1b7a1b25b83ad25335fac": "1b4f522bf9058bdc60ac361cfa53e99e",
".git/objects/c9/76fc8fae97e4d674193a503d165ec93ea0de29": "db5151c3ee578a9dcfa368883b992835",
".git/objects/fc/7f287f53a65920a8729fd3765c87c260647fce": "d62f8e094c78d7e0947be675ffa5ed6c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ed/794c75a5a9b6a8b19edb66a68aa292a7d18542": "d01d63e44f0b4048bb9abe250b044925",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/2d6cead1254bdee8ebe918c3e7a04a09f85ad6": "433abacd60392bdf4b40462d7cbe07d3",
".git/objects/20/6b44a1f48758ab406585b53af2f79347a11928": "5c59dffc061220d63b0dca5a7a48c98d",
".git/objects/27/e2bd7970a78f34d3e3d3673c0ca7d2bb6764dd": "43b05e6f7eaef00443377c58b6ab995e",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/16/2c8bc2da6012d89a3b52b18d2ce9074eb8062a": "2deba16f21581caadf4dca02f98ff54e",
".git/objects/45/c6bda5c1a0c9010b928fd2f0066deb18c914db": "fe2211b0c4090846d5d23bbc98475f82",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/87/0cfa452c47b18ef6a58b07ef4f08ff8adaa954": "a1ea431d40b15bdddbbb2f3039499e78",
".git/objects/87/8dee2232dd208406b4918c10afa1b6d41b09d3": "2bd6756a3e8a5162403410400c360d77",
".git/objects/80/6c69813f5222bac306ce6d21b016f21fbec541": "3cee6473504dd727a29534671677f2e2",
".git/objects/7b/4cb36a240891baf8de06d525f9f63c0305ff86": "a9af0261047a3b83b40473dd2b0f3db1",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/50bae5c4d6e8e74ed6eed60c069f1d14cce6b4": "1b16edae29d90085eb8955bc87ed5a32",
".git/objects/2a/fc4e6a9400463dac1c3d52ac8b8f3069176eb0": "97884ba745df610888647b81290bdbc6",
".git/objects/2f/8a9c56a1e331992e8b0e13a0feea4063beb637": "02bdb3e65fa9339f443eb8999a9e28f0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/7fa59c1d142fd606e09642f05213e87f8742ef": "2f8343ae91a1fb9ae3669a430845a963",
".git/objects/6e/04a4570c944c4d1741b60e69c693f59208985e": "3390dc87f7bbef912dea9c13c277d7b8",
".git/objects/96/e9f0b215c01c3884bf3ddb6ec1281994a9737d": "e7de3bfd45bddabd88ecc64ed484030a",
".git/objects/3f/5580b1476b4318d55d4bbbcd24b85562f1af2a": "44446632f3ff662fca2c2beba96bbc3b",
".git/objects/5e/ac486e403d0abe99805cf9fb0ae570102921cb": "15b2a340e3d33fe8ea1d634df1c43ae1",
".git/objects/37/7df631ada47a2ba7a1e433ccc4b9d2c2df4061": "cf704e63007cfdb49e47b9b62a1cb13c",
".git/objects/08/5d0c9dac0c9d900b34a6c7c1904c04c1f3b3d8": "7b90b64263e7d5848ae4fe217e3c8844",
".git/objects/08/507535d3c5f77c3e3bd7cfdd92424615fc0f00": "1b66c508a46832982a3ee0eaceff4f55",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/39/a50833a9c62febf8798a9c7e0a3ed15386a7fb": "b41faf9774e59025f5cfb6bd4a975199",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/96fd7155a8cff0bfa267fc984e6edeb86944cb": "11a746e09b26664f987f5b76cf9ba02d",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/90/37a2341b1809576593d23ad228d0dec1347f8a": "ab013e32842df778479fc8d1acf991a8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/e470fc3a4fc9ba29dd95c6692adf8e959b72fa": "90a97cb345aa9a22abe96df87dde9249",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/4da8be88f820afb02627194a2bb2bbcd710533": "def221e1330ea8353c6b8a0599b7b1fc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/36e2aaf278f92a12f360c1a73b10e428dc3d22": "ab4ab4a2fcd33455b3cb5f0b5abb6122",
".git/objects/b0/1944e1f61b5948b66240af9ba3feb8e165fb05": "1d16ad92e38590d1f72ebfa533ba117a",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/199f5a6f11348931e700687e03cc6747cd418e": "7e208c869e5cb284774d7e1d936bc4d7",
".git/objects/f9/5433c5f9a2124ec5d5e485405dc299a66adf48": "ac5aa10167fed66f81c4386f15896a84",
".git/objects/f0/44e09261b4b6a65d3fc7b285504c25e770d8d4": "72eee0db309ba302805389ea04833655",
".git/objects/e8/ff3f4fdb3139dab8f4d7974ad60d3c3157f9aa": "3a8ea5955176d144608a957b0727f87b",
".git/objects/e8/1e7a3e0310839db125641139a5ed316d316a0b": "30e3dfdfe9cb4bbee9d61bc48cfc1fa7",
".git/objects/e8/1186ca35019631197cf1d8fc88baf6b3eb7dbc": "b694478d3fe490c1c75ab3e70e64d0d8",
".git/objects/f6/6d39a73cf4d5108e046651a4a5dc05cc2897ef": "f4dfaebe55295c21844256aee450ab54",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/1e00bf75240af3320d1f189d89ffe63ab5b961": "8d0561a1edfeac7ccf0fdc3da1ddcb75",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/83/1e28eb22dc54bdf71b884df75adbebe30017f3": "670ba9a9b32b7b8d71450e8e8bf8edf4",
".git/objects/1b/5e56a606bbd5f5c82550778c29f8ebc2bc682a": "20d417de20ac6bdd82423a23e41497fd",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/15/3c1dd2ff593ac1cd98b44ad14a5efbe5845c9d": "32a4a9dfe7958a85f527e73c9dba5002",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/1d/86feaf22b482dc45b08a452274cfb95ab4e64f": "f3f48504b99884375d8e2740a138fb8f",
".git/objects/1c/bf9ab16aa06175032a3dfc34ce4fadc7e2caff": "dabb71a148af834d060fdfa9debea7ea",
".git/objects/2e/f9aedc4ef9f284ca9c90eb780f9dededdfb62a": "de85e876177f63018bd7d60d137ad855",
".git/objects/47/807d51c10bcac8feef111ebe007cefb7e1f4c6": "ee5c66e4d1e94ac77492af70841f7d6d",
".git/objects/13/0978ec31833fdf6b68e29ea86744d96eecf6ca": "eadc43a59e6f75cd85c6e24e2c0572f6",
".git/objects/14/1bb8bdefab0b7637af1220e7100c5e4eb6676f": "02c41aa3a3dbeaff9b4985957f6f3163",
".git/objects/8e/ede0e863f03d9f5c3a6e78336b39b27db9915f": "69f052e36594c122f23f07559564152b",
".git/objects/22/bb210526160e6c105bd4acb4054a0b37a4cf40": "e0090fba625109a12bf63cb35e216fdd",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "de8e41baf1a76cc8424e355169f21e28",
".git/logs/refs/heads/main": "5f526c880f6e5305e0c1136804041c30",
".git/logs/refs/remotes/origin/main": "7ed046446fbf1f9a6ffed6945bfd2de3",
".git/logs/refs/remotes/origin/main_web": "3c8efcc2525daf1ceec2d73f588998d1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "137476900b06940d68aa45e4c1f94ae2",
".git/refs/remotes/origin/main": "cb84e54eb13cde6fcde6ef25edcfde20",
".git/refs/remotes/origin/main_web": "137476900b06940d68aa45e4c1f94ae2",
".git/index": "ef322e049d1f724419319d91ddec4639",
".git/COMMIT_EDITMSG": "8a2e4c04d049f4cdb8ca80191cb9242e",
".git/FETCH_HEAD": "4610eb4fe1ec6bdd5ff1ca7541393fe9",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "0b39f9ce47e9780c61eb98a4656eb090",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
