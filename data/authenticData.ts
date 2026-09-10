// =============================================================================
// FLAMORA — Authentic Indian Live Grill & Buffet Data
// Real-world dishes, genuine pricing, actual restaurant perks & rituals
// =============================================================================

export type LiveGrillCourse = {
  id: string;
  category: "live-grills" | "main-course" | "live-chaat" | "dessert-bar";
  title: string;
  badge: string;
  items: {
    name: string;
    description: string;
    isVeg: boolean;
    spice: "Mild" | "Medium" | "Fiery";
    chefPick?: boolean;
    tag?: string;
  }[];
};

export const authenticBuffetCourses: LiveGrillCourse[] = [
  {
    id: "live-grills",
    category: "live-grills",
    title: "Table-Embedded Live Charcoal Grills",
    badge: "Unlimited Skewers on Table",
    items: [
      {
        name: "Bhatti Da Murgh Tangdi",
        description: "Chicken drumsticks steeped in hung curd, yellow mustard oil & crushed black cardamom, charred over coals.",
        isVeg: false,
        spice: "Medium",
        chefPick: true,
        tag: "Bestseller",
      },
      {
        name: "Peri-Peri Smoked Paneer Tikka",
        description: "Malai cottage cheese cubes infused with bird's eye chili, basted with herb butter on table skewers.",
        isVeg: true,
        spice: "Medium",
        chefPick: true,
        tag: "Must Try",
      },
      {
        name: "Konkan Coastal Butter Garlic Prawns",
        description: "Jumbo ocean prawns marinated in roasted garlic, Kokum extract & coastal spices.",
        isVeg: false,
        spice: "Medium",
        tag: "Seafood Special",
      },
      {
        name: "Crispy Cajun Spiced Potato Wedges",
        description: "Crispy golden potatoes tossed with garlic aioli, scallions & Flamora cajun dust.",
        isVeg: true,
        spice: "Mild",
        chefPick: true,
        tag: "Guest Favorite",
      },
      {
        name: "Peshawari Mutton Seekh Kebab",
        description: "Finely ground lamb spiced with mace, nutmeg & coriander, roasted to melt-in-mouth tenderness.",
        isVeg: false,
        spice: "Fiery",
        tag: "Classic",
      },
      {
        name: "Charred Cinnamon Honey Pineapple",
        description: "Fresh pineapple wheels caramelized with honey, Ceylon cinnamon & smoked paprika on the grill.",
        isVeg: true,
        spice: "Mild",
        tag: "Signature Palate Cleanser",
      },
      {
        name: "Tandoori Malai Soya Chaap",
        description: "Tender soya chaap bathed in cashew cream, green cardamom & white pepper marinade.",
        isVeg: true,
        spice: "Mild",
      },
      {
        name: "Amritsari Ajwaini Fish Tikka",
        description: "Flaky river sole fillets coated with carom seed batter and flame-roasted to golden crispness.",
        isVeg: false,
        spice: "Medium",
      },
    ],
  },
  {
    id: "main-course",
    category: "main-course",
    title: "The Grand Royal Buffet Spread",
    badge: "30+ Unlimited Dishes",
    items: [
      {
        name: "Slow-Simmered Dal Flamora",
        description: "Black urad lentils cooked overnight for 16 hours over charcoal embers with churned white butter.",
        isVeg: true,
        spice: "Mild",
        chefPick: true,
        tag: "16-Hr Charcoal Cooked",
      },
      {
        name: "Old Delhi Murgh Makhani",
        description: "Clay-oven roasted tandoori chicken simmered in a velvety sun-ripened tomato & cashew gravy.",
        isVeg: false,
        spice: "Mild",
        chefPick: true,
        tag: "Original Recipe",
      },
      {
        name: "Kashmiri Dum Nalli Gosht",
        description: "Slow-braised mutton shanks in a rich gravy infused with Kashmiri red chilies & dried ginger.",
        isVeg: false,
        spice: "Medium",
        tag: "Weekend Special",
      },
      {
        name: "Paneer Lababdar",
        description: "Soft paneer cubes & grated paneer tossed in an onion-tomato masala with kasuri methi.",
        isVeg: true,
        spice: "Medium",
      },
      {
        name: "Hyderabadi Kachhi Dum Gosht Biryani",
        description: "Long-grain aged basmati rice layered with marinated mutton, saffron milk, sealed with dough (dum).",
        isVeg: false,
        spice: "Medium",
        chefPick: true,
        tag: "Dum Handi",
      },
      {
        name: "Subz Nizami Handi Biryani",
        description: "Seasonal garden vegetables, fried onions, mint & royal basmati cooked on gentle charcoal heat.",
        isVeg: true,
        spice: "Mild",
      },
      {
        name: "Live Tandoor Bread Basket",
        description: "Unlimited hot Chur-Chur Naan, Garlic Butter Naan, Laccha Paratha & Missi Roti served directly on table.",
        isVeg: true,
        spice: "Mild",
        tag: "Baked to Order",
      },
    ],
  },
  {
    id: "live-chaat",
    category: "live-chaat",
    title: "Live Street Chaat & Wok Counters",
    badge: "Prepared Live to Your Taste",
    items: [
      {
        name: "Flamora 5-Pani Puchka / Golgappa Station",
        description: "Crispy puris filled with spiced potato-sprout mash, served with Hing, Pudina, Teekha, Meetha & Khatta pani.",
        isVeg: true,
        spice: "Fiery",
        chefPick: true,
        tag: "Unlimited Rounds",
      },
      {
        name: "Delhi Style Dahi Papdi Chaat",
        description: "Crunchy wheat wafers topped with sweetened curd, saunth chutney, spicy mint sauce & nylon sev.",
        isVeg: true,
        spice: "Mild",
      },
      {
        name: "Live Mongolian Stir-Fry Wok",
        description: "Select your own greens, noodles, sauces and chicken/paneer tossed live by our wok masters.",
        isVeg: true,
        spice: "Medium",
      },
      {
        name: "Kurkuri Bhindi & Crispy Corn Chaat",
        description: "Golden fried sweetcorn tossed with chopped onions, green chilies, lime juice and chaat masala.",
        isVeg: true,
        spice: "Medium",
      },
    ],
  },
  {
    id: "dessert-bar",
    category: "dessert-bar",
    title: "Kulfi Nation & Artisan Dessert Lounge",
    badge: "Unlimited Indulgence",
    items: [
      {
        name: "Handcrafted Matka Kulfi Bar",
        description: "Authentic Malai, Kesar Pista, Roasted Almond & Shahi Paan kulfi sticks dipped in warm chocolate or rabri.",
        isVeg: true,
        spice: "Mild",
        chefPick: true,
        tag: "Live Dip Counter",
      },
      {
        name: "Angoori Gulab Jamun with Chilled Shahi Rabri",
        description: "Mini khoya dumplings soaked in saffron syrup, served warm over a pool of thickened almond rabri.",
        isVeg: true,
        spice: "Mild",
        chefPick: true,
        tag: "Hot & Cold Combo",
      },
      {
        name: "Sizzling Dark Chocolate Walnut Brownie",
        description: "Dense Belgian chocolate brownie served sizzling with a scoop of Madagascar vanilla ice cream.",
        isVeg: true,
        spice: "Mild",
      },
      {
        name: "Moong Dal Halwa (Desi Ghee)",
        description: "Slow-roasted yellow lentils cooked in pure cow ghee, garnished with toasted slivered pistachios.",
        isVeg: true,
        spice: "Mild",
        tag: "Traditional",
      },
      {
        name: "Flamora Fresh Fruit & Sundae Bar",
        description: "Choice of 6 gourmet gelato flavors, chocolate fountain, rainbow sprinkles, crushed nuts & fruit compotes.",
        isVeg: true,
        spice: "Mild",
      },
    ],
  },
];

