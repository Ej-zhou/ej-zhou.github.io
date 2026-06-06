# Place Atlas / 去处地图

This folder is a small prototype for a personal map website: a place-based visual journal for recording places I want to visit, places I am planning around, and places I have already visited.

The project started from my own geography: Hangzhou / Cambridge as home bases, with nearby places such as Ningbo's 保国寺, Hangzhou's 灵隐寺, Cambridge's Anglesey Abbey, King's College Chapel, and Ely Cathedral. The site should feel like a personal illustrated atlas rather than a generic travel planner.

## Core Idea

The website should help me collect places I am drawn to and see them spatially.

Each place should have:

- A real map location.
- A readable status: want to go, planned, or visited.
- A short personal note about why it matters.
- Tags for mood, type, season, or trip shape.
- A visual object on the map, not just a pin.

The long-term goal is an interactive map where the landmarks themselves become the memory objects: small generated 3D cutouts, illustrations, statues, buildings, gardens, bridges, or architectural details placed directly on the map.

## Visual Direction

The intended style is closer to an illustrated travel map / 打卡地图:

- Pale, desaturated map background.
- Large visual landmark objects placed directly on the map.
- Soft shadows so landmarks feel like stickers or mini models.
- Paper-like labels, preferably handwritten or notebook-like.
- A calm personal archive feeling, not a commercial travel booking UI.
- Bilingual support where useful, especially preserving Chinese place names.

Reference mood:

- Hand-drawn route maps.
- 3D travel-map landmark stickers.
- Vibe-coding style playful map UI.
- Personal field notebook + interactive atlas.

## Current Prototype

The current demo is static HTML/CSS/JS using Leaflet and OpenStreetMap tiles.

Files:

- `index.html`: app shell and Leaflet setup.
- `styles.css`: layout, map styling, labels, generated asset display.
- `app.js`: place data, filters, map markers, detail panel rendering.
- `assets/`: generated and processed landmark images.

Current features:

- Left-side place list.
- Interactive Leaflet map.
- Region filters for Zhejiang and Cambridge.
- Status filters.
- Category filters.
- Search.
- Detail panel for the selected place.
- Generated PNG cutouts for selected landmarks.

## Landmark Asset Specification

The project should not rely on generic icons. For important places, create individualized visual objects.

Preferred asset format:

- PNG with transparent background.
- Generated from real visual research, but not copied directly from a photo.
- Small 3D landmark object, collectible-map-sticker style.
- Crisp silhouette at map scale.
- Strong enough to be recognizable even at around 100-180px wide.
- Saved inside `assets/`.

Current generated assets:

- `lingyin-statue.png`: Lingyin Temple represented by a colorful seated guardian statue.
- `kings-chapel.png`: King's College Chapel represented by its long Gothic chapel exterior.
- `ely-cathedral.png`: Ely Cathedral represented by its octagonal lantern / tower architecture.

Keep chroma-key source files when useful:

- `*-chroma.png` files are the generated green-background sources.
- Transparent final files should be used by the website.

## Place Data Specification

Each place in `app.js` should include:

- `id`: stable internal id.
- `name`: display name, preserving Chinese where relevant.
- `english`: English display name or transliteration.
- `city`: city / region.
- `region`: broad grouping such as `china` or `uk`.
- `category`: `heritage`, `nature`, or `walk`.
- `status`: `want`, `planned`, or `visited`.
- `coords`: real latitude/longitude.
- `asset`: optional generated image path.
- `tags`, `season`, `travel`, `note`: personal context.

`coords` should stay accurate and should be the position used by the map. If landmark illustrations overlap, solve that visually with styling, clustering, label placement, or zoom behavior rather than moving the geographic point.

## Future Direction

Next improvements should move toward a more complete personal map journal:

- Generate custom landmark assets for every important place.
- Add an "add place" flow.
- Store places in JSON or another editable data file instead of hardcoding them.
- Add photo/reference notes per place.
- Add route or trip-planning views: weekend, day trip, near Hangzhou, near Cambridge.
- Add a visited-after-note section for memories after going.
- Consider a fully custom illustrated map layer for special city views.

The design priority is not maximum realism. The priority is that the map feels personal, spatial, memorable, and a little magical.
