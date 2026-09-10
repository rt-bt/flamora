import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        centered && "text-center",
        className
      )}
    >
      <h2
        className={cn(
          "font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-flamora-cream" : "text-flamora-charcoal"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg leading-relaxed",
            centered && "mx-auto",
            light ? "text-flamora-cream/80" : "text-flamora-text/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
