"use client";

import { useState } from "react";
import Link from "next/link";
import { MobileBookingDrawer } from "@/components/booking/MobileBookingDrawer";
import { ArrowRight, Flame, Star } from "lucide-react";
import { outletBuffetList } from "@/data/buffet";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────────────────
   DATA
──────────────────────────────────────────────────────────────────────────── */
const occasions = [
  { label: "Birthday", emoji: "🎂", bg: "bg-[#FFE4EC]", border: "border-pink-200" },
  { label: "Anniversary", emoji: "💍", bg: "bg-[#FFF3E0]", border: "border-orange-200" },
  { label: "Family", emoji: "👨‍👩‍👧", bg: "bg-[#E8F5E9]", border: "border-green-200" },
  { label: "Office Lunch", emoji: "💼", bg: "bg-[#E3F2FD]", border: "border-blue-200" },
  { label: "Date Night", emoji: "❤️", bg: "bg-[#FCE4EC]", border: "border-rose-200" },
];

const buffetHighlights = [
  {
    id: "grills",
    title: "Live Grill Starters",
    subtitle: "Signature Experience",
    desc: "Unlimited veg & non-veg grills served sizzling hot right at your table.",
    emoji: "🍢",
    iconBg: "bg-orange-100",
  },
  {
    id: "bigbuffet",
    title: "The Big Buffet",
    subtitle: "Big Feast. Small Bill.",
    desc: "30+ dishes, all-new sizzlers, biryanis, curries and more.",
    emoji: "🍛",
    iconBg: "bg-green-100",
  },
  {
    id: "maincourse",
    title: "Main Course Feast",
    subtitle: "Grand Buffet Experience",
    desc: "Indian curries, biryanis, fresh breads, and global favourites.",
    emoji: "🍜",
    iconBg: "bg-blue-100",
  },
  {
    id: "desserts",
    title: "Kulfi Shulfi Desserts",
    subtitle: "Grand Dessert Finale",
    desc: "Cakes, brownies, kulfis — start or end on a sweet note!",
    emoji: "🍦",
    iconBg: "bg-purple-100",
  },
];

