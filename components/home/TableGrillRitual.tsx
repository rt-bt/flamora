"use client";

import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { flamoraRitualSteps } from "@/data/authenticData";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function TableGrillRitual() {
  return (
    <section className="bg-flamora-charcoal text-white py-20 lg:py-28 relative overflow-hidden border-y border-white/10">
      {/* Subtle ember glow in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-flamora-red/15 via-flamora-orange/15 to-transparent blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-flamora-red/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-flamora-orange border border-flamora-red/30">
              <Sparkles className="h-3.5 w-3.5" /> Trademark Dining Experience
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              The Famous Flamora <span className="text-flamora-orange">Live Grill Ritual</span>
            </h2>
            <p className="mt-4 text-base text-gray-300 sm:text-lg">
              No pre-cooked food. No cold buffets. Here is how India&apos;s most loved unlimited live grill dining unfolds at your table.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Steps Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {flamoraRitualSteps.map((step, idx) => (
            <ScrollReveal key={step.num} delay={idx * 100}>
              <div className="relative flex flex-col justify-between h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300 hover:border-flamora-gold/50 hover:bg-white/[0.08] hover:-translate-y-1">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{step.icon}</span>
                    <span className="font-heading text-3xl font-extrabold text-white/20">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="mt-6 font-heading text-xl font-bold text-white leading-snug">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-flamora-gold flex items-center justify-between">
                  <span>Unlimited Refills</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-flamora-orange animate-ping" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Table Flag Callout Banner (Iconic Barbeque feature) */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-orange-950/80 to-amber-950/80 p-6 sm:p-8 border border-flamora-gold/30 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-flamora-red text-white text-2xl shadow-lg">
              🚩
            </div>
            <div>
              <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                How the Table Flag Works?
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">
                🟢 <strong>Flag UP:</strong> Non-stop sizzling skewers served directly at your table. <br />
                🔴 <strong>Flag DOWN:</strong> You&apos;re ready to attack the Main Course Buffet, Biryani Handis &amp; Kulfi Bar!
              </p>
            </div>
          </div>

          <Link
            href="/book-a-table"
            className="shrink-0 rounded-xl bg-flamora-red px-6 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all hover:bg-flamora-red/90 hover:scale-105 flex items-center gap-2"
          >
            <span>Book Your Table Now</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
