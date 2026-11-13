export interface ItemVariant {
  id: string;
  name: string; // e.g. "1 Pc", "2 Pc", "4 Pc", "6 Pc"
  portion: string;
  price: number;
  originalPrice?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: "Grills" | "Fried" | "Combos" | "Sides" | "Veg" | "Drinks";
  price: number;
  originalPrice?: number;
  isVeg: boolean;
  isBestseller?: boolean;
  spiceLevel: 1 | 2 | 3; // 1: Mild, 2: Medium, 3: Hot / Fiery
  description: string;
  portion: string;
  image: string;
  tags?: string[];
  variants?: ItemVariant[];
}

export interface ComboDeal {
  id: string;
  title: string;
  comboType: "single" | "family";
  tagline: string;
  price: number;
  originalPrice: number;
  savings: string;
  badge?: string;
  items: string[];
  image: string;
  isVeg: boolean;
  serves: string;
}

export const menuCategories = [
  { id: "all", name: "All Items" },
  { id: "Grills", name: "Grill (Smoky)" },
  { id: "Fried", name: "Fried Chicken" },
  { id: "Combos", name: "Combos & Feasts" },
  { id: "Sides", name: "Sides & Dips" },
  { id: "Veg", name: "Pure Veg" },
  { id: "Drinks", name: "Chilled Drinks" },
] as const;

