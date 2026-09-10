// =============================================================================
// FLAMORA — Occasions Data
// =============================================================================
// Update this file to change the occasions shown on the homepage.
// =============================================================================

import { Cake, Heart, Users, Briefcase } from "lucide-react";

export type Occasion = {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: typeof Cake;
  ctaText: string;
  ctaHref: string;
};

export const occasions: Occasion[] = [
  {
    id: "birthday",
    title: "Birthday",
    description:
      "Turn your special day into a feast worth remembering. Complimentary cake, personalized décor, and a dedicated celebration host.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80",
    icon: Cake,
    ctaText: "Celebrate With Us",
    ctaHref: "/celebrations",
  },
  {
    id: "anniversary",
    title: "Anniversary",
    description:
      "Mark your milestones with an intimate dining experience. Candlelit ambiance, curated menus, and memories to last a lifetime.",
    image: "https://images.unsplash.com/photo-1529543544282-ea99407407db?w=600&q=80",
    icon: Heart,
    ctaText: "Plan Your Evening",
    ctaHref: "/celebrations",
  },
  {
    id: "family-dining",
    title: "Family Dining",
    description:
      "Gather the whole family for a feast of flavors. From little ones to grandparents, there's something for everyone at Flamora.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
    icon: Users,
    ctaText: "Book Your Table",
    ctaHref: "/book-a-table",
  },
  {
    id: "corporate-dining",
    title: "Corporate Dining",
    description:
      "Impress clients and reward your team. Private dining spaces, curated menus, and impeccable service for every business occasion.",
    image: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=600&q=80",
    icon: Briefcase,
    ctaText: "Enquire Now",
    ctaHref: "/catering",
  },
];
