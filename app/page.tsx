import { Hero } from "@/components/home/Hero";
import { QuickBookingWidget } from "@/components/home/QuickBookingWidget";
import { QuickServicesBar } from "@/components/home/QuickServicesBar";
import { TableGrillRitual } from "@/components/home/TableGrillRitual";
import { RealBuffetExplorer } from "@/components/home/RealBuffetExplorer";
import { BuffetPricingCalculator } from "@/components/home/BuffetPricingCalculator";
import { CelebrationPackages } from "@/components/home/CelebrationPackages";
import { OutletsLiveStatus } from "@/components/home/OutletsLiveStatus";
import { AppLoyaltyBanner } from "@/components/home/AppLoyaltyBanner";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { SocialSection } from "@/components/home/SocialSection";
import { MobileBarbequeView } from "@/components/home/MobileBarbequeView";

export default function HomePage() {
  return (
    <>
      {/* 📱 Mobile Barbeque Nation App View (Visible on Mobile & Tablet < 1024px) */}
      <MobileBarbequeView />

      {/* 💻 Desktop High-Res Showcase (Visible on Large Screens >= 1024px) */}
      <div className="hidden lg:block">
        <Hero />
        <QuickBookingWidget />
        <QuickServicesBar />
        <TableGrillRitual />
        <RealBuffetExplorer />
        <BuffetPricingCalculator />
        <CelebrationPackages />
        <OutletsLiveStatus />
        <AppLoyaltyBanner />
        <TestimonialsSection />
        <SocialSection />
      </div>
    </>
  );
}
