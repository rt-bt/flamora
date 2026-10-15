import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: "Privacy Policy & Terms | Flamora – Grill & Fry",
  description: "Terms and privacy policies for Flamora – Grill & Fry, Motihari, Bihar.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-[#F4EBD6] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-10">
        <div>
          <span className="text-xs font-heading font-bold text-[#FF6A24] tracking-[0.25em] uppercase">
            LEGAL &amp; PRIVACY
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white mt-1">
            Privacy Policy &amp; Terms of Service
          </h1>
          <p className="text-xs text-[#F4EBD6]/60 mt-2">
            Last Updated: October 2026 · {siteConfig.name}
          </p>
        </div>

        <div className="space-y-6 text-sm text-[#F4EBD6]/80 leading-relaxed font-body">
          <section className="space-y-2 bg-[#141414] p-6 rounded-2xl border border-white/5">
            <h2 className="font-heading font-bold text-lg text-white">1. Introduction</h2>
            <p>
              Welcome to {siteConfig.name}. We respect your privacy and are committed to protecting the personal information you share with us when browsing our website, reserving tables, or ordering food via WhatsApp.
            </p>
          </section>

          <section className="space-y-2 bg-[#141414] p-6 rounded-2xl border border-white/5">
            <h2 className="font-heading font-bold text-lg text-white">2. Ordering via WhatsApp</h2>
            <p>
              All online orders and queries placed through our website are routed via WhatsApp directly to our kitchen and customer service team. We use your telephone number and order details solely for order confirmation, delivery coordination, and customer care.
            </p>
          </section>

          <section className="space-y-2 bg-[#141414] p-6 rounded-2xl border border-white/5">
            <h2 className="font-heading font-bold text-lg text-white">3. Food Quality &amp; Halal Assurance</h2>
            <p>
              All meat used in our live charcoal grills, crispy fried chicken, and kebabs is 100% Halal certified and prepared under strict hygiene and sanitation controls in Motihari, Bihar.
            </p>
          </section>

          <section className="space-y-2 bg-[#141414] p-6 rounded-2xl border border-white/5">
            <h2 className="font-heading font-bold text-lg text-white">4. Franchise Inquiries</h2>
            <p>
              Information submitted via our Franchise Application form is handled confidentially and used exclusively for evaluating business feasibility and scheduling discovery consultations.
            </p>
          </section>

          <section className="space-y-2 bg-[#141414] p-6 rounded-2xl border border-white/5">
            <h2 className="font-heading font-bold text-lg text-white">5. Contact Information</h2>
            <p>
              For any questions regarding our terms or food safety policies, visit us at {siteConfig.address.full} or call {siteConfig.phoneDisplay}.
            </p>
          </section>
        </div>

        <div className="pt-4 border-t border-white/10">
          <Link
            href="/"
            className="text-xs font-heading font-semibold text-[#FF6A24] hover:underline"
          >
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
