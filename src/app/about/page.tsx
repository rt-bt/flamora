import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Flame,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "About Us | Our Story & Food Philosophy",
  description:
    "Learn about Flamora – Grill & Fry, our live fire charcoal grilling traditions, food philosophy, and commitment to hygiene and flavor in Motihari, Bihar.",
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Flame,
      title: "Live Fire Craft",
      desc: "We believe real grill flavour only comes from red-hot charcoal, wood smoke, and seasoned skewers — never artificial liquid smoke or microwave shortcuts.",
    },
    {
      icon: Sparkles,
      title: "24-Hour Marinades",
      desc: "Meats and paneer are steeped overnight in hung curd, hand-pounded whole spices, ginger, and Kashmiri chili so bold flavour sinks deep to the core.",
    },
    {
      icon: ShieldCheck,
      title: "100% Halal & Clean",
      desc: "Strict adherence to certified halal sourcing, purified RO water for all preparations, and rigorous open kitchen sanitation standards.",
    },
    {
      icon: HeartHandshake,
      title: "Good Food Brings People Together",
      desc: "Our founding motto: hearty portions, friendly street-side warmth, and honest pricing that lets friends and families celebrate every day.",
    },
  ];

  const galleryImages = [
    {
      src: "/images/hero-flame-grill.jpg",
      caption: "Live Charcoal Grills in Action",
      alt: "Charcoal grill flames",
    },
    {
      src: "/images/crispy-favourites.jpg",
      caption: "Signature Golden Crunch Fried Chicken",
      alt: "Fried chicken platter",
    },
    {
      src: "/images/kebabs-tikka.jpg",
      caption: "Hand-Skewered Succulent Kebabs",
      alt: "Mutton seekh and chicken tikka",
    },
    {
      src: "/images/restaurant-interior.jpg",
      caption: "Warm Dining Ambiance in Motihari",
      alt: "Flamora restaurant interior",
    },
    {
      src: "/images/about-spices.jpg",
      caption: "Authentic Hand-Blended Spices",
      alt: "Indian spices and whole seasonings",
    },
    {
      src: "/images/flamora-special-platter.jpg",
      caption: "Celebration Platters Made for Sharing",
      alt: "Flamora feast platter",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F4EBD6] pb-24">
      {/* =========================================================================
          HERO BANNER
      ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#0F0F0F] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-fire-grill.jpg"
            alt="Flamora Fire & Charcoal"
            fill
            priority
            className="object-cover opacity-25"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/80 to-[#0F0F0F]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6A24]/15 border border-[#FF6A24]/30 backdrop-blur-sm">
            <Flame size={14} className="text-[#FF6A24]" />
            <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase">
              BEHIND THE SIZZLE
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight">
            Our Story
          </h1>

          <p className="font-script text-2xl sm:text-3xl text-[#FFC107] max-w-xl mx-auto pt-2">
            &ldquo;Good Food Brings People Together&rdquo;
          </p>

          <p className="text-sm sm:text-base text-[#F4EBD6]/80 max-w-2xl mx-auto leading-relaxed pt-2">
            Born out of an obsession with the roaring heat of live charcoal and the irresistible crunch of golden fried bites in Motihari, Bihar.
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION: THE FLAMORA JOURNEY
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase block">
              HOW IT STARTED
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white leading-tight">
              Igniting a New Street Grill Culture in Motihari
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#F4EBD6]/85 font-body leading-relaxed">
              <p>
                In a town that loves hearty flavours, we noticed something missing: authentic, smoky live-fire charcoal grills prepared with the hygiene and modern flair of a contemporary brand.
              </p>
              <p>
                We started <strong className="text-white">Flamora</strong> with a simple promise: <em className="text-[#FF6A24]">Grill. Fry. Repeat.</em> We sourced heavy iron grates, sought out the finest fragrant whole spices, and created a kitchen where every chicken skewer and spicy burger is cooked fresh in front of your eyes.
              </p>
              <p>
                Today, Flamora has become the favorite gathering spot for families, youth, and food lovers who seek bold heat, tender meat, and memorable moments.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-6 border-t border-white/10">
              <div>
                <p className="font-heading font-black text-3xl text-[#FF6A24]">10,000+</p>
                <p className="text-xs text-[#F4EBD6]/70 uppercase tracking-wider">Happy Foodies</p>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div>
                <p className="font-heading font-black text-3xl text-[#FF6A24]">100%</p>
                <p className="text-xs text-[#F4EBD6]/70 uppercase tracking-wider">Halal &amp; Fresh</p>
              </div>
              <div className="w-[1px] h-10 bg-white/10" />
              <div>
                <p className="font-heading font-black text-3xl text-[#FF6A24]">12+</p>
                <p className="text-xs text-[#F4EBD6]/70 uppercase tracking-wider">Secret Spice Blends</p>
              </div>
            </div>
          </div>

          {/* Right Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-96 sm:h-[460px] w-full rounded-[24px] overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src="/images/restaurant-interior.jpg"
                alt="Flamora Grill Dining Experience"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0F0F0F]/85 backdrop-blur-md border border-white/10">
                <p className="font-heading font-bold text-white text-base">
                  &ldquo;Flavour that lingers, memories that last.&rdquo;
                </p>
                <p className="text-xs text-[#FF6A24] font-semibold mt-1">
                  Near Bypass, Bariyarpur, Motihari
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: OUR FOOD PHILOSOPHY & PILLARS
      ========================================================================= */}
      <section className="bg-[#141414] py-20 px-4 sm:px-6 lg:px-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase block mb-1">
              THE FLAMORA STANDARD
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Our Food Philosophy
            </h2>
            <p className="text-sm text-[#F4EBD6]/75 mt-3">
              Every dish that leaves our live grill kitchen is held to uncompromising standards of freshness, safety, and fiery taste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-[#0F0F0F] rounded-2xl p-6 border border-white/5 hover:border-[#FF6A24]/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#FF6A24]/10 border border-[#FF6A24]/30 flex items-center justify-center text-[#FF6A24] mb-4">
                      <Icon size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F4EBD6]/75 leading-relaxed font-body">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: QUALITY & HYGIENE COMMITMENT
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-[#161616] to-[#0D0D0D] rounded-[24px] border border-white/10 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase block">
                SAFETY FIRST
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                Uncompromising Kitchen Hygiene
              </h2>
              <p className="text-sm sm:text-base text-[#F4EBD6]/80 leading-relaxed font-body">
                We believe you can only enjoy good food when you trust how it is made. Our open-layout kitchen allows diners to observe preparation directly.
              </p>

              <div className="space-y-3 pt-2 text-sm text-[#F4EBD6]/90">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#FF6A24] flex-shrink-0" />
                  <span>Daily fresh poultry supply, zero deep-freeze stockpiling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#FF6A24] flex-shrink-0" />
                  <span>Commercial multi-stage RO water purification system</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#FF6A24] flex-shrink-0" />
                  <span>Double-filtered edible cooking oil with zero reuse</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#FF6A24] flex-shrink-0" />
                  <span>Food-grade eco-friendly takeaway packaging</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <Image
                  src="/images/about-kitchen.jpg"
                  alt="Flamora Clean Kitchen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: GALLERY SHOWCASE
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase block mb-1">
            MOMENTS AT FLAMORA
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Photo Gallery
          </h2>
          <p className="text-xs sm:text-sm text-[#F4EBD6]/75 mt-2">
            A glimpse into the flames, the food, and the smiles at our Motihari outlet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 bg-[#141414] shadow-card-dark"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs font-heading font-semibold text-white drop-shadow-md">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-[#FF6A24] hover:bg-[#E55815] text-white px-8 py-3.5 rounded-full font-heading font-semibold text-sm transition-all shadow-flame-md"
          >
            <span>Ready to Taste? Explore Our Menu</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
