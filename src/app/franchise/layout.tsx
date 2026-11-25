import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franchise Opportunities – Partner With Flamora",
  description:
    "Start a Flamora – Grill & Fry franchise in Bihar and across India. High-margin QSR & live charcoal grill model with full kitchen setup, recipes & marketing support.",
  alternates: {
    canonical: "/franchise",
  },
  openGraph: {
    title: "Franchise Opportunities | Flamora – Grill & Fry",
    description:
      "Partner with Motihari's highest-rated live charcoal grill & crispy fried chicken brand. Enquire for franchise details today.",
    url: "/franchise",
    images: ["/images/hero-flame-grill.jpg"],
  },
};

export default function FranchiseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