const quickActions = [
  { id: "book", label: "Book Table", bg: "bg-[#FFF0E6]", emoji: "📅", border: "border-orange-200", isAction: true },
  { id: "happiness", label: "Happiness Cards", bg: "bg-[#EFFFDC]", emoji: "🎁", border: "border-green-200", href: "/offers" },
  { id: "catering", label: "Catering", bg: "bg-[#FFF8E6]", emoji: "🍽️", border: "border-amber-200", href: "/catering" },
  { id: "takeaway", label: "Takeaway", bg: "bg-[#E6F7FF]", emoji: "📦", border: "border-sky-200", href: "/menu" },
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
    /* pt-[56px] = header height so hero doesn't go behind fixed header */
    <div className="block lg:hidden bg-[#FAFAF8] min-h-screen text-[#1A1A1A] pt-[56px]">

      {/* ══════════════════════════════════════════════
          HERO — Full-bleed fire image with bold overlay
          ══════════════════════════════════════════════ */}
      <div className="relative w-full h-[260px] overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/images/hero-grill.jpg')" }}
        />
        {/* Rich gradient overlay — deep orange to crimson */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#7B1E00]/80 via-[#C94B2C]/30 to-[#FF6B1A]/10" />
        {/* Subtle top vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

        {/* Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1 bg-[#FF5722] text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg shadow-orange-900/30">
            <Flame className="h-3 w-3 fill-white" />
            Live Grill · Unlimited Buffet
          </span>
        </div>

        {/* Rating badge top right */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm text-[#1A1A1A] text-[11px] font-bold px-2.5 py-1 rounded-full shadow">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            4.8
          </div>
        </div>

        {/* Hero Text */}
        <div className="absolute bottom-5 left-4 right-4">
          <p className="text-[#FFD0A0] text-[11px] font-semibold uppercase tracking-[0.15em] mb-1">
            Bihar&apos;s #1 Grill Restaurant
          </p>
          <h1 className="text-white font-extrabold text-[26px] leading-[1.15] tracking-tight drop-shadow-md">
            Where Fire<br />Meets Flavor 🔥
          </h1>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="mt-3 inline-flex items-center gap-2 bg-[#FF5722] hover:bg-[#E64A19] text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-orange-900/30 active:scale-95 transition-all"
          >
            Book a Table
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          QUICK STATS STRIP
          ══════════════════════════════════════════════ */}
      <div className="bg-gradient-to-r from-[#FF5722] to-[#FF8C00] text-white px-4 py-3 flex items-center justify-around text-center">
        <div>
          <div className="text-base font-extrabold leading-none">30+</div>
          <div className="text-[10px] font-medium opacity-90 mt-0.5">Dishes</div>
        </div>
        <div className="w-px h-6 bg-white/30" />
        <div>
          <div className="text-base font-extrabold leading-none">4</div>
          <div className="text-[10px] font-medium opacity-90 mt-0.5">Outlets</div>
        </div>
        <div className="w-px h-6 bg-white/30" />
        <div>
          <div className="text-base font-extrabold leading-none">₹499</div>
          <div className="text-[10px] font-medium opacity-90 mt-0.5">Starting</div>
        </div>
        <div className="w-px h-6 bg-white/30" />
        <div>
          <div className="text-base font-extrabold leading-none">100%</div>
          <div className="text-[10px] font-medium opacity-90 mt-0.5">Live Grill</div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          QUICK ACTION 4-GRID
          ══════════════════════════════════════════════ */}
      <div className="px-4 pt-5 pb-4">
        <div className="grid grid-cols-4 gap-2.5">
          {quickActions.map((item) => {
            const inner = (
              <div className={cn(
                "flex flex-col items-center justify-center rounded-2xl p-3 active:scale-95 transition-transform border",
                item.bg, item.border
              )}>
                <span className="text-2xl mb-1.5">{item.emoji}</span>
                <span className="text-[10px] font-semibold text-[#1A1A1A] text-center leading-tight">{item.label}</span>
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
          CELEBRATE AN OCCASION
          ══════════════════════════════════════════════ */}
      <div className="px-4 pb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[15px] font-bold text-[#1A1A1A]">Celebrate an occasion?</h2>
          <span className="text-[11px] text-[#FF5722] font-semibold">Swipe →</span>
        </div>
        <div className="flex gap-2.5 overflow-x-auto pb-1 no-scrollbar">
          {occasions.map((occ) => (
            <button
              key={occ.label}
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className={cn(
                "flex-shrink-0 cursor-pointer rounded-2xl overflow-hidden border p-1.5 active:scale-95 transition-transform",
                occ.bg, occ.border
              )}
            >
              <div className="w-[80px] h-[62px] rounded-xl overflow-hidden mb-1.5 flex items-center justify-center text-4xl">
                {occ.emoji}
              </div>
              <p className="text-[11px] text-[#1A1A1A] text-center font-semibold">{occ.label}</p>
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          TODAY'S BUFFET HIGHLIGHTS
          ══════════════════════════════════════════════ */}
      <div className="px-4 pb-5">
        <h2 className="text-[15px] font-bold text-[#1A1A1A] mb-3">Today&apos;s buffet highlights</h2>
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm divide-y divide-gray-50">
          {buffetHighlights.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="flex gap-3 w-full text-left px-3.5 py-3 hover:bg-orange-50/50 transition-colors"
            >
              <div className={cn("w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl", item.iconBg)}>
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0 py-0.5">
                <h3 className="text-[13px] font-bold text-[#1A1A1A] mb-0.5">{item.title}</h3>
                <p className="text-[11px] text-[#6B7280] line-clamp-1 mb-1">{item.desc}</p>
                <span className="text-[10px] font-semibold text-[#FF5722] bg-orange-50 px-2 py-0.5 rounded-full">
                  {item.subtitle}
                </span>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-300 self-center shrink-0" />
            </button>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          BUFFET PRICE CARD — Vibrant gradient header
          ══════════════════════════════════════════════ */}
      <div className="px-4 pb-5">
        <div className="rounded-2xl overflow-hidden shadow-md border border-orange-100">
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-[#FF5722] to-[#FF8C00] px-4 py-3.5 flex items-center justify-between">
            <div>
              <h2 className="text-[15px] font-bold text-white">Today&apos;s Buffet Price</h2>
              <p className="text-[11px] text-white/80 mt-0.5">Unlimited food · Live grill at your table</p>
            </div>
            {/* City selector */}
            <div className="flex items-center gap-1 rounded-xl bg-white/20 backdrop-blur-sm px-2.5 py-1.5">
              <span className="text-sm">📍</span>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-transparent font-bold text-white text-[11px] focus:outline-none cursor-pointer [&>option]:bg-[#FF5722] [&>option]:text-white"
              >
                {outletBuffetList.map((o) => (
                  <option key={o.outletId} value={o.city}>{o.city}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="bg-white">
            {/* Weekday / Weekend Toggle */}
            <div className="flex border-b border-gray-100">
              {(["Weekday", "Weekend"] as const).map((dt) => (
                <button
                  key={dt}
                  onClick={() => setActiveDayType(dt)}
                  className={cn(
                    "flex-1 py-2.5 text-xs font-bold transition-colors",
                    activeDayType === dt
                      ? "bg-[#FF5722] text-white"
                      : "bg-gray-50 text-[#6B7280] hover:bg-gray-100"
                  )}
                >
                  {dt === "Weekday" ? "Mon – Fri" : "Sat – Sun"}
                </button>
              ))}
            </div>

            {/* Lunch / Dinner Toggle */}
            <div className="flex gap-2 px-4 pt-3.5 pb-2">
              {(["Lunch", "Dinner"] as const).map((sess) => (
                <button
                  key={sess}
                  onClick={() => setActiveSession(sess)}
                  className={cn(
                    "flex-1 rounded-xl py-2 text-xs font-bold border-2 transition-all",
                    activeSession === sess
                      ? "bg-orange-50 border-[#FF5722] text-[#FF5722]"
                      : "bg-white border-gray-200 text-[#9CA3AF]"
                  )}
                >
                  {sess === "Lunch" ? "☀️ Lunch" : "🌙 Dinner"}
                </button>
              ))}
            </div>

            {/* Timing */}
            <div className="px-4 pb-2">
              <p className="text-[11px] text-[#6B7280]">
                ⏰ <span className="font-semibold text-[#374151]">{slot?.timing}</span>
              </p>
            </div>

            {/* Price Cards */}
            <div className="grid grid-cols-2 gap-3 px-4 pb-4">
              <div className="rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-3.5 text-center shadow-sm">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-sm" />
                  <span className="text-xs font-bold text-green-700">Pure Veg</span>
                </div>
                <div className="text-[28px] font-black text-[#1A1A1A] leading-none">₹{slot?.vegPrice}</div>
                <div className="text-[10px] text-[#6B7280] mt-1">per person + taxes</div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 p-3.5 text-center shadow-sm">
                <div className="flex items-center justify-center gap-1.5 mb-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-sm" />
                  <span className="text-xs font-bold text-red-700">Non-Veg</span>
                </div>
                <div className="text-[28px] font-black text-[#1A1A1A] leading-none">₹{slot?.nonVegPrice}</div>
                <div className="text-[10px] text-[#6B7280] mt-1">per person + taxes</div>
              </div>
            </div>

            {/* Kids note */}
            <div className="mx-4 mb-3 bg-amber-50 rounded-xl px-3 py-2 text-center border border-amber-100">
              <p className="text-[11px] text-[#6B7280]">
                👧 Kids (5–9 yrs): <span className="font-bold text-[#FF5722]">₹{slot?.kidsPrice}</span>
                &nbsp;·&nbsp; Under 5 eat <span className="font-bold text-green-600">FREE</span>
              </p>
            </div>

            {/* CTA */}
            <div className="px-4 pb-4">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="w-full bg-gradient-to-r from-[#FF5722] to-[#FF8C00] text-white rounded-2xl py-3.5 text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-orange-200 active:scale-95 transition-all"
              >
                Book a Table at This Rate
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          OUR OFFERINGS — Vibrant pastel panels
          ══════════════════════════════════════════════ */}
      <div className="px-4 pb-5">
        <h2 className="text-[17px] font-bold text-[#1A1A1A] mb-3">Our Offerings</h2>
        <div className="space-y-3">
          {/* Dine Out panel */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#FF5722] to-[#FF8C00] p-5 shadow-md">
            <div className="absolute -right-4 -top-4 text-[80px] opacity-10">🍢</div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/70 mb-1">Flamora Grill</p>
            <h3 className="text-[22px] font-extrabold text-white leading-tight">Dine Out<br />With Flamora</h3>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="mt-4 inline-flex items-center gap-2 bg-white text-[#FF5722] px-4 py-2 rounded-full text-sm font-bold active:scale-95 transition-transform shadow"
            >
              Book a table <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Catering panel */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2E7D32] to-[#66BB6A] p-5 shadow-md">
            <div className="absolute -right-4 -top-4 text-[80px] opacity-10">🍽️</div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-white/70 mb-1">Flamora Catering</p>
            <h3 className="text-[22px] font-extrabold text-white leading-tight">Catering<br />By Flamora</h3>
            <Link
              href="/catering"
              className="mt-4 inline-flex items-center gap-2 bg-white text-[#2E7D32] px-4 py-2 rounded-full text-sm font-bold active:scale-95 transition-transform shadow"
            >
              Send Enquiry <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          TAKEAWAY
          ══════════════════════════════════════════════ */}
      <div className="px-4 pb-5">
        <h2 className="text-[17px] font-bold text-[#1A1A1A] mb-3">Takeaway</h2>
        <Link href="/menu">
          <div className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] h-[130px] flex rounded-2xl items-center justify-center mb-4 border border-orange-100 active:opacity-90 transition-opacity shadow-sm">
            <div className="text-center">
              <div className="text-5xl mb-2">📦</div>
              <p className="font-bold text-[#E64A19] text-sm">Flamora Express</p>
              <p className="text-xs text-[#6B7280]">Order Takeaway Online</p>
            </div>
          </div>
        </Link>
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: "🚫", label: "No Minimum\nOrder", bg: "bg-blue-50", border: "border-blue-100" },
            { icon: "🛡️", label: "Safety\nFirst", bg: "bg-green-50", border: "border-green-100" },
            { icon: "⚡", label: "Super Fast\nDelivery", bg: "bg-amber-50", border: "border-amber-100" },
          ].map((item) => (
            <div key={item.label} className={cn("text-center rounded-2xl p-3 border", item.bg, item.border)}>
              <div className="text-2xl mb-1.5">{item.icon}</div>
              <p className="text-[11px] text-[#374151] font-semibold whitespace-pre-line leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          OUR OUTLETS
          ══════════════════════════════════════════════ */}
      <div className="px-4 pb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[17px] font-bold text-[#1A1A1A]">Our Outlets</h2>
          <Link href="/locations" className="text-[#FF5722] text-xs font-bold">View all →</Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {outletBuffetList.map((outlet) => (
            <button
              key={outlet.outletId}
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="rounded-2xl border border-gray-100 bg-white p-3.5 text-left shadow-sm hover:shadow-md transition-shadow active:scale-95"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-base">📍</div>
                <p className="text-xs font-bold text-[#1A1A1A]">{outlet.city}</p>
              </div>
              <p className="text-[10px] text-[#6B7280] line-clamp-2 mb-2">{outlet.outletName}</p>
              <span className="text-[10px] font-bold text-[#FF5722]">Book here →</span>
            </button>
          ))}
        </div>
      </div>

      {/* Booking Drawer */}
      <MobileBookingDrawer isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}
