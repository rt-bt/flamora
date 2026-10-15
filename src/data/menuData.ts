export interface MenuItem {
  id: string;
  name: string;
  category: "Grills" | "Fried" | "Kebabs" | "Veg" | "Combos";
  price: number;
  originalPrice?: number;
  isVeg: boolean;
  isBestseller?: boolean;
  spiceLevel: 1 | 2 | 3; // 1: Mild, 2: Medium, 3: Hot / Spicy
  description: string;
  portion: string;
  image: string;
  tags?: string[];
}

export interface ComboDeal {
  id: string;
  title: string;
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
  { id: "Grills", name: "Flame Grills" },
  { id: "Fried", name: "Crispy Fried" },
  { id: "Kebabs", name: "Kebabs & Tikka" },
  { id: "Veg", name: "Veggie on Fire" },
  { id: "Combos", name: "Combos & Sharing" },
] as const;

export const menuItems: MenuItem[] = [
  // --- GRILLS ---
  {
    id: "chicken-tikka-grill",
    name: "Chicken Tikka Grill",
    category: "Grills",
    price: 149,
    originalPrice: 179,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2,
    description: "Boneless chicken cubes marinated in hung curd and tandoori spices, flame-grilled over glowing coals.",
    portion: "6 Pieces · Serves 1-2",
    image: "/images/chicken-tikka-grill.jpg",
    tags: ["Chef Special", "Smoky"],
  },
  {
    id: "chicken-leg-grill",
    name: "Chicken Leg Grill (Smoky Tandoori)",
    category: "Grills",
    price: 139,
    originalPrice: 159,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2,
    description: "Full chicken quarter leg scored deep and infused with Kashmiri red chili, garlic, and flame-blistered to juicy perfection.",
    portion: "1 Whole Leg Piece",
    image: "/images/chicken-leg-grill.jpg",
    tags: ["Juicy", "High Protein"],
  },
  {
    id: "peri-peri-flame-wings",
    name: "Peri-Peri Flame Wings",
    category: "Grills",
    price: 159,
    originalPrice: 189,
    isVeg: false,
    spiceLevel: 3,
    description: "Char-grilled wings tossed in our signature citrus bird's eye chili glaze. Tangy, fiery, and deeply smoky.",
    portion: "6 Whole Wings",
    image: "/images/crispy-chicken-wings.jpg",
    tags: ["Extra Fiery"],
  },
  {
    id: "flamora-half-grill-chicken",
    name: "Flamora Whole Charcoal Roast (Half)",
    category: "Grills",
    price: 249,
    originalPrice: 299,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2,
    description: "Slow flame-roasted half chicken with authentic live charcoal smoke, served with mint dip and pickled onions.",
    portion: "Half Chicken · Serves 2",
    image: "/images/flame-grills.jpg",
    tags: ["Signature Grill"],
  },

  // --- FRIED ---
  {
    id: "crispy-fried-chicken-bucket",
    name: "Golden Fried Chicken Strips",
    category: "Fried",
    price: 169,
    originalPrice: 199,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 1,
    description: "12-spice butter-milk brined chicken breast tenderloins fried golden and crunchy. Served with garlic dip.",
    portion: "5 Crunchy Strips",
    image: "/images/crispy-favourites.jpg",
    tags: ["Crunchy", "Kids Favourite"],
  },
  {
    id: "flamora-crispy-drumsticks",
    name: "Crispy Fiery Drumsticks",
    category: "Fried",
    price: 159,
    originalPrice: 189,
    isVeg: false,
    spiceLevel: 2,
    description: "Extra crunchy exterior with ultra-tender meat inside, dusted with Flamora secret spicy seasoning.",
    portion: "2 Large Drumsticks",
    image: "/images/crispy-chicken-wings.jpg",
    tags: ["Crispy"],
  },
  {
    id: "peri-peri-fries",
    name: "Flamora Masala Peri-Peri Fries",
    category: "Fried",
    price: 89,
    originalPrice: 110,
    isVeg: true,
    spiceLevel: 2,
    description: "Crispy double-cooked potato fries shaken vigorously in our house spicy herb peri-peri seasoning.",
    portion: "Regular (200g)",
    image: "/images/peri-peri-fries.jpg",
    tags: ["Vegetarian", "Crispy"],
  },
  {
    id: "grilled-chicken-burger",
    name: "Flamora Charcoal Fire Burger",
    category: "Fried",
    price: 129,
    originalPrice: 149,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2,
    description: "Flame-grilled chicken patty topped with melted cheese slice, caramelized onions, jalapeños, and smoky barbecue sauce in a toasted brioche bun.",
    portion: "1 Big Burger + Mini Fries",
    image: "/images/grilled-chicken-burger.jpg",
    tags: ["Best Value"],
  },

  // --- KEBABS ---
  {
    id: "mutton-seekh-kebab",
    name: "Mutton Seekh Kebab",
    category: "Kebabs",
    price: 179,
    originalPrice: 219,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2,
    description: "Minced tender mutton blended with fresh coriander, roasted cumin, and royal herbs skewered over glowing red coal.",
    portion: "4 Skewers · Serves 1-2",
    image: "/images/mutton-seekh-kebab.jpg",
    tags: ["Melt in Mouth", "Royal"],
  },
  {
    id: "chicken-reshmi-kebab",
    name: "Chicken Reshmi Malai Kebab",
    category: "Kebabs",
    price: 159,
    originalPrice: 189,
    isVeg: false,
    spiceLevel: 1,
    description: "Silky boneless chicken tenders steeped in cashew cream, green cardamom, and mild cheese, delicately grilled.",
    portion: "6 Pieces",
    image: "/images/kebabs-tikka.jpg",
    tags: ["Mild & Creamy"],
  },
  {
    id: "flamora-kebab-platter",
    name: "Mixed Kebab Sharing Platter",
    category: "Kebabs",
    price: 299,
    originalPrice: 359,
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2,
    description: "Assortment of Chicken Tikka, Mutton Seekh Kebab, and Reshmi Malai Kebab with mint chutney and rumali roti.",
    portion: "12 Pieces · Serves 2-3",
    image: "/images/flamora-special-platter.jpg",
    tags: ["Sharing Special"],
  },

  // --- VEG ---
  {
    id: "paneer-tikka",
    name: "Paneer Tikka Angara",
    category: "Veg",
    price: 129,
    originalPrice: 149,
    isVeg: true,
    isBestseller: true,
    spiceLevel: 2,
    description: "Fresh malai paneer cubes tossed in ajwain, mustard oil, and red chili marinade, grilled with crunchy bell peppers and onions.",
    portion: "6 Large Cubes",
    image: "/images/paneer-tikka.jpg",
    tags: ["Pure Veg", "Bestseller"],
  },
  {
    id: "grilled-pineapple-paneer",
    name: "Pineapple & Paneer Fire Skewers",
    category: "Veg",
    price: 139,
    originalPrice: 169,
    isVeg: true,
    spiceLevel: 1,
    description: "Caramelized honey-chili brushed sweet pineapple slices skewered with soft paneer and capsicum over charcoal.",
    portion: "4 Skewers",
    image: "/images/veggie-fire.jpg",
    tags: ["Sweet & Spicy", "Unique"],
  },
  {
    id: "flamora-veg-kebab-roll",
    name: "Smoky Veg Seekh Kebab Roll",
    category: "Veg",
    price: 99,
    originalPrice: 120,
    isVeg: true,
    spiceLevel: 2,
    description: "Handcrafted potato, corn, and green pea spiced kebabs wrapped in a hot flaky paratha with mint mayonnaise.",
    portion: "1 Jumbo Roll",
    image: "/images/veggie-fire.jpg",
    tags: ["Snack Value"],
  },
];

