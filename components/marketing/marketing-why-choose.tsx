'use client';

import { Layers, Store, Cpu, Bot, DollarSign, Award } from 'lucide-react';

const whyChooseCards = [
  {
    title: 'Everything in one place',
    description:
      'SEO, Google Ads, local listings, reviews, and brand monitoring in a single app — living right alongside your website and hosting, with one provider and one login.',
    icon: Layers,
  },
  {
    title: 'Built for small businesses',
    description:
      'Not marketing departments. Whether you run a café, a trade, an online store, or a clinic — every feature is designed to be done by you, in the time you actually have, with AI handling the hard part.',
    icon: Store,
  },
  {
    title: 'AI that actually does the work',
    description:
      'From onboarding and keyword discovery to review replies and social posts, the Suite takes on hours of manual effort and gets it done in a few clicks.',
    icon: Cpu,
  },
  {
    title: 'Ready for the age of AI search',
    description:
      'Included from Starter, AI Visibility shows you how tools like ChatGPT and Gemini describe your business, so customers can still find you as search itself changes.',
    icon: Bot,
  },
  {
    title: 'A fraction of the cost of an agency',
    description:
      'Agencies charge hundreds or thousands a month, plus a fee for every small change. Here there are no surprise invoices — and it&apos;s risk-free, with a 30-day money-back guarantee.',
    icon: DollarSign,
  },
  {
    title: 'Award-winning technology',
    description:
      'Powered by Hosting.com / JAASBD, a market leader in digital marketing for small businesses, rated Excellent (4.8/5) by its customers worldwide.',
    icon: Award,
  },
];

export function MarketingWhyChoose() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A1616] text-white">
      <div className="container mx-auto px-siteContainer">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Why choose the hosting.com Marketing Suite
          </h2>
          <p className="text-base sm:text-lg text-[#9CAEA9] leading-relaxed">
            Built for businesses like yours — local restaurants, tradespeople, online stores, clinics, and growing brands.
          </p>
        </div>

        {/* 6-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-[#122420] border border-[#203D36] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#46FDAE]/40 transition-all group shadow-sm"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#46FDAE] text-[#0A1616] mb-6 shadow-md group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-sm text-[#A6B8B3] leading-relaxed">{card.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
