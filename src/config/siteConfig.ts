export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  handwrittenTagline: string;
  heroBadge: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappOrderBaseUrl: string;
  email: string;
  address: {
    street: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  timings: {
    display: string;
    days: string;
    openHour: number; // 24-hr format (11 for 11 AM)
    closeHour: number; // 24-hr format (23 for 11 PM)
  };
  social: {
    instagram: string;
    facebook: string;
    youtube: string;
  };
  maps: {
    embedUrl: string;
    directionsUrl: string;
    latitude: number;
    longitude: number;
  };
  seo: {
    title: string;
    description: string;
    siteUrl: string;
    keywords: string[];
  };
}

export const siteConfig: SiteConfig = {
  name: "Flamora – Grill & Fry",
  shortName: "Flamora",
  tagline: "Grill. Fry. Repeat.",
  handwrittenTagline: "Good Food Brings People Together",
  heroBadge: "FIRE. FLAVOUR. FLAMORA.",
  phoneDisplay: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsappNumber: "919876543210",
  whatsappOrderBaseUrl: "https://wa.me/919876543210",
  email: "hello@flamoragrill.com",
  address: {
    street: "Near Bypass, Bariyarpur",
    locality: "Bariyarpur",
    city: "Motihari",
    state: "Bihar",
    pincode: "845401",
    country: "India",
    full: "Near Bypass, Bariyarpur, Motihari, Bihar – 845401",
  },
  timings: {
    display: "Open Daily 11:00 AM – 11:00 PM",
    days: "Monday – Sunday",
    openHour: 11,
    closeHour: 23,
  },
  social: {
    instagram: "https://instagram.com/flamoragrill",
    facebook: "https://facebook.com/flamoragrill",
    youtube: "https://youtube.com/@flamoragrill",
  },
  maps: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57187.37562852261!2d84.887222!3d26.650833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399334fb19d510f9%3A0xe54c1303837e2898!2sMotihari%2C%20Bihar!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    directionsUrl:
      "https://www.google.com/maps/search/?api=1&query=Near+Bypass,+Bariyarpur,+Motihari,+Bihar+845401",
    latitude: 26.650833,
    longitude: 84.887222,
  },
  seo: {
    title: "Flamora – Grill & Fry | Best Grill Restaurant in Motihari, Bihar",
    description:
      "Sizzling charcoal grills, crunchy fried chicken, juicy kebabs and delicious paneer specials. Visit Flamora in Motihari or order freshly prepared food directly on WhatsApp!",
    siteUrl: "https://flamoragrill.com",
    keywords: [
      "Best Grill Restaurant in Motihari",
      "Flamora Grill and Fry",
      "Chicken Tikka Motihari",
      "Crispy Fried Chicken Bihar",
      "Tandoori Kebabs Motihari",
      "Food Delivery Motihari",
      "Halal Grill Restaurant Bihar",
      "Fast Food Bariyarpur Motihari",
      "Grill Combos Motihari",
    ],
  },
};

/**
 * Builds a direct WhatsApp order message URL for any given item or custom message
 */
export function getWhatsAppOrderUrl(message?: string): string {
  const defaultText = "Hi Flamora! I'd like to order.";
  const text = encodeURIComponent(message || defaultText);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

/**
 * Builds a WhatsApp item order URL with item details
 */
export function getWhatsAppItemUrl(itemName: string, price: number): string {
  const text = `Hi Flamora! I would like to order: ${itemName} (₹${price}). Please confirm delivery/pickup time.`;
  return getWhatsAppOrderUrl(text);
}

/**
 * Builds a WhatsApp franchise enquiry URL
 */
export function getWhatsAppFranchiseUrl(city?: string, name?: string): string {
  const extra = city ? ` for ${city}` : "";
  const from = name ? ` My name is ${name}.` : "";
  const text = `Hi Flamora team! I'm interested in partnering with Flamora Franchise${extra}.${from} Please share details.`;
  return getWhatsAppOrderUrl(text);
}

/**
 * Checks whether the restaurant is currently open
 */
export function isRestaurantOpen(): boolean {
  try {
    // Current IST time offset (UTC+5:30)
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const istDate = new Date(utc + 3600000 * 5.5);
    const hour = istDate.getHours();
    return hour >= siteConfig.timings.openHour && hour < siteConfig.timings.closeHour;
  } catch {
    return true;
  }
}
