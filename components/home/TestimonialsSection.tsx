"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  return (
    <section className="bg-flamora-cream py-20 lg:py-28" id="testimonials">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-flamora-red">
                ★ 4.8 / 5.0 Average Rating across 50,000+ Reviews
              </span>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-flamora-charcoal sm:text-4xl lg:text-5xl">
                What Diners Are Saying
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Verified reviews from food lovers, families &amp; celebration groups across our outlets.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setCurrent(Math.max(0, current - 1))}
                disabled={current === 0}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-300 bg-white text-flamora-charcoal shadow-sm transition-all hover:bg-flamora-charcoal hover:text-white disabled:opacity-30"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setCurrent(Math.min(maxIndex, current + 1))}
                disabled={current >= maxIndex}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-300 bg-white text-flamora-charcoal shadow-sm transition-all hover:bg-flamora-charcoal hover:text-white disabled:opacity-30"
                aria-label="Next reviews"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(current, current + visibleCount).map((t, index) => (
            <ScrollReveal key={t.id} delay={index * 100}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-flamora-gold">
                <div>
                  {/* Rating Stars + Occasion Tag */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div className="flex gap-1 text-amber-500">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="rounded-full bg-orange-50 px-2.5 py-0.5 text-[10px] font-bold text-flamora-red border border-orange-200">
                      {t.dinedOccasion}
                    </span>
                  </div>

                  {/* Review Text */}
                  <blockquote className="mt-4 text-sm leading-relaxed text-gray-700 italic">
                    &ldquo;{t.review}&rdquo;
                  </blockquote>

                  {/* Favorite Dish Mention */}
                  <div className="mt-4 rounded-xl bg-flamora-cream/60 p-2.5 text-xs text-gray-800 border border-flamora-charcoal/5">
                    <span className="font-bold text-flamora-orange">🔥 Must-Have:</span> {t.favoriteDish}
                  </div>
                </div>

                {/* Author Info */}
                <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-flamora-red to-flamora-orange font-heading text-sm font-bold text-white shadow-md">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-flamora-charcoal">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      📍 {t.location} • <span className="text-emerald-700 font-medium">{t.source}</span>
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