export const menuItems: MenuItem[] = [
  // =========================================================================
  // 1. GRILL (SMOKY. JUICY. TENDER.)
  // =========================================================================
  {
    id: "whole-grilled-chicken",
    name: "Whole Grilled Chicken",
    category: "Grills",
    price: 499,
    originalPrice: 569,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2,
    description: "Full tender farm-fresh chicken marinated in Flamora 16-spice secret blend, slow flame-roasted on open live charcoal until blistered and succulent. Served with mint chutney and laccha onions.",
    portion: "Whole Chicken · Serves 3-4",
    image: "/images/whole-grilled-chicken.jpg",
    tags: ["Chef Special", "100% Charcoal Roasted"],
  },
  {
    id: "chicken-leg-grill",
    name: "Chicken Leg (Grill / Fry)",
    category: "Grills",
    price: 129,
    originalPrice: 149,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2,
    description: "Plump quarter chicken leg deep-scored and infused with Kashmiri red chili, garlic, and spiced yogurt. Prepared to your choice: live charcoal grilled or golden crispy fried.",
    portion: "1 Whole Leg Piece · Serves 1",
    image: "/images/flamora-chicken-leg.jpg",
    tags: ["Juicy", "Signature Cut"],
  },
  {
    id: "chicken-tikka-grill",
    name: "Chicken Tikka (6 Pc)",
    category: "Grills",
    price: 199,
    originalPrice: 229,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2,
    description: "Tender boneless chicken thigh cubes steeped overnight in hung curd, mustard oil, and roasted cumin, char-blistered over fiery embers for that authentic smoky bite.",
    portion: "6 Boneless Pieces · Serves 1-2",
    image: "/images/flamora-chicken-tikka.jpg",
    tags: ["Bestseller", "Boneless"],
  },
  {
    id: "chicken-seekh-kebab",
    name: "Chicken Seekh Kebab (4 Pc)",
    category: "Grills",
    price: 169,
    originalPrice: 199,
    isVeg: false,
    spiceLevel: 2,
    description: "Delicately minced chicken kneaded with fresh mint, chopped coriander, roasted spices, and ginger slivers, roasted on seekh rods over red-hot coals.",
    portion: "4 Long Skewers · Serves 1-2",
    image: "/images/flamora-seekh-kebab.jpg",
    tags: ["Melt in Mouth", "Charcoal Smoked"],
  },
  {
    id: "paneer-grill",
    name: "Paneer Grill (6 Pc)",
    category: "Grills",
    price: 179,
    originalPrice: 209,
    isVeg: true,
    isBestseller: true,
    spiceLevel: 2,
    description: "Thick artisanal malai paneer cubes tossed in ajwain, tandoori marinade, and grilled over charcoal alongside crunchy bell peppers and sweet onions.",
    portion: "6 Thick Malai Cubes · Serves 1-2",
    image: "/images/paneer-tikka.jpg",
    tags: ["Pure Veg", "Tandoori Special"],
  },

  // =========================================================================
  // 2. FRIED CHICKEN (CRISPY. JUICY. IRRESISTIBLE.)
  // =========================================================================
  {
    id: "crispy-chicken",
    name: "Crispy Chicken",
    category: "Fried",
    price: 79,
    originalPrice: 99,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 1,
    description: "Golden crackling crispy fried chicken double-breaded in Flamora secret herbs & spice flour. Crunchy on the outside, juicy on the inside. Select your piece count below.",
    portion: "1 Large Piece · Serves 1",
    image: "/images/flamora-crispy-chicken.jpg",
    tags: ["Bestseller", "Golden Crunch", "Custom Pieces"],
    variants: [
      {
        id: "crispy-chicken-1pc",
        name: "1 Pc",
        portion: "1 Large Piece · Serves 1",
        price: 79,
        originalPrice: 99,
      },
      {
        id: "crispy-chicken-2pc",
        name: "2 Pc",
        portion: "2 Pieces · Serves 1",
        price: 149,
        originalPrice: 179,
      },
      {
        id: "crispy-chicken-4pc",
        name: "4 Pc",
        portion: "4 Pieces · Serves 2",
        price: 279,
        originalPrice: 329,
      },
      {
        id: "crispy-chicken-6pc",
        name: "6 Pc",
        portion: "6 Pieces · Serves 2-3 Party Bucket",
        price: 399,
        originalPrice: 469,
      },
    ],
  },

  // =========================================================================
  // 3. COMBOS (SINGLE & FAMILY COMBOS)
  // =========================================================================
  {
    id: "flamora-solo",
    name: "Flamora Solo Combo",
    category: "Combos",
    price: 179,
    originalPrice: 219,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 1,
    description: "2 Pc Crispy Fried Chicken + Regular French Fries + Signature Garlic Mayo Dip.",
    portion: "Combo for 1 Person",
    image: "/images/flamora-solo-combo.jpg",
    tags: ["Single Combo", "Value Pick"],
  },
  {
    id: "leg-combo",
    name: "Leg Combo",
    category: "Combos",
    price: 179,
    originalPrice: 229,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2,
    description: "1 Grilled or Fried Chicken Leg + Crispy French Fries + Signature Dip + Chilled Drink.",
    portion: "Combo for 1 Person",
    image: "/images/flamora-leg-combo.jpg",
    tags: ["Single Combo", "Best Value"],
  },
  {
    id: "tikka-combo",
    name: "Tikka Combo",
    category: "Combos",
    price: 249,
    originalPrice: 299,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2,
    description: "6 Pc Smoky Boneless Chicken Tikka + Crispy French Fries + Mint Dip + Chilled Drink.",
    portion: "Combo for 1-2 Persons",
    image: "/images/tikka-combo.jpg",
    tags: ["Single Combo", "Smoky Feast"],
  },
  {
    id: "seekh-combo",
    name: "Seekh Combo",
    category: "Combos",
    price: 219,
    originalPrice: 269,
    isVeg: false,
    spiceLevel: 2,
    description: "4 Pc Chicken Seekh Kebab + Crispy French Fries + Signature Dip + Chilled Drink.",
    portion: "Combo for 1-2 Persons",
    image: "/images/seekh-combo.jpg",
    tags: ["Single Combo", "Kebab Special"],
  },
  {
    id: "flamora-duo",
    name: "Flamora Duo Combo",
    category: "Combos",
    price: 399,
    originalPrice: 479,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 1,
    description: "4 Pc Crispy Chicken + Large Crispy Fries + 2 Signature Dips + 2 Chilled Soft Drinks.",
    portion: "Family Combo · Serves 2",
    image: "/images/flamora-duo-combo.jpg",
    tags: ["Family Combo", "Perfect for Two"],
  },
  {
    id: "flamora-family",
    name: "Flamora Family Combo",
    category: "Combos",
    price: 599,
    originalPrice: 729,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2,
    description: "6 Pc Golden Crispy Chicken + 2 Regular French Fries + 3 Signature Dips + 3 Chilled Drinks.",
    portion: "Family Combo · Serves 3-4",
    image: "/images/flamora-family-combo.jpg",
    tags: ["Family Combo", "Mega Gathering"],
  },
  {
    id: "flamora-signature",
    name: "Flamora Signature Combo",
    category: "Combos",
    price: 699,
    originalPrice: 849,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2,
    description: "½ Flame-Roasted Charcoal Chicken + 4 Pc Crispy Chicken + French Fries + 2 Dips + Fresh Green Salad.",
    portion: "Family Combo · Serves 3-4",
    image: "/images/flamora-signature-combo.jpg",
    tags: ["Family Combo", "Grill & Fry Best"],
  },
  {
    id: "big-feast",
    name: "Big Feast Combo",
    category: "Combos",
    price: 899,
    originalPrice: 1099,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2,
    description: "1 Whole Flame Grilled Chicken + 4 Pc Crispy Chicken + Large Fries + 4 Assorted Dips + Onion-Lemon Salad.",
    portion: "Family Combo · Serves 4-6",
    image: "/images/big-feast-combo.jpg",
    tags: ["Family Combo", "Ultimate King Feast"],
  },

  // =========================================================================
  // 4. SIDES (CRISPY & FRESH EXTRAS)
  // =========================================================================
  {
    id: "regular-fries",
    name: "Regular Fries",
    category: "Sides",
    price: 69,
    originalPrice: 89,
    isVeg: true,
    spiceLevel: 1,
    description: "Hot, crispy golden potato fries lightly seasoned with sea salt. Hand-cut and fried fresh to order.",
    portion: "1 Basket (150g)",
    image: "/images/regular-fries.jpg",
    tags: ["Crispy", "Veg Classic"],
  },
  {
    id: "peri-peri-fries",
    name: "Peri Peri Fries",
    category: "Sides",
    price: 89,
    originalPrice: 110,
    isVeg: true,
    isBestseller: true,
    spiceLevel: 2,
    description: "Crispy double-cooked potato fries vigorously shaken in our signature fiery African bird's eye chili seasoning.",
    portion: "1 Basket (150g)",
    image: "/images/peri-peri-fries.jpg",
    tags: ["Spicy", "Bestseller"],
  },
  {
    id: "coleslaw",
    name: "Coleslaw",
    category: "Sides",
    price: 59,
    originalPrice: 79,
    isVeg: true,
    spiceLevel: 1,
    description: "Crunchy shredded green cabbage and sweet carrots folded in our velvety, chilled house dressing.",
    portion: "1 Bowl (120g)",
    image: "/images/coleslaw.jpg",
    tags: ["Chilled", "Fresh"],
  },
  {
    id: "extra-dip",
    name: "Extra Dip (Garlic / Peri-Peri / Mint)",
    category: "Sides",
    price: 20,
    originalPrice: 30,
    isVeg: true,
    spiceLevel: 1,
    description: "Choose your favorite handcrafted accompaniment: Creamy Garlic Mayo, Fiery Peri-Peri Dip, or Tangy Mint Chutney.",
    portion: "1 Cup (45ml)",
    image: "/images/extra-dip.jpg",
    tags: ["House Made"],
  },
  {
    id: "onion-lemon",
    name: "Onion + Lemon Salad",
    category: "Sides",
    price: 30,
    originalPrice: 40,
    isVeg: true,
    spiceLevel: 1,
    description: "Freshly sliced crunchy laccha red onion rings served with spicy green chili and fresh juicy lemon wedges.",
    portion: "1 Salad Plate",
    image: "/images/onion-lemon.jpg",
    tags: ["Fresh Cut"],
  },

  // =========================================================================
  // 5. VEG (CHARCOAL GRILLED DELIGHTS)
  // =========================================================================
  {
    id: "paneer-pineapple-grill",
    name: "Paneer + Pineapple Grill (6 Pc)",
    category: "Veg",
    price: 199,
    originalPrice: 239,
    isVeg: true,
    isBestseller: true,
    spiceLevel: 1,
    description: "Sweet honey-glazed pineapple slices skewered alternately with spiced malai paneer cubes, flame-caramelized on live charcoal.",
    portion: "6 Pieces · Serves 1-2",
    image: "/images/veggie-fire.jpg",
    tags: ["Pure Veg", "Sweet & Smoky", "Unique"],
  },

  // =========================================================================
  // 6. DRINKS (ICE COLD BEVERAGES)
  // =========================================================================
  {
    id: "coke-drink",
    name: "Coke (250ml)",
    category: "Drinks",
    price: 40,
    isVeg: true,
    spiceLevel: 1,
    description: "Classic ice-cold Coca-Cola served chilled to wash down your fiery grills and crunchy fried chicken.",
    portion: "250ml Can / Bottle",
    image: "/images/coke-drink.jpg",
    tags: ["Chilled"],
  },
  {
    id: "pepsi-drink",
    name: "Pepsi (250ml)",
    category: "Drinks",
    price: 40,
    isVeg: true,
    spiceLevel: 1,
    description: "Refreshing, crisp Pepsi cola served ice-cold.",
    portion: "250ml Can / Bottle",
    image: "/images/pepsi-drink.jpg",
    tags: ["Chilled"],
  },
  {
    id: "sevenup-drink",
    name: "7 Up (250ml)",
    category: "Drinks",
    price: 40,
    isVeg: true,
    spiceLevel: 1,
    description: "Crisp and bubbly lemon-lime refreshing soda.",
    portion: "250ml Can / Bottle",
    image: "/images/sevenup-drink.jpg",
    tags: ["Refreshing"],
  },
  {
    id: "lemon-drink",
    name: "Lemon Drink (Special Shikanji)",
    category: "Drinks",
    price: 35,
    isVeg: true,
    isBestseller: true,
    spiceLevel: 1,
    description: "Freshly squeezed lemon cooler prepared with roasted cumin, black salt, and a sprig of fresh mint.",
    portion: "300ml Fresh Glass",
    image: "/images/lemon-drink.jpg",
    tags: ["House Made", "Bestseller"],
  },
  {
    id: "mineral-water",
    name: "Packaged Mineral Water",
    category: "Drinks",
    price: 20,
    isVeg: true,
    spiceLevel: 1,
    description: "Pure, chilled packaged drinking water bottle.",
    portion: "500ml Sealed Bottle",
    image: "/images/mineral-water.jpg",
    tags: ["Pure & Safe"],
  },
];

