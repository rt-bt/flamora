"use client";

import React from "react";
import { Star, CheckCircle } from "lucide-react";

export interface ReviewItem {
  name: string;
  location: string;
  rating: number;
  date: string;
  dish: string;
  comment: string;
}

const reviews: ReviewItem[] = [
  {
    name: "Aman Verma",
    location: "Bariyarpur, Motihari",
    rating: 5,
    date: "3 days ago",
    dish: "Chicken Tikka Grill & Peri-Peri Wings",
    comment:
      "Best live charcoal grill in Motihari hands down! The smoky aroma is authentic, not that fake oven grilled taste. Chicken was tender, juicy, and the mint chutney is top-notch. Fast WhatsApp ordering too!",
  },
  {
    name: "Pooja Singh",
    location: "Chhatauni, Motihari",
    rating: 5,
    date: "1 week ago",
    dish: "Paneer Tikka & Crispy Fries Platter",
    comment:
      "Finally Motihari has a premium, clean grill place! The paneer was super soft with nice charred edges. Loved the packaging and quick takeaway service. Family loved it!",
  },
  {
    name: "Mohammad Tariq",
    location: "Raja Bazar, Motihari",
    rating: 5,
    date: "2 weeks ago",
    dish: "Mutton Seekh Kebab & Flamora Combo",
    comment:
      "Mutton seekh kebab melts in your mouth! Rich spices and genuine charcoal flavor. Reasonable pricing for this kind of quality. Will definitely be a regular here.",
  },
];

export default function CustomerReviews() {
  return (
    <section className="relative bg-[#0A0A0A] text-[#F4EBD6] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] overflow-hidden">
      {/* Background Subtle Flame Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6A24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase">
                REAL MOTIHARI FOODIES
              </span>
              <span className="text-white/30">•</span>
              <span className="flex items-center gap-1 text-xs text-[#FFC107] font-semibold">
                <Star size={13} className="fill-[#FFC107] text-[#FFC107]" />
                4.9 Google Rating
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Loved by Customers.
            </h2>
          </div>

          <p className="mt-3 md:mt-0 text-xs sm:text-sm text-[#F4EBD6]/70 max-w-md">
            Don&apos;t just take our word for it. Here is what local food lovers in Motihari have to say about their Flamora experience.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="luxury-card rounded-2xl p-6 flex flex-col justify-between relative group"
            >
              <div>
                {/* Header: Stars & Verified Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="fill-[#FFC107] text-[#FFC107]"
                      />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#25D366] bg-[#25D366]/10 px-2.5 py-0.5 rounded-full border border-[#25D366]/20">
                    <CheckCircle size={11} />
                    Verified Diner
                  </span>
                </div>

                {/* Dish Tag */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[11px] font-medium text-[#FF6A24] mb-3">
                  Ordered: {rev.dish}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-[#F4EBD6]/90 leading-relaxed font-normal italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-white">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-[#F4EBD6]/60">
                    {rev.location}
                  </p>
                </div>
                <span className="text-[10px] text-gray-500">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-10 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-[#FF6A24] text-white flex items-center justify-center text-xs font-bold ring-2 ring-black">
                A
              </div>
              <div className="w-8 h-8 rounded-full bg-[#FFC107] text-black flex items-center justify-center text-xs font-bold ring-2 ring-black">
                P
              </div>
              <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center text-xs font-bold ring-2 ring-black">
                M
              </div>
              <div className="w-8 h-8 rounded-full bg-[#D62B28] text-white flex items-center justify-center text-xs font-bold ring-2 ring-black">
                R
              </div>
            </div>
            <p className="text-xs text-[#F4EBD6]/80 font-medium">
              Over <strong className="text-white font-semibold">15,000+ meals</strong> grilled and enjoyed across Motihari
            </p>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-heading font-semibold text-[#FF6A24] hover:text-[#E55815] transition-colors flex items-center gap-1"
          >
            <span>Read all 450+ reviews on Google Maps</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
