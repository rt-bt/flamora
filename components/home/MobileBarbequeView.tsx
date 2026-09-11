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
  Percent,
  Award,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { outletBuffetList } from "@/data/buffet";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────────────────
   HANDCRAFTED BESPOKE APP DATA (NO EMOJIS — PURE VECTOR ICONS)
──────────────────────────────────────────────────────────────────────────── */
const promotions = [
  {
    id: "early-bird",
    title: "Early Bird Special",
    tag: "15% OFF",
    desc: "Valid on 12:00–12:30 PM lunch slots.",
    code: "EARLY15",
    gradient: "from-[#EE5735] to-[#C83415]",
    icon: Sun,
  },
  {
    id: "smiles-club",
    title: "Smiles Loyalty Coins",
    tag: "5% CASHBACK",
    desc: "Earn 5% coins on every buffet bill.",
    code: "SMILES5",
    gradient: "from-[#7E22CE] to-[#9333EA]",
    icon: Award,
  },
  {
    id: "birthday-cake",
    title: "Complimentary Cake",
    tag: "FREE CELEBRATION",
    desc: "Chef cake & sparkler celebration song.",
    code: "PARTYCAKE",
    gradient: "from-[#E11D48] to-[#F43F5E]",
    icon: Cake,
  },
  {
    id: "corporate-feast",
    title: "Corporate Group Offer",
    tag: "10+1 FREE",
    desc: "Book for 10 guests & get 1 free.",
    code: "CORP10",
    gradient: "from-[#059669] to-[#10B981]",
    icon: Briefcase,
  },
];

const occasions = [
  { label: "Birthday", icon: Cake, color: "text-rose-500 bg-rose-50 border-rose-100" },
  { label: "Anniversary", icon: Heart, color: "text-pink-500 bg-pink-50 border-pink-100" },
  { label: "Family", icon: Users, color: "text-emerald-500 bg-emerald-50 border-emerald-100" },
  { label: "Office Lunch", icon: Briefcase, color: "text-blue-500 bg-blue-50 border-blue-100" },
  { label: "Date Night", icon: Sparkles, color: "text-purple-500 bg-purple-50 border-purple-100" },
];

const buffetHighlights = [
  {
    id: "grills",
    title: "Live Grill Starters",
    subtitle: "Signature Experience",
    desc: "Unlimited veg & non-veg table grills.",
    icon: Flame,
    iconColor: "text-[#EE5735] bg-orange-50 border-orange-100",
  },
  {
    id: "bigbuffet",
    title: "The Big Buffet",
    subtitle: "Big Feast. Small Bill.",
    desc: "30+ sizzlers, curries & biryani spread.",
    icon: Utensils,
    iconColor: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    id: "maincourse",
    title: "Main Course Feast",
    subtitle: "Grand Buffet Experience",
    desc: "Regional curries, biryanis & naans.",
    icon: CheckCircle2,
    iconColor: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    id: "desserts",
    title: "Kulfi Shulfi Desserts",
    subtitle: "Grand Dessert Finale",
    desc: "Brownies, pastries & matka kulfis.",
    icon: Sparkles,
    iconColor: "text-purple-600 bg-purple-50 border-purple-100",
  },
];

