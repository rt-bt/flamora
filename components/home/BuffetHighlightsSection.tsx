"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Flame, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { buffetCourseHighlights } from "@/data/buffet";
import { cn } from "@/lib/utils";

export function BuffetHighlightsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentCourse = buffetCourseHighlights[activeTab];

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-flamora-red/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-flamora-red border border-flamora-red/20">
              <Flame className="h-3.5 w-3.5 fill-flamora-red" /> The Unlimited Buffet Journey
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-flamora-charcoal sm:text-4xl lg:text-5xl">
              What Makes The <span className="text-flamora-orange">Flamora Feast</span> Unforgettable?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-flamora-text/70 sm:text-lg">
              Experience the trademark 4-course unlimited feast. Start with sizzling live skewers on your table, move to our grand royal buffet, and finish at our signature Kulfi Bar.
            </p>
          </div>
        </ScrollReveal>

        {/* Course Selection Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {buffetCourseHighlights.map((course, idx) => (
            <button
              key={course.step}
              onClick={() => setActiveTab(idx)}
              className={cn(
                "flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 sm:px-6",
                activeTab === idx
                  ? "bg-flamora-charcoal text-flamora-gold shadow-lg shadow-flamora-charcoal/30 scale-105 border-b-2 border-flamora-gold"
                  : "bg-flamora-cream text-flamora-charcoal/70 hover:bg-flamora-cream/80 hover:text-flamora-charcoal"
              )}
            >
              <span className={cn(
                "flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold",
                activeTab === idx ? "bg-flamora-red text-white" : "bg-flamora-charcoal/10 text-flamora-charcoal"
              )}>
                {course.step}
              </span>
              <span>{course.title.split("—")[0].split(" ")[0]} {course.title.split(" ")[1]}</span>
            </button>
          ))}
        </div>

        {/* Active Course Card Preview */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-flamora-cream bg-flamora-cream/40 p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Info */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-flamora-red px-3 py-1 font-heading text-xs font-bold uppercase tracking-wider text-white">
                  Step {currentCourse.step}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-flamora-orange">
                  {currentCourse.subtitle}
                </span>
              </div>

              <h3 className="mt-4 font-heading text-2xl font-bold text-flamora-charcoal sm:text-3xl lg:text-4xl">
                {currentCourse.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-flamora-text/80">
                {currentCourse.description}
              </p>

              <div className="mt-6 border-t border-flamora-charcoal/10 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-flamora-charcoal/80 mb-3">
                  🔥 Highlight Dishes in this Course:
                </h4>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {currentCourse.dishes.map((dish, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-sm text-flamora-charcoal/90">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                      <span className="font-medium">{dish}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/book-a-table"
                  className="inline-flex items-center gap-2 rounded-xl bg-flamora-red px-6 py-3.5 text-sm font-bold text-flamora-cream shadow-md transition-all hover:bg-flamora-red/90 hover:scale-105"
                >
                  <span>Reserve Table for this Feast</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/menu"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-flamora-charcoal hover:text-flamora-red transition-colors"
                >
                  <span>View Complete 50+ Dishes</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Large Image */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={currentCourse.image}
                  alt={currentCourse.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-flamora-charcoal/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-flamora-charcoal/80 p-3 backdrop-blur-md border border-white/10 text-white">
                  <div className="flex items-center gap-2">
                    <Flame className="h-5 w-5 text-flamora-orange" />
                    <span className="text-xs sm:text-sm font-semibold">Unlimited Refills Included</span>
                  </div>
                  <span className="text-xs font-bold text-flamora-gold">Live at Every Table</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
