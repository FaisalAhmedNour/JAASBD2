import type { Metadata } from 'next';
import { DomainsHero } from '@/components/domains/domains-hero';
import { DomainsIncludedFeatures } from '@/components/domains/domains-included-features';
import { DomainsTransferSteps } from '@/components/domains/domains-transfer-steps';
import { DomainsMoreThanRegistrar } from '@/components/domains/domains-more-than-registrar';
import { DomainsEcosystem } from '@/components/domains/domains-ecosystem';
import { DomainsReviewsCta } from '@/components/domains/domains-reviews-cta';

export const metadata: Metadata = {
  title: 'Domain Name Search & Registration | hosting.com',
  description:
    'Find and register your perfect domain name. Over 600+ domain extensions, free DNS management, WHOIS privacy, and theft protection included standard.',
  openGraph: {
    title: 'Domain Name Search & Registration | hosting.com',
    description:
      'Search .com, .com.bd, .net, and hundreds of extensions with instant activation, free DNS management, and 24/7 human support.',
    type: 'website',
  },
};

export default function DomainsPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Billboard & Interactive Search */}
      <DomainsHero />

      {/* 2. Everything a Domain Comes With (6-Card Grid) */}
      <DomainsIncludedFeatures />

      {/* 3. 3-Step Transfer Flow */}
      <DomainsTransferSteps />

      {/* 4. More Than a Registrar */}
      <DomainsMoreThanRegistrar />

      {/* 5. Domain Ecosystem & Next Steps */}
      <DomainsEcosystem />

      {/* 6. Customer Reviews & Bottom Conversion CTA */}
      <DomainsReviewsCta />
    </div>
  );
}
