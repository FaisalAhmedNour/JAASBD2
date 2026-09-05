import type { Metadata } from "next";
import { HostingHero } from "@/components/hosting/hosting-hero";
import { HostingSocialProof } from "@/components/hosting/hosting-social-proof";
import { HostingPricing } from "@/components/hosting/hosting-pricing";
import { HostingFeaturesGrid } from "@/components/hosting/hosting-features-grid";
import { HostingMigration } from "@/components/hosting/hosting-migration";
import { HostingSupport } from "@/components/hosting/hosting-support";
import { HostingToolsEcosystem } from "@/components/hosting/hosting-tools-ecosystem";
import { HostingReviews } from "@/components/hosting/hosting-reviews";
import { HostingFaq } from "@/components/hosting/hosting-faq";
import { HostingCta } from "@/components/hosting/hosting-cta";

export const metadata: Metadata = {
  title: "Fast, Managed Web Hosting Plans | hosting.com",
  description:
    "Fully managed web hosting with 24/7 in-house support, 99.9% uptime SLA, NVMe SSD storage, and free zero-downtime website migration.",
  openGraph: {
    title: "Fast, Managed Web Hosting Plans that Grow with You",
    description:
      "NVMe storage, LiteSpeed caching, unlimited MariaDB databases, and free SSL standard on every plan.",
    type: "website",
  },
};

export default function HostingPage() {
  return (
    <div className="w-full">
      {/* 1. Hero / Billboard */}
      <HostingHero />

      {/* 2. Social Proof */}
      <HostingSocialProof />

      {/* 3. Pricing Plans */}
      <HostingPricing />

      {/* 4. Features Grid */}
      <HostingFeaturesGrid />

      {/* 5. Free Migration */}
      <HostingMigration />

      {/* 6. In-House Support & Orbi AI Assistant */}
      <HostingSupport />

      {/* 7. Developer & CMS Tools */}
      <HostingToolsEcosystem />

      {/* 8. Verified Reviews */}
      <HostingReviews />

      {/* 9. FAQs */}
      <HostingFaq />

      {/* 10. Conversion CTA Banner */}
      <HostingCta />
    </div>
  );
}
