"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Check, Sparkles, ArrowRight, Clock, Info } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { outletBuffetList } from "@/data/buffet";
import { cn } from "@/lib/utils";

export function BuffetPricingCalculator() {
  const [selectedOutletId, setSelectedOutletId] = useState(outletBuffetList[0].outletId);
  const [selectedDayType, setSelectedDayType] = useState<0 | 1>(0); // 0: Weekday, 1: Weekend

  const currentOutlet = outletBuffetList.find((o) => o.outletId === selectedOutletId) || outletBuffetList[0];
  const dayPricing = currentOutlet.pricing[selectedDayType];

  return (
    <section className="bg-flamora-charcoal py-20 lg:py-28 text-flamora-cream">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-flamora-gold/20 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-flamora-gold border border-flamora-gold/30">
              <Sparkles className="h-3.5 w-3.5 fill-flamora-gold" /> Transparent Buffet Rates
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-flamora-cream sm:text-4xl lg:text-5xl">
              Outlet Buffet Pricing &amp; Timings
            </h2>
            <p className="mt-3 max-w-2xl text-base text-flamora-cream/70 sm:text-lg">
              Check all-inclusive per-person buffet prices for your favorite Flamora restaurant. Unlimited live grill starters, main course &amp; desserts included.
            </p>
          </div>
        </ScrollReveal>

        {/* Outlet Selector Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {outletBuffetList.map((outlet) => (
            <button
              key={outlet.outletId}
              onClick={() => setSelectedOutletId(outlet.outletId)}
              className={cn(
                "flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300",
                selectedOutletId === outlet.outletId
                  ? "bg-flamora-red text-white shadow-lg shadow-flamora-red/30 scale-105"
                  : "bg-white/10 text-flamora-cream/70 hover:bg-white/15 hover:text-white"
              )}
            >
              <MapPin className="h-4 w-4 shrink-0 text-flamora-gold" />
              <span>{outlet.city}</span>
            </button>
          ))}
        </div>

        {/* Day Type Toggle: Weekday vs Weekend */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-xl bg-white/10 p-1.5 border border-white/10">
            <button
              onClick={() => setSelectedDayType(0)}
              className={cn(
                "rounded-lg px-6 py-2 text-sm font-bold transition-all",
                selectedDayType === 0
                  ? "bg-flamora-gold text-flamora-charcoal shadow-md"
                  : "text-flamora-cream/70 hover:text-white"
              )}
            >
              Weekday (Mon – Fri)
            </button>
            <button
              onClick={() => setSelectedDayType(1)}
              className={cn(
                "rounded-lg px-6 py-2 text-sm font-bold transition-all",
                selectedDayType === 1
                  ? "bg-flamora-gold text-flamora-charcoal shadow-md"
                  : "text-flamora-cream/70 hover:text-white"
              )}
            >
              Weekend (Sat – Sun)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid (Lunch & Dinner) */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {dayPricing.slots.map((slot) => (
            <div
              key={slot.session}
              className="relative flex flex-col justify-between rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-flamora-gold/50 hover:bg-white/[0.08]"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-flamora-gold">
                      Unlimited Buffet
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-white">
                      {slot.session} Feast
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs text-flamora-cream/80">
                    <Clock className="h-3.5 w-3.5 text-flamora-orange" />
                    <span>{slot.timing}</span>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="mt-6 space-y-4">
                  {/* Veg Price */}
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-emerald-500 p-0.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                      <div>
                        <p className="font-semibold text-white text-sm">Vegetarian Buffet</p>
                        <p className="text-[11px] text-flamora-cream/60">Live Grills + Main Course + Desserts</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-heading text-2xl font-bold text-white">₹{slot.vegPrice}</span>
                      <span className="block text-[10px] text-flamora-cream/50">+ Taxes</span>
                    </div>
                  </div>

                  {/* Non-Veg Price */}
                  <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4 border border-white/5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-red-500 p-0.5">
                        <span className="h-2 w-2 rounded-full bg-red-500" />
                      </span>
                      <div>
                        <p className="font-semibold text-white text-sm">Non-Vegetarian Buffet</p>
                        <p className="text-[11px] text-flamora-cream/60">Meat &amp; Seafood Grills + Full Spread</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="font-heading text-2xl font-bold text-flamora-orange">₹{slot.nonVegPrice}</span>
                      <span className="block text-[10px] text-flamora-cream/50">+ Taxes</span>
                    </div>
                  </div>

                  {/* Kids Price */}
                  <div className="flex items-center justify-between px-3 text-xs text-flamora-cream/70">
                    <span>👶 Kids Special Buffet (5-9 Yrs):</span>
                    <span className="font-bold text-white">₹{slot.kidsPrice} + Taxes</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <Link
                  href={`/book-a-table?outlet=${currentOutlet.outletId}&session=${slot.session}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-flamora-red py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-flamora-red/90 hover:scale-[1.02]"
                >
                  <span>Reserve {slot.session} Table</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Outlet Details Banner */}
        <div className="mt-12 max-w-4xl mx-auto rounded-2xl bg-white/5 p-4 sm:p-6 border border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-flamora-cream/80">
          <div className="flex items-center gap-3">
            <Info className="h-5 w-5 text-flamora-gold shrink-0" />
            <div>
              <p className="font-semibold text-white">{currentOutlet.outletName}</p>
              <p className="text-flamora-cream/60 text-xs mt-0.5">{currentOutlet.address}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-flamora-gold">📞 Call Outlet:</span>
            <a href={`tel:${currentOutlet.phone}`} className="font-bold text-white hover:underline">
              {currentOutlet.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
