'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ServerTier {
  ram: string;
  price: string;
  period: string;
  cores: string;
  storage: string;
  bandwidth: string;
  ip: string;
  badge?: string;
  description: string;
}

const serverTiers: ServerTier[] = [
  {
    ram: '4GB',
    price: '৳8,500',
    period: '/mo',
    cores: '2 Dedicated AMD EPYC Cores',
    storage: '100GB NVMe Storage',
    bandwidth: '5TB Bandwidth',
    ip: '1 Dedicated IP',
    description: 'Your first server with dedicated resources',
  },
  {
    ram: '8GB',
    price: '৳14,500',
    period: '/mo',
    badge: 'Popular',
    cores: '4 Dedicated AMD EPYC Cores',
    storage: '150GB NVMe Storage',
    bandwidth: '10TB Bandwidth',
    ip: '1 Dedicated IP',
    description: 'Ideal for busy stores & large portfolios',
  },
  {
    ram: '16GB',
    price: '৳26,500',
    period: '/mo',
    cores: '6 Dedicated AMD EPYC Cores',
    storage: '250GB NVMe Storage',
    bandwidth: '15TB Bandwidth',
    ip: '2 Dedicated IPs',
    description: 'High-concurrency e-commerce & agencies',
  },
  {
    ram: '32GB',
    price: '৳48,500',
    period: '/mo',
    cores: '8 Dedicated AMD EPYC Cores',
    storage: '500GB NVMe Storage',
    bandwidth: '20TB Bandwidth',
    ip: '2 Dedicated IPs',
    description: 'Enterprise applications & high traffic',
  },
  {
    ram: '64GB',
    price: '৳89,500',
    period: '/mo',
    cores: '16 Dedicated AMD EPYC Cores',
    storage: '1000GB NVMe Storage',
    bandwidth: '30TB Bandwidth',
    ip: '4 Dedicated IPs',
    description: 'Mission-critical enterprise workloads',
  },
];

