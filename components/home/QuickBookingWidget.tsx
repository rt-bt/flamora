"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar, Clock, Users, Flame, ArrowRight, Sparkles } from "lucide-react";
import { outletBuffetList } from "@/data/buffet";
import { cn } from "@/lib/utils";

export function QuickBookingWidget() {
  const router = useRouter();
  const [selectedOutlet, setSelectedOutlet] = useState(outletBuffetList[0].outletId);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [session, setSession] = useState<"Lunch" | "Dinner">("Dinner");
  const [guests, setGuests] = useState("2");

  const currentOutlet = outletBuffetList.find((o) => o.outletId === selectedOutlet) || outletBuffetList[0];
  const isWeekend = (() => {
    const day = new Date(date).getDay();
    return day === 0 || day === 6; // Sunday or Saturday
  })();

  const pricingGroup = currentOutlet.pricing.find((p) =>
    isWeekend ? p.dayType.includes("Weekend") : p.dayType.includes("Weekday")
  );
  const slotPrice = pricingGroup?.slots.find((s) => s.session === session) || pricingGroup?.slots[0];

  const handleBookNow = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/book-a-table?outlet=${selectedOutlet}&date=${date}&session=${session}&guests=${guests}`
    );
  };

  return (
    <div className="relative mx-auto -mt-16 sm:-mt-20 z-30 max-w-5xl px-4 sm:px-6">
      <div className="rounded-2xl border border-flamora-gold/30 bg-flamora-charcoal/95 p-5 shadow-2xl backdrop-blur-xl sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-flamora-cream/10 pb-4 mb-5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-flamora-red/20 text-flamora-red">
              <Flame className="h-4 w-4 animate-pulse" />
            </span>
            <span className="font-heading text-lg font-bold text-flamora-cream sm:text-xl">
              Book Unlimited Buffet &amp; Live Grill
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-flamora-red/20 px-2.5 py-0.5 text-xs font-semibold text-flamora-orange border border-flamora-red/30">
              <Sparkles className="h-3 w-3" /> Best Price Guarantee
            </span>
          </div>

          {slotPrice && (
            <div className="flex items-center gap-2 text-xs sm:text-sm text-flamora-cream/80">
              <span>Buffet starts at</span>
              <span className="font-bold text-flamora-gold text-base sm:text-lg">
                ₹{slotPrice.vegPrice}*
              </span>
              <span className="text-flamora-cream/40 text-xs">/ person</span>
            </div>
          )}
        </div>

        <form onSubmit={handleBookNow} className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {/* Select Outlet */}
          <div className="relative rounded-xl border border-flamora-cream/15 bg-white/5 p-3 transition-colors hover:border-flamora-gold/50 focus-within:border-flamora-gold">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-flamora-gold">
              Select Restaurant
            </label>
            <div className="mt-1 flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-flamora-orange" />
              <select
                value={selectedOutlet}
                onChange={(e) => setSelectedOutlet(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-flamora-cream focus:outline-none [&>option]:bg-flamora-charcoal [&>option]:text-flamora-cream"
              >
                {outletBuffetList.map((outlet) => (
                  <option key={outlet.outletId} value={outlet.outletId}>
                    {outlet.city} — {outlet.outletName.split("—")[1]?.trim() || outlet.outletName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Date Picker */}
          <div className="relative rounded-xl border border-flamora-cream/15 bg-white/5 p-3 transition-colors hover:border-flamora-gold/50 focus-within:border-flamora-gold">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-flamora-gold">
              Dining Date
            </label>
            <div className="mt-1 flex items-center gap-2">
              <Calendar className="h-4 w-4 shrink-0 text-flamora-orange" />
              <input
                type="date"
                value={date}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-flamora-cream focus:outline-none [color-scheme:dark]"
              />
            </div>
          </div>

          {/* Meal Session */}
          <div className="relative rounded-xl border border-flamora-cream/15 bg-white/5 p-3 transition-colors hover:border-flamora-gold/50 focus-within:border-flamora-gold">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-flamora-gold">
              Meal Session
            </label>
            <div className="mt-1 flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-flamora-orange" />
              <select
                value={session}
                onChange={(e) => setSession(e.target.value as "Lunch" | "Dinner")}
                className="w-full bg-transparent text-sm font-medium text-flamora-cream focus:outline-none [&>option]:bg-flamora-charcoal [&>option]:text-flamora-cream"
              >
                <option value="Lunch">Lunch (12:00 PM - 3:30 PM)</option>
                <option value="Dinner">Dinner (6:30 PM - 11:00 PM)</option>
              </select>
            </div>
          </div>

          {/* Guests */}
          <div className="relative rounded-xl border border-flamora-cream/15 bg-white/5 p-3 transition-colors hover:border-flamora-gold/50 focus-within:border-flamora-gold">
            <label className="block text-[11px] font-semibold uppercase tracking-wider text-flamora-gold">
              Guests
            </label>
            <div className="mt-1 flex items-center gap-2">
              <Users className="h-4 w-4 shrink-0 text-flamora-orange" />
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-transparent text-sm font-medium text-flamora-cream focus:outline-none [&>option]:bg-flamora-charcoal [&>option]:text-flamora-cream"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="8">8 Guests (Large Table)</option>
                <option value="10">10+ Guests (Party/Group)</option>
              </select>
            </div>
          </div>

          {/* Submit CTA */}
          <div className="sm:col-span-2 lg:col-span-1 flex items-center">
            <button
              type="submit"
              className="w-full h-full min-h-[52px] rounded-xl bg-gradient-to-r from-flamora-red to-flamora-orange font-heading text-sm font-bold tracking-wider uppercase text-flamora-cream shadow-lg shadow-flamora-red/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-flamora-red/50 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Book Table</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>

        {/* Bottom Fast Filters / Highlights */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-flamora-cream/10 text-xs text-flamora-cream/70">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-flamora-gold font-medium">✨ Perks:</span>
            <span>🔥 Table-embedded Charcoal Grill</span>
            <span>•</span>
            <span>🍢 Unlimited Skewers &amp; Dips</span>
            <span>•</span>
            <span>🍨 Unlimited Matka Kulfi</span>
          </div>

          <div className="flex items-center gap-2 text-flamora-orange font-medium">
            <span>Veg: ₹{slotPrice?.vegPrice}</span>
            <span>|</span>
            <span>Non-Veg: ₹{slotPrice?.nonVegPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
