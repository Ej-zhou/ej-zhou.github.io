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
- `app.js`: place data, map focus controls, filters, map markers, detail panel rendering.
- `assets/`: generated and processed landmark images.
- `_style-lab.html`: standalone Leaflet map-style test page.

Current features:

- Left-side place list.
- Interactive Leaflet map.
- Region focus buttons for Hangzhou, Cambridge, and Frankfurt / Germany. These should zoom the map only, not filter or select the place list.
- Focus scope buttons: focused places, all places, and visited places.
- Search.
- Detail panel for the selected place.
- Generated PNG cutouts for most landmarks.
- Map style toggle for parchment, soft colour, and grey tile treatments.
- Local visited-state toggle stored in `localStorage`.

Implementation note: `app.js` still has state and wiring hooks for status and category filters, but `index.html` does not currently render visible status/category filter controls.

## Work Log / Current State

As of the latest working pass, the project folder contains a large generated asset library for the illustrated map.

Current asset count in this project folder:

- 214 final transparent PNG landmark assets in `assets/`.
- 213 matching `*-detail.png` higher-resolution panel variants.
- 214 matching `*-chroma.png` source files.
- The website map currently has 211 places in `app.js`.
- 211 places have image-backed markers.
- 0 places are marked as placeholders.
- Place distribution: 97 UK, 65 China, 6 Germany, 5 Japan, 4 Morocco, 4 USA, 3 France, 3 Malaysia, 3 Vietnam, 2 Albania, 2 Bosnia, 2 Italy, 2 Poland, 2 Switzerland, 1 Austria, 1 Denmark, 1 Hong Kong, 1 Hungary, 1 Kazakhstan, 1 Korea, 1 Luxembourg, 1 Netherlands, 1 Puerto Rico, 1 Singapore, 1 Thailand.
- Status distribution in source data: 154 want, 57 visited.

Important implementation notes:

- Region buttons should zoom/focus the map only. They should not filter the place list or select all places in a region.
- The current focus buttons include Hangzhou, Cambridge, and Germany.
- Grantchester and Xixi Wetland were removed from the active map dataset earlier.
- Coordinates should remain real geographic coordinates when new Shanghai / Jiangsu entries are integrated.
- The "Focused" scope currently includes all China and Germany places, places within 30 miles of Cambridge, and a few explicit UK keepers. Some dense Hangzhou entries are intentionally excluded by `FOCUS_NEVER`.
- Earlier placeholder trip-seed entries for Morocco, France, Austria, Denmark, Poland, London, Scotland, Berlin, Seoul, and Hong Kong now have bespoke generated assets.

### Earlier Integrated Asset Work

The following kinds of assets were already integrated into the map before the latest Zhejiang-only generation run:

- Zhejiang / Hangzhou / Ningbo landmarks such as Baoguo Temple, Lingyin Temple, Feilai Feng, Liuhe Pagoda, Tianyi Pavilion, Yue Fei Tomb, Huqingyutang, Guoqing Temple, Zhenhaikou, and related architecture sites.
- Cambridge-area landmarks such as Anglesey Abbey, King's College Chapel, Ely Cathedral, Wimpole Estate, Duxford Chapel, and Audley End House.
- A broad UK heritage batch covering English Heritage and National Trust places, including abbeys, castles, Roman sites, houses, mills, fens, and coastal landscapes.
- A small Germany batch including Trier Porta Nigra, Frankfurt Römer, Marburg Landgrafenschloss, and Heidelberg Castle.

### Latest Zhejiang Architecture Integration

The latest Zhejiang generation pass used the Zhejiang national protected heritage list as a source direction and applied these filters:

- Skip Chinese revolution / modern revolutionary history sites such as 嘉兴南湖会址 or 鲁迅故居.
- Skip ancient archaeological sites, especially Neolithic / prehistoric sites.
- Prefer architectural subjects: temples, pagodas, bridges, city walls, guild halls, residences, villages, gardens, archways, and water-engineering structures.

50 new final PNG assets were generated, chroma-keyed, processed into transparent PNGs, and integrated into `app.js` with coordinates, city/region metadata, personal notes, and `asset: "assets/<filename>.png"` references:

