export const siteConfig = {
  restaurantName: "FLAMORA",
  tagline: "Where Fire Meets Flavor",
  description:
    "An unforgettable dining experience crafted around flame, flavor and togetherness. Premium modern Indian restaurant featuring live grill and unlimited buffet dining.",
  url: "https://flamora.com",
  phone: "+91 98XX XXX XXX",
  email: "hello@flamora.com",
  address: {
    street: "123 Flame Street",
    city: "Mumbai",
    state: "Maharashtra",
    zip: "400001",
    country: "India",
  },
  openingHours: {
    lunch: "12:00 PM – 3:30 PM",
    dinner: "6:30 PM – 11:00 PM",
    days: "Monday – Sunday",
  },
  socialLinks: {
    instagram: "https://instagram.com/flamora",
    facebook: "https://facebook.com/flamora",
    youtube: "https://youtube.com/@flamora",
  },
  googleMapsUrl: "https://maps.google.com/?q=Flamora+Restaurant",
  servesCuisine: ["Indian", "North Indian", "Mughlai", "Tandoor", "Live Grill"],
  priceRange: "₹₹₹",
  foundedYear: 2024,
  // Navigation
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "Menu", href: "/menu" },
      { label: "Experience", href: "/celebrations" },
      { label: "Locations", href: "/locations" },
      { label: "Offers", href: "/offers" },
      { label: "Gallery", href: "/gallery" },
      { label: "About", href: "/about" },
    ],
    cta: { label: "Book a Table", href: "/book-a-table" },
  },
  // Footer navigation
  footer: {
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "Menu", href: "/menu" },
      { label: "About", href: "/about" },
      { label: "Locations", href: "/locations" },
      { label: "Offers", href: "/offers" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
    support: [
      { label: "Book a Table", href: "/book-a-table" },
      { label: "Catering", href: "/catering" },
      { label: "Celebrations", href: "/celebrations" },
      { label: "FAQ", href: "/faq" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
