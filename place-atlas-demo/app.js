const places = [
  {
    id: "baoguo",
    name: "保国寺",
    english: "Baoguo Temple",
    city: "Ningbo, Zhejiang",
    region: "china",
    category: "heritage",
    status: "want",
    coords: [29.986, 121.493],
    asset: "assets/baoguo-temple.png",
    initial: "寺",
    tags: ["wooden architecture", "Ningbo", "quiet heritage"],
    season: "Late autumn",
    travel: "Hangzhou to Ningbo day trip",
    note: "A place to study old timber structure slowly, without treating it like a checklist stop."
  },
  {
    id: "liuhe",
    name: "六和塔",
    english: "Liuhe Pagoda",
    city: "Hangzhou, Zhejiang",
    region: "china",
    category: "heritage",
    status: "want",
    coords: [30.2014, 120.1308],
    asset: "assets/liuhe-pagoda.png",
    initial: "六",
    tags: ["pagoda", "Qiantang River", "Hangzhou"],
    season: "Clear autumn",
    travel: "West Lake south side trip",
    note: "A river-facing tower place, good for seeing Hangzhou through height and distance."
  },
  {
    id: "feilai",
    name: "飞来峰",
    english: "Feilai Feng",
    city: "Hangzhou, Zhejiang",
    region: "china",
    category: "heritage",
    status: "want",
    coords: [30.242, 120.101],
    asset: "assets/feilai-feng.png",
    initial: "飞",
    tags: ["grottoes", "stone carvings", "Lingyin"],
    season: "Misty spring",
    travel: "Lingyin and Feilai Feng walk",
    note: "A rock-and-carving landmark to save separately from the temple itself."
  },
  {
    id: "tianyi",
    name: "天一阁",
    english: "Tianyi Pavilion",
    city: "Ningbo, Zhejiang",
    region: "china",
    category: "heritage",
    status: "want",
    coords: [29.8736, 121.543],
    asset: "assets/tianyi-pavilion.png",
    initial: "阁",
    tags: ["library", "garden", "Ningbo"],
    season: "Early winter",
    travel: "Ningbo city day",
    note: "A book-place rather than only a building-place: worth marking as its own quiet anchor."
  },
  {
    id: "yuefei",
    name: "岳飞墓",
    english: "Yue Fei Tomb",
    city: "Hangzhou, Zhejiang",
    region: "china",
    category: "heritage",
    status: "want",
    coords: [30.252, 120.141],
    asset: "assets/yue-fei-tomb.png",
    initial: "岳",
    tags: ["memorial", "West Lake", "Song history"],
    season: "Cool morning",
    travel: "West Lake north shore walk",
    note: "A solemn West Lake site, better saved as a memorial landscape than as a simple stop."
  },
  {
    id: "shi-prince",
    name: "太平天国侍王府",
    english: "Prince Shi's Mansion",
    city: "Jinhua, Zhejiang",
    region: "china",
    category: "heritage",
    status: "want",
    coords: [29.102, 119.648],
    asset: "assets/shi-prince-mansion.png",
    initial: "侍",
    tags: ["mansion", "Taiping history", "Jinhua"],
    season: "Late autumn",
    travel: "Jinhua old-city visit",
    note: "A political-history compound that would pair well with older temple architecture nearby."
  },
  {
    id: "luzhai",
    name: "东阳卢宅",
    english: "Dongyang Lu Residence",
    city: "Dongyang, Zhejiang",
    region: "china",
    category: "heritage",
    status: "want",
    coords: [29.276, 120.242],
    asset: "assets/dongyang-lu-residence.png",
    initial: "卢",
    tags: ["residence", "wood carving", "Dongyang"],
    season: "Dry spring day",
    travel: "Dongyang architecture trip",
    note: "A dense residential compound to keep for timber, courtyards, and carved detail."
  },
  {
    id: "huqingyutang",
    name: "胡庆余堂",
    english: "Huqingyutang",
    city: "Hangzhou, Zhejiang",
    region: "china",
    category: "heritage",
    status: "want",
    coords: [30.245, 120.168],
    asset: "assets/huqingyutang.png",
    initial: "胡",
    tags: ["pharmacy", "Qing architecture", "Hangzhou"],
    season: "Rainy afternoon",
    travel: "Hefang Street nearby",
    note: "A medicine-hall landmark with a very different texture from temples and towers."
  },
  {
    id: "tianning",
    name: "天宁寺",
    english: "Tianning Temple Hall",
    city: "Jinhua, Zhejiang",
    region: "china",
    category: "heritage",
    status: "want",
    coords: [29.105, 119.651],
    asset: "assets/tianning-temple.png",
    initial: "宁",
    tags: ["temple hall", "timber", "Jinhua"],
    season: "Winter light",
    travel: "Jinhua heritage loop",
    note: "A broad wooden hall with a strong roofline, useful as a Jinhua anchor on the map."
  },
  {
    id: "zhakou-white-pagoda",
    name: "闸口白塔",
    english: "Zhakou White Pagoda",
    city: "Hangzhou, Zhejiang",
    region: "china",
    category: "heritage",
    status: "want",
    coords: [30.198, 120.137],
    asset: "assets/zhakou-white-pagoda.png",
    initial: "白",
    tags: ["pagoda", "white stone", "Hangzhou"],
    season: "Clear day",
    travel: "Qiantang River pagoda route",
    note: "A compact white-stone tower that belongs beside Liuhe Pagoda, not hidden under it."
  },
  {
    id: "feiying",
    name: "飞英塔",
    english: "Feiying Pagoda",
    city: "Huzhou, Zhejiang",
    region: "china",
    category: "heritage",
    status: "want",
    coords: [30.867, 120.103],
    asset: "assets/feiying-pagoda.png",
    initial: "英",
    tags: ["pagoda", "inner tower", "Huzhou"],
    season: "Soft overcast",
    travel: "Huzhou city stop",
    note: "A tower-within-a-tower site, which makes it visually distinct from the Hangzhou pagodas."
  },
  {
    id: "kongshi-nanzong",
    name: "孔氏南宗家庙",
    english: "Southern Confucius Ancestral Temple",
    city: "Quzhou, Zhejiang",
    region: "china",
    category: "heritage",
    status: "want",
    coords: [28.969, 118.869],
    asset: "assets/kongshi-nanzong-temple.png",
    initial: "孔",
    tags: ["ancestral temple", "Quzhou", "Confucian"],
    season: "Early autumn",
    travel: "Quzhou heritage trip",
    note: "A formal ancestral-temple site to balance the Buddhist and residential places."
  },
  {
    id: "yanfu",
    name: "延福寺",
    english: "Yanfu Temple",
    city: "Jinhua, Zhejiang",
    region: "china",
    category: "heritage",
    status: "want",
    coords: [28.9, 119.8],
    asset: "assets/yanfu-temple.png",
    initial: "延",
    tags: ["temple hall", "old timber", "Jinhua"],
    season: "Quiet spring",
    travel: "Central Zhejiang temple route",
    note: "A restrained old hall to keep in the same architecture family as Tianning and Baoguo."
  },
  {
    id: "zhenhaikou",
    name: "镇海口",
    english: "Zhenhaikou Coastal Defense Site",
    city: "Ningbo, Zhejiang",
    region: "china",
    category: "heritage",
    status: "want",
    coords: [29.956, 121.716],
    asset: "assets/zhenhaikou-defense.png",
    initial: "镇",
    tags: ["coastal defense", "fort", "Ningbo"],
    season: "Windy clear day",
    travel: "Zhenhai coastal history trip",
    note: "A military-coastal site, useful because it breaks the map out of only temples and halls."
  },
  {
    id: "guoqing",
    name: "国清寺",
    english: "Guoqing Temple",
    city: "Tiantai, Zhejiang",
    region: "china",
    category: "heritage",
    status: "want",
    coords: [29.182, 121.053],
    asset: "assets/guoqing-temple.png",
    initial: "国",
    tags: ["temple", "Tiantai", "Buddhist history"],
    season: "Misty morning",
    travel: "Tiantai mountain trip",
    note: "A major temple landscape that should feel like a destination, not a tiny side marker."
  },
  {
    id: "lingyin",
    name: "灵隐寺",
    english: "Lingyin Temple",
    city: "Hangzhou, Zhejiang",
    region: "china",
    category: "heritage",
    status: "visited",
    coords: [30.2407, 120.1024],
    asset: "assets/lingyin-statue.png",
    initial: "隐",
    tags: ["temple", "mountain", "Buddhist grottoes"],
    season: "Misty spring",
    travel: "Local Hangzhou morning",
    note: "Worth keeping as an anchor place: busy, yes, but still full of stone, incense, and trees."
  },
  {
    id: "tiantong",
    name: "天童寺",
    english: "Tiantong Temple",
    city: "Ningbo, Zhejiang",
    region: "china",
    category: "heritage",
    status: "want",
    coords: [29.8163, 121.7939],
    initial: "天",
    tags: ["forest temple", "Song traces", "Ningbo"],
    season: "Cool morning",
    travel: "Ningbo side trip",
    note: "This feels like a deeper, quieter companion to Baoguo Temple."
  },
  {
    id: "abbey",
    name: "Anglesey Abbey",
    english: "Anglesey Abbey",
    city: "Cambridge, UK",
    region: "uk",
    category: "nature",
    status: "want",
    coords: [52.2359, 0.2408],
    asset: "assets/anglesey-abbey.png",
    initial: "A",
    tags: ["garden", "historic house", "weekend"],
    season: "Snowdrop season",
    travel: "Cambridge bike or bus trip",
    note: "A graceful weekend place: gardens first, house second, tea somewhere after."
  },
  {
    id: "kings",
    name: "King's College Chapel",
    english: "King's College Chapel",
    city: "Cambridge, UK",
    region: "uk",
    category: "heritage",
    status: "planned",
    coords: [52.2043, 0.1165],
    asset: "assets/kings-chapel.png",
    initial: "K",
    tags: ["chapel", "vaulting", "music"],
    season: "Winter dusk",
    travel: "Central Cambridge",
    note: "An architectural place, but also a sound place. Best saved with a note about light."
  },
  {
    id: "ely",
    name: "Ely Cathedral",
    english: "Ely Cathedral",
    city: "Ely, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.3986, 0.2646],
    asset: "assets/ely-cathedral.png",
    initial: "E",
    tags: ["cathedral", "train trip", "fenland"],
    season: "Clear cold day",
    travel: "Short train from Cambridge",
    note: "A place for scale: the cathedral rising out of the flatness is half the point."
  },
  {
    id: "wimpole",
    name: "Wimpole Estate",
    english: "Wimpole Estate",
    city: "Arrington, UK",
    region: "uk",
    category: "nature",
    status: "want",
    coords: [52.1453, -0.0497],
    asset: "assets/wimpole-estate.png",
    initial: "W",
    tags: ["National Trust", "estate", "parkland"],
    season: "Spring lambing",
    travel: "Short drive south-west of Cambridge",
    note: "A big estate place: Georgian hall, walled garden, and a working farm to wander."
  },

  {
    id: "bury-st-edmunds-abbey",
    name: "Bury St Edmunds Abbey",
    english: "Bury St Edmunds Abbey",
    city: "Bury St Edmunds, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.2441, 0.7192],
    asset: "assets/bury-st-edmunds-abbey.png",
    initial: "B",
    tags: ["abbey ruins", "Suffolk", "medieval"],
    season: "Late spring",
    travel: "East Anglia abbey route",
    note: "A powerful abbey-ruin stop, good for anchoring the Suffolk side of the map."
  },
  {
    id: "castle-acre-priory",
    name: "Castle Acre Priory",
    english: "Castle Acre Priory",
    city: "Castle Acre, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.7046, 0.6877],
    asset: "assets/castle-acre-priory.png",
    initial: "P",
    tags: ["priory", "Norfolk", "ruins"],
    season: "Clear autumn",
    travel: "Norfolk ruins circuit",
    note: "A priory ruin with enough structure left to read as architecture, not just landscape."
  },
  {
    id: "castle-rising",
    name: "Castle Rising",
    english: "Castle Rising Castle",
    city: "Castle Rising, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.794, 0.47],
    asset: "assets/castle-rising.png",
    initial: "R",
    tags: ["castle", "Norfolk", "earthworks"],
    season: "Windy afternoon",
    travel: "West Norfolk castle stop",
    note: "A compact keep-and-earthworks place, visually different from the abbey ruins."
  },
  {
    id: "thetford-priory",
    name: "Thetford Priory",
    english: "Thetford Priory",
    city: "Thetford, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.4146, 0.7509],
    asset: "assets/thetford-priory.png",
    initial: "T",
    tags: ["priory", "Norfolk", "monastic ruins"],
    season: "Soft overcast",
    travel: "East Anglia priory route",
    note: "A large monastic ruin to keep near the Norfolk and Suffolk cluster."
  },
  {
    id: "netley-abbey",
    name: "Netley Abbey",
    english: "Netley Abbey",
    city: "Netley, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [50.8765, -1.353],
    asset: "assets/netley-abbey.png",
    initial: "N",
    tags: ["abbey", "Hampshire", "ruins"],
    season: "Summer evening",
    travel: "South coast abbey stop",
    note: "A southern abbey ruin with a more romantic, open-air feeling."
  },
  {
    id: "stonehenge",
    name: "Stonehenge",
    english: "Stonehenge",
    city: "Wiltshire, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.1789, -1.8262],
    asset: "assets/stonehenge.png",
    initial: "S",
    tags: ["prehistoric", "stone circle", "Wiltshire"],
    season: "Low winter sun",
    travel: "Wiltshire heritage day",
    note: "A landmark that needs very little explanation, but deserves a strong object on the map."
  },
  {
    id: "frankfurt-romer",
    name: "Frankfurt Römer",
    english: "Frankfurt Römer",
    city: "Frankfurt, Germany",
    region: "germany",
    category: "heritage",
    status: "want",
    coords: [50.1106, 8.6822],
    asset: "assets/frankfurt-romer.png",
    initial: "F",
    tags: ["old town", "town hall", "Germany"],
    season: "Christmas market season",
    travel: "Frankfurt city walk",
    note: "A civic-square landmark, useful as the German city texture on the atlas."
  },
  {
    id: "heidelberg-castle",
    name: "Heidelberg Castle",
    english: "Heidelberg Castle",
    city: "Heidelberg, Germany",
    region: "germany",
    category: "heritage",
    status: "want",
    coords: [49.4106, 8.7156],
    asset: "assets/heidelberg-castle.png",
    initial: "H",
    tags: ["castle", "ruins", "Neckar"],
    season: "Golden autumn",
    travel: "Heidelberg hill walk",
    note: "A red-stone castle ruin above the river, good for a strong hillside marker."
  },
  {
    id: "marburg-landgrafenschloss",
    name: "Marburg Landgrafenschloss",
    english: "Marburg Landgrafenschloss",
    city: "Marburg, Germany",
    region: "germany",
    category: "heritage",
    status: "want",
    coords: [50.809, 8.77],
    asset: "assets/marburg-landgrafenschloss.png",
    initial: "M",
    tags: ["castle", "Hesse", "hill town"],
    season: "Crisp autumn",
    travel: "Marburg old-town climb",
    note: "A hilltop castle marker for the steep, storybook side of central Germany."
  },
  {
    id: "trier-porta-nigra",
    name: "Porta Nigra",
    english: "Trier Porta Nigra",
    city: "Trier, Germany",
    region: "germany",
    category: "heritage",
    status: "want",
    coords: [49.7596, 6.6442],
    asset: "assets/trier-porta-nigra.png",
    initial: "P",
    tags: ["Roman gate", "Trier", "Germany"],
    season: "Clear cold day",
    travel: "Trier Roman route",
    note: "A Roman city-gate object, different enough to widen the atlas beyond castles and abbeys."
  },
  {
    id: "wicken-fen",
    name: "Wicken Fen",
    english: "Wicken Fen Nature Reserve",
    city: "Soham, UK",
    region: "uk",
    category: "nature",
    status: "want",
    coords: [52.3083, 0.2906],
    initial: "F",
    tags: ["National Trust", "wetland", "wildlife"],
    season: "Early summer",
    travel: "North-east of Cambridge",
    note: "An old fenland reserve, kept for boardwalks, birds, and big flat skies."
  },
  {
    id: "houghton-mill",
    name: "Houghton Mill",
    english: "Houghton Mill",
    city: "Huntingdon, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.3328, -0.1147],
    initial: "M",
    tags: ["National Trust", "watermill", "river"],
    season: "Summer",
    travel: "West toward Huntingdon",
    note: "A working watermill on the Great Ouse, good for a riverside walk and milled flour."
  },
  {
    id: "audley-end",
    name: "Audley End House",
    english: "Audley End House & Gardens",
    city: "Saffron Walden, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.0214, 0.2156],
    asset: "assets/audley-end-house.png",
    initial: "E",
    tags: ["English Heritage", "Jacobean", "gardens"],
    season: "Late spring",
    travel: "South toward Saffron Walden",
    note: "A grand Jacobean house with Capability Brown grounds, big enough for a whole afternoon."
  },
  {
    id: "denny-abbey",
    name: "Denny Abbey",
    english: "Denny Abbey & Farmland Museum",
    city: "Waterbeach, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.3215, 0.1875],
    initial: "D",
    tags: ["English Heritage", "abbey", "farmland"],
    season: "Quiet afternoon",
    travel: "Short hop north of Cambridge",
    note: "A small former abbey paired with a farmland museum, easy to fold into a day out."
  },
  {
    id: "duxford-chapel",
    name: "Duxford Chapel",
    english: "Duxford Chapel",
    city: "Whittlesford, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.1145, 0.1561],
    asset: "assets/duxford-chapel.png",
    initial: "C",
    tags: ["English Heritage", "medieval chapel", "free"],
    season: "Any clear day",
    travel: "By Whittlesford Parkway station",
    note: "A tiny medieval wayside chapel right by the station, an easy add-on to a fen ride."
  }
];

