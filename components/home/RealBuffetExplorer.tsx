"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Flame, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { visualBuffetDishes } from "@/data/visualBuffetData";
import { cn } from "@/lib/utils";

export function RealBuffetExplorer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("starters");
  const [dietFilter, setDietFilter] = useState<"all" | "veg" | "non-veg">("all");

  const categories = [
    { id: "starters", label: "Live Skewers", icon: "🍢" },
    { id: "mains", label: "Curries & Biryani", icon: "🍛" },
    { id: "chaat", label: "Live Chaat", icon: "🥟" },
    { id: "desserts", label: "Kulfi & Desserts", icon: "🍨" },
  ];

  const filteredDishes = visualBuffetDishes.filter((dish) => {
    const matchesCategory = selectedCategory === "all" || dish.category === selectedCategory;
    const matchesDiet =
      dietFilter === "all" ||
      (dietFilter === "veg" && dish.isVeg) ||
      (dietFilter === "non-veg" && !dish.isVeg);
    return matchesCategory && matchesDiet;
  });

  return (
    <section className="bg-[#120D0A] py-16 sm:py-24 text-white relative overflow-hidden border-b border-white/10" id="buffet-spread">
      <Container className="relative z-10">
        {/* Clean Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-flamora-red/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-flamora-orange border border-flamora-red/30">
                <Flame className="h-3.5 w-3.5 fill-flamora-orange" /> Unlimited Feast
              </div>
              <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Today&apos;s Buffet Spread
              </h2>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5 bg-white/5 p-1 rounded-xl border border-white/10">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-bold transition-all",
                      selectedCategory === cat.id
                        ? "bg-flamora-red text-white shadow-md"
                        : "text-gray-300 hover:text-white"
                    )}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>

              {/* Veg / Non-Veg Toggle */}
              <div className="flex gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setDietFilter("all")}
                  className={cn(
                    "rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all",
                    dietFilter === "all" ? "bg-white text-black" : "text-gray-400 hover:text-white"
                  )}
                >
                  All
                </button>
                <button
                  onClick={() => setDietFilter("veg")}
                  className={cn(
                    "rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all flex items-center gap-1",
                    dietFilter === "veg" ? "bg-emerald-600 text-white" : "text-emerald-400 hover:text-white"
                  )}
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400" /> Veg
                </button>
                <button
                  onClick={() => setDietFilter("non-veg")}
                  className={cn(
                    "rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all flex items-center gap-1",
                    dietFilter === "non-veg" ? "bg-red-600 text-white" : "text-red-400 hover:text-white"
                  )}
                >
                  <span className="h-2 w-2 rounded-full bg-red-400" /> Non-Veg
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Visual Clean Grid - Less Text, Big Visuals */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filteredDishes.map((dish) => (
            <ScrollReveal key={dish.id}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-flamora-gold hover:shadow-xl">
                {/* Food Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Veg / Non-Veg Indicator on Top Left */}
                  <div className="absolute top-2.5 left-2.5">
                    <div
                      className={cn(
                        "flex h-4 w-4 items-center justify-center rounded-xs border p-0.5 bg-black/60 backdrop-blur-sm",
                        dish.isVeg ? "border-emerald-400" : "border-red-400"
                      )}
                    >
                      <span
                        className={cn(
                          "h-2 w-2 rounded-full",
                          dish.isVeg ? "bg-emerald-400" : "bg-red-400"
                        )}
                      />
                    </div>
                  </div>

                  {/* Top Right Tag */}
                  <div className="absolute top-2.5 right-2.5">
                    <span className="rounded-md bg-black/70 px-2 py-0.5 text-[10px] font-bold text-flamora-gold border border-white/10 backdrop-blur-sm">
                      {dish.tag.split(" ")[0]} {dish.tag.split(" ")[1] || ""}
                    </span>
                  </div>
                </div>

                {/* Minimal Content */}
                <div className="p-3.5 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-white group-hover:text-flamora-orange transition-colors truncate">
                      {dish.name}
                    </h3>
                    <p className="text-[11px] text-gray-400 mt-0.5 truncate">
                      {dish.servedWith}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 text-[11px]">
                    <span className="text-emerald-400 font-semibold">Unlimited</span>
                    <Link
                      href="/book-a-table"
                      className="font-bold text-flamora-gold hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Book</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Compact Footer Link */}
        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-gray-400">
          <p>🔥 All 50+ dishes are included in your fixed-price buffet.</p>
          <Link
            href="/menu"
            className="font-bold text-flamora-orange hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>View Full Menu &amp; Ingredients</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
