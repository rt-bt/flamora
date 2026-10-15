"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
import { siteConfig, getWhatsAppOrderUrl, isRestaurantOpen } from "@/config/siteConfig";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
  { href: "/find-us", label: "Find Us" },
  { href: "/franchise", label: "Franchise" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow] = useState(() => isRestaurantOpen());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Authentic Restaurant Notice Bar */}
      <div className="bg-[#0A0A0A] border-b border-white/[0.06] text-xs py-2 px-4 hidden md:block select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[#F4EBD6]/80">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
            </span>
            <span className="font-heading font-bold text-[11px] tracking-wider text-white">
              🔥 MOTIHARI&apos;S #1 LIVE CHARCOAL GRILL &amp; CRISPY FRY
            </span>
            <span className="text-white/20">|</span>
            <span className="text-[#F4EBD6]/75 text-[11px] flex items-center gap-1">
              <MapPin size={11} className="text-[#FF6A24]" />
              Near Bypass, Bariyarpur · Daily 11 AM – 11 PM
            </span>
          </div>

          <div className="flex items-center gap-5 text-[11px]">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-1.5 text-white/90 hover:text-[#FF6A24] transition-colors font-medium"
            >
              <Phone size={12} className="text-[#FF6A24]" />
              <span>Call: {siteConfig.phoneDisplay}</span>
            </a>
            <span className="text-white/20">·</span>
            <span className="text-[#FFC107] font-semibold flex items-center gap-1">
              ★ 4.9 on Google (450+ Reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-xl shadow-[0_12px_35px_rgba(0,0,0,0.85)] border-b border-white/[0.08] py-2.5"
            : "bg-black/80 backdrop-blur-md border-b border-white/10 py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            {/* Logo: Centered on mobile, left-aligned on desktop */}
            <div className="flex-1 md:flex-initial flex items-center justify-center md:justify-start">
              <Logo size="md" />
            </div>

            {/* Desktop Navigation Links Center */}
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-9">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative font-heading text-[13px] lg:text-sm font-semibold tracking-wide transition-colors py-1 ${
                      isActive
                        ? "text-[#FF6A24]"
                        : "text-[#F4EBD6]/85 hover:text-[#FF6A24]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 w-full h-[2.5px] bg-[#FF6A24] rounded-full shadow-[0_2px_8px_rgba(255,106,36,0.6)]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: WhatsApp Pill Button on Desktop, Hamburger on Mobile */}
            <div className="flex items-center space-x-3">
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white px-5 py-2.5 rounded-full font-heading font-semibold text-xs sm:text-sm transition-all duration-200 shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 active:translate-y-0"
              >
                {/* Active Pulsing Indicator inside WhatsApp Button */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>

                {/* Official WhatsApp Chat Bubble Icon */}
                <svg
                  className="w-4 h-4 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Order on WhatsApp</span>
              </a>

              {/* Mobile Menu Hamburger Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 text-[#F4EBD6] hover:text-[#FF6A24] p-1.5 rounded-lg"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#111111] border-l border-white/10 shadow-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <Logo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-400 hover:text-white p-1.5 rounded-lg bg-white/5"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Live Kitchen Status Pill */}
              <div className="mt-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit text-xs">
                <span
                  className={`w-2 h-2 rounded-full ${
                    isOpenNow ? "bg-[#25D366] animate-pulse" : "bg-red-500"
                  }`}
                />
                <span className="text-[#F4EBD6] font-medium text-[11px]">
                  {isOpenNow ? "Open Today · 11:00 AM – 11:00 PM" : "Opens at 11:00 AM"}
                </span>
              </div>

              <nav className="mt-6 flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm font-heading font-semibold tracking-wide py-2.5 px-3.5 rounded-xl transition-all ${
                        isActive
                          ? "bg-[#FF6A24]/15 text-[#FF6A24] border-l-4 border-[#FF6A24]"
                          : "text-[#F4EBD6] hover:bg-white/5 hover:text-[#FF6A24]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions in Mobile Drawer */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-heading font-semibold text-xs shadow-lg"
              >
                <span>Order on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white/90 hover:text-white py-2.5 rounded-full font-heading font-medium text-xs"
              >
                <Phone size={13} className="text-[#FF6A24]" />
                <span>Call: {siteConfig.phoneDisplay}</span>
              </a>

              <p className="text-[10px] text-center text-gray-500 pt-1">
                Near Bypass, Bariyarpur, Motihari
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
