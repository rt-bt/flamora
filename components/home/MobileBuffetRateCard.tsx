"use client";

import { useState } from "react";
import { outletBuffetList, OutletBuffetInfo } from "@/data/buffet";
import { Flame, Clock, MapPin, Check, Sparkles, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileBuffetRateCardProps {
  onOpenBooking: () => void;
}

export function MobileBuffetRateCard({ onOpenBooking }: MobileBuffetRateCardProps) {
  const [selectedCity, setSelectedCity] = useState<string>("Mumbai");
  const [session, setSession] = useState<"Lunch" | "Dinner">("Dinner");
  const [dayType, setDayType] = useState<"Weekday" | "Weekend">("Weekday");

  const currentOutlet: OutletBuffetInfo =
    outletBuffetList.find((o) => o.city === selectedCity) ||
    outletBuffetList[0];

  const pricingGroup = currentOutlet.pricing.find((p) =>
    dayType === "Weekday"
      ? p.dayType.includes("Weekday")
      : p.dayType.includes("Weekend")
  );

  const slotInfo =
    pricingGroup?.slots.find((s) => s.session === session) ||
    currentOutlet.pricing[0]?.slots[0];

  return (
    <div id="buffet-rates-section" className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4.5 backdrop-blur-xl shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-flamora-orange text-white">
            <Flame className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-heading text-base font-extrabold text-white">
              Live Buffet Pricing
            </h3>
            <p className="text-[11px] text-white/60">Unlimited Food • Live Table Grill</p>
          </div>
        </div>

        {/* City Dropdown */}
        <div className="flex items-center gap-1 rounded-xl border border-white/15 bg-white/10 px-2.5 py-1 text-xs text-white">
          <MapPin className="h-3 w-3 text-flamora-gold shrink-0" />
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="bg-transparent font-bold text-white focus:outline-none cursor-pointer [&>option]:bg-flamora-charcoal [&>option]:text-white text-xs"
            aria-label="Filter rate by city"
          >
            {outletBuffetList.map((outlet) => (
              <option key={outlet.outletId} value={outlet.city}>
                {outlet.city}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Filter Switches: Day & Session */}
      <div className="mt-3.5 space-y-2.5">
        {/* Day Toggle: Weekday vs Weekend */}
        <div className="grid grid-cols-2 gap-1.5 rounded-xl bg-black/40 p-1 border border-white/5">
          <button
            type="button"
            onClick={() => setDayType("Weekday")}
            className={cn(
              "rounded-lg py-1.5 text-xs font-bold transition-all",
              dayType === "Weekday"
                ? "bg-flamora-red text-white shadow"
                : "text-white/60 hover:text-white"
            )}
          >
            Weekday (Mon–Fri)
          </button>
          <button
            type="button"
            onClick={() => setDayType("Weekend")}
            className={cn(
              "rounded-lg py-1.5 text-xs font-bold transition-all",
              dayType === "Weekend"
                ? "bg-flamora-red text-white shadow"
                : "text-white/60 hover:text-white"
            )}
          >
            Weekend (Sat–Sun)
          </button>
        </div>

        {/* Session Toggle: Lunch vs Dinner */}
        <div className="grid grid-cols-2 gap-1.5 rounded-xl bg-black/40 p-1 border border-white/5">
          <button
            type="button"
            onClick={() => setSession("Lunch")}
            className={cn(
              "rounded-lg py-1.5 text-xs font-bold transition-all flex items-center justify-center gap-1.5",
              session === "Lunch"
                ? "bg-amber-500 text-black shadow font-extrabold"
                : "text-white/60 hover:text-white"
            )}
          >
            <span>☀️ Lunch Buffet</span>
          </button>
          <button
            type="button"
            onClick={() => setSession("Dinner")}
            className={cn(
              "rounded-lg py-1.5 text-xs font-bold transition-all flex items-center justify-center gap-1.5",
              session === "Dinner"
                ? "bg-flamora-orange text-white shadow font-extrabold"
                : "text-white/60 hover:text-white"
            )}
          >
            <span>🌙 Dinner Buffet</span>
          </button>
        </div>
      </div>

      {/* Timing Pill */}
      <div className="mt-3 flex items-center justify-between rounded-xl bg-white/5 px-3 py-2 text-xs border border-white/10">
        <div className="flex items-center gap-1.5 text-white/80">
          <Clock className="h-3.5 w-3.5 text-flamora-gold" />
          <span>Timing: <strong className="text-white">{slotInfo?.timing}</strong></span>
        </div>
        <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
          Live Grill Active
        </span>
      </div>

      {/* 2-Column Price Comparison: Veg vs Non-Veg */}
      <div className="mt-3 grid grid-cols-2 gap-2.5">
        {/* Vegetarian */}
        <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-950/40 to-emerald-900/20 p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Veg Buffet</span>
          </div>
          <div className="mt-1">
            <span className="text-2xl font-black text-white">₹{slotInfo?.vegPrice}</span>
            <span className="text-[10px] text-white/50 block">/ guest (+ taxes)</span>
          </div>
          <p className="mt-2 text-[10px] text-emerald-300 font-medium">
            10+ Skewers • Royal Gravies
          </p>
        </div>

        {/* Non-Vegetarian */}
        <div className="rounded-2xl border border-flamora-red/40 bg-gradient-to-b from-rose-950/40 to-red-900/20 p-3 text-center">
          <div className="flex items-center justify-center gap-1 text-[11px] font-bold text-rose-400">
            <span className="h-2 w-2 rounded-full bg-rose-500" />
            <span>Non-Veg Buffet</span>
          </div>
          <div className="mt-1">
            <span className="text-2xl font-black text-white">₹{slotInfo?.nonVegPrice}</span>
            <span className="text-[10px] text-white/50 block">/ guest (+ taxes)</span>
          </div>
          <p className="mt-2 text-[10px] text-rose-300 font-medium">
            Chicken, Fish, Prawns &amp; Mutton
          </p>
        </div>
      </div>

      {/* Kids Price note */}
      <div className="mt-2 text-center">
        <span className="text-[11px] text-white/60">
          👧 Kids (5–9 yrs) Buffet: <strong className="text-flamora-gold">₹{slotInfo?.kidsPrice}</strong> • Under 5 yrs eat FREE!
        </span>
      </div>

      {/* Action CTA */}
      <button
        onClick={onOpenBooking}
        className="mt-3.5 w-full rounded-xl bg-gradient-to-r from-flamora-red to-flamora-orange py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-1.5"
      >
        <Flame className="h-4 w-4 fill-white" />
        <span>Book Table at This Rate</span>
      </button>
    </div>
  );
}