const state = {
  region: "uk",
  status: "all",
  category: "all",
  search: "",
  activeId: null
};

// How each region chip frames the map when focused. "Hangzhou" fits the
// Hangzhou city cluster; "Cambridge" uses a fixed close-in view centred on the
// city rather than fitting every outlying National Trust / English Heritage site.
const regionFocus = {
  china: { filter: (place) => place.city.startsWith("Hangzhou") },
  uk: { view: { center: [52.205, 0.12], zoom: 11 } }
};

const placeList = document.querySelector("#placeList");
const detailPanel = document.querySelector("#detailPanel");
const searchInput = document.querySelector("#searchInput");
const totalCount = document.querySelector("#totalCount");
const plannedCount = document.querySelector("#plannedCount");
const visitedCount = document.querySelector("#visitedCount");
const mapFallback = document.querySelector("#mapFallback");

const osmUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const osmAttribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const mapStyles = [
  { id: "parchment", name: "Parchment", url: osmUrl, attribution: osmAttribution },
  { id: "soft", name: "Soft colour", url: osmUrl, attribution: osmAttribution },
  { id: "grey", name: "Grey", url: osmUrl, attribution: osmAttribution }
];

const mapCanvas = document.querySelector(".map-canvas");
const styleToggle = document.querySelector("#mapStyleToggle");
const styleName = document.querySelector("#mapStyleName");

