// =============================================================================
// FLAMORA — Buffet Pricing & Outlet Data
// Cities: Patna, Motihari, Muzaffarpur, Bettiah (Bihar)
// =============================================================================

export type MealTimeSlot = {
  session: "Lunch" | "Dinner";
  timing: string;
  vegPrice: number;
  nonVegPrice: number;
  kidsPrice: number;
};

export type DayPricing = {
  dayType: "Weekday (Mon-Fri)" | "Weekend (Sat-Sun)";
  slots: MealTimeSlot[];
};

export type OutletBuffetInfo = {
  outletId: string;
  city: string;
  outletName: string;
  address: string;
  phone: string;
  isLiveGrill: boolean;
  pricing: DayPricing[];
  specialHighlights: string[];
};

export const outletBuffetList: OutletBuffetInfo[] = [
  {
    outletId: "patna-fraser",
    city: "Patna",
    outletName: "Flamora — Fraser Road, Patna",
    address: "Shop No. 12, Fraser Road, Near Dak Bungalow Chowk, Patna, Bihar – 800001",
    phone: "+91 98350 11001",
    isLiveGrill: true,
    specialHighlights: ["Live Table Grill", "Matka Kulfi Counter", "Private Party Hall", "Free Valet Parking"],
    pricing: [
      {
        dayType: "Weekday (Mon-Fri)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 3:30 PM", vegPrice: 599, nonVegPrice: 699, kidsPrice: 349 },
          { session: "Dinner", timing: "6:30 PM – 11:00 PM", vegPrice: 699, nonVegPrice: 799, kidsPrice: 399 },
        ],
      },
      {
        dayType: "Weekend (Sat-Sun)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 4:00 PM", vegPrice: 749, nonVegPrice: 849, kidsPrice: 449 },
          { session: "Dinner", timing: "6:30 PM – 11:30 PM", vegPrice: 799, nonVegPrice: 899, kidsPrice: 499 },
        ],
      },
    ],
  },
  {
    outletId: "motihari-club-road",
    city: "Motihari",
    outletName: "Flamora — Club Road, Motihari",
    address: "Near Gandhi Smarak Bhawan, Club Road, Motihari, East Champaran, Bihar – 845401",
    phone: "+91 98350 22002",
    isLiveGrill: true,
    specialHighlights: ["Live Charcoal Grill", "Outdoor Seating", "Birthday Decoration", "Kids Zone"],
    pricing: [
      {
        dayType: "Weekday (Mon-Fri)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 3:30 PM", vegPrice: 549, nonVegPrice: 649, kidsPrice: 299 },
          { session: "Dinner", timing: "6:30 PM – 11:00 PM", vegPrice: 649, nonVegPrice: 749, kidsPrice: 349 },
        ],
      },
      {
        dayType: "Weekend (Sat-Sun)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 4:00 PM", vegPrice: 699, nonVegPrice: 799, kidsPrice: 399 },
          { session: "Dinner", timing: "6:30 PM – 11:30 PM", vegPrice: 749, nonVegPrice: 849, kidsPrice: 449 },
        ],
      },
    ],
  },
  {
    outletId: "muzaffarpur-brahmpura",
    city: "Muzaffarpur",
    outletName: "Flamora — Brahmpura, Muzaffarpur",
    address: "Plot No. 7, Brahmpura Main Road, Near Jubilee Hotel, Muzaffarpur, Bihar – 842001",
    phone: "+91 98350 33003",
    isLiveGrill: true,
    specialHighlights: ["Rooftop Dining", "Live Dessert Bar", "Group Party Packages", "Anniversary Decor"],
    pricing: [
      {
        dayType: "Weekday (Mon-Fri)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 3:30 PM", vegPrice: 549, nonVegPrice: 649, kidsPrice: 299 },
          { session: "Dinner", timing: "6:30 PM – 11:00 PM", vegPrice: 649, nonVegPrice: 749, kidsPrice: 349 },
        ],
      },
      {
        dayType: "Weekend (Sat-Sun)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 4:00 PM", vegPrice: 699, nonVegPrice: 799, kidsPrice: 399 },
          { session: "Dinner", timing: "6:30 PM – 11:30 PM", vegPrice: 749, nonVegPrice: 849, kidsPrice: 449 },
        ],
      },
    ],
  },
  {
    outletId: "bettiah-station-road",
    city: "Bettiah",
    outletName: "Flamora — Station Road, Bettiah",
    address: "Station Road, Near Old Collectorate, Bettiah, West Champaran, Bihar – 845438",
    phone: "+91 98350 44004",
    isLiveGrill: true,
    specialHighlights: ["Live Table Grill", "Corporate Dining", "Live Chaat Counter", "Home Delivery"],
    pricing: [
      {
        dayType: "Weekday (Mon-Fri)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 3:30 PM", vegPrice: 499, nonVegPrice: 599, kidsPrice: 279 },
          { session: "Dinner", timing: "6:30 PM – 11:00 PM", vegPrice: 599, nonVegPrice: 699, kidsPrice: 329 },
        ],
      },
      {
        dayType: "Weekend (Sat-Sun)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 4:00 PM", vegPrice: 649, nonVegPrice: 749, kidsPrice: 379 },
          { session: "Dinner", timing: "6:30 PM – 11:30 PM", vegPrice: 699, nonVegPrice: 799, kidsPrice: 429 },
        ],
      },
    ],
  },
];

