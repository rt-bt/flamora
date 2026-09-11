"use client";

import Link from "next/link";
import { Flame, UtensilsCrossed, Gift, ShoppingBag, PartyPopper, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileQuickServicesProps {
  onOpenBooking: () => void;
  onScrollToRates: () => void;
}

export function MobileQuickServices({
  onOpenBooking,
  onScrollToRates,
}: MobileQuickServicesProps) {
  const quickItems = [
    {
      id: "book-table",
      title: "Book Table",
      subtitle: "Instant Live Grill",
      badge: "Fast Track",
      icon: Flame,
      gradient: "from-orange-500 to-flamora-red",
      iconColor: "text-white",
      badgeBg: "bg-flamora-red text-white",
      onClick: onOpenBooking,
    },
    {
      id: "buffet-rates",
      title: "Buffet Prices",
      subtitle: "From ₹699*",
      badge: "Today's Rate",
      icon: UtensilsCrossed,
      gradient: "from-amber-500 to-yellow-600",
      iconColor: "text-white",
      badgeBg: "bg-amber-600 text-white",
      onClick: onScrollToRates,
    },
    {
      id: "happiness-cards",
      title: "Happiness Cards",
      subtitle: "Gift Vouchers",
      badge: "Up to 15% Off",
      icon: Gift,
      gradient: "from-emerald-500 to-teal-600",
      iconColor: "text-white",
      badgeBg: "bg-emerald-600 text-white",
      href: "/offers",
    },
    {
      id: "box-delivery",
      title: "Feast in a Box",
      subtitle: "Takeaway & Delivery",
      badge: "Hot @ Home",
      icon: ShoppingBag,
      gradient: "from-sky-500 to-blue-600",
      iconColor: "text-white",
      badgeBg: "bg-sky-600 text-white",
      href: "/menu",
    },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-base font-extrabold text-white tracking-wide flex items-center gap-1.5">
          <span>Quick Services</span>
          <span className="h-1.5 w-1.5 rounded-full bg-flamora-orange" />
        </h3>
        <Link
          href="/menu"
          className="text-xs font-semibold text-flamora-gold flex items-center gap-0.5 hover:underline"
        >
          <span>View All</span>
          <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {quickItems.map((item) => {
          const Icon = item.icon;

          const content = (
            <div
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md transition-all duration-200 active:scale-95 hover:border-white/20 hover:bg-white/10 shadow-md",
                "cursor-pointer"
              )}
            >
              {/* Top Row: Icon + Badge */}
              <div className="flex items-center justify-between">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br shadow-md",
                    item.gradient
                  )}
                >
                  <Icon className={cn("h-5 w-5", item.iconColor)} />
                </div>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider",
                    item.badgeBg
                  )}
                >
                  {item.badge}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="mt-3">
                <h4 className="font-heading text-sm font-bold text-white group-hover:text-flamora-gold transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] font-medium text-white/60">
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-2 flex items-center justify-between pt-1 border-t border-white/5 text-[10px] font-semibold text-white/40 group-hover:text-flamora-orange">
                <span>Explore</span>
                <ChevronRight className="h-3 w-3" />
              </div>
            </div>
          );

          if (item.href) {
            return (
              <Link key={item.id} href={item.href}>
                {content}
              </Link>
            );
          }

          return (
            <button
              key={item.id}
              type="button"
              onClick={item.onClick}
              className="text-left w-full"
            >
              {content}
            </button>
          );
        })}
      </div>
    </div>
  );
}
