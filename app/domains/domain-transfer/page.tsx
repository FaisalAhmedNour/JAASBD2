import type { Metadata } from 'next';
import { DomainsHero } from '@/components/domains/domains-hero';
import { DomainsTransferSteps } from '@/components/domains/domains-transfer-steps';
import { DomainsIncludedFeatures } from '@/components/domains/domains-included-features';
import { DomainsMoreThanRegistrar } from '@/components/domains/domains-more-than-registrar';
import { DomainsEcosystem } from '@/components/domains/domains-ecosystem';
import { DomainsReviewsCta } from '@/components/domains/domains-reviews-cta';

export const metadata: Metadata = {
  title: 'Domain Transfer - Move Your Domain with Zero Downtime | JAASBD',
  description:
    'Transfer your domain to JAASBD easily and seamlessly. Keep your site and email online throughout, with free DNS management and WHOIS privacy.',
  openGraph: {
    title: 'Domain Transfer - Move Your Domain with Zero Downtime | JAASBD',
    description:
      'Transfer your domain to JAASBD easily and seamlessly with zero downtime.',
    type: 'website',
  },
};

export default function DomainTransferPage() {
  return (
    <div className="w-full">
      {/* 1. Hero */}
      <DomainsHero />

      {/* 2. Transfer Steps */}
      <DomainsTransferSteps />

      {/* 3. Included Features */}
      <DomainsIncludedFeatures />

      {/* 4. More Than a Registrar */}
      <DomainsMoreThanRegistrar />

      {/* 5. Ecosystem */}
      <DomainsEcosystem />

      {/* 6. Reviews & CTA */}
      <DomainsReviewsCta />
    </div>
  );
}
