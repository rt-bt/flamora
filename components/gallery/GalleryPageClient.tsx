"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryCategories, galleryImages } from "@/data/gallery";
import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function GalleryPageClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img: any) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  }, [filteredImages.length]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  }, [filteredImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, nextImage, prevImage]);

  return (
    <div className="bg-flamora-cream min-h-screen pt-32 pb-24">
      <Container>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-flamora-charcoal font-bold mb-4">
              Our Gallery
            </h1>
            <p className="text-flamora-text/80 max-w-2xl mx-auto">
              A glimpse into the exquisite dishes, warm ambiance, and memorable moments at Flamora.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {galleryCategories.map((category: { label: string; value: string }) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                onClick={() => setActiveCategory(category.value)}
                className={`rounded-full ${
                  activeCategory === category.value 
                    ? "bg-flamora-charcoal text-white hover:bg-flamora-charcoal/90" 
                    : "border-flamora-charcoal/20 text-flamora-charcoal hover:bg-flamora-charcoal/5"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredImages.map((image: any, index: number) => (
            <div 
              key={image.id || index}
              className="relative rounded-xl overflow-hidden cursor-pointer group break-inside-avoid bg-gray-200"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={image.src}
                alt={image.alt || "Gallery image"}
                width={image.width || 600}
                height={image.height || 800}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </Container>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-transparent border-none shadow-none flex items-center justify-center [&>button]:hidden">
          <DialogTitle className="sr-only">Gallery Image</DialogTitle>
          {filteredImages.length > 0 && (
            <div className="relative w-full h-full flex items-center justify-center group" onClick={closeLightbox}>
              <div className="relative w-full max-w-5xl h-[85vh]" onClick={(e) => e.stopPropagation()}>
                <Image
                  src={filteredImages[currentImageIndex].src}
                  alt={filteredImages[currentImageIndex].alt || "Gallery Image"}
                  fill
                  className="object-contain"
                  unoptimized
                />
                
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-0 right-0 md:-right-12 text-white bg-black/50 hover:bg-black/70 rounded-full h-10 w-10 z-50"
                  onClick={closeLightbox}
                >
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-2 md:-left-16 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full h-12 w-12 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-50"
                  onClick={(e) => { e.stopPropagation(); prevImage(); }}
                >
                  <ChevronLeft className="h-8 w-8" />
                  <span className="sr-only">Previous</span>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 md:-right-16 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full h-12 w-12 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity z-50"
                  onClick={(e) => { e.stopPropagation(); nextImage(); }}
                >
                  <ChevronRight className="h-8 w-8" />
                  <span className="sr-only">Next</span>
                </Button>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-12 bg-black/60 px-4 py-2 rounded-full text-white text-sm text-center max-w-[90%] backdrop-blur-sm z-50">
                  {filteredImages[currentImageIndex].alt || "Flamora Gallery Image"}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
