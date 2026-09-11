"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MobileBookingDrawer } from "@/components/booking/MobileBookingDrawer";
import { ChevronDown, ArrowRight } from "lucide-react";
import { outletBuffetList } from "@/data/buffet";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────────────────
   DATA
──────────────────────────────────────────────────────────────────────────── */
const occasions = [
  { label: "Birthday", emoji: "🎂", bg: "bg-[#FFE4EC]" },
  { label: "Anniversary", emoji: "💍", bg: "bg-[#FFF0E0]" },
  { label: "Family", emoji: "👨‍👩‍👧", bg: "bg-[#E8F5E9]" },
  { label: "Office Lunch", emoji: "💼", bg: "bg-[#E3F2FD]" },
  { label: "Date Night", emoji: "❤️", bg: "bg-[#FCE4EC]" },
];

const buffetHighlights = [
  {
    id: "grills",
    title: "Live Grill Starters",
    subtitle: "Signature Experience",
    desc: "Unlimited veg & non-veg grills served sizzling hot right at your table.",
    emoji: "🍢",
    color: "bg-[#FFF3E0]",
  },
  {
    id: "bigbuffet",
    title: "The Big Buffet",
    subtitle: "Big Feast. Small Bill.",
    desc: "30+ dishes, all-new sizzlers, biryanis, curries and more.",
    emoji: "🍛",
    color: "bg-[#E8F5E9]",
  },
  {
    id: "maincourse",
    title: "Main Course Feast",
    subtitle: "Grand Buffet Experience",
    desc: "Indian curries, biryanis, fresh breads, and global favourites.",
    emoji: "🍜",
    color: "bg-[#E3F2FD]",
  },
  {
    id: "desserts",
    title: "Kulfi Shulfi Desserts",
    subtitle: "Grand Dessert Finale",
    desc: "Cakes, brownies, kulfis — start or end on a sweet note!",
    emoji: "🍦",
    color: "bg-[#F3E5F5]",
  },
];

const quickActions = [
  {
    id: "book",
    label: "Book a table",
    bg: "bg-[#FFE8E0]",
    emoji: "📅",
    isAction: true,
  },
  {
    id: "happiness",
    label: "Happiness Cards",
    bg: "bg-[#E1FFBA]",
    emoji: "🎁",
    href: "/offers",
  },
  {
    id: "catering",
    label: "Catering",
    bg: "bg-[#FFE8C5]",
    emoji: "🍽️",
    href: "/catering",
  },
  {
    id: "takeaway",
    label: "Takeaway",
    bg: "bg-[#DBF8FF]",
    emoji: "📦",
    href: "/menu",
  },
];

