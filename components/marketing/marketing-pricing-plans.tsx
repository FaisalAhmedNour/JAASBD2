'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

interface MarketingPlan {
  id: string;
  name: string;
  description: string;
  isPopular?: boolean;
  priceBDT: number;
  priceUSD: number;
  features: string[];
  whmcsLink: string;
}

const marketingPlans: MarketingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Get found online.',
    priceBDT: 1500,
    priceUSD: 12.99,
    features: [
      '1 website covered',
      'AI-guided SEO tasks & progress reporting',
      'Google Ads with micro-budgets',
      'AI Visibility (ChatGPT & Gemini)',
      'Brand Monitoring (RADAR)',
      'WordPress plugin & mobile app',
    ],
    whmcsLink: 'https://portal.jaasbd.com/cart.php?a=add&pid=marketing-starter',
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Build reputation & reach.',
    isPopular: true,
    priceBDT: 3500,
    priceUSD: 29.99,
    features: [
      'Everything in Starter, plus:',
      'Local listings — up to 33 directories',
      'AI-powered review responses',
      'Competitor comparison & monitoring',
      'Priority directory sync',
    ],
    whmcsLink: 'https://portal.jaasbd.com/cart.php?a=add&pid=marketing-pro',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Full marketing automation.',
    priceBDT: 7400,
    priceUSD: 62.99,
    features: [
      'Everything in Pro, plus:',
      'Social AI Manager (FB & Instagram)',
      'AI Visibility Pro (advanced tracking)',
      'Dedicated marketing strategist review',
      'VIP priority execution',
    ],
    whmcsLink: 'https://portal.jaasbd.com/cart.php?a=add&pid=marketing-premium',
  },
];

export function MarketingPricingPlans() {
  const [currency, setCurrency] = useState<'BDT' | 'USD'>('BDT');

  return (
    <section id="plans" className="py-20 lg:py-28 bg-white border-b border-[#E4E4DC]">
      <div className="container mx-auto px-siteContainer">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A1616] mb-4">
            Pick the plan that fits your business
          </h2>
          <p className="text-base sm:text-lg text-[#455A58] leading-relaxed mb-8">
            Every plan covers 1 website, is billed monthly, and can be canceled anytime. Each plan includes everything in the plan below it.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center gap-1 bg-[#F9F9F6] border border-[#E4E4DC] p-1.5 rounded-2xl shadow-sm">
            <button
              onClick={() => setCurrency('BDT')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                currency === 'BDT'
                  ? 'bg-[#082615] text-white shadow-sm'
                  : 'text-[#455A58] hover:text-[#0A1616]'
              }`}
            >
              BDT (৳)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-[#082615] text-white shadow-sm'
                  : 'text-[#455A58] hover:text-[#0A1616]'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {marketingPlans.map((plan) => {
            const formattedPrice =
              currency === 'BDT'
                ? `BDT ${plan.priceBDT.toLocaleString('en-US')}.00`
                : `$${plan.priceUSD.toFixed(2)}`;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all bg-[#F9F9F6] border shadow-sm ${
                  plan.isPopular
                    ? 'border-[#46FDAE] ring-2 ring-[#46FDAE]/40 bg-white shadow-xl'
                    : 'border-[#E4E4DC] hover:border-[#0A1616]/30'
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-[#082615] text-[#46FDAE] border border-[#46FDAE]/40 text-xs font-bold px-3.5 py-1 rounded-full shadow-md">
                      <Sparkles className="h-3 w-3" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Desc */}
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold text-[#0A1616] mb-2">{plan.name}</h3>
                    <p className="text-xs sm:text-sm text-[#455A58] leading-relaxed min-h-[38px]">{plan.description}</p>
                  </div>

                  {/* Pricing Box */}
                  <div className="mb-6 pb-6 border-b border-[#E4E4DC]">
                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A1616]">
                        {formattedPrice}
                      </span>
                      <span className="text-xs text-[#6B7D7B] font-medium">/month</span>
                    </div>
                    <span className="text-xs text-[#8E9F9A] block font-normal">
                      For a 1-month term. Renews monthly, cancel anytime.
                    </span>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={plan.whmcsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-sm text-center block mb-8 transition-all shadow-sm active:scale-[0.98] ${
                      plan.isPopular
                        ? 'bg-[#082615] text-white hover:bg-[#0d3b21]'
                        : 'bg-[#082615] text-white hover:bg-[#0d3b21]'
                    }`}
                  >
                    Choose {plan.name}
                  </Link>

                  {/* Feature Checklist */}
                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0A1616] mb-3">Included features:</p>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E8F8F0] text-[#082615] border border-[#46FDAE]/40">
                          <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                        </div>
                        <span className="text-[#455A58] font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Guarantee Note */}
        <div className="max-w-2xl mx-auto text-center text-xs text-[#6B7D7B] leading-relaxed">
          <p>
            All plans include Brand Monitoring (RADAR). 30-day money-back guarantee (excluding advertising spend).
          </p>
        </div>
      </div>
    </section>
  );
}
