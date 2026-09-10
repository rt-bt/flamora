"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, MapPin, ShoppingBag, ChevronDown } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";
import { outletBuffetList } from "@/data/buffet";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Mumbai");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-flamora-charcoal/95 backdrop-blur-md py-2.5 shadow-xl border-b border-white/10"
            : "bg-flamora-charcoal/80 backdrop-blur-sm py-3.5 border-b border-white/5"
        )}
      >
        <Container>
          <nav
            className="flex items-center justify-between gap-4"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              href="/"
              className="relative z-10 flex items-center transition-transform hover:scale-105 shrink-0"
            >
              <Image
                src="/images/logo.png"
                alt="FLAMORA Grill & Fry"
                width={170}
                height={55}
                priority
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              />
            </Link>

            {/* Outlet / City Selector (Barbeque Nation style) */}
            <div className="hidden md:flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-flamora-cream backdrop-blur-md transition-colors hover:border-flamora-gold/60">
              <MapPin className="h-3.5 w-3.5 text-flamora-orange shrink-0" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="bg-transparent font-semibold text-white focus:outline-none cursor-pointer [&>option]:bg-flamora-charcoal [&>option]:text-white"
                aria-label="Select dining city"
              >
                {outletBuffetList.map((outlet) => (
                  <option key={outlet.outletId} value={outlet.city}>
                    {outlet.city}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-1 xl:flex" role="list">
              {siteConfig.nav.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="px-3.5 py-2 text-sm font-medium text-flamora-cream/80 transition-colors hover:text-flamora-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTAs + Mobile Toggle */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Takeaway Button */}
              <Link
                href="/menu"
                className="hidden lg:inline-flex items-center gap-1.5 rounded-xl border border-flamora-orange/60 bg-transparent px-3 py-2 text-xs font-bold text-flamora-orange transition-colors hover:bg-flamora-orange hover:text-white"
              >
                <ShoppingBag className="h-3.5 w-3.5" />
                <span>Takeaway</span>
              </Link>

              {/* Book a Table Primary CTA */}
              <Link
                href={siteConfig.nav.cta.href}
                className={cn(
                  buttonVariants(),
                  "bg-gradient-to-r from-flamora-red to-flamora-orange text-white font-bold shadow-lg shadow-flamora-red/30 hover:scale-105 transition-all text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl"
                )}
              >
                {siteConfig.nav.cta.label}
              </Link>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-flamora-cream transition-colors hover:text-flamora-gold lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </nav>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
