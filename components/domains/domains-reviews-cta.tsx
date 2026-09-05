'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';

const domainReviews = [
  {
    title: 'Tech support is the #1',
    quote: 'The reply to my question was swift and to the point. When moving a domain, there is always anxiety, but their team verified the EPP code and cutover without a single hiccup.',
    name: 'Shakil Mahmud',
    role: 'Product Designer',
  },
  {
    title: 'Instant DNS propagation',
    quote: 'Registered our new company .com domain and pointed Anycast DNS to our VPS in literally 30 seconds. No waiting hours for propagation.',
    name: 'Farhana Akter',
    role: 'Agency Founder',
  },
  {
    title: 'Transparent pricing with no traps',
    quote: 'Other registrars lure you in with $1 then charge triple on renewal. Hosting.com keeps the pricing honest and consistent year after year.',
    name: 'Nabil Hasan',
    role: 'Software Engineer',
  },
];

export function DomainsReviewsCta() {
  const [domainInput, setDomainInput] = useState<string>('');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!domainInput.trim()) return;
    window.location.href = `https://checkout.hosting.com/domain-search?domain=${encodeURIComponent(domainInput)}`;
  };

  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        {/* Reviews Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Image
              src="/assets/intro/trustpilot-1_wo4.svg"
              alt="Trustpilot"
              width={90}
              height={22}
              className="h-5 w-auto"
            />
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/assets/reviews/stars.svg"
                  alt="5 Stars"
                  width={18}
                  height={18}
                  className="w-4 h-4"
                />
              ))}
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-2">
            What people are saying
          </h2>
          <p className="text-sm text-[#455A58]">
            Rated Excellent by thousands of real domain owners.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {domainReviews.map((rev, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white p-7 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h4 className="font-bold text-base text-[#0A1616] mb-3">{rev.title}</h4>
                <p className="text-sm text-[#455A58] leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-[#E4E4DC] pt-4">
                <div className="font-bold text-sm text-[#0A1616]">{rev.name}</div>
                <div className="text-xs text-[#455A58]">{rev.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-[#082615] text-white p-8 sm:p-12 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 tracking-tight">
              Claim your domain name today
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
              Search hundreds of extensions, lock in your brand identity, and manage everything in one unified dashboard.
            </p>

            <form onSubmit={handleSearch} className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-2 bg-white p-1.5 rounded-2xl">
                <input
                  type="text"
                  value={domainInput}
                  onChange={(e) => setDomainInput(e.target.value)}
                  placeholder="Enter your ideal domain name..."
                  className="flex-1 px-4 py-3 text-sm text-[#0A1616] focus:outline-none bg-transparent placeholder-[#455A58]/60"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl font-semibold text-sm bg-[#082615] text-white hover:bg-[#0d3b21] transition-colors whitespace-nowrap"
                >
                  Check Availability
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
