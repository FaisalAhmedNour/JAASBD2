"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is web hosting?",
    answer:
      "It’s the service that stores your website's files and makes them available for the world to see on the internet.",
  },
  {
    question: "Do I need web hosting for my website?",
    answer:
      "Yes. If you want a website, you need a place for it to live online. A hosting plan provides that secure space on our servers.",
  },
  {
    question: "What is shared hosting?",
    answer:
      "It’s the most cost-effective way to get online. Your site shares server resources with others, which keeps the price low. It's perfect for personal sites, blogs, and small businesses.",
  },
  {
    question: "What is the difference between a hosting plan and a managed server of my own?",
    answer:
      "On a hosting plan your site sits in its own isolated container on a managed server, with dedicated CPU and RAM, and we run everything. A managed server of your own gives you the whole box: all the resources are yours, still fully managed by us. Most sites start on a plan and move up when they outgrow it, on the same platform, with the same team, and no re-platforming.",
  },
  {
    question: "Can I upgrade my hosting plan later?",
    answer:
      "Yes — our plans are built to grow with you. You can upgrade easily and without downtime, all the way from shared hosting to a managed server of your own.",
  },
  {
    question: "Do I get email with my hosting plan?",
    answer:
      "Yes, all plans come with our integrated enhance email solution, so you can create professional addresses using your domain name.",
  },
  {
    question: "Is technical knowledge required to use web hosting?",
    answer:
      "No. The control panel is intuitive, and Orbi plus our in-house team are on hand 24/7. Developers can still reach advanced tools like SSH, Git integration and custom cron jobs.",
  },
  {
    question: "Is web hosting secure?",
    answer:
      "Yes. All our plans include robust security features like SSL certificates, DDoS protection, and automated backups to keep your site safe.",
  },
  {
    question: "Can I host multiple websites on one plan?",
    answer:
      "Some of our plans do. Just check the features of each plan to see which one fits your needs. check plan specs for the site limit.",
  },
];

export function HostingFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 6);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A1616]">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {visibleFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-[#E5E7EB] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-[#F9FAFB] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#0A1616] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#6B7280] transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-[#067547]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#556360] leading-relaxed border-t border-[#F3F4F6] bg-white animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Show more questions button if not all shown */}
        {!showAll && faqs.length > 6 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="text-sm font-bold text-[#067547] hover:underline"
            >
              Show more questions
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
