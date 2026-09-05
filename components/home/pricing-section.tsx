"use client";

import React, { useState } from "react";
import { hostingCategories } from "@/config/pricing";
import { PlanCard } from "./plan-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ShieldCheck } from "lucide-react";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [activeTab, setActiveTab] = useState<string>("get-online");

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#F2F2ED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="inline-block text-xs sm:text-sm font-semibold text-[#067547] uppercase tracking-wider">
            Clear, Transparent Pricing in BDT ৳
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1616] tracking-tight">
            High-Speed Hosting Plans Crafted for Every Stage
          </h2>
          
          <p className="text-[#6D7779] text-sm sm:text-base leading-relaxed">
            All plans include NVMe storage, free automated SSL, cPanel, 1-click installer, and 30-day risk-free money-back guarantee.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-sm font-semibold transition-colors ${!isAnnual ? "text-[#0A1616]" : "text-[#6D7779]"}`}>
              Monthly
            </span>

            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 flex items-center rounded-full p-1 bg-[#DFE3E1] transition-colors focus:outline-none"
              aria-label="Toggle annual or monthly billing"
            >
              <div
                className={`bg-[#082615] w-6 h-6 rounded-full shadow-md transform transition-transform duration-200 ${
                  isAnnual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>

            <div className="flex items-center gap-2">
              <span className={`text-sm font-semibold transition-colors ${isAnnual ? "text-[#0A1616]" : "text-[#6D7779]"}`}>
                Annually
              </span>
              <span className="text-[11px] font-bold text-[#067547] bg-[#E8F8F0] border border-[#00E599]/30 px-2.5 py-0.5 rounded-full shadow-sm">
                Save Up to 75%
              </span>
            </div>
          </div>
        </div>

        {/* Categories Tabs */}
        <Tabs defaultValue="get-online" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-white border border-[#E5E7EB] p-1.5 rounded-2xl flex flex-wrap h-auto gap-1 shadow-sm">
              {hostingCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {hostingCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-6">
              <div className="text-center text-xs sm:text-sm text-[#6D7779] mb-6 font-medium">
                {category.description}
              </div>

              <div className={`grid gap-8 ${
                category.plans.length === 3
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
              }`}>
                {category.plans.map((plan) => (
                  <PlanCard
                    key={plan.id}
                    plan={plan}
                    isAnnual={isAnnual}
                    currency="BDT"
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Money Back Guarantee Callout */}
        <div className="mt-14 max-w-2xl mx-auto p-4 rounded-2xl bg-white border border-[#E5E7EB] flex items-center justify-center gap-3 text-xs sm:text-sm text-[#4B5563] shadow-sm">
          <ShieldCheck className="w-5 h-5 text-[#067547] shrink-0" />
          <span>
            Every plan is backed by our unconditional <strong>30-Day Money-Back Guarantee</strong>. No questions asked.
          </span>
        </div>
      </div>
    </section>
  );
}
