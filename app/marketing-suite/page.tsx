import type { Metadata } from 'next';
import { MarketingHero } from '@/components/marketing/marketing-hero';
import { MarketingChannels } from '@/components/marketing/marketing-channels';
import { MarketingFeaturesTabs } from '@/components/marketing/marketing-features-tabs';
import { MarketingPricingPlans } from '@/components/marketing/marketing-pricing-plans';
import { MarketingComparisonMatrix } from '@/components/marketing/marketing-comparison-matrix';
import { MarketingWhyChoose } from '@/components/marketing/marketing-why-choose';
import { MarketingReviewsFaq } from '@/components/marketing/marketing-reviews-faq';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Marketing Suite — SEO, Ads & AI Visibility | JAASBD / hosting.com',
  description:
    'The complete digital marketing toolkit for small businesses. SEO, Google Ads, local listings, reviews, and AI visibility — one AI-driven app that works alongside your hosting.',
  keywords: [
    'marketing suite bangladesh',
    'small business seo tools bd',
    'google ads automation bangladesh',
    'ai visibility chatgpt gemini marketing',
    'local directory sync 33 directories',
    'automated review management',
  ],
  openGraph: {
    title: 'Marketing Suite — SEO, Ads & AI Visibility | hosting.com / JAASBD',
    description:
      'The complete digital marketing toolkit for small businesses. SEO, Google Ads, local listings, reviews, and AI visibility in one app.',
    url: `https://${siteConfig.domain}/marketing-suite`,
    siteName: 'hosting.com / JAASBD',
    type: 'website',
  },
};

export default function MarketingSuitePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Billboard & Interactive Dashboard */}
      <MarketingHero />

      {/* 2. Channel Coverage Logos (Works where customers look) */}
      <MarketingChannels />

      {/* 3. Features Showcase Tabs & Interactive Bento Grid */}
      <MarketingFeaturesTabs />

      {/* 4. Pick The Plan Pricing Cards */}
      <MarketingPricingPlans />

      {/* 5. Full Side-by-Side Comparison Matrix */}
      <MarketingComparisonMatrix />

      {/* 6. Why Choose Marketing Suite Bento */}
      <MarketingWhyChoose />

      {/* 7. Customer Testimonials & FAQs */}
      <MarketingReviewsFaq />
    </div>
  );
}
