"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, Car, Wine, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { authenticOutletLocations } from "@/data/authenticData";
import { cn } from "@/lib/utils";

export function OutletsLiveStatus() {
  const [selectedCity, setSelectedCity] = useState("All");
  const cities = ["All", "Mumbai", "Delhi NCR", "Bangalore", "Hyderabad", "Pune"];

  const filteredOutlets = authenticOutletLocations.filter(
    (outlet) => selectedCity === "All" || outlet.city === selectedCity
  );

  return (
    <section className="bg-white py-20 lg:py-28" id="restaurants">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800 border border-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              5 Outlets Serving Live Across India
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-flamora-charcoal sm:text-4xl lg:text-5xl">
              Find Your Nearest <span className="text-flamora-orange">Flamora Outlet</span>
            </h2>
            <p className="mt-3 max-w-2xl text-base text-gray-600 sm:text-lg">
              Check live table availability, outlet phone desks, valet parking status &amp; direct table reservation.
            </p>
          </div>
        </ScrollReveal>

        {/* City Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {cities.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={cn(
                "rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all",
                selectedCity === city
                  ? "bg-flamora-charcoal text-flamora-gold shadow-md scale-105"
                  : "bg-flamora-cream text-gray-700 hover:bg-gray-200"
              )}
            >
              {city === "All" ? "All Cities (5)" : city}
            </button>
          ))}
        </div>

        {/* Outlets Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredOutlets.map((outlet, idx) => (
            <ScrollReveal key={outlet.id} delay={idx * 80}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-flamora-gold hover:shadow-xl">
                <div>
                  {/* Status & City Header */}
                  <div className="flex items-center justify-between gap-2 border-b border-gray-100 pb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-flamora-red">
                      {outlet.city} • {outlet.area}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200">
                      {outlet.liveStatus}
                    </span>
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-bold text-flamora-charcoal leading-snug">
                    {outlet.name}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-gray-600">
                    {outlet.address}
                  </p>

                  <div className="mt-2 text-xs font-medium text-amber-800 bg-amber-50 rounded-lg p-2 border border-amber-200/60">
                    📍 <strong>Landmark:</strong> {outlet.landmark}
                  </div>

                  {/* Amenities */}
                  <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-gray-600">
                    {outlet.valet && (
                      <span className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1">
                        <Car className="h-3 w-3 text-flamora-orange" /> Free Valet
                      </span>
                    )}
                    {outlet.bar && (
                      <span className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1">
                        <Wine className="h-3 w-3 text-flamora-orange" /> Bar Available
                      </span>
                    )}
                    <span className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1">
                      🔥 Live Charcoal Grill
                    </span>
                  </div>

                  {/* Timing & Phone */}
                  <div className="mt-4 space-y-1.5 text-xs text-gray-500 border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-3.5 w-3.5 text-flamora-orange" />
                      <span>{outlet.timing}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-3.5 w-3.5 text-flamora-orange" />
                      <a href={`tel:${outlet.phone.split("/")[0].trim()}`} className="font-semibold text-gray-800 hover:text-flamora-red">
                        {outlet.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Buffet Price & CTA */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="block text-[10px] uppercase text-gray-500 font-bold">Weekday Buffet</span>
                    <span className="font-heading text-lg font-bold text-flamora-charcoal">
                      ₹{outlet.vegPriceWeekday} <span className="text-xs font-normal text-gray-500">/ Veg</span>
                    </span>
                  </div>

                  <Link
                    href={`/book-a-table?outlet=${outlet.id}`}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-flamora-red px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-flamora-red/90 hover:scale-105"
                  >
                    <span>Book Table</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
