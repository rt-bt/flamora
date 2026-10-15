import React from "react";
import { siteConfig } from "@/config/siteConfig";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteConfig.seo.siteUrl}/#restaurant`,
    name: siteConfig.name,
    alternateName: ["Flamora Grill", "Flamora Restaurant Motihari", "Flamora Grill & Fry"],
    image: [
      `${siteConfig.seo.siteUrl}/images/hero-flame-grill.jpg`,
      `${siteConfig.seo.siteUrl}/images/flame-grills.jpg`,
      `${siteConfig.seo.siteUrl}/images/combo-club.jpg`,
    ],
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    url: siteConfig.seo.siteUrl,
    servesCuisine: [
      "Barbecue",
      "Grilled Chicken",
      "Tandoori",
      "Fried Chicken",
      "Kebabs",
      "Indian Street Food",
      "Fast Food",
    ],
    priceRange: "₹₹",
    paymentAccepted: ["Cash", "UPI", "Credit Card", "Debit Card"],
    currenciesAccepted: "INR",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.maps.latitude,
      longitude: siteConfig.maps.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "11:00",
        closes: "23:00",
      },
    ],
    hasMenu: `${siteConfig.seo.siteUrl}/menu`,
    menu: `${siteConfig.seo.siteUrl}/menu`,
    acceptsReservations: "True",
    potentialAction: {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: siteConfig.whatsappOrderBaseUrl,
        inLanguage: "en-US",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform",
        ],
      },
      deliveryMethod: [
        "http://purl.org/goodrelations/v1#DeliveryModePickUp",
        "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
