import { Metadata } from "next";
import { MenuPageClient } from "@/components/menu/MenuPageClient";

export const metadata: Metadata = {
  title: "Menu | FLAMORA",
  description: "Explore the fiery and flavorful menu at FLAMORA.",
};

export default function MenuPage() {
  return <MenuPageClient />;
}
