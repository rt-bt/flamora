"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/shared/Container";
import { Separator } from "@/components/ui/separator";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const socialIcons = [
  { href: siteConfig.socialLinks.instagram, icon: InstagramIcon, label: "Instagram" },
  { href: siteConfig.socialLinks.facebook, icon: FacebookIcon, label: "Facebook" },
  { href: siteConfig.socialLinks.youtube, icon: YoutubeIcon, label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-flamora-charcoal" role="contentinfo">
      <Container className="py-16 lg:py-20">
        {/* Top Section */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-block transition-transform hover:scale-105"
            >
              <Image
                src="/images/logo.png"
                alt="FLAMORA Grill & Fry"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-3 text-flamora-cream/60">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 flex gap-4">
              {socialIcons.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-flamora-cream/20 text-flamora-cream/60 transition-all hover:border-flamora-gold hover:text-flamora-gold"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-flamora-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {siteConfig.footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-flamora-cream/60 transition-colors hover:text-flamora-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-flamora-gold">
              Customer Support
            </h3>
            <ul className="mt-4 space-y-3" role="list">
              {siteConfig.footer.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-flamora-cream/60 transition-colors hover:text-flamora-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {siteConfig.footer.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-flamora-cream/60 transition-colors hover:text-flamora-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-flamora-gold">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-flamora-cream/60">
              Get the latest offers &amp; experiences.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <Separator className="my-10 bg-flamora-cream/10" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-flamora-cream/40">
            © {new Date().getFullYear()} FLAMORA. All rights reserved.
          </p>
          <p className="text-xs text-flamora-cream/40">
            Demo website for illustrative purposes.
          </p>
        </div>
      </Container>
    </footer>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  if (submitted) {
    return (
      <p className="mt-4 text-sm text-flamora-gold">
        Thank you for subscribing! ✨
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        required
        className="flex-1 rounded-lg border border-flamora-cream/20 bg-flamora-cream/5 px-4 py-2.5 text-sm text-flamora-cream placeholder:text-flamora-cream/40 focus:border-flamora-gold focus:outline-none focus:ring-1 focus:ring-flamora-gold"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-lg bg-flamora-red px-4 py-2.5 text-sm font-medium text-flamora-cream transition-colors hover:bg-flamora-red/90"
        aria-label="Subscribe to newsletter"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
