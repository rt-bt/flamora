"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { MobileBookingDrawer } from "@/components/booking/MobileBookingDrawer";

export function AppLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isBookingDrawerOpen, setIsBookingDrawerOpen] = useState(false);

  return (
    <>
      <Header onOpenBooking={() => setIsBookingDrawerOpen(true)} />
      {/* pb-[68px] gives space for the fixed bottom nav on mobile */}
      <main className="flex-1 pb-[68px] lg:pb-0">{children}</main>
      <Footer />
      {/* Bottom Nav only on mobile */}
      <MobileBottomNav onOpenBooking={() => setIsBookingDrawerOpen(true)} />
      {/* Global booking drawer (for desktop + bottom nav tap) */}
      <MobileBookingDrawer
        isOpen={isBookingDrawerOpen}
        onClose={() => setIsBookingDrawerOpen(false)}
      />
    </>
  );
}
