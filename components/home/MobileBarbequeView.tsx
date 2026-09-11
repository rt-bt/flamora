"use client";

import { useState } from "react";
import Link from "next/link";
import { MobileBookingDrawer } from "@/components/booking/MobileBookingDrawer";
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Sparkles,
  Flame,
  Calendar,
  Gift,
  Utensils,
  ShoppingBag,
  Cake,
  Heart,
  Users,
  Briefcase,
  Sun,
  Moon,
  Clock,
  CheckCircle2,
  Award,
} from "lucide-react";
import { outletBuffetList } from "@/data/buffet";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────────────────
   MOBILE DECONGESTED DATA (P0 / P1 ESSENTIAL CONTENT ONLY)
──────────────────────────────────────────────────────────────────────────── */
const promotions = [
  {
    id: "early-bird",
    title: "Early Bird Slot",
    tag: "15% OFF",
    desc: "12:00–12:30 PM Lunch",
    code: "EARLY15",
    badgeBg: "bg-[#C65324] text-white",
  },
  {
    id: "smiles-club",
    title: "Smiles Rewards",
    tag: "5% CASHBACK",
    desc: "Earn coins on every bill",
    code: "SMILES5",
    badgeBg: "bg-[#B88A4A] text-[#0D0D0C] font-bold",
  },
  {
    id: "birthday-cake",
    title: "Free Sparkler Cake",
    tag: "FREE CAKE",
    desc: "Celebration cake & song",
    code: "PARTYCAKE",
    badgeBg: "bg-[#D8753D] text-white",
  },
];

const occasions = [
  { label: "Birthday", icon: Cake, accent: "border-[#C65324] text-[#C65324]" },
  { label: "Anniversary", icon: Heart, accent: "border-[#D8753D] text-[#D8753D]" },
  { label: "Family", icon: Users, accent: "border-[#B88A4A] text-[#B88A4A]" },
  { label: "Office Lunch", icon: Briefcase, accent: "border-[#C65324] text-[#C65324]" },
];

const buffetHighlights = [
  {
    id: "grills",
    title: "Live Table Grills",
    subtitle: "Signature",
    desc: "Unlimited skewers grilled fresh over embers at your table.",
    icon: Flame,
  },
  {
    id: "bigbuffet",
    title: "The Royal Buffet",
    subtitle: "30+ Dishes",
    desc: "Lavish spread of sizzlers, biryanis, curries and breads.",
    icon: Utensils,
  },
  {
    id: "maincourse",
    title: "Main Course Spread",
    subtitle: "Chef Special",
    desc: "Slow-cooked Dal Flamora, Handi Biryani & Naans.",
    icon: CheckCircle2,
  },
  {
    id: "desserts",
    title: "Matka Kulfi & Desserts",
    subtitle: "Finale",
    desc: "Kulfis, warm Jamuns & Truffle brownies.",
    icon: Sparkles,
  },
];

const quickActions = [
  { id: "book", label: "Book Table", icon: Calendar, isAction: true },
  { id: "happiness", label: "Vouchers", icon: Gift, href: "/offers" },
  { id: "catering", label: "Catering", icon: Utensils, href: "/catering" },
  { id: "takeaway", label: "Takeaway", icon: ShoppingBag, href: "/menu" },
];

