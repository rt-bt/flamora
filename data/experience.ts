// =============================================================================
// FLAMORA — Experience Data
// =============================================================================
// Update this file to change the Flamora Experience section on the homepage.
// =============================================================================

import { Flame, UtensilsCrossed, ChefHat, IceCreamCone, Heart } from "lucide-react";

export type Experience = {
  id: string;
  title: string;
  description: string;
  icon: typeof Flame;
};

export const experiences: Experience[] = [
  {
    id: "live-grill",
    title: "Live Grill",
    description:
      "Watch our chefs craft flame-kissed perfection at your table. Every piece is grilled to order, never pre-cooked.",
    icon: Flame,
  },
  {
    id: "unlimited-feast",
    title: "Unlimited Feast",
    description:
      "Savor an endless selection of starters, mains, breads, and desserts. Eat as much as you love, no limits.",
    icon: UtensilsCrossed,
  },
  {
    id: "fresh-dishes",
    title: "Freshly Prepared",
    description:
      "Every dish is made fresh with handpicked ingredients. No shortcuts, no compromises — just pure, honest cooking.",
    icon: ChefHat,
  },
  {
    id: "signature-desserts",
    title: "Signature Desserts",
    description:
      "End your feast on the sweetest note. From traditional kulfi to decadent chocolate lava cake, our dessert bar is a celebration in itself.",
    icon: IceCreamCone,
  },
  {
    id: "warm-hospitality",
    title: "Warm Hospitality",
    description:
      "At Flamora, every guest is family. Our team is dedicated to making your dining experience warm, attentive, and memorable.",
    icon: Heart,
  },
];

export const experienceHero = {
  headline: "More Than A Meal. It's An Experience.",
  description:
    "At Flamora, dining is a celebration. From the sizzle of the live grill to the warmth of our hospitality, every moment is crafted to create memories that linger long after the last bite.",
  image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80",
};
