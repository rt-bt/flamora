"use client";

import Link from "next/link";
import Image from "next/image";
import { X, Flame, UtensilsCrossed, Gift, ShoppingBag, MapPin, Award, Phone, HelpCircle, Sparkles, PartyPopper } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking?: () => void;
}

export function MobileMenu({ isOpen, onClose, onOpenBooking }: MobileMenuProps) {
  const menuLinks = [
    { label: "Buffet & Live Grill Menu", href: "/menu", icon: UtensilsCrossed, badge: "50+ Dishes" },
    { label: "Happiness Gift Cards", href: "/offers", icon: Gift, badge: "15% Off" },
    { label: "Flamora in a Box (Delivery)", href: "/menu", icon: ShoppingBag, badge: "Hot Combos" },
    { label: "Catering & Large Events", href: "/catering", icon: Flame, badge: "Live Grills" },
    { label: "Celebrations & Free Cake", href: "/celebrations", icon: PartyPopper, badge: "Free Ritual" },
    { label: "Find Outlets & Map", href: "/locations", icon: MapPin },
    { label: "About Flamora Experience", href: "/about", icon: Sparkles },
    { label: "Help & Dining FAQs", href: "/faq", icon: HelpCircle },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full border-none bg-flamora-charcoal sm:max-w-sm [&>button]:hidden flex flex-col justify-between p-4 overflow-y-auto text-white"
      >
        <div>
          {/* Header */}
          <SheetHeader className="flex flex-row items-center justify-between border-b border-white/10 pb-3">
            <SheetTitle className="sr-only">FLAMORA App Menu</SheetTitle>
            <Link href="/" onClick={onClose} className="inline-block">
              <Image
                src="/images/logo.png"
                alt="FLAMORA Grill & Fry"
                width={130}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <button
              onClick={onClose}
              className="rounded-full bg-white/10 p-1.5 text-white/70 hover:bg-white/20 hover:text-white"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </SheetHeader>

          {/* User / Smiles Club Mini Card (Barbeque Nation style) */}
          <div className="mt-4 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/40 via-flamora-charcoal to-black p-3.5 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500 text-black font-black text-sm">
                  👑
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Smiles Club Member</p>
                  <p className="text-[10px] text-amber-300">Gold Tier • 250 Smile Coins</p>
                </div>
              </div>
              <Link
                href="/offers"
                onClick={onClose}
                className="rounded-lg bg-amber-500/20 px-2 py-1 text-[10px] font-bold text-amber-300 border border-amber-500/40"
              >
                Redeem
              </Link>
            </div>
          </div>

          {/* Quick Book Table Button in Drawer */}
          <div className="mt-3">
            <button
              onClick={() => {
                onClose();
                if (onOpenBooking) onOpenBooking();
              }}
              className="w-full rounded-xl bg-gradient-to-r from-flamora-red to-flamora-orange py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
            >
              <Flame className="h-4 w-4 fill-white" />
              <span>Reserve Live Grill Table</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-4 space-y-1" aria-label="Mobile drawer navigation">
            {menuLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4 text-flamora-orange shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[9px] font-bold text-flamora-gold">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Contact / Helpline Bar */}
        <div className="mt-6 border-t border-white/10 pt-4 space-y-2">
          <div className="flex items-center justify-between text-xs text-white/60">
            <span>Customer Helpline:</span>
            <a
              href={`tel:${siteConfig.phone}`}
              className="font-bold text-flamora-gold flex items-center gap-1 hover:underline"
            >
              <Phone className="h-3 w-3" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
          <p className="text-[10px] text-white/40 text-center">
            {siteConfig.restaurantName} • Unlimited Live Grills &amp; Royal Buffet
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
