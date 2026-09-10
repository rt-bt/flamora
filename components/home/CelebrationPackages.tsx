"use client";

import Link from "next/link";
import { Cake, Heart, Briefcase, Users, Check, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const packages = [
  {
    id: "birthday",
    title: "Birthday Celebrations",
    tagline: "The Famous Singing Crew & Free Cake",
    description: "Make birthdays unforgettable! When you dine with us on your birthday, our team brings out the celebration magic.",
    perks: [
      "Complimentary 500g Dutch Truffle Cake 🎂",
      "Celebration Sparkler Candles & Party Hats 🎉",
      "Special Flamora Crew Birthday Cheer & Song 🎵",
      "Decorated Table with personalized message card ✨",
    ],
    badge: "Free Cake Included",
    cardBg: "bg-gradient-to-b from-orange-50 to-amber-100/50 border-orange-200",
    iconBg: "bg-flamora-red text-white",
    icon: Cake,
    ctaText: "Plan Birthday Feast",
  },
  {
    id: "anniversary",
    title: "Anniversary Dinners",
    tagline: "Romantic Candlelight Table Setup",
    description: "Celebrate your love story with a warm, intimate live grill table, sparkling welcome drinks, and chef special desserts.",
    perks: [
      "Reserved Premium Candlelight Table 🕯️",
      "Complimentary Sparkling Welcome Mocktail 🥂",
      "Chef Special Heart-Shaped Dessert Platter 🍨",
      "Anniversary Congratulatory Card & Memento ❤️",
    ],
    badge: "Candlelight Setup",
    cardBg: "bg-gradient-to-b from-rose-50 to-pink-100/50 border-rose-200",
    iconBg: "bg-rose-600 text-white",
    icon: Heart,
    ctaText: "Reserve Anniversary Table",
  },
  {
    id: "corporate",
    title: "Corporate & Team Feasts",
    tagline: "Hassle-Free Group Booking & GST Bills",
    description: "The #1 choice for team lunches, farewells, client dinners & year-end celebrations. Custom seating & instant GST bills.",
    perks: [
      "Dedicated Private Dining Section for 10-100+ guests",
      "Instant GST Invoices with Company Name on spot",
      "10% Cashback in Flamora Coins on bills above ₹15,000",
      "Customized welcome drinks & chef curated skewers",
    ],
    badge: "GST Invoice on Spot",
    cardBg: "bg-gradient-to-b from-sky-50 to-blue-100/50 border-sky-200",
    iconBg: "bg-sky-600 text-white",
    icon: Briefcase,
    ctaText: "Enquire Corporate Deal",
  },
  {
    id: "family",
    title: "Big Family Get-Togethers",
    tagline: "Something Delicious For Every Generation",
    description: "From grandparents loving slow-cooked Dal Flamora to kids loving live kulfi dips, everyone leaves with a big smile.",
    perks: [
      "Kids Special Buffet (5-9 Yrs) @ Flat 50% Off 👶",
      "Mild & non-spicy skewers crafted for children 🍢",
      "Spacious large tables with high-chairs available 🪑",
      "Unlimited desserts & ice cream bar for all ages 🍨",
    ],
    badge: "Kids 50% Off",
    cardBg: "bg-gradient-to-b from-emerald-50 to-teal-100/50 border-emerald-200",
    iconBg: "bg-emerald-600 text-white",
    icon: Users,
    ctaText: "Book Family Table",
  },
];

export function CelebrationPackages() {
  return (
    <section className="bg-white py-20 lg:py-28" id="celebrations">
      <Container>
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-flamora-gold/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-flamora-charcoal border border-flamora-gold/40">
              <Sparkles className="h-3.5 w-3.5 text-flamora-red fill-flamora-red" /> Unforgettable Milestone Memories
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-flamora-charcoal sm:text-4xl lg:text-5xl">
              Celebrate Life&apos;s Best Moments At <span className="text-flamora-red">Flamora</span>
            </h2>
            <p className="mt-3 max-w-2xl text-base text-gray-600 sm:text-lg">
              Over 50,000 birthdays and team lunches celebrated every month. Inform us in advance and let our crew create unforgettable memories for you!
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <ScrollReveal key={pkg.id} delay={idx * 90}>
                <div
                  className={`flex h-full flex-col justify-between rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${pkg.cardBg}`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl shadow-md ${pkg.iconBg}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-bold text-flamora-charcoal shadow-sm border border-black/5">
                        {pkg.badge}
                      </span>
                    </div>

                    <h3 className="mt-5 font-heading text-xl font-bold text-flamora-charcoal">
                      {pkg.title}
                    </h3>
                    <p className="mt-0.5 text-xs font-semibold text-flamora-red">
                      {pkg.tagline}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-gray-600">
                      {pkg.description}
                    </p>

                    <div className="mt-5 space-y-2 border-t border-black/10 pt-4">
                      {pkg.perks.map((perk, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2 text-xs text-gray-700">
                          <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600 mt-0.5" />
                          <span className="leading-tight">{perk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/10">
                    <Link
                      href={`/book-a-table?occasion=${pkg.id}`}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-flamora-charcoal py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-flamora-red hover:scale-105"
                    >
                      <span>{pkg.ctaText}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
