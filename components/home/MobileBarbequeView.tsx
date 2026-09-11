"use client";

import { useState } from "react";
import Link from "next/link";
import { MobileBookingDrawer } from "@/components/booking/MobileBookingDrawer";
import { ArrowRight, Flame, Star, MapPin, ChevronRight, Award, ShieldCheck, Zap } from "lucide-react";
import { outletBuffetList } from "@/data/buffet";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────────────────
   LUXURY DINING DATA
──────────────────────────────────────────────────────────────────────────── */
const occasions = [
  { label: "Birthday", emoji: "🎂", bg: "bg-[#FFF5F5]", border: "border-[#FEE2E2]" },
  { label: "Anniversary", emoji: "💍", bg: "bg-[#FFFBEB]", border: "border-[#FEF3C7]" },
  { label: "Family", emoji: "👨‍👩‍👧", bg: "bg-[#F0FDF4]", border: "border-[#DCFCE7]" },
  { label: "Office Lunch", emoji: "💼", bg: "bg-[#EFF6FF]", border: "border-[#DBEAFE]" },
  { label: "Date Night", emoji: "❤️", bg: "bg-[#FDF2F8]", border: "border-[#FCE7F3]" },
];

const buffetHighlights = [
  {
    id: "grills",
    title: "Live Grill Starters",
    subtitle: "Signature Experience",
    desc: "Unlimited veg & non-veg grills served sizzling hot right at your table.",
    emoji: "🍢",
    iconBg: "bg-[#FEF2F2]",
    badgeColor: "text-[#991B1B] bg-[#FEF2F2]",
  },
  {
    id: "bigbuffet",
    title: "The Big Buffet",
    subtitle: "Big Feast. Small Bill.",
    desc: "30+ dishes, all-new sizzlers, biryanis, curries and more.",
    emoji: "🍛",
    iconBg: "bg-[#ECFDF5]",
    badgeColor: "text-[#065F46] bg-[#ECFDF5]",
  },
  {
    id: "maincourse",
    title: "Main Course Feast",
    subtitle: "Grand Buffet Experience",
    desc: "Indian curries, biryanis, fresh breads, and global favourites.",
    emoji: "🍜",
    iconBg: "bg-[#EFF6FF]",
    badgeColor: "text-[#1E40AF] bg-[#EFF6FF]",
  },
  {
    id: "desserts",
    title: "Kulfi Shulfi Desserts",
    subtitle: "Grand Dessert Finale",
    desc: "Cakes, brownies, kulfis — start or end on a sweet note!",
    emoji: "🍦",
    iconBg: "bg-[#F5F3FF]",
    badgeColor: "text-[#6B21A8] bg-[#F5F3FF]",
  },
];