let map;
let markerGroup;
let markerRefs = [];
let shouldFitMap = true;
let tileLayer;
let currentTileUrl;
let styleIndex = Math.max(
  0,
  mapStyles.findIndex((style) => style.id === localStorage.getItem("atlasMapStyle"))
);

function applyMapStyle() {
  const style = mapStyles[styleIndex];

  if (map && style.url !== currentTileUrl) {
    if (tileLayer) {
      map.removeLayer(tileLayer);
    }
    tileLayer = L.tileLayer(style.url, { maxZoom: 19, attribution: style.attribution }).addTo(map);
    currentTileUrl = style.url;
  }

  mapStyles.forEach((item) => mapCanvas.classList.remove(`mapstyle-${item.id}`));
  mapCanvas.classList.add(`mapstyle-${style.id}`);

  if (styleName) {
    styleName.textContent = style.name;
  }
}

const statusLabels = {
  want: "Want to go",
  planned: "Planned",
  visited: "Visited"
};

function filteredPlaces() {
  const term = state.search.trim().toLowerCase();
  return places.filter((place) => {
    const matchesStatus = state.status === "all" || place.status === state.status;
    const matchesCategory = state.category === "all" || place.category === state.category;
    const haystack = [place.name, place.english, place.city, place.tags.join(" ")]
      .join(" ")
      .toLowerCase();
    return matchesStatus && matchesCategory && haystack.includes(term);
  });
}

