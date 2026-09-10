"use client";

import Link from "next/link";
import { Flame, Gift, UtensilsCrossed, ShoppingBag, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const services = [
  {
    id: "dine-in",
    title: "Dine-In Buffet",
    tagline: "Unlimited Live Grills on Table",
    description: "Experience the sizzle of charcoal skewers right at your table with 50+ buffet delicacies.",
    badge: "Most Popular",
    badgeColor: "bg-flamora-red text-white",
    cardBg: "bg-gradient-to-br from-amber-50 to-orange-100/60 border-orange-200/80",
    iconBg: "bg-flamora-red text-white",
    icon: Flame,
    href: "/book-a-table",
    ctaText: "Book Table",
  },
  {
    id: "happiness-card",
    title: "Happiness Cards",
    tagline: "Gift A Feast of Flavors",
    description: "Gift your loved ones or corporate teams unforgettable dining vouchers with instant e-delivery.",
    badge: "Instant Delivery",
    badgeColor: "bg-emerald-600 text-white",
    cardBg: "bg-gradient-to-br from-emerald-50 to-teal-100/60 border-emerald-200/80",
    iconBg: "bg-emerald-600 text-white",
    icon: Gift,
    href: "/offers",
    ctaText: "Buy Cards",
  },
  {
    id: "catering",
    title: "Flamora Catering",
    tagline: "Live Grills at Your Venue",
    description: "Bring the authentic Flamora buffet & live skewers experience to weddings, birthdays & corporate events.",
    badge: "Custom Menu",
    badgeColor: "bg-amber-600 text-white",
    cardBg: "bg-gradient-to-br from-amber-50 to-yellow-100/60 border-amber-200/80",
    iconBg: "bg-amber-600 text-white",
    icon: UtensilsCrossed,
    href: "/catering",
    ctaText: "Enquire Catering",
  },
  {
    id: "takeaway",
    title: "Express Delivery",
    tagline: "Flamora Feast in a Box",
    description: "Craving grills at home? Order our signature 'Box of 5 Grills', Biryanis & Curries freshly packed.",
    badge: "Hot & Fresh",
    badgeColor: "bg-sky-600 text-white",
    cardBg: "bg-gradient-to-br from-sky-50 to-blue-100/60 border-sky-200/80",
    iconBg: "bg-sky-600 text-white",
    icon: ShoppingBag,
    href: "/menu",
    ctaText: "Order Online",
  },
];

export function QuickServicesBar() {
  return (
    <section className="py-14 sm:py-20 bg-flamora-cream">
      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.id} delay={index * 90}>
                <Link
                  href={item.href}
                  className={`group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${item.cardBg}`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl shadow-md ${item.iconBg}`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="mt-5 font-heading text-xl font-bold text-flamora-charcoal group-hover:text-flamora-red transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-flamora-text/80 mt-0.5">
                      {item.tagline}
                    </p>
                    <p className="mt-2.5 text-sm leading-relaxed text-flamora-text/70 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-4 font-semibold text-sm text-flamora-charcoal group-hover:text-flamora-red">
                    <span>{item.ctaText}</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-flamora-red group-hover:text-white">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
