import { HeroSection } from "@/components/home/hero-section";
import { SocialProofRibbon } from "@/components/home/social-proof-ribbon";
import { BangladeshClientsRibbon } from "@/components/home/bangladesh-clients-ribbon";
import { DomainSearch } from "@/components/home/domain-search";
import { BangladeshGrowth } from "@/components/home/bangladesh-growth";
import { PricingSection } from "@/components/home/pricing-section";
import { ToolsMarquee } from "@/components/home/tools-marquee";
import { StatsSection } from "@/components/home/stats-section";
import { FeatureBento } from "@/components/home/feature-bento";
import { ReviewsCarousel } from "@/components/home/reviews-carousel";
import { SupportBento } from "@/components/home/support-bento";
import { AwardsRibbon } from "@/components/home/awards-ribbon";
import { FaqSection } from "@/components/home/faq-section";
import { CtaBanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2F2ED]">
      <HeroSection />
      <SocialProofRibbon />
      <BangladeshClientsRibbon />
      <DomainSearch />
      <BangladeshGrowth />
      <PricingSection />
      <ToolsMarquee />
      <StatsSection />
      <FeatureBento />
      <ReviewsCarousel />
      <SupportBento />
      <AwardsRibbon />
      <FaqSection />
      <CtaBanner />
    </div>
  );
}