function setActive(id) {
  state.activeId = id;
  shouldFitMap = false;
  render();
}

function renderList(visiblePlaces) {
  placeList.innerHTML = "";

  visiblePlaces.forEach((place) => {
    const card = document.createElement("button");
    card.className = `place-card ${place.id === state.activeId ? "active" : ""}`;
    card.type = "button";
    card.addEventListener("click", () => setActive(place.id));

    card.innerHTML = `
      <span class="thumb ${place.category}">${modelMarkup(place, "thumb")}</span>
      <span class="card-copy">
        <span class="card-title">
          <span>${place.name}</span>
          <span class="status-dot ${place.status}" title="${statusLabels[place.status]}"></span>
        </span>
        <p class="card-meta">${place.english}<br>${place.city}</p>
      </span>
    `;

    placeList.appendChild(card);
  });
}

function modelMarkup(place, size = "marker") {
  if (place.asset) {
    return `<img class="place-asset place-asset-${size} place-asset-${place.id}" src="${place.asset}" alt="" />`;
  }

  const models = {
    baoguo: `
      <g class="model-shadow"><ellipse cx="48" cy="80" rx="31" ry="8" /></g>
      <g class="model-base"><path d="M22 62 L50 48 L76 62 L48 78 Z" /></g>
      <path class="model-wall warm" d="M29 47 L49 37 L68 47 L68 62 L49 72 L29 62 Z" />
      <path class="model-roof dark" d="M18 45 C28 31 67 31 78 45 L50 58 Z" />
      <path class="model-roof edge" d="M26 49 L50 60 L72 49" />
      <path class="model-detail" d="M36 52 L36 64 M45 48 L45 68 M54 48 L54 67 M63 52 L63 63" />
      <path class="model-accent" d="M29 43 C39 38 58 38 68 43" />
    `,
    lingyin: `
      <g class="model-shadow"><ellipse cx="49" cy="81" rx="32" ry="8" /></g>
      <path class="model-mountain" d="M11 63 C23 38 33 29 45 58 C53 36 64 28 84 64 Z" />
      <path class="model-wall warm" d="M32 52 L49 44 L66 52 L66 65 L49 74 L32 65 Z" />
      <path class="model-roof dark" d="M25 51 C34 40 64 40 73 51 L49 60 Z" />
      <circle class="model-stone" cx="24" cy="67" r="5" />
      <circle class="model-stone" cx="75" cy="67" r="4" />
      <path class="model-detail" d="M40 56 L40 66 M49 52 L49 70 M58 56 L58 66" />
    `,
    tiantong: `
      <g class="model-shadow"><ellipse cx="48" cy="81" rx="32" ry="8" /></g>
      <path class="model-tree" d="M20 68 L29 37 L39 68 Z M58 69 L68 31 L80 69 Z" />
      <path class="model-wall warm" d="M31 55 L49 46 L67 55 L67 66 L49 75 L31 66 Z" />
      <path class="model-roof dark" d="M24 53 C35 43 63 43 74 53 L49 62 Z" />
      <path class="model-detail" d="M39 58 L39 68 M49 54 L49 72 M59 58 L59 68" />
      <path class="model-path" d="M47 74 C43 79 40 83 35 87 L64 87 C58 82 54 78 51 74 Z" />
    `,
    abbey: `
      <g class="model-shadow"><ellipse cx="48" cy="81" rx="33" ry="8" /></g>
      <path class="model-lawn" d="M16 66 L47 51 L80 66 L49 82 Z" />
      <path class="model-wall pale" d="M28 47 L50 36 L70 47 L70 64 L49 74 L28 64 Z" />
      <path class="model-roof slate" d="M24 46 L50 31 L75 46 L50 56 Z" />
      <path class="model-window" d="M38 50 L44 47 L44 59 L38 62 Z M55 47 L62 50 L62 62 L55 59 Z" />
      <path class="model-tree round" d="M19 60 C13 51 20 42 28 48 C33 39 45 47 39 58 C35 66 24 68 19 60 Z" />
    `,
    kings: `
      <g class="model-shadow"><ellipse cx="48" cy="81" rx="31" ry="8" /></g>
      <path class="model-wall stone" d="M25 33 L48 20 L70 33 L70 67 L48 80 L25 67 Z" />
      <path class="model-side stone-dark" d="M48 20 L70 33 L70 67 L48 80 Z" />
      <path class="model-window tall" d="M34 42 C34 33 43 33 43 42 L43 64 L34 69 Z M53 36 C53 27 63 27 63 36 L63 64 L53 70 Z" />
      <path class="model-spire" d="M27 33 L31 16 L35 33 M64 30 L68 13 L72 32" />
      <path class="model-detail" d="M48 26 L48 76 M29 39 L68 60" />
    `,
    ely: `
      <g class="model-shadow"><ellipse cx="48" cy="81" rx="32" ry="8" /></g>
      <path class="model-wall stone" d="M22 52 L48 39 L74 52 L74 67 L48 80 L22 67 Z" />
      <path class="model-roof slate" d="M17 51 L48 34 L79 51 L48 63 Z" />
      <path class="model-tower" d="M37 31 L48 24 L60 31 L60 54 L48 62 L37 54 Z" />
      <path class="model-tower-top" d="M34 31 L48 15 L63 31 L48 39 Z" />
      <path class="model-window tall" d="M43 36 C43 30 48 30 48 36 L48 52 L43 55 Z M51 34 C51 29 56 31 56 36 L56 51 L51 54 Z" />
      <path class="model-detail" d="M31 56 L31 68 M65 56 L65 68" />
    `
  };

  // Places without a bespoke illustration fall back to the Anglesey Abbey
  // model as a placeholder for now.
  return `
    <svg class="place-model place-model-${size}" viewBox="0 0 96 96" aria-hidden="true">
      ${models[place.id] || models.abbey}
    </svg>
  `;
}

