import { Container } from "@/components/shared/Container";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { siteConfig } from "@/config/site";
import Image from "next/image";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const socialImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80",
  "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
];

export function SocialSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-flamora-charcoal sm:text-4xl">
              Follow The Flame
            </h2>
            <p className="mt-3 text-flamora-text/60">
              Join our community and stay inspired.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {socialImages.map((src, index) => (
              <a
                key={index}
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt={`Flamora Instagram post ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
                  unoptimized
                />
                <div className="absolute inset-0 flex items-center justify-center bg-flamora-charcoal/0 transition-colors duration-300 group-hover:bg-flamora-charcoal/50">
                  <InstagramIcon className="h-6 w-6 text-flamora-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-8 text-center">
            <a
              href={siteConfig.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium text-flamora-red transition-colors hover:text-flamora-orange"
            >
              <InstagramIcon className="h-5 w-5" />
              Follow @flamora
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