const quickActions = [
  { id: "book", label: "Book Table", bg: "bg-[#FFF5F5]", emoji: "📅", border: "border-[#FEE2E2]", isAction: true },
  { id: "happiness", label: "Happiness Cards", bg: "bg-[#ECFDF5]", emoji: "🎁", border: "border-[#A7F3D0]", href: "/offers" },
  { id: "catering", label: "Catering", bg: "bg-[#FFFBEB]", emoji: "🍽️", border: "border-[#FDE68A]", href: "/catering" },
  { id: "takeaway", label: "Takeaway", bg: "bg-[#EFF6FF]", emoji: "📦", border: "border-[#BFDBFE]", href: "/menu" },
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
    /* pt-[56px] ensures exact alignment beneath header without overlap */
    <div className="block lg:hidden bg-[#FAF8F5] min-h-screen text-[#1C1917] font-sans pt-[56px]">

      {/* ══════════════════════════════════════════════
          HERO — Bespoke Luxury Smoked Amber & Charcoal Banner
          ══════════════════════════════════════════════ */}
      <div className="relative w-full h-[270px] overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/images/hero-grill.jpg')" }}
        />
        {/* Rich Luxury Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#7F1D1D]/50 to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#991B1B] to-[#D97706] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
            <Flame className="h-3.5 w-3.5 fill-white" />
            Live Grill & Buffet
          </span>

          <div className="flex items-center gap-1 bg-[#12100E]/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
            <Star className="h-3 w-3 fill-[#F59E0B] text-[#F59E0B]" />
            4.9 / 5
          </div>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-5 left-4 right-4">
          <p className="text-[#FDE68A] text-[11px] font-bold uppercase tracking-[0.18em] mb-1 font-heading">
            Bihar&apos;s Premier BBQ Destination
          </p>
          <h1 className="text-white font-heading font-extrabold text-[28px] leading-[1.12] tracking-tight drop-shadow-md">
            Sizzle &amp; Feast <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FDE68A] to-[#F59E0B]">
              At Your Table
            </span>
          </h1>
          <button
            type="button"
            onClick={() => setIsBookingOpen(true)}
            className="mt-3.5 inline-flex items-center gap-2 bg-gradient-to-r from-[#991B1B] via-[#B45309] to-[#D97706] text-white text-xs font-bold px-6 py-2.5 rounded-full shadow-[0_4px_16px_rgba(153,27,27,0.4)] active:scale-95 transition-all uppercase tracking-wide"
          >
            Book a Table
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          LUXURY HIGHLIGHT STRIP
          ══════════════════════════════════════════════ */}
      <div className="bg-[#12100E] border-y border-[#26201B] text-white px-4 py-3 flex items-center justify-around text-center">
        <div>
          <div className="text-sm font-extrabold font-heading text-[#FDE68A] leading-none">30+</div>
          <div className="text-[10px] font-medium text-[#A8A29E] mt-0.5">Buffet Items</div>
        </div>
        <div className="w-px h-5 bg-[#332B25]" />
        <div>
          <div className="text-sm font-extrabold font-heading text-[#FDE68A] leading-none">4 Outlets</div>
          <div className="text-[10px] font-medium text-[#A8A29E] mt-0.5">Across Bihar</div>
        </div>
        <div className="w-px h-5 bg-[#332B25]" />
        <div>
          <div className="text-sm font-extrabold font-heading text-[#FDE68A] leading-none">₹499</div>
          <div className="text-[10px] font-medium text-[#A8A29E] mt-0.5">Starts From</div>
        </div>
        <div className="w-px h-5 bg-[#332B25]" />
        <div>
          <div className="text-sm font-extrabold font-heading text-[#FDE68A] leading-none">100%</div>
          <div className="text-[10px] font-medium text-[#A8A29E] mt-0.5">Live Charcoal</div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          QUICK SERVICE 4-GRID (Barbeque Nation Exact)
          ══════════════════════════════════════════════ */}
      <div className="px-4 pt-5 pb-3">
        <div className="grid grid-cols-4 gap-2.5">
          {quickActions.map((item) => {
            const inner = (
              <div className={cn(
                "flex flex-col items-center justify-center rounded-2xl p-2.5 active:scale-95 transition-transform border shadow-xs",
                item.bg, item.border
              )}>
                <span className="text-2xl mb-1">{item.emoji}</span>
                <span className="text-[11px] font-bold text-[#1C1917] text-center leading-tight">{item.label}</span>
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
          CELEBRATE AN OCCASION? (Exact Barbeque Nation)
          ══════════════════════════════════════════════ */}
      <div className="px-4 py-3">
        <h2 className="text-[15px] font-bold font-heading text-[#1C1917] mb-2.5">
          Celebrate an occasion?
        </h2>
        <div className="flex gap-2.5 overflow-x-auto pb-1 no-scrollbar -mx-1 px-1">
          {occasions.map((occ) => (
            <button
              key={occ.label}
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className={cn(
                "flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden border p-1.5 active:scale-95 transition-transform shadow-xs",
                occ.bg, occ.border
              )}
            >
              <div className="w-[84px] h-[64px] rounded-xl overflow-hidden mb-1.5 flex items-center justify-center text-3xl bg-white/70">
                {occ.emoji}
              </div>
              <p className="text-[11px] text-[#1C1917] text-center font-semibold">{occ.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          TODAY'S BUFFET HIGHLIGHTS (Exact Barbeque Nation Card)
          ══════════════════════════════════════════════ */}
      <div className="px-4 py-3">
        <h2 className="text-[15px] font-bold font-heading text-[#1C1917] mb-2.5">
          Today&apos;s buffet highlights
        </h2>
        <div className="bg-white rounded-2xl border border-[#E8E4DC] p-3 shadow-xs">
          <div className="divide-y divide-[#F3EFEA]">
            {buffetHighlights.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className={cn(
                  "flex gap-3 w-full text-left py-3 first:pt-1 last:pb-1 hover:bg-[#FAF8F5] transition-colors rounded-xl px-1",
                )}
              >
                <div className={cn("w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl shadow-xs", item.iconBg)}>
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0 py-0.5">
                  <h3 className="text-sm font-bold font-heading text-[#1C1917] mb-0.5">{item.title}</h3>
                  <p className="text-xs text-[#78716C] line-clamp-1 mb-1">{item.desc}</p>
                  <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full inline-block", item.badgeColor)}>
                    {item.subtitle}
                  </span>
                </div>
                <ChevronRight className="h-4 w-4 text-[#A8A29E] self-center shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          TODAY'S BUFFET PRICE (Interactive Outlet Pricing Card)
          ══════════════════════════════════════════════ */}
      <div className="px-4 py-3">
        <div className="rounded-2xl overflow-hidden border border-[#E8E4DC] bg-white shadow-xs">
          {/* Smoked Dark Header */}
          <div className="bg-[#12100E] px-4 py-3.5 flex items-center justify-between border-b border-[#26201B]">
            <div>
              <h2 className="text-[15px] font-bold font-heading text-white">Today&apos;s Buffet Price</h2>
              <p className="text-[11px] text-[#A8A29E] mt-0.5">Unlimited food · Live table grills</p>
            </div>

            {/* City Selector Dropdown */}
            <div className="flex items-center gap-1.5 rounded-xl bg-white/10 border border-white/15 px-2.5 py-1 text-xs">
              <MapPin className="h-3.5 w-3.5 text-[#F59E0B] shrink-0" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-transparent font-bold text-white text-xs focus:outline-none cursor-pointer [&>option]:bg-[#12100E] [&>option]:text-white"
              >
                {outletBuffetList.map((o) => (
                  <option key={o.outletId} value={o.city}>{o.city}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="p-4">
            {/* Weekday / Weekend Toggle */}
            <div className="flex rounded-xl bg-[#F5F3EF] p-1 mb-3">
              {(["Weekday", "Weekend"] as const).map((dt) => (
                <button
                  key={dt}
                  type="button"
                  onClick={() => setActiveDayType(dt)}
                  className={cn(
                    "flex-1 py-2 text-xs font-bold rounded-lg transition-all",
                    activeDayType === dt
                      ? "bg-[#991B1B] text-white shadow-xs"
                      : "text-[#78716C] hover:text-[#1C1917]"
                  )}
                >
                  {dt === "Weekday" ? "Mon – Fri" : "Sat – Sun"}
                </button>
              ))}
            </div>

            {/* Lunch / Dinner Toggle */}
            <div className="flex gap-2 mb-3">
              {(["Lunch", "Dinner"] as const).map((sess) => (
                <button
                  key={sess}
                  type="button"
                  onClick={() => setActiveSession(sess)}
                  className={cn(
                    "flex-1 rounded-xl py-2 text-xs font-bold border-2 transition-all",
                    activeSession === sess
                      ? "bg-[#FEF2F2] border-[#991B1B] text-[#991B1B]"
                      : "bg-white border-[#E7E3DC] text-[#78716C]"
                  )}
                >
                  {sess === "Lunch" ? "☀️ Lunch Buffet" : "🌙 Dinner Buffet"}
                </button>
              ))}
            </div>

            {/* Timing */}
            <div className="mb-3 text-center">
              <p className="text-xs text-[#78716C]">
                Serving Timing: <span className="font-bold text-[#1C1917]">{slot?.timing}</span>
              </p>
            </div>

            {/* Veg / Non-Veg Price Cards */}
            <div className="grid grid-cols-2 gap-3 mb-3">
              {/* Veg Box */}
              <div className="rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] p-3 text-center">
                <div className="inline-flex items-center gap-1.5 bg-[#DCFCE7] text-[#15803D] px-2 py-0.5 rounded-full text-[10px] font-bold mb-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
                  Pure Veg
                </div>
                <div className="text-2xl font-extrabold font-heading text-[#1C1917]">₹{slot?.vegPrice}</div>
                <div className="text-[10px] text-[#78716C] mt-0.5">per guest + taxes</div>
              </div>

              {/* Non-Veg Box */}
              <div className="rounded-2xl bg-[#FEF2F2] border border-[#FECACA] p-3 text-center">
                <div className="inline-flex items-center gap-1.5 bg-[#FEE2E2] text-[#B91C1C] px-2 py-0.5 rounded-full text-[10px] font-bold mb-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#DC2626]" />
                  Non-Veg
                </div>
                <div className="text-2xl font-extrabold font-heading text-[#1C1917]">₹{slot?.nonVegPrice}</div>
                <div className="text-[10px] text-[#78716C] mt-0.5">per guest + taxes</div>
              </div>
            </div>

            {/* Kids pricing note */}
            <div className="bg-[#FEF3C7]/60 rounded-xl px-3 py-1.5 text-center border border-[#FDE68A] mb-3">
              <p className="text-[11px] text-[#92400E]">
                👧 Kids (5–9 yrs): <span className="font-bold">₹{slot?.kidsPrice}</span> · Under 5 eat <span className="font-bold text-[#16A34A]">FREE</span>
              </p>
            </div>

            {/* Book Button */}
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="w-full bg-gradient-to-r from-[#991B1B] via-[#B45309] to-[#D97706] text-white rounded-xl py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all"
            >
              Book Table at {selectedCity} Rate
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          OUR OFFERINGS (2-Panel Barbeque Nation Style)
          ══════════════════════════════════════════════ */}
      <div className="px-4 py-3">
        <h2 className="text-[17px] font-bold font-heading text-[#1C1917] mb-3">Our Offerings</h2>
        <div className="space-y-3">
          {/* Panel 1: Dine Out */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#7F1D1D] via-[#991B1B] to-[#B45309] p-5 text-white shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#FDE68A] mb-1 font-heading">
              FLAMORA BUFFET &amp; GRILL
            </p>
            <h3 className="text-xl font-extrabold font-heading text-white leading-tight">
              Dine Out With Flamora
            </h3>
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="mt-3.5 inline-flex items-center gap-2 bg-white text-[#991B1B] px-4 py-2 rounded-xl text-xs font-bold active:scale-95 transition-transform shadow-xs"
            >
              Book a table
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Panel 2: Catering */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#14532D] via-[#166534] to-[#15803D] p-5 text-white shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#A7F3D0] mb-1 font-heading">
              ATMOSFIRE BY FLAMORA
            </p>
            <h3 className="text-xl font-extrabold font-heading text-white leading-tight">
              Outdoor Catering Service
            </h3>
            <Link
              href="/catering"
              className="mt-3.5 inline-flex items-center gap-2 bg-white text-[#14532D] px-4 py-2 rounded-xl text-xs font-bold active:scale-95 transition-transform shadow-xs"
            >
              Send Enquiry
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          TAKEAWAY SECTION
          ══════════════════════════════════════════════ */}
      <div className="px-4 py-3">
        <h2 className="text-[17px] font-bold font-heading text-[#1C1917] mb-3">Takeaway</h2>
        <Link href="/menu">
          <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FFFBEB] p-4 rounded-2xl border border-[#FECACA] mb-3 active:opacity-90 transition-opacity flex items-center justify-between shadow-xs">
            <div>
              <span className="text-[10px] font-bold text-[#991B1B] uppercase tracking-wider bg-[#FEE2E2] px-2 py-0.5 rounded-full">
                FLAMORA EXPRESS
              </span>
              <h4 className="text-base font-bold font-heading text-[#1C1917] mt-1">Barbeque Box Delivery</h4>
              <p className="text-xs text-[#78716C] mt-0.5">Order 5 Grills, Biryani &amp; Kulfi at home</p>
            </div>
            <div className="text-4xl shrink-0 ml-2">📦</div>
          </div>
        </Link>

        {/* 3 Trust pillars */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-white rounded-xl p-2.5 border border-[#E8E4DC] shadow-xs">
            <Zap className="h-5 w-5 text-[#D97706] mx-auto mb-1" />
            <p className="text-[11px] font-semibold text-[#1C1917] leading-tight">No Minimum Order</p>
          </div>
          <div className="bg-white rounded-xl p-2.5 border border-[#E8E4DC] shadow-xs">
            <ShieldCheck className="h-5 w-5 text-[#16A34A] mx-auto mb-1" />
            <p className="text-[11px] font-semibold text-[#1C1917] leading-tight">Hygiene Standard</p>
          </div>
          <div className="bg-white rounded-xl p-2.5 border border-[#E8E4DC] shadow-xs">
            <Award className="h-5 w-5 text-[#2563EB] mx-auto mb-1" />
            <p className="text-[11px] font-semibold text-[#1C1917] leading-tight">Super Delivery</p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          OUR RESTAURANTS IN BIHAR
          ══════════════════════════════════════════════ */}
      <div className="px-4 py-4 pb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[17px] font-bold font-heading text-[#1C1917]">Our Restaurants</h2>
          <Link href="/locations" className="text-xs font-bold text-[#991B1B]">View all →</Link>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {outletBuffetList.map((outlet) => (
            <button
              key={outlet.outletId}
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="rounded-2xl border border-[#E8E4DC] bg-white p-3 text-left shadow-xs hover:border-[#991B1B] transition-colors active:scale-95"
            >
              <div className="flex items-center gap-1.5 mb-1">
                <MapPin className="h-3.5 w-3.5 text-[#991B1B] shrink-0" />
                <p className="text-xs font-bold font-heading text-[#1C1917]">{outlet.city}</p>
              </div>
              <p className="text-[10px] text-[#78716C] line-clamp-1 mb-2">{outlet.outletName}</p>
              <span className="text-[10px] font-bold text-[#991B1B]">Reserve table →</span>
            </button>
          ))}
        </div>
      </div>

      {/* Booking Drawer */}
      <MobileBookingDrawer isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