// Markers shrink when the map is zoomed out (so dense clusters stay legible)
// and grow back to full size as you zoom in. Scaling around the bottom anchor
// keeps each marker pinned to its coordinate.
function markerScale() {
  const zoom = map ? map.getZoom() : 11;
  const t = Math.max(0, Math.min(1, (zoom - 6) / (13 - 6)));
  return 0.36 + t * 0.64;
}

function markerIcon(place, isActive) {
  const isWideAsset = place.asset && (place.id === "kings" || place.id === "ely");
  const width = isWideAsset ? (isActive ? 186 : 160) : isActive ? 138 : 116;
  const height = isWideAsset ? (isActive ? 146 : 126) : isActive ? 138 : 116;
  const scale = markerScale();

  return L.divIcon({
    className: "",
    html: `<div class="landmark-marker landmark-${place.id} ${place.category} ${place.status} ${
      isActive ? "active" : ""
    }" style="transform: scale(${scale}); transform-origin: 50% calc(100% - 15px);">${modelMarkup(
      place,
      isActive ? "marker-active" : "marker"
    )}</div>`,
    iconSize: [width, height],
    iconAnchor: [width / 2, height - 15],
    popupAnchor: [0, -78]
  });
}

function rescaleMarkers() {
  markerRefs.forEach(({ marker, place }) => {
    const isActive = place.id === state.activeId;
    marker.setIcon(markerIcon(place, isActive));
    if (isActive) {
      marker.openTooltip();
    }
  });
}

