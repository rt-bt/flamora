// =============================================================================
// FLAMORA — Menu Data
// =============================================================================
// Update this file to change menu items displayed on the website.
// Each category has a name, optional description, and array of items.
// Veg/Non-Veg indicators: "veg" | "non-veg" | "egg"
// Spice levels: "mild" | "medium" | "spicy" | "extra-spicy" | undefined
// =============================================================================

export type MenuItem = {
  name: string;
  description: string;
  price: number;
  type: "veg" | "non-veg" | "egg";
  spicy?: "mild" | "medium" | "spicy" | "extra-spicy";
  isSignature?: boolean;
  image?: string;
};

export type MenuCategory = {
  name: string;
  slug: string;
  description?: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    name: "Live Grill",
    slug: "live-grill",
    description:
      "Flame-kissed perfection, grilled right at your table. Watch our chefs bring out the smoky, charred flavors you crave.",
    items: [
      {
        name: "Tandoori Chicken",
        description: "Marinated overnight in yogurt and aromatic spices, grilled in a clay oven.",
        price: 449,
        type: "non-veg",
        spicy: "medium",
        isSignature: true,
      },
      {
        name: "Seekh Kebab",
        description: "Minced lamb blended with herbs and spices, shaped on skewers and char-grilled.",
        price: 499,
        type: "non-veg",
        spicy: "medium",
      },
      {
        name: "Paneer Tikka",
        description: "Cubes of cottage cheese marinated in spiced yogurt, grilled to perfection.",
        price: 399,
        type: "veg",
        spicy: "mild",
        isSignature: true,
      },
      {
        name: "Fish Tikka",
        description: "Fresh fish fillets marinated in tangy spices and grilled until flaky.",
        price: 549,
        type: "non-veg",
        spicy: "medium",
      },
      {
        name: "Mushroom Galouti",
        description: "Finely minced mushrooms with aromatic spices, grilled on a flat stone.",
        price: 379,
        type: "veg",
        spicy: "mild",
      },
      {
        name: "Chicken Malai Tikka",
        description: "Cream-marinated chicken tikka with a mild, buttery flavor.",
        price: 479,
        type: "non-veg",
        spicy: "mild",
        isSignature: true,
      },
    ],
  },
  {
    name: "Starters",
    slug: "starters",
    description: "Bold flavors to ignite your appetite.",
    items: [
      {
        name: "Crispy Corn",
        description: "Golden-fried corn kernels tossed with chili, garlic and curry leaves.",
        price: 299,
        type: "veg",
        spicy: "spicy",
      },
      {
        name: "Chicken Lollipop",
        description: "Crunchy fried drumsticks coated in a fiery chili glaze.",
        price: 399,
        type: "non-veg",
        spicy: "spicy",
      },
      {
        name: "Hara Bhara Kebab",
        description: "Spinach, pea and potato patties with mint chutney.",
        price: 329,
        type: "veg",
        spicy: "mild",
      },
      {
        name: "Prawn Koliwada",
        description: "Crispy battered prawns seasoned with coastal spices.",
        price: 549,
        type: "non-veg",
        spicy: "medium",
      },
      {
        name: "Dahi Ke Kebab",
        description: "Hung curd patties with cashews and raisins, shallow-fried until golden.",
        price: 349,
        type: "veg",
        spicy: "mild",
      },
      {
        name: "Chicken 65",
        description: "Deep-fried spicy chicken bites, a South Indian classic.",
        price: 429,
        type: "non-veg",
        spicy: "extra-spicy",
      },
    ],
  },
  {
    name: "Vegetarian",
    slug: "vegetarian",
    description: "Garden-fresh ingredients, cooked with love.",
    items: [
      {
        name: "Paneer Butter Masala",
        description: "Cottage cheese cubes in a rich, creamy tomato gravy.",
        price: 379,
        type: "veg",
        spicy: "mild",
        isSignature: true,
      },
      {
        name: "Dal Makhani",
        description: "Black lentils slow-cooked overnight with butter and cream.",
        price: 329,
        type: "veg",
        spicy: "mild",
        isSignature: true,
      },
      {
        name: "Malai Kofta",
        description: "Stuffed paneer and potato dumplings in a cashew cream sauce.",
        price: 369,
        type: "veg",
        spicy: "mild",
      },
      {
        name: "Baingan Bharta",
        description: "Smoky roasted eggplant mash with onions, tomatoes and spices.",
        price: 319,
        type: "veg",
        spicy: "medium",
      },
      {
        name: "Palak Paneer",
        description: "Cottage cheese cubes in a smooth, spiced spinach purée.",
        price: 359,
        type: "veg",
        spicy: "mild",
      },
    ],
  },
  {
    name: "Non-Vegetarian",
    slug: "non-vegetarian",
    description: "Rich, aromatic curries cooked to perfection.",
    items: [
      {
        name: "Butter Chicken",
        description: "Tender chicken in a velvety tomato-butter sauce. The ultimate comfort dish.",
        price: 449,
        type: "non-veg",
        spicy: "mild",
        isSignature: true,
      },
      {
        name: "Lamb Rogan Josh",
        description: "Slow-braised lamb in a Kashmiri red chili and yogurt sauce.",
        price: 549,
        type: "non-veg",
        spicy: "medium",
        isSignature: true,
      },
      {
        name: "Chicken Chettinad",
        description: "Fiery South Indian chicken curry with freshly ground spices.",
        price: 449,
        type: "non-veg",
        spicy: "extra-spicy",
      },
      {
        name: "Mutton Keema",
        description: "Minced mutton cooked with peas, onions and aromatic spices.",
        price: 499,
        type: "non-veg",
        spicy: "medium",
      },
      {
        name: "Fish Curry",
        description: "Fresh fish simmered in a coconut and tamarind gravy.",
        price: 479,
        type: "non-veg",
        spicy: "medium",
      },
    ],
  },
  {
    name: "Main Course",
    slug: "main-course",
    description: "Hearty dishes that bring everyone together.",
    items: [
      {
        name: "Kadai Paneer",
        description: "Paneer cooked with bell peppers in a kadai-spiced tomato gravy.",
        price: 369,
        type: "veg",
        spicy: "medium",
      },
      {
        name: "Chicken Do Pyaza",
        description: "Chicken cooked with double the onions for a rich, layered flavor.",
        price: 429,
        type: "non-veg",
        spicy: "medium",
      },
      {
        name: "Mixed Vegetable Korma",
        description: "Seasonal vegetables in a mild, creamy cashew and coconut sauce.",
        price: 339,
        type: "veg",
        spicy: "mild",
      },
      {
        name: "Egg Curry",
        description: "Boiled eggs in a spiced onion-tomato masala.",
        price: 329,
        type: "egg",
        spicy: "medium",
      },
    ],
  },
  {
    name: "Breads",
    slug: "breads",
    description: "Freshly baked, straight from the tandoor.",
    items: [
      {
        name: "Butter Naan",
        description: "Soft leavened bread brushed with melted butter.",
        price: 79,
        type: "veg",
      },
      {
        name: "Garlic Naan",
        description: "Naan topped with fresh garlic and coriander.",
        price: 89,
        type: "veg",
      },
      {
        name: "Laccha Paratha",
        description: "Flaky, layered whole wheat bread with a crisp exterior.",
        price: 79,
        type: "veg",
      },
      {
        name: "Missi Roti",
        description: "Gram flour flatbread with onions and spices.",
        price: 69,
        type: "veg",
      },
      {
        name: "Cheese Naan",
        description: "Naan stuffed with melted cheese.",
        price: 109,
        type: "veg",
      },
    ],
  },
  {
    name: "Rice & Biryani",
    slug: "rice-biryani",
    description: "Fragrant, layered, and cooked with love.",
    items: [
      {
        name: "Hyderabadi Chicken Biryani",
        description: "Dum-cooked basmati rice layered with spiced chicken and saffron.",
        price: 449,
        type: "non-veg",
        spicy: "medium",
        isSignature: true,
      },
      {
        name: "Vegetable Biryani",
        description: "Aromatic basmati rice layered with seasonal vegetables and herbs.",
        price: 349,
        type: "veg",
        spicy: "mild",
      },
      {
        name: "Mutton Biryani",
        description: "Slow-cooked mutton with fragrant rice, sealed and dum-cooked.",
        price: 549,
        type: "non-veg",
        spicy: "medium",
      },
      {
        name: "Jeera Rice",
        description: "Basmati rice tempered with cumin seeds and ghee.",
        price: 199,
        type: "veg",
      },
      {
        name: "Egg Biryani",
        description: "Spiced basmati rice with boiled eggs and aromatic masala.",
        price: 349,
        type: "egg",
        spicy: "medium",
      },
    ],
  },
  {
    name: "Desserts",
    slug: "desserts",
    description: "The sweetest way to end your feast.",
    items: [
      {
        name: "Gulab Jamun",
        description: "Soft, golden milk dumplings soaked in rose-scented sugar syrup.",
        price: 199,
        type: "veg",
        isSignature: true,
      },
      {
        name: "Phirni",
        description: "Chilled rice pudding garnished with pistachios and saffron.",
        price: 179,
        type: "veg",
      },
      {
        name: "Kulfi Falooda",
        description: "Traditional Indian ice cream served with vermicelli and rose syrup.",
        price: 249,
        type: "veg",
        isSignature: true,
      },
      {
        name: "Jalebi with Rabri",
        description: "Crispy, syrup-soaked spirals served with thickened sweetened milk.",
        price: 229,
        type: "veg",
      },
      {
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
        price: 299,
        type: "veg",
      },
    ],
  },
  {
    name: "Beverages",
    slug: "beverages",
    description: "Refreshing accompaniments to your meal.",
    items: [
      {
        name: "Masala Chaas",
        description: "Spiced buttermilk with roasted cumin and fresh mint.",
        price: 129,
        type: "veg",
      },
      {
        name: "Mango Lassi",
        description: "Creamy yogurt blended with Alphonso mango pulp.",
        price: 179,
        type: "veg",
        isSignature: true,
      },
      {
        name: "Rose Sharbat",
        description: "Chilled rose petal drink with a hint of cardamom.",
        price: 149,
        type: "veg",
      },
      {
        name: "Fresh Lime Soda",
        description: "Freshly squeezed lime juice with soda water and a hint of salt.",
        price: 129,
        type: "veg",
      },
      {
        name: "Flamora Signature Mocktail",
        description: "A fiery blend of passion fruit, ginger, and chili. Our house special.",
        price: 249,
        type: "veg",
        spicy: "mild",
        isSignature: true,
      },
    ],
  },
];
