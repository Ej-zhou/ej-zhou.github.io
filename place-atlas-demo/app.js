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
    status: "visited",
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
    status: "visited",
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
    status: "visited",
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
    status: "visited",
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
    status: "visited",
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
    status: "visited",
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
    status: "visited",
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
    status: "visited",
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
    custodian: "national-trust",
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
    status: "visited",
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
    status: "visited",
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
    custodian: "national-trust",
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
    custodian: "english-heritage",
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
    custodian: "english-heritage",
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
    custodian: "english-heritage",
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
    custodian: "english-heritage",
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
    custodian: "english-heritage",
    name: "Netley Abbey",
    english: "Netley Abbey",
    city: "Netley, UK",
    region: "uk",
    category: "heritage",
    status: "visited",
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
    custodian: "english-heritage",
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
    custodian: "national-trust",
    name: "Wicken Fen",
    english: "Wicken Fen Nature Reserve",
    city: "Soham, UK",
    region: "uk",
    category: "nature",
    status: "want",
    coords: [52.3083, 0.2906],
    asset: "assets/wicken-fen.png",
    initial: "F",
    tags: ["National Trust", "wetland", "wildlife"],
    season: "Early summer",
    travel: "North-east of Cambridge",
    note: "An old fenland reserve, kept for boardwalks, birds, and big flat skies."
  },
  {
    id: "houghton-mill",
    custodian: "national-trust",
    name: "Houghton Mill",
    english: "Houghton Mill",
    city: "Huntingdon, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.3328, -0.1147],
    asset: "assets/houghton-mill.png",
    initial: "M",
    tags: ["National Trust", "watermill", "river"],
    season: "Summer",
    travel: "West toward Huntingdon",
    note: "A working watermill on the Great Ouse, good for a riverside walk and milled flour."
  },
  {
    id: "audley-end",
    custodian: "english-heritage",
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
    custodian: "english-heritage",
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
    custodian: "english-heritage",
    name: "Duxford Chapel",
    english: "Duxford Chapel",
    city: "Whittlesford, UK",
    region: "uk",
    category: "heritage",
    status: "visited",
    coords: [52.1145, 0.1561],
    asset: "assets/duxford-chapel.png",
    initial: "C",
    tags: ["English Heritage", "medieval chapel", "free"],
    season: "Any clear day",
    travel: "By Whittlesford Parkway station",
    note: "A tiny medieval wayside chapel right by the station, an easy add-on to a fen ride."
  },
  {
    id: "aydon-castle",
    custodian: "english-heritage",
    name: "Aydon Castle",
    english: "Aydon Castle",
    city: "Corbridge, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [55.006, -2.099],
    asset: "assets/aydon-castle.png",
    initial: "A",
    tags: ["English Heritage","castle","Northumberland"],
    season: "Clear autumn",
    travel: "Northumberland castle route",
    note: "A compact fortified manor near Corbridge, good for the northern medieval cluster."
  },
  {
    id: "battle-abbey",
    custodian: "english-heritage",
    name: "Battle Abbey",
    english: "Battle Abbey",
    city: "Battle, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [50.917, 0.487],
    asset: "assets/battle-abbey.png",
    initial: "B",
    tags: ["English Heritage","abbey","1066"],
    season: "Autumn",
    travel: "Sussex history day",
    note: "A landmark where architecture, battlefield, and national memory sit in one place."
  },
  {
    id: "beeston-castle",
    custodian: "english-heritage",
    name: "Beeston Castle",
    english: "Beeston Castle",
    city: "Cheshire, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [53.127, -2.691],
    asset: "assets/beeston-castle.png",
    initial: "B",
    tags: ["English Heritage","castle","hilltop"],
    season: "Bright spring",
    travel: "Cheshire castle walk",
    note: "A dramatic hilltop ruin with long views, strong enough to work as a map object."
  },
  {
    id: "birdoswald-roman-fort",
    custodian: "english-heritage",
    name: "Birdoswald Roman Fort",
    english: "Birdoswald Roman Fort",
    city: "Cumbria, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [54.991, -2.602],
    asset: "assets/birdoswald-roman-fort.png",
    initial: "B",
    tags: ["English Heritage","Hadrian's Wall","Roman"],
    season: "Windy clear day",
    travel: "Hadrian's Wall route",
    note: "A Roman fort on the wall line, useful for building a northern frontier trail."
  },
  {
    id: "blakeney-point",
    custodian: "national-trust",
    name: "Blakeney Point",
    english: "Blakeney Point",
    city: "Norfolk, UK",
    region: "uk",
    category: "nature",
    status: "want",
    coords: [52.97, 0.973],
    asset: "assets/blakeney-point.png",
    initial: "B",
    tags: ["National Trust","coast","seal colony"],
    season: "Late summer",
    travel: "North Norfolk coast",
    note: "A coastal edge place, marked for boats, shingle, and long horizontal light."
  },
  {
    id: "blickling-estate",
    custodian: "national-trust",
    name: "Blickling Estate",
    english: "Blickling Estate",
    city: "Aylsham, UK",
    region: "uk",
    category: "nature",
    status: "want",
    coords: [52.812, 1.232],
    asset: "assets/blickling-estate.png",
    initial: "B",
    tags: ["National Trust","estate","Norfolk"],
    season: "Autumn colour",
    travel: "North Norfolk estate day",
    note: "A grand Jacobean estate with enough garden and library feeling to deserve its own marker."
  },
  {
    id: "bolsover-castle",
    custodian: "english-heritage",
    name: "Bolsover Castle",
    english: "Bolsover Castle",
    city: "Bolsover, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [53.231, -1.292],
    asset: "assets/bolsover-castle.png",
    initial: "B",
    tags: ["English Heritage","castle","Derbyshire"],
    season: "Summer",
    travel: "Derbyshire heritage route",
    note: "A theatrical little castle with a strong silhouette and courtly strangeness."
  },
  {
    id: "bourne-mill",
    custodian: "national-trust",
    name: "Bourne Mill",
    english: "Bourne Mill",
    city: "Colchester, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.877, 0.916],
    asset: "assets/bourne-mill.png",
    initial: "M",
    tags: ["National Trust","mill","Essex"],
    season: "Spring",
    travel: "Essex mill stop",
    note: "A small timber-framed watermill, useful as a quieter East Anglia marker."
  },
  {
    id: "brancaster-estate",
    custodian: "national-trust",
    name: "Brancaster Estate",
    english: "Brancaster Estate",
    city: "Norfolk, UK",
    region: "uk",
    category: "nature",
    status: "want",
    coords: [52.966, 0.64],
    asset: "assets/brancaster-estate.png",
    initial: "B",
    tags: ["National Trust","coast","saltmarsh"],
    season: "Big-sky summer",
    travel: "North Norfolk coast",
    note: "A wide coastal landscape place for marsh, dunes, and walking rather than one building."
  },
  {
    id: "brougham-castle",
    custodian: "english-heritage",
    name: "Brougham Castle",
    english: "Brougham Castle",
    city: "Penrith, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [54.651, -2.724],
    asset: "assets/brougham-castle.png",
    initial: "B",
    tags: ["English Heritage","castle","Cumbria"],
    season: "Cold clear day",
    travel: "Eden Valley route",
    note: "A ruined castle by the rivers, good for the Cumbria side of the atlas."
  },
  {
    id: "byland-abbey",
    custodian: "english-heritage",
    name: "Byland Abbey",
    english: "Byland Abbey",
    city: "North Yorkshire, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [54.205, -1.159],
    asset: "assets/byland-abbey.png",
    initial: "B",
    tags: ["English Heritage","abbey","Yorkshire"],
    season: "Soft overcast",
    travel: "North Yorkshire abbey route",
    note: "A pale, open abbey ruin that pairs naturally with Rievaulx and Mount Grace."
  },
  {
    id: "carisbrooke-castle",
    custodian: "english-heritage",
    name: "Carisbrooke Castle",
    english: "Carisbrooke Castle",
    city: "Isle of Wight, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [50.687, -1.314],
    asset: "assets/carisbrooke-castle.png",
    initial: "C",
    tags: ["English Heritage","castle","Isle of Wight"],
    season: "Summer",
    travel: "Isle of Wight route",
    note: "A castle-within-an-island marker, useful for opening up the south coast map."
  },
  {
    id: "carlisle-castle",
    custodian: "english-heritage",
    name: "Carlisle Castle",
    english: "Carlisle Castle",
    city: "Carlisle, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [54.897, -2.939],
    asset: "assets/carlisle-castle.png",
    initial: "C",
    tags: ["English Heritage","castle","border history"],
    season: "Winter light",
    travel: "Cumbria border route",
    note: "A border fortress with a tougher military feeling than the romantic ruins."
  },
  {
    id: "chesters-roman-fort",
    custodian: "english-heritage",
    name: "Chesters Roman Fort",
    english: "Chesters Roman Fort",
    city: "Chollerford, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [55.028, -2.139],
    asset: "assets/chesters-roman-fort.png",
    initial: "C",
    tags: ["English Heritage","Hadrian's Wall","Roman"],
    season: "Clear spring",
    travel: "Hadrian's Wall route",
    note: "A Roman cavalry fort by the river, another anchor for the wall trail."
  },
  {
    id: "coggeshall-grange-barn",
    custodian: "national-trust",
    name: "Coggeshall Grange Barn",
    english: "Coggeshall Grange Barn",
    city: "Coggeshall, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.871, 0.689],
    asset: "assets/coggeshall-grange-barn.png",
    initial: "C",
    tags: ["National Trust","barn","Essex"],
    season: "Harvest season",
    travel: "Essex timber route",
    note: "A huge medieval barn, saved for structure and timber rather than ornament."
  },
  {
    id: "corbridge-roman-town",
    custodian: "english-heritage",
    name: "Corbridge Roman Town",
    english: "Corbridge Roman Town",
    city: "Corbridge, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [54.974, -2.019],
    asset: "assets/corbridge-roman-town.png",
    initial: "C",
    tags: ["English Heritage","Roman town","Northumberland"],
    season: "Crisp morning",
    travel: "Hadrian's Wall route",
    note: "A Roman town site that makes the northern route feel lived-in, not only military."
  },
  {
    id: "dover-castle",
    custodian: "english-heritage",
    name: "Dover Castle",
    english: "Dover Castle",
    city: "Dover, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.129, 1.322],
    asset: "assets/dover-castle.png",
    initial: "D",
    tags: ["English Heritage","castle","coast"],
    season: "Bright windy day",
    travel: "Kent coast route",
    note: "A massive coastal fortress, strong enough to become a southern map anchor."
  },
  {
    id: "dunwich-heath",
    custodian: "national-trust",
    name: "Dunwich Heath",
    english: "Dunwich Heath",
    city: "Suffolk, UK",
    region: "uk",
    category: "nature",
    status: "want",
    coords: [52.247, 1.626],
    asset: "assets/dunwich-heath.png",
    initial: "D",
    tags: ["National Trust","heath","coast"],
    season: "Late summer",
    travel: "Suffolk coast walk",
    note: "A heath-and-sea place for colour, horizon, and slower wandering."
  },
  {
    id: "eltham-palace",
    custodian: "english-heritage",
    name: "Eltham Palace",
    english: "Eltham Palace",
    city: "London, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.447, 0.048],
    asset: "assets/eltham-palace.png",
    initial: "E",
    tags: ["English Heritage","Art Deco","palace"],
    season: "Rainy afternoon",
    travel: "South-east London day",
    note: "A palace with medieval and Art Deco layers, visually different from the rural castles."
  },
  {
    id: "farleigh-hungerford-castle",
    custodian: "english-heritage",
    name: "Farleigh Hungerford Castle",
    english: "Farleigh Hungerford Castle",
    city: "Somerset, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.318, -2.284],
    asset: "assets/farleigh-hungerford-castle.png",
    initial: "F",
    tags: ["English Heritage","castle","Somerset"],
    season: "Spring",
    travel: "Somerset castle route",
    note: "A small castle ruin with chapel detail, good for a quieter west-country marker."
  },
  {
    id: "felbrigg-hall",
    custodian: "national-trust",
    name: "Felbrigg Hall",
    english: "Felbrigg Hall",
    city: "Norfolk, UK",
    region: "uk",
    category: "nature",
    status: "want",
    coords: [52.907, 1.259],
    asset: "assets/felbrigg-hall.png",
    initial: "F",
    tags: ["National Trust","hall","Norfolk"],
    season: "Autumn",
    travel: "North Norfolk house route",
    note: "A house-and-estate place with a softer domestic texture than the castles."
  },
  {
    id: "finchale-priory",
    custodian: "english-heritage",
    name: "Finchale Priory",
    english: "Finchale Priory",
    city: "Durham, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [54.817, -1.547],
    asset: "assets/finchale-priory.png",
    initial: "F",
    tags: ["English Heritage","priory","Durham"],
    season: "Misty morning",
    travel: "Durham ruins route",
    note: "A riverside priory ruin, useful as a northern monastic stop."
  },
  {
    id: "flatford",
    custodian: "national-trust",
    name: "Flatford",
    english: "Flatford",
    city: "Suffolk, UK",
    region: "uk",
    category: "nature",
    status: "want",
    coords: [51.958, 1.022],
    asset: "assets/flatford.png",
    initial: "F",
    tags: ["National Trust","Constable country","river"],
    season: "Summer",
    travel: "Stour Valley walk",
    note: "A river-and-painting place, kept for landscape memory more than monumentality."
  },
  {
    id: "framlingham-castle",
    custodian: "english-heritage",
    name: "Framlingham Castle",
    english: "Framlingham Castle",
    city: "Suffolk, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.221, 1.342],
    asset: "assets/framlingham-castle.png",
    initial: "F",
    tags: ["English Heritage","castle","Suffolk"],
    season: "Clear autumn",
    travel: "Suffolk castle route",
    note: "A curtain-wall castle with a bold outline and strong East Anglia presence."
  },
  {
    id: "furness-abbey",
    custodian: "english-heritage",
    name: "Furness Abbey",
    english: "Furness Abbey",
    city: "Barrow-in-Furness, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [54.137, -3.209],
    asset: "assets/furness-abbey.png",
    initial: "F",
    tags: ["English Heritage","abbey","Cumbria"],
    season: "Moody afternoon",
    travel: "Cumbria abbey route",
    note: "A red-stone abbey ruin, visually rich enough to sit apart from the pale Yorkshire abbeys."
  },
  {
    id: "goodrich-castle",
    custodian: "english-heritage",
    name: "Goodrich Castle",
    english: "Goodrich Castle",
    city: "Herefordshire, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.871, -2.62],
    asset: "assets/goodrich-castle.png",
    initial: "G",
    tags: ["English Heritage","castle","Wye Valley"],
    season: "Autumn",
    travel: "Wye Valley route",
    note: "A red sandstone castle over the valley, a strong west-side landmark."
  },
  {
    id: "grimes-graves",
    custodian: "english-heritage",
    name: "Grime's Graves",
    english: "Grime's Graves",
    city: "Norfolk, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.466, 0.676],
    asset: "assets/grimes-graves.png",
    initial: "G",
    tags: ["English Heritage","prehistoric","flint mines"],
    season: "Dry clear day",
    travel: "Norfolk ancient route",
    note: "A prehistoric mine landscape, useful because it is not another chapel or castle."
  },
  {
    id: "horsey-windpump",
    custodian: "national-trust",
    name: "Horsey Windpump",
    english: "Horsey Windpump",
    city: "Norfolk, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.739, 1.635],
    asset: "assets/horsey-windpump.png",
    initial: "H",
    tags: ["National Trust","windpump","Broads"],
    season: "Summer evening",
    travel: "Norfolk Broads route",
    note: "A vertical Broads landmark, good for water, reeds, and sky."
  },
  {
    id: "housesteads-roman-fort",
    custodian: "english-heritage",
    name: "Housesteads Roman Fort",
    english: "Housesteads Roman Fort",
    city: "Northumberland, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [55.013, -2.331],
    asset: "assets/housesteads-roman-fort.png",
    initial: "H",
    tags: ["English Heritage","Hadrian's Wall","Roman"],
    season: "Windy spring",
    travel: "Hadrian's Wall route",
    note: "A high wall fort with huge landscape presence, one of the northern anchors."
  },
  {
    id: "ickworth-estate",
    custodian: "national-trust",
    name: "Ickworth Estate",
    english: "Ickworth Estate",
    city: "Bury St Edmunds, UK",
    region: "uk",
    category: "nature",
    status: "want",
    coords: [52.218, 0.657],
    asset: "assets/ickworth-estate.png",
    initial: "I",
    tags: ["National Trust","rotunda","estate"],
    season: "Late spring",
    travel: "Suffolk estate day",
    note: "A rotunda-and-parkland estate, pleasingly unlike the abbeys nearby."
  },
  {
    id: "kenilworth-castle",
    custodian: "english-heritage",
    name: "Kenilworth Castle",
    english: "Kenilworth Castle",
    city: "Warwickshire, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.347, -1.591],
    asset: "assets/kenilworth-castle.png",
    initial: "K",
    tags: ["English Heritage","castle","Elizabethan garden"],
    season: "Summer",
    travel: "Warwickshire heritage route",
    note: "A huge castle ruin with courtly history and a strong garden story."
  },
  {
    id: "kirby-hall",
    custodian: "english-heritage",
    name: "Kirby Hall",
    english: "Kirby Hall",
    city: "Northamptonshire, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.525, -0.638],
    asset: "assets/kirby-hall.png",
    initial: "K",
    tags: ["English Heritage","country house","ruins"],
    season: "Late spring",
    travel: "Northamptonshire route",
    note: "A roofless great house, halfway between ruin and formal architecture."
  },
  {
    id: "lanercost-priory",
    custodian: "english-heritage",
    name: "Lanercost Priory",
    english: "Lanercost Priory",
    city: "Cumbria, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [54.966, -2.695],
    asset: "assets/lanercost-priory.png",
    initial: "L",
    tags: ["English Heritage","priory","border country"],
    season: "Cool autumn",
    travel: "Hadrian's Wall route",
    note: "A border priory that sits well beside the northern castle and Roman places."
  },
  {
    id: "launceston-castle",
    custodian: "english-heritage",
    name: "Launceston Castle",
    english: "Launceston Castle",
    city: "Cornwall, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [50.637, -4.361],
    asset: "assets/launceston-castle.png",
    initial: "L",
    tags: ["English Heritage","castle","Cornwall"],
    season: "Summer",
    travel: "Cornwall castle route",
    note: "A hilltop Cornish castle marker for the far south-west edge of the map."
  },
  {
    id: "lavenham-guildhall",
    custodian: "national-trust",
    name: "Lavenham Guildhall",
    english: "Lavenham Guildhall",
    city: "Lavenham, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.108, 0.797],
    asset: "assets/lavenham-guildhall.png",
    initial: "L",
    tags: ["National Trust","guildhall","Suffolk"],
    season: "Golden afternoon",
    travel: "Suffolk village route",
    note: "A timber-framed guildhall, ideal for the East Anglian town texture."
  },
  {
    id: "lullingstone-roman-villa",
    custodian: "english-heritage",
    name: "Lullingstone Roman Villa",
    english: "Lullingstone Roman Villa",
    city: "Kent, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.358, 0.194],
    asset: "assets/lullingstone-roman-villa.png",
    initial: "L",
    tags: ["English Heritage","Roman villa","Kent"],
    season: "Rainy day",
    travel: "Kent Roman route",
    note: "A Roman domestic site, good for mosaic and interior detail rather than skyline."
  },
  {
    id: "maiden-castle",
    custodian: "english-heritage",
    name: "Maiden Castle",
    english: "Maiden Castle",
    city: "Dorset, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [50.695, -2.47],
    asset: "assets/maiden-castle.png",
    initial: "M",
    tags: ["English Heritage","hillfort","Dorset"],
    season: "Windy clear day",
    travel: "Dorset ancient route",
    note: "A vast hillfort earthwork, marked as landscape architecture rather than a building."
  },
  {
    id: "melford-hall",
    custodian: "national-trust",
    name: "Melford Hall",
    english: "Melford Hall",
    city: "Long Melford, UK",
    region: "uk",
    category: "nature",
    status: "want",
    coords: [52.084, 0.717],
    asset: "assets/melford-hall.png",
    initial: "M",
    tags: ["National Trust","hall","Suffolk"],
    season: "Spring",
    travel: "Suffolk village route",
    note: "A mellow hall-and-garden stop in one of the lovelier Suffolk village corridors."
  },
  {
    id: "middleham-castle",
    custodian: "english-heritage",
    name: "Middleham Castle",
    english: "Middleham Castle",
    city: "North Yorkshire, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [54.286, -1.807],
    asset: "assets/middleham-castle.png",
    initial: "M",
    tags: ["English Heritage","castle","Yorkshire Dales"],
    season: "Autumn",
    travel: "Yorkshire castle route",
    note: "A powerful northern keep ruin, especially good for the Dales edge of the atlas."
  },
  {
    id: "morston-quay",
    custodian: "national-trust",
    name: "Morston Quay",
    english: "Morston Quay",
    city: "Norfolk, UK",
    region: "uk",
    category: "nature",
    status: "want",
    coords: [52.955, 0.986],
    asset: "assets/morston-quay.png",
    initial: "M",
    tags: ["National Trust","quay","coast"],
    season: "Summer",
    travel: "North Norfolk coast",
    note: "A small coastal launch-point place, useful for trips out toward Blakeney Point."
  },
  {
    id: "mount-grace-priory",
    custodian: "english-heritage",
    name: "Mount Grace Priory",
    english: "Mount Grace Priory",
    city: "North Yorkshire, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [54.374, -1.309],
    asset: "assets/mount-grace-priory.png",
    initial: "M",
    tags: ["English Heritage","priory","Carthusian"],
    season: "Quiet spring",
    travel: "North York Moors route",
    note: "A contemplative priory site that feels more intimate than the giant abbeys."
  },
  {
    id: "muchelney-abbey",
    custodian: "english-heritage",
    name: "Muchelney Abbey",
    english: "Muchelney Abbey",
    city: "Somerset, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.021, -2.816],
    asset: "assets/muchelney-abbey.png",
    initial: "M",
    tags: ["English Heritage","abbey","Somerset Levels"],
    season: "Misty morning",
    travel: "Somerset abbey route",
    note: "A Levels-side abbey ruin with a quiet, remote feeling."
  },
  {
    id: "nunney-castle",
    custodian: "english-heritage",
    name: "Nunney Castle",
    english: "Nunney Castle",
    city: "Somerset, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.21, -2.377],
    asset: "assets/nunney-castle.png",
    initial: "N",
    tags: ["English Heritage","castle","moat"],
    season: "Soft autumn",
    travel: "Somerset castle route",
    note: "A small moated castle that reads almost like a miniature story object."
  },
  {
    id: "old-sarum",
    custodian: "english-heritage",
    name: "Old Sarum",
    english: "Old Sarum",
    city: "Salisbury, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.093, -1.806],
    asset: "assets/old-sarum.png",
    initial: "O",
    tags: ["English Heritage","hillfort","cathedral ruins"],
    season: "Clear day",
    travel: "Wiltshire ancient route",
    note: "A layered hilltop site: prehistoric, Norman, and cathedral traces in one marker."
  },
  {
    id: "orford-castle",
    custodian: "english-heritage",
    name: "Orford Castle",
    english: "Orford Castle",
    city: "Orford, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.095, 1.533],
    asset: "assets/orford-castle.png",
    initial: "O",
    tags: ["English Heritage","castle","Suffolk coast"],
    season: "Bright coastal day",
    travel: "Suffolk coast route",
    note: "A polygonal keep near the coast, precise and memorable on the East Anglia cluster."
  },
  {
    id: "osborne-house",
    custodian: "english-heritage",
    name: "Osborne House",
    english: "Osborne House",
    city: "Isle of Wight, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [50.75, -1.27],
    asset: "assets/osborne-house.png",
    initial: "O",
    tags: ["English Heritage","royal house","Isle of Wight"],
    season: "Summer",
    travel: "Isle of Wight route",
    note: "A seaside royal house, more villa-like than castle-like, with a different holiday mood."
  },
  {
    id: "oxburgh-estate",
    custodian: "national-trust",
    name: "Oxburgh Estate",
    english: "Oxburgh Estate",
    city: "Norfolk, UK",
    region: "uk",
    category: "nature",
    status: "want",
    coords: [52.581, 0.57],
    asset: "assets/oxburgh-estate.png",
    initial: "O",
    tags: ["National Trust","moated hall","Norfolk"],
    season: "Late spring",
    travel: "West Norfolk estate route",
    note: "A moated brick house with strong reflection and garden potential."
  },
  {
    id: "paycockes-house",
    custodian: "national-trust",
    name: "Paycocke's House",
    english: "Paycocke's House",
    city: "Coggeshall, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.871, 0.687],
    asset: "assets/paycockes-house.png",
    initial: "P",
    tags: ["National Trust","Tudor house","Essex"],
    season: "Autumn",
    travel: "Essex timber route",
    note: "A close-up timber-framed house marker, paired naturally with Coggeshall Barn."
  },
  {
    id: "peckover-house",
    custodian: "national-trust",
    name: "Peckover House",
    english: "Peckover House",
    city: "Wisbech, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.666, 0.161],
    asset: "assets/peckover-house.png",
    initial: "P",
    tags: ["National Trust","Georgian house","Cambridgeshire"],
    season: "Garden season",
    travel: "Fenland town route",
    note: "A Georgian townhouse and garden, useful for the Wisbech edge of the map."
  },
  {
    id: "pendennis-castle",
    custodian: "english-heritage",
    name: "Pendennis Castle",
    english: "Pendennis Castle",
    city: "Falmouth, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [50.146, -5.049],
    asset: "assets/pendennis-castle.png",
    initial: "P",
    tags: ["English Heritage","coastal fort","Cornwall"],
    season: "Windy summer",
    travel: "Cornwall coast route",
    note: "A coastal artillery fortress that marks the far south-west with real weight."
  },
  {
    id: "pevensey-castle",
    custodian: "english-heritage",
    name: "Pevensey Castle",
    english: "Pevensey Castle",
    city: "East Sussex, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [50.819, 0.337],
    asset: "assets/pevensey-castle.png",
    initial: "P",
    tags: ["English Heritage","castle","Roman shore fort"],
    season: "Spring",
    travel: "Sussex coast route",
    note: "A Norman castle inside Roman walls, a layered defensive place."
  },
  {
    id: "portchester-castle",
    custodian: "english-heritage",
    name: "Portchester Castle",
    english: "Portchester Castle",
    city: "Hampshire, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [50.837, -1.113],
    asset: "assets/portchester-castle.png",
    initial: "P",
    tags: ["English Heritage","castle","Roman fort"],
    season: "Clear coastal day",
    travel: "Portsmouth harbour route",
    note: "A harbour castle inside Roman walls, good for sea-edge history."
  },
  {
    id: "richmond-castle",
    custodian: "english-heritage",
    name: "Richmond Castle",
    english: "Richmond Castle",
    city: "North Yorkshire, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [54.404, -1.737],
    asset: "assets/richmond-castle.png",
    initial: "R",
    tags: ["English Heritage","castle","Yorkshire"],
    season: "Crisp autumn",
    travel: "Yorkshire castle route",
    note: "A Norman castle over the town and river, another strong northern keep marker."
  },
  {
    id: "rievaulx-abbey",
    custodian: "english-heritage",
    name: "Rievaulx Abbey",
    english: "Rievaulx Abbey",
    city: "North Yorkshire, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [54.257, -1.117],
    asset: "assets/rievaulx-abbey.png",
    initial: "R",
    tags: ["English Heritage","abbey","Yorkshire"],
    season: "Soft spring",
    travel: "North Yorkshire abbey route",
    note: "A great Cistercian ruin in a valley, one of the most atmospheric abbey markers."
  },
  {
    id: "rochester-castle",
    custodian: "english-heritage",
    name: "Rochester Castle",
    english: "Rochester Castle",
    city: "Rochester, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.389, 0.501],
    asset: "assets/rochester-castle.png",
    initial: "R",
    tags: ["English Heritage","castle","Kent"],
    season: "Clear winter",
    travel: "Kent castle route",
    note: "A towering keep beside the cathedral, a compact but powerful town landmark."
  },
  {
    id: "scarborough-castle",
    custodian: "english-heritage",
    name: "Scarborough Castle",
    english: "Scarborough Castle",
    city: "Scarborough, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [54.288, -0.39],
    asset: "assets/scarborough-castle.png",
    initial: "S",
    tags: ["English Heritage","castle","coast"],
    season: "Windy summer",
    travel: "Yorkshire coast route",
    note: "A headland castle where the sea view is part of the building."
  },
  {
    id: "sheringham-park",
    custodian: "national-trust",
    name: "Sheringham Park",
    english: "Sheringham Park",
    city: "Norfolk, UK",
    region: "uk",
    category: "nature",
    status: "want",
    coords: [52.932, 1.19],
    asset: "assets/sheringham-park.png",
    initial: "S",
    tags: ["National Trust","park","coast"],
    season: "Rhododendron season",
    travel: "North Norfolk walk",
    note: "A designed landscape with sea views, a softer counterpoint to Norfolk ruins."
  },
  {
    id: "silchester-roman-city-walls",
    custodian: "english-heritage",
    name: "Silchester Roman City Walls",
    english: "Silchester Roman City Walls",
    city: "Hampshire, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.356, -1.083],
    asset: "assets/silchester-roman-city-walls.png",
    initial: "S",
    tags: ["English Heritage","Roman city","walls"],
    season: "Dry autumn",
    travel: "Hampshire Roman route",
    note: "A Roman city outline in fields, good for mapping invisible history."
  },
  {
    id: "st-mawes-castle",
    custodian: "english-heritage",
    name: "St Mawes Castle",
    english: "St Mawes Castle",
    city: "Cornwall, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [50.157, -5.024],
    asset: "assets/st-mawes-castle.png",
    initial: "S",
    tags: ["English Heritage","coastal fort","Cornwall"],
    season: "Sunny summer",
    travel: "Fal estuary route",
    note: "A rounded coastal fortress that pairs neatly with Pendennis across the water."
  },
  {
    id: "sutton-hoo",
    custodian: "national-trust",
    name: "Sutton Hoo",
    english: "Sutton Hoo",
    city: "Woodbridge, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.089, 1.338],
    asset: "assets/sutton-hoo.png",
    initial: "S",
    tags: ["National Trust","Anglo-Saxon","burial mounds"],
    season: "Early autumn",
    travel: "Suffolk archaeology route",
    note: "A burial-mound landscape and museum place, not just a house or ruin."
  },
  {
    id: "tilbury-fort",
    custodian: "english-heritage",
    name: "Tilbury Fort",
    english: "Tilbury Fort",
    city: "Tilbury, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.452, 0.374],
    asset: "assets/tilbury-fort.png",
    initial: "T",
    tags: ["English Heritage","fort","Thames"],
    season: "Cold bright day",
    travel: "Thames fort route",
    note: "A geometric river fort, good for military architecture and estuary atmosphere."
  },
  {
    id: "tintagel-castle",
    custodian: "english-heritage",
    name: "Tintagel Castle",
    english: "Tintagel Castle",
    city: "Cornwall, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [50.668, -4.76],
    asset: "assets/tintagel-castle.png",
    initial: "T",
    tags: ["English Heritage","castle","coast"],
    season: "Stormy summer",
    travel: "Cornwall coast route",
    note: "A cliff-and-bridge castle place where the landscape does half the storytelling."
  },
  {
    id: "tynemouth-priory-castle",
    custodian: "english-heritage",
    name: "Tynemouth Priory and Castle",
    english: "Tynemouth Priory and Castle",
    city: "Tynemouth, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [55.017, -1.42],
    asset: "assets/tynemouth-priory-castle.png",
    initial: "T",
    tags: ["English Heritage","priory","coast"],
    season: "Clear windy day",
    travel: "North-east coast route",
    note: "A priory and castle on the headland, excellent for sea-edge ruins."
  },
  {
    id: "warkworth-castle",
    custodian: "english-heritage",
    name: "Warkworth Castle",
    english: "Warkworth Castle",
    city: "Northumberland, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [55.346, -1.612],
    asset: "assets/warkworth-castle.png",
    initial: "W",
    tags: ["English Heritage","castle","Northumberland"],
    season: "Autumn",
    travel: "Northumberland castle route",
    note: "A big northern castle above the village and river, made for a map silhouette."
  },
  {
    id: "whitby-abbey",
    custodian: "english-heritage",
    name: "Whitby Abbey",
    english: "Whitby Abbey",
    city: "Whitby, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [54.488, -0.607],
    asset: "assets/whitby-abbey.png",
    initial: "W",
    tags: ["English Heritage","abbey","coast"],
    season: "Moody autumn",
    travel: "Yorkshire coast route",
    note: "A cliff-top abbey ruin, one of the best overlaps of architecture and atmosphere."
  },
  {
    id: "witley-court",
    custodian: "english-heritage",
    name: "Witley Court",
    english: "Witley Court",
    city: "Worcestershire, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.282, -2.337],
    asset: "assets/witley-court.png",
    initial: "W",
    tags: ["English Heritage","ruined mansion","fountain"],
    season: "Summer",
    travel: "Worcestershire route",
    note: "A huge ruined mansion and formal garden, dramatic in a different way from medieval ruins."
  },
  {
    id: "wrest-park",
    custodian: "english-heritage",
    name: "Wrest Park",
    english: "Wrest Park",
    city: "Bedfordshire, UK",
    region: "uk",
    category: "nature",
    status: "want",
    coords: [52.007, -0.412],
    asset: "assets/wrest-park.png",
    initial: "W",
    tags: ["English Heritage","garden","country house"],
    season: "Late spring",
    travel: "Bedfordshire garden route",
    note: "A formal garden landscape with long avenues and a stately-house anchor."
  },
  {
    id: "wroxeter-roman-city",
    custodian: "english-heritage",
    name: "Wroxeter Roman City",
    english: "Wroxeter Roman City",
    city: "Shropshire, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [52.671, -2.647],
    asset: "assets/wroxeter-roman-city.png",
    initial: "W",
    tags: ["English Heritage","Roman city","Shropshire"],
    season: "Clear spring",
    travel: "Shropshire Roman route",
    note: "A Roman city ruin with enough surviving masonry to read clearly on the map."
  },
  {
    id: "fez",
    placeholder: true,
    name: "Fès",
    english: "Fez",
    city: "Fez",
    region: "morocco",
    category: "heritage",
    status: "want",
    coords: [34.0631, -4.9778],
    tags: ["medina", "Morocco", "old city"],
    season: "Spring",
    travel: "Morocco trip",
    note: "Placeholder for the Fez medina. Add a landmark illustration later."
  },
  {
    id: "tangier",
    placeholder: true,
    name: "Tangier",
    english: "Tangier",
    city: "Tangier",
    region: "morocco",
    category: "heritage",
    status: "want",
    coords: [35.7595, -5.834],
    tags: ["strait", "Morocco", "port"],
    season: "Spring",
    travel: "Morocco trip",
    note: "Placeholder for Tangier, the port at the edge of the strait. Add art later."
  },
  {
    id: "rabat",
    placeholder: true,
    name: "Rabat",
    english: "Rabat",
    city: "Rabat",
    region: "morocco",
    category: "heritage",
    status: "want",
    coords: [34.0209, -6.8416],
    tags: ["capital", "Morocco", "kasbah"],
    season: "Spring",
    travel: "Morocco trip",
    note: "Placeholder for Rabat, with its kasbah above the river. Add art later."
  },
  {
    id: "casablanca",
    placeholder: true,
    name: "Casablanca",
    english: "Casablanca",
    city: "Casablanca",
    region: "morocco",
    category: "heritage",
    status: "want",
    coords: [33.5731, -7.5898],
    tags: ["coast", "Morocco", "city"],
    season: "Spring",
    travel: "Morocco trip",
    note: "Placeholder for Casablanca on the Atlantic coast. Add art later."
  },
  {
    id: "cannes-palais",
    placeholder: true,
    name: "Palais des Festivals",
    english: "Festival Palace, Cannes",
    city: "Cannes",
    region: "france",
    category: "heritage",
    status: "want",
    coords: [43.5507, 7.0174],
    tags: ["cinema", "festival", "Cannes"],
    season: "Late spring",
    travel: "Côte d'Azur trip",
    note: "The film palace and red-carpet steps that host the Cannes Film Festival."
  },
  {
    id: "notre-dame-paris",
    placeholder: true,
    name: "Notre-Dame de Paris",
    english: "Notre-Dame Cathedral",
    city: "Paris",
    region: "france",
    category: "heritage",
    status: "want",
    coords: [48.853, 2.3499],
    tags: ["gothic", "cathedral", "Paris"],
    season: "Autumn",
    travel: "Paris trip",
    note: "The gothic cathedral on the Île de la Cité, reopened after restoration."
  },
  {
    id: "st-pauls",
    placeholder: true,
    name: "St Paul's Cathedral",
    english: "St Paul's Cathedral",
    city: "London, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.5138, -0.0984],
    tags: ["dome", "Wren", "London"],
    season: "Any",
    travel: "London day",
    note: "Wren's domed cathedral above the City of London."
  },
  {
    id: "westminster-cathedral",
    placeholder: true,
    name: "Westminster Cathedral",
    english: "Westminster Cathedral",
    city: "London, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [51.4961, -0.1396],
    tags: ["Byzantine", "Catholic", "London"],
    season: "Any",
    travel: "London day",
    note: "The striped Neo-Byzantine Catholic cathedral near Victoria."
  },
  {
    id: "barbican",
    placeholder: true,
    name: "Barbican",
    english: "Barbican Centre",
    city: "London, UK",
    region: "uk",
    category: "walk",
    status: "want",
    coords: [51.52, -0.0937],
    tags: ["brutalist", "architecture", "London"],
    season: "Any",
    travel: "London day",
    note: "Brutalist estate and arts centre, best explored along the highwalks."
  },
  {
    id: "edinburgh-castle",
    placeholder: true,
    name: "Edinburgh Castle",
    english: "Edinburgh Castle",
    city: "Edinburgh, UK",
    region: "uk",
    category: "heritage",
    status: "want",
    coords: [55.9486, -3.1999],
    tags: ["castle", "Scotland", "Edinburgh"],
    season: "Summer",
    travel: "Scotland trip",
    note: "The castle on the rock above Edinburgh's old town."
  },
  {
    id: "stephansdom",
    placeholder: true,
    name: "Stephansdom",
    english: "St. Stephen's Cathedral, Vienna",
    city: "Wien",
    region: "austria",
    category: "heritage",
    status: "want",
    coords: [48.2085, 16.3731],
    tags: ["gothic", "cathedral", "Vienna"],
    season: "Winter",
    travel: "Vienna trip",
    note: "Vienna's gothic cathedral with its patterned tiled roof."
  },
  {
    id: "brandenburg-gate",
    placeholder: true,
    name: "Brandenburger Tor",
    english: "Brandenburg Gate",
    city: "Berlin, Germany",
    region: "germany",
    category: "heritage",
    status: "want",
    coords: [52.5163, 13.3777],
    tags: ["neoclassical", "landmark", "Berlin"],
    season: "Any",
    travel: "Berlin trip",
    note: "The neoclassical gate at the heart of Berlin."
  },
  {
    id: "nyhavn",
    placeholder: true,
    name: "Nyhavn",
    english: "Nyhavn",
    city: "Copenhagen",
    region: "denmark",
    category: "walk",
    status: "want",
    coords: [55.6797, 12.5912],
    tags: ["harbour", "waterfront", "Copenhagen"],
    season: "Summer",
    travel: "Copenhagen trip",
    note: "The colourful canal-side harbour front in central Copenhagen."
  },
  {
    id: "gdansk-st-mary",
    placeholder: true,
    name: "Bazylika Mariacka",
    english: "St. Mary's Church, Gdańsk",
    city: "Gdańsk",
    region: "poland",
    category: "heritage",
    status: "want",
    coords: [54.3494, 18.6531],
    tags: ["brick gothic", "church", "Gdańsk"],
    season: "Summer",
    travel: "Baltic trip",
    note: "One of the largest brick churches in the world, in Gdańsk's old town."
  },
];

