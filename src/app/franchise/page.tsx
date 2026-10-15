"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  TrendingUp,
  Megaphone,
  GraduationCap,
  Award,
  ChevronDown,
  CheckCircle2,
  Phone,
  Mail,
  Send,
  MessageCircle,
} from "lucide-react";
import {
  siteConfig,
  getWhatsAppFranchiseUrl,
} from "@/config/siteConfig";

export default function FranchisePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    state: "Bihar",
    budget: "₹15 Lakhs - ₹25 Lakhs",
    hasSpace: "Looking for Location",
    notes: "",
  });

  const benefits = [
    {
      icon: Award,
      title: "Proven Concept",
      desc: "Time-tested recipes, high-frequency repeat customers, and high gross margin structure that generates strong cash flow from month one.",
    },
    {
      icon: Megaphone,
      title: "Marketing Support",
      desc: "Comprehensive digital campaigns, influencer tie-ups, local hoardings, branded collateral, and festive promotional calendars managed for you.",
    },
    {
      icon: GraduationCap,
      title: "Training & Support",
      desc: "Full kitchen staff training, secret spice marination kits supplied directly, POS software setup, and continuous quality audits.",
    },
    {
      icon: TrendingUp,
      title: "Attractive Returns",
      desc: "Optimized operational costs and compact, low-wastage kitchen configurations engineered for healthy ROI in 12 to 18 months.",
    },
  ];

  const models = [
    {
      name: "Cloud / Kiosk Model",
      idealFor: "High-density delivery zones, food courts & transit hubs",
      area: "150 – 300 sq.ft",
      investment: "₹8 – 12 Lakhs",
      roi: "9 – 12 Months",
      features: [
        "Takeaway & delivery optimized",
        "Lowest overhead and rental burden",
        "Fast 30-day setup timeline",
      ],
    },
    {
      name: "Dine-In Express Outlet",
      badge: "MOST POPULAR",
      idealFor: "High-street retail, busy markets, bypass intersections",
      area: "500 – 900 sq.ft",
      investment: "₹15 – 22 Lakhs",
      roi: "12 – 15 Months",
      features: [
        "Live open grill display counter",
        "25–40 seating capacity",
        "Dine-in + Takeaway + Online delivery",
      ],
    },
    {
      name: "Flagship Casual Dining",
      idealFor: "Prime city centers, shopping complexes, commercial roads",
      area: "1,200 – 2,000 sq.ft",
      investment: "₹25 – 35 Lakhs",
      roi: "15 – 18 Months",
      features: [
        "Full casual dining ambiance",
        "Expanded menu with sizzlers & platters",
        "Event and family party booking space",
      ],
    },
  ];

  const faqs = [
    {
      q: "What is the minimum area required to open a Flamora franchise?",
      a: "Depending on the chosen format, requirements range from 150 sq.ft for a pure takeaway/delivery kiosk up to 1,500 sq.ft for a flagship casual dining outlet.",
    },
    {
      q: "Do I need previous restaurant or chef experience?",
      a: "No prior culinary experience is necessary. Flamora provides pre-mixed secret spice blends, step-by-step Standard Operating Procedures (SOPs), and on-site training for your staff to replicate the authentic taste effortlessly.",
    },
    {
      q: "How does the supply chain for chicken, meat, and spices work?",
      a: "All proprietary spice blends, marinades, branded packaging, and uniform merchandise are supplied directly from our central commissary. Perishable fresh items (poultry, fresh vegetables) are purchased locally following our strict grade and quality specifications.",
    },
    {
      q: "What is the expected Return on Investment (ROI)?",
      a: "Our franchise partners typically achieve break-even on operations within 2 to 3 months and full capital payback within 12 to 18 months, depending on prime footfall and local execution.",
    },
    {
      q: "Which cities and regions is Flamora currently expanding into?",
      a: "While our flagship store is in Motihari, we are aggressively welcoming franchise partners across Bihar (Muzaffarpur, Patna, Bettiah, Raxaul, Darbhanga, Gopalganj, Siwan) as well as neighboring states across Eastern & Northern India.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.city) {
      setSubmitted(true);
    }
  };

  const handleWhatsAppSubmit = () => {
    window.open(getWhatsAppFranchiseUrl(formData.city, formData.name), "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F4EBD6] pb-24">
      {/* =========================================================================
          HERO BANNER
      ========================================================================= */}
      <section className="relative py-20 sm:py-28 bg-[#0F0F0F] border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/flamora-special-platter.jpg"
            alt="Flamora Franchise Food"
            fill
            priority
            className="object-cover opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/85 to-[#0F0F0F]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6A24]/15 border border-[#FF6A24]/30 backdrop-blur-sm">
            <TrendingUp size={14} className="text-[#FF6A24]" />
            <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase">
              FRANCHISE OPPORTUNITIES
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Partner with Flamora
          </h1>
          <p className="text-base sm:text-xl text-[#FF6A24] font-heading font-semibold">
            Grow with a Trusted Food &amp; Grill Brand
          </p>
          <p className="text-sm sm:text-base text-[#F4EBD6]/80 max-w-2xl mx-auto leading-relaxed pt-2">
            Tap into India&apos;s fastest-growing casual grill and street-food sector. Become the premier live charcoal grill and fried chicken destination in your city.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#enquiry-form"
              className="bg-[#FF6A24] hover:bg-[#E55815] text-white px-8 py-3.5 rounded-full font-heading font-semibold text-sm transition-all shadow-flame-md"
            >
              Apply for Franchise
            </a>
            <button
              onClick={handleWhatsAppSubmit}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-7 py-3.5 rounded-full font-heading font-semibold text-sm transition-all flex items-center gap-2"
            >
              <MessageCircle size={16} />
              <span>Discuss on WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: 4 BENEFIT PILLARS
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase block mb-1">
            WHY INVEST IN FLAMORA?
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Built for Franchisee Profitability
          </h2>
          <p className="text-xs sm:text-sm text-[#F4EBD6]/70 mt-2">
            We don&apos;t just sell a franchise; we build a sustainable, scalable business with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="bg-[#141414] rounded-2xl p-6 border border-white/5 hover:border-[#FF6A24]/40 shadow-card-dark transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FF6A24]/10 border border-[#FF6A24]/30 flex items-center justify-center text-[#FF6A24] mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F4EBD6]/75 leading-relaxed font-body">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          SECTION: FRANCHISE MODELS & INVESTMENT RANGE
      ========================================================================= */}
      <section className="bg-[#141414] py-20 px-4 sm:px-6 lg:px-8 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase block mb-1">
              FLEXIBLE FORMATS
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Investment Models
            </h2>
            <p className="text-xs sm:text-sm text-[#F4EBD6]/75 mt-2">
              Select the franchise format that aligns with your capital budget and local market dynamics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {models.map((m) => (
              <div
                key={m.name}
                className={`bg-[#0F0F0F] rounded-[24px] border p-8 flex flex-col justify-between relative shadow-card-dark ${
                  m.badge ? "border-[#FF6A24] ring-1 ring-[#FF6A24]" : "border-white/10"
                }`}
              >
                {m.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6A24] text-white text-[10px] font-heading font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-flame-sm">
                    {m.badge}
                  </div>
                )}

                <div>
                  <h3 className="font-heading font-bold text-xl text-white mb-1">
                    {m.name}
                  </h3>
                  <p className="text-xs text-[#F4EBD6]/65 mb-6">{m.idealFor}</p>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2 mb-6">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">Estimated Investment:</span>
                      <span className="font-heading font-bold text-sm text-[#FF6A24]">
                        {m.investment}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">Area Required:</span>
                      <span className="font-semibold text-white">{m.area}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-400">Expected ROI:</span>
                      <span className="font-semibold text-green-400">{m.roi}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-[#F4EBD6]/85 mb-8">
                    {m.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 size={15} className="text-[#FF6A24] flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#enquiry-form"
                  className="w-full text-center py-3 px-4 rounded-xl font-heading font-semibold text-xs border border-white/20 hover:border-[#FF6A24] hover:bg-[#FF6A24] text-white transition-all duration-200"
                >
                  Select This Model
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION: STEP-BY-STEP ROADMAP
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase block mb-1">
            ONBOARDING JOURNEY
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            From Application to Grand Opening
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Submit Enquiry", desc: "Share your details and proposed city" },
            { step: "02", title: "Discovery Call", desc: "One-on-one discussion with founders" },
            { step: "03", title: "Location Finalization", desc: "Footfall feasibility & agreement" },
            { step: "04", title: "Kitchen Setup", desc: "Equipment layout & live fire training" },
            { step: "05", title: "Grand Opening", desc: "Local marketing burst & launch" },
          ].map((s) => (
            <div
              key={s.step}
              className="bg-[#141414] p-5 rounded-2xl border border-white/5 flex flex-col justify-between"
            >
              <span className="font-heading font-black text-2xl text-[#FF6A24]/60">
                {s.step}
              </span>
              <div className="mt-4">
                <h4 className="font-heading font-bold text-sm text-white">{s.title}</h4>
                <p className="text-xs text-[#F4EBD6]/70 mt-1">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          SECTION: FAQS ACCORDION & ENQUIRY FORM
      ========================================================================= */}
      <section id="enquiry-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: FAQs Accordion */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase block mb-1">
                QUESTIONS ANSWERED
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="bg-[#141414] rounded-xl border border-white/10 overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-heading font-semibold text-xs sm:text-sm text-white hover:text-[#FF6A24] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-[#FF6A24] flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#F4EBD6]/80 leading-relaxed border-t border-white/5 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Direct Franchise Hotline Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#181818] to-[#121212] border border-white/10 space-y-3">
              <h4 className="font-heading font-bold text-sm text-white">
                Need to speak with our Franchise Director?
              </h4>
              <p className="text-xs text-[#F4EBD6]/70">
                Call our corporate franchise desk for priority consultation:
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-1.5 text-[#FF6A24] hover:underline"
                >
                  <Phone size={14} />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
                <span className="text-gray-600">|</span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-1.5 text-[#F4EBD6] hover:underline"
                >
                  <Mail size={14} />
                  <span>{siteConfig.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dedicated Franchise Enquiry Form */}
          <div className="lg:col-span-6 bg-[#141414] rounded-[24px] border border-white/10 p-6 sm:p-8 shadow-card-dark">
            <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase block mb-1">
              GET STARTED
            </span>
            <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
              Franchise Application Form
            </h3>
            <p className="text-xs text-[#F4EBD6]/70 mb-6">
              Complete the preliminary details below. Our franchise team will review your market feasibility and contact you within 24 hours.
            </p>

            {submitted ? (
              <div className="bg-[#FF6A24]/10 border border-[#FF6A24]/40 rounded-2xl p-8 text-center space-y-4">
                <CheckCircle2 size={44} className="text-[#25D366] mx-auto" />
                <h4 className="font-heading font-bold text-xl text-white">
                  Application Received, {formData.name}!
                </h4>
                <p className="text-xs text-[#F4EBD6]/80 max-w-sm mx-auto leading-relaxed">
                  Thank you for your interest in bringing Flamora to{" "}
                  <strong className="text-white">{formData.city}</strong>. We have logged your enquiry and our franchise coordinator will get in touch with you shortly at{" "}
                  <strong className="text-white">{formData.phone}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleWhatsAppSubmit}
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-xs font-semibold"
                  >
                    <MessageCircle size={15} />
                    <span>Speed up: Chat now on WhatsApp</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#F4EBD6]/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Verma"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A24]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F4EBD6]/80 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A24]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#F4EBD6]/80 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="vikram@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A24]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F4EBD6]/80 mb-1">
                      Proposed City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muzaffarpur, Patna, Bettiah"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A24]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#F4EBD6]/80 mb-1">
                      Investment Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF6A24]"
                    >
                      <option value="₹8 Lakhs - ₹12 Lakhs">₹8 – 12 Lakhs (Kiosk)</option>
                      <option value="₹15 Lakhs - ₹25 Lakhs">₹15 – 25 Lakhs (Express)</option>
                      <option value="₹25 Lakhs+">₹25 Lakhs+ (Flagship)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F4EBD6]/80 mb-1">
                      Commercial Space Status
                    </label>
                    <select
                      value={formData.hasSpace}
                      onChange={(e) =>
                        setFormData({ ...formData, hasSpace: e.target.value })
                      }
                      className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF6A24]"
                    >
                      <option value="Own Commercial Property">Own Commercial Property</option>
                      <option value="Rented / Identified Space">Rented / Identified Space</option>
                      <option value="Looking for Location">Looking for Location</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F4EBD6]/80 mb-1">
                    Tell us about your background &amp; interest
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Brief details about your business background or questions..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A24]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-[#FF6A24] hover:bg-[#E55815] text-white py-3.5 px-4 rounded-xl font-heading font-semibold text-xs transition-colors shadow-flame-sm flex items-center justify-center gap-2"
                  >
                    <Send size={14} />
                    <span>Submit Application</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="flex-1 bg-[#25D366] hover:bg-[#20BA5A] text-white py-3.5 px-4 rounded-xl font-heading font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={15} />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
