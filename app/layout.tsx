import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { AppLayoutWrapper } from "@/components/layout/AppLayoutWrapper";
import { siteConfig } from "@/config/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.restaurantName} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.restaurantName}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.restaurantName,
    title: `${siteConfig.restaurantName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.restaurantName} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakarta.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <AppLayoutWrapper>{children}</AppLayoutWrapper>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: siteConfig.restaurantName,
              description: siteConfig.description,
              url: siteConfig.url,
              telephone: siteConfig.phone,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.state,
                postalCode: siteConfig.address.zip,
                addressCountry: siteConfig.address.country,
              },
              servesCuisine: siteConfig.servesCuisine,
              priceRange: siteConfig.priceRange,
              openingHours: [
                `Mo-Su ${siteConfig.openingHours.lunch}`,
                `Mo-Su ${siteConfig.openingHours.dinner}`,
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