export const comboDeals: ComboDeal[] = [
  {
    id: "starter-combo-99",
    title: "The Flamora Quick Bite",
    tagline: "Crunch in every bite at an unbeatable price",
    price: 99,
    originalPrice: 140,
    savings: "Save ₹41",
    badge: "STARTER FROM ₹99",
    items: [
      "2 Pcs Crispy Chicken Drumsticks OR 1 Veg Seekh Roll",
      "Regular Peri-Peri Masala Fries",
      "Signature Mint Mayo Dip",
    ],
    image: "/images/combo-club.jpg",
    isVeg: false,
    serves: "1 Person",
  },
  {
    id: "flame-grill-box-199",
    title: "Flame Grill Box for One",
    tagline: "The ultimate solo smoky chicken feast",
    price: 199,
    originalPrice: 260,
    savings: "Save ₹61",
    badge: "BESTSELLER",
    items: [
      "1 Chicken Leg Grill (Smoky Tandoori)",
      "4 Pcs Chicken Tikka Boneless",
      "1 Rumali Roti + Mint Chutney & Onions",
      "Chilled Soft Beverage (250ml)",
    ],
    image: "/images/flame-grills.jpg",
    isVeg: false,
    serves: "1-2 Persons",
  },
  {
    id: "duo-flavour-feast-349",
    title: "Duo Grill & Fry Combo",
    tagline: "Best of both worlds: Smoky Grill + Golden Fry",
    price: 349,
    originalPrice: 460,
    savings: "Save ₹111",
    badge: "PERFECT FOR TWO",
    items: [
      "6 Pcs Flame Grilled Chicken Tikka",
      "4 Pcs Crispy Golden Fried Strips",
      "1 Large Peri-Peri Masala Fries",
      "2 Fresh Rumali Rotis",
      "2 Signature Dips + 2 Drinks",
    ],
    image: "/images/combo-club.jpg",
    isVeg: false,
    serves: "2 Persons",
  },
  {
    id: "mega-sharing-pack-599",
    title: "Flamora Mega Family Bucket",
    tagline: "Made for celebrations and family gatherings",
    price: 599,
    originalPrice: 780,
    savings: "Save ₹181",
    badge: "MAX SAVINGS",
    items: [
      "1 Half Flame-Roasted Charcoal Chicken",
      "4 Mutton Seekh Kebabs",
      "6 Golden Crispy Wings",
      "1 Loaded Cheese Peri-Peri Fries",
      "4 Rumali Rotis + 3 Dips",
    ],
    image: "/images/flamora-special-platter.jpg",
    isVeg: false,
    serves: "3-4 Persons",
  },
];
