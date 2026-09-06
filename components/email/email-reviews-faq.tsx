'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, Plus, Minus } from 'lucide-react';

const reviews = [
  {
    title: 'Wonderful service for ecommerce stores',
    content:
      'Wonderful service, speed and even better customer support. I fully support them for anyone who wants to scale. As an ecommerce site owner, speed is of utmost importance as even with a few seconds of delay can hurt your sales. They never disappoint in their services.',
    author: 'Ahmad Jamshed',
    stars: 5,
  },
  {
    title: 'Excellent and improved response times',
    content:
      "You have improved so much on the response time. I can see the progress and the service I don't think it can get better. Your team is amazing.",
    author: 'Alcapri',
    stars: 5,
  },
  {
    title: 'Reliable support every time',
    content:
      'Hosting.com has consistently delivered great customer service. Every time I reach out, someone is available quickly and knows exactly how to help. They’re patient, even when I don’t fully understand the technical side of things, and I never feel rushed or dismissed.',
    author: 'Sean Tucker',
    stars: 5,
  },
  {
    title: 'Exceptional assistance',
    content:
      'Exceptional assistance who went the extra mile and made sure everything was working properly and did not hesitate to do everything and anything to complete the tasks. I am 1,000% satisfied and can rate the tech support as 5-stars plus.',
    author: 'Brother David Mary',
    stars: 5,
  },
];

const faqs = [
  {
    question: 'What is business email hosting?',
    answer:
      'It gives you professional email addresses at your own domain name, like you@yourbusiness.com, with a mailbox, calendar, contacts and apps to run them.',
  },
  {
    question: 'Can I use my own domain?',
    answer:
      "Yes. Your addresses use your domain. If your domain is with us, setup is automatic. If it's elsewhere, we'll walk you through the DNS records.",
  },
  {
    question: 'Can I move my existing email over?',
    answer:
      'Yes, and we do it for you free of charge. We migrate from Gmail, Microsoft 365 or any IMAP provider, bringing your existing mail with you.',
  },
  {
    question: 'Will I keep my current address?',
    answer:
      'Yes, as long as it uses a domain you control. Your address stays the same, only the mailbox behind it changes.',
  },
  {
    question: 'How many mailboxes can I have?',
    answer:
      'As many as you need. Add mailboxes through our online interface for an additional fee per mailbox, and remove them when you no longer need them.',
  },
  {
    question: 'Can I use it on my phone and my computer?',
    answer:
      "Yes. There's a web inbox, iOS and Android apps, and full IMAP, POP3 and SMTP support for Outlook, Apple Mail and others.",
  },
  {
    question: 'Is my email secure and private?',
    answer:
      "Yes. Every mailbox includes active anti-spam and anti-virus filtering, and your mail is encrypted. It's ad-free, and we never scan it to sell you things.",
  },
  {
    question: 'How much storage do I get?',
    answer: '10GB per mailbox on Pro, 50GB on Premium and 100GB on Ultra.',
  },
  {
    question: "What's the difference between the plans?",
    answer:
      'The core suite is the same on every plan. Higher plans add storage and extra tools like Titan Drive, Tasks and File Transfer. See the plan chooser above.',
  },
];

export function EmailReviewsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* 1. Customer Reviews Section */}
      <section className="py-20 lg:py-28 bg-[#082615] text-white">
        <div className="container mx-auto px-siteContainer">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold bg-[#46FDAE]/15 text-[#46FDAE] border border-[#46FDAE]/30 mb-4">
              <div className="flex text-[#46FDAE]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <span>4.8 Rating from 7,100+ reviews</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              What customers say about their email
            </h2>
          </div>

          {/* 4 Review Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-[#0F3521] border border-[#1F4E34] rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#46FDAE]/40 transition-all shadow-md"
              >
                <div>
                  <div className="flex text-[#46FDAE] mb-4">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <h3 className="font-display font-bold text-white text-base mb-2.5 line-clamp-2">
                    &ldquo;{rev.title}&rdquo;
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C2D6CF] leading-relaxed line-clamp-6 mb-6">
                    {rev.content}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#1F4E34] text-xs font-semibold text-[#46FDAE]">
                  {rev.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Frequently Asked Questions */}
      <section className="py-20 lg:py-28 bg-[#F2F2ED] border-t border-[#E4E4DC]">
        <div className="container mx-auto px-siteContainer">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Title */}
            <div className="lg:col-span-4 text-left">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A1616] mb-4 leading-tight">
                Frequently asked questions
              </h2>
              <p className="text-base text-[#455A58] leading-relaxed">
                Got questions about mailbox limits, IMAP setup, or email migration? We have answers.
              </p>
            </div>

            {/* Right Accordion */}
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
