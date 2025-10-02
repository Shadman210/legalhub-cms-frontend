import FeaturesSection from "@/components/features-section";
import { Footer } from "@/components/layout/footer";
import { CTASection } from "@/components/sections/cta-section";

import { HeroSection } from "@/components/sections/hero-section";
import { StatsSection } from "@/components/sections/stats-section";

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
