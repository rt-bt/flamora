import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { offers } from "@/data/offers";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Special Offers & Experiences | FLAMORA",
  description: "Discover our latest special offers, dining experiences, and seasonal promotions at Flamora.",
};

export default function OffersPage() {
  return (
    <div className="bg-flamora-cream min-h-screen">
      <div className="bg-flamora-charcoal text-flamora-cream pt-32 pb-16">
        <Container>
          <ScrollReveal>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-4">
              Special Offers & Experiences
            </h1>
            <p className="text-center text-flamora-cream/80 max-w-2xl mx-auto">
              Elevate your dining experience with our curated seasonal offerings and exclusive promotions.
            </p>
          </ScrollReveal>
        </Container>
      </div>

      <Container className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <ScrollReveal key={offer.id || index} delay={index * 100}>
              <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="relative h-64 w-full">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {offer.badge && (
                    <Badge className="absolute top-4 right-4 bg-flamora-gold text-flamora-charcoal hover:bg-flamora-gold/90 text-xs px-2 py-1">
                      {offer.badge}
                    </Badge>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-heading text-2xl font-semibold text-flamora-charcoal mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-flamora-text/80 mb-4 flex-grow">
                    {offer.description}
                  </p>
                  <div className="mt-auto">
                    <p className="text-sm text-flamora-text/60 mb-6 font-medium">
                      {offer.validity}
                    </p>
                    <Link
                      href={offer.ctaHref || "/book-a-table"}
                      className={cn(buttonVariants(), "w-full bg-flamora-red hover:bg-flamora-red/90 text-white")}
                    >
                      {offer.ctaText || "Book Now"}
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </div>
  );
}
