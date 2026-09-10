"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
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
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side="right"
        className="w-full border-none bg-flamora-charcoal sm:max-w-sm [&>button]:hidden"
      >
        <SheetHeader className="flex flex-row items-center justify-between border-b border-flamora-cream/10 pb-4">
          <SheetTitle className="sr-only">FLAMORA Navigation</SheetTitle>
          <Link href="/" onClick={onClose} className="inline-block">
            <Image
              src="/images/logo.png"
              alt="FLAMORA Grill & Fry"
              width={140}
              height={45}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            className="rounded-md p-2 text-flamora-cream/70 transition-colors hover:text-flamora-cream"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </SheetHeader>

        <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile navigation">
          {siteConfig.nav.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-lg px-4 py-3 text-lg font-medium text-flamora-cream/80 transition-colors hover:bg-flamora-cream/5 hover:text-flamora-gold"
            >
              {item.label}
            </Link>
          ))}

          {siteConfig.footer.support.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="rounded-lg px-4 py-3 text-lg font-medium text-flamora-cream/60 transition-colors hover:bg-flamora-cream/5 hover:text-flamora-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 px-4">
          <Link
            href={siteConfig.nav.cta.href}
            onClick={onClose}
            className={cn(
              buttonVariants(),
              "w-full bg-flamora-red py-6 text-lg text-flamora-cream hover:bg-flamora-red/90"
            )}
          >
            {siteConfig.nav.cta.label}
          </Link>
        </div>

        <div className="mt-auto px-4 pt-12">
          <p className="text-sm text-flamora-cream/40">
            {siteConfig.tagline}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
