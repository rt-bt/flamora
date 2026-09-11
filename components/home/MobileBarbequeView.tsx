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
  ShieldCheck,
  Zap,
} from "lucide-react";
import { outletBuffetList } from "@/data/buffet";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────────────────
   DARK GRILL & FIRE DATA (OBSIDIAN, CHARCOAL, EMBER, COPPER, GOLD)
──────────────────────────────────────────────────────────────────────────── */
const promotions = [
  {
    id: "early-bird",
    title: "Early Bird Grill Slot",
    tag: "FLAT 15% OFF",
    desc: "Valid on 12:00–12:30 PM lunch slots.",
    code: "EARLY15",
    badgeBg: "bg-[#C65324] text-white",
  },
  {
    id: "smiles-club",
    title: "Smiles Club Rewards",
    tag: "5% CASHBACK",
    desc: "Earn 5% Smiles Coins on every bill.",
    code: "SMILES5",
    badgeBg: "bg-[#B88A4A] text-[#0D0D0C] font-bold",
  },
  {
    id: "birthday-cake",
    title: "Complimentary Cake",
    tag: "CHEF SPECIAL",
    desc: "Free Sparkler Birthday Cake & celebration.",
    code: "PARTYCAKE",
    badgeBg: "bg-[#D8753D] text-white",
  },
  {
    id: "corporate-feast",
    title: "Corporate Group Deal",
    tag: "10+1 FREE",
    desc: "Book for 10 guests & get 1 free.",
    code: "CORP10",
    badgeBg: "bg-[#C65324] text-white",
  },
];

const occasions = [
  { label: "Birthday", icon: Cake, accent: "border-[#C65324] text-[#C65324]" },
  { label: "Anniversary", icon: Heart, accent: "border-[#D8753D] text-[#D8753D]" },
  { label: "Family", icon: Users, accent: "border-[#B88A4A] text-[#B88A4A]" },
  { label: "Office Lunch", icon: Briefcase, accent: "border-[#C65324] text-[#C65324]" },
  { label: "Date Night", icon: Sparkles, accent: "border-[#D8753D] text-[#D8753D]" },
];

const buffetHighlights = [
  {
    id: "grills",
    title: "Live Table Grills",
    subtitle: "Signature Experience",
    desc: "Unlimited skewers grilled fresh over embers right at your table.",
    icon: Flame,
    badgeColor: "text-[#C65324] bg-[#2A211B] border-[#38312B]",
  },
  {
    id: "bigbuffet",
    title: "The Royal Buffet",
    subtitle: "30+ Sizzling Dishes",
    desc: "Lavish spread of sizzlers, biryanis, curries and breads.",
    icon: Utensils,
    badgeColor: "text-[#B88A4A] bg-[#2A211B] border-[#38312B]",
  },
  {
    id: "maincourse",
    title: "Main Course Spread",
    subtitle: "Chef Recommendations",
    desc: "Slow-cooked Dal Flamora, Handi Biryani & fresh Naans.",
    icon: CheckCircle2,
    badgeColor: "text-[#D8753D] bg-[#2A211B] border-[#38312B]",
  },
  {
    id: "desserts",
    title: "Matka Kulfi & Dessert Bar",
    subtitle: "Grand Dessert Finale",
    desc: "Dip-and-sprinkle Kulfis, warm Jamuns & Truffle brownies.",
    icon: Sparkles,
    badgeColor: "text-[#B88A4A] bg-[#2A211B] border-[#38312B]",
  },
];

const quickActions = [
  { id: "book", label: "Book Table", icon: Calendar, isAction: true },
  { id: "happiness", label: "Happiness Card", icon: Gift, href: "/offers" },
  { id: "catering", label: "Catering", icon: Utensils, href: "/catering" },
  { id: "takeaway", label: "Takeaway", icon: ShoppingBag, href: "/menu" },
];

