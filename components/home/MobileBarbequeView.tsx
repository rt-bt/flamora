"use client";

import { useState } from "react";
import Link from "next/link";
import { MobileBookingDrawer } from "@/components/booking/MobileBookingDrawer";
import { ArrowRight, ChevronRight, MapPin, Tag, Sparkles, Gift, Percent } from "lucide-react";
import { outletBuffetList } from "@/data/buffet";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────────────────
   BARBEQUE NATION PROMOTIONS DATA
──────────────────────────────────────────────────────────────────────────── */
const promotions = [
  {
    id: "early-bird",
    title: "Early Bird Lunch Special",
    tag: "FLAT 15% OFF",
    desc: "Book lunch slot between 12:00 PM – 12:30 PM and get flat 15% discount.",
    code: "EARLY15",
    gradient: "from-[#EE5735] via-[#E04824] to-[#C83415]",
    icon: "🌅",
    badgeBg: "bg-white/20 text-white",
  },
  {
    id: "smiles-club",
    title: "Smiles Club Loyalty Rewards",
    tag: "5% CASHBACK",
    desc: "Earn 5% Smiles Coins on every buffet bill. Redeem instantly on next visit.",
    code: "SMILES5",
    gradient: "from-[#6B21A8] via-[#7E22CE] to-[#9333EA]",
    icon: "👑",
    badgeBg: "bg-amber-300 text-purple-950 font-bold",
  },
  {
    id: "birthday-cake",
    title: "Free Sparkler Birthday Cake",
    tag: "FREE CELEBRATION",
    desc: "Complimentary Chef's Sparkler Cake & special team birthday celebration song!",
    code: "PARTYCAKE",
    gradient: "from-[#BE123C] via-[#E11D48] to-[#F43F5E]",
    icon: "🎂",
    badgeBg: "bg-white/20 text-white",
  },
  {
    id: "corporate-feast",
    title: "Corporate Group Offer",
    tag: "10 + 1 FREE",
    desc: "Book for a group of 10 employees & get 1 Buffet Ticket absolutely FREE!",
    code: "CORP10",
    gradient: "from-[#047857] via-[#059669] to-[#10B981]",
    icon: "💼",
    badgeBg: "bg-white/20 text-white",
  },
  {
    id: "student-discount",
    title: "Student Grill Feast",
    tag: "FLAT ₹100 OFF",
    desc: "Show your valid college/school ID card and claim ₹100 OFF per person.",
    code: "STUDENT100",
    gradient: "from-[#1D4ED8] via-[#2563EB] to-[#3B82F6]",
    icon: "🎓",
    badgeBg: "bg-white/20 text-white",
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
    desc: "Unlimited veg & non-veg grills served at your table.",
    emoji: "🍢",
    bgColor: "bg-orange-50",
  },
  {
    id: "bigbuffet",
    title: "The Big Buffet",
    subtitle: "Big Feast. Small Bill.",
    desc: "Enjoy a special unlimited menu of 30+ dishes, featuring our all-new sizzlers.",
    emoji: "🍛",
    bgColor: "bg-amber-50",
  },
  {
    id: "maincourse",
    title: "Main Course Feast",
    subtitle: "Grand Buffet Experience",
    desc: "Indian curries, biryanis, fresh breads, and global favourites in veg and non-veg.",
    emoji: "🍜",
    bgColor: "bg-[#F0FDF4]",
  },
  {
    id: "desserts",
    title: "Kulfi Shulfi Desserts",
    subtitle: "Grand Dessert Finale",
    desc: "Start here or end on a sweet note with cakes, brownies & kulfis.",
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
          1. HERO SLIDER BANNER (Barbeque Nation Exact)
          ══════════════════════════════════════════════ */}
      <div className="relative w-full h-[220px] overflow-hidden rounded-b-xl">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-grill.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#EE5735] bg-white/90 px-2.5 py-0.5 rounded-full mb-1.5 inline-block">
            🔥 Live Grill &amp; Buffet
          </span>
          <h1 className="font-bold text-2xl leading-tight text-white drop-shadow">
            Where Fire Meets Flavor
          </h1>
          <p className="text-xs text-gray-200 mt-0.5">
            Bihar&apos;s #1 Unlimited Charcoal BBQ &amp; Buffet
          </p>
          <button
            type="button"
            onClick={() => setIsBookingOpen(true)}
            className="mt-3 inline-flex items-center gap-2 bg-[#EE5735] hover:bg-[#d94726] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow active:scale-95 transition-all"
          >
            Book a Table
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          2. QUICK SERVICES 4-GRID (Barbeque Nation Exact)
          ══════════════════════════════════════════════ */}
      <div className="pt-4 pb-2 px-4">
        <div className="grid grid-cols-4 gap-2.5">
          {quickActions.map((item) => {
            const inner = (
              <div
                className={cn(
                  "p-2 rounded-xl flex flex-col items-center justify-center cursor-pointer group transition-transform active:scale-95 aspect-square border border-black/5",
                  item.bg
                )}
              >
                <span className="text-2xl mb-1">{item.emoji}</span>
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
          3. PROMOTIONS & OFFERS — "What's On BBQ" (Barbeque Nation Exact)
          ══════════════════════════════════════════════ */}
      <div className="py-3 px-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-[#EE5735]" />
            <h2 className="text-[15px] font-bold font-heading text-[#111827]">
              What&apos;s On BBQ (Offers &amp; Deals)
            </h2>
          </div>
          <Link href="/offers" className="text-[#EE5735] text-xs font-semibold hover:underline">
            View All →
          </Link>
        </div>

        {/* Horizontal Carousel Reel */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className={cn(
                "flex-shrink-0 w-[270px] rounded-2xl p-4 text-white shadow-sm bg-gradient-to-r relative overflow-hidden flex flex-col justify-between min-h-[145px]",
                promo.gradient
              )}
            >
              {/* Background decorative emoji */}
              <div className="absolute right-2 -bottom-2 text-6xl opacity-20 pointer-events-none select-none">
                {promo.icon}
              </div>

              {/* Top Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider", promo.badgeBg)}>
                    {promo.tag}
                  </span>
                  <span className="text-[10px] font-mono bg-black/20 text-white/90 px-2 py-0.5 rounded-md border border-white/20">
                    Use: {promo.code}
                  </span>
                </div>
                <h3 className="text-sm font-bold leading-tight drop-shadow-xs mb-1">
                  {promo.title}
                </h3>
                <p className="text-[11px] text-white/90 line-clamp-2 leading-relaxed">
                  {promo.desc}
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="mt-3 inline-flex items-center justify-between w-full bg-white text-[#111827] px-3 py-1.5 rounded-lg text-xs font-semibold shadow-xs active:scale-95 transition-transform"
              >
                <span>Claim Offer &amp; Book</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#EE5735]" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          4. CELEBRATE AN OCCASION? (Barbeque Nation Exact)
          ══════════════════════════════════════════════ */}
      <div className="py-2 px-4">
        <h2 className="text-[15px] font-semibold font-inter text-[#111827] mb-3">
          Celebrate an occasion?
        </h2>
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1">
          {occasions.map((occ) => (
            <button
              key={occ.label}
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="flex-shrink-0 cursor-pointer bg-gray-100 rounded-xl overflow-hidden border border-gray-200 p-1.5 text-center active:scale-95 transition-transform"
            >
              <div className="w-[84px] h-[66px] rounded-xl overflow-hidden mb-1.5 flex items-center justify-center bg-white text-3xl">
                {occ.emoji}
              </div>
              <p className="text-xs font-inter text-[#111827] text-center font-medium">
                {occ.label}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          5. TODAY'S BUFFET HIGHLIGHTS (Barbeque Nation Exact)
          ══════════════════════════════════════════════ */}
      <div className="py-3 px-4">
        <h2 className="text-[15px] font-semibold font-inter text-[#111827] mb-3">
          Today&apos;s buffet highlights
        </h2>
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 p-3 shadow-xs">
          <div className="divide-y divide-gray-100">
            {buffetHighlights.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className={cn(
                  "flex gap-3 w-full text-left cursor-pointer",
                  i > 0 ? "pt-3 pb-3" : "pb-3",
                  i === buffetHighlights.length - 1 ? "pb-0" : ""
                )}
              >
                <div
                  className={cn(
                    "w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center text-3xl border border-gray-100",
                    item.bgColor
                  )}
                >
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold font-inter text-[#111827] mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs font-inter text-[#6B7280] mb-1 line-clamp-2">
                    {item.desc}
                  </p>
                  <span className="text-[11px] font-inter text-[#EE5735] font-medium">
                    {item.subtitle}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          6. TODAY'S BUFFET PRICE CARD (Interactive Pricing)
          ══════════════════════════════════════════════ */}
      <div className="py-3 px-4">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-xs overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-gray-100">
            <div>
              <h2 className="text-[15px] font-semibold font-inter text-[#111827]">
                Today&apos;s buffet price
              </h2>
              <p className="text-xs text-[#6B7280] mt-0.5">Unlimited food • Live grill at table</p>
            </div>
            {/* City Selector */}
            <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs">
              <MapPin className="h-3.5 w-3.5 text-[#EE5735] shrink-0" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-transparent font-semibold text-[#111827] focus:outline-none cursor-pointer text-xs [&>option]:bg-white"
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
          <div className="flex border-b border-gray-100">
            <button
              type="button"
              onClick={() => setActiveDayType("Weekday")}
              className={cn(
                "flex-1 py-2.5 text-xs font-semibold transition-colors",
                activeDayType === "Weekday"
                  ? "bg-[#EE5735] text-white"
                  : "text-[#6B7280] bg-gray-50 hover:bg-gray-100"
              )}
            >
              Weekday (Mon–Fri)
            </button>
            <button
              type="button"
              onClick={() => setActiveDayType("Weekend")}
              className={cn(
                "flex-1 py-2.5 text-xs font-semibold transition-colors",
                activeDayType === "Weekend"
                  ? "bg-[#EE5735] text-white"
                  : "text-[#6B7280] bg-gray-50 hover:bg-gray-100"
              )}
            >
              Weekend (Sat–Sun)
            </button>
          </div>

          {/* Lunch / Dinner Toggle */}
          <div className="flex gap-2 px-4 pt-3 pb-2">
            <button
              type="button"
              onClick={() => setActiveSession("Lunch")}
              className={cn(
                "flex-1 rounded-lg py-2 text-xs font-semibold border transition-all",
                activeSession === "Lunch"
                  ? "bg-[#FFE8E0] border-[#EE5735] text-[#EE5735]"
                  : "bg-gray-50 border-gray-200 text-[#6B7280]"
              )}
            >
              ☀️ Lunch Buffet
            </button>
            <button
              type="button"
              onClick={() => setActiveSession("Dinner")}
              className={cn(
                "flex-1 rounded-lg py-2 text-xs font-semibold border transition-all",
                activeSession === "Dinner"
                  ? "bg-[#FFE8E0] border-[#EE5735] text-[#EE5735]"
                  : "bg-gray-50 border-gray-200 text-[#6B7280]"
              )}
            >
              🌙 Dinner Buffet
            </button>
          </div>

          {/* Timing */}
          <div className="px-4 pb-3">
            <p className="text-xs text-[#6B7280]">
              Timing: <span className="font-semibold text-[#111827]">{slot?.timing}</span>
            </p>
          </div>

          {/* Price Cards */}
          <div className="grid grid-cols-2 gap-3 px-4 pb-4">
            <div className="rounded-xl border border-green-200 bg-[#F0FDF4] p-3 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white shadow-xs" />
                <span className="text-xs font-semibold text-green-700">Veg</span>
              </div>
              <div className="text-2xl font-bold text-[#111827]">₹{slot?.vegPrice}</div>
              <div className="text-[10px] text-[#6B7280] mt-0.5">per person + tax</div>
            </div>
            <div className="rounded-xl border border-red-200 bg-[#FFF5F5] p-3 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white shadow-xs" />
                <span className="text-xs font-semibold text-red-700">Non-Veg</span>
              </div>
              <div className="text-2xl font-bold text-[#111827]">₹{slot?.nonVegPrice}</div>
              <div className="text-[10px] text-[#6B7280] mt-0.5">per person + tax</div>
            </div>
          </div>

          {/* Kids note */}
          <div className="px-4 pb-3 text-center">
            <p className="text-[11px] text-[#6B7280]">
              👧 Kids (5–9 yrs): <span className="font-semibold text-[#EE5735]">₹{slot?.kidsPrice}</span> &nbsp;•&nbsp; Under 5 eat{" "}
              <span className="font-bold text-green-600">FREE</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="px-4 pb-4">
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="w-full bg-[#EE5735] hover:bg-[#d94726] text-white rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <span>Book a Table at {selectedCity} Rate</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          7. OUR OFFERINGS (Barbeque Nation 2-Panel Exact)
          ══════════════════════════════════════════════ */}
      <div className="py-3 px-4">
        <h2 className="text-[17px] font-semibold font-poppins text-[#111827] mb-3">
          Our Offerings
        </h2>
        <div className="space-y-3">
          {/* Panel 1: Dine Out */}
          <div className="rounded-xl bg-[#FFE8E0] p-5 flex flex-col justify-between min-h-[140px]">
            <div>
              <p className="text-[11px] font-semibold font-inter uppercase tracking-widest text-[#EE5735] mb-1">
                FLAMORA GRILL
              </p>
              <h3 className="text-[22px] font-semibold font-poppins text-[#111827] leading-tight">
                Dine Out With Flamora
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="mt-4 w-fit flex items-center gap-2 bg-[#EE5735] text-white px-4 py-2 rounded-lg text-sm font-semibold active:scale-95 transition-transform"
            >
              Book a table
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Panel 2: Catering */}
          <div className="rounded-xl bg-[#E1FFBA] p-5 flex flex-col justify-between min-h-[140px]">
            <div>
              <p className="text-[11px] font-semibold font-inter uppercase tracking-widest text-green-800 mb-1">
                FLAMORA CATERING
              </p>
              <h3 className="text-[22px] font-semibold font-poppins text-[#111827] leading-tight">
                Catering By Flamora
              </h3>
            </div>
            <Link
              href="/catering"
              className="mt-4 w-fit flex items-center gap-2 bg-[#EE5735] text-white px-4 py-2 rounded-lg text-sm font-semibold active:scale-95 transition-transform"
            >
              Send Enquiry
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          8. TAKEAWAY SECTION (Barbeque Nation Exact)
          ══════════════════════════════════════════════ */}
      <div className="py-3 px-4">
        <h2 className="text-[17px] font-semibold font-poppins text-[#111827] mb-3">
          Takeaway
        </h2>
        <Link href="/menu">
          <div className="bg-[#FFCFC5] h-[140px] flex rounded-xl items-center justify-center mb-4 active:opacity-90 transition-opacity">
            <div className="text-center">
              <div className="text-5xl mb-1">📦</div>
              <p className="font-semibold text-[#EE5735] text-base">Flamora Express</p>
              <p className="text-xs text-[#111827]">Order Takeaway Online</p>
            </div>
          </div>
        </Link>
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: "🚫", label: "No Minimum\nOrder" },
            { icon: "🛡️", label: "Safety\nFirst" },
            { icon: "⚡", label: "Super Fast\nDelivery" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-xs leading-[14.4px] font-inter text-[#111827] font-normal whitespace-pre-line">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          9. OUR RESTAURANTS (Outlets in Bihar)
          ══════════════════════════════════════════════ */}
      <div className="py-4 px-4 pb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[17px] font-semibold font-poppins text-[#111827]">
            Our Restaurants
          </h2>
          <Link href="/locations" className="text-[#EE5735] text-sm font-semibold">
            View More
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {outletBuffetList.map((outlet) => (
            <div
              key={outlet.outletId}
              className="rounded-xl border border-gray-200 bg-gray-50 p-3"
            >
              <div className="text-xl mb-1">📍</div>
              <p className="text-xs font-semibold text-[#111827] line-clamp-1">
                {outlet.city}
              </p>
              <p className="text-[11px] text-[#6B7280] line-clamp-2 mt-0.5">
                {outlet.outletName}
              </p>
              <button
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="mt-2 text-[11px] font-bold text-[#EE5735]"
              >
                Book here →
              </button>
            </div>
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
