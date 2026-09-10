"use client";

import Link from "next/link";
import { Flame, Sparkles, Utensils, Star, ShieldCheck, ChevronDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] lg:min-h-screen items-center justify-center overflow-hidden pt-24 pb-20">
      {/* Background Image with Sizzling Grill Photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=85')",
        }}
        role="img"
        aria-label="Flamora live grill buffet dining atmosphere"
      />

      {/* Multi-layered Dark Ember Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-flamora-charcoal via-flamora-charcoal/75 to-flamora-charcoal/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-950/30 via-transparent to-black/60" />

      {/* Content */}
      <Container className="relative z-10 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Top Pill / Active Festival Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-flamora-gold/40 bg-flamora-charcoal/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-flamora-gold backdrop-blur-md shadow-lg shadow-black/40">
            <Flame className="h-4 w-4 fill-flamora-red text-flamora-red animate-pulse" />
            <span>India&apos;s Premium Live Grill &amp; Buffet Feast</span>
            <span className="hidden sm:inline-block">•</span>
            <span className="hidden sm:inline-block text-white">Starting ₹699*</span>
          </div>

          <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-flamora-cream sm:text-6xl lg:text-7xl">
            Where Fire Meets <span className="bg-gradient-to-r from-flamora-orange via-amber-400 to-flamora-red bg-clip-text text-transparent">Flavor</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-flamora-cream/90 sm:text-xl">
            Unlimited sizzling skewers grilled live on your table, followed by a lavish 4-course royal buffet &amp; dessert extravaganza.
          </p>

          {/* Quick Feature Badges (Barbeque Nation trademark style) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold text-white">
            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 backdrop-blur-md border border-white/15">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-flamora-red text-white text-[10px] font-bold">✓</span>
              <span>Live Table Grill</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 backdrop-blur-md border border-white/15">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-flamora-red text-white text-[10px] font-bold">✓</span>
              <span>50+ Buffet Delicacies</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-2 backdrop-blur-md border border-white/15">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-flamora-red text-white text-[10px] font-bold">✓</span>
              <span>Unlimited Matka Kulfi</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book-a-table"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full sm:w-auto bg-gradient-to-r from-flamora-red to-flamora-orange px-8 py-6 text-base font-bold uppercase tracking-wider text-white shadow-xl shadow-flamora-red/30 transition-all hover:scale-105 hover:shadow-flamora-red/50"
              )}
            >
              Book A Table Now
            </Link>
            <Link
              href="/menu"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-auto border-flamora-cream/40 bg-white/5 px-8 py-6 text-base font-semibold text-flamora-cream backdrop-blur-sm hover:bg-white/15 hover:text-white"
              )}
            >
              Explore Buffet Menu
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
