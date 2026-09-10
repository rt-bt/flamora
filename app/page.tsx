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

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
