'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Why is the renewal price different from the first year?',
    answer:
      'The first year is often a promotional rate; the domain then renews at the standard price. We show both here so you always know what it costs long term.',
  },
  {
    question: 'What is a redemption fee?',
    answer:
      'If a domain expires and is not renewed in time, it enters a redemption period. To recover it you pay the redemption fee shown plus the standard renewal fee. It is not the registration price, and you avoid it entirely by keeping auto-renew on.',
  },
  {
    question: 'What is included in the price?',
    answer:
      'Every domain includes free DNS management, domain theft protection, and 24/7 in-house support. Optionally you can add WHOIS and ID privacy on eligible extensions and domain renewal protection.',
  },
  {
    question: 'How much does it cost to transfer a domain in?',
    answer:
      'The transfer price for each extension is in the table above, and for most extensions a transfer adds a year to your registration. You will need the EPP code from your current registrar.',
  },
  {
    question: 'Do prices include tax?',
    answer:
      'Prices are shown before tax; any applicable tax or VAT is calculated at checkout based on your location.',
  },
  {
    question: 'Can I register for more than one year?',
    answer:
      'Yes, most extensions can be registered from one to ten years, and you can set auto-renew so it never lapses by accident.',
  },
];

export function AllDomainsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F2F2ED] border-t border-[#E4E4DC]">
      <div className="container mx-auto px-siteContainer">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Title Column */}
          <div className="lg:col-span-4 text-left">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1616] tracking-tight mb-4 leading-tight">
              Pricing Questions
            </h2>
            <p className="text-base text-[#455A58] leading-relaxed">
              Find direct answers to how our domain pricing, renewals, taxes, and transfer grace periods work.
            </p>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-[#E4E4DC] overflow-hidden transition-all duration-200 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 py-5 px-6 text-left"
                  >
                    <span className="font-display text-base sm:text-lg font-bold text-[#0A1616]">
                      {faq.question}
                    </span>
                    <div
                      className={`flex h-9 w-9 min-w-9 items-center justify-center rounded-xl transition-colors ${
                        isOpen ? 'bg-[#082615] text-[#46FDAE]' : 'bg-[#F2F2ED] text-[#0A1616]'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#455A58] leading-relaxed border-t border-[#F2F2ED]">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
