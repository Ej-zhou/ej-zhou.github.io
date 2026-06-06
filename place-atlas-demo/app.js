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
    initial: "寺",
    tags: ["wooden architecture", "Ningbo", "quiet heritage"],
    season: "Late autumn",
    travel: "Hangzhou to Ningbo day trip",
    note: "A place to study old timber structure slowly, without treating it like a checklist stop."
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
  }
];

const state = {
  region: "all",
  status: "all",
  category: "all",
  search: "",
  activeId: places[0].id
};

const placeList = document.querySelector("#placeList");
const detailPanel = document.querySelector("#detailPanel");
const searchInput = document.querySelector("#searchInput");
const totalCount = document.querySelector("#totalCount");
const plannedCount = document.querySelector("#plannedCount");
const visitedCount = document.querySelector("#visitedCount");
const mapTitle = document.querySelector("#mapTitle");
const mapFallback = document.querySelector("#mapFallback");

let map;
let markerGroup;
let shouldFitMap = true;

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

  return `
    <svg class="place-model place-model-${size}" viewBox="0 0 96 96" aria-hidden="true">
      ${models[place.id]}
    </svg>
  `;
}

function markerIcon(place, isActive) {
  const isWideAsset = place.asset && (place.id === "kings" || place.id === "ely");
  const width = isWideAsset ? (isActive ? 186 : 160) : isActive ? 138 : 116;
  const height = isWideAsset ? (isActive ? 146 : 126) : isActive ? 138 : 116;

  return L.divIcon({
    className: "",
    html: `<div class="landmark-marker landmark-${place.id} ${place.category} ${place.status} ${
      isActive ? "active" : ""
    }">${modelMarkup(place, isActive ? "marker-active" : "marker")}</div>`,
    iconSize: [width, height],
    iconAnchor: [width / 2, height - 15],
    popupAnchor: [0, -78]
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

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  markerGroup = L.layerGroup().addTo(map);
}

function renderMarkers(visiblePlaces, activePlace) {
  if (!map || !markerGroup) {
    return;
  }

  markerGroup.clearLayers();

  visiblePlaces.forEach((place) => {
    const isActive = place.id === activePlace.id;
    const marker = L.marker(place.coords, {
      icon: markerIcon(place, isActive),
      title: `${place.name} / ${place.english}`
    })
      .bindTooltip(place.name, {
        className: "marker-label",
        direction: "top",
        offset: [0, -70],
        opacity: isActive ? 1 : 0.94,
        permanent: isActive || state.region !== "all"
      })
      .on("click", () => setActive(place.id));

    marker.addTo(markerGroup);

    if (isActive) {
      marker.openTooltip();
    }
  });

  if (visiblePlaces.length === 0) {
    return;
  }

  if (shouldFitMap) {
    const focusPlaces =
      state.region === "all"
        ? visiblePlaces
        : visiblePlaces.filter((place) => place.region === state.region);
    const placesForBounds = focusPlaces.length > 0 ? focusPlaces : visiblePlaces;
    const bounds = L.latLngBounds(placesForBounds.map((place) => place.coords));
    map.fitBounds(bounds.pad(0.24), { animate: true, maxZoom: state.region === "all" ? 5 : 11 });
    return;
  }

  map.flyTo(
    activePlace.coords,
    Math.max(map.getZoom(), activePlace.region === "china" ? 10 : 12),
    {
      animate: true,
      duration: 0.65
    }
  );
}

function renderDetail(activePlace) {
  detailPanel.innerHTML = `
    <div class="photo-strip ${activePlace.category}" aria-hidden="true">
      <div class="detail-model-wrap">
        ${modelMarkup(activePlace, "detail")}
      </div>
    </div>
    <div class="detail-copy">
      <p class="eyebrow">${statusLabels[activePlace.status]}</p>
      <h3>${activePlace.name}</h3>
      <p class="detail-location">${activePlace.english}<br>${activePlace.city}</p>
      <div class="tag-row">
        ${activePlace.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <p class="note-block">${activePlace.note}</p>
      <div class="detail-grid">
        <div>
          <span>Best season</span>
          <strong>${activePlace.season}</strong>
        </div>
        <div>
          <span>Trip shape</span>
          <strong>${activePlace.travel}</strong>
        </div>
        <div>
          <span>Category</span>
          <strong>${activePlace.category}</strong>
        </div>
      </div>
    </div>
  `;
}

function renderStats() {
  totalCount.textContent = places.length;
  plannedCount.textContent = places.filter((place) => place.status === "planned").length;
  visitedCount.textContent = places.filter((place) => place.status === "visited").length;
}

function renderTitle() {
  if (state.region === "china") {
    mapTitle.textContent = "Hangzhou - Ningbo";
  } else if (state.region === "uk") {
    mapTitle.textContent = "Cambridge and nearby";
  } else {
    mapTitle.textContent = "Hangzhou, Ningbo, Cambridge";
  }
}

function render() {
  const visiblePlaces = filteredPlaces();
  const activePlace =
    visiblePlaces.find((place) => place.id === state.activeId) || visiblePlaces[0] || places[0];

  state.activeId = activePlace.id;
  renderTitle();
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

initMap();
render();