export function ComparisonServersPillar() {
  const [activeTier, setActiveTier] = useState<number>(1); // 8GB default
  const selected = serverTiers[activeTier];

  return (
    <section id="managed-servers" className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10">
        <div className="container mx-auto px-siteContainer">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE]">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    d="M7.5 9.26475L8.87258 10.0847C9.00331 10.1679 9.13106 10.165 9.25584 10.0758C9.38062 9.98669 9.42518 9.86488 9.38953 9.71039L9.03301 8.15955L10.2452 7.10783C10.364 7.00088 10.3997 6.87313 10.3521 6.72458C10.3046 6.57603 10.1976 6.49582 10.0313 6.48393L8.44476 6.35915L7.82086 4.87961C7.76144 4.73701 7.65449 4.66571 7.5 4.66571C7.34551 4.66571 7.23856 4.73701 7.17914 4.87961L6.55523 6.35915L4.96874 6.48393C4.80237 6.49582 4.69541 6.57603 4.64788 6.72458C4.60034 6.87313 4.636 7.00088 4.75483 7.10783L5.96699 8.15955L5.61047 9.71039C5.57482 9.86488 5.61938 9.98669 5.74416 10.0758C5.86894 10.165 5.99669 10.1679 6.12742 10.0847L7.5 9.26475ZM5.11135 13.2042H3.22182C2.82965 13.2042 2.49393 13.0646 2.21466 12.7853C1.93539 12.5061 1.79576 12.1703 1.79576 11.7782V9.88865L0.423176 8.49824C0.292454 8.35564 0.191441 8.19818 0.120138 8.02586C0.0488351 7.85354 0.0131836 7.67826 0.0131836 7.5C0.0131836 7.32174 0.0488351 7.14646 0.120138 6.97414C0.191441 6.80182 0.292454 6.64436 0.423176 6.50176L1.79576 5.11135V3.22182C1.79576 2.82965 1.93539 2.49393 2.21466 2.21466C2.49393 1.93539 2.82965 1.79576 3.22182 1.79576H5.11135L6.50176 0.423176C6.64436 0.292454 6.80182 0.191441 6.97414 0.120138C7.14646 0.0488351 7.32174 0.0131836 7.5 0.0131836C7.67826 0.0131836 7.85354 0.0488351 8.02586 0.120138C8.19818 0.191441 8.35564 0.292454 8.49824 0.423176L9.88865 1.79576H11.7782C12.1703 1.79576 12.5061 1.93539 12.7853 2.21466C13.0646 2.49393 13.2042 2.82965 13.2042 3.22182V5.11135L14.5768 6.50176C14.7075 6.64436 14.8086 6.80182 14.8799 6.97414C14.9512 7.14646 14.9868 7.32174 14.9868 7.5C14.9868 7.67826 14.9512 7.85354 14.8799 8.02586C14.8086 8.19818 14.7075 8.35564 14.5768 8.49824L13.2042 9.88865V11.7782C13.2042 12.1703 13.0646 12.5061 12.7853 12.7853C12.5061 13.0646 12.1703 13.2042 11.7782 13.2042H9.88865L8.49824 14.5768C8.35564 14.7075 8.19818 14.8086 8.02586 14.8799C7.85354 14.9512 7.67826 14.9868 7.5 14.9868C7.32174 14.9868 7.14646 14.9512 6.97414 14.8799C6.80182 14.8086 6.64436 14.7075 6.50176 14.5768L5.11135 13.2042Z"
                    fill="#0A1616"
                  />
                </svg>
                <span>Managed Servers</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
              ... Grow to a Server
            </h2>
            <p className="text-base text-[#455A58] leading-relaxed">
              Outgrowing shared? Cross over to a managed server of your own — same platform, same team, LiteSpeed all the way up.
            </p>
          </div>

          {/* Memory Switcher Tabs */}
          <div className="flex justify-center mb-10 overflow-x-auto pb-2">
            <div className="inline-flex p-1.5 rounded-full bg-[#E4E4DC] gap-1">
              {serverTiers.map((tier, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveTier(idx)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeTier === idx
                      ? 'bg-[#082615] text-white shadow-sm'
                      : 'text-[#0A1616] hover:bg-[#D9D9D0]'
                  }`}
                >
                  {tier.ram}
                </button>
              ))}
            </div>
          </div>

          {/* Active Server Card */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-white p-8 sm:p-10 border border-[#E4E4DC] shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#0A1616]">
                    {selected.ram} Cloud Server
                  </h3>
                  {selected.badge && (
                    <span className="bg-[#46FDAE] text-[#0A1616] text-xs font-bold px-2.5 py-0.5 rounded-full uppercase">
                      {selected.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#455A58] mb-6">{selected.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  <div className="flex items-center gap-2.5 text-sm font-medium text-[#0A1616]">
                    <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                    <span>{selected.cores}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-[#0A1616]">
                    <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                    <span>{selected.storage}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-[#0A1616]">
                    <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                    <span>{selected.bandwidth}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-medium text-[#0A1616]">
                    <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                    <span>{selected.ip}</span>
                  </div>
                </div>

                <div className="text-xs text-[#455A58] flex flex-wrap gap-x-4 gap-y-1">
                  <span>✓ LiteSpeed Enterprise included</span>
                  <span>✓ 24/7/365 in-house support</span>
                  <span>✓ Free white-glove migration</span>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end lg:border-l lg:border-[#E4E4DC] lg:pl-8">
                <div className="text-center lg:text-right mb-6">
                  <div className="text-3xl sm:text-4xl font-bold font-display text-[#0A1616]">
                    {selected.price}
                  </div>
                  <div className="text-xs text-[#455A58]">{selected.period} + VAT</div>
                </div>

                <Link
                  href={`https://checkout.hosting.com/?server=${selected.ram.toLowerCase()}`}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full font-semibold text-sm text-white bg-[#082615] hover:bg-[#0d3b21] transition-all flex items-center justify-center gap-2"
                >
                  <span>Choose {selected.ram} Server</span>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
                    <path d="M12.3524 7.10073C12.696 6.75716 12.696 6.20012 12.3524 5.85654L6.75358 0.257686C6.41 -0.0858879 5.85296 -0.0858879 5.50939 0.257686C5.16581 0.601259 5.16581 1.1583 5.50939 1.50188L10.4861 6.47864L5.50939 11.4554C5.16581 11.799 5.16581 12.356 5.50939 12.6996C5.85296 13.0432 6.41 13.0432 6.75358 12.6996L12.3524 7.10073ZM0 6.47864L0 7.35841L11.7303 7.35841V6.47864V5.59886L0 5.59886L0 6.47864Z" fill="currentColor"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Bespoke Callout */}
          <div className="mt-8 text-center text-sm text-[#455A58]">
            <span>Need up to 256 GB RAM or something bespoke? </span>
            <Link href="/hosting/dedicated-servers" className="font-semibold text-[#0A1616] underline hover:text-[#114B27]">
              Talk to sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
