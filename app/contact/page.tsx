import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | FLAMORA",
  description: "Get in touch with Flamora. We'd love to hear from you. Find our address, phone number, email, and opening hours.",
};

export default function ContactPage() {
  return (
    <div className="bg-flamora-cream min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-flamora-charcoal text-white">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-flamora-cream">
                Get In Touch
              </h1>
              <p className="text-lg md:text-xl text-flamora-cream/80 font-light">
                We'd love to hear from you. Whether you have a question about our menu, reservations, or events, our team is ready to answer all your questions.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Contact Form */}
            <ScrollReveal>
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-flamora-gold/10">
                <h2 className="font-heading text-3xl font-bold text-flamora-charcoal mb-8">
                  Send us a Message
                </h2>
                <ContactForm />
              </div>
            </ScrollReveal>

            {/* Right: Contact Info Cards */}
            <div className="space-y-8">
              <ScrollReveal delay={100}>
                <div className="bg-white p-8 rounded-xl shadow-md border border-flamora-gold/10 flex items-start">
                  <div className="bg-flamora-cream p-4 rounded-full mr-6">
                    <MapPin className="w-6 h-6 text-flamora-red" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-flamora-charcoal mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}<br />
                      {siteConfig.address.country}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-white p-8 rounded-xl shadow-md border border-flamora-gold/10 flex items-start">
                  <div className="bg-flamora-cream p-4 rounded-full mr-6">
                    <Phone className="w-6 h-6 text-flamora-red" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-flamora-charcoal mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-flamora-red transition-colors">
                        {siteConfig.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-white p-8 rounded-xl shadow-md border border-flamora-gold/10 flex items-start">
                  <div className="bg-flamora-cream p-4 rounded-full mr-6">
                    <Mail className="w-6 h-6 text-flamora-red" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-flamora-charcoal mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      <a href={`mailto:${siteConfig.email}`} className="hover:text-flamora-red transition-colors">
                        {siteConfig.email}
                      </a>
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="bg-white p-8 rounded-xl shadow-md border border-flamora-gold/10 flex items-start">
                  <div className="bg-flamora-cream p-4 rounded-full mr-6">
                    <Clock className="w-6 h-6 text-flamora-red" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-flamora-charcoal mb-2">Opening Hours</h3>
                    <p className="text-muted-foreground font-medium">{siteConfig.openingHours.days}</p>
                    <p className="text-muted-foreground mt-1">Lunch: {siteConfig.openingHours.lunch}</p>
                    <p className="text-muted-foreground mt-1">Dinner: {siteConfig.openingHours.dinner}</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="pb-24">
        <Container>
          <ScrollReveal>
            <div className="w-full h-[500px] bg-gray-200 rounded-2xl overflow-hidden relative border border-flamora-gold/20 flex items-center justify-center">
              {/* This is a placeholder for an iframe map or actual map component */}
              <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-flamora-gold/30">
                <MapPin className="w-12 h-12 text-flamora-red mx-auto mb-4" />
                <h3 className="font-heading text-2xl font-bold text-flamora-charcoal mb-2">Map Placeholder</h3>
                <p className="text-muted-foreground mb-4">
                  Integrate your Google Maps or Mapbox component here.
                </p>
                <a 
                  href={siteConfig.googleMapsUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-flamora-red font-medium hover:underline inline-flex items-center"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
