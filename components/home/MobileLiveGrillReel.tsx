"use client";

import { useState } from "react";
import Link from "next/link";
import { Flame, Sparkles, ChevronRight, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileLiveGrillReelProps {
  onOpenBooking: () => void;
}

const categories = ["All", "Live Grills", "Main Course", "Live Counters", "Desserts"];

const grillDishes = [
  {
    id: "cajun-potato",
    name: "Crispy Cajun Spiced Potato",
    category: "Live Grills",
    type: "veg",
    tag: "Crowd Favorite",
    tagColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    description: "Golden fried potatoes tossed in creamy Cajun garlic dip & fresh herbs.",
    servedWith: "Mint Mayo & Salsa",
  },
  {
    id: "bbq-chicken",
    name: "Flamora Smoked Chicken Tikka",
    category: "Live Grills",
    type: "non-veg",
    tag: "Chef's Signature",
    tagColor: "bg-flamora-red/20 text-rose-300 border-flamora-red/40",
    description: "Tender boneless chicken marinated in Kashmiri red chili & charcoal grilled live on your table.",
    servedWith: "Mint Chutney & Pickled Onions",
  },
  {
    id: "crispy-corn",
    name: "Fiery Crispy Corn Toss",
    category: "Live Grills",
    type: "veg",
    tag: "Unlimited Refills",
    tagColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
    description: "Crunchy sweet corn kernels spiced with roasted cumin, lime & spring onions.",
    servedWith: "Tangy Chaat Dip",
  },
  {
    id: "fish-tikka",
    name: "Coastal Lemon Garlic Fish",
    category: "Live Grills",
    type: "non-veg",
    tag: "Must Try",
    tagColor: "bg-sky-500/20 text-sky-300 border-sky-500/40",
    description: "Juicy basa fillets with mustard herbs and lemon zest on live skewers.",
    servedWith: "Garlic Butter Glaze",
  },
  {
    id: "paneer-tikka",
    name: "Tandoori Malai Paneer Skewer",
    category: "Live Grills",
    type: "veg",
    tag: "Melt In Mouth",
    tagColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    description: "Soft farm-fresh cottage cheese skewered with bell peppers and layered in rich cream.",
    servedWith: "Lachha Salad",
  },
  {
    id: "biryani",
    name: "Dum Handi Mutton & Chicken Biryani",
    category: "Main Course",
    type: "non-veg",
    tag: "Royal Feast",
    tagColor: "bg-purple-500/20 text-purple-300 border-purple-500/40",
    description: "Fragrant long-grain basmati cooked in slow charcoal handis with aromatic spices.",
    servedWith: "Mirchi Ka Salan & Raita",
  },
  {
    id: "dessert-kulfi",
    name: "Matka Kulfi & Angoori Jamun",
    category: "Desserts",
    type: "veg",
    tag: "Unlimited Sweets",
    tagColor: "bg-pink-500/20 text-pink-300 border-pink-500/40",
    description: "Creamy traditional pistachio kulfi alongside hot mini gulab jamuns & brownie sizzler.",
    servedWith: "Chocolate & Rabdi Drizzle",
  },
];

export function MobileLiveGrillReel({ onOpenBooking }: MobileLiveGrillReelProps) {
  const [activeTab, setActiveTab] = useState("All");

  const filteredDishes =
    activeTab === "All"
      ? grillDishes
      : grillDishes.filter((d) => d.category === activeTab);

  return (
    <div className="space-y-3.5">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-heading text-lg font-extrabold text-white flex items-center gap-2">
            <span>What&apos;s On The Grill</span>
            <Flame className="h-4 w-4 fill-flamora-orange text-flamora-orange" />
          </h3>
          <p className="text-xs text-white/60">Unlimited live skewers served on your table</p>
        </div>
        <Link
          href="/menu"
          className="text-xs font-semibold text-flamora-gold flex items-center gap-0.5 hover:underline shrink-0"
        >
          <span>Full Menu</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Category Pills Slider */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveTab(cat)}
            className={cn(
              "shrink-0 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all",
              activeTab === cat
                ? "bg-flamora-red text-white shadow-md shadow-flamora-red/30"
                : "bg-white/10 text-white/70 hover:bg-white/15"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Horizontal Dish Cards Reel */}
      <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory no-scrollbar">
        {filteredDishes.map((dish) => {
          const isVeg = dish.type === "veg";

          return (
            <div
              key={dish.id}
              className="w-[260px] shrink-0 snap-start rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-3.5 backdrop-blur-md flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Top Type Indicator + Badge */}
                <div className="flex items-center justify-between">
                  <div
                    className={cn(
                      "flex h-4 w-4 items-center justify-center rounded border p-0.5",
                      isVeg ? "border-emerald-500" : "border-rose-500"
                    )}
                  >
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full",
                        isVeg ? "bg-emerald-500" : "bg-rose-500"
                      )}
                    />
                  </div>

                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider border",
                      dish.tagColor
                    )}
                  >
                    {dish.tag}
                  </span>
                </div>

                {/* Dish Name */}
                <h4 className="mt-2.5 font-heading text-sm font-bold text-white leading-snug">
                  {dish.name}
                </h4>

                {/* Description */}
                <p className="mt-1 text-[11px] leading-relaxed text-white/70 line-clamp-2">
                  {dish.description}
                </p>
              </div>

              {/* Bottom Row */}
              <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10px]">
                <span className="text-flamora-gold font-medium">
                  {dish.servedWith}
                </span>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="rounded-lg bg-flamora-orange/20 px-2.5 py-1 font-bold text-flamora-orange border border-flamora-orange/40 hover:bg-flamora-orange hover:text-white transition-colors"
                >
                  Taste Live
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
