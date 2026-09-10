"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { faqs } from "@/data/faqs";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQPageClient() {
  return (
    <div className="bg-flamora-cream min-h-screen pt-32 pb-24">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-flamora-charcoal mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about dining at Flamora, our menu, reservations, and private events.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="bg-white rounded-2xl shadow-lg border border-flamora-gold/10 p-6 md:p-10">
              <Accordion className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-b border-flamora-gold/20 last:border-0"
                  >
                    <AccordionTrigger className="text-left font-heading text-xl md:text-2xl text-flamora-charcoal hover:text-flamora-red py-6 font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6 pr-8">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-16 text-center">
              <h3 className="font-heading text-2xl font-bold text-flamora-charcoal mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-8">
                If you couldn't find the answer to your question, feel free to reach out to our team.
              </p>
              <Link
                href="/contact"
                className={cn(buttonVariants(), "bg-flamora-red hover:bg-flamora-red/90 text-white font-medium py-6 px-8 rounded-full")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
}
