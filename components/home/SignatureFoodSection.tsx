import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { menuCategories } from "@/data/menu";

// Show a curated selection of categories with one signature item each
const signatureItems = [
  {
    category: "Live Grills",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    description: "Flame-kissed perfection, grilled at your table.",
  },
  {
    category: "Starters",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
    description: "Bold flavors to ignite your appetite.",
  },
  {
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
    description: "Rich, aromatic dishes cooked to perfection.",
  },
  {
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
    description: "Fragrant, layered, and cooked with love.",
  },
  {
    category: "Indian Curries",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80",
    description: "Time-honored recipes with a modern touch.",
  },
  {
    category: "Breads",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80",
    description: "Freshly baked, straight from the tandoor.",
  },
  {
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=600&q=80",
    description: "The sweetest way to end your feast.",
  },
  {
    category: "Signature Drinks",
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&q=80",
    description: "Refreshing accompaniments crafted with care.",
  },
];

export function SignatureFoodSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="From The Flame To Your Table"
            subtitle="Every dish at Flamora tells a story of fire, spice, and tradition."
            centered
          />
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {signatureItems.map((item, index) => (
            <ScrollReveal key={item.category} delay={index * 80}>
              <div className="group relative overflow-hidden rounded-xl bg-flamora-cream shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.category}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-flamora-charcoal/60 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-base font-semibold text-flamora-charcoal">
                    {item.category}
                  </h3>
                  <p className="mt-1 text-sm text-flamora-text/60">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link
              href="/menu"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-flamora-red px-8 text-flamora-cream hover:bg-flamora-red/90"
              )}
            >
              Explore Full Menu
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
