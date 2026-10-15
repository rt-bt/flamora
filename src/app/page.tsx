import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  Drumstick,
  UtensilsCrossed,
  Sparkles,
  ChefHat,
  Heart,
  Smile,
  MapPin,
  Clock,
  ArrowRight,
  Handshake,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import {
  siteConfig,
  getWhatsAppOrderUrl,
} from "@/config/siteConfig";
import CustomerReviews from "@/components/CustomerReviews";

export default function HomePage() {
  const signatureCategories = [
    {
      title: "Flame Grills",
      subtitle: "Smoky · Juicy · Fresh",
      startingPrice: "From ₹139",
      badge: "🔥 Bestseller",
      image: "/images/flame-grills.jpg",
      href: "/menu?category=Grills",
      icon: Flame,
    },
    {
      title: "Crispy Favourites",
      subtitle: "Crunch in every bite",
      startingPrice: "From ₹99",
      badge: "⚡ Super Crunchy",
      image: "/images/crispy-favourites.jpg",
      href: "/menu?category=Fried",
      icon: Drumstick,
    },
    {
      title: "Kebabs & Tikka",
      subtitle: "Made for sharing",
      startingPrice: "From ₹149",
      badge: "🍢 Sharing Special",
      image: "/images/kebabs-tikka.jpg",
      href: "/menu?category=Kebabs",
      icon: UtensilsCrossed,
    },
    {
      title: "Veggie on Fire",
      subtitle: "Paneer · Pineapple",
      startingPrice: "From ₹119",
      badge: "🌱 100% Pure Veg",
      image: "/images/veggie-fire.jpg",
      href: "/menu?category=Veg",
      icon: Sparkles,
    },
  ];

  const whyChooseItems = [
    {
      icon: Flame,
      title: "Fresh Ingredients",
      desc: "Premium farm-sourced meats & daily hand-cut veggies",
    },
    {
      icon: ChefHat,
      title: "Expertly Grilled",
      desc: "Authentic live charcoal smoke, zero microwave reheating",
    },
    {
      icon: Heart,
      title: "Great Value",
      desc: "Generous portions, combos starting at just ₹99",
    },
    {
      icon: Smile,
      title: "Loved by Customers",
      desc: "4.9★ Google rating, over 15,000+ satisfied diners in Motihari",
    },
  ];

  const proofStats = [
    { value: "15,000+", label: "Happy Foodies Served" },
    { value: "4.9 ★", label: "Google Rating (Motihari)" },
    { value: "100%", label: "Live Charcoal Flame Kissed" },
    { value: "15-20 Min", label: "Average Table & Takeaway Prep" },
  ];

  return (
    <div className="relative bg-[#0F0F0F] text-[#F4EBD6]">
      {/* =========================================================================
          SECTION 1: HERO (Matches Design Book Pixel-Close + Real-World Polish)
      ========================================================================= */}
      <section className="relative min-h-[440px] sm:min-h-[520px] lg:min-h-[560px] flex items-center overflow-hidden bg-[#0A0A0A]">
        {/* Responsive Background Images */}
        {/* Mobile Background (Clean chicken on right with zero text) */}
        <div className="absolute inset-0 z-0 sm:hidden">
          <Image
            src="/images/hero-mobile-bg.jpg"
            alt="Flamora Live Charcoal Grill Motihari"
            fill
            priority
            quality={95}
            className="object-cover object-right"
            sizes="100vw"
          />
        </div>

        {/* Desktop / Tablet Background */}
        <div className="absolute inset-0 z-0 hidden sm:block">
          <Image
            src="/images/hero-clean-bg.jpg"
            alt="Flamora Live Charcoal Grill Motihari"
            fill
            priority
            quality={95}
            className="object-cover object-right lg:object-center"
            sizes="100vw"
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9 sm:py-12 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
              {/* Google Social Proof Pill (Desktop & Tablet only - keep mobile hero 100% clean like reference) */}
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.08] border border-white/10 backdrop-blur-md text-xs text-[#F4EBD6]">
                <span className="flex text-[#FFC107]">★★★★★</span>
                <span className="font-semibold text-white">4.9/5</span>
                <span className="text-white/30">•</span>
                <span className="text-[#F4EBD6]/80 text-[11px] font-medium">
                  Motihari&apos;s Highest Rated Live Charcoal Grill
                </span>
              </div>

              {/* Top Tagline Badge */}
              <p className="text-[11px] sm:text-sm font-heading font-extrabold text-[#FF6A24] tracking-[0.22em] uppercase">
                {siteConfig.heroBadge}
              </p>

              {/* Main Heading H1 - Exactly 4 stacked lines matching reference design */}
              <h1 className="font-heading font-extrabold text-[34px] leading-[1.06] sm:text-5xl lg:text-[64px] xl:text-[70px] sm:leading-[1.04] tracking-tight">
                <span className="text-white block">Grilled to</span>
                <span className="text-white block">Perfection,</span>
                <span className="text-[#FF6A24] block mt-0.5 sm:mt-1">
                  Fried to
                </span>
                <span className="text-[#FF6A24] block">
                  Excitement.
                </span>
              </h1>

              {/* Subtext with exact 2-line structure */}
              <p className="text-xs sm:text-base text-[#F4EBD6]/90 max-w-xs sm:max-w-md font-normal leading-relaxed pt-0.5 sm:pt-1">
                Sizzling grills, crispy favourites and<br /> bold flavours — all under one roof.
              </p>

              {/* CTA Buttons: Full-width green button + centered orange text link on Mobile */}
              <div className="pt-2 sm:pt-2.5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                {/* Green WhatsApp Button - Full width on Mobile */}
                <a
                  href={getWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3.5 sm:py-3 px-6 rounded-full font-heading font-semibold text-sm transition-all duration-200 shadow-[0_4px_18px_rgba(37,211,102,0.4)] active:scale-98"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Order on WhatsApp</span>
                </a>

                {/* Explore Menu: Centered Orange Text Link on Mobile / Outlined Button on Desktop */}
                <Link
                  href="/menu"
                  className="w-full sm:w-auto flex items-center justify-center gap-1.5 text-[#FF6A24] hover:text-[#E55815] font-heading font-semibold text-sm py-1 sm:py-3 sm:px-6 sm:bg-[#0F0F0F]/80 sm:hover:bg-[#FF6A24]/10 sm:text-white sm:border sm:border-[#FF6A24] sm:rounded-full transition-all duration-200"
                >
                  <span>Explore Menu</span>
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Real Restaurant Trust Micro-Checks (Desktop & Tablet only) */}
              <div className="hidden sm:flex pt-3.5 flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#F4EBD6]/80 border-t border-white/[0.08]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-[#25D366]" />
                  <span>100% Charcoal Grilled</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-[#FF6A24]" />
                  <span>Fresh Halal Quality</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={13} className="text-[#FFC107]" />
                  <span>Dine-In, Takeaway &amp; Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OUR SIGNATURE / WHAT'S YOUR CRAVING? (Cream #F4EBD6)
      ========================================================================= */}
      <section className="bg-[#F4EBD6] text-[#0F0F0F] py-14 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase block mb-1">
              OUR SIGNATURE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F0F0F] tracking-tight relative inline-block">
              What&apos;s Your Craving?
              {/* Orange underline bar below Your */}
              <span className="block w-20 h-1 bg-[#FF6A24] mx-auto mt-2 rounded-full" />
            </h2>
          </div>

          {/* 4 Rounded Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {signatureCategories.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group bg-[#141414] rounded-[18px] overflow-hidden border border-white/5 shadow-card-dark transition-all duration-300 hover:-translate-y-1.5 hover:shadow-flame-md flex flex-col relative"
                >
                  {/* Top Badge Chip */}
                  <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-heading font-bold text-white shadow-md">
                    {item.badge}
                  </div>

                  {/* Starting Price Chip */}
                  <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-[#FF6A24] text-white text-[10px] font-heading font-bold shadow-md">
                    {item.startingPrice}
                  </div>

                  {/* Card Food Image */}
                  <div className="relative h-44 w-full overflow-hidden bg-black">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-7 h-7 rounded-full bg-[#FF6A24]/15 flex items-center justify-center text-[#FF6A24]">
                          <IconComponent size={16} />
                        </div>
                        <h3 className="font-heading font-bold text-base text-white group-hover:text-[#FF6A24] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#F4EBD6]/70 font-body">
                        {item.subtitle}
                      </p>
                    </div>

                    <div className="mt-4 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs font-heading font-semibold text-[#FF6A24]">
                      <span className="flex items-center gap-1 group-hover:gap-1.5 transition-all">
                        <span>Explore</span>
                        <ArrowRight size={13} />
                      </span>
                      <span className="text-[11px] text-gray-400 group-hover:text-white transition-colors">
                        View Dishes →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE FLAMORA COMBO CLUB BANNER (Dark with Flames)
      ========================================================================= */}
      <section className="relative bg-[#0F0F0F] text-[#F4EBD6] py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#141414] via-[#101010] to-black rounded-[20px] border border-white/10 p-6 sm:p-10 lg:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Text & CTA */}
              <div className="lg:col-span-6 space-y-4">
                {/* Orange Brush Tag */}
                <div className="inline-block px-3.5 py-1 rounded bg-[#FF6A24] text-white font-heading font-bold text-[11px] uppercase tracking-wider">
                  THE FLAMORA COMBO CLUB
                </div>

                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                  <span className="text-white block">MORE FLAVOUR.</span>
                  <span className="text-[#FF6A24] block">
                    MORE VALUE.
                  </span>
                </h2>

                <p className="text-xs sm:text-sm text-[#F4EBD6]/85 max-w-md leading-relaxed">
                  Individual meals, grill combos and sharing packs for every craving. Served with crispy fries and dips.
                </p>

                {/* Real Platter Includes Tags */}
                <div className="flex flex-wrap gap-2 pt-1 text-xs text-[#F4EBD6]/90 font-medium">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">
                    ✓ Flame Grills
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">
                    ✓ Peri-Peri Fries
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">
                    ✓ House Mint Dip
                  </span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/5">
                    ✓ Chilled Drink
                  </span>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/menu#combos"
                    className="inline-flex items-center gap-2 bg-[#FF6A24] hover:bg-[#E55815] text-white px-7 py-3 rounded-full font-heading font-semibold text-xs sm:text-sm transition-all duration-200 shadow-flame-sm hover:-translate-y-0.5"
                  >
                    <span>View Combos</span>
                    <ArrowRight size={15} />
                  </Link>

                  <a
                    href={getWhatsAppOrderUrl("Hi Flamora! I want to order a Combo Meal (Meals from ₹99). Please share current combo offers!")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-5 py-3 rounded-full font-heading font-medium text-xs sm:text-sm transition-all"
                  >
                    <span>Order Combo via WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Exact Combo Feast with Branded Cup & Starburst MEALS FROM ₹99 Badge */}
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="relative w-full max-w-lg h-60 sm:h-72 lg:h-80 rounded-xl overflow-hidden">
                  <Image
                    src="/images/combo-club.jpg"
                    alt="Flamora Combo Club Feast Platter"
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, 550px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: WHY CHOOSE FLAMORA? (Cream Background #F4EBD6)
      ========================================================================= */}
      <section className="bg-[#F4EBD6] text-[#0F0F0F] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="mb-10">
            <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase block mb-0.5">
              WHY CHOOSE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0F0F0F] tracking-tight relative inline-block">
              Flamora?
              <span className="block w-16 h-1 bg-[#FF6A24] mt-1.5 rounded-full" />
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: 4 Columns with Dividers */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 sm:divide-x divide-black/10">
                {whyChooseItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="sm:px-4 text-center sm:text-left flex flex-col items-center sm:items-start"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#FF6A24]/15 flex items-center justify-center text-[#FF6A24] mb-3">
                        <Icon size={20} />
                      </div>
                      <h3 className="font-heading font-bold text-sm text-[#0F0F0F]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-700 mt-1 font-body leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Developer Polish: Real-world Proof Counters */}
              <div className="mt-8 pt-6 border-t border-black/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {proofStats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <p className="font-heading font-extrabold text-xl sm:text-2xl text-[#FF6A24]">
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-gray-600 font-medium mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Restaurant Interior Image Fading smoothly into Cream */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-xl">
                {/* Soft left gradient fade into cream */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#F4EBD6] to-transparent z-10 pointer-events-none" />
                <Image
                  src="/images/restaurant-interior.jpg"
                  alt="Flamora Motihari Restaurant Interior & Dining Ambiance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: REAL CUSTOMER REVIEWS (Google Motihari Feedback)
      ========================================================================= */}
      <CustomerReviews />

      {/* =========================================================================
          SECTION 6: FIND US & PARTNER STRIP (Dark Side-by-Side Strip)
      ========================================================================= */}
      <section className="bg-[#0B0B0B] text-[#F4EBD6] py-14 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Box: Visit Our Outlet */}
            <div className="lg:col-span-7 bg-[#141414] rounded-[20px] border border-white/10 p-6 flex flex-col justify-between shadow-card-dark">
              <div>
                <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase block mb-1">
                  Find Us
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                  Visit Our Outlet
                </h3>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                  {/* Address Details */}
                  <div className="md:col-span-6 space-y-3.5 text-xs text-[#F4EBD6]/85">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="text-[#FF6A24] mt-0.5 flex-shrink-0" size={16} />
                      <div>
                        <p className="font-semibold text-white">Flamora – Grill &amp; Fry</p>
                        <p className="text-gray-400 mt-0.5 leading-snug">
                          Near Bypass, Bariyarpur<br />
                          Motihari, Bihar – 845401
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <Clock className="text-[#FF6A24] mt-0.5 flex-shrink-0" size={16} />
                      <div>
                        <p className="font-semibold text-white">Open Daily</p>
                        <p className="text-gray-400 mt-0.5">11:00 AM – 11:00 PM</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      <a
                        href={siteConfig.maps.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-1.5 px-4 rounded-full border border-white/20 hover:border-[#FF6A24] text-[11px] font-heading font-semibold text-white hover:text-[#FF6A24] transition-colors"
                      >
                        Get Directions
                      </a>
                      <Link
                        href="/find-us"
                        className="py-1.5 px-4 rounded-full border border-white/20 hover:border-[#FF6A24] text-[11px] font-heading font-semibold text-white hover:text-[#FF6A24] transition-colors"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>

                  {/* Map Graphic Preview */}
                  <div className="md:col-span-6 relative h-36 w-full rounded-xl overflow-hidden border border-white/10 group">
                    <Image
                      src="/images/map-preview.png"
                      alt="Flamora Motihari Location Map"
                      fill
                      className="object-cover"
                    />
                    <a
                      href={siteConfig.maps.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-black/30 hover:bg-black/10 flex items-end p-2 text-white text-[10px] font-heading font-semibold transition-colors"
                    >
                      <span className="bg-black/70 px-2 py-1 rounded backdrop-blur-sm">
                        View on Google Maps →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Box: Partner with Flamora */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#161616] to-[#0E0E0E] rounded-[20px] border border-white/10 p-6 flex flex-col justify-between shadow-card-dark relative overflow-hidden">
              <div>
                <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase block mb-1">
                  GROW WITH US
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
                  Partner with Flamora
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#F4EBD6]/80 leading-relaxed max-w-sm">
                  Be a part of our journey. Bring the bold flavours of Flamora to your city. Low capex, high ROI food model.
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
                <Link
                  href="/franchise"
                  className="inline-flex items-center gap-1.5 py-2 px-5 rounded-full border border-white/30 hover:border-[#FF6A24] hover:bg-[#FF6A24] text-white font-heading font-semibold text-xs transition-all duration-200"
                >
                  <span>Franchise Enquiry</span>
                  <ArrowRight size={13} />
                </Link>

                {/* Handshake Graphic */}
                <div className="w-14 h-14 rounded-full bg-[#FF6A24]/10 border border-[#FF6A24]/30 flex items-center justify-center text-[#FF6A24]">
                  <Handshake size={28} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: INSTAGRAM COMMUNITY FOODIE WALL
      ========================================================================= */}
      <section className="bg-[#0A0A0A] py-12 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#FF6A24] via-[#D62B28] to-[#FFC107] flex items-center justify-center text-white flex-shrink-0">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <div>
              <p className="font-heading font-bold text-sm text-white">
                Follow @flamora.motihari
              </p>
              <p className="text-xs text-gray-400">
                Join our Instagram community for secret secret offers &amp; live kitchen reels
              </p>
            </div>
          </div>

          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-[#FF6A24] text-xs font-heading font-semibold text-white hover:text-[#FF6A24] transition-colors"
          >
            <span>Follow on Instagram</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </section>
    </div>
  );
}
