import { HeroSection } from "@/components/home/hero-section";
import { SocialProofRibbon } from "@/components/home/social-proof-ribbon";
import { BangladeshClientsRibbon } from "@/components/home/bangladesh-clients-ribbon";
import { BangladeshGrowth } from "@/components/home/bangladesh-growth";
import { PricingSection } from "@/components/home/pricing-section";
import { ToolsMarquee } from "@/components/home/tools-marquee";
import { StatsSection } from "@/components/home/stats-section";
import { FeatureBento } from "@/components/home/feature-bento";
import { ReviewsCarousel } from "@/components/home/reviews-carousel";
import { SupportBento } from "@/components/home/support-bento";
import { FaqSection } from "@/components/home/faq-section";
import { CtaBanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2F2ED]">
      {/* 1. Hero with integrated Billboard cards & Domain Search */}
      <HeroSection />

      {/* 2. Trust & Review Badges (Trustpilot, Google, HostAdvice) */}
      <SocialProofRibbon />

      {/* 3. Bangladesh Clients / Brands Ribbon */}
      <BangladeshClientsRibbon />

      {/* 4. Bangladesh Digital Growth Story Bento */}
      <BangladeshGrowth />

      {/* 5. Pricing Section (Choose your plan) */}
      <PricingSection />

      {/* 6. Works with the tools you know */}
      <ToolsMarquee />

      {/* 7. The stats speak for themselves */}
      <StatsSection />

      {/* 8. Hardware & Speed Feature Bento */}
      <FeatureBento />

      {/* 9. Dark Forest Green Continuous Bottom Section */}
      <div className="bg-[#082615] text-white">
        <ReviewsCarousel />
        <SupportBento />
      </div>

      {/* 10. FAQs & CTA */}
      <FaqSection />
      <CtaBanner />
    </div>
  );
}
