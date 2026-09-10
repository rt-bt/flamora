// =============================================================================
// FLAMORA — Visual Buffet Menu with Rich Food Photography
// =============================================================================

export type VisualBuffetItem = {
  id: string;
  name: string;
  hindiName?: string;
  category: "starters" | "mains" | "chaat" | "desserts";
  categoryLabel: string;
  isVeg: boolean;
  tag: string;
  image: string;
  marinade: string;
  servedWith: string;
  isLiveTableItem: boolean;
};

export const visualBuffetDishes: VisualBuffetItem[] = [
  // 1. LIVE STARTERS (Table Skewers)
  {
    id: "s1",
    name: "Bhatti Da Murgh Tikka",
    hindiName: "भट्टी दा मुर्ग टिक्का",
    category: "starters",
    categoryLabel: "Live Table Skewers",
    isVeg: false,
    tag: "🔥 Sizzling on Table",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=700&q=80",
    marinade: "24-hr hung curd, mustard oil & crushed black cardamom",
    servedWith: "Served with Mint Chutney & Basting Butter",
    isLiveTableItem: true,
  },
  {
    id: "s2",
    name: "Peri-Peri Smoked Paneer Tikka",
    hindiName: "पेरी-पेरी पनीर टिक्का",
    category: "starters",
    categoryLabel: "Live Table Skewers",
    isVeg: true,
    tag: "🔥 Sizzling on Table",
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=700&q=80",
    marinade: "Fresh malai paneer with bird's eye chili & kasuri methi",
    servedWith: "Served with Garlic Mayo & Masala Onions",
    isLiveTableItem: true,
  },
  {
    id: "s3",
    name: "Konkan Butter Garlic Prawns",
    hindiName: "बटर गार्लिक प्रॉन्स",
    category: "starters",
    categoryLabel: "Live Table Skewers",
    isVeg: false,
    tag: "🦞 Ocean Special",
    image: "https://images.unsplash.com/photo-1559742811-822873691df8?w=700&q=80",
    marinade: "Jumbo prawns in roasted garlic, kokum & coastal spices",
    servedWith: "Served with Lemon Wedges & Tartar Dip",
    isLiveTableItem: true,
  },
  {
    id: "s4",
    name: "Crispy Cajun Spicy Potatoes",
    hindiName: "क्रिस्पी काजुन पोटैटो",
    category: "starters",
    categoryLabel: "Live Table Skewers",
    isVeg: true,
    tag: "⭐ All-Time Bestseller",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=700&q=80",
    marinade: "Golden crispy crushed baby potatoes in creamy cajun dust",
    servedWith: "Served with Sweet Chilli & Scallion Glaze",
    isLiveTableItem: true,
  },
  {
    id: "s5",
    name: "Peshawari Mutton Seekh Kebab",
    hindiName: "पेशावरी मटन सीख",
    category: "starters",
    categoryLabel: "Live Table Skewers",
    isVeg: false,
    tag: "👑 Royal Recipe",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=700&q=80",
    marinade: "Hand-pounded lamb with shahi jeera, mace & saffron ghee",
    servedWith: "Served with Lachha Pyaz & Pudina Chutney",
    isLiveTableItem: true,
  },
  {
    id: "s6",
    name: "Charred Honey Cinnamon Pineapple",
    hindiName: "हनी सिनामन पाइनएप्पल",
    category: "starters",
    categoryLabel: "Live Table Skewers",
    isVeg: true,
    tag: "🍍 Palate Cleanser",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=700&q=80",
    marinade: "Organic pineapple caramelized with wild honey & Ceylon cinnamon",
    servedWith: "Served warm straight from table skewers",
    isLiveTableItem: true,
  },

  // 2. MAIN COURSE (Grand Buffet)
  {
    id: "m1",
    name: "Old Delhi Murgh Makhani",
    hindiName: "पुरानी दिल्ली मुर्ग मखनी",
    category: "mains",
    categoryLabel: "Royal Curries & Biryani",
    isVeg: false,
    tag: "🍲 1950s Classic Gravy",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=700&q=80",
    marinade: "Tandoori chicken pulled into slow-reduced buttery tomato sauce",
    servedWith: "Pairs with Chur-Chur Naan & Jeera Rice",
    isLiveTableItem: false,
  },
  {
    id: "m2",
    name: "Slow-Simmered Dal Flamora",
    hindiName: "दाल फ़्लामोरा (16-घंटे दम)",
    category: "mains",
    categoryLabel: "Royal Curries & Biryani",
    isVeg: true,
    tag: "⏳ 16-Hour Charcoal Cooked",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700&q=80",
    marinade: "Whole black urad simmered overnight with farm churned white butter",
    servedWith: "Garnished with ginger juliennes & fresh cream",
    isLiveTableItem: false,
  },
  {
    id: "m3",
    name: "Hyderabadi Kachhi Dum Gosht Biryani",
    hindiName: "कच्ची दम गोश्त बिरयानी",
    category: "mains",
    categoryLabel: "Royal Curries & Biryani",
    isVeg: false,
    tag: "🥘 Sealed Dum Handi",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=700&q=80",
    marinade: "Aged long grain basmati rice, tender mutton, saffron & brown onions",
    servedWith: "Served with Mirchi Ka Salan & Burani Raita",
    isLiveTableItem: false,
  },
  {
    id: "m4",
    name: "Paneer Lababdar Handi",
    hindiName: "पनीर लबाबदार हांडी",
    category: "mains",
    categoryLabel: "Royal Curries & Biryani",
    isVeg: true,
    tag: "🧀 Rich Malai Gravy",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=700&q=80",
    marinade: "Cottage cheese cubes & grated paneer in rich cashew-tomato gravy",
    servedWith: "Pairs with Garlic Butter Naan",
    isLiveTableItem: false,
  },

  // 3. LIVE CHAAT & STREET COUNTERS
  {
    id: "c1",
    name: "Flamora 5-Pani Puchka Station",
    hindiName: "5-पानी गोलगप्पा स्टेशन",
    category: "chaat",
    categoryLabel: "Live Street Counters",
    isVeg: true,
    tag: "🥟 Unlimited Rounds",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&q=80",
    marinade: "Hing, Pudina, Teekha, Meetha & Khatta handmade waters",
    servedWith: "Crushed potato sprout filling & boondi",
    isLiveTableItem: false,
  },
  {
    id: "c2",
    name: "Delhi Dahi Papdi Chaat",
    hindiName: "दही पापड़ी चाट",
    category: "chaat",
    categoryLabel: "Live Street Counters",
    isVeg: true,
    tag: "🥣 Made to Order",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=700&q=80",
    marinade: "Crispy wafers with thick sweet curd, saunth, pomegranate & nylon sev",
    servedWith: "Freshly prepared at live chaat counter",
    isLiveTableItem: false,
  },

  // 4. DESSERT BAR & KULFI
  {
    id: "d1",
    name: "Handcrafted Matka Kulfi Bar",
    hindiName: "मटका कुल्फी बार",
    category: "desserts",
    categoryLabel: "Kulfi & Desserts",
    isVeg: true,
    tag: "🍨 Dip & Sprinkle Station",
    image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=700&q=80",
    marinade: "Kesar Pista, Malai & Paan kulfi dipped in warm chocolate or rabri",
    servedWith: "Topped with roasted almonds & pistachio flakes",
    isLiveTableItem: false,
  },
  {
    id: "d2",
    name: "Angoori Jamun with Chilled Shahi Rabri",
    hindiName: "अंगूरी जामुन संग शाही रबड़ी",
    category: "desserts",
    categoryLabel: "Kulfi & Desserts",
    isVeg: true,
    tag: "🔥 Hot & Cold Sensation",
    image: "https://images.unsplash.com/photo-1589119908995-c6837fa14d48?w=700&q=80",
    marinade: "Hot khoya gulab jamuns floating over slow-condensed cardamom rabri",
    servedWith: "Unlimited dessert counter bowl",
    isLiveTableItem: false,
  },
];