- `dayu-mausoleum.png` - 大禹陵
- `zhuge-changle-villages.png` - 诸葛、长乐村民居
- `puzhuangsuocheng.png` - 蒲壮所城
- `yuhai-lou.png` - 玉海楼
- `guyue-bridge.png` - 古月桥
- `siping-village-architecture.png` - 寺平村乡土建筑
- `yuyuan-village-architecture.png` - 俞源村古建筑群
- `guodong-village-architecture.png` - 郭洞村古建筑群
- `heyang-village-architecture.png` - 河阳村乡土建筑
- `xinye-village-architecture.png` - 新叶村乡土建筑
- `taizhou-city-wall.png` - 台州府城墙
- `yongchangbao-fortress.png` - 永昌堡
- `taishun-covered-bridge.png` - 泰顺廊桥
- `jiayetang-library-xiaolianzhuang.png` - 嘉业堂藏书楼及小莲庄
- `mos-manor.png` - 莫氏庄园
- `nanxun-zhang-residences.png` - 南浔张氏旧宅建筑群
- `liushi-tihao.png` - 刘氏梯号
- `qiyuan-garden.png` - 绮园
- `zhengyimen-architecture.png` - 郑义门古建筑群
- `longyou-residential-architecture.png` - 龙游民居苑
- `shaoxing-ancient-towpath.png` - 绍兴古纤道
- `chongren-village-architecture.png` - 崇仁村建筑群
- `sizhai-architecture.png` - 斯宅古建筑群
- `qiantong-architecture.png` - 前童古建筑群
- `tangqi-guangji-bridge.png` - 塘栖广济桥
- `qingan-guild-hall.png` - 庆安会馆
- `caoe-temple.png` - 曹娥庙
- `cicheng-architecture.png` - 慈城古建筑群
- `wang-yangming-residence.png` - 王阳明故居
- `chen-ge-residence.png` - 陈阁老宅
- `ayuwang-temple.png` - 阿育王寺
- `gongchen-pagoda.png` - 功臣塔
- `putuoshan-duobao-pagoda.png` - 普陀山多宝塔
- `songyang-yanqing-pagoda.png` - 延庆寺塔
- `tianfeng-pagoda.png` - 天封塔
- `wenlan-pavilion.png` - 文澜阁
- `yuqian-shrine.png` - 于谦祠
- `hangzhou-confucian-temple.png` - 杭州孔庙
- `baochu-pagoda.png` - 保俶塔
- `xiling-seal-society.png` - 西泠印社
- `nange-archways.png` - 南阁牌楼群
- `furong-village-architecture.png` - 芙蓉村古建筑群
- `cangpo-village-architecture.png` - 苍坡村古建筑群
- `yantou-village-architecture.png` - 岩头村古建筑群
- `tongji-weir.png` - 通济堰
- `yanzhou-city-wall.png` - 严州府城墙
- `lanxi-tongzhou-bridge.png` - 兰溪通洲桥
- `shuxi-bridge.png` - 熟溪桥
- `chuzhou-covered-bridge.png` - 处州廊桥
- `rulong-bridge.png` - 如龙桥

The run was interrupted while starting the next batch. `兰亭` and `大善塔` were generated in the default Codex image output folder, but they were not processed into project assets or copied into `assets/` before the interruption. Regenerate or recover/process them deliberately if they are still wanted.

### Placeholder Asset Completion

The latest completion pass generated and integrated bespoke transparent PNG assets for all entries that were previously missing proper landmark images:

- `tiantong-temple.png` - 天童寺
- `bou-inania-fez.png` - Madrasa Bou Inania
- `kasbah-tangier.png` - Dar el Makhzen / Kasbah Museum, Tangier
- `udayas-rabat.png` - Kasbah des Oudayas
- `hassan-ii-casablanca.png` - Hassan II Mosque
- `cannes-palais.png` - Palais des Festivals
- `centre-pompidou.png` - Centre Pompidou
- `st-pauls.png` - St Paul's Cathedral
- `westminster-cathedral.png` - Westminster Cathedral
- `barbican.png` - Barbican Centre
- `edinburgh-castle.png` - Edinburgh Castle
- `stephansdom.png` - St. Stephen's Cathedral, Vienna
- `berghain.png` - Berghain
- `nyhavn.png` - Nyhavn
- `gdansk-crane.png` - Żuraw / The Crane, Gdańsk
- `krakow-wawel.png` - Wawel Royal Castle
- `gyeongbokgung-seoul.png` - 경복궁 / Gyeongbokgung Palace
- `boc-tower-hongkong.png` - Bank of China Tower, Hong Kong

