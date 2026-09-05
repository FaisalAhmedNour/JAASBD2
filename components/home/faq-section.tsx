"use client";

import React from "react";
import { faqs } from "@/config/pricing";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export function FaqSection() {
  return (
    <section id="faqs" className="py-20 lg:py-24 bg-white border-t border-[#E5E7EB] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <span className="inline-block text-xs sm:text-sm font-semibold text-[#067547] uppercase tracking-wider">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0A1616] tracking-tight">
            Got Questions? We&apos;ve Got Answers
          </h2>
          <p className="text-[#6D7779] text-sm sm:text-base">
            Everything you need to know about our web hosting, migration, payments, and 24/7 technical support.
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-3">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-base sm:text-lg font-bold text-[#0A1616]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-[#4B5563]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
