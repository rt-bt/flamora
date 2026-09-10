"use client";

import { useState } from "react";
import { menuCategories } from "@/data/menu";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Flame, Sparkles } from "lucide-react";

export function MenuPageClient() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].slug);

  return (
    <div className="bg-flamora-cream min-h-screen py-24">
      <Container>
        <SectionHeading 
          title="Our Menu" 
          subtitle="Explore our carefully curated selection of fiery and flavorful dishes." 
          centered 
        />

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-12 gap-2 hide-scrollbar">
          {menuCategories.map((category) => (
            <button
              key={category.slug}
              onClick={() => setActiveCategory(category.slug)}
              className={`whitespace-nowrap px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category.slug
                  ? "bg-flamora-red text-white"
                  : "bg-white text-flamora-charcoal hover:bg-flamora-red/10 border border-flamora-charcoal/10"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        {menuCategories.map((category) => (
          <div
            key={category.slug}
            className={`${activeCategory === category.slug ? "block" : "hidden"}`}
          >
            {category.description && (
              <p className="text-flamora-text text-lg text-center mb-10 max-w-2xl mx-auto">
                {category.description}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.items.map((item, index) => (
                <ScrollReveal key={item.name} delay={index * 50}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-flamora-charcoal/5 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        {/* Veg / Non-veg / Egg indicator */}
                        <div 
                          className={`w-4 h-4 rounded-sm border flex items-center justify-center p-0.5 ${
                            item.type === "veg" ? "border-green-600" : item.type === "non-veg" ? "border-red-600" : "border-yellow-500"
                          }`}
                        >
                          <div 
                            className={`w-full h-full rounded-full ${
                              item.type === "veg" ? "bg-green-600" : item.type === "non-veg" ? "bg-red-600" : "bg-yellow-500"
                            }`}
                          />
                        </div>
                        <h3 className="text-xl font-heading font-semibold text-flamora-charcoal">
                          {item.name}
                        </h3>
                      </div>
                      <span className="font-semibold text-flamora-orange">₹{item.price}</span>
                    </div>

                    <p className="text-flamora-text text-sm mb-4 flex-grow">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-3 mt-auto pt-4 border-t border-flamora-charcoal/5">
                      {item.spicy && (
                        <div className="flex items-center text-xs font-medium text-flamora-red bg-flamora-red/10 px-2 py-1 rounded-full">
                          <Flame className="w-3 h-3 mr-1" />
                          <span className="capitalize">{item.spicy}</span>
                        </div>
                      )}
                      
                      {item.isSignature && (
                        <div className="flex items-center text-xs font-medium text-flamora-gold bg-flamora-gold/10 px-2 py-1 rounded-full">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Signature
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
