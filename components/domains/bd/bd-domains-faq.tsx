"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function BdDomainsFaq() {
  const faqs = [
    {
      q: "What is a .com.bd domain?",
      a: ".com.bd is the official commercial second-level domain under Bangladesh's country-code top-level domain (.bd), managed by BTCL (Bangladesh Telecommunications Company Limited). It is specifically intended for commercial businesses, startups, and organizations operating in Bangladesh.",
    },
    {
      q: "Who can register a .bd domain?",
      a: "Any individual, company, educational institution, or non-profit organization can register a .bd domain. For commercial .com.bd domains, an authentic national ID (NID/Passport) or company trade license is typically required by BTCL during the verification stage.",
    },
    {
      q: "Can I use a .bd domain for email?",
      a: "Yes, absolutely. Once your .bd domain is registered and active, you can link it to JAASBD Business Email, Google Workspace, Microsoft 365, or cPanel Webmail to send and receive branded professional emails (e.g. info@yourcompany.com.bd).",
    },
    {
      q: "How long does .bd domain activation take?",
      a: "BTCL processes and verifies domain requests within 24 to 72 business hours upon submission of appropriate verification documents. JAASBD's team handles all documentation submission and follow-ups on your behalf to ensure rapid activation.",
    },
    {
      q: "What is the minimum registration period for .bd domains?",
      a: "As per BTCL regulatory policy, .bd domains are registered for a minimum of 2 years (৳2,400 for 2 years). After the initial 2-year period, you can renew yearly or in multi-year blocks.",
    },
    {
      q: "Can I transfer my existing .bd domain to JAASBD?",
      a: "Yes. You can easily transfer management of your .bd domain to JAASBD. Our support team will guide you through acquiring your BTCL authorization and switching your nameservers without any downtime to your live website or email.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Heading */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs sm:text-sm font-semibold text-[#067547] uppercase tracking-wider">
              Answers &amp; Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1616] tracking-tight">
              .bd domain FAQs
            </h2>
            <p className="text-sm text-[#556360] leading-relaxed">
              Find answers to common questions about BTCL regulations, registration timeframes, and DNS management for Bangladeshi domains.
            </p>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-6 py-1 data-[state=open]:bg-white data-[state=open]:shadow-sm transition-all"
                >
                  <AccordionTrigger className="text-left font-bold text-[#0A1616] hover:no-underline text-base sm:text-lg py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-[#556360] leading-relaxed pb-4 pt-1">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