const state = {
  region: "uk",
  status: "all",
  category: "all",
  search: "",
  focus: "focused",
  activeId: null
};

// Visited marks are kept in localStorage so they survive reloads. We remember
// each place's data-defined status as baseStatus so unmarking can restore it.
const VISITED_KEY = "atlasVisited";

function loadVisited() {
  try {
    return new Set(JSON.parse(localStorage.getItem(VISITED_KEY)) || []);
  } catch (err) {
    return new Set();
  }
}

const visitedIds = loadVisited();
places.forEach((place) => {
  place.baseStatus = place.status;
  if (visitedIds.has(place.id)) place.status = "visited";
});

function setVisited(id, visited) {
  const place = places.find((item) => item.id === id);
  if (!place) return;
  if (visited) {
    visitedIds.add(id);
    place.status = "visited";
  } else {
    visitedIds.delete(id);
    place.status = place.baseStatus === "visited" ? "want" : place.baseStatus;
  }
  localStorage.setItem(VISITED_KEY, JSON.stringify([...visitedIds]));
  shouldFitMap = false;
  render();
}

// How each region chip frames the map when focused. Hangzhou fits the city
// cluster; Cambridge stays close-in instead of fitting every outlying UK trip.
const regionFocus = {
  china: { filter: (place) => place.city.startsWith("Hangzhou") },
  uk: { view: { center: [52.205, 0.12], zoom: 11 } },
  germany: { view: { center: [49.9, 8.0], zoom: 7 } }
};

