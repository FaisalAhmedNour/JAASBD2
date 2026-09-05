import type { Metadata } from 'next';
import { VPSHero } from '@/components/vps/vps-hero';
import { VPSManagementLevel } from '@/components/vps/vps-management-level';
import { VPSManagedPricing } from '@/components/vps/vps-managed-pricing';
import { VPSUnmanagedPricing } from '@/components/vps/vps-unmanaged-pricing';
import { VPSUseCases } from '@/components/vps/vps-use-cases';
import { VPSSwitchTiming } from '@/components/vps/vps-switch-timing';
import { VPSTurboFeatures } from '@/components/vps/vps-turbo-features';
import { VPSManagedVsUnmanaged } from '@/components/vps/vps-managed-vs-unmanaged';
import { VPSSalesSupport } from '@/components/vps/vps-sales-support';
import { VPSAnycastDns } from '@/components/vps/vps-anycast-dns';
import { VPSIndustryAwards } from '@/components/vps/vps-industry-awards';
import { VPSReviews } from '@/components/vps/vps-reviews';
import { VPSNewsBlog } from '@/components/vps/vps-news-blog';
import { VPSFaqCta } from '@/components/vps/vps-faq-cta';

export const metadata: Metadata = {
  title: 'VPS Hosting - Ultra-Reliable & Up to 20x Faster | hosting.com',
  description:
    'Powerful virtual private server hosting with dedicated CPU & RAM, pure NVMe storage, and 24/7/365 in-house support. Choose between Managed and Unmanaged VPS.',
  openGraph: {
    title: 'VPS Hosting - Ultra-Reliable & Up to 20x Faster | hosting.com',
    description:
      'High performance VPS hosting in Bangladesh. Dedicated resources, cPanel, CloudLinux, root access, and 99.9% uptime SLA.',
    type: 'website',
  },
};

export default function VPSHostingPage() {
  return (
    <div className="w-full">
      {/* 1. Hero Billboard */}
      <VPSHero />

      {/* 2. Management Level Selector */}
      <VPSManagementLevel />

      {/* 3. Managed VPS Pricing & CloudLinux Banner */}
      <VPSManagedPricing />

      {/* 4. Unmanaged VPS Pricing & Root Banner */}
      <VPSUnmanagedPricing />

      {/* 5. What is VPS Hosting Used For? */}
      <VPSUseCases />

      {/* 6. When to Switch to VPS */}
      <VPSSwitchTiming />

      {/* 7. Turbo Features Grid */}
      <VPSTurboFeatures />

      {/* 8. Managed vs Unmanaged Detailed Comparison */}
      <VPSManagedVsUnmanaged />

      {/* 9. Sales & Support Consultation Banner */}
      <VPSSalesSupport />

      {/* 10. Anycast DNS Speed Optimization */}
      <VPSAnycastDns />

      {/* 11. Industry Best Solutions & Awards */}
      <VPSIndustryAwards />

      {/* 12. Customer Reviews & 5-Star Testimonials */}
      <VPSReviews />

      {/* 13. Recent VPS News & Bangladesh Blog Posts */}
      <VPSNewsBlog />

      {/* 14. FAQs & Final Conversion CTA */}
      <VPSFaqCta />
    </div>
  );
}
