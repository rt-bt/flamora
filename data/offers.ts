// =============================================================================
// FLAMORA — Offers Data
// =============================================================================
// Update this file to manage promotional offers displayed on the website.
// =============================================================================

export type Offer = {
  id: string;
  title: string;
  description: string;
  validity: string;
  image: string;
  badge?: string;
  ctaText: string;
  ctaHref: string;
};

export const offers: Offer[] = [
  {
    id: "weekend-feast",
    title: "Weekend Feast",
    description:
      "Enjoy unlimited live grill, starters, mains and desserts every Saturday and Sunday. Bring the whole family for an unforgettable weekend dining experience.",
    validity: "Valid every Saturday & Sunday",
    image: "/images/offers/weekend-feast.jpg",
    badge: "Popular",
    ctaText: "Book Now",
    ctaHref: "/book-a-table",
  },
  {
    id: "family-dining",
    title: "Family Dining Offer",
    description:
      "Family of 4 or more? Get a complimentary dessert platter with every family booking. Because great meals are better shared.",
    validity: "Valid on all days",
    image: "/images/offers/family-dining.jpg",
    ctaText: "Reserve Your Table",
    ctaHref: "/book-a-table",
  },
  {
    id: "birthday-celebration",
    title: "Birthday Celebration",
    description:
      "Celebrate your special day at Flamora with a complimentary birthday cake, personalized décor, and a dedicated celebration host.",
    validity: "Valid on the birthday (ID required)",
    image: "/images/offers/birthday.jpg",
    badge: "Celebrate",
    ctaText: "Plan Your Birthday",
    ctaHref: "/celebrations",
  },
  {
    id: "early-bird",
    title: "Early Bird Feast",
    description:
      "Dine between 12:00 PM and 1:00 PM on weekdays and enjoy a special early bird discount on our unlimited buffet.",
    validity: "Mon–Fri, 12:00 PM – 1:00 PM",
    image: "/images/offers/early-bird.jpg",
    ctaText: "Book Early",
    ctaHref: "/book-a-table",
  },
  {
    id: "corporate-dining",
    title: "Corporate Dining",
    description:
      "Host your next team lunch or corporate event at Flamora. Enjoy special group rates, private dining spaces, and curated menus.",
    validity: "Min. 10 guests | Advance booking required",
    image: "/images/offers/corporate.jpg",
    badge: "Business",
    ctaText: "Enquire Now",
    ctaHref: "/catering",
  },
];