const placeList = document.querySelector("#placeList");
const detailPanel = document.querySelector("#detailPanel");
const searchInput = document.querySelector("#searchInput");
const totalCount = document.querySelector("#totalCount");
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

// Cambridge anchor for the "Focused" scope.
const CAMBRIDGE_CENTER = [52.205, 0.12];
const FOCUS_RADIUS_MILES = 30;
const FOCUS_ALWAYS = new Set(["stonehenge", "netley-abbey", "thetford-priory"]);

function milesBetween([lat1, lng1], [lat2, lng2]) {
  const toRad = (deg) => (deg * Math.PI) / 180;
  const earthMiles = 3958.8;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * earthMiles * Math.asin(Math.sqrt(a));
}

// Focused = places I know: Zhejiang, the Europe set, anything within
// 30 miles of Cambridge, plus a couple of explicit keepers.
function isFocused(place) {
  if (place.region === "china" || place.region === "germany") return true;
  if (FOCUS_ALWAYS.has(place.id)) return true;
  return milesBetween(place.coords, CAMBRIDGE_CENTER) <= FOCUS_RADIUS_MILES;
}

function filteredPlaces() {
  const term = state.search.trim().toLowerCase();
  return places.filter((place) => {
    const matchesStatus = state.status === "all" || place.status === state.status;
    const matchesCategory = state.category === "all" || place.category === state.category;
    let matchesFocus = true;
    if (state.focus === "focused") matchesFocus = isFocused(place);
    else if (state.focus === "visited") matchesFocus = place.status === "visited";
    const haystack = [place.name, place.english, place.city, place.tags.join(" ")]
      .join(" ")
      .toLowerCase();
    return matchesStatus && matchesCategory && matchesFocus && haystack.includes(term);
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
        <p class="card-meta">${formatLocation(place)}</p>
      </span>
    `;

    placeList.appendChild(card);
  });
}

function modelMarkup(place, size = "marker") {
  if (place.asset) {
    return `<img class="place-asset place-asset-${size} place-asset-${place.id}" src="${place.asset}" alt="" />`;
  }

  // Places flagged as placeholders show a neutral map pin until bespoke art exists.
  if (place.placeholder) {
    return `
      <svg class="place-model place-model-${size}" viewBox="0 0 96 96" aria-hidden="true">
        <g class="model-shadow"><ellipse cx="48" cy="84" rx="14" ry="4" /></g>
        <path class="model-roof slate" d="M48 22 C35 22 26 32 26 45 C26 61 48 80 48 80 C48 80 70 61 70 45 C70 32 61 22 48 22 Z" />
        <circle class="model-wall pale" cx="48" cy="44" r="9" />
      </svg>
    `;
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
  if (place.region === "germany") {
    return place.city.replace(/,\s*Germany$/i, "");
  }
  return cityZh[place.city] || place.city;
}

function formatCoord([lat, lng]) {
  const ns = lat >= 0 ? "N" : "S";
  const ew = lng >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(2)}°${ns}&nbsp;&nbsp;·&nbsp;&nbsp;${Math.abs(lng).toFixed(2)}°${ew}`;
}

const custodianLabels = {
  "english-heritage": "English Heritage",
  "national-trust": "National Trust"
};

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

  const isVisited = activePlace.status === "visited";
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
        ${activePlace.custodian ? `<span class="custodian-badge ${activePlace.custodian}">${custodianLabels[activePlace.custodian]}</span>` : ""}
      </div>
      <div class="detail-foot">
        <button class="visit-toggle ${isVisited ? "is-visited" : ""}" type="button" data-visit-toggle aria-pressed="${isVisited}">
          <span class="visit-check" aria-hidden="true">${isVisited ? "✓" : ""}</span>
          ${isVisited ? "Visited" : "Mark as visited"}
        </button>
        <div class="detail-rule">${compassMark}</div>
        <p class="detail-coord">${formatCoord(activePlace.coords)}</p>
      </div>
    </div>
  `;

  const visitToggle = detailPanel.querySelector("[data-visit-toggle]");
  if (visitToggle) {
    visitToggle.addEventListener("click", () => {
      setVisited(activePlace.id, activePlace.status !== "visited");
    });
  }
}

function renderStats() {
  totalCount.textContent = places.length;
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
wireControls("[data-focus]", "focus", "active");

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