function initMap() {
  if (!window.L) {
    mapFallback.classList.add("visible");
    return;
  }

  map = L.map("actualMap", {
    zoomControl: false,
    worldCopyJump: true
  });

  L.control.zoom({ position: "bottomright" }).addTo(map);

  applyMapStyle();

  markerGroup = L.layerGroup().addTo(map);

  map.on("zoomend", rescaleMarkers);

  // Clicking empty map (not a marker) clears the current selection.
  map.on("click", () => {
    if (state.activeId !== null) {
      state.activeId = null;
      shouldFitMap = false;
      render();
    }
  });
}

function renderMarkers(visiblePlaces, activePlace) {
  if (!map || !markerGroup) {
    return;
  }

  markerGroup.clearLayers();
  markerRefs = [];

  visiblePlaces.forEach((place) => {
    const isActive = !!activePlace && place.id === activePlace.id;
    const marker = L.marker(place.coords, {
      icon: markerIcon(place, isActive),
      title: `${place.name} / ${place.english}`
    })
      .bindTooltip(place.name, {
        className: "marker-label",
        direction: "top",
        offset: [0, -70],
        opacity: isActive ? 1 : 0.94,
        permanent: isActive
      })
      .on("click", () => setActive(place.id));

    marker.addTo(markerGroup);
    markerRefs.push({ marker, place });

    if (isActive) {
      marker.openTooltip();
    }
  });

  if (visiblePlaces.length === 0) {
    return;
  }

  if (shouldFitMap) {
    const focus = regionFocus[state.region];
    if (focus && focus.view) {
      map.setView(focus.view.center, focus.view.zoom, { animate: true });
      return;
    }
    const filter = focus && focus.filter;
    const focusPlaces = filter ? visiblePlaces.filter(filter) : visiblePlaces;
    const placesForBounds = focusPlaces.length > 0 ? focusPlaces : visiblePlaces;
    const bounds = L.latLngBounds(placesForBounds.map((place) => place.coords));
    map.fitBounds(bounds.pad(0.22), { animate: true, maxZoom: 13 });
    return;
  }

  if (activePlace) {
    map.flyTo(activePlace.coords, Math.max(map.getZoom(), 12), {
      animate: true,
      duration: 0.65
    });
  }
}

