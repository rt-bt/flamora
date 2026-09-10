import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { CateringForm } from "@/components/forms/CateringForm";
import { Check, Users, Utensils, CalendarHeart, GlassWater } from "lucide-react";

export const metadata: Metadata = {
  title: "Catering & Private Events | FLAMORA",
  description: "Bring the premium Flamora dining experience to your celebration. We offer catering for weddings, corporate events, birthday parties, and family functions.",
};

const serviceTypes = [
  {
    title: "Weddings",
    description: "Make your special day unforgettable with our tailored wedding catering menus.",
    icon: CalendarHeart,
  },
  {
    title: "Corporate Events",
    description: "Impress your clients and colleagues with premium corporate dining solutions.",
    icon: Users,
  },
  {
    title: "Birthday Parties",
    description: "Celebrate milestones with vibrant flavors and exceptional service.",
    icon: GlassWater,
  },
  {
    title: "Private Events",
    description: "Exclusive culinary experiences for intimate gatherings.",
    icon: Utensils,
  },
];

const features = [
  "Customizable menus tailored to your preferences",
  "Professional and experienced catering staff",
  "Premium quality ingredients and presentation",
  "Setup, service, and cleanup included",
];

export default function CateringPage() {
  return (
    <div className="bg-flamora-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Flamora Catering"
            fill
            className="object-cover brightness-50"
            priority
            unoptimized
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <ScrollReveal>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Bring Flamora To Your Celebration
            </h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
              Exceptional culinary experiences for your most important events.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <Container>
          <SectionHeading
            title="Our Catering Services"
            subtitle="Whatever the occasion, we bring the magic of Flamora to your guests."
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {serviceTypes.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 100}>
                <div className="p-8 border border-flamora-gold/20 rounded-xl hover:shadow-lg transition-shadow bg-flamora-cream/30 text-center">
                  <service.icon className="w-12 h-12 text-flamora-red mx-auto mb-6" />
                  <h3 className="font-heading text-xl font-bold text-flamora-charcoal mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Form and Why Choose Us Section */}
      <section className="py-24 bg-flamora-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-12">
              <ScrollReveal>
                <h2 className="font-heading text-4xl font-bold text-flamora-charcoal mb-6">
                  Why Choose Flamora Catering?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We believe that great food is the centerpiece of any memorable event. Our dedicated team works closely with you to curate the perfect menu.
                </p>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="w-5 h-5 text-flamora-red" />
                      </div>
                      <p className="ml-4 text-flamora-charcoal font-medium">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
            
            <div className="lg:col-span-7">
              <ScrollReveal delay={200}>
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-flamora-gold/10">
                  <h3 className="font-heading text-3xl font-bold text-flamora-charcoal mb-8 text-center">
                    Catering Enquiry
                  </h3>
                  <CateringForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
