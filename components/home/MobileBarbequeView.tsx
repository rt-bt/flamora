"use client";

import { useState } from "react";
import Link from "next/link";
import { MobileBookingDrawer } from "@/components/booking/MobileBookingDrawer";
import { ArrowRight, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { outletBuffetList } from "@/data/buffet";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────────────────
   COMPACT & CLEAN MOBILE APP DATA
──────────────────────────────────────────────────────────────────────────── */
const promotions = [
  {
    id: "early-bird",
    title: "Early Bird Lunch",
    tag: "15% OFF",
    desc: "Valid on 12:00–12:30 PM lunch slots.",
    code: "EARLY15",
    gradient: "from-[#EE5735] to-[#C83415]",
    icon: "🌅",
  },
  {
    id: "smiles-club",
    title: "Smiles Cashback",
    tag: "5% COINS",
    desc: "Earn 5% cashback coins on every bill.",
    code: "SMILES5",
    gradient: "from-[#7E22CE] to-[#9333EA]",
    icon: "👑",
  },
  {
    id: "birthday-cake",
    title: "Free Birthday Cake",
    tag: "FREE CAKE",
    desc: "Chef cake & sparkler celebration song.",
    code: "PARTYCAKE",
    gradient: "from-[#E11D48] to-[#F43F5E]",
    icon: "🎂",
  },
  {
    id: "corporate-feast",
    title: "Corporate Offer",
    tag: "10+1 FREE",
    desc: "Book for 10 guests & get 1 free.",
    code: "CORP10",
    gradient: "from-[#059669] to-[#10B981]",
    icon: "💼",
  },
];

const occasions = [
  { label: "Birthday", emoji: "🎂" },
  { label: "Anniversary", emoji: "💍" },
  { label: "Family", emoji: "👨‍👩‍👧" },
  { label: "Office Lunch", emoji: "💼" },
  { label: "Date Night", emoji: "❤️" },
];

const buffetHighlights = [
  {
    id: "grills",
    title: "Live Grill Starters",
    subtitle: "Signature Experience",
    desc: "Unlimited veg & non-veg table grills.",
    emoji: "🍢",
    bgColor: "bg-orange-50",
  },
  {
    id: "bigbuffet",
    title: "The Big Buffet",
    subtitle: "Big Feast. Small Bill.",
    desc: "30+ dishes & sizzlers spread.",
    emoji: "🍛",
    bgColor: "bg-amber-50",
  },
  {
    id: "maincourse",
    title: "Main Course Feast",
    subtitle: "Grand Buffet Experience",
    desc: "Curries, biryanis & fresh breads.",
    emoji: "🍜",
    bgColor: "bg-[#F0FDF4]",
  },
  {
    id: "desserts",
    title: "Kulfi Shulfi Desserts",
    subtitle: "Grand Dessert Finale",
    desc: "Cakes, brownies & matka kulfis.",
    emoji: "🍦",
    bgColor: "bg-[#FDF2F8]",
  },
];

const quickActions = [
  { id: "book", label: "Book a table", bg: "bg-[#FFE8E0]", emoji: "📅", isAction: true },
  { id: "happiness", label: "Happiness Cards", bg: "bg-[#E1FFBA]", emoji: "🎁", href: "/offers" },
  { id: "catering", label: "Catering", bg: "bg-[#FFE8C5]", emoji: "🍽️", href: "/catering" },
  { id: "takeaway", label: "Takeaway", bg: "bg-[#DBF8FF]", emoji: "📦", href: "/menu" },
];

/* ────────────────────────────────────────────────────────────────────────────
   COMPONENT
──────────────────────────────────────────────────────────────────────────── */
export function MobileBarbequeView() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Patna");
  const [activeSession, setActiveSession] = useState<"Lunch" | "Dinner">("Dinner");
  const [activeDayType, setActiveDayType] = useState<"Weekday" | "Weekend">("Weekday");

  const currentOutlet = outletBuffetList.find((o) => o.city === selectedCity) || outletBuffetList[0];
  const pricingGroup = currentOutlet.pricing.find((p) =>
    activeDayType === "Weekday" ? p.dayType.includes("Weekday") : p.dayType.includes("Weekend")
  );
  const slot = pricingGroup?.slots.find((s) => s.session === activeSession);

  return (
    /* pt-[56px] aligns exactly beneath fixed header */
    <div className="block lg:hidden bg-white min-h-screen text-[#111827] font-inter pt-[56px]">

      {/* ══════════════════════════════════════════════
          1. HERO SLIDER BANNER (Clean & Crisp)
          ══════════════════════════════════════════════ */}
      <div className="relative w-full h-[200px] overflow-hidden rounded-b-xl">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-grill.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

        <div className="absolute bottom-3.5 left-4 right-4 text-white">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#EE5735] bg-white px-2 py-0.5 rounded-full mb-1 inline-block">
            🔥 Live Grill &amp; Buffet
          </span>
          <h1 className="font-bold font-heading text-xl leading-tight text-white drop-shadow-xs">
            Where Fire Meets Flavor
          </h1>
          <button
            type="button"
            onClick={() => setIsBookingOpen(true)}
            className="mt-2.5 inline-flex items-center gap-1.5 bg-[#EE5735] text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg shadow active:scale-95 transition-all"
          >
            Book Table
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          2. QUICK SERVICES (4 Icon Grid)
          ══════════════════════════════════════════════ */}
      <div className="pt-3 pb-2 px-4">
        <div className="grid grid-cols-4 gap-2">
          {quickActions.map((item) => {
            const inner = (
              <div
                className={cn(
                  "p-2 rounded-xl flex flex-col items-center justify-center cursor-pointer active:scale-95 aspect-square border border-black/5",
                  item.bg
                )}
              >
                <span className="text-2xl mb-0.5">{item.emoji}</span>
                <span className="text-[11px] font-medium text-[#171717] text-center leading-tight">
                  {item.label}
                </span>
              </div>
            );
            if (item.isAction) {
              return (
                <button key={item.id} type="button" onClick={() => setIsBookingOpen(true)} className="w-full">
                  {inner}
                </button>
              );
            }
            return <Link key={item.id} href={item.href!}>{inner}</Link>;
          })}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          3. PROMOTIONS CAROUSEL ("What's On BBQ")
          ══════════════════════════════════════════════ */}
      <div className="py-2 px-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <Sparkles className="h-4 w-4 text-[#EE5735]" />
            <h2 className="text-[14px] font-bold font-heading text-[#111827]">
              Offers &amp; Deals
            </h2>
          </div>
          <Link href="/offers" className="text-[#EE5735] text-xs font-semibold">
            View All →
          </Link>
        </div>

        {/* Compact Horizontal Slider */}
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              onClick={() => setIsBookingOpen(true)}
              className={cn(
                "flex-shrink-0 w-[240px] rounded-xl p-3 text-white shadow-xs bg-gradient-to-r relative overflow-hidden flex flex-col justify-between min-h-[110px] cursor-pointer active:scale-98 transition-transform",
                promo.gradient
              )}
            >
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-white/20 uppercase tracking-wider text-white">
                  {promo.tag}
                </span>
                <span className="text-[9px] font-mono bg-black/20 text-white/90 px-1.5 py-0.5 rounded">
                  {promo.code}
                </span>
              </div>
              <div>
                <h3 className="text-xs font-bold font-heading leading-tight mb-0.5">
                  {promo.title}
                </h3>
                <p className="text-[10px] text-white/90 line-clamp-1">
                  {promo.desc}
                </p>
              </div>
              <div className="mt-2 text-[10px] font-semibold text-white/90 flex items-center justify-end gap-1">
                <span>Book with Offer</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          4. CELEBRATE AN OCCASION?
          ══════════════════════════════════════════════ */}
      <div className="py-2 px-4">
        <h2 className="text-[14px] font-bold font-heading text-[#111827] mb-2">
          Celebrate an occasion?
        </h2>
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
          {occasions.map((occ) => (
            <button
              key={occ.label}
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="flex-shrink-0 cursor-pointer bg-gray-50 rounded-xl overflow-hidden border border-gray-200 p-1.5 text-center active:scale-95 transition-transform"
            >
              <div className="w-[76px] h-[56px] rounded-lg overflow-hidden mb-1 flex items-center justify-center bg-white text-2xl">
                {occ.emoji}
              </div>
              <p className="text-[11px] font-inter text-[#111827] text-center font-medium">
                {occ.label}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          5. TODAY'S BUFFET HIGHLIGHTS (Compact Card List)
          ══════════════════════════════════════════════ */}
      <div className="py-2 px-4">
        <h2 className="text-[14px] font-bold font-heading text-[#111827] mb-2">
          Today&apos;s buffet highlights
        </h2>
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 p-2.5 shadow-xs">
          <div className="divide-y divide-gray-100">
            {buffetHighlights.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className={cn(
                  "flex gap-2.5 w-full text-left cursor-pointer items-center",
                  i > 0 ? "py-2" : "pb-2",
                  i === buffetHighlights.length - 1 ? "pb-0" : ""
                )}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center text-2xl border border-gray-100",
                    item.bgColor
                  )}
                >
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h3 className="text-xs font-bold font-heading text-[#111827]">
                      {item.title}
                    </h3>
                    <span className="text-[9px] font-semibold text-[#EE5735] shrink-0">
                      {item.subtitle}
                    </span>
                  </div>
                  <p className="text-[11px] font-inter text-[#6B7280] line-clamp-1 mt-0.5">
                    {item.desc}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400 shrink-0 ml-1" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          6. TODAY'S BUFFET PRICE (Compact Pricing Card)
          ══════════════════════════════════════════════ */}
      <div className="py-2 px-4">
        <div className="rounded-xl border border-gray-200 bg-white shadow-xs overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-gray-100 bg-gray-50">
            <div>
              <h2 className="text-xs font-bold font-heading text-[#111827]">
                Buffet Price at {selectedCity}
              </h2>
              <p className="text-[10px] text-[#6B7280]">{slot?.timing}</p>
            </div>

            {/* City Selector */}
            <div className="flex items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-1 text-xs">
              <MapPin className="h-3 w-3 text-[#EE5735] shrink-0" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-transparent font-semibold text-[#111827] focus:outline-none cursor-pointer text-[11px]"
              >
                {outletBuffetList.map((o) => (
                  <option key={o.outletId} value={o.city}>
                    {o.city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Weekday / Weekend Toggle */}
          <div className="flex border-b border-gray-100 text-xs">
            <button
              type="button"
              onClick={() => setActiveDayType("Weekday")}
              className={cn(
                "flex-1 py-2 font-semibold transition-colors text-center",
                activeDayType === "Weekday"
                  ? "bg-[#EE5735] text-white"
                  : "text-[#6B7280] bg-gray-50"
              )}
            >
              Mon–Fri
            </button>
            <button
              type="button"
              onClick={() => setActiveDayType("Weekend")}
              className={cn(
                "flex-1 py-2 font-semibold transition-colors text-center",
                activeDayType === "Weekend"
                  ? "bg-[#EE5735] text-white"
                  : "text-[#6B7280] bg-gray-50"
              )}
            >
              Sat–Sun
            </button>
          </div>

          {/* Lunch / Dinner Toggle */}
          <div className="flex gap-2 px-3 pt-2.5 pb-2">
            <button
              type="button"
              onClick={() => setActiveSession("Lunch")}
              className={cn(
                "flex-1 rounded-md py-1.5 text-xs font-semibold border transition-all text-center",
                activeSession === "Lunch"
                  ? "bg-[#FFE8E0] border-[#EE5735] text-[#EE5735]"
                  : "bg-gray-50 border-gray-200 text-[#6B7280]"
              )}
            >
              ☀️ Lunch
            </button>
            <button
              type="button"
              onClick={() => setActiveSession("Dinner")}
              className={cn(
                "flex-1 rounded-md py-1.5 text-xs font-semibold border transition-all text-center",
                activeSession === "Dinner"
                  ? "bg-[#FFE8E0] border-[#EE5735] text-[#EE5735]"
                  : "bg-gray-50 border-gray-200 text-[#6B7280]"
              )}
            >
              🌙 Dinner
            </button>
          </div>

          {/* Price Cards */}
          <div className="grid grid-cols-2 gap-2 px-3 pb-3">
            <div className="rounded-lg border border-green-200 bg-[#F0FDF4] py-2 px-2.5 text-center">
              <div className="text-[10px] font-semibold text-green-700">Pure Veg</div>
              <div className="text-xl font-bold font-heading text-[#111827]">₹{slot?.vegPrice}</div>
            </div>
            <div className="rounded-lg border border-red-200 bg-[#FFF5F5] py-2 px-2.5 text-center">
              <div className="text-[10px] font-semibold text-red-700">Non-Veg</div>
              <div className="text-xl font-bold font-heading text-[#111827]">₹{slot?.nonVegPrice}</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="px-3 pb-3">
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="w-full bg-[#EE5735] hover:bg-[#d94726] text-white rounded-lg py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
            >
              <span>Book Table at ₹{activeSession === "Lunch" ? slot?.vegPrice : slot?.nonVegPrice}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          7. OUR OFFERINGS (Compact 2-Panel)
          ══════════════════════════════════════════════ */}
      <div className="py-2 px-4">
        <h2 className="text-[14px] font-bold font-heading text-[#111827] mb-2">
          Our Offerings
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {/* Panel 1: Dine Out */}
          <div
            onClick={() => setIsBookingOpen(true)}
            className="rounded-xl bg-[#FFE8E0] p-3 flex flex-col justify-between cursor-pointer active:scale-95 transition-transform border border-orange-100"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#EE5735]">DINE IN</p>
              <h3 className="text-sm font-bold font-heading text-[#111827] mt-0.5 leading-tight">
                Live Buffet
              </h3>
            </div>
            <span className="mt-3 text-[10px] font-semibold text-[#EE5735] flex items-center gap-1">
              Book Table →
            </span>
          </div>

          {/* Panel 2: Catering */}
          <Link
            href="/catering"
            className="rounded-xl bg-[#E1FFBA] p-3 flex flex-col justify-between cursor-pointer active:scale-95 transition-transform border border-green-200"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-green-800">EVENTS</p>
              <h3 className="text-sm font-bold font-heading text-[#111827] mt-0.5 leading-tight">
                Catering
              </h3>
            </div>
            <span className="mt-3 text-[10px] font-semibold text-green-800 flex items-center gap-1">
              Send Enquiry →
            </span>
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          8. TAKEAWAY EXPRESS
          ══════════════════════════════════════════════ */}
      <div className="py-2 px-4">
        <Link href="/menu">
          <div className="bg-[#FFCFC5] p-3 rounded-xl flex items-center justify-between active:opacity-90 transition-opacity border border-orange-200">
            <div>
              <p className="font-bold font-heading text-[#EE5735] text-xs uppercase tracking-wide">Takeaway Express</p>
              <h4 className="text-xs text-[#111827] font-medium mt-0.5">Order BBQ Box to Home</h4>
            </div>
            <div className="text-3xl shrink-0 ml-2">📦</div>
          </div>
        </Link>
      </div>

      {/* ══════════════════════════════════════════════
          9. OUR RESTAURANTS (Outlets in Bihar)
          ══════════════════════════════════════════════ */}
      <div className="py-3 px-4 pb-8">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-[14px] font-bold font-heading text-[#111827]">
            Our Outlets
          </h2>
          <Link href="/locations" className="text-[#EE5735] text-xs font-semibold">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {outletBuffetList.map((outlet) => (
            <button
              key={outlet.outletId}
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="rounded-lg border border-gray-200 bg-gray-50 p-2.5 text-left active:scale-95 transition-transform"
            >
              <p className="text-xs font-bold font-heading text-[#111827] flex items-center gap-1">
                📍 {outlet.city}
              </p>
              <p className="text-[10px] text-[#6B7280] line-clamp-1 mt-0.5">
                {outlet.outletName}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Booking Drawer */}
      <MobileBookingDrawer
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
