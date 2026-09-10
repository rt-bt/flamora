import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { Info, Clock, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ReservationForm } from "@/components/forms/ReservationForm";

export const metadata: Metadata = {
  title: "Book a Table | FLAMORA",
  description: "Reserve your table at FLAMORA for an unforgettable premium dining experience.",
};

export default function BookATablePage() {
  return (
    <main className="bg-flamora-cream min-h-screen py-24">
      <Container>
        <ScrollReveal>
          <SectionHeading 
            title="Book a Table" 
            subtitle="Secure your spot for an exquisite dining experience."
            centered 
          />
        </ScrollReveal>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Side: Form */}
          <div className="lg:col-span-7 xl:col-span-8">
            <ScrollReveal delay={100}>
              <Suspense fallback={<div className="p-8 text-center bg-white rounded-2xl">Loading reservation form...</div>}>
                <ReservationForm />
              </Suspense>
            </ScrollReveal>
          </div>
          
          {/* Right Side: Info Card */}
          <div className="lg:col-span-5 xl:col-span-4">
            <ScrollReveal delay={200}>
              <div className="bg-flamora-charcoal text-white rounded-2xl overflow-hidden shadow-xl sticky top-24">
                <div className="h-48 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                    alt="Flamora Restaurant Interior"
                    fill
                    className="object-cover opacity-80"
                    unoptimized={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-flamora-charcoal to-transparent"></div>
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-2xl font-heading text-white">Experience FLAMORA</h3>
                  </div>
                </div>
                
                <div className="p-6 space-y-6">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Join us for an unforgettable culinary journey. From our artisanal dishes to our curated wine selection, every detail is designed to delight your senses.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-flamora-gold shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-white mb-1">Standard Hours</p>
                        <p className="text-gray-400">Lunch: 12:00 PM – 3:30 PM</p>
                        <p className="text-gray-400">Dinner: 6:30 PM – 11:00 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-flamora-gold shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-white mb-1">Locations</p>
                        <p className="text-gray-400">Mumbai • Delhi • Bangalore • Hyderabad • Pune</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-flamora-gold shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-medium text-white mb-1">Support</p>
                        <p className="text-gray-400">+91 1800-FLAMORA</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex gap-3 mt-8">
                    <Info className="w-5 h-5 text-flamora-gold shrink-0" />
                    <p className="text-xs text-gray-300">
                      For parties larger than 10, or for private dining room reservations, please contact the restaurant directly.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </main>
  );
}
