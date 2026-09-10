import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Flame, Heart, ChefHat, Users, Award, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | FLAMORA",
  description: "Learn about our story, philosophy, and what makes FLAMORA unique.",
};

const philosophies = [
  {
    icon: Flame,
    title: "Our Philosophy",
    description: "Cooking with fire is primal. We believe in bringing people together around the warmth of a shared meal, celebrating bold flavors.",
  },
  {
    icon: ChefHat,
    title: "Our Food",
    description: "Every dish is crafted with passion. We balance traditional recipes with modern techniques to deliver unforgettable tastes.",
  },
  {
    icon: Heart,
    title: "Our Hospitality",
    description: "At FLAMORA, every guest is family. We serve with warmth, ensuring every moment spent with us is truly special.",
  },
  {
    icon: Users,
    title: "Our Team",
    description: "Our dedicated chefs and staff are the heart of FLAMORA. Their expertise and enthusiasm shine through every detail.",
  },
  {
    icon: Award,
    title: "Our Promise",
    description: "We are committed to quality. From sourcing the finest ingredients to meticulous preparation, excellence is guaranteed.",
  },
  {
    icon: Sparkles,
    title: "The Experience",
    description: "Beyond just a meal, dining at FLAMORA is a multi-sensory journey designed to delight and inspire.",
  },
];

const stats = [
  { value: "10+", label: "Signature Dishes" },
  { value: "5+", label: "Dining Experiences" },
  { value: "100%", label: "Fresh Ingredients" },
  { value: "50K+", label: "Happy Guests" },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2000&auto=format&fit=crop"
            alt="Flamora Restaurant Atmosphere"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <Container className="relative z-10 text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading text-white font-bold mb-6">
              Born From Fire.<br />Made For Togetherness.
            </h1>
            <p className="text-lg md:text-xl text-flamora-cream/90 max-w-2xl mx-auto">
              Igniting the senses and bringing people together through exceptional culinary experiences.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* 2. Story Section */}
      <section className="py-24 bg-flamora-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop"
                  alt="Chef preparing a dish"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={200}>
              <SectionHeading 
                title="Our Story" 
                subtitle="A journey fueled by passion and taste." 
              />
              <div className="space-y-6 text-flamora-text/80 text-lg">
                <p>
                  It all started with a simple idea: to create a dining space that captures the primal magic of cooking with fire. At FLAMORA, we’ve always believed that the most memorable conversations happen around a warm meal.
                </p>
                <p>
                  Over the years, our dedication to sourcing the freshest local ingredients and mastering the art of flame-grilling has allowed us to craft a menu that is as bold as it is comforting. We honor the traditions of the past while embracing modern culinary innovation.
                </p>
                <p>
                  Today, FLAMORA isn’t just a restaurant; it’s a destination where flavor meets warmth. Join us, and become a part of our continuing story.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 3. Philosophy Pillars */}
      <section className="py-24 bg-flamora-charcoal text-white">
        <Container>
          <SectionHeading 
            title="Our Philosophy" 
            subtitle="The pillars that define the FLAMORA experience." 
            centered 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {philosophies.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors h-full">
                  <div className="w-14 h-14 bg-flamora-red rounded-full flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading mb-4 text-flamora-gold">{item.title}</h3>
                  <p className="text-flamora-cream/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Statistics Section */}
      <section className="py-24 bg-flamora-cream">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold text-flamora-red mb-2">
                    {stat.value}
                  </div>
                  <div className="text-flamora-charcoal font-medium">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <p className="text-center text-sm text-flamora-text/60 italic">
              Values shown are for demonstration purposes.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      {/* 5. Values Section */}
      <section className="py-24 bg-flamora-charcoal text-white text-center">
        <Container>
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Experience FLAMORA</h2>
            <p className="text-lg text-flamora-cream/80 max-w-2xl mx-auto mb-10">
              We invite you to taste the passion, feel the warmth, and join our growing family. Let us serve you an unforgettable meal.
            </p>
            <a 
              href="/menu" 
              className="inline-block bg-flamora-red hover:bg-flamora-red/90 text-white font-medium px-8 py-3 rounded-full transition-colors"
            >
              Explore Our Menu
            </a>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
