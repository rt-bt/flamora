import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export default function Logo({ className = "", size = "md", showTagline = true }: LogoProps) {
  const sizeMap = {
    sm: { px: 44, box: "w-11 h-11", sub: "text-[8px]" },
    md: { px: 56, box: "w-12 h-12 sm:w-14 sm:h-14", sub: "text-[9px]" },
    lg: { px: 76, box: "w-16 h-16 sm:w-[76px] sm:h-[76px]", sub: "text-[10px]" },
  };

  const current = sizeMap[size];

  return (
    <Link href="/" className={`inline-flex flex-col items-center group select-none ${className}`}>
      <div
        className={`relative ${current.box} rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(255,106,36,0.45)]`}
      >
        <Image
          src="/images/flamora-logo.png"
          alt="Flamora – Grill & Fry"
          width={current.px}
          height={current.px}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      {showTagline && (
        <div className="flex items-center gap-1.5 mt-1 opacity-90">
          <span className="w-3 h-[1.5px] bg-[#FF6A24]" />
          <span className={`font-heading font-semibold text-[#FF6A24] tracking-[0.2em] uppercase leading-none ${current.sub}`}>
            GRILL &amp; FRY
          </span>
          <span className="w-3 h-[1.5px] bg-[#FF6A24]" />
        </div>
      )}
    </Link>
  );
}
