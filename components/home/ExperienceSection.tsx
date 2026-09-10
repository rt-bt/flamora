import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { experiences, experienceHero } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section className="bg-flamora-charcoal py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <ScrollReveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={experienceHero.image}
                alt="Flamora dining experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-flamora-cream/10" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div>
            <ScrollReveal>
              <SectionHeading
                title={experienceHero.headline}
                subtitle={experienceHero.description}
                light
              />
            </ScrollReveal>

            <div className="space-y-6">
              {experiences.map((exp, index) => {
                const Icon = exp.icon;
                return (
                  <ScrollReveal key={exp.id} delay={index * 80}>
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-flamora-red/10 text-flamora-orange">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-flamora-cream">
                          {exp.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-flamora-cream/60">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
