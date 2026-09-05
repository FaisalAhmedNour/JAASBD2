"use client";

import React from "react";
import Link from "next/link";
import { PricingTier } from "@/config/pricing";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Cpu, HardDrive, Zap, Shield } from "lucide-react";

interface PlanCardProps {
  plan: PricingTier;
  isAnnual: boolean;
  currency?: "BDT" | "USD";
}

export function PlanCard({ plan, isAnnual, currency = "BDT" }: PlanCardProps) {
  const currentPrice = isAnnual
    ? currency === "BDT" ? plan.pricing.annualBDT : plan.pricing.annualUSD
    : currency === "BDT" ? plan.pricing.monthlyBDT : plan.pricing.monthlyUSD;

  const regularPrice = currency === "BDT" ? plan.pricing.regularPriceBDT : plan.pricing.regularPriceUSD;
  const currencySymbol = currency === "BDT" ? "৳" : "$";

  return (
    <div
      className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 bg-white ${
        plan.isPopular
          ? "border-2 border-[#082615] shadow-xl scale-100 lg:scale-[1.02] z-10"
          : "border border-[#E5E7EB] hover:border-[#9CA3AF] shadow-sm hover:shadow-md"
      }`}
    >
      {/* Popular / Promo Ribbon */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#082615] text-white font-bold text-xs shadow-md uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#00E599]" />
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        {/* Header */}
        <div className="border-b border-[#E5E7EB] pb-6">
          <h3 className="text-2xl font-extrabold text-[#0A1616] mb-1">{plan.name}</h3>
          <p className="text-xs text-[#6D7779] min-h-[32px]">{plan.subtitle}</p>

          {/* Pricing Display */}
          <div className="mt-5">
            <div className="flex items-baseline gap-2">
              <span className="text-[#9CA3AF] text-sm line-through">
                {currencySymbol}{regularPrice}
              </span>
              <span className="text-[11px] font-bold bg-[#E8F8F0] text-[#067547] px-2 py-0.5 rounded-full border border-[#00E599]/30">
                Save {plan.pricing.discountPercent}%
              </span>
            </div>
            
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-4xl sm:text-5xl font-black text-[#0A1616] tracking-tight">
                {currencySymbol}{currentPrice}
              </span>
              <span className="text-xs sm:text-sm text-[#6D7779] font-medium">/month</span>
            </div>

            <p className="text-[11px] text-[#6D7779] mt-1 font-medium">
              {isAnnual ? "Billed annually (Includes Free Domain)" : "Billed monthly"}
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <Button
              asChild
              size="lg"
              className={`w-full text-sm font-bold ${
                plan.isPopular
                  ? "bg-[#082615] hover:bg-[#0d3b21] text-white shadow-lg"
                  : "bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#0A1616] border border-[#D1D5DB]"
              }`}
            >
              <Link href={`https://portal.jaasbd.com/cart.php?a=add&pid=${plan.whmcsPid}&billingcycle=${isAnnual ? "annually" : "monthly"}`}>
                <span>Get Started</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Key Hardware Specs Chips */}
        <div className="grid grid-cols-2 gap-2 py-4 border-b border-[#E5E7EB] text-xs text-[#4B5563]">
          <div className="flex items-center gap-1.5 p-2 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB]">
            <Cpu className="w-3.5 h-3.5 text-[#067547] shrink-0" />
            <span className="truncate font-medium">{plan.features.cpu}</span>
          </div>
          <div className="flex items-center gap-1.5 p-2 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB]">
            <Zap className="w-3.5 h-3.5 text-[#067547] shrink-0" />
            <span className="truncate font-medium">{plan.features.ram}</span>
          </div>
          <div className="flex items-center gap-1.5 p-2 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB]">
            <HardDrive className="w-3.5 h-3.5 text-[#067547] shrink-0" />
            <span className="truncate font-medium">{plan.features.storage}</span>
          </div>
          <div className="flex items-center gap-1.5 p-2 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB]">
            <Shield className="w-3.5 h-3.5 text-[#067547] shrink-0" />
            <span className="truncate font-medium">Free SSL & Backups</span>
          </div>
        </div>

        {/* Feature List */}
        <div className="pt-6 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#6D7779] block mb-3">
            What&apos;s Included:
          </span>
          <ul className="space-y-2.5">
            {plan.highlightBullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#374151]">
                <div className="w-4 h-4 rounded-full bg-[#E8F8F0] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-[#067547]" />
                </div>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
