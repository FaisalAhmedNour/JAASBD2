'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  q: string;
  a: string;
}

const vpsFaqs: FAQItem[] = [
  {
    q: "What makes hosting.com's VPS hosting different?",
    a: 'Our VPS servers feature 100% dedicated hardware allocations (no noisy neighbors), enterprise NVMe solid state drives, Turbo LiteSpeed caching options, and 24/7 in-house Guru Crew support.',
  },
  {
    q: 'What is the difference between Managed and Unmanaged VPS?',
    a: 'Managed VPS includes pre-installed CloudLinux OS, cPanel/WHM, automatic kernel patches, security hardening, and backups handled 100% by us. Unmanaged VPS provides full root SSH access and CLI control for developers who prefer to configure their own custom stacks.',
  },
  {
    q: 'Can I upgrade my VPS resources as my traffic grows?',
    a: 'Yes. You can scale CPU cores, RAM, and NVMe disk storage at any time from your client area with zero downtime.',
  },
  {
    q: 'Do you offer free website migration for VPS?',
    a: 'Yes! We provide 100% free white-glove site migration on all Managed VPS plans. Our senior migration specialists move your files, databases, and emails with zero downtime.',
  },
  {
    q: 'What operating systems are available for Unmanaged VPS?',
    a: 'You can choose from Ubuntu, Debian, AlmaLinux, and Rocky Linux, with instant automated 1-click OS re-imaging from your client portal.',
  },
  {
    q: 'Do you provide a money-back guarantee on VPS?',
    a: 'Yes. We offer an unconditional 30-day money-back guarantee on all our VPS hosting packages.',
  },
];

export function VPSFaqCta() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        {/* FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto mb-20">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
              VPS hosting FAQs
            </h2>
            <p className="text-sm text-[#455A58] leading-relaxed">
              Do you have VPS Hosting questions? Hosting.com has all of the answers you could be looking for below!
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {vpsFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="rounded-2xl bg-[#E4E4DC] overflow-hidden transition-all duration-300">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 px-6 text-base text-left group"
                  >
                    <span className="font-display text-base sm:text-lg font-semibold text-[#0A1616]">
                      {faq.q}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2F2ED] text-[#0A1616] shrink-0">
                      {isOpen ? (
                        <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.3193 2.04688H0.428711V0.0507812H14.3193V2.04688Z" fill="currentColor" />
                        </svg>
                      ) : (
                        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.37207 6.05469H14.3193V8.05078H8.37207V13.9961H6.37598V8.05078H0.428711V6.05469H6.37598V0.105469H8.37207V6.05469Z"
                            fill="currentColor"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="text-sm text-[#455A58] leading-relaxed px-6 pb-5 pt-1">
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="rounded-3xl bg-[#082615] text-white p-8 sm:p-12 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 tracking-tight">
              Get ultra-reliable, high-performance VPS hosting today
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
              Step up to guaranteed dedicated compute power, pure NVMe storage, and 24/7 expert server management.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#managed-vps"
                className="px-8 py-3.5 rounded-full font-semibold text-sm bg-[#46FDAE] text-[#0A1616] hover:bg-[#3de09a] transition-colors"
              >
                Get Started
              </Link>
              <button
                type="button"
                className="px-8 py-3.5 rounded-full font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              >
                Chat with Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
