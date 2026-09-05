import type { Metadata } from 'next';
import { ServersHero } from '@/components/servers/servers-hero';
import { ServersPricing } from '@/components/servers/servers-pricing';
import { ServersFeatures } from '@/components/servers/servers-features';
import { ServersCpanelCallout } from '@/components/servers/servers-cpanel-callout';
import { ServersSupportShowcase } from '@/components/servers/servers-support-showcase';
import { ServersGuarantees } from '@/components/servers/servers-guarantees';
import { ServersFAQ } from '@/components/servers/servers-faq';
import { ServersCTA } from '@/components/servers/servers-cta';

export const metadata: Metadata = {
  title: 'Managed Server Hosting - 24/7/365 Support | hosting.com',
  description:
    'Step up to your own server, fully managed, with free zero-downtime migration and 24/7 support. Dedicated resources starting at 8GB RAM.',
  openGraph: {
    title: 'Managed Server Hosting - 24/7/365 Support | hosting.com',
    description:
      'High-performance managed server hosting with dedicated resources, automated backups, and 24/7 expert assistance.',
    type: 'website',
  },
};

export default function ManagedServersPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Billboard */}
      <ServersHero />

      {/* 2. Pricing & Specs (8GB, 16GB, 32GB, 64GB) */}
      <ServersPricing />

      {/* 3. Features Bento Grid */}
      <ServersFeatures />

      {/* 4. cPanel Callout */}
      <ServersCpanelCallout />

      {/* 5. Support Showcase */}
      <ServersSupportShowcase />

      {/* 6. Core Guarantees Grid */}
      <ServersGuarantees />

      {/* 7. FAQs */}
      <ServersFAQ />

      {/* 8. Conversion CTA */}
      <ServersCTA />
    </div>
  );
}
