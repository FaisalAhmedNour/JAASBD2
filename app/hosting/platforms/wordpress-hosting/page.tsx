import type { Metadata } from 'next';
import { WordPressHero } from '@/components/wordpress/wordpress-hero';
import { WordPressBrands } from '@/components/wordpress/wordpress-brands';
import { WordPressBentoFeatures } from '@/components/wordpress/wordpress-bento-features';
import { WordPressDemoBanner } from '@/components/wordpress/wordpress-demo-banner';
import { WordPressSpeedJuxtapose } from '@/components/wordpress/wordpress-speed-juxtapose';
import { WordPressSecurityJuxtapose } from '@/components/wordpress/wordpress-security-juxtapose';
import { WordPressControlPanel } from '@/components/wordpress/wordpress-control-panel';
import { WordPressPricing } from '@/components/wordpress/wordpress-pricing';
import { WordPressMigration } from '@/components/wordpress/wordpress-migration';
import { WordPressSupport } from '@/components/wordpress/wordpress-support';
import { WordPressCloudflareDna } from '@/components/wordpress/wordpress-cloudflare-dna';
import { WordPressWhyUs } from '@/components/wordpress/wordpress-why-us';
import { WordPressBookDemo } from '@/components/wordpress/wordpress-book-demo';
import { WordPressReviews } from '@/components/wordpress/wordpress-reviews';
import { WordPressFaqCta } from '@/components/wordpress/wordpress-faq-cta';

export const metadata: Metadata = {
  title: 'Managed WordPress Hosting - Fast, Secure & Effortless | hosting.com',
  description:
    'Experience the world’s fastest managed hosting for WordPress. Built on Cloudflare Enterprise with automatic caching, WAF, daily backups, and unlimited free migrations.',
  openGraph: {
    title: 'Managed WordPress Hosting - Fast, Secure & Effortless | hosting.com',
    description:
      'Ultra-fast managed WordPress hosting in Bangladesh. Cloudflare Enterprise edge, uncapped PHP workers, automated malware removal, and 24/7/365 WordPress experts.',
    type: 'website',
  },
};

export default function WordPressHostingPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Billboard */}
      <WordPressHero />

      {/* 2. Enterprise Brand Logos */}
      <WordPressBrands />

      {/* 3. Bento Features Showcase */}
      <WordPressBentoFeatures />

      {/* 4. Ready to Get Started Callout */}
      <WordPressDemoBanner />

      {/* 5. World's Fastest Speed Juxtapose */}
      <WordPressSpeedJuxtapose />

      {/* 6. Enterprise Level Protection Juxtapose */}
      <WordPressSecurityJuxtapose />

      {/* 7. Simple WordPress Control Panel */}
      <WordPressControlPanel />

      {/* 8. Pricing Plans (Monthly / Yearly Switcher) */}
      <WordPressPricing />

      {/* 9. Unlimited Free Migration */}
      <WordPressMigration />

      {/* 10. WordPress Support You Can Count On */}
      <WordPressSupport />

      {/* 11. Cloudflare and Hosting in Our DNA */}
      <WordPressCloudflareDna />

      {/* 12. Why hosting.com & Rocket.net */}
      <WordPressWhyUs />

      {/* 13. Consultation / Lead Demo Form */}
      <WordPressBookDemo />

      {/* 14. Customer Testimonials & Reviews */}
      <WordPressReviews />

      {/* 15. FAQs & Final Conversion CTA */}
      <WordPressFaqCta />
    </div>
  );
}