export const buffetCourseHighlights = [
  {
    step: "01",
    title: "Unlimited Live Grills on Table",
    subtitle: "At Your Table",
    description: "Sizzling skewers of marinated meats, paneer, mushrooms & pineapple grilled right in front of you over embedded charcoal grills with secret marinades & dips.",
    badge: "Unlimited Starters",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=80",
    dishes: ["Tandoori Murgh Skewers", "Peri Peri Paneer Tikka", "Grilled Cajun Spiced Prawns", "Crispy Corn & Cajun Potatoes", "Bhatti Da Seekh Kebab", "Charred Cinnamon Pineapple"],
  },
  {
    step: "02",
    title: "The Grand Royal Buffet Spread",
    subtitle: "Main Course Extravaganza",
    description: "Indulge in over 30+ lavish regional & pan-Indian delicacies. From velvety Butter Chicken to Dum Biryanis, Dal Flamora & live bread baskets.",
    badge: "30+ Delicacies",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=700&q=80",
    dishes: ["Murgh Dum Biryani", "Slow-Cooked Dal Flamora", "Paneer Butter Masala", "Mutton Rogan Josh", "Subz Nizami Handi", "Assorted Butter & Garlic Naans"],
  },
  {
    step: "03",
    title: "Live Street Chaat & Wok Counters",
    subtitle: "Freshly Made Live",
    description: "Crispy street chaat, golgappas with 5 flavors of spicy waters, tossed Asian noodles, and chef's sizzler platters prepared fresh to your taste.",
    badge: "Chef's Special",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700&q=80",
    dishes: ["Flamora 5-Pani Puchka", "Dahi Papdi Chaat", "Live Stir-Fry Mongolian Wok", "Crispy Chilli Babycorn", "Kolkata Egg-Kathi Rolls"],
  },
  {
    step: "04",
    title: "Kulfi Nation & Dessert Bar",
    subtitle: "The Sweetest Finale",
    description: "A decadent dessert universe featuring dip-and-sprinkle Matka Kulfis, warm Gulab Jamuns with Rabri, Belgian Chocolate Truffle cake, and ice cream tubs.",
    badge: "Unlimited Desserts",
    image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=700&q=80",
    dishes: ["Kesar Pista Matka Kulfi", "Paan & Mango Dip Kulfi", "Shahi Gulab Jamun with Rabri", "Hot Sizzling Brownie", "Red Velvet Pastry", "Assorted Ice Cream Sundaes"],
  },
];
