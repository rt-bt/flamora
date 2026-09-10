import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Cake, Heart, Users, Briefcase, PartyPopper, Gift, Sparkles, CalendarHeart } from "lucide-react";

export const metadata: Metadata = {
  title: "Celebrations & Events | FLAMORA",
  description: "Host your special moments at Flamora. From birthdays to corporate events, we make every celebration unforgettable.",
};

const celebrationTypes = [
  {
    title: "Birthday Celebrations",
    description: "Make another trip around the sun special with our dedicated birthday packages, complete with custom cakes and personalized décor.",
    icon: Cake,
    color: "text-flamora-orange",
  },
  {
    title: "Anniversary Dinners",
    description: "Celebrate your love story in an intimate setting with a specially curated romantic dining experience.",
    icon: Heart,
    color: "text-flamora-red",
  },
  {
    title: "Family Get-Togethers",
    description: "Gather the whole family around our tables for a feast of flavors and warm conversations.",
    icon: Users,
    color: "text-flamora-gold",
  },
  {
    title: "Corporate Events",
    description: "Impress your clients and treat your team with our professional corporate event hosting and premium menus.",
    icon: Briefcase,
    color: "text-flamora-charcoal",
  },
  {
    title: "Festive Celebrations",
    description: "Embrace the holiday spirit with our seasonal menus and festive ambiance for an unforgettable gathering.",
    icon: PartyPopper,
    color: "text-flamora-orange",
  },
];

const offerings = [
  { text: "Personalized décor", icon: Sparkles },
  { text: "Customized menus", icon: Gift },
  { text: "Dedicated celebration host", icon: Users },
  { text: "Complimentary birthday cake", icon: Cake },
  { text: "Private dining spaces", icon: CalendarHeart },
];

export default function CelebrationsPage() {
  return (
    <div className="bg-flamora-cream min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070"
          alt="Celebration at Flamora"
          fill
          className="object-cover brightness-50"
          unoptimized
        />
        <div className="relative z-10 text-center text-white px-4">
          <ScrollReveal>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              Celebrate Every Moment<br />at Flamora
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
              Where unforgettable memories are crafted with exquisite flavors and impeccable service.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Celebration Types Grid */}
      <Container className="py-24">
        <SectionHeading 
          title="Events We Host" 
          subtitle="From intimate dinners to grand parties, we have the perfect setting for your special day."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {celebrationTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <ScrollReveal key={type.title} delay={index * 100}>
                <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full bg-flamora-cream flex items-center justify-center mb-6 ${type.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-flamora-charcoal mb-4">
                    {type.title}
                  </h3>
                  <p className="text-flamora-text/80 mb-6 flex-grow">
                    {type.description}
                  </p>
                  <Link
                    href="/book-a-table"
                    className={cn(buttonVariants({ variant: "outline" }), "border-flamora-charcoal text-flamora-charcoal hover:bg-flamora-charcoal hover:text-white mt-auto w-full")}
                  >
                    Enquire Now
                  </Link>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>

      {/* What We Offer Section */}
      <div className="bg-flamora-charcoal text-white py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                What We Offer
              </h2>
              <p className="text-flamora-cream/80 text-lg mb-8">
                We believe that every celebration should be as unique as the people celebrating. Our dedicated events team works closely with you to ensure every detail is perfect.
              </p>
              
              <ul className="space-y-4">
                {offerings.map((offer, index) => {
                  const Icon = offer.icon;
                  return (
                    <li key={index} className="flex items-center space-x-4">
                      <div className="w-8 h-8 rounded-full bg-flamora-orange/20 flex items-center justify-center text-flamora-orange shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-lg">{offer.text}</span>
                    </li>
                  );
                })}
              </ul>
            </ScrollReveal>
            
            <ScrollReveal delay={200} className="relative h-[500px] rounded-xl overflow-hidden hidden lg:block">
              <Image
                src="https://images.unsplash.com/photo-1530103862676-de3c9de59a9e?q=80&w=2070"
                alt="Table setup for an event"
                fill
                className="object-cover"
                unoptimized
              />
            </ScrollReveal>
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-flamora-orange/10">
        <Container>
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-flamora-charcoal mb-6">
              Plan Your Celebration
            </h2>
            <p className="text-lg text-flamora-text/80 mb-10">
              Ready to create unforgettable memories? Get in touch with our events team and let's start planning your perfect celebration at Flamora.
            </p>
            <Link
              href="/book-a-table"
              className={cn(buttonVariants({ size: "lg" }), "bg-flamora-red hover:bg-flamora-red/90 text-white px-8 text-lg rounded-full")}
            >
              Book Your Event
            </Link>
          </ScrollReveal>
        </Container>
      </div>
    </div>
  );
}
