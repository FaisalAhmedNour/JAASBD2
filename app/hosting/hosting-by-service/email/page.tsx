import type { Metadata } from 'next';
import { EmailHero } from '@/components/email/email-hero';
import { EmailPricingPlans } from '@/components/email/email-pricing-plans';
import { EmailCoreFeatures } from '@/components/email/email-core-features';
import { EmailAdvancedTools } from '@/components/email/email-advanced-tools';
import { EmailDeliverabilityTrust } from '@/components/email/email-deliverability-trust';
import { EmailReviewsFaq } from '@/components/email/email-reviews-faq';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Professional Email Hosting for Business | JAASBD / hosting.com',
  description:
    'Professional email at your own domain, with calendar, contacts and a full productivity suite. Reliable, ad-free, and backed by 24/7 in-house support.',
  keywords: [
    'business email hosting bangladesh',
    'professional email custom domain',
    'titan email hosting bd',
    'cheap email hosting bdt',
    'corporate webmail calendar',
    'spf dkim dmarc email hosting',
  ],
  openGraph: {
    title: 'Professional Email Hosting for Business | hosting.com / JAASBD',
    description:
      'Professional email at your own domain, with calendar, contacts and a full productivity suite. Reliable, ad-free, and backed by 24/7 in-house support.',
    url: `https://${siteConfig.domain}/hosting/hosting-by-service/email`,
    siteName: 'hosting.com / JAASBD',
    type: 'website',
  },
};

export default function BusinessEmailPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Billboard & Mockup */}
      <EmailHero />

      {/* 2. Choose Your Plan Pricing Cards */}
      <EmailPricingPlans />

      {/* 3. Everything in Every Mailbox (Core 6-Card Grid) */}
      <EmailCoreFeatures />

      {/* 4. More Room, More Tools (Advanced Tools Grid) */}
      <EmailAdvancedTools />

      {/* 5. Built to Reach the Inbox & Why Run Your Email With Us */}
      <EmailDeliverabilityTrust />

      {/* 6. Customer Testimonials & Frequently Asked Questions */}
      <EmailReviewsFaq />
    </div>
  );
}
