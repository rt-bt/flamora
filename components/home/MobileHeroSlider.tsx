"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Flame, Gift, ShoppingBag, Sparkles, ChevronRight, ChevronLeft, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileHeroSliderProps {
  onOpenBooking: () => void;
}

const slides = [
  {
    id: "live-buffet",
    badge: "🔥 Live On-Table Grill",
    title: "Unlimited Buffet & Live Skewers",
    tagline: "India's Royal Charcoal Dining Experience",
    priceTag: "Starting ₹699*",
    highlight: "Free Birthday Celebration Cake 🎂",
    bgGradient: "from-amber-950 via-flamora-charcoal to-black",
    accentColor: "from-flamora-red to-flamora-orange",
    icon: Flame,
    ctaText: "Book Table Now",
    isAction: true,
  },
  {
    id: "happiness-cards",
    badge: "🎁 Smiles Gift Cards",
    title: "Gift A Grand Feast of Flavors",
    tagline: "Flat 10% – 15% Extra Value on Dining Vouchers",
    priceTag: "Vouchers from ₹500",
    highlight: "Instant E-Voucher via WhatsApp",
    bgGradient: "from-emerald-950 via-flamora-charcoal to-black",
    accentColor: "from-emerald-500 to-teal-400",
    icon: Gift,
    ctaText: "Explore Gift Cards",
    href: "/offers",
  },
  {
    id: "box-delivery",
    badge: "📦 Flamora in a Box",
    title: "Craving Grills at Home?",
    tagline: "Signature 'Box of 5 Grills' + Biryani + Kulfi",
    priceTag: "Combos from ₹499",
    highlight: "Delivered Sizzling Hot in 30 Mins",
    bgGradient: "from-sky-950 via-flamora-charcoal to-black",
    accentColor: "from-sky-500 to-indigo-400",
    icon: ShoppingBag,
    ctaText: "Order Delivery",
    href: "/menu",
  },
  {
    id: "smiles-rewards",
    badge: "👑 Smiles Loyalty Club",
    title: "Earn 5% Cashback Coins",
    tagline: "1 Smile Coin = ₹1 Free Food on Next Visit",
    priceTag: "Free Membership",
    highlight: "Complimentary Cake & Silver Tier Unlock",
    bgGradient: "from-purple-950 via-flamora-charcoal to-black",
    accentColor: "from-amber-400 to-yellow-500",
    icon: Award,
    ctaText: "View Benefits",
    href: "/offers",
  },
];

export function MobileHeroSlider({ onOpenBooking }: MobileHeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer();
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    resetTimer();
  };

  const activeSlide = slides[currentIndex];
  const Icon = activeSlide.icon;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
      {/* Slide Container */}
      <div
        className={cn(
          "relative min-h-[260px] p-6 flex flex-col justify-between bg-gradient-to-br transition-all duration-500",
          activeSlide.bgGradient
        )}
      >
        {/* Subtle Background Glow Accent */}
        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-flamora-orange/20 blur-3xl pointer-events-none" />

        {/* Top Badges */}
        <div className="relative z-10 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md border border-white/15">
            {activeSlide.badge}
          </span>
          <span className="rounded-full bg-flamora-gold/20 px-2.5 py-0.5 text-[11px] font-extrabold text-flamora-gold border border-flamora-gold/40">
            {activeSlide.priceTag}
          </span>
        </div>

        {/* Middle Content */}
        <div className="relative z-10 my-4">
          <h2 className="font-heading text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            {activeSlide.title}
          </h2>
          <p className="mt-1 text-xs font-medium text-white/80 line-clamp-1">
            {activeSlide.tagline}
          </p>
          <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-flamora-gold">
            <Sparkles className="h-3.5 w-3.5 shrink-0" />
            <span>{activeSlide.highlight}</span>
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-white/10">
          {activeSlide.isAction ? (
            <button
              onClick={() => {
                onOpenBooking();
              }}
              className={cn(
                "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg active:scale-95 transition-transform",
                activeSlide.accentColor
              )}
            >
              <Flame className="h-4 w-4 fill-white" />
              <span>{activeSlide.ctaText}</span>
            </button>
          ) : (
            <Link
              href={activeSlide.href!}
              className={cn(
                "inline-flex items-center gap-2 rounded-xl bg-gradient-to-r px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg active:scale-95 transition-transform",
                activeSlide.accentColor
              )}
            >
              <Icon className="h-4 w-4" />
              <span>{activeSlide.ctaText}</span>
            </Link>
          )}

          {/* Nav Controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Slider Indicator Dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setCurrentIndex(idx);
              resetTimer();
            }}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              idx === currentIndex ? "w-6 bg-flamora-gold" : "w-1.5 bg-white/30"
            )}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
