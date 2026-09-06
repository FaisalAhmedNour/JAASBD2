"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function CombdDomainsFaq() {
  const faqs = [
    {
      q: "What is a .com.bd domain?",
      a: "A .com.bd domain is the official commercial second-level country code top-level domain (ccTLD) for Bangladesh, managed and administered by BTCL (Bangladesh Telecommunications Company Limited). It indicates that your commercial enterprise is directly serving or registered in Bangladesh.",
    },
    {
      q: "Who can register a .com.bd domain?",
      a: "Any business, startup, entrepreneur, or organization operating in or doing business with Bangladesh can register a .com.bd domain. A valid Bangladeshi Trade License or National ID (NID/Passport) is submitted during registration for BTCL verification.",
    },
    {
      q: "How long does it take to register a .com.bd domain?",
      a: "BTCL domain verification and registration usually completes within 24 to 72 business hours after submitting the necessary documents. JAASBD expedites this process by handling all automated paperwork and follow-ups on your behalf.",
    },
    {
      q: "Can I use a .com.bd domain for email?",
      a: "Yes, absolutely! Once active, you can connect your .com.bd domain to JAASBD Business Email, Google Workspace, Microsoft 365, or cPanel Webmail to send and receive branded emails like info@yourcompany.com.bd.",
    },
    {
      q: "Does JAASBD provide DNS management for .com.bd domains?",
      a: "Yes. Every .com.bd domain registered through JAASBD includes full, free DNS management in your client portal. You can easily add and manage A, CNAME, MX, TXT, and SPF records without extra fees.",
    },
    {
      q: "Can I use custom nameservers with my .com.bd domain?",
      a: "Yes. You can use custom private nameservers (such as ns1.yourbrand.com.bd and ns2.yourbrand.com.bd) or point your domain to Cloudflare, AWS Route 53, or any external hosting provider at any time.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1616] tracking-tight">
              .com.bd <br />domain FAQs
            </h2>
            <p className="text-sm text-[#556360] leading-relaxed">
              Find answers to common questions about BTCL rules, registration timelines, and DNS configuration for .com.bd domains.
            </p>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-8 space-y-6">
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

            <div className="pt-2">
              <Link
                href="/knowledgebase"
                className="inline-flex items-center text-sm font-semibold text-[#067547] hover:underline"
              >
                <span>View all domain FAQs</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
