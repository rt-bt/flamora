import type { Metadata } from "next";
import { FAQPageClient } from "@/components/faq/FAQPageClient";

export const metadata: Metadata = {
  title: "FAQ | FLAMORA",
  description: "Frequently asked questions about Flamora restaurant. Information about reservations, opening hours, dietary options, catering, and more.",
};

export default function FAQPage() {
  return <FAQPageClient />;
}
