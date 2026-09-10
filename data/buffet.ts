// =============================================================================
// FLAMORA — Buffet Pricing & Outlet Data (Barbeque Nation inspired)
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
    outletId: "mumbai-bandra",
    city: "Mumbai",
    outletName: "Flamora — Bandra West (Linking Rd)",
    address: "123 Linking Road, Near Waterfield Junction, Bandra West, Mumbai",
    phone: "+91 98200 11223",
    isLiveGrill: true,
    specialHighlights: ["Live Table Grill", "Live Kulfi Counter", "Cocktail Bar", "Valet Parking"],
    pricing: [
      {
        dayType: "Weekday (Mon-Fri)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 3:30 PM", vegPrice: 699, nonVegPrice: 799, kidsPrice: 399 },
          { session: "Dinner", timing: "6:30 PM – 11:00 PM", vegPrice: 799, nonVegPrice: 899, kidsPrice: 449 },
        ],
      },
      {
        dayType: "Weekend (Sat-Sun)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 4:00 PM", vegPrice: 849, nonVegPrice: 949, kidsPrice: 499 },
          { session: "Dinner", timing: "6:30 PM – 11:30 PM", vegPrice: 899, nonVegPrice: 999, kidsPrice: 549 },
        ],
      },
    ],
  },
  {
    outletId: "delhi-cp",
    city: "Delhi NCR",
    outletName: "Flamora — Connaught Place (Janpath)",
    address: "45 Janpath, Outer Circle, Connaught Place, New Delhi",
    phone: "+91 98110 44556",
    isLiveGrill: true,
    specialHighlights: ["Embedded Table Grills", "Tandoor Live Station", "Private Dining Hall", "Metro Adjacent"],
    pricing: [
      {
        dayType: "Weekday (Mon-Fri)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 3:30 PM", vegPrice: 699, nonVegPrice: 799, kidsPrice: 399 },
          { session: "Dinner", timing: "6:30 PM – 11:00 PM", vegPrice: 799, nonVegPrice: 899, kidsPrice: 449 },
        ],
      },
      {
        dayType: "Weekend (Sat-Sun)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 4:00 PM", vegPrice: 849, nonVegPrice: 949, kidsPrice: 499 },
          { session: "Dinner", timing: "6:30 PM – 11:30 PM", vegPrice: 899, nonVegPrice: 999, kidsPrice: 549 },
        ],
      },
    ],
  },
  {
    outletId: "bangalore-indiranagar",
    city: "Bangalore",
    outletName: "Flamora — Indiranagar (100ft Rd)",
    address: "78, 100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru",
    phone: "+91 98450 77889",
    isLiveGrill: true,
    specialHighlights: ["Rooftop Live Grill", "Craft Beer on Tap", "Live Dessert Bar", "DJ Nights"],
    pricing: [
      {
        dayType: "Weekday (Mon-Fri)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 3:30 PM", vegPrice: 749, nonVegPrice: 849, kidsPrice: 429 },
          { session: "Dinner", timing: "6:30 PM – 11:00 PM", vegPrice: 849, nonVegPrice: 949, kidsPrice: 479 },
        ],
      },
      {
        dayType: "Weekend (Sat-Sun)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 4:00 PM", vegPrice: 899, nonVegPrice: 999, kidsPrice: 529 },
          { session: "Dinner", timing: "6:30 PM – 11:30 PM", vegPrice: 949, nonVegPrice: 1049, kidsPrice: 579 },
        ],
      },
    ],
  },
  {
    outletId: "hyderabad-jubilee",
    city: "Hyderabad",
    outletName: "Flamora — Jubilee Hills (Road 36)",
    address: "22 Road No. 36, Near Metro Pillar 1650, Jubilee Hills, Hyderabad",
    phone: "+91 98850 33221",
    isLiveGrill: true,
    specialHighlights: ["Authentic Dum Biryani Station", "Live Haleem & Kebabs", "Spacious Family Lounges"],
    pricing: [
      {
        dayType: "Weekday (Mon-Fri)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 3:30 PM", vegPrice: 699, nonVegPrice: 799, kidsPrice: 399 },
          { session: "Dinner", timing: "6:30 PM – 11:00 PM", vegPrice: 799, nonVegPrice: 899, kidsPrice: 449 },
        ],
      },
      {
        dayType: "Weekend (Sat-Sun)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 4:00 PM", vegPrice: 849, nonVegPrice: 949, kidsPrice: 499 },
          { session: "Dinner", timing: "6:30 PM – 11:30 PM", vegPrice: 899, nonVegPrice: 999, kidsPrice: 549 },
        ],
      },
    ],
  },
  {
    outletId: "pune-koregaon",
    city: "Pune",
    outletName: "Flamora — Koregaon Park (North Main Rd)",
    address: "15 North Main Road, Next to Lane 5, Koregaon Park, Pune",
    phone: "+91 98230 66778",
    isLiveGrill: true,
    specialHighlights: ["Garden Seating", "Live Barbeque Pits", "Kids Play Area", "Mocktail Lounge"],
    pricing: [
      {
        dayType: "Weekday (Mon-Fri)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 3:30 PM", vegPrice: 699, nonVegPrice: 799, kidsPrice: 399 },
          { session: "Dinner", timing: "6:30 PM – 11:00 PM", vegPrice: 799, nonVegPrice: 899, kidsPrice: 449 },
        ],
      },
      {
        dayType: "Weekend (Sat-Sun)",
        slots: [
          { session: "Lunch", timing: "12:00 PM – 4:00 PM", vegPrice: 849, nonVegPrice: 949, kidsPrice: 499 },
          { session: "Dinner", timing: "6:30 PM – 11:30 PM", vegPrice: 899, nonVegPrice: 999, kidsPrice: 549 },
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