const compassMark = `
  <svg class="compass" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
  </svg>
`;

const cityZh = {
  "Ningbo, Zhejiang": "宁波",
  "Hangzhou, Zhejiang": "杭州",
  "Jinhua, Zhejiang": "金华",
  "Dongyang, Zhejiang": "东阳",
  "Huzhou, Zhejiang": "湖州",
  "Quzhou, Zhejiang": "衢州",
  "Tiantai, Zhejiang": "天台"
};

function formatLocation(place) {
  if (place.region === "uk") {
    return place.city.replace(/,\s*UK$/i, "");
  }
  return cityZh[place.city] || place.city;
}

function formatCoord([lat, lng]) {
  const ns = lat >= 0 ? "N" : "S";
  const ew = lng >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(2)}°${ns}&nbsp;&nbsp;·&nbsp;&nbsp;${Math.abs(lng).toFixed(2)}°${ew}`;
}

function renderDetail(activePlace) {
  if (!activePlace) {
    detailPanel.innerHTML = `
      <div class="detail-empty">
        <span class="detail-empty-mark">${compassMark}</span>
        <p class="eyebrow">Nothing selected</p>
        <p>Pick a place from the list, or tap a marker on the map, to see it here.</p>
      </div>
    `;
    return;
  }

  detailPanel.innerHTML = `
    <div class="photo-strip ${activePlace.category}" aria-hidden="true">
      <div class="detail-model-wrap">
        ${modelMarkup(activePlace, "detail")}
      </div>
    </div>
    <div class="detail-copy">
      <div class="detail-head">
        <h3>${activePlace.name}</h3>
        <p class="detail-location">${formatLocation(activePlace)}</p>
      </div>
      <div class="detail-foot">
        <div class="detail-rule">${compassMark}</div>
        <p class="detail-coord">${formatCoord(activePlace.coords)}</p>
      </div>
    </div>
  `;
}

function renderStats() {
  totalCount.textContent = places.length;
  plannedCount.textContent = places.filter((place) => place.status === "planned").length;
  visitedCount.textContent = places.filter((place) => place.status === "visited").length;
}

function render() {
  const visiblePlaces = filteredPlaces();
  const activePlace =
    (state.activeId && visiblePlaces.find((place) => place.id === state.activeId)) || null;

  state.activeId = activePlace ? activePlace.id : null;
  renderStats();
  renderList(visiblePlaces);
  renderMarkers(visiblePlaces, activePlace);
  renderDetail(activePlace);
}

function wireControls(selector, stateKey, activeClass) {
  document.querySelectorAll(selector).forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(selector).forEach((item) => item.classList.remove(activeClass));
      button.classList.add(activeClass);
      state[stateKey] = button.dataset[stateKey];
      shouldFitMap = true;
      render();
    });
  });
}

wireControls("[data-region]", "region", "active");
wireControls("[data-status]", "status", "active");
wireControls("[data-category]", "category", "active");

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  shouldFitMap = true;
  render();
});

if (styleToggle) {
  styleToggle.addEventListener("click", () => {
    styleIndex = (styleIndex + 1) % mapStyles.length;
    localStorage.setItem("atlasMapStyle", mapStyles[styleIndex].id);
    applyMapStyle();
  });
}

initMap();
render();
