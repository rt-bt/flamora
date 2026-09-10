import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { occasions } from "@/data/occasions";

export function OccasionSection() {
  return (
    <section className="bg-flamora-cream py-20 lg:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Make Every Occasion Delicious"
            subtitle="From birthdays to business dinners, Flamora is the perfect setting for life's best moments."
            centered
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {occasions.map((occasion, index) => (
            <ScrollReveal key={occasion.id} delay={index * 100}>
              <OccasionCard occasion={occasion} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function OccasionCard({
  occasion,
}: {
  occasion: (typeof occasions)[number];
}) {
  const Icon = occasion.icon;

  return (
    <Link
      href={occasion.ctaHref}
      className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={occasion.image}
          alt={occasion.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-flamora-charcoal/60 to-transparent" />
        <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-flamora-red/90 text-flamora-cream">
          <Icon className="h-5 w-5" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-semibold text-flamora-charcoal">
          {occasion.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-flamora-text/70">
          {occasion.description}
        </p>
        <span className="mt-4 inline-flex items-center text-sm font-medium text-flamora-red transition-colors group-hover:text-flamora-orange">
          {occasion.ctaText}
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