export const comboDeals: ComboDeal[] = [
  // --- SINGLE COMBOS ---
  {
    id: "flamora-solo",
    title: "Flamora Solo",
    comboType: "single",
    tagline: "Crunch in every bite at an unbeatable price",
    price: 179,
    originalPrice: 219,
    savings: "Save ₹40",
    badge: "SINGLE COMBO",
    items: [
      "2 Pc Crispy Fried Chicken",
      "Regular French Fries",
      "Signature Garlic Mayo Dip",
    ],
    image: "/images/flamora-solo-combo.jpg",
    isVeg: false,
    serves: "1 Person",
  },
  {
    id: "leg-combo",
    title: "Leg Combo",
    comboType: "single",
    tagline: "Your choice of Grilled or Crispy Chicken Leg",
    price: 179,
    originalPrice: 229,
    savings: "Save ₹50",
    badge: "BEST VALUE",
    items: [
      "1 Chicken Leg (Grilled or Fried)",
      "Crispy French Fries",
      "Signature Dip",
      "1 Chilled Soft Drink",
    ],
    image: "/images/flamora-leg-combo.jpg",
    isVeg: false,
    serves: "1 Person",
  },
  {
    id: "tikka-combo",
    title: "Tikka Combo",
    comboType: "single",
    tagline: "Smoky boneless tandoori chicken meal",
    price: 249,
    originalPrice: 299,
    savings: "Save ₹50",
    badge: "CHEF PICK",
    items: [
      "6 Pc Boneless Chicken Tikka",
      "Crispy French Fries",
      "Tandoori Mint Dip",
      "1 Chilled Soft Drink",
    ],
    image: "/images/tikka-combo.jpg",
    isVeg: false,
    serves: "1-2 Persons",
  },
  {
    id: "seekh-combo",
    title: "Seekh Combo",
    comboType: "single",
    tagline: "Charcoal roasted juicy chicken seekh feast",
    price: 219,
    originalPrice: 269,
    savings: "Save ₹50",
    badge: "POPULAR",
    items: [
      "4 Pc Chicken Seekh Kebab",
      "Crispy French Fries",
      "Signature Garlic Dip",
      "1 Chilled Soft Drink",
    ],
    image: "/images/seekh-combo.jpg",
    isVeg: false,
    serves: "1-2 Persons",
  },

  // --- FAMILY COMBOS ---
  {
    id: "flamora-duo",
    title: "Flamora Duo",
    comboType: "family",
    tagline: "The perfect shared feast for two",
    price: 399,
    originalPrice: 479,
    savings: "Save ₹80",
    badge: "FOR TWO",
    items: [
      "4 Pc Crispy Golden Chicken",
      "Large French Fries Basket",
      "2 Signature Dips",
      "2 Chilled Soft Drinks",
    ],
    image: "/images/flamora-duo-combo.jpg",
    isVeg: false,
    serves: "2 Persons",
  },
  {
    id: "flamora-family",
    title: "Flamora Family",
    comboType: "family",
    tagline: "Crispy gathering bucket for the whole family",
    price: 599,
    originalPrice: 729,
    savings: "Save ₹130",
    badge: "FAMILY PACK",
    items: [
      "6 Pc Crispy Fried Chicken",
      "2 Regular French Fries",
      "3 Assorted Dips",
      "3 Chilled Soft Drinks",
    ],
    image: "/images/flamora-family-combo.jpg",
    isVeg: false,
    serves: "3-4 Persons",
  },
  {
    id: "flamora-signature",
    title: "Flamora Signature",
    comboType: "family",
    tagline: "Best of both worlds: Smoky Charcoal Grill + Crispy Fry",
    price: 699,
    originalPrice: 849,
    savings: "Save ₹150",
    badge: "GRILL & FRY",
    items: [
      "½ Live Charcoal Grilled Chicken",
      "4 Pc Crispy Fried Chicken",
      "Crispy French Fries",
      "2 Signature Dips",
      "Fresh Salad & Onions",
    ],
    image: "/images/flamora-signature-combo.jpg",
    isVeg: false,
    serves: "3-4 Persons",
  },
  {
    id: "big-feast",
    title: "Big Feast",
    comboType: "family",
    tagline: "The ultimate king feast with whole grilled chicken",
    price: 899,
    originalPrice: 1099,
    savings: "Save ₹200",
    badge: "ULTIMATE FEAST",
    items: [
      "1 Whole Flame Grilled Chicken",
      "4 Pc Crispy Fried Chicken",
      "Large French Fries Basket",
      "4 Assorted Dips",
      "Fresh Onion & Lemon Salad",
    ],
    image: "/images/big-feast-combo.jpg",
    isVeg: false,
    serves: "4-6 Persons",
  },
];