/* ────────────────────────────────────────────────────────────────────────────
   COMPONENT — MOBILE DECONGESTED VISUAL-FIRST
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
    <div className="block lg:hidden bg-[#0D0D0C] min-h-screen text-[#F3EBDD] font-inter pt-[56px]">

      {/* ══════════════════════════════════════════════
          1. HERO BANNER — Rule 4 & 5 (75vh Responsive Height)
          ══════════════════════════════════════════════ */}
      <div className="relative w-full h-[72vh] min-h-[260px] max-h-[340px] overflow-hidden rounded-b-2xl border-b border-[#38312B]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/images/hero-grill.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0C] via-[#171513]/60 to-black/30" />

        <div className="absolute bottom-5 left-4 right-4 text-[#F3EBDD]">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#D8753D] mb-1 font-heading">
            FLAMORA
          </p>
          <h1 className="font-bold font-montserrat text-2xl leading-tight text-[#F3EBDD] drop-shadow-md">
            Where Fire Meets Flavor
          </h1>
          <p className="text-xs text-[#B8AEA1] mt-1 font-inter">
            Bihar&apos;s Charcoal BBQ &amp; Unlimited Buffet
          </p>
          <div className="mt-3.5 flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex items-center gap-2 bg-[#C65324] hover:bg-[#D8753D] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md active:scale-95 transition-all uppercase tracking-wide"
            >
              Book a Table
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <Link
              href="/menu"
              className="inline-flex items-center gap-1.5 bg-[#211E1A] border border-[#38312B] text-[#F3EBDD] text-xs font-semibold px-3.5 py-2.5 rounded-xl active:scale-95 transition-all"
            >
              View Menu
            </Link>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          2. QUICK ACTIONS (4 Grid — Touch Target > 44px)
          ══════════════════════════════════════════════ */}
      <div className="py-3 px-4 bg-[#171513]">
        <div className="grid grid-cols-4 gap-2">
          {quickActions.map((item) => {
            const IconComponent = item.icon;
            const inner = (
              <div className="p-2.5 rounded-xl flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-all bg-[#211E1A] border border-[#38312B] aspect-square">
                <IconComponent className="h-5 w-5 mb-1 text-[#C65324]" />
                <span className="text-[11px] font-semibold text-[#F3EBDD] text-center leading-tight">
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
          3. OFFERS & DEALS — Rule 20 (Max 3 Compact Cards)
          ══════════════════════════════════════════════ */}
      <div className="py-3 px-4 bg-[#0D0D0C]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#C65324]" />
            <h2 className="text-xs font-bold font-montserrat text-[#F3EBDD] uppercase tracking-wider">
              Offers &amp; Deals
            </h2>
          </div>
          <Link href="/offers" className="text-[#D8753D] text-[11px] font-semibold">
            View All →
          </Link>
        </div>

        <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              onClick={() => setIsBookingOpen(true)}
              className="flex-shrink-0 w-[220px] rounded-xl p-3 bg-[#211E1A] border border-[#38312B] flex flex-col justify-between cursor-pointer active:scale-98"
            >
              <div className="flex items-center justify-between gap-1 mb-1.5">
                <span className={cn("text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider", promo.badgeBg)}>
                  {promo.tag}
                </span>
                <span className="text-[9px] font-mono bg-[#2A211B] text-[#B8AEA1] px-1.5 py-0.5 rounded border border-[#38312B]">
                  {promo.code}
                </span>
              </div>
              <div>
                <h3 className="text-xs font-bold font-montserrat text-[#F3EBDD] leading-tight">
                  {promo.title}
                </h3>
                <p className="text-[10px] text-[#B8AEA1] line-clamp-1 mt-0.5 font-inter">
                  {promo.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          4. OCCASION SECTION — Rule 11 (Horizontal Reel)
          ══════════════════════════════════════════════ */}
      <div className="py-3 px-4 bg-[#171513]">
        <h2 className="text-xs font-bold font-montserrat text-[#F3EBDD] uppercase tracking-wider mb-2">
          Celebrate
        </h2>
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
          {occasions.map((occ) => {
            const OccasionIcon = occ.icon;
            return (
              <button
                key={occ.label}
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="flex-shrink-0 cursor-pointer bg-[#211E1A] rounded-xl border border-[#38312B] p-2 text-center active:scale-95 transition-all"
              >
                <div className={cn("w-[72px] h-[48px] rounded-lg mb-1 flex items-center justify-center bg-[#2A211B] border", occ.accent)}>
                  <OccasionIcon className="h-4 w-4" />
                </div>
                <p className="text-[10px] font-inter text-[#F3EBDD] text-center font-semibold">
                  {occ.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          5. BUFFET HIGHLIGHTS — Rule 10 (Compact Visual List)
          ══════════════════════════════════════════════ */}
      <div className="py-3 px-4 bg-[#0D0D0C]">
        <h2 className="text-xs font-bold font-montserrat text-[#F3EBDD] uppercase tracking-wider mb-2">
          Buffet Highlights
        </h2>
        <div className="bg-[#211E1A] rounded-xl border border-[#38312B] p-3 shadow-xs">
          <div className="divide-y divide-[#38312B]">
            {buffetHighlights.map((item, i) => {
              const HighlightIcon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className={cn(
                    "flex gap-2.5 w-full text-left cursor-pointer items-center py-2.5",
                    i === 0 ? "pt-0" : "",
                    i === buffetHighlights.length - 1 ? "pb-0" : ""
                  )}
                >
                  <div className="w-10 h-10 rounded-lg flex-shrink-0 flex items-center justify-center bg-[#2A211B] border border-[#38312B]">
                    <HighlightIcon className="h-4 w-4 text-[#C65324]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="text-xs font-bold font-montserrat text-[#F3EBDD]">
                        {item.title}
                      </h3>
                      <span className="text-[9px] font-semibold text-[#D8753D] shrink-0">
                        {item.subtitle}
                      </span>
                    </div>
                    <p className="text-[10px] font-inter text-[#B8AEA1] line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-[#81786F] shrink-0" />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          6. BUFFET PRICE CARD — Rule 6 (Clean Interactive Rate Card)
          ══════════════════════════════════════════════ */}
      <div className="py-3 px-4 bg-[#171513]">
        <div className="rounded-xl border border-[#38312B] bg-[#211E1A] shadow-xs overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#38312B] bg-[#2A211B]">
            <div>
              <h2 className="text-xs font-bold font-montserrat text-[#F3EBDD]">
                Buffet Rate — {selectedCity}
              </h2>
              <p className="text-[10px] text-[#B8AEA1] flex items-center gap-1 mt-0.5">
                <Clock className="h-3 w-3 text-[#C65324]" />
                {slot?.timing}
              </p>
            </div>

            {/* City Selector */}
            <div className="flex items-center gap-1 rounded-md border border-[#38312B] bg-[#171513] px-2 py-1 text-xs">
              <MapPin className="h-3 w-3 text-[#C65324] shrink-0" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-transparent font-semibold text-[#F3EBDD] focus:outline-none cursor-pointer text-[11px]"
              >
                {outletBuffetList.map((o) => (
                  <option key={o.outletId} value={o.city}>{o.city}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Toggles */}
          <div className="flex border-b border-[#38312B] text-xs">
            <button
              type="button"
              onClick={() => setActiveDayType("Weekday")}
              className={cn("flex-1 py-2 font-semibold text-center", activeDayType === "Weekday" ? "bg-[#C65324] text-white" : "text-[#B8AEA1] bg-[#171513]")}
            >
              Mon–Fri
            </button>
            <button
              type="button"
              onClick={() => setActiveDayType("Weekend")}
              className={cn("flex-1 py-2 font-semibold text-center", activeDayType === "Weekend" ? "bg-[#C65324] text-white" : "text-[#B8AEA1] bg-[#171513]")}
            >
              Sat–Sun
            </button>
          </div>

          <div className="flex gap-2 px-3 pt-2.5 pb-2">
            <button
              type="button"
              onClick={() => setActiveSession("Lunch")}
              className={cn("flex-1 rounded-lg py-1.5 text-xs font-semibold border text-center flex items-center justify-center gap-1", activeSession === "Lunch" ? "bg-[#2A211B] border-[#C65324] text-[#C65324]" : "bg-[#171513] border-[#38312B] text-[#B8AEA1]")}
            >
              <Sun className="h-3 w-3" /> Lunch
            </button>
            <button
              type="button"
              onClick={() => setActiveSession("Dinner")}
              className={cn("flex-1 rounded-lg py-1.5 text-xs font-semibold border text-center flex items-center justify-center gap-1", activeSession === "Dinner" ? "bg-[#2A211B] border-[#C65324] text-[#C65324]" : "bg-[#171513] border-[#38312B] text-[#B8AEA1]")}
            >
              <Moon className="h-3 w-3" /> Dinner
            </button>
          </div>

          {/* Rates */}
          <div className="grid grid-cols-2 gap-2 px-3 pb-3">
            <div className="rounded-lg border border-[#38312B] bg-[#171513] py-2 px-2.5 text-center">
              <div className="text-[10px] font-bold text-emerald-400">Pure Veg</div>
              <div className="text-lg font-bold font-montserrat text-[#F3EBDD]">₹{slot?.vegPrice}</div>
            </div>
            <div className="rounded-lg border border-[#38312B] bg-[#171513] py-2 px-2.5 text-center">
              <div className="text-[10px] font-bold text-rose-400">Non-Veg</div>
              <div className="text-lg font-bold font-montserrat text-[#F3EBDD]">₹{slot?.nonVegPrice}</div>
            </div>
          </div>

          {/* CTA */}
          <div className="px-3 pb-3">
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="w-full bg-[#C65324] hover:bg-[#D8753D] text-white rounded-lg py-2.5 text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-transform uppercase tracking-wider"
            >
              <span>Book Table at ₹{activeSession === "Lunch" ? slot?.vegPrice : slot?.nonVegPrice}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          7. OUR OFFERINGS — Rule 10 (Compact 2 Panel Grid)
          ══════════════════════════════════════════════ */}
      <div className="py-3 px-4 bg-[#0D0D0C]">
        <h2 className="text-xs font-bold font-montserrat text-[#F3EBDD] uppercase tracking-wider mb-2">
          Our Offerings
        </h2>
        <div className="grid grid-cols-2 gap-2">
          <div
            onClick={() => setIsBookingOpen(true)}
            className="rounded-xl bg-[#2A211B] p-3 flex flex-col justify-between cursor-pointer border border-[#38312B] min-h-[95px] active:scale-95 transition-transform"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#C65324]">DINE IN</p>
              <h3 className="text-xs font-bold font-montserrat text-[#F3EBDD] mt-0.5">Live Buffet</h3>
            </div>
            <span className="text-[10px] font-semibold text-[#D8753D] flex items-center gap-0.5">Book →</span>
          </div>

          <Link
            href="/catering"
            className="rounded-xl bg-[#171513] p-3 flex flex-col justify-between cursor-pointer border border-[#38312B] min-h-[95px] active:scale-95 transition-transform"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#B88A4A]">EVENTS</p>
              <h3 className="text-xs font-bold font-montserrat text-[#F3EBDD] mt-0.5">Catering</h3>
            </div>
            <span className="text-[10px] font-semibold text-[#B88A4A] flex items-center gap-0.5">Enquire →</span>
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          8. TAKEAWAY EXPRESS — Rule 19
          ══════════════════════════════════════════════ */}
      <div className="py-2.5 px-4 bg-[#171513]">
        <Link href="/menu">
          <div className="bg-[#211E1A] p-3 rounded-xl flex items-center justify-between border border-[#38312B] active:opacity-90 transition-opacity">
            <div>
              <p className="font-bold font-montserrat text-[#C65324] text-[11px] uppercase tracking-wide">FLAMORA EXPRESS</p>
              <h4 className="text-xs text-[#F3EBDD] font-medium mt-0.5">Order BBQ Box Delivery</h4>
            </div>
            <ShoppingBag className="h-6 w-6 text-[#C65324] shrink-0 ml-2" />
          </div>
        </Link>
      </div>

      {/* ══════════════════════════════════════════════
          9. OUR OUTLETS — Rule 19 (Clean 2x2 Grid)
          ══════════════════════════════════════════════ */}
      <div className="py-3 px-4 pb-8 bg-[#0D0D0C]">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xs font-bold font-montserrat text-[#F3EBDD] uppercase tracking-wider">
            Our Outlets
          </h2>
          <Link href="/locations" className="text-[#D8753D] text-[11px] font-semibold">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {outletBuffetList.map((outlet) => (
            <button
              key={outlet.outletId}
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="rounded-lg border border-[#38312B] bg-[#211E1A] p-2.5 text-left active:scale-95 transition-all"
            >
              <p className="text-xs font-bold font-montserrat text-[#F3EBDD] flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-[#C65324]" />
                {outlet.city}
              </p>
              <p className="text-[10px] text-[#B8AEA1] line-clamp-1 mt-0.5">
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
