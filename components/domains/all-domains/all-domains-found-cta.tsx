'use client';

import { useState, FormEvent } from 'react';
import { Search } from 'lucide-react';

const ctaPromos = [
  { tld: '.com', badge: 'Free / 1st year', note: '2-year purchase required', regularPrice: '৳1,199.00/yr' },
  { tld: '.net', badge: 'Free / 1st year', note: '2-year purchase required', regularPrice: '৳1,899.00/yr' },
  { tld: '.org', badge: 'Free / 1st year', note: '2-year purchase required', regularPrice: '৳1,899.00/yr' },
];

export function AllDomainsFoundCta() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    window.location.href = `https://checkout.hosting.com/domain-search?domain=${encodeURIComponent(searchTerm.trim())}`;
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-[#E4E4DC]">
      <div className="container mx-auto px-siteContainer">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1616] tracking-tight mb-4">
            Found the one?
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#455A58] mb-8 leading-relaxed">
            Register it, or bring a domain you already own. Both take a couple of minutes.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex flex-col sm:flex-row items-stretch gap-2 bg-[#F9F9F6] p-2 rounded-2xl border border-[#E4E4DC] shadow-md focus-within:border-[#082615] transition-all">
              <div className="flex-1 flex items-center px-3">
                <Search className="h-5 w-5 text-[#455A58] mr-3 shrink-0" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Type a domain name or extension"
                  className="w-full text-base text-[#0A1616] focus:outline-none bg-transparent placeholder-[#455A58]/60 font-body"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 rounded-xl font-semibold text-sm bg-[#082615] text-white hover:bg-[#0d3b21] transition-all shadow-sm flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <span>Search</span>
              </button>
            </div>
          </form>

          {/* Offer Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {ctaPromos.map((item, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-2 bg-[#F2F2ED] border border-[#E4E4DC] px-4 py-2 rounded-2xl text-xs text-[#0A1616]"
              >
                <span className="font-bold text-sm">{item.tld}</span>
                <span className="bg-[#E8F8F0] text-[#082615] font-bold text-[10px] px-2 py-0.5 rounded-full border border-[#46FDAE]/50">
                  {item.badge}
                </span>
                <span className="text-[#6B7D7B] text-[11px]">({item.note})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
