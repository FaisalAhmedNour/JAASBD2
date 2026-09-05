'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Do I actually need a server, or is a web hosting plan enough?',
    a: "If a web hosting plan is handling your site comfortably, stay on it. We'll tell you when it's genuinely worth moving up. You'll usually feel it first: slower pages at busy times, or bumping into limits. That's the sign a server's dedicated resources will help.",
  },
  {
    q: 'Will my site go down when I move?',
    a: 'No. We handle the whole move for you and cut over with no downtime. You approve it, and we do the rest.',
  },
  {
    q: 'Will it look or work differently to web hosting?',
    a: "No. It's the same simple panel our web hosting uses, with your sites, email and settings all in one place. A server just gives you more power behind them.",
  },
  {
    q: 'What if I need more power or resources?',
    a: "You keep moving up to bigger servers, then dedicated, and we handle each move. And if you ever need less, you can move down too. You're never locked into one size.",
  },
];

export function ServersFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="bg-background relative">
      <div className="relative z-10">
        <div className="pb-16 lg:pb-32 pt-16 lg:pt-32 z-1 relative">
          <div className="container mx-auto px-siteContainer">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <div className="pb-8 lg:pb-0">
                  <h2 className="block hyphens-auto text-balance break-words font-display text-heading antialiased sm:hyphens-manual sm:break-normal mr-auto max-w-headingNarrow text-3xl font-bold text-[#0A1616]">
                    Common questions
                  </h2>
                </div>
              </div>
              <div className="lg:col-span-8">
                {faqs.map((faq, idx) => {
                  const isOpen = openIdx === idx;
                  return (
                    <div key={idx} className="mb-4 rounded bg-[#E4E4DC] overflow-hidden transition-all duration-300">
                      <button
                        type="button"
                        onClick={() => toggle(idx)}
                        className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 pe-5 ps-8 text-base text-left group"
                      >
                        <span className="text-left font-display text-lg font-semibold text-[#0A1616] antialiased">
                          {faq.q}
                        </span>
                        <span className="flex h-10 min-w-10 items-center justify-center rounded bg-[#F2F2ED] text-[#0A1616] shrink-0">
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
                          <div className="text-sm text-[#455A58] leading-relaxed pe-16 ps-8 pb-5 pt-1">
                            <p>{faq.a}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
