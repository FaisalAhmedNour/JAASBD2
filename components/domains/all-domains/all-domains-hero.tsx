'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { Search, Shield, Lock, Globe2, Headphones, Star, ChevronDown, CheckCircle2 } from 'lucide-react';

const featuredPromos = [
  {
    tld: '.com',
    badge: 'Free / 1st year',
    subBadge: '2-year purchase required',
    regularPrice: '৳1,199.00',
    renewPrice: '৳1,650.00/yr',
    desc: 'The gold standard for any commercial or global project',
  },
  {
    tld: '.net',
    badge: 'Free / 1st year',
    subBadge: '2-year purchase required',
    regularPrice: '৳1,899.00',
    renewPrice: '৳1,950.00/yr',
    desc: 'The trusted namespace for networks and tech innovators',
  },
  {
    tld: '.org',
    badge: 'Free / 1st year',
    subBadge: '2-year purchase required',
    regularPrice: '৳1,899.00',
    renewPrice: '৳1,950.00/yr',
    desc: 'The hallmark of non-profits, open source & communities',
  },
];

export function AllDomainsHero() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    const cleanQuery = searchTerm.trim();
    window.location.href = `https://checkout.hosting.com/domain-search?domain=${encodeURIComponent(cleanQuery)}`;
  };

  const scrollToTable = () => {
    const el = document.getElementById('pricing-table');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F2F2ED] pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Watermark Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none opacity-40">
        <Image
          src="/assets/watermarks/hero-2.webp"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          {/* Top Green Category Pill */}
          <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE] mb-5 shadow-sm">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M7.5 9.26475L8.87258 10.0847C9.00331 10.1679 9.13106 10.165 9.25584 10.0758C9.38062 9.98669 9.42518 9.86488 9.38953 9.71039L9.03301 8.15955L10.2452 7.10783C10.364 7.00088 10.3997 6.87313 10.3521 6.72458C10.3046 6.57603 10.1976 6.49582 10.0313 6.48393L8.44476 6.35915L7.82086 4.87961C7.76144 4.73701 7.65449 4.66571 7.5 4.66571C7.34551 4.66571 7.23856 4.73701 7.17914 4.87961L6.55523 6.35915L4.96874 6.48393C4.80237 6.49582 4.69541 6.57603 4.64788 6.72458C4.60034 6.87313 4.636 7.00088 4.75483 7.10783L5.96699 8.15955L5.61047 9.71039C5.57482 9.86488 5.61938 9.98669 5.74416 10.0758C5.86894 10.165 5.99669 10.1679 6.12742 10.0847L7.5 9.26475Z"
                fill="#0A1616"
              />
            </svg>
            <span>Domain name pricelist</span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1616] tracking-tight antialiased mb-4 leading-tight">
            Full domains list &amp; pricing
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#455A58] mb-8 leading-relaxed max-w-2xl font-normal">
            Search hundreds of domain extensions with clear, upfront pricing for registration, renewal and transfers. No hidden costs or surprises, just the right domain to get started and keep growing.
          </p>

          {/* Main Hero Search Bar */}
          <form onSubmit={handleSearch} className="mb-10 max-w-2xl">
            <div className="flex flex-col sm:flex-row items-stretch gap-2 bg-white p-2 rounded-2xl border border-[#E4E4DC] shadow-lg focus-within:border-[#082615] transition-all">
              <div className="flex-1 flex items-center px-3">
                <Search className="h-5 w-5 text-[#455A58] mr-3 shrink-0" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Type a domain name or extension (e.g. mybrand.com)"
                  className="w-full text-base sm:text-lg text-[#0A1616] focus:outline-none bg-transparent placeholder-[#455A58]/60 font-body"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-xl font-semibold text-sm bg-[#082615] text-white hover:bg-[#0d3b21] transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]"
              >
                <span>Search</span>
              </button>
            </div>
          </form>

          {/* Featured Top Promo Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-3xl">
            {featuredPromos.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display text-2xl font-bold text-[#0A1616]">{card.tld}</span>
                    <span className="inline-block bg-[#E8F8F0] text-[#082615] text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#46FDAE]/40">
                      {card.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B7D7B] mb-3">{card.subBadge}</p>
                </div>
                <div className="pt-2 border-t border-[#F0F0EA]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-[#6B7D7B]">Renews at</span>
                    <span className="text-xs font-semibold text-[#0A1616]">{card.renewPrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Value Propositions & Ratings */}
          <div className="pt-6 border-t border-[#E4E4DC] max-w-3xl flex flex-wrap items-center justify-between gap-y-4 gap-x-6 text-xs text-[#455A58]">
            <div className="flex items-center gap-1.5 font-medium">
              <Globe2 className="h-4 w-4 text-[#082615]" />
              <span>Free DNS management</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Lock className="h-4 w-4 text-[#082615]" />
              <span>Domain theft protection</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Shield className="h-4 w-4 text-[#082615]" />
              <span>Optional WHOIS &amp; ID privacy</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Headphones className="h-4 w-4 text-[#082615]" />
              <span>24/7 in-house support</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#E4E4DC] font-semibold text-[#0A1616]">
              <div className="flex text-[#00B67A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span>4.7 on Trustpilot</span>
            </div>
          </div>

          {/* Jump to Price List Anchor */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <button
              onClick={scrollToTable}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#082615] hover:text-[#0d3b21] bg-white/80 hover:bg-white px-4 py-2 rounded-full border border-[#E4E4DC] transition-all shadow-sm group"
            >
              <span>See the price list</span>
              <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
