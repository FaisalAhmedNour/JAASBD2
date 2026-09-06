'use client';

import { useState } from 'react';
import { Search, TrendingUp, Sparkles, MapPin, MessageSquare, Share2, Check, ArrowRight } from 'lucide-react';

type FeatureTab = 'get-found' | 'reputation' | 'autopilot';

export function MarketingFeaturesTabs() {
  const [activeTab, setActiveTab] = useState<FeatureTab>('get-found');

  return (
    <section className="py-20 lg:py-28 bg-[#F2F2ED] border-b border-[#E4E4DC]">
      <div className="container mx-auto px-siteContainer">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A1616] mb-4">
            Features of the hosting.com Marketing Suite
          </h2>
          <p className="text-base sm:text-lg text-[#455A58] leading-relaxed">
            It guides you step by step through everything that grows your visibility online — from SEO and Google Ads to local listings, reviews, and AI visibility.
          </p>

          {/* 3 Tabs Filter */}
          <div className="inline-flex items-center gap-2 bg-white border border-[#E4E4DC] p-1.5 rounded-2xl shadow-sm mt-8">
            <button
              onClick={() => setActiveTab('get-found')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'get-found'
                  ? 'bg-[#082615] text-white shadow-sm'
                  : 'text-[#455A58] hover:text-[#0A1616]'
              }`}
            >
              Get found
            </button>
            <button
              onClick={() => setActiveTab('reputation')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'reputation'
                  ? 'bg-[#082615] text-white shadow-sm'
                  : 'text-[#455A58] hover:text-[#0A1616]'
              }`}
            >
              Build reputation
            </button>
            <button
              onClick={() => setActiveTab('autopilot')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'autopilot'
                  ? 'bg-[#082615] text-white shadow-sm'
                  : 'text-[#455A58] hover:text-[#0A1616]'
              }`}
            >
              Put it on autopilot
            </button>
          </div>
        </div>

        {/* Tab 1: Get Found (SEO & Google Ads) */}
        {activeTab === 'get-found' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Card 1: SEO */}
            <div className="lg:col-span-6 bg-white border border-[#E4E4DC] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#082615]/40 transition-all">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082615] text-[#46FDAE] mb-6 shadow-sm">
                  <Search className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0A1616] mb-3">
                  Search Engine Optimization (SEO)
                </h3>
                <p className="text-sm text-[#455A58] leading-relaxed mb-6">
                  Work your way up Google&apos;s rankings without the guesswork. The Suite analyzes your website and builds a prioritized, step-by-step to-do list — an AI avatar guides each task, with tailored suggestions for titles, headings, and text around the keywords that matter. Tracking shows every improvement over time, and no experience is required.
                </p>
              </div>

              {/* Mockup Box */}
              <div className="bg-[#F9F9F6] border border-[#E4E4DC] rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#0A1616]">SEO Health Score</span>
                  <span className="bg-[#E8F8F0] text-[#082615] font-bold text-xs px-2.5 py-0.5 rounded-full border border-[#46FDAE]/40">
                    92 / 100
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E4E4DC]">
                    <span className="text-[#0A1616] font-medium">Add Meta Description on Homepage</span>
                    <span className="text-[#00A868] font-bold">✓ Fixed</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-white border border-[#E4E4DC]">
                    <span className="text-[#0A1616] font-medium">Target Keyword: &quot;Web Hosting Dhaka&quot;</span>
                    <span className="text-[#46FDAE] bg-[#082615] px-2 py-0.5 rounded text-[10px] font-bold">Rank #2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Google Ads */}
            <div className="lg:col-span-6 bg-white border border-[#E4E4DC] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#082615]/40 transition-all">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082615] text-[#46FDAE] mb-6 shadow-sm">
                  <TrendingUp className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0A1616] mb-3">
                  Google Ads in a few clicks
                </h3>
                <p className="text-sm text-[#455A58] leading-relaxed mb-6">
                  Launch a professional campaign in minutes rather than weeks. Choose from ready-made ads generated for your business, set a predefined monthly budget with weekly spend limits, and go live in a few clicks. Preview every ad before it runs and track exactly how each campaign performs.
                </p>
              </div>

              {/* Mockup Box */}
              <div className="bg-[#F9F9F6] border border-[#E4E4DC] rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-bold text-[#0A1616]">Ad Preview (Google Sponsored)</span>
                  <span className="text-[#6B7D7B]">Budget: ৳1,500/wk</span>
                </div>
                <div className="p-3 bg-white rounded-xl border border-[#E4E4DC] text-xs space-y-1">
                  <div className="text-[#1A0DAB] font-bold hover:underline">JAASBD | #1 High-Speed Web Hosting in BD</div>
                  <div className="text-[#006621] text-[11px]">https://jaasbd.com/hosting</div>
                  <div className="text-[#545454] text-[11px]">
                    20x Turbo NVMe SSD servers in Bangladesh. Free .COM domain &amp; SSL included. 24/7 support.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Reputation (Local Listings & Review Replies) */}
        {activeTab === 'reputation' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Card 1: Local Listings */}
            <div className="lg:col-span-6 bg-white border border-[#E4E4DC] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#082615]/40 transition-all">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082615] text-[#46FDAE] mb-6 shadow-sm">
                  <MapPin className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0A1616] mb-3">
                  Local listings on autopilot
                </h3>
                <p className="text-sm text-[#455A58] leading-relaxed mb-6">
                  Update your business info once and sync it everywhere. Sync address, business hours, phone number, and services across 33+ directories including Google Business Profile, Facebook, Apple Maps, Yelp, and Bing.
                </p>
              </div>

              <div className="bg-[#F9F9F6] border border-[#E4E4DC] rounded-2xl p-4">
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-white p-2.5 rounded-xl border border-[#E4E4DC]">
                    <span className="block font-bold text-base text-[#0A1616]">33</span>
                    <span className="text-[10px] text-[#6B7D7B]">Directories</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#E4E4DC]">
                    <span className="block font-bold text-base text-[#00A868]">100%</span>
                    <span className="text-[10px] text-[#6B7D7B]">Sync Rate</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#E4E4DC]">
                    <span className="block font-bold text-base text-[#082615]">0</span>
                    <span className="text-[10px] text-[#6B7D7B]">Conflicts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: AI Reviews */}
            <div className="lg:col-span-6 bg-white border border-[#E4E4DC] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#082615]/40 transition-all">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082615] text-[#46FDAE] mb-6 shadow-sm">
                  <MessageSquare className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0A1616] mb-3">
                  AI-powered review responses
                </h3>
                <p className="text-sm text-[#455A58] leading-relaxed mb-6">
                  Never leave a customer review unanswered. Monitor ratings from Google and social media in a single consolidated feed. Generate thoughtful, polite, customized responses in seconds with AI.
                </p>
              </div>

              <div className="bg-[#F9F9F6] border border-[#E4E4DC] rounded-2xl p-4 text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[#0A1616]">Google Review (5 Stars)</span>
                  <span className="text-[#00A868] font-semibold">AI Generated</span>
                </div>
                <p className="text-[#6B7D7B] mb-2 italic">&ldquo;Fast hosting and wonderful customer service.&rdquo;</p>
                <div className="bg-white p-2.5 rounded-xl border border-[#E4E4DC] text-[#0A1616] font-medium">
                  &ldquo;Thank you for the review! We are delighted that our 20x turbo servers and Dhaka team delivered a great experience for you.&rdquo;
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Autopilot (Social AI & AI Visibility Pro) */}
        {activeTab === 'autopilot' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Card 1: AI Visibility */}
            <div className="lg:col-span-6 bg-white border border-[#E4E4DC] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#082615]/40 transition-all">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082615] text-[#46FDAE] mb-6 shadow-sm">
                  <Sparkles className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0A1616] mb-3">
                  AI Visibility &amp; ChatGPT Auditing
                </h3>
                <p className="text-sm text-[#455A58] leading-relaxed mb-6">
                  Get found by AI, not only Google. See how tools like ChatGPT and Gemini describe your business, and put right anything they get wrong. You get a single visibility score, tracked over time, with clear recommendations.
                </p>
              </div>

              <div className="bg-[#F9F9F6] border border-[#E4E4DC] rounded-2xl p-4 text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[#0A1616]">AI Knowledge Accuracy</span>
                  <span className="text-[#082615] font-bold bg-[#46FDAE] px-2 py-0.5 rounded">78 / 100</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-[#E4E4DC] text-[#455A58]">
                  ChatGPT identifies your brand as a leading web hosting &amp; server provider in Bangladesh with local 24/7 support.
                </div>
              </div>
            </div>

            {/* Card 2: Social AI Manager */}
            <div className="lg:col-span-6 bg-white border border-[#E4E4DC] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-[#082615]/40 transition-all">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082615] text-[#46FDAE] mb-6 shadow-sm">
                  <Share2 className="h-6 w-6 stroke-[2]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0A1616] mb-3">
                  Social AI Manager
                </h3>
                <p className="text-sm text-[#455A58] leading-relaxed mb-6">
                  Save hours on social media marketing. Generate engaging Facebook and Instagram posts, captions, and hashtag suggestions tailored to your industry, and schedule them to publish automatically.
                </p>
              </div>

              <div className="bg-[#F9F9F6] border border-[#E4E4DC] rounded-2xl p-4 text-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-[#0A1616]">Scheduled Instagram Post</span>
                  <span className="text-[#00A868] font-bold">Auto-Publish</span>
                </div>
                <div className="p-2.5 bg-white rounded-xl border border-[#E4E4DC] text-[#455A58]">
                  &ldquo;🚀 Supercharge your website speeds with NVMe technology! Check out our new packages at jaasbd.com #WebHosting #DhakaBusiness #TechBD&rdquo;
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
