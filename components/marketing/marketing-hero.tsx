'use client';

import Link from 'next/link';
import { Check, ArrowRight, MessageSquare, TrendingUp, Sparkles, MapPin, Search, BarChart3, Star, ShieldCheck } from 'lucide-react';

const heroChecklist = [
  'SEO to help you rank higher on Google, with AI-guided tasks',
  'Google Ads in a few clicks, on a controlled budget',
  'Local listings on autopilot, across up to 33 directories',
  'AI Visibility — see how ChatGPT and Gemini describe your business',
];

export function MarketingHero() {
  const scrollToPlans = () => {
    const el = document.getElementById('plans');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#06180E] via-[#0A2616] to-[#0D3821] text-white pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-[#46FDAE]/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-[#00E599]/10 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Checklist */}
          <div className="lg:col-span-6 text-left">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE] mb-6 shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>SEO, listings, reviews &amp; social media</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white antialiased mb-5 leading-[1.15]">
              The complete digital marketing toolkit for small businesses
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#C2D6CF] mb-8 leading-relaxed font-normal max-w-xl">
              SEO, Google Ads, local listings, reviews, and AI visibility — one AI-driven app that works right alongside your hosting plan. Tell it about your business once, and it builds a marketing plan tailored to you. No prior experience needed.
            </p>

            {/* Checklist */}
            <div className="space-y-3 mb-10">
              {heroChecklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#E2ECE8] font-medium">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#46FDAE]/20 text-[#46FDAE] border border-[#46FDAE]/40">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <button
                onClick={scrollToPlans}
                className="px-8 py-3.5 rounded-xl font-bold text-sm bg-[#46FDAE] text-[#0A1616] hover:bg-[#34e89b] transition-all flex items-center gap-2 shadow-lg shadow-[#46FDAE]/20 active:scale-[0.98]"
              >
                <span>See plans</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href="/about/contact"
                className="px-7 py-3.5 rounded-xl font-semibold text-sm bg-[#142A24] border border-[#214337] text-white hover:bg-[#1E3B33] transition-all flex items-center gap-2"
              >
                <MessageSquare className="h-4 w-4 text-[#46FDAE]" />
                <span>Talk to our team</span>
              </Link>
            </div>

            {/* Guarantee Note */}
            <p className="text-xs text-[#8E9F9A] mt-4 flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#46FDAE]" />
              <span>30-day money-back guarantee on your subscription (excludes advertising spend)</span>
            </p>
          </div>

          {/* Right Column: Interactive Marketing Suite Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto rounded-3xl bg-[#0F1E1A] border border-[#214337] p-4 sm:p-6 shadow-2xl backdrop-blur-md">
              {/* Window Bar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#214337] text-xs text-[#8E9F9A]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                  </div>
                  <span className="font-mono text-[11px] text-[#A6B8B3] ml-2">app.hosting.com/marketing-suite</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#46FDAE]/20 text-[#46FDAE] px-2 py-0.5 rounded-full text-[10px] font-semibold border border-[#46FDAE]/30">
                    Live Insights Active
                  </span>
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-12 gap-3 text-xs">
                {/* SEO Health Card */}
                <div className="col-span-6 bg-[#142A24] border border-[#214337] rounded-2xl p-3.5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#8E9F9A] text-[11px] font-medium">SEO Health Score</span>
                      <Search className="h-3.5 w-3.5 text-[#46FDAE]" />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl font-extrabold text-white">92</span>
                      <span className="text-[11px] font-semibold text-[#46FDAE]">+14 pts this month</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#214337] text-[10px] text-[#A6B8B3]">
                    3 high-priority keyword tasks ready
                  </div>
                </div>

                {/* AI Visibility Rating */}
                <div className="col-span-6 bg-[#142A24] border border-[#214337] rounded-2xl p-3.5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#8E9F9A] text-[11px] font-medium">AI Visibility (ChatGPT/Gemini)</span>
                      <Sparkles className="h-3.5 w-3.5 text-[#46FDAE]" />
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl font-extrabold text-white">78</span>
                      <span className="text-[11px] font-semibold text-[#46FDAE]">Accurate</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#214337] text-[10px] text-[#A6B8B3]">
                    Brand description verified across AI engines
                  </div>
                </div>

                {/* Google Ads Budget Bar */}
                <div className="col-span-12 bg-[#18332C] border border-[#46FDAE]/40 rounded-2xl p-3.5 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-[#46FDAE]" />
                      <span className="font-bold text-white text-xs sm:text-sm">Google Ads Smart Campaign</span>
                    </div>
                    <span className="bg-[#214337] text-[#46FDAE] text-[10px] px-2 py-0.5 rounded-md font-semibold border border-[#46FDAE]/20">
                      Active
                    </span>
                  </div>
                  <p className="text-[11px] text-[#A6B8B3] mb-2.5">
                    Micro-budget targeted for Dhaka &amp; regional searches. Weekly cap: ৳1,250.
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-[#C2D6CF] bg-[#122721] p-2 rounded-xl border border-[#214337]">
                    <span>Impressions: <strong className="text-white">4,820</strong></span>
                    <span>Clicks: <strong className="text-white">312</strong></span>
                    <span>Avg CPC: <strong className="text-[#46FDAE]">৳4.10</strong></span>
                  </div>
                </div>

                {/* Directory Sync Status */}
                <div className="col-span-12 bg-[#142A24] border border-[#214337] rounded-2xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-[#46FDAE]/15 text-[#46FDAE]">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-[11px]">33 Top Directories Synced</div>
                      <div className="text-[10px] text-[#8E9F9A]">Google Maps, Facebook, Apple Maps &amp; Yelp updated</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#46FDAE] font-semibold bg-[#214337] px-2.5 py-1 rounded-lg">
                    100% Synced
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
