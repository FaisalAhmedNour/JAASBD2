'use client';

import { useState } from 'react';
import { Star, Plus, Minus } from 'lucide-react';

const reviews = [
  {
    title: '100% Satisfied',
    content:
      'The team is excellent, very professional, efficient, polite and accommodative. It was an absolute pleasure to work with them - they seamlessly pick up the threads and continue the task. I am truly impressed. Thank you again!',
    author: 'Deeba Rajpal',
    stars: 5,
  },
  {
    title: 'Excellent and improved response times',
    content:
      "You have improved so much on the response time. I can see the progress and the service I don't think it can get better. Your team is amazing and the Marketing Suite insights are super clear.",
    author: 'Alcapri',
    stars: 5,
  },
  {
    title: 'Excellent customer support',
    content:
      'Excellent customer support. The support engineers were professional, responsive, and took the time to thoroughly investigate our setup. Communication was clear throughout. I appreciate the effort and dedication.',
    author: 'Dennis Wamwea',
    stars: 5,
  },
];

const faqs = [
  {
    question: 'Do I need any marketing or technical experience?',
    answer:
      'None at all. The Marketing Suite is built for business owners, not marketers. AI-guided onboarding sets everything up for you, and every task comes with clear, step-by-step instructions and an AI avatar to guide you.',
  },
  {
    question: "What's the difference between the plans?",
    answer:
      'Starter gives you active SEO and Google Ads tools to grow your visibility. Pro adds local listings, review management, and competitor comparison. Premium adds the Social AI Manager and AI Visibility Pro for a fully automated, hands-off experience. Each plan includes everything in the plan below it.',
  },
  {
    question: 'How much do the Google Ads cost?',
    answer:
      'You choose one of three predefined monthly ad budgets, with weekly spend limits to keep costs under control — the exact amounts are shown in your local currency at checkout. This advertising spend is paid to Google and is separate from your subscription. You can preview ads before they go live and track performance at any time.',
  },
  {
    question: 'Is the advertising budget included in the price?',
    answer:
      "No. The plan price covers the app and its tools. Any money you choose to spend on Google Ads goes directly to Google and is billed separately, so you're always in control of what you spend.",
  },
  {
    question: 'How many directories can I list my business in?',
    answer:
      'Up to 33 top directories, including Google Business Profile, Facebook, Instagram, and Yelp, all managed and updated from one place. The exact number can vary by business category, country, and your settings. (Local listings are available on Pro and Premium.)',
  },
  {
    question: 'Can I use this with my existing website?',
    answer:
      "Yes. The Marketing Suite works alongside any website, and there's a dedicated WordPress plugin for on-site SEO if you're on WordPress. There's also a companion mobile app so you can manage your marketing on the go.",
  },
  {
    question: 'Do I need a website to use it?',
    answer:
      "Several features, such as local listings, reviews, and brand monitoring, deliver value even before your website is finished. If you don't have a site yet, JAASBD / hosting.com can get you online first, and then the Marketing Suite helps people find you.",
  },
  {
    question: 'How many websites does each plan cover?',
    answer: 'Each plan covers 1 website.',
  },
  {
    question: 'Can I cancel or get a refund?',
    answer:
      'Yes. Every plan is billed monthly and you can cancel anytime, with no long-term lock-in. Plans are also covered by a 30-day money-back guarantee on your subscription. Please note that advertising spend paid to Google is excluded from the guarantee.',
  },
  {
    question: 'What is AI Visibility?',
    answer:
      'AI Visibility, included from the Starter plan, shows you how AI tools like ChatGPT and Gemini describe your business. You get a single score, tracked over time, plus clear recommendations to improve how AI represents you across areas like data accuracy and customer reach. Premium adds AI Visibility Pro for advanced, ongoing monitoring.',
  },
  {
    question: 'What makes this better than hiring an agency?',
    answer:
      'Cost and control. Agencies charge premium monthly fees and often bill for every small change. The Marketing Suite gives you the same core capabilities across SEO, ads, listings, and reputation for a fraction of that, with AI doing the hard work and no surprise invoices.',
  },
];

export function MarketingReviewsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* 1. Customer Testimonials */}
      <section className="py-20 lg:py-28 bg-white border-b border-[#E4E4DC]">
        <div className="container mx-auto px-siteContainer">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A1616] mb-3">
              Small businesses, big results
            </h2>
            <p className="text-base text-[#455A58]">
              Real stories from business owners driving growth with our Marketing Suite.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-[#F9F9F6] border border-[#E4E4DC] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#082615]/30 hover:shadow-md transition-all shadow-sm"
              >
                <div>
                  <div className="flex text-[#00B67A] mb-4">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-[#0A1616] text-base mb-2.5">
                    &ldquo;{rev.title}&rdquo;
                  </h3>
                  <p className="text-xs sm:text-sm text-[#455A58] leading-relaxed mb-6">
                    {rev.content}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E4E4DC] text-xs font-bold text-[#082615]">
                  {rev.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Frequently Asked Questions */}
      <section className="py-20 lg:py-28 bg-[#F2F2ED]">
        <div className="container mx-auto px-siteContainer">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 text-left">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A1616] mb-4 leading-tight">
                Marketing Suite FAQs
              </h2>
              <p className="text-base text-[#455A58] leading-relaxed">
                Everything you need to know about SEO tasks, Google Ads spend, AI visibility, and directory listings.
              </p>
            </div>

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
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
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
    </div>
  );
}
