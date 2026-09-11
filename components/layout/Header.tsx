"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, MapPin, ShoppingBag, Flame, ChevronDown, Check, X } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { MobileMenu } from "./MobileMenu";
import { outletBuffetList } from "@/data/buffet";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onOpenBooking?: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(outletBuffetList[0].city); // "Patna" by default
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsCityDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentOutlet = outletBuffetList.find((o) => o.city === selectedCity) || outletBuffetList[0];

  return (
    <>
      {/* ═══════════════════════════════════════════════
          MOBILE HEADER — Barbeque Nation exact style
          ═══════════════════════════════════════════════ */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[51] transition-all duration-300 lg:hidden rounded-b-2xl",
          isScrolled
            ? "bg-white border-b border-[#E5E5E5] shadow-sm py-2.5"
            : "bg-white/10 backdrop-blur-sm border-b border-transparent py-2.5"
        )}
      >
        <div className="mx-auto flex items-center gap-3 px-4">

          {/* Left: Brand logo (small, mobile size) */}
          <Link href="/" className="flex shrink-0">
            <Image
              src="/images/logo.png"
              alt="Flamora"
              width={36}
              height={32}
              className="h-8 w-auto object-contain"
              priority
            />
          </Link>

          {/* Center: City Selector — Barbeque Nation style pill button */}
          <div className="flex-1 min-w-0 relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsCityDropdownOpen((prev) => !prev)}
              className="flex flex-col items-start w-full"
              aria-haspopup="listbox"
              aria-expanded={isCityDropdownOpen}
            >
              <div className="flex items-center gap-0.5">
                <span
                  className={cn(
                    "font-bold text-[15px] max-w-[160px] overflow-hidden text-ellipsis whitespace-nowrap leading-tight",
                    isScrolled ? "text-[#111827]" : "text-white"
                  )}
                >
                  📍 {selectedCity}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-[#EE5735] transition-transform duration-200",
                    isCityDropdownOpen ? "rotate-180" : ""
                  )}
                />
              </div>
              <span className="text-[11px] text-[#8A8A8A] mt-0.5 leading-none">
                {currentOutlet.outletName}
              </span>
            </button>

            {/* City Dropdown Panel */}
            {isCityDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl bg-white shadow-2xl border border-gray-100 z-[60] overflow-hidden animate-in slide-in-from-top-2 duration-200">
                {/* Dropdown Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-gray-50">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#EE5735]" />
                    <span className="text-sm font-semibold text-[#111827]">Select Restaurant</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsCityDropdownOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* City List */}
                <ul role="listbox" className="py-1.5 max-h-64 overflow-y-auto">
                  {outletBuffetList.map((outlet) => {
                    const isActive = outlet.city === selectedCity;
                    return (
                      <li key={outlet.outletId}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={isActive}
                          onClick={() => {
                            setSelectedCity(outlet.city);
                            setIsCityDropdownOpen(false);
                          }}
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-3 text-left transition-colors hover:bg-orange-50",
                            isActive ? "bg-orange-50" : ""
                          )}
                        >
                          <div>
                            <p className={cn("text-sm font-semibold", isActive ? "text-[#EE5735]" : "text-[#111827]")}>
                              📍 {outlet.city}
                            </p>
                            <p className="text-[11px] text-[#6B7280] mt-0.5 line-clamp-1">{outlet.outletName}</p>
                            <p className="text-[10px] text-[#9CA3AF] mt-0.5 line-clamp-1">{outlet.address}</p>
                          </div>
                          {isActive && (
                            <Check className="h-4 w-4 shrink-0 text-[#EE5735] ml-2" />
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>

          {/* Right: User avatar placeholder */}
          <div className="flex items-center gap-2 shrink-0 ml-auto">
            <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 overflow-hidden text-sm">
              👤
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════════════
          DESKTOP HEADER — Original Flamora dark style
          ═══════════════════════════════════════════════ */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 hidden lg:block",
          isScrolled
            ? "bg-flamora-charcoal/95 backdrop-blur-md py-2.5 shadow-xl border-b border-white/10"
            : "bg-flamora-charcoal/80 backdrop-blur-sm py-3.5 border-b border-white/5"
        )}
      >
        <Container>
          <nav className="flex items-center justify-between gap-4" aria-label="Main navigation">
            {/* Logo */}
            <Link href="/" className="relative z-10 flex items-center transition-transform hover:scale-105 shrink-0">
              <Image
                src="/images/logo.png"
                alt="FLAMORA Grill & Fry"
                width={170}
                height={55}
                priority
                className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
              />
            </Link>

            {/* Desktop City Selector */}
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

            {/* Desktop Nav Links */}
            <ul className="hidden items-center gap-1 xl:flex" role="list">
              {siteConfig.nav.main.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="px-3.5 py-2 text-sm font-medium text-flamora-cream/80 transition-colors hover:text-flamora-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTAs */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Link
                href="/menu"
                className="hidden lg:inline-flex items-center gap-1.5 rounded-xl border border-flamora-orange/60 bg-transparent px-3 py-2 text-xs font-bold text-flamora-orange transition-colors hover:bg-flamora-orange hover:text-white"
              >
                <ShoppingBag className="h-3.5 w-3.5" />
                <span>Takeaway</span>
              </Link>

              {onOpenBooking ? (
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className={cn(
                    buttonVariants(),
                    "bg-gradient-to-r from-flamora-red to-flamora-orange text-white font-bold shadow-lg shadow-flamora-red/30 hover:scale-105 transition-all text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl flex items-center gap-1.5"
                  )}
                >
                  <Flame className="h-3.5 w-3.5 fill-white" />
                  Book Table
                </button>
              ) : (
                <Link
                  href={siteConfig.nav.cta.href}
                  className={cn(
                    buttonVariants(),
                    "bg-gradient-to-r from-flamora-red to-flamora-orange text-white font-bold shadow-lg shadow-flamora-red/30 hover:scale-105 transition-all text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl"
                  )}
                >
                  {siteConfig.nav.cta.label}
                </Link>
              )}
            </div>
          </nav>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenBooking={onOpenBooking}
      />
    </>
  );
}
