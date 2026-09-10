"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, Gift, Flame, ArrowRight, Smartphone, ShieldCheck } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export function AppLoyaltyBanner() {
  return (
    <section className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-700 py-16 sm:py-20 text-white relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-black/20 blur-3xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Details */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/30">
              <Sparkles className="h-3.5 w-3.5 fill-white" /> Flamora Smiles Loyalty Club
            </span>

            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Get ₹250 Flamora Coins On Your First Live Grill Booking
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              Join millions of food lovers! Earn 10% cash back in Flamora Coins on every buffet dining, enjoy priority table reservations, and receive a free Birthday Cake on your special day.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-white/10 p-3 backdrop-blur-md border border-white/15">
                <Gift className="h-5 w-5 text-amber-300 mb-1" />
                <p className="text-xs font-bold">Free Birthday Cake</p>
                <p className="text-[11px] text-white/70">On all birthday bookings</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3 backdrop-blur-md border border-white/15">
                <Flame className="h-5 w-5 text-amber-300 mb-1" />
                <p className="text-xs font-bold">10% Coins Cashback</p>
                <p className="text-[11px] text-white/70">Redeemable on next bill</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3 backdrop-blur-md border border-white/15 col-span-2 sm:col-span-1">
                <ShieldCheck className="h-5 w-5 text-amber-300 mb-1" />
                <p className="text-xs font-bold">Instant Confirmation</p>
                <p className="text-[11px] text-white/70">No wait time at restaurant</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/book-a-table"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-flamora-charcoal shadow-xl transition-all hover:bg-flamora-cream hover:scale-105"
              >
                <span>Join &amp; Book Table</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/offers"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-white/90 hover:text-white underline underline-offset-4"
              >
                View Active Food Festivals
              </Link>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl bg-flamora-charcoal/90 p-6 border border-white/20 shadow-2xl backdrop-blur-xl text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-flamora-red to-flamora-orange text-white shadow-lg">
                <Smartphone className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-white">
                Flamora Mobile App
              </h3>
              <p className="mt-1 text-xs text-white/70">
                Live Waitlist, Buffet Pre-Booking &amp; Exclusive Deals
              </p>

              <div className="mt-6 rounded-2xl bg-white/5 p-4 border border-white/10 text-left space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/70">App Rating</span>
                  <span className="font-bold text-flamora-gold">★ 4.8 / 5.0</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/70">Happy Diners</span>
                  <span className="font-bold text-white">100,000+</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/70">Buffet Deals</span>
                  <span className="font-bold text-emerald-400">Up to 25% OFF</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center gap-3">
                <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold hover:bg-white/20 cursor-pointer">
                  App Store
                </div>
                <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold hover:bg-white/20 cursor-pointer">
                  Google Play
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
