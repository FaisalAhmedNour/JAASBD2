'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  q: string;
  a: string;
}

const wpFaqs: FAQItem[] = [
  {
    q: 'What is Managed WordPress Hosting?',
    a: 'Managed WordPress hosting is an optimized hosting environment built specifically for WordPress. We handle server performance, Enterprise Cloudflare edge caching, WAF security, daily backups, and core updates so you can focus purely on your business.',
  },
  {
    q: 'How is this different from standard shared hosting?',
    a: 'Unlike standard shared hosting, our Managed WordPress platform provides unlimited PHP workers, enterprise edge CDN with full-page caching, isolated containers, autonomous malware removal, and sub-100ms global response times out of the box.',
  },
  {
    q: 'Can I migrate my existing WordPress site for free?',
    a: 'Yes! Unlimited white-glove migrations are included with every plan. Our engineering team transfers files, databases, and plugins, tests everything on temporary preview URLs, and cuts over with zero downtime.',
  },
  {
    q: 'Do you support WooCommerce and high-traffic stores?',
    a: 'Yes. Our platform is fully optimized for WooCommerce with Redis / Object Cache Pro, uncapped PHP worker concurrency, and dynamic cart/checkout bypass rules.',
  },
  {
    q: 'Can I create staging environments?',
    a: 'Yes. 1-click staging is standard across all tiers. Clone your live site to a private sandbox, test plugin updates or design changes safely, and push live with one click.',
  },
  {
    q: 'Do you offer a money-back guarantee?',
    a: 'Yes. All Managed WordPress plans include an unconditional 30-day money-back guarantee. No questions asked.',
  },
];

export function WordPressFaqCta() {
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
              Frequently asked questions
            </h2>
            <p className="text-sm text-[#455A58] leading-relaxed">
              Have questions about managed WordPress hosting? Here are answers to our most common inquiries.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {wpFaqs.map((faq, idx) => {
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
              Ready to experience true WordPress speed?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-8 leading-relaxed">
              Launch your WordPress site with the fastest managed hosting in Bangladesh. Free migrations & 30-day money-back guarantee.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#plans"
                className="px-8 py-3.5 rounded-full font-semibold text-sm bg-[#46FDAE] text-[#0A1616] hover:bg-[#3de09a] transition-colors"
              >
                Get Started Now
              </Link>
              <Link
                href="#demo"
                className="px-8 py-3.5 rounded-full font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
