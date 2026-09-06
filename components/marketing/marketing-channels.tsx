'use client';

import { Globe, MapPin, Search, Bot, Sparkles, Share2 } from 'lucide-react';

const channels = [
  { name: 'Google Search', icon: Search, color: '#4285F4' },
  { name: 'Google Maps', icon: MapPin, color: '#34A853' },
  { name: 'Instagram', icon: Share2, color: '#E4405F' },
  { name: 'Facebook', icon: Share2, color: '#1877F2' },
  { name: 'ChatGPT', icon: Bot, color: '#10A37F' },
  { name: 'Gemini', icon: Sparkles, color: '#8E75FF' },
  { name: 'Apple Maps', icon: MapPin, color: '#000000' },
  { name: 'Bing & Copilot', icon: Globe, color: '#00809D' },
];

export function MarketingChannels() {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-[#E4E4DC]">
      <div className="container mx-auto px-siteContainer">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE] mb-4 shadow-sm">
            <span>Coverage</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1616] mb-4">
            Works where customers look
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed max-w-2xl mx-auto">
            Google Search and Maps, Facebook, Instagram, Yelp — even ChatGPT and Gemini. One dashboard keeps your business visible and accurate on all of them.
          </p>
        </div>

        {/* Channel Badges Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
          {channels.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <div
                key={idx}
                className="bg-[#F9F9F6] border border-[#E4E4DC] rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-sm hover:border-[#082615]/40 hover:shadow-md transition-all group"
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center bg-white border border-[#E4E4DC] group-hover:scale-105 transition-transform"
                >
                  <Icon className="h-4 w-4" style={{ color: ch.color }} />
                </div>
                <span className="font-display font-bold text-xs sm:text-sm text-[#0A1616]">{ch.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
