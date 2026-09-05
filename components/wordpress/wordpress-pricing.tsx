'use client';

import { useState } from 'react';
import Link from 'next/link';

interface WPPlan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  installs: string;
  visitors: string;
  storage: string;
  bandwidth: string;
  features: string[];
  ctaText: string;
}

const wpPlans: WPPlan[] = [
  {
    id: 'starter',
    name: 'Starter Plan',
    description: 'Ideal for launching a reliable and high-performing WordPress site with enterprise speed.',
    monthlyPrice: '৳3,600',
    yearlyPrice: '৳3,000',
    installs: '1 WordPress install',
    visitors: '25,000 visitors / mo',
    storage: '10GB NVMe storage',
    bandwidth: '50GB Enterprise CDN bandwidth',
    features: [
      'Unlimited PHP workers',
      '99.99% uptime guarantee',
      'Free SSL certificate & Cloudflare CDN',
      'Dual Web Application Firewall (WAF)',
      'Automated daily backups (14-day retention)',
      '1-Click staging environment',
      'Free WP Rocket plugin included',
    ],
    ctaText: 'Launch Starter',
  },
  {
    id: 'medium',
    name: 'Medium Plan',
    badge: 'Most Popular',
    description: 'Best for growing businesses needing higher traffic capacity and multiple WordPress sites.',
    monthlyPrice: '৳7,200',
    yearlyPrice: '৳6,000',
    installs: '5 WordPress installs',
    visitors: '120,000 visitors / mo',
    storage: '50GB NVMe storage',
    bandwidth: '300GB Enterprise CDN bandwidth',
    features: [
      'Unlimited PHP workers',
      '99.99% uptime guarantee',
      'Free SSL certificate & Cloudflare CDN',
      'Dual Web Application Firewall (WAF)',
      'Automated daily backups (14-day retention)',
      '1-Click staging environment',
      'Free WP Rocket plugin included',
    ],
    ctaText: 'Choose Medium',
  },
  {
    id: 'advanced',
    name: 'Advanced Plan',
    description: 'Perfect for established online stores, blogs, and multiple high-traffic sites.',
    monthlyPrice: '৳12,000',
    yearlyPrice: '৳10,000',
    installs: '15 WordPress installs',
    visitors: '250,000 visitors / mo',
    storage: '100GB NVMe storage',
    bandwidth: '600GB Enterprise CDN bandwidth',
    features: [
      'Unlimited PHP workers',
      '99.99% uptime guarantee',
      'Free SSL certificate & Cloudflare CDN',
      'Dual Web Application Firewall (WAF)',
      'Automated daily backups (14-day retention)',
      '1-Click staging environment',
      'Free WP Rocket plugin included',
    ],
    ctaText: 'Choose Advanced',
  },
  {
    id: 'turbo',
    name: 'Turbo Plan',
    badge: 'Agency Choice',
    description: 'Designed for agencies and power users managing dozens of WordPress installations.',
    monthlyPrice: '৳24,000',
    yearlyPrice: '৳20,000',
    installs: '50 WordPress installs',
    visitors: '500,000 visitors / mo',
    storage: '200GB NVMe storage',
    bandwidth: '1.2TB Enterprise CDN bandwidth',
    features: [
      'Unlimited PHP workers',
      '99.99% uptime guarantee',
      'Free SSL certificate & Cloudflare CDN',
      'Dual Web Application Firewall (WAF)',
      'Automated daily backups (14-day retention)',
      '1-Click staging environment',
      'Free WP Rocket + Object Cache Pro & Relay',
    ],
    ctaText: 'Choose Turbo',
  },
];

export function WordPressPricing() {
  const [isYearly, setIsYearly] = useState<boolean>(true);

  return (
    <section id="plans" className="bg-background relative py-12 lg:py-24 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE]">
              <span>Managed WordPress Pricing</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
            Discover the best hosting for WordPress plans
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed mb-8">
            Backed by our 30-day money-back guarantee. No tricks. No upsells. Just WordPress hosting that works.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="inline-flex items-center p-1.5 rounded-full bg-[#E4E4DC] gap-1">
            <button
              type="button"
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                isYearly ? 'bg-[#082615] text-white shadow-sm' : 'text-[#0A1616] hover:bg-[#D9D9D0]'
              }`}
            >
              Yearly <span className="text-[#46FDAE] text-xs ml-1">(2 months free!)</span>
            </button>
            <button
              type="button"
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                !isYearly ? 'bg-[#082615] text-white shadow-sm' : 'text-[#0A1616] hover:bg-[#D9D9D0]'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {wpPlans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl bg-white p-7 flex flex-col justify-between border transition-all duration-300 ${
                  plan.badge === 'Most Popular'
                    ? 'border-[#082615] shadow-xl ring-2 ring-[#082615]/10 lg:-translate-y-2'
                    : 'border-[#E4E4DC] shadow-sm hover:shadow-md'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#46FDAE] text-[#0A1616] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold font-display text-[#0A1616]">{plan.name}</h3>
                  <p className="text-xs text-[#455A58] mt-1 mb-5 leading-relaxed">{plan.description}</p>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-[#0A1616] font-display">{price}</span>
                    <span className="text-xs text-[#455A58]">/mo</span>
                  </div>

                  {/* Core Capacity */}
                  <div className="bg-[#F7F7F4] rounded-2xl p-4 mb-6 space-y-2 text-xs font-medium text-[#0A1616]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#114B27]"></span>
                      <span>{plan.installs}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#114B27]"></span>
                      <span>{plan.visitors}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#114B27]"></span>
                      <span>{plan.storage}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#114B27]"></span>
                      <span>{plan.bandwidth}</span>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="border-t border-[#E4E4DC] pt-5 mb-8">
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[#455A58]">
                          <svg className="w-4 h-4 text-[#114B27] shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Link
                    href={`https://checkout.hosting.com/?wpplan=${plan.id}&billing=${isYearly ? 'yearly' : 'monthly'}`}
                    className={`w-full py-3 px-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-colors ${
                      plan.badge === 'Most Popular'
                        ? 'bg-[#082615] text-white hover:bg-[#0d3b21]'
                        : 'bg-[#E4E4DC] text-[#0A1616] hover:bg-[#D9D9D0]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
                      <path d="M12.3524 7.10073C12.696 6.75716 12.696 6.20012 12.3524 5.85654L6.75358 0.257686C6.41 -0.0858879 5.85296 -0.0858879 5.50939 0.257686C5.16581 0.601259 5.16581 1.1583 5.50939 1.50188L10.4861 6.47864L5.50939 11.4554C5.16581 11.799 5.16581 12.356 5.50939 12.6996C5.85296 13.0432 6.41 13.0432 6.75358 12.6996L12.3524 7.10073ZM0 6.47864L0 7.35841L11.7303 7.35841V6.47864V5.59886L0 5.59886L0 6.47864Z" fill="currentColor"/>
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
