import type { Metadata } from 'next';
import { AllDomainsHero } from '@/components/domains/all-domains/all-domains-hero';
import { AllDomainsPricingTable } from '@/components/domains/all-domains/all-domains-pricing-table';
import { AllDomainsFaq } from '@/components/domains/all-domains/all-domains-faq';
import { AllDomainsFoundCta } from '@/components/domains/all-domains/all-domains-found-cta';
import { AllDomainsRedemption } from '@/components/domains/all-domains/all-domains-redemption';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Domain Prices | gTLD Domain Extensions | TLD List - JAASBD / hosting.com',
  description:
    'See all our gTLD and ccTLD domain extensions and compare registration, renewal and transfer prices. Search the complete TLD list and register the right domain with transparent pricing.',
  keywords: [
    'domain price list bangladesh',
    'domain registration prices',
    'domain renewal cost bd',
    'all tlds pricing',
    'cheap domain bdt',
    'com domain price',
    'bd domain price',
    'domain transfer fee',
    'domain redemption fees',
  ],
  openGraph: {
    title: 'Domain Prices | gTLD Domain Extensions | TLD List',
    description:
      'See all our gTLD domain extensions and compare registration, renewal and transfer prices. Search the complete TLD list and register the right domain.',
    url: `https://${siteConfig.domain}/domains/all-domains`,
    siteName: 'hosting.com / JAASBD',
    type: 'website',
  },
};

export default function AllDomainsPage() {
  return (
    <div className="w-full bg-[#F2F2ED]">
      {/* 1. Hero Billboard & Domain Search */}
      <AllDomainsHero />

      {/* 2. Interactive Domain Registration & Renewal Pricing Matrix */}
      <AllDomainsPricingTable />

      {/* 3. Pricing Questions FAQ Accordion */}
      <AllDomainsFaq />

      {/* 4. Found the one? Search Banner */}
      <AllDomainsFoundCta />

      {/* 5. Domain Redemption Fees Breakdown */}
      <AllDomainsRedemption />
    </div>
  );
}
