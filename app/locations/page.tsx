import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Phone, Map } from "lucide-react";
import { locations } from "@/data/locations";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Locations | FLAMORA",
  description: "Find a FLAMORA restaurant near you. View opening hours, addresses, and book a table.",
};

export default function LocationsPage() {
  return (
    <main className="bg-flamora-cream min-h-screen py-24">
      <Container>
        <SectionHeading 
          title="Find Your Flamora" 
          subtitle="Discover our premium dining destinations across the country."
          centered 
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <ScrollReveal key={location.id} delay={index * 100}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full transition-transform hover:-translate-y-1 duration-300">
                {/* Image Placeholder */}
                <div className="h-56 relative bg-flamora-charcoal/10 flex items-center justify-center overflow-hidden">
                  {location.image ? (
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover"
                      unoptimized={true}
                    />
                  ) : (
                    <MapPin className="w-12 h-12 text-flamora-charcoal/40" />
                  )}
                </div>
                
                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-heading text-flamora-charcoal mb-4">
                    {location.name}
                  </h3>
                  
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-flamora-red shrink-0 mt-0.5" />
                      <p className="text-gray-600 text-sm">
                        {location.address}<br />
                        {location.city}, {location.state}
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-flamora-red shrink-0 mt-0.5" />
                      <div className="text-gray-600 text-sm">
                        <p><span className="font-medium">Lunch:</span> {location.openingHours.lunch}</p>
                        <p><span className="font-medium">Dinner:</span> {location.openingHours.dinner}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-flamora-red shrink-0" />
                      <a href={`tel:${location.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-600 text-sm hover:text-flamora-red transition-colors">
                        {location.phone}
                      </a>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-3 mt-auto pt-4 border-t border-gray-100">
                    <a 
                      href={location.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gray-50 text-flamora-charcoal hover:bg-gray-100 transition-colors text-sm font-medium border border-gray-200"
                    >
                      <Map className="w-4 h-4" />
                      Map
                    </a>
                    <Link 
                      href={`/book-a-table?location=${location.id}`}
                      className="flex-1 flex items-center justify-center py-2.5 px-4 rounded-lg bg-flamora-red text-white hover:bg-flamora-red/90 transition-colors text-sm font-medium"
                    >
                      Book Table
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </main>
  );
}
