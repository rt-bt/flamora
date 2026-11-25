import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu & Combos – Live Charcoal Grill, Fried Chicken & Pure Veg",
  description:
    "Explore Flamora's full menu in Motihari: Live Charcoal Grilled Chicken, Crispy Fried Chicken, Combos & Feasts from ₹179, Pure Veg Paneer & Soya Chaap, Sides & Chilled Drinks. Order on WhatsApp with 7 km delivery.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Menu & Combos | Flamora – Grill & Fry, Motihari",
    description:
      "Live charcoal grills, crispy fried chicken, value combos, Pure Veg Soya Chaap & Paneer Grill. Order fresh on WhatsApp in Motihari!",
    url: "/menu",
    images: ["/images/flamora-signature-combo.jpg"],
  },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return children;
}
