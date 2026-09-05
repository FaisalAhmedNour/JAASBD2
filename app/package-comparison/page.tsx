import type { Metadata } from 'next';
import { ComparisonHero } from '@/components/comparison/comparison-hero';
import { ComparisonOverviewSplit } from '@/components/comparison/comparison-overview-split';
import { ComparisonWebHostingPillar } from '@/components/comparison/comparison-web-hosting-pillar';
import { ComparisonServersPillar } from '@/components/comparison/comparison-servers-pillar';
import { ComparisonBuildEcosystem } from '@/components/comparison/comparison-build-ecosystem';
import { ComparisonPlatformPanel } from '@/components/comparison/comparison-platform-panel';
import { ComparisonSupportTeam } from '@/components/comparison/comparison-support-team';
import { ComparisonUpgradeJourney } from '@/components/comparison/comparison-upgrade-journey';
import { ComparisonFullMatrix } from '@/components/comparison/comparison-full-matrix';
import { ComparisonFaqCta } from '@/components/comparison/comparison-faq-cta';

export const metadata: Metadata = {
  title: 'Hosting Package Comparison | hosting.com',
  description:
    'Compare Hosting.com packages for web hosting, website creation and managed servers. Review features and options to find the right plan for your needs.',
  openGraph: {
    title: 'Hosting Package Comparison | hosting.com',
    description:
      'Compare Hosting.com packages for web hosting, website creation and managed servers. Review features and options to find the right plan for your needs.',
    type: 'website',
  },
};

export default function PackageComparisonPage() {
  return (
    <div className="w-full">
      {/* 1. Hero billboard */}
      <ComparisonHero />

      {/* 2. Overview Split */}
      <ComparisonOverviewSplit />

      {/* 3. Web Hosting Pillar */}
      <ComparisonWebHostingPillar />

      {/* 4. Managed Servers Pillar */}
      <ComparisonServersPillar />

      {/* 5. Build Ecosystem */}
      <ComparisonBuildEcosystem />

      {/* 6. Included on Every Plan Platform Panel */}
      <ComparisonPlatformPanel />

      {/* 7. Support Team Showcase */}
      <ComparisonSupportTeam />

      {/* 8. Upgrade/Downgrade Journey */}
      <ComparisonUpgradeJourney />

      {/* 9. Comprehensive 10-Category 5-Tier Full Comparison Matrix */}
      <ComparisonFullMatrix />

      {/* 10. FAQs and Conversion CTA */}
      <ComparisonFaqCta />
    </div>
  );
}
