"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, CheckCircle2, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { siteConfig, getWhatsAppOrderUrl } from "@/config/siteConfig";

export default function Footer() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim().length >= 10) {
      setSubscribed(true);
      setTimeout(() => {
        setPhoneNumber("");
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#0A0A0A] text-[#F4EBD6] border-t border-white/10 relative overflow-hidden">
      {/* Decorative Brand Accent Tagline Banner */}
      <div className="relative py-12 px-4 border-b border-white/5 bg-gradient-to-r from-black via-[#141414] to-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center"
          style={{ backgroundImage: `url('/images/about-fire-grill.jpg')` }}
        />
        <div className="relative max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#FFC107] drop-shadow-[0_2px_10px_rgba(255,193,7,0.4)]">
              Good Food Brings People Together
            </p>
          </div>
          <div className="flex-shrink-0">
            <Logo size="md" />
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand Info & Social */}
          <div className="space-y-4">
            <div className="flex flex-col items-start">
              <Logo size="md" />
            </div>
            <p className="text-sm text-[#F4EBD6]/80 font-heading font-medium tracking-wide">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-[#F4EBD6]/60 leading-relaxed">
              Authentic charcoal grilled tikkas, golden crunchy fried bites, and secret spice recipes crafted with passion in Motihari.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              {/* Instagram SVG */}
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#F4EBD6] hover:text-[#FF6A24] hover:border-[#FF6A24]/50 hover:bg-[#FF6A24]/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* Facebook SVG */}
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#F4EBD6] hover:text-[#FF6A24] hover:border-[#FF6A24]/50 hover:bg-[#FF6A24]/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              {/* YouTube SVG */}
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#F4EBD6] hover:text-[#FF6A24] hover:border-[#FF6A24]/50 hover:bg-[#FF6A24]/10 transition-all duration-300"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-widest uppercase text-white mb-4 border-l-2 border-[#FF6A24] pl-2.5">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-[#F4EBD6]/80 hover:text-[#FF6A24] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-[#F4EBD6]/80 hover:text-[#FF6A24] transition-colors">
                  Menu &amp; Combos
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#F4EBD6]/80 hover:text-[#FF6A24] transition-colors">
                  About Us &amp; Story
                </Link>
              </li>
              <li>
                <Link href="/find-us" className="text-[#F4EBD6]/80 hover:text-[#FF6A24] transition-colors">
                  Find Us &amp; Map
                </Link>
              </li>
              <li>
                <Link href="/franchise" className="text-[#F4EBD6]/80 hover:text-[#FF6A24] transition-colors">
                  Franchise Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Get In Touch */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-widest uppercase text-white mb-4 border-l-2 border-[#FF6A24] pl-2.5">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-sm text-[#F4EBD6]/80">
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-[#FF6A24] mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-[#FF6A24] transition-colors"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle size={16} className="text-[#25D366] mt-0.5 flex-shrink-0" />
                <a
                  href={getWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors underline decoration-[#25D366]/40 underline-offset-4"
                >
                  Order on WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#FF6A24] mt-0.5 flex-shrink-0" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="text-xs text-[#FFC107] pt-1">
                {siteConfig.timings.display}
              </li>
            </ul>
          </div>

          {/* Col 4: Join Our Food Club */}
          <div>
            <h3 className="font-heading font-bold text-sm tracking-widest uppercase text-white mb-4 border-l-2 border-[#FF6A24] pl-2.5">
              Join Our Food Club
            </h3>
            <p className="text-xs text-[#F4EBD6]/70 mb-3">
              Get secret discount codes, weekend combo specials, and festival offers directly on your phone.
            </p>

            {subscribed ? (
              <div className="bg-[#FF6A24]/10 border border-[#FF6A24]/40 rounded-xl p-3 text-center">
                <p className="flex items-center justify-center gap-1.5 text-xs text-[#FF6A24] font-semibold">
                  <CheckCircle2 size={16} /> Welcome to the Club!
                </p>
                <p className="text-[11px] text-[#F4EBD6]/70 mt-1">
                  We&apos;ll ping you with delicious surprises.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="tel"
                  placeholder="Your Mobile Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  pattern="[0-9]{10}"
                  required
                  className="w-full bg-[#181818] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A24] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-[#FF6A24] hover:bg-[#E55815] text-white font-heading font-semibold text-xs py-2.5 rounded-lg transition-colors shadow-flame-sm"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Trust & Payment Strip */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-[11px] text-[#F4EBD6]/60">
          <div className="flex items-center gap-4">
            <span className="text-white font-medium">Accepted Payments:</span>
            <div className="flex items-center gap-2 text-white/80">
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">UPI (GPay / PhonePe / Paytm)</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Cards</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">Cash on Delivery</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[#25D366]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
            <span>FSSAI Compliant · 100% Fresh Daily Preparation</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F4EBD6]/60 gap-4">
          <p>© 2025 {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/terms" className="hover:text-[#FF6A24] transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-[#FF6A24] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