export const flamoraRitualSteps = [
  {
    num: "01",
    title: "The Live Table Charcoal Grill",
    desc: "When you sit down, our servers load sizzling live charcoal briquettes into your embedded table grill. Skewers arrive smoking hot within minutes.",
    icon: "🔥",
  },
  {
    num: "02",
    title: "Unlimited Starters & Marinade Brushes",
    desc: "Enjoy non-stop skewers of tandoori meats, paneer, and mushrooms. Use table butter brushes and house dips (Mint Chutney, Garlic Mayo, Sweet Chilli) to customize.",
    icon: "🍢",
  },
  {
    num: "03",
    title: "The Famous Table Flag Ritual 🚩",
    desc: "Keep the Green Flag up for endless skewers! Once you're ready for the royal Main Course & Biryanis, simply flip the flag down.",
    icon: "🚩",
  },
  {
    num: "04",
    title: "The Grand Royal Buffet & Kulfi Bar",
    desc: "Walk up to 30+ regional curries, live tandoor bread baskets, fresh dum biryani handis, and finish at our signature dip-and-sprinkle Kulfi Bar.",
    icon: "🍨",
  },
];

export const authenticOutletLocations = [
  {
    id: "mumbai-bandra",
    city: "Mumbai",
    area: "Bandra West",
    name: "Flamora Live Grill — Bandra",
    address: "Level 2, Above Starbucks, Linking Road, Bandra West, Mumbai 400050",
    landmark: "Near Waterfield Road Junction",
    phone: "022-6899 4400 / +91 98200 11223",
    timing: "Lunch: 12:00 PM – 3:30 PM | Dinner: 6:30 PM – 11:30 PM",
    liveStatus: "🟢 Tables Available (10 min wait)",
    vegPriceWeekday: 699,
    nonVegPriceWeekday: 799,
    valet: true,
    bar: true,
  },
  {
    id: "delhi-cp",
    city: "Delhi NCR",
    area: "Connaught Place",
    name: "Flamora Live Grill — Connaught Place",
    address: "Block M-42, Outer Circle, Near Shankar Market, Connaught Place, New Delhi 110001",
    landmark: "Opposite Rajiv Chowk Metro Gate 6",
    phone: "011-4788 2200 / +91 98110 44556",
    timing: "Lunch: 12:00 PM – 3:30 PM | Dinner: 6:30 PM – 11:30 PM",
    liveStatus: "🟢 Fast Filling Tonight",
    vegPriceWeekday: 699,
    nonVegPriceWeekday: 799,
    valet: true,
    bar: true,
  },
  {
    id: "bangalore-indiranagar",
    city: "Bangalore",
    area: "Indiranagar",
    name: "Flamora Live Grill & Rooftop — Indiranagar",
    address: "78, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru 560038",
    landmark: "Near Domlur Flyover Junction",
    phone: "080-6922 1100 / +91 98450 77889",
    timing: "Lunch: 12:00 PM – 3:30 PM | Dinner: 6:30 PM – 11:30 PM",
    liveStatus: "🟢 Rooftop & AC Dining Open",
    vegPriceWeekday: 749,
    nonVegPriceWeekday: 849,
    valet: true,
    bar: true,
  },
  {
    id: "hyderabad-jubilee",
    city: "Hyderabad",
    area: "Jubilee Hills",
    name: "Flamora Live Grill & Biryani Lounge — Jubilee Hills",
    address: "Plot 22, Road No. 36, Beside Peddamma Temple Metro, Jubilee Hills, Hyderabad 500033",
    landmark: "Opposite Croma Electronics",
    phone: "040-6644 9900 / +91 98850 33221",
    timing: "Lunch: 12:00 PM – 3:30 PM | Dinner: 6:30 PM – 11:30 PM",
    liveStatus: "🟢 Family Banquet Open",
    vegPriceWeekday: 699,
    nonVegPriceWeekday: 799,
    valet: true,
    bar: false,
  },
  {
    id: "pune-koregaon",
    city: "Pune",
    area: "Koregaon Park",
    name: "Flamora Live Grill Garden — Koregaon Park",
    address: "Lane 5, North Main Road, Next to German Bakery, Koregaon Park, Pune 411001",
    landmark: "Near Osho Garden",
    phone: "020-6711 3300 / +91 98230 66778",
    timing: "Lunch: 12:00 PM – 3:30 PM | Dinner: 6:30 PM – 11:30 PM",
    liveStatus: "🟢 Garden Seating Open",
    vegPriceWeekday: 699,
    nonVegPriceWeekday: 799,
    valet: true,
    bar: true,
  },
];
