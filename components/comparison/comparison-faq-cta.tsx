'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: 'Shared hosting or a managed server — which do I need?',
    a: 'Shared web hosting is ideal for one site up to a portfolio where you want things simple and hands-off. A managed server is best when a high-traffic site outgrows shared limits or you want guaranteed dedicated hardware — still fully managed by us.',
  },
  {
    q: 'Which control panel do I get?',
    a: 'Every plan runs on the hosting.com panel — granular backups, DNS management, one-click apps, staging environments, and team delegates built in, with native LiteSpeed cache integration standard.',
  },
  {
    q: 'Can I change my plan later?',
    a: 'Yes. You can upgrade or downgrade between web hosting plans instantly from your client area. Moving from web hosting to a managed server is handled by our migration engineers with zero downtime.',
  },
  {
    q: 'Is website migration really free?',
    a: 'Yes. Unlimited website and email migrations are included across all plans. Our team transfers files, databases, and settings, tests on temporary URLs, and cuts over with zero downtime.',
  },
  {
    q: 'Can I create email accounts on my domain?',
    a: 'Yes. Secure email with active spam protection, webmail, SPF/DKIM/DMARC, and IMAP/POP3 support is standard on every plan. You can also connect Google Workspace or Microsoft 365 if preferred.',
  },
  {
    q: 'Do you offer a money-back guarantee?',
    a: 'Yes. All web hosting and cloud server plans come with our 30-day unconditional money-back guarantee. No questions asked.',
  },
];

export function ComparisonFaqCta() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10">
        <div className="container mx-auto px-siteContainer">
          {/* FAQ Header & Accordions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto mb-20">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
                Common questions
              </h2>
              <p className="text-sm text-[#455A58] leading-relaxed">
                Everything you need to know about our plans, resource allocations, and migration process.
              </p>
            </div>

            <div className="lg:col-span-8 space-y-4">
              {faqs.map((faq, idx) => {
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

          {/* Bottom Conversion CTA Card */}
          <div className="rounded-3xl bg-[#082615] text-white p-8 sm:p-12 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 tracking-tight">
                Not sure which fits?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
                Tell us what you&apos;re running and we&apos;ll point you to the right plan — or move you for free.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="#plans"
                  className="px-6 py-3 rounded-full font-semibold text-sm bg-[#46FDAE] text-[#0A1616] hover:bg-[#3de09a] transition-colors"
                >
                  Compare plans
                </Link>
                <button
                  type="button"
                  className="px-6 py-3 rounded-full font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
                >
                  Talk to us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