const quickActions = [
  { id: "book", label: "Book Table", bg: "bg-[#FFE8E0]", textColor: "text-[#EE5735]", icon: Calendar, isAction: true },
  { id: "happiness", label: "Happiness Card", bg: "bg-[#E1FFBA]", textColor: "text-green-800", icon: Gift, href: "/offers" },
  { id: "catering", label: "Catering", bg: "bg-[#FFE8C5]", textColor: "text-amber-800", icon: Utensils, href: "/catering" },
  { id: "takeaway", label: "Takeaway", bg: "bg-[#DBF8FF]", textColor: "text-sky-800", icon: ShoppingBag, href: "/menu" },
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
    <div className="block lg:hidden bg-[#FAF8F5] min-h-screen text-[#171717] font-inter pt-[56px]">

      {/* ══════════════════════════════════════════════
          1. HERO SLIDER BANNER (Polished Gradient & Typography)
          ══════════════════════════════════════════════ */}
      <div className="relative w-full h-[210px] overflow-hidden rounded-b-2xl shadow-xs">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/images/hero-grill.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        <div className="absolute top-3 left-4">
          <span className="inline-flex items-center gap-1.5 bg-[#EE5735] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
            <Flame className="h-3 w-3 fill-white" />
            Live Table Grill &amp; Buffet
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h1 className="font-bold font-poppins text-2xl leading-tight text-white drop-shadow-xs">
            Where Fire Meets Flavor
          </h1>
          <p className="text-xs text-gray-200 mt-0.5 font-inter">
            Bihar&apos;s #1 Charcoal BBQ &amp; Unlimited Buffet
          </p>
          <button
            type="button"
            onClick={() => setIsBookingOpen(true)}
            className="mt-3 inline-flex items-center gap-2 bg-[#EE5735] hover:bg-[#d94726] text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-md active:scale-95 transition-all uppercase tracking-wide"
          >
            Book a Table
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          2. QUICK SERVICES (4 Icon Grid — Barbeque Nation Inspired)
          ══════════════════════════════════════════════ */}
      <div className="py-4 px-4">
        <div className="grid grid-cols-4 gap-2.5">
          {quickActions.map((item) => {
            const IconComponent = item.icon;
            const inner = (
              <div
                className={cn(
                  "p-2.5 rounded-2xl flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-transform aspect-square border border-black/5 shadow-xs",
                  item.bg
                )}
              >
                <IconComponent className={cn("h-6 w-6 mb-1.5", item.textColor)} />
                <span className="text-[11px] font-semibold text-[#171717] text-center leading-tight font-inter">
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
      <div className="py-2.5 px-4">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-[#EE5735]" />
            <h2 className="text-[15px] font-bold font-poppins text-[#171717]">
              Offers &amp; Deals
            </h2>
          </div>
          <Link href="/offers" className="text-[#EE5735] text-xs font-semibold hover:underline">
            View All →
          </Link>
        </div>

        {/* Horizontal Carousel */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1.5 -mx-1 px-1">
          {promotions.map((promo) => {
            const PromoIcon = promo.icon;
            return (
              <div
                key={promo.id}
                onClick={() => setIsBookingOpen(true)}
                className={cn(
                  "flex-shrink-0 w-[245px] rounded-2xl p-3.5 text-white shadow-xs bg-gradient-to-r relative overflow-hidden flex flex-col justify-between min-h-[115px] cursor-pointer active:scale-98 transition-transform border border-white/10",
                  promo.gradient
                )}
              >
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-white/20 uppercase tracking-wider text-white">
                    {promo.tag}
                  </span>
                  <span className="text-[9px] font-mono bg-black/25 text-white px-2 py-0.5 rounded border border-white/20">
                    {promo.code}
                  </span>
                </div>

                <div>
                  <h3 className="text-xs font-bold font-poppins leading-tight mb-0.5 flex items-center gap-1.5">
                    <PromoIcon className="h-3.5 w-3.5 shrink-0" />
                    {promo.title}
                  </h3>
                  <p className="text-[11px] text-white/90 line-clamp-1 font-inter">
                    {promo.desc}
                  </p>
                </div>

                <div className="mt-2.5 text-[10px] font-semibold text-white flex items-center justify-end gap-1">
                  <span>Claim Offer &amp; Book</span>
                  <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          4. CELEBRATE AN OCCASION? (Polished Vector Icons)
          ══════════════════════════════════════════════ */}
      <div className="py-2.5 px-4">
        <h2 className="text-[15px] font-bold font-poppins text-[#171717] mb-2.5">
          Celebrate an occasion?
        </h2>
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1">
          {occasions.map((occ) => {
            const OccasionIcon = occ.icon;
            return (
              <button
                key={occ.label}
                type="button"
                onClick={() => setIsBookingOpen(true)}
                className="flex-shrink-0 cursor-pointer bg-white rounded-2xl overflow-hidden border border-[#E5E5E5] p-2 text-center shadow-xs active:scale-95 transition-transform"
              >
                <div className={cn("w-[76px] h-[54px] rounded-xl overflow-hidden mb-1.5 flex items-center justify-center border", occ.color)}>
                  <OccasionIcon className="h-6 w-6" />
                </div>
                <p className="text-[11px] font-inter text-[#171717] text-center font-semibold">
                  {occ.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          5. TODAY'S BUFFET HIGHLIGHTS
          ══════════════════════════════════════════════ */}
      <div className="py-2.5 px-4">
        <h2 className="text-[15px] font-bold font-poppins text-[#171717] mb-2.5">
          Today&apos;s buffet highlights
        </h2>
        <div className="bg-white rounded-2xl overflow-hidden border border-[#E5E5E5] p-3 shadow-xs">
          <div className="divide-y divide-gray-100">
            {buffetHighlights.map((item, i) => {
              const HighlightIcon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className={cn(
                    "flex gap-3 w-full text-left cursor-pointer items-center py-2.5",
                    i === 0 ? "pt-0" : "",
                    i === buffetHighlights.length - 1 ? "pb-0" : ""
                  )}
                >
                  <div className={cn("w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center border shadow-xs", item.iconColor)}>
                    <HighlightIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="text-xs font-bold font-poppins text-[#171717]">
                        {item.title}
                      </h3>
                      <span className="text-[10px] font-semibold text-[#EE5735] shrink-0">
                        {item.subtitle}
                      </span>
                    </div>
                    <p className="text-[11px] font-inter text-[#6B7280] line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-gray-400 shrink-0 ml-1" />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          6. TODAY'S BUFFET PRICE CARD (Polished Toggles & Pricing)
          ══════════════════════════════════════════════ */}
      <div className="py-2.5 px-4">
        <div className="rounded-2xl border border-[#E5E5E5] bg-white shadow-xs overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-3.5 py-3 border-b border-gray-100 bg-gray-50/80">
            <div>
              <h2 className="text-xs font-bold font-poppins text-[#171717]">
                Buffet Price at {selectedCity}
              </h2>
              <p className="text-[10px] text-[#6B7280] flex items-center gap-1 mt-0.5">
                <Clock className="h-3 w-3 text-gray-400" />
                {slot?.timing}
              </p>
            </div>

            {/* City Selector */}
            <div className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-xs shadow-xs">
              <MapPin className="h-3.5 w-3.5 text-[#EE5735] shrink-0" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-transparent font-semibold text-[#171717] focus:outline-none cursor-pointer text-xs"
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
          <div className="flex gap-2 px-3 pt-3 pb-2">
            <button
              type="button"
              onClick={() => setActiveSession("Lunch")}
              className={cn(
                "flex-1 rounded-xl py-2 text-xs font-semibold border transition-all text-center flex items-center justify-center gap-1.5",
                activeSession === "Lunch"
                  ? "bg-[#FFE8E0] border-[#EE5735] text-[#EE5735]"
                  : "bg-gray-50 border-gray-200 text-[#6B7280]"
              )}
            >
              <Sun className="h-3.5 w-3.5" />
              Lunch
            </button>
            <button
              type="button"
              onClick={() => setActiveSession("Dinner")}
              className={cn(
                "flex-1 rounded-xl py-2 text-xs font-semibold border transition-all text-center flex items-center justify-center gap-1.5",
                activeSession === "Dinner"
                  ? "bg-[#FFE8E0] border-[#EE5735] text-[#EE5735]"
                  : "bg-gray-50 border-gray-200 text-[#6B7280]"
              )}
            >
              <Moon className="h-3.5 w-3.5" />
              Dinner
            </button>
          </div>

          {/* Price Cards */}
          <div className="grid grid-cols-2 gap-2.5 px-3 pb-3">
            <div className="rounded-xl border border-green-200 bg-[#F0FDF4] py-2.5 px-3 text-center">
              <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-green-700 mb-1">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Pure Veg
              </div>
              <div className="text-xl font-bold font-poppins text-[#171717]">₹{slot?.vegPrice}</div>
              <div className="text-[10px] text-[#6B7280] mt-0.5">per person + tax</div>
            </div>

            <div className="rounded-xl border border-red-200 bg-[#FFF5F5] py-2.5 px-3 text-center">
              <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-red-700 mb-1">
                <span className="h-2 w-2 rounded-full bg-red-500" />
                Non-Veg
              </div>
              <div className="text-xl font-bold font-poppins text-[#171717]">₹{slot?.nonVegPrice}</div>
              <div className="text-[10px] text-[#6B7280] mt-0.5">per person + tax</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="px-3 pb-3">
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="w-full bg-[#EE5735] hover:bg-[#d94726] text-white rounded-xl py-2.5 text-xs font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-transform uppercase tracking-wider"
            >
              <span>Book Table at ₹{activeSession === "Lunch" ? slot?.vegPrice : slot?.nonVegPrice}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          7. OUR OFFERINGS (2-Panel Barbeque Nation Style)
          ══════════════════════════════════════════════ */}
      <div className="py-2.5 px-4">
        <h2 className="text-[15px] font-bold font-poppins text-[#171717] mb-2.5">
          Our Offerings
        </h2>
        <div className="grid grid-cols-2 gap-2.5">
          {/* Panel 1: Dine Out */}
          <div
            onClick={() => setIsBookingOpen(true)}
            className="rounded-2xl bg-[#FFE8E0] p-3.5 flex flex-col justify-between cursor-pointer active:scale-95 transition-transform border border-orange-100 shadow-xs min-h-[110px]"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#EE5735]">DINE IN</p>
              <h3 className="text-sm font-bold font-poppins text-[#171717] mt-0.5 leading-tight">
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
            className="rounded-2xl bg-[#E1FFBA] p-3.5 flex flex-col justify-between cursor-pointer active:scale-95 transition-transform border border-green-200 shadow-xs min-h-[110px]"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-green-800">EVENTS</p>
              <h3 className="text-sm font-bold font-poppins text-[#171717] mt-0.5 leading-tight">
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
      <div className="py-2.5 px-4">
        <Link href="/menu">
          <div className="bg-[#FFCFC5] p-3.5 rounded-2xl flex items-center justify-between active:opacity-90 transition-opacity border border-orange-200 shadow-xs">
            <div>
              <p className="font-bold font-poppins text-[#EE5735] text-xs uppercase tracking-wide">Takeaway Express</p>
              <h4 className="text-xs text-[#171717] font-medium mt-0.5">Order BBQ Box Home Delivery</h4>
            </div>
            <ShoppingBag className="h-7 w-7 text-[#EE5735] shrink-0 ml-2" />
          </div>
        </Link>
      </div>

      {/* ══════════════════════════════════════════════
          9. OUR RESTAURANTS (Outlets in Bihar)
          ══════════════════════════════════════════════ */}
      <div className="py-3 px-4 pb-8">
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="text-[15px] font-bold font-poppins text-[#171717]">
            Our Outlets
          </h2>
          <Link href="/locations" className="text-[#EE5735] text-xs font-semibold hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {outletBuffetList.map((outlet) => (
            <button
              key={outlet.outletId}
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="rounded-xl border border-gray-200 bg-white p-3 text-left active:scale-95 transition-transform shadow-xs"
            >
              <p className="text-xs font-bold font-poppins text-[#171717] flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-[#EE5735]" />
                {outlet.city}
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
