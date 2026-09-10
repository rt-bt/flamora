// =============================================================================
// FLAMORA — Gallery Data
// =============================================================================
// Update this file to manage gallery images.
// Place actual images in /public/images/gallery/ and update the src paths.
// =============================================================================

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
};

export type GalleryCategory =
  | "all"
  | "food"
  | "restaurant"
  | "live-grill"
  | "celebrations"
  | "events";

export const galleryCategories: { label: string; value: GalleryCategory }[] = [
  { label: "All", value: "all" },
  { label: "Food", value: "food" },
  { label: "Restaurant", value: "restaurant" },
  { label: "Live Grill", value: "live-grill" },
  { label: "Celebrations", value: "celebrations" },
  { label: "Events", value: "events" },
];

// Using Unsplash source URLs for development placeholders.
// Replace with actual restaurant photos in /public/images/gallery/ for production.
export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    alt: "Elegant restaurant interior with warm lighting",
    category: "restaurant",
    width: 800,
    height: 600,
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    alt: "Beautifully plated Indian cuisine",
    category: "food",
    width: 800,
    height: 530,
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    alt: "Live grill station with flames",
    category: "live-grill",
    width: 800,
    height: 1000,
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Fine dining table setup",
    category: "restaurant",
    width: 800,
    height: 530,
  },
  {
    id: "g5",
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    alt: "Fresh pizza from the oven",
    category: "food",
    width: 800,
    height: 800,
  },
  {
    id: "g6",
    src: "https://images.unsplash.com/photo-1529543544282-ea99407407db?w=800&q=80",
    alt: "Birthday celebration at restaurant",
    category: "celebrations",
    width: 800,
    height: 530,
  },
  {
    id: "g7",
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    alt: "Grilled tandoori platter",
    category: "food",
    width: 800,
    height: 800,
  },
  {
    id: "g8",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    alt: "Modern restaurant dining area",
    category: "restaurant",
    width: 800,
    height: 530,
  },
  {
    id: "g9",
    src: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80",
    alt: "Grilled kebabs on skewers",
    category: "live-grill",
    width: 800,
    height: 600,
  },
  {
    id: "g10",
    src: "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?w=800&q=80",
    alt: "Corporate dining event",
    category: "events",
    width: 800,
    height: 530,
  },
  {
    id: "g11",
    src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80",
    alt: "Colorful Indian curry spread",
    category: "food",
    width: 800,
    height: 530,
  },
  {
    id: "g12",
    src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80",
    alt: "Anniversary dinner celebration",
    category: "celebrations",
    width: 800,
    height: 800,
  },
];
