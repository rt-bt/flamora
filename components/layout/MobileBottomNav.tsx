"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface MobileBottomNavProps {
  onOpenBooking: () => void;
}

export function MobileBottomNav({ onOpenBooking }: MobileBottomNavProps) {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Reservation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="transparent" viewBox="0 0 18 22">
          <path fill="currentColor" d="M16.2 0H1.8C.916 0 .2.658.2 1.467v19.066C.2 21.343.916 22 1.8 22h14.4c.882 0 1.6-.658 1.6-1.467V1.467C17.8.657 17.081 0 16.2 0M2.6 6.233c0-.097.041-.19.116-.259A.42.42 0 0 1 3 5.867h5.6a.42.42 0 0 1 .283.107.35.35 0 0 1 .117.26c0 .097-.042.19-.117.259A.42.42 0 0 1 8.6 6.6H3a.42.42 0 0 1-.283-.107.35.35 0 0 1-.117-.26M14.2 17.6H3.8a.42.42 0 0 1-.284-.107.35.35 0 0 1-.117-.26c0-.097.042-.19.117-.259a.42.42 0 0 1 .283-.107h10.4a.42.42 0 0 1 .283.107.35.35 0 0 1 .117.26c0 .097-.042.19-.117.259a.42.42 0 0 1-.283.107m0-3.667H3.8a.42.42 0 0 1-.284-.107.35.35 0 0 1-.117-.26c0-.097.042-.19.117-.259A.42.42 0 0 1 3.8 13.2h10.4a.42.42 0 0 1 .283.107.35.35 0 0 1 .117.26c0 .097-.042.19-.117.259a.42.42 0 0 1-.283.107m0-3.666H3.8a.42.42 0 0 1-.284-.108A.35.35 0 0 1 3.4 9.9c0-.097.042-.19.117-.26a.42.42 0 0 1 .283-.107h10.4a.42.42 0 0 1 .283.108.35.35 0 0 1 .117.259c0 .097-.042.19-.117.26a.42.42 0 0 1-.283.107m2-4.034q-.001.092-.047.172a.4.4 0 0 1-.13.132.42.42 0 0 1-.373.037l-1.85-.678-1.852.678a.44.44 0 0 1-.373-.037.4.4 0 0 1-.129-.132.35.35 0 0 1-.047-.172v-5.5h4.8z"/>
        </svg>
      ),
      isAction: true,
      isActive: pathname.startsWith("/book-a-table"),
    },
    {
      label: "Happiness Card",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 21" fill="none">
          <path fill="currentColor" d="M11.458 0C5.588 0 .833 4.756.833 10.625c0 5.87 4.756 10.625 10.625 10.625 5.87 0 10.625-4.756 10.625-10.625C22.083 4.755 17.328 0 11.458 0m3.428 7.198a1.37 1.37 0 0 1 1.37 1.37 1.37 1.37 0 0 1-1.37 1.372 1.37 1.37 0 0 1-1.371-1.371 1.37 1.37 0 0 1 1.37-1.371m-6.855 0a1.37 1.37 0 0 1 1.37 1.37 1.37 1.37 0 0 1-1.37 1.372A1.37 1.37 0 0 1 6.66 8.569a1.37 1.37 0 0 1 1.37-1.371m8.346 7.291a6.38 6.38 0 0 1-4.919 2.305A6.38 6.38 0 0 1 6.54 14.49c-.583-.698.471-1.572 1.054-.878a5 5 0 0 0 3.864 1.808c1.5 0 2.905-.66 3.865-1.808.574-.694 1.632.18 1.054.878"/>
        </svg>
      ),
      href: "/offers",
      isActive: pathname.startsWith("/offers"),
    },
    {
      label: "Catering",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26 15" fill="none">
          <path fill="currentColor" d="M24.825 11.74H.443a.452.452 0 0 0 0 .903h24.382a.452.452 0 0 0 0-.903M14.778 2.957A2.255 2.255 0 0 0 12.021.085a2.257 2.257 0 0 0-1.532 2.872 9.48 9.48 0 0 0-7.233 7.88h18.756a9.48 9.48 0 0 0-7.234-7.88m-.903-.162a9 9 0 0 0-2.483 0 1.3 1.3 0 0 1-.113-.537 1.352 1.352 0 1 1 2.596.537m8.128 11.274c-1.321-.408-2.166.9-3.098 1.585-.74.632-1.485 1.265-2.217 1.906a2.37 2.37 0 0 1-1.639.654c-1.26.01-2.745.032-4.194.118a.62.62 0 0 1-.57-.258c-.205-.407.068-.783.56-.776 1.256-.062 2.583-.114 3.82-.176 1.374.059 2.145-1.7 1.089-2.606-.733-.7-2.015-.285-2.958-.388-1.458.01-2.921.018-4.38.005a4.33 4.33 0 0 0-3.693 1.85 342 342 0 0 1-2.614 3.712.447.447 0 0 0 .104.628l4.51 3.251a.45.45 0 0 0 .596-.059 1.27 1.27 0 0 1 .958-.316c2.213-.117 4.527-.236 6.736-.325a3.93 3.93 0 0 0 2.673-1.156c1.62-1.585 3.247-3.112 4.872-4.669 1.116-.988.793-2.59-.555-2.98"/>
        </svg>
      ),
      href: "/catering",
      isActive: pathname.startsWith("/catering"),
    },
    {
      label: "Takeaway",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 20 20" fill="none">
          <path fill="currentColor" d="m19.17 5.294-7-4.77a2.92 2.92 0 0 0-3.34 0l-7 4.77A3.06 3.06 0 0 0 .5 7.823v9.128A3.03 3.03 0 0 0 3.5 20h4v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6h4a3.03 3.03 0 0 0 3-3.05V7.824a3.06 3.06 0 0 0-1.33-2.53"/>
        </svg>
      ),
      href: "/",
      isActive: pathname === "/",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 block lg:hidden">
      <nav
        className="bg-[#171513] px-5 py-3 flex items-center gap-6 justify-between border-t border-[#38312B] shadow-lg"
        aria-label="Bottom Navigation"
      >
        {navItems.map((item, idx) => {
          const isActive = item.isActive;
          const iconEl = (
            <div className="flex flex-col items-center">
              <span className={cn("mb-1.5", isActive ? "text-[#C65324]" : "text-[#B8AEA1]")}>
                {item.icon}
              </span>
              <p className={cn("text-xs leading-[14.4px]", isActive ? "text-[#C65324] font-bold" : "text-[#B8AEA1] font-normal")}>
                {item.label}
              </p>
            </div>
          );

          if (item.isAction) {
            return (
              <button
                key={idx}
                type="button"
                onClick={onOpenBooking}
                className="text-center flex-1 cursor-pointer"
                aria-label="Open table reservation"
              >
                {iconEl}
              </button>
            );
          }

          return (
            <Link
              key={idx}
              href={item.href!}
              className="text-center flex-1"
            >
              {iconEl}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
