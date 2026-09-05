"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Plan {
  id: string;
  name: string;
  tagline: string;
  isPopular?: boolean;
  basePriceMonthly: number;
  features: string[];
  specs: {
    websites: string;
    storage: string;
    bandwidth: string;
    emails: string;
    ramCpu: string;
  };
}

const plans: Plan[] = [
  {
    id: "launch",
    name: "Launch",
    tagline: "Great for single sites, blogs, and testing new ideas.",
    basePriceMonthly: 299,
    specs: {
      websites: "1 Website",
      storage: "20 GB NVMe SSD",
      bandwidth: "Unlimited Bandwidth",
      emails: "5 Email Accounts",
      ramCpu: "1 vCPU / 1 GB RAM",
    },
    features: [
      "Free SSL Certificate",
      "cPanel Control Panel",
      "LiteSpeed Web Server",
      "Automated Weekly Backups",
      "1-Click App Installer (400+)",
      "Free Website Migration",
      "24/7 In-House Support",
    ],
  },
  {
    id: "grow",
    name: "Grow",
    tagline: "Our most popular plan for businesses and multi-site owners.",
    isPopular: true,
    basePriceMonthly: 499,
    specs: {
      websites: "Unlimited Websites",
      storage: "50 GB NVMe SSD",
      bandwidth: "Unlimited Bandwidth",
      emails: "Unlimited Emails",
      ramCpu: "2 vCPU / 2 GB RAM",
    },
    features: [
      "Free Domain Name (1st Year)",
      "Free Wildcard SSL",
      "20x Faster Turbo Boost",
      "Automated Daily Backups",
      "Monarx Active Malware Shield",
      "Unlimited MariaDB Databases",
      "Free Website Migration",
      "24/7 Priority Support",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Maximum performance for busy shops, portals, and agencies.",
    basePriceMonthly: 899,
    specs: {
      websites: "Unlimited Websites",
      storage: "100 GB NVMe SSD",
      bandwidth: "Unlimited Bandwidth",
      emails: "Unlimited Emails",
      ramCpu: "4 vCPU / 4 GB RAM",
    },
    features: [
      "Free Domain + Dedicated IP",
      "Free Wildcard SSL",
      "4x Compute Power (AMD EPYC)",
      "Automated Daily Backups & 1-Click Restore",
      "Staging Environment & Git Integration",
      "Redis & Memcached Object Caching",
      "Free Unlimited Website Migrations",
      "24/7 VIP Fast-Track Support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Dedicated resources for heavy workloads and high traffic.",
    basePriceMonthly: 1499,
    specs: {
      websites: "Unlimited Websites",
      storage: "250 GB NVMe SSD",
      bandwidth: "Unlimited Bandwidth",
      emails: "Unlimited Emails",
      ramCpu: "8 vCPU / 8 GB RAM",
    },
    features: [
      "Dedicated IP + Free Domain",
      "Enterprise SLA 99.99% Uptime",
      "8x Dedicated Compute Allocation",
      "Proactive Server Management",
      "Dedicated Account Representative",
      "Custom PHP & Database Limits",
      "Free White-Glove Migration",
      "24/7 Direct Hotline Support",
    ],
  },
];

type BillingCycle = "1" | "12" | "24" | "36";

export function HostingPricing() {
  const [cycle, setCycle] = useState<BillingCycle>("36");

  const discounts: Record<BillingCycle, { multiplier: number; label: string; badge?: string }> = {
    "1": { multiplier: 1, label: "Monthly" },
    "12": { multiplier: 0.8, label: "12 Months", badge: "Save 20%" },
    "24": { multiplier: 0.65, label: "24 Months", badge: "Save 35%" },
    "36": { multiplier: 0.5, label: "36 Months", badge: "Save 50% Best Value" },
  };

  const calculatePrice = (baseMonthly: number) => {
    const discounted = Math.round(baseMonthly * discounts[cycle].multiplier);
    return discounted;
  };

  return (
    <section id="plans" className="py-16 lg:py-24 bg-white border-b border-[#E5E7EB] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A1616]">
            Choose your plan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556360] leading-relaxed">
            No matter where you start, every plan delivers: NVMe storage, LiteSpeed caching, unlimited MariaDB databases, advanced malware protection, and free SSL.
          </p>

          {/* Billing Cycle Selector Tabs */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-[#F3F4F6] border border-[#E5E7EB]">
            {(Object.keys(discounts) as BillingCycle[]).map((key) => {
              const isActive = cycle === key;
              return (
                <button
                  key={key}
                  onClick={() => setCycle(key)}
                  className={`relative px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-white text-[#0A1616] shadow-sm border border-[#E5E7EB]"
                      : "text-[#6B7280] hover:text-[#0A1616]"
                  }`}
                >
                  <span>{discounts[key].label}</span>
                  {discounts[key].badge && (
                    <span className="hidden sm:inline-block ml-2 text-[10px] bg-[#E8F8F0] text-[#067547] font-bold px-1.5 py-0.5 rounded">
                      {discounts[key].badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards Grid (4 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => {
            const price = calculatePrice(plan.basePriceMonthly);
            const originalPrice = plan.basePriceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl bg-white border flex flex-col justify-between p-6 transition-all duration-200 ${
                  plan.isPopular
                    ? "border-[#067547] ring-2 ring-[#067547]/20 shadow-lg"
                    : "border-[#E5E7EB] hover:border-[#D1D5DB] shadow-sm hover:shadow-md"
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#067547] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#0A1616]">{plan.name}</h3>
                    <p className="text-xs text-[#6B7280] mt-1 leading-snug min-h-[32px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Pricing Box */}
                  <div className="py-4 border-y border-[#F3F4F6] mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#0A1616]">
                        ৳{price}
                      </span>
                      <span className="text-xs text-[#6B7280] font-medium">/ month</span>
                    </div>
                    {cycle !== "1" && (
                      <div className="text-xs text-[#9CA3AF] line-through mt-1">
                        Regular: ৳{originalPrice}/mo
                      </div>
                    )}
                  </div>

                  {/* Core Specs Highlights */}
                  <div className="space-y-2 mb-6 pb-6 border-b border-[#F3F4F6] text-xs">
                    <div className="flex items-center justify-between font-bold text-[#0A1616]">
                      <span>Websites</span>
                      <span className="text-[#067547]">{plan.specs.websites}</span>
                    </div>
                    <div className="flex items-center justify-between font-medium text-[#4B5563]">
                      <span>Storage</span>
                      <span>{plan.specs.storage}</span>
                    </div>
                    <div className="flex items-center justify-between font-medium text-[#4B5563]">
                      <span>Bandwidth</span>
                      <span>{plan.specs.bandwidth}</span>
                    </div>
                    <div className="flex items-center justify-between font-medium text-[#4B5563]">
                      <span>Email</span>
                      <span>{plan.specs.emails}</span>
                    </div>
                    <div className="flex items-center justify-between font-medium text-[#4B5563]">
                      <span>CPU &amp; RAM</span>
                      <span>{plan.specs.ramCpu}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF] block mb-2">
                      Included with {plan.name}:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-[#374151]">
                        <Check className="w-4 h-4 text-[#067547] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Checkout CTA Button */}
                <div>
                  <Button
                    asChild
                    className={`w-full py-5 rounded-xl font-bold text-sm transition-all ${
                      plan.isPopular
                        ? "bg-[#082615] hover:bg-[#0E3D22] text-white shadow-sm"
                        : "bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#0A1616]"
                    }`}
                  >
                    <Link href={`https://portal.jaasbd.com/cart.php?a=add&pid=${plan.id}`}>
                      <span>Choose {plan.name}</span>
                      <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Outgrowing Shared Hosting Banner */}
        <div className="mt-12 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#0A1616]">
              Outgrowing shared hosting?
            </h4>
            <p className="text-xs sm:text-sm text-[#556360] mt-1">
              Move to a managed server of your own — same platform, same support team, zero re-platforming needed.
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="shrink-0 bg-white hover:bg-[#F3F4F6] text-[#0A1616] border-[#D1D5DB] font-bold rounded-xl px-6 py-5 shadow-sm"
          >
            <Link href="/hosting/vps-hosting">
              <span>View Managed Servers</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#067547]" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