/* ────────────────────────────────────────────────────────────────────────────
   COMPONENT — DARK GRILL & FIRE IDENTITY
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
    /* #0D0D0C Obsidian Page Background with pt-[56px] */
    <div className="block lg:hidden bg-[#0D0D0C] min-h-screen text-[#F3EBDD] font-inter pt-[56px]">

      {/* ══════════════════════════════════════════════
          1. HERO BANNER — Cinematic Dark Charcoal & Embers
          ══════════════════════════════════════════════ */}
      <div className="relative w-full h-[220px] overflow-hidden rounded-b-2xl border-b border-[#38312B]">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: "url('/images/hero-grill.jpg')" }}
        />
        {/* Dark Smoked Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0C] via-[#171513]/70 to-black/40" />

        {/* Top Flame Tag */}
        <div className="absolute top-3 left-4">
          <span className="inline-flex items-center gap-1.5 bg-[#C65324] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md">
            <Flame className="h-3 w-3 fill-white" />
            Live Table Grill &amp; Buffet
          </span>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-4 left-4 right-4 text-[#F3EBDD]">
          <h1 className="font-bold font-montserrat text-2xl leading-tight text-[#F3EBDD] drop-shadow-md">
            Where Fire Meets Flavor
          </h1>
          <p className="text-xs text-[#B8AEA1] mt-0.5 font-inter">
            Bihar&apos;s #1 Charcoal BBQ &amp; Unlimited Buffet
          </p>
          <button
            type="button"
            onClick={() => setIsBookingOpen(true)}
            className="mt-3 inline-flex items-center gap-2 bg-[#C65324] hover:bg-[#D8753D] text-white text-xs font-bold px-4 py-2 rounded-lg shadow-md active:scale-95 transition-all uppercase tracking-wide"
          >
            Book a Table
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          2. QUICK SERVICES (4 Icon Grid — Smoked Surfaces)
          ══════════════════════════════════════════════ */}
      <div className="py-4 px-4 bg-[#171513]">
        <div className="grid grid-cols-4 gap-2.5">
          {quickActions.map((item) => {
            const IconComponent = item.icon;
            const inner = (
              <div
                className="p-2.5 rounded-2xl flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-all bg-[#211E1A] border border-[#38312B] hover:border-[#C65324] aspect-square"
              >
                <IconComponent className="h-5 w-5 mb-1.5 text-[#C65324]" />
                <span className="text-[11px] font-semibold text-[#F3EBDD] text-center leading-tight font-inter">
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
          3. PROMOTIONS CAROUSEL ("What's On Flamora")
          ══════════════════════════════════════════════ */}
      <div className="py-4 px-4 bg-[#0D0D0C]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-[#C65324]" />
            <h2 className="text-[15px] font-bold font-montserrat text-[#F3EBDD]">
              Offers &amp; Promotions
            </h2>
          </div>
          <Link href="/offers" className="text-[#D8753D] text-xs font-semibold hover:underline">
            View All →
          </Link>
        </div>

        {/* Horizontal Carousel */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1.5 -mx-1 px-1">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              onClick={() => setIsBookingOpen(true)}
              className="flex-shrink-0 w-[245px] rounded-2xl p-3.5 bg-[#211E1A] border border-[#38312B] hover:border-[#C65324] transition-colors relative flex flex-col justify-between min-h-[120px] cursor-pointer active:scale-98"
            >
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className={cn("text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider", promo.badgeBg)}>
                  {promo.tag}
                </span>
                <span className="text-[9px] font-mono bg-[#2A211B] text-[#B8AEA1] px-2 py-0.5 rounded border border-[#38312B]">
                  {promo.code}
                </span>
              </div>

              <div>
                <h3 className="text-xs font-bold font-montserrat text-[#F3EBDD] leading-tight mb-0.5">
                  {promo.title}
                </h3>
                <p className="text-[11px] text-[#B8AEA1] line-clamp-1 font-inter">
                  {promo.desc}
                </p>
              </div>

              <div className="mt-2.5 text-[10px] font-semibold text-[#D8753D] flex items-center justify-end gap-1">
                <span>Claim &amp; Reserve</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          4. CELEBRATE AN OCCASION?
          ══════════════════════════════════════════════ */}
      <div className="py-4 px-4 bg-[#171513]">
        <h2 className="text-[15px] font-bold font-montserrat text-[#F3EBDD] mb-3">
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
                className="flex-shrink-0 cursor-pointer bg-[#211E1A] rounded-2xl overflow-hidden border border-[#38312B] p-2 text-center shadow-xs active:scale-95 transition-all hover:border-[#C65324]"
              >
                <div className={cn("w-[76px] h-[54px] rounded-xl overflow-hidden mb-1.5 flex items-center justify-center bg-[#2A211B] border", occ.accent)}>
                  <OccasionIcon className="h-5 w-5" />
                </div>
                <p className="text-[11px] font-inter text-[#F3EBDD] text-center font-semibold">
                  {occ.label}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          5. TODAY'S BUFFET HIGHLIGHTS (Smoked Surface Card)
          ══════════════════════════════════════════════ */}
      <div className="py-4 px-4 bg-[#0D0D0C]">
        <h2 className="text-[15px] font-bold font-montserrat text-[#F3EBDD] mb-3">
          Today&apos;s buffet highlights
        </h2>
        <div className="bg-[#211E1A] rounded-2xl border border-[#38312B] p-3.5 shadow-md">
          <div className="divide-y divide-[#38312B]">
            {buffetHighlights.map((item, i) => {
              const HighlightIcon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className={cn(
                    "flex gap-3 w-full text-left cursor-pointer items-center py-3",
                    i === 0 ? "pt-0" : "",
                    i === buffetHighlights.length - 1 ? "pb-0" : ""
                  )}
                >
                  <div className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center bg-[#2A211B] border border-[#38312B]">
                    <HighlightIcon className="h-5 w-5 text-[#C65324]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <h3 className="text-xs font-bold font-montserrat text-[#F3EBDD]">
                        {item.title}
                      </h3>
                      <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded border", item.badgeColor)}>
                        {item.subtitle}
                      </span>
                    </div>
                    <p className="text-[11px] font-inter text-[#B8AEA1] line-clamp-1 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-[#81786F] shrink-0 ml-1" />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          6. TODAY'S BUFFET PRICE CARD (Dark Embers & Copper Accent)
          ══════════════════════════════════════════════ */}
      <div className="py-4 px-4 bg-[#171513]">
        <div className="rounded-2xl border border-[#38312B] bg-[#211E1A] shadow-md overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-[#38312B] bg-[#2A211B]">
            <div>
              <h2 className="text-xs font-bold font-montserrat text-[#F3EBDD]">
                Buffet Price at {selectedCity}
              </h2>
              <p className="text-[10px] text-[#B8AEA1] flex items-center gap-1 mt-0.5">
                <Clock className="h-3 w-3 text-[#C65324]" />
                {slot?.timing}
              </p>
            </div>

            {/* City Selector Dropdown */}
            <div className="flex items-center gap-1.5 rounded-lg border border-[#38312B] bg-[#171513] px-2.5 py-1 text-xs">
              <MapPin className="h-3.5 w-3.5 text-[#C65324] shrink-0" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-transparent font-semibold text-[#F3EBDD] focus:outline-none cursor-pointer text-xs [&>option]:bg-[#171513] [&>option]:text-[#F3EBDD]"
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
          <div className="flex border-b border-[#38312B] text-xs">
            <button
              type="button"
              onClick={() => setActiveDayType("Weekday")}
              className={cn(
                "flex-1 py-2.5 font-semibold transition-colors text-center",
                activeDayType === "Weekday"
                  ? "bg-[#C65324] text-white font-bold"
                  : "text-[#B8AEA1] bg-[#171513]"
              )}
            >
              Mon–Fri
            </button>
            <button
              type="button"
              onClick={() => setActiveDayType("Weekend")}
              className={cn(
                "flex-1 py-2.5 font-semibold transition-colors text-center",
                activeDayType === "Weekend"
                  ? "bg-[#C65324] text-white font-bold"
                  : "text-[#B8AEA1] bg-[#171513]"
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
                  ? "bg-[#2A211B] border-[#C65324] text-[#C65324]"
                  : "bg-[#171513] border-[#38312B] text-[#B8AEA1]"
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
                  ? "bg-[#2A211B] border-[#C65324] text-[#C65324]"
                  : "bg-[#171513] border-[#38312B] text-[#B8AEA1]"
              )}
            >
              <Moon className="h-3.5 w-3.5" />
              Dinner
            </button>
          </div>

          {/* Price Cards */}
          <div className="grid grid-cols-2 gap-2.5 px-3 pb-3">
            <div className="rounded-xl border border-[#38312B] bg-[#171513] py-2.5 px-3 text-center">
              <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-emerald-400 mb-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Pure Veg
              </div>
              <div className="text-xl font-bold font-montserrat text-[#F3EBDD]">₹{slot?.vegPrice}</div>
              <div className="text-[10px] text-[#81786F] mt-0.5">per guest + tax</div>
            </div>

            <div className="rounded-xl border border-[#38312B] bg-[#171513] py-2.5 px-3 text-center">
              <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-rose-400 mb-1">
                <span className="h-2 w-2 rounded-full bg-rose-500" />
                Non-Veg
              </div>
              <div className="text-xl font-bold font-montserrat text-[#F3EBDD]">₹{slot?.nonVegPrice}</div>
              <div className="text-[10px] text-[#81786F] mt-0.5">per guest + tax</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="px-3 pb-3">
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="w-full bg-[#C65324] hover:bg-[#D8753D] text-white rounded-xl py-2.5 text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition-transform uppercase tracking-wider shadow-md"
            >
              <span>Book Table at ₹{activeSession === "Lunch" ? slot?.vegPrice : slot?.nonVegPrice}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          7. OUR OFFERINGS (2-Panel Smoked Charcoal & Ember)
          ══════════════════════════════════════════════ */}
      <div className="py-4 px-4 bg-[#0D0D0C]">
        <h2 className="text-[15px] font-bold font-montserrat text-[#F3EBDD] mb-3">
          Our Offerings
        </h2>
        <div className="grid grid-cols-2 gap-2.5">
          {/* Panel 1: Dine Out */}
          <div
            onClick={() => setIsBookingOpen(true)}
            className="rounded-2xl bg-[#2A211B] p-3.5 flex flex-col justify-between cursor-pointer active:scale-95 transition-transform border border-[#38312B] hover:border-[#C65324] shadow-md min-h-[115px]"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#C65324]">FLAMORA GRILL</p>
              <h3 className="text-sm font-bold font-montserrat text-[#F3EBDD] mt-0.5 leading-tight">
                Live Buffet
              </h3>
            </div>
            <span className="mt-3 text-[10px] font-semibold text-[#D8753D] flex items-center gap-1">
              Book Table →
            </span>
          </div>

          {/* Panel 2: Catering */}
          <Link
            href="/catering"
            className="rounded-2xl bg-[#171513] p-3.5 flex flex-col justify-between cursor-pointer active:scale-95 transition-transform border border-[#38312B] hover:border-[#B88A4A] shadow-md min-h-[115px]"
          >
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-[#B88A4A]">ATMOSFIRE</p>
              <h3 className="text-sm font-bold font-montserrat text-[#F3EBDD] mt-0.5 leading-tight">
                Catering
              </h3>
            </div>
            <span className="mt-3 text-[10px] font-semibold text-[#B88A4A] flex items-center gap-1">
              Send Enquiry →
            </span>
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          8. TAKEAWAY EXPRESS (Smoked Box Banner)
          ══════════════════════════════════════════════ */}
      <div className="py-3 px-4 bg-[#171513]">
        <Link href="/menu">
          <div className="bg-[#211E1A] p-3.5 rounded-2xl flex items-center justify-between active:opacity-90 transition-opacity border border-[#38312B] shadow-md">
            <div>
              <p className="font-bold font-montserrat text-[#C65324] text-xs uppercase tracking-wide">FLAMORA EXPRESS</p>
              <h4 className="text-xs text-[#F3EBDD] font-medium mt-0.5">Order BBQ Box Home Delivery</h4>
            </div>
            <ShoppingBag className="h-7 w-7 text-[#C65324] shrink-0 ml-2" />
          </div>
        </Link>
      </div>

      {/* ══════════════════════════════════════════════
          9. OUR RESTAURANTS (Outlets in Bihar)
          ══════════════════════════════════════════════ */}
      <div className="py-4 px-4 pb-8 bg-[#0D0D0C]">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-[15px] font-bold font-montserrat text-[#F3EBDD]">
            Our Outlets
          </h2>
          <Link href="/locations" className="text-[#D8753D] text-xs font-semibold hover:underline">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {outletBuffetList.map((outlet) => (
            <button
              key={outlet.outletId}
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="rounded-xl border border-[#38312B] bg-[#211E1A] p-3 text-left active:scale-95 transition-all hover:border-[#C65324]"
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
