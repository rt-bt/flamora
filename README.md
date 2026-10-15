# Flamora – Grill & Fry 🍗🔥

> **"Grill. Fry. Repeat."**  
> *"Good Food Brings People Together"*

A complete, production-ready, ultra-responsive website for **Flamora – Grill & Fry**, a premium street-food and live charcoal grill brand based near Bypass, Bariyarpur, Motihari, Bihar. Built with Next.js (App Router), Tailwind CSS v4, and modern web standards.

---

## 📸 Reference Design & Brand System

- **Desktop Reference**: [desktop-design.png](file:///d:/Project/Flamora/references/desktop-design.png)
- **Design System & Mobile Screens**: [mobile-and-system-design.png](file:///d:/Project/Flamora/references/mobile-and-system-design.png)

### Brand Palette
| Color | Hex | Usage |
| :--- | :--- | :--- |
| **Flame Orange** | `#FF6A24` | Primary CTA, buttons, highlights, badges |
| **Charcoal Black** | `#0F0F0F` | Deep dark background, card containers |
| **Cream** | `#F4EBD6` | Light section backgrounds, high contrast body text |
| **Spice Red** | `#D62B28` | Fiery accents, bestsellers, non-veg indicator |
| **Golden Yellow** | `#FFC107` | Tagline accents, starburst badges, spicy indicators |
| **WhatsApp Green** | `#25D366` | Instant order triggers, floating CTA button |

### Typography
- **Headings & Buttons**: Montserrat (Bold / ExtraBold / SemiBold)
- **Body & Subtitles**: Poppins / Open Sans
- **Tagline Script**: Caveat (Handwritten cursive accent for *"Good Food Brings People Together"*)

---

## 🌟 Key Pages & Architecture

1. **Home (`/`)**:
   - **Hero Section**: Sizzling grilled chicken on open charcoal fire, bold headline *"Grilled to Perfection, Fried to Excitement"*, dual WhatsApp & Menu buttons, and handwritten tagline script.
   - **Our Signature Section**: Cream background with 4 dark rounded cards (*Flame Grills*, *Crispy Favourites*, *Kebabs & Tikka*, *Veggie on Fire*) with hover elevation and orange glow.
   - **Combo Club Banner**: Fiery dark banner with *"MORE FLAVOUR. MORE VALUE."* and starburst *"MEALS FROM ₹99"* badge.
   - **Why Choose Flamora**: 4 key pillars (*Fresh Ingredients*, *Expertly Grilled*, *Great Value*, *Loved by Customers*) alongside warm dining interior showcase.
   - **Split Strip**: Live map preview, outlet timings, and partner franchise invitation.

2. **Menu (`/menu`)**:
   - Interactive category tabs (*All Items*, *Flame Grills*, *Crispy Fried*, *Kebabs & Tikka*, *Veggie on Fire*, *Combos*).
   - Veg / Non-Veg filter toggle (FSSAI green/red indicator dots).
   - Real-time search bar for dishes.
   - Per-item direct WhatsApp order button with pre-filled dish name and price.
   - Interactive **Platter Box Builder** (`+` button) allowing diners to assemble multiple dishes and send a consolidated WhatsApp order in one click.
   - **Flamora Combo Club Deals** section with savings badges.

3. **About Us (`/about`)**:
   - Behind-the-sizzle story of how Flamora was born in Motihari.
   - Core food philosophy (live coals, 24-hour slow marinades, halal sourcing).
   - Kitchen hygiene & sanitation protocol.
   - Curated gallery of grilled action, crispy frying, and restaurant ambiance.

4. **Find Us (`/find-us`)**:
   - Interactive dark-themed Google Maps embed centered in Motihari, Bihar.
   - Real-time "Open Now" / "Opens at 11 AM" status calculator.
   - Address, operating hours, direct phone call link, and driving directions.
   - Dual-action reservation & inquiry form (Web submit + Direct WhatsApp dispatch).

5. **Franchise (`/franchise`)**:
   - Partner overview with 4 core benefits (Proven Concept, Marketing Support, Training & SOPs, Attractive Returns).
   - 3 Investment models: *Cloud/Kiosk* (₹8-12L), *Dine-in Express* (₹15-22L), *Flagship* (₹25-35L).
   - Step-by-step onboarding roadmap (01 to 05).
   - Collapsible FAQ accordion.
   - Comprehensive Franchise application form.

---

## ⚙️ How to Customize

All business information, phone numbers, and menu items are centralized in just **two easy-to-edit files**:

### 1. Business Info & WhatsApp Configuration
Open [`src/config/siteConfig.ts`](file:///d:/Project/Flamora/src/config/siteConfig.ts):
```ts
export const siteConfig = {
  name: "Flamora – Grill & Fry",
  phoneDisplay: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsappNumber: "919876543210", // Change your WhatsApp number here
  address: {
    full: "Near Bypass, Bariyarpur, Motihari, Bihar – 845401",
    city: "Motihari",
    state: "Bihar",
    pincode: "845401",
  },
  timings: {
    display: "Open Daily 11:00 AM – 11:00 PM",
    openHour: 11, // 11 AM
    closeHour: 23, // 11 PM
  },
  // Social media URLs, maps URLs, SEO metadata
};
```
*Changing the `whatsappNumber` here automatically updates every single WhatsApp button across the entire website.*

### 2. Editing Dishes, Prices & Combos
Open [`src/data/menuData.ts`](file:///d:/Project/Flamora/src/data/menuData.ts):
```ts
{
  id: "chicken-tikka-grill",
  name: "Chicken Tikka Grill",
  category: "Grills",
  price: 149,                // Update price here
  originalPrice: 179,        // Optional strikethrough price
  isVeg: false,              // true for green dot, false for red dot
  isBestseller: true,        // Displays BESTSELLER badge
  spiceLevel: 2,             // 1 = Mild, 2 = Medium, 3 = Extra Hot
  description: "Boneless chicken cubes marinated in hung curd and tandoori spices...",
  portion: "6 Pieces · Serves 1-2",
  image: "/images/chicken-tikka-grill.jpg",
}
```

### 3. Replacing Food Images
All placeholder images are located in [`/public/images/`](file:///d:/Project/Flamora/public/images). Simply replace any image with your own high-resolution restaurant photos using the same filename (e.g. `hero-flame-grill.jpg`, `flame-grills.jpg`).

---

## 🚀 Getting Started

### Local Development
```bash
# 1. Install dependencies (already completed)
npm install

# 2. Run the development server
npm run dev

# 3. Open your browser
http://localhost:3000
```

### Production Build
```bash
npm run build
npm run start
```

---

## ☁️ Deployment to Vercel (1-Click)

1. Push your repository to **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Flamora Grill & Fry website"
   git remote add origin https://github.com/your-username/flamora.git
   git push -u origin main
   ```
2. Log in to [vercel.com](https://vercel.com).
3. Click **"Add New Project"** and import your `flamora` repository.
4. Next.js settings are auto-detected (Framework Preset: Next.js).
5. Click **"Deploy"**. Your website will be live with free global CDN and SSL in under 60 seconds!

---

## 🔍 SEO & Local Search Features

- **Google LocalBusiness Schema**: Full JSON-LD structured data embedded in [`src/components/JsonLd.tsx`](file:///d:/Project/Flamora/src/components/JsonLd.tsx) featuring geo-coordinates, opening hours, cuisine types, telephone, and location in Motihari, Bihar.
- **Dynamic Meta Tags**: Open Graph & Twitter Cards configured in [`src/app/layout.tsx`](file:///d:/Project/Flamora/src/app/layout.tsx).
- **Auto-generated Sitemap & Robots**: Generated at `/sitemap.xml` and `/robots.txt`.