/* ────────────────────────────────────────────────────────────────────────────
   COMPONENT
──────────────────────────────────────────────────────────────────────────── */
export function MobileBarbequeView() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Patna");

  const [activeSession, setActiveSession] = useState<"Lunch" | "Dinner">("Dinner");
  const [activeDayType, setActiveDayType] = useState<"Weekday" | "Weekend">("Weekday");

  const currentOutlet =
    outletBuffetList.find((o) => o.city === selectedCity) || outletBuffetList[0];

  const pricingGroup = currentOutlet.pricing.find((p) =>
    activeDayType === "Weekday"
      ? p.dayType.includes("Weekday")
      : p.dayType.includes("Weekend")
  );
  const slot = pricingGroup?.slots.find((s) => s.session === activeSession);

  return (
    <div className="block lg:hidden bg-white min-h-screen text-[#111827]">
      {/* ── HERO IMAGE BANNER ── */}
      <div className="relative w-full h-52 overflow-hidden rounded-b-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-grill.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Hero Text Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white/90 text-xs font-semibold uppercase tracking-widest mb-1">
            🔥 Live Grill & Unlimited Buffet
          </p>
          <h1 className="text-white font-bold text-xl leading-tight">
            Where Fire Meets Flavor
          </h1>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="mt-2.5 inline-flex items-center gap-2 bg-[#EE5735] text-white text-xs font-semibold px-4 py-2 rounded-lg active:scale-95 transition-transform"
          >
            Book a Table
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* ── CELEBRATE AN OCCASION ── */}
      <div className="pt-5 pb-3 px-4">
        <h2 className="text-[15px] font-semibold text-[#111827] mb-3">
          Celebrate an occasion?
        </h2>
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar -mx-1 px-1">
          {occasions.map((occ) => (
            <button
              key={occ.label}
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className={cn(
                "flex-shrink-0 cursor-pointer rounded-xl overflow-hidden border border-gray-200 p-1.5",
                occ.bg
              )}
            >
              <div className="w-[84px] h-[66px] rounded-lg overflow-hidden mb-1.5 flex items-center justify-center bg-white/60 text-4xl">
                {occ.emoji}
              </div>
              <p className="text-xs text-[#111827] text-center font-medium">
                {occ.label}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* ── TODAY'S BUFFET HIGHLIGHTS ── */}
      <div className="pt-2 pb-4 px-4">
        <h2 className="text-[15px] font-semibold text-[#111827] mb-3">
          Today&apos;s buffet highlights
        </h2>
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 p-3 shadow-sm">
          <div className="divide-y divide-gray-100">
            {buffetHighlights.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className={cn(
                  "flex gap-3 w-full text-left",
                  i > 0 ? "pt-3 pb-3" : "pb-3",
                  i === buffetHighlights.length - 1 ? "pb-0" : ""
                )}
              >
                <div
                  className={cn(
                    "w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center text-3xl",
                    item.color
                  )}
                >
                  {item.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-[#111827] mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] mb-1 line-clamp-2">
                    {item.desc}
                  </p>
                  <span className="text-[11px] text-[#6B7280]">{item.subtitle}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── QUICK ACTION 4-GRID (Book Table / Happiness Cards / Catering / Takeaway) ── */}
      <div className="px-4 pb-4">
        <h2 className="text-[15px] font-semibold text-[#111827] mb-3">
          Quick services
        </h2>
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map((item) => {
            const inner = (
              <div
                className={cn(
                  "flex flex-col items-center justify-center rounded-xl p-2 aspect-square active:scale-95 transition-transform border border-gray-100",
                  item.bg
                )}
              >
                <span className="text-3xl mb-1.5">{item.emoji}</span>
                <span className="text-[11px] font-medium text-[#111827] text-center leading-tight">
                  {item.label}
                </span>
              </div>
            );
            if (item.isAction) {
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full"
                >
                  {inner}
                </button>
              );
            }
            return (
              <Link key={item.id} href={item.href!}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── LIVE BUFFET PRICING ── */}
      <div className="px-4 pb-5">
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 pt-4 pb-3 border-b border-gray-100">
            <div>
              <h2 className="text-[15px] font-semibold text-[#111827]">
                Today&apos;s buffet price
              </h2>
              <p className="text-xs text-[#6B7280] mt-0.5">Unlimited food • Live grill at table</p>
            </div>
            {/* City Selector */}
            <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs">
              <span className="text-[#EE5735]">📍</span>
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
              onClick={() => setActiveSession("Lunch")}
              className={cn(
                "flex-1 rounded-lg py-2 text-xs font-semibold border transition-all",
                activeSession === "Lunch"
                  ? "bg-[#FFF3E0] border-[#EE5735] text-[#EE5735]"
                  : "bg-gray-50 border-gray-200 text-[#6B7280]"
              )}
            >
              ☀️ Lunch Buffet
            </button>
            <button
              onClick={() => setActiveSession("Dinner")}
              className={cn(
                "flex-1 rounded-lg py-2 text-xs font-semibold border transition-all",
                activeSession === "Dinner"
                  ? "bg-[#FFF3E0] border-[#EE5735] text-[#EE5735]"
                  : "bg-gray-50 border-gray-200 text-[#6B7280]"
              )}
            >
              🌙 Dinner Buffet
            </button>
          </div>

          {/* Timing */}
          <div className="px-4 pb-3">
            <p className="text-xs text-[#6B7280]">
              Timing:{" "}
              <span className="font-semibold text-[#111827]">{slot?.timing}</span>
            </p>
          </div>

          {/* Price Cards */}
          <div className="grid grid-cols-2 gap-3 px-4 pb-4">
            <div className="rounded-xl border border-green-200 bg-[#F0FDF4] p-3 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white shadow-sm" />
                <span className="text-xs font-semibold text-green-700">Veg</span>
              </div>
              <div className="text-2xl font-black text-[#111827]">₹{slot?.vegPrice}</div>
              <div className="text-[10px] text-[#6B7280] mt-0.5">per person + tax</div>
            </div>
            <div className="rounded-xl border border-red-200 bg-[#FFF5F5] p-3 text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white shadow-sm" />
                <span className="text-xs font-semibold text-red-700">Non-Veg</span>
              </div>
              <div className="text-2xl font-black text-[#111827]">₹{slot?.nonVegPrice}</div>
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

          {/* CTA */}
          <div className="px-4 pb-4">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="w-full bg-[#EE5735] text-white rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <span>Book a Table at This Rate</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ── OUR OFFERINGS (Barbeque Nation style 2-panel) ── */}
      <div className="px-4 pb-5">
        <h2 className="text-[17px] font-semibold text-[#111827] mb-3">
          Our Offerings
        </h2>
        <div className="space-y-3">
          {/* Dine Out */}
          <div className="rounded-xl bg-[#FFE8E0] p-5 flex flex-col justify-between min-h-[140px]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#EE5735] mb-1">
                Flamora Grill
              </p>
              <h3 className="text-[22px] font-bold text-[#111827] leading-tight">
                Dine Out With Flamora
              </h3>
            </div>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="mt-4 w-fit flex items-center gap-2 bg-[#EE5735] text-white px-4 py-2 rounded-lg text-sm font-semibold active:scale-95 transition-transform"
            >
              Book a table
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Catering */}
          <div className="rounded-xl bg-[#E1FFBA] p-5 flex flex-col justify-between min-h-[140px]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-green-700 mb-1">
                Flamora Catering
              </p>
              <h3 className="text-[22px] font-bold text-[#111827] leading-tight">
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

      {/* ── TAKEAWAY SECTION ── */}
      <div className="px-4 pb-5">
        <h2 className="text-[17px] font-semibold text-[#111827] mb-3">Takeaway</h2>
        <Link href="/menu">
          <div className="bg-[#FFCFC5] h-[140px] flex rounded-xl items-center justify-center mb-4 active:opacity-90 transition-opacity">
            <div className="text-center">
              <div className="text-5xl mb-2">📦</div>
              <p className="font-bold text-[#EE5735] text-sm">Flamora Express</p>
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
              <p className="text-xs text-[#374151] font-normal whitespace-pre-line leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── OUTLETS PLACEHOLDER ── */}
      <div className="px-4 pb-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[17px] font-semibold text-[#111827]">Our Outlets</h2>
          <Link href="/locations" className="text-[#EE5735] text-sm font-semibold">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {outletBuffetList.slice(0, 4).map((outlet) => (
            <div
              key={outlet.outletId}
              className="rounded-xl border border-gray-200 bg-gray-50 p-3"
            >
              <div className="text-xl mb-1.5">📍</div>
              <p className="text-xs font-semibold text-[#111827] line-clamp-1">
                {outlet.city}
              </p>
              <p className="text-[11px] text-[#6B7280] line-clamp-2 mt-0.5">
                {outlet.outletName}
              </p>
              <button
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
