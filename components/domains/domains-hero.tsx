'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';

const popularTlds = [
  { tld: '.com', price: '৳1,650/yr', popular: true, logo: '/assets/tlds/dot-com-logo.webp' },
  { tld: '.com.bd', price: '৳1,850/yr', popular: true, logo: '/assets/tlds/com.bd.png' },
  { tld: '.net', price: '৳1,950/yr', popular: false, logo: '/assets/tlds/dot-net-logo-1.webp' },
  { tld: '.org', price: '৳1,800/yr', popular: false },
  { tld: '.xyz', price: '৳350/yr', popular: false },
];

export function DomainsHero() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedTld, setSelectedTld] = useState<string>('.com');

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    const fullDomain = searchTerm.includes('.') ? searchTerm : `${searchTerm}${selectedTld}`;
    window.location.href = `https://checkout.hosting.com/domain-search?domain=${encodeURIComponent(fullDomain)}`;
  };

  return (
    <section className="bg-background relative pt-12 pb-16 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Background Watermark */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40 select-none">
        <Image
          src="/assets/watermarks/hero-2.webp"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content & Search Bar */}
          <div className="lg:col-span-7 text-left">
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE]">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  d="M7.5 9.26475L8.87258 10.0847C9.00331 10.1679 9.13106 10.165 9.25584 10.0758C9.38062 9.98669 9.42518 9.86488 9.38953 9.71039L9.03301 8.15955L10.2452 7.10783C10.364 7.00088 10.3997 6.87313 10.3521 6.72458C10.3046 6.57603 10.1976 6.49582 10.0313 6.48393L8.44476 6.35915L7.82086 4.87961C7.76144 4.73701 7.65449 4.66571 7.5 4.66571C7.34551 4.66571 7.23856 4.73701 7.17914 4.87961L6.55523 6.35915L4.96874 6.48393C4.80237 6.49582 4.69541 6.57603 4.64788 6.72458C4.60034 6.87313 4.636 7.00088 4.75483 7.10783L5.96699 8.15955L5.61047 9.71039C5.57482 9.86488 5.61938 9.98669 5.74416 10.0758C5.86894 10.165 5.99669 10.1679 6.12742 10.0847L7.5 9.26475ZM5.11135 13.2042H3.22182C2.82965 13.2042 2.49393 13.0646 2.21466 12.7853C1.93539 12.5061 1.79576 12.1703 1.79576 11.7782V9.88865L0.423176 8.49824C0.292454 8.35564 0.191441 8.19818 0.120138 8.02586C0.0488351 7.85354 0.0131836 7.67826 0.0131836 7.5C0.0131836 7.32174 0.0488351 7.14646 0.120138 6.97414C0.191441 6.80182 0.292454 6.64436 0.423176 6.50176L1.79576 5.11135V3.22182C1.79576 2.82965 1.93539 2.49393 2.21466 2.21466C2.49393 1.93539 2.82965 1.79576 3.22182 1.79576H5.11135L6.50176 0.423176C6.64436 0.292454 6.80182 0.191441 6.97414 0.120138C7.14646 0.0488351 7.32174 0.0131836 7.5 0.0131836C7.67826 0.0131836 7.85354 0.0488351 8.02586 0.120138C8.19818 0.191441 8.35564 0.292454 8.49824 0.423176L9.88865 1.79576H11.7782C12.1703 1.79576 12.5061 1.93539 12.7853 2.21466C13.0646 2.49393 13.2042 2.82965 13.2042 3.22182V5.11135L14.5768 6.50176C14.7075 6.64436 14.8086 6.80182 14.8799 6.97414C14.9512 7.14646 14.9868 7.32174 14.9868 7.5C14.9868 7.67826 14.9512 7.85354 14.8799 8.02586C14.8086 8.19818 14.7075 8.35564 14.5768 8.49824L13.2042 9.88865V11.7782C13.2042 12.1703 13.0646 12.5061 12.7853 12.7853C12.5061 13.0646 12.1703 13.2042 11.7782 13.2042H9.88865L8.49824 14.5768C8.35564 14.7075 8.19818 14.8086 8.02586 14.8799C7.85354 14.9512 7.67826 14.9868 7.5 14.9868C7.32174 14.9868 7.14646 14.9512 6.97414 14.8799C6.80182 14.8086 6.64436 14.7075 6.50176 14.5768L5.11135 13.2042Z"
                  fill="#0A1616"
                />
              </svg>
              <span>Domains</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1616] tracking-tight antialiased mb-4 leading-tight">
              Find your domain. Or bring the one you own
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#455A58] mb-8 leading-relaxed max-w-2xl">
              Register a new name or transfer one you already have. Either way you get free DNS and theft protection, managed alongside your hosting.
            </p>

            {/* Interactive Domain Search Bar */}
            <form onSubmit={handleSearch} className="mb-8 max-w-2xl">
              <div className="flex flex-col sm:flex-row items-stretch gap-2 bg-white p-2 rounded-2xl border border-[#E4E4DC] shadow-lg focus-within:border-[#082615] transition-all">
                <div className="flex-1 flex items-center px-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#455A58] mr-3 shrink-0">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Find your perfect domain..."
                    className="w-full text-base sm:text-lg text-[#0A1616] focus:outline-none bg-transparent placeholder-[#455A58]/60 font-body"
                  />
                </div>

                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-xl font-semibold text-sm bg-[#082615] text-white hover:bg-[#0d3b21] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Search Domain</span>
                </button>
              </div>
            </form>

            {/* Popular TLD Pricing Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold text-[#455A58] uppercase tracking-wider">Popular:</span>
              {popularTlds.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedTld(item.tld)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs transition-all ${
                    selectedTld === item.tld
                      ? 'border-[#082615] bg-[#082615] text-white font-bold shadow-sm'
                      : 'border-[#E4E4DC] bg-white text-[#0A1616] hover:border-[#0A1616]/40'
                  }`}
                >
                  {item.logo ? (
                    <Image src={item.logo} alt={item.tld} width={20} height={12} className="h-3 w-auto object-contain" />
                  ) : (
                    <span className="font-bold">{item.tld}</span>
                  )}
                  <span className={selectedTld === item.tld ? 'text-[#46FDAE]' : 'text-[#455A58]'}>
                    {item.price}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Floating Billboard Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg">
              <Image
                src="/assets/billboard/domains-hero.webp"
                alt="Domains & DNS Management"
                width={560}
                height={480}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
