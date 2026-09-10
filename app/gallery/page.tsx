import type { Metadata } from "next";
import { GalleryPageClient } from "@/components/gallery/GalleryPageClient";

export const metadata: Metadata = {
  title: "Gallery | FLAMORA",
  description: "Explore the ambiance, dishes, and moments captured at Flamora.",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