### Latest Global Trip-Seed Asset Completion

The latest pass generated and integrated bespoke transparent PNG assets for all newly added Japan / Southeast Asia / Europe / USA trip-seed entries:

- `sensoji-tokyo.png` - 浅草寺 / Sensō-ji, Tokyo
- `kinkakuji-kyoto.png` - 金閣寺 / Kinkaku-ji, Kyoto
- `osaka-castle.png` - 大阪城 / Osaka Castle
- `toshogu-nikko.png` - 日光東照宮 / Nikkō Tōshō-gū
- `kobe-port-tower.png` - 神戸ポートタワー / Kobe Port Tower
- `marina-bay-sands-singapore.png` - Marina Bay Sands
- `wat-arun-bangkok.png` - Wat Arun, Bangkok
- `temple-of-literature-hanoi.png` - Văn Miếu / Temple of Literature, Hanoi
- `hue-imperial-city.png` - Đại Nội / Imperial City, Huế
- `saigon-post-office.png` - Bưu điện Sài Gòn / Saigon Central Post Office
- `petronas-towers-kl.png` - Menara Petronas / Petronas Towers
- `blue-mansion-penang.png` - Cheong Fatt Tze Mansion / Blue Mansion
- `ipoh-railway-station.png` - Ipoh Railway Station
- `zenkov-cathedral-almaty.png` - Ascension / Zenkov Cathedral, Almaty
- `urumqi-grand-bazaar.png` - 新疆国际大巴扎 / International Grand Bazaar, Ürümqi
- `sarajevo-city-hall.png` - Vijećnica / Sarajevo City Hall
- `ethem-bey-mosque-tirana.png` - Et'hem Bey Mosque, Tirana
- `budapest-parliament.png` - Országház / Hungarian Parliament
- `geneva-st-pierre.png` - Cathédrale Saint-Pierre, Geneva
- `zurich-grossmunster.png` - Grossmünster, Zurich
- `milan-duomo.png` - Duomo di Milano / Milan Cathedral
- `marseille-notre-dame-garde.png` - Notre-Dame de la Garde, Marseille
- `chrysler-building-nyc.png` - Chrysler Building, New York
- `us-capitol-washington.png` - United States Capitol
- `trinity-church-boston.png` - Trinity Church, Boston
- `mcgraw-tower-ithaca.png` - McGraw Tower, Cornell
- `el-morro-san-juan.png` - Castillo San Felipe del Morro / El Morro

### Next Requested Direction

The next requested image-generation direction is:

- Continue the same architectural-selection approach for Shanghai.
- Then continue for Jiangsu.
- Keep skipping revolution-history sites and ancient archaeological / Neolithic sites.
- Continue generating five assets per batch until usage runs out.

When integrating new Shanghai / Jiangsu assets, each new place should receive accurate coordinates, city/region metadata, personal notes, and `asset: "assets/<filename>.png"` references in `app.js`.

## Landmark Asset Specification

The project should not rely on generic icons. For important places, create individualized visual objects.

Preferred asset format:

- PNG with transparent background.
- Generated from real visual research, but not copied directly from a photo.
- Small 3D landmark object, collectible-map-sticker style.
- Viewpoint should usually be a high-looking-down / three-quarter isometric angle, consistent with most existing generated map objects.
- Crisp silhouette at map scale.
- Strong enough to be recognizable even at around 100-180px wide.
- Saved inside `assets/`.
- When regenerating an existing image, assume the problem is usually likeness first: the old asset may not look enough like the real place. Use the user's reference image when provided, follow the real building/landmark closely, and keep the established atlas art style rather than drifting into either a generic monument or a photo cutout.

Representative generated assets:

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
