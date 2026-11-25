import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find Us & Directions – Marine Drive, Motihari",
  description:
    "Visit Flamora – Grill & Fry at Marine Drive, Rowing Club Road, Motihari, Bihar (845401). Open daily 11:00 AM – 11:00 PM for Dine-In, Takeaway & Home Delivery.",
  alternates: {
    canonical: "/find-us",
  },
  openGraph: {
    title: "Find Us & Map | Flamora – Grill & Fry, Motihari",
    description:
      "Get directions, opening hours (11 AM – 11 PM daily), and contact details for Flamora at Marine Drive, Motihari.",
    url: "/find-us",
    images: ["/images/restaurant-interior.jpg"],
  },
};

export default function FindUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
