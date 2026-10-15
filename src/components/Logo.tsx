import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

export default function Logo({ className = "", size = "md", showTagline = true }: LogoProps) {
  const sizeMap = {
    sm: { flame: 24, title: "text-lg", sub: "text-[9px]" },
    md: { flame: 32, title: "text-2xl", sub: "text-[10px]" },
    lg: { flame: 44, title: "text-3xl", sub: "text-xs" },
  };

  const current = sizeMap[size];

  return (
    <Link href="/" className={`inline-flex flex-col items-center group select-none ${className}`}>
      {/* Flame Icon */}
      <div className="relative flex items-center justify-center mb-0.5 transition-transform duration-300 group-hover:scale-105">
        <svg
          width={current.flame}
          height={current.flame * 1.15}
          viewBox="0 0 40 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_8px_rgba(255,106,36,0.5)]"
        >
          <defs>
            <linearGradient id="flameGrad" x1="20" y1="0" x2="20" y2="46" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFC107" />
              <stop offset="35%" stopColor="#FF6A24" />
              <stop offset="100%" stopColor="#D62B28" />
            </linearGradient>
            <linearGradient id="innerFlameGrad" x1="20" y1="16" x2="20" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFE082" />
              <stop offset="100%" stopColor="#FF6A24" />
            </linearGradient>
          </defs>
          {/* Outer Flame */}
          <path
            d="M20 0C20.5 4.5 24 10 27.5 13.5C31.5 17.5 37 21.5 37 29.5C37 38.6 29.4 46 20 46C10.6 46 3 38.6 3 29.5C3 22 8 18 11.5 13.5C12.5 18 15 20.5 17 21C16.5 15.5 16 9.5 20 0Z"
            fill="url(#flameGrad)"
          />
          {/* Inner Flame Core */}
          <path
            d="M20 18C21.5 21 24.5 24 25.5 28C26.5 32 23.5 38 20 40C16.5 38 13.5 32 14.5 28C15.5 24 18.5 21 20 18Z"
            fill="url(#innerFlameGrad)"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col items-center tracking-wider text-center">
        <span
          className={`font-heading font-extrabold text-white tracking-widest leading-none ${current.title} group-hover:text-[#FF6A24] transition-colors`}
        >
          FLAMORA
        </span>
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-0.5 opacity-90">
            <span className="w-3.5 h-[1.5px] bg-[#FF6A24]"></span>
            <span className={`font-heading font-semibold text-[#FF6A24] tracking-[0.2em] uppercase leading-none ${current.sub}`}>
              GRILL & FRY
            </span>
            <span className="w-3.5 h-[1.5px] bg-[#FF6A24]"></span>
          </div>
        )}
      </div>
    </Link>
  );
}
