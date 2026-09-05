"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Cpu, HardDrive, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServerPlan {
  id: string;
  name: string;
  memory: string;
  isPopular?: boolean;
  vCpu: string;
  storage: string;
  bandwidth: string;
  priceBDT: number;
  features: string[];
}

const serverPlans: ServerPlan[] = [
  {
    id: "server-8gb",
    name: "8 GB Server",
    memory: "8 GB RAM",
    vCpu: "4 vCPU AMD EPYC",
    storage: "100 GB NVMe SSD",
    bandwidth: "Unlimited Traffic",
    priceBDT: 2999,
    features: [
      "Full Server Management",
      "LiteSpeed Web Server & LSCache",
      "Unlimited Websites & Databases",
      "Free SSL for All Domains",
      "Automated Daily Backups",
      "Monarx Active Malware Shield",
      "Free Zero-Downtime Migration",
    ],
  },
  {
    id: "server-16gb",
    name: "16 GB Server",
    memory: "16 GB RAM",
    isPopular: true,
    vCpu: "6 vCPU AMD EPYC",
    storage: "200 GB NVMe SSD",
    bandwidth: "Unlimited Traffic",
    priceBDT: 4999,
    features: [
      "Dedicated IP Address",
      "Full Server Management",
      "LiteSpeed Web Server & LSCache",
      "Unlimited Websites & Databases",
      "Free Wildcard SSL Certificates",
      "Automated Daily Backups & 1-Click Restore",
      "Redis & Memcached Object Caching",
      "24/7 Priority VIP Support",
    ],
  },
  {
    id: "server-32gb",
    name: "32 GB Server",
    memory: "32 GB RAM",
    vCpu: "8 vCPU AMD EPYC",
    storage: "400 GB NVMe SSD",
    bandwidth: "Unlimited Traffic",
    priceBDT: 8999,
    features: [
      "2 Dedicated IP Addresses",
      "High-Concurrency Optimization",
      "Full Server Management",
      "LiteSpeed Enterprise & Redis",
      "Unlimited Domains & Mailboxes",
      "Custom PHP & Database Tuning",
      "Advanced DDoS Shield",
      "24/7 VIP Fast-Track Hotline",
    ],
  },
  {
    id: "server-64gb",
    name: "64 GB Server",
    memory: "64 GB RAM",
    vCpu: "16 vCPU AMD EPYC",
    storage: "800 GB NVMe SSD",
    bandwidth: "Unlimited Traffic",
    priceBDT: 15999,
    features: [
      "Multi-IP Allocation",
      "Dedicated Account Manager",
      "Custom SLA 99.99% Guarantee",
      "Enterprise Bare-Metal Power",
      "Full Server & OS Management",
      "Custom Staging & Deployment Hooks",
      "Proactive 24/7 Infrastructure Monitoring",
      "White-Glove Architecture Consultation",
    ],
  },
];

export function ServersPricing() {
  return (
    <section id="plans" className="py-16 lg:py-24 bg-white border-b border-[#E5E7EB] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A1616]">
            Pick where you&apos;re stepping up to
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556360] leading-relaxed">
            Servers scale with memory. Start where you need to and move up any time. We handle it.
          </p>

          {/* 3 Value Pillars */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-[#0A1616]">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#067547]" />
              <span>Resources that are yours alone</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#067547]" />
              <span>Plenty of room to grow</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#067547]" />
              <span>Nothing to manage</span>
            </div>
          </div>
        </div>

        {/* 4-Plan Server Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serverPlans.map((plan) => (
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
                {/* Plan Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#0A1616]">{plan.name}</h3>
                  <div className="text-xs font-semibold text-[#067547] mt-0.5">
                    {plan.memory}
                  </div>
                </div>

                {/* Price */}
                <div className="py-4 border-y border-[#F3F4F6] mb-6">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold text-[#0A1616]">
                      ৳{plan.priceBDT.toLocaleString()}
                    </span>
                    <span className="text-xs text-[#6B7280] font-medium">/ month</span>
                  </div>
                  <div className="text-[11px] text-[#6B7280] mt-1">
                    Fully managed · No setup fees
                  </div>
                </div>

                {/* Core Specs */}
                <div className="space-y-2 mb-6 pb-6 border-b border-[#F3F4F6] text-xs">
                  <div className="flex items-center justify-between font-bold text-[#0A1616]">
                    <span>Compute</span>
                    <span className="text-[#067547]">{plan.vCpu}</span>
                  </div>
                  <div className="flex items-center justify-between font-medium text-[#4B5563]">
                    <span>Memory</span>
                    <span>{plan.memory}</span>
                  </div>
                  <div className="flex items-center justify-between font-medium text-[#4B5563]">
                    <span>Storage</span>
                    <span>{plan.storage}</span>
                  </div>
                  <div className="flex items-center justify-between font-medium text-[#4B5563]">
                    <span>Bandwidth</span>
                    <span>{plan.bandwidth}</span>
                  </div>
                </div>

                {/* Checklist */}
                <div className="space-y-2.5 mb-8">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#9CA3AF] block mb-2">
                    Included with this server:
                  </span>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#374151]">
                      <Check className="w-4 h-4 text-[#067547] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Button */}
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
                    <span>Select {plan.name}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Hardware & Dedicated Callout */}
        <div className="mt-12 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#0A1616]">
              Looking for cPanel/WHM or larger dedicated hardware?
            </h4>
            <p className="text-xs sm:text-sm text-[#556360] mt-1">
              Want cPanel/WHM and a full software stack to configure yourself, or reseller &amp; white-label? See our cPanel infrastructure. Bigger than 64 GB, or need something bespoke? Talk to us about dedicated.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button
              asChild
              variant="outline"
              className="bg-white hover:bg-[#F3F4F6] text-[#0A1616] border-[#D1D5DB] font-bold rounded-xl px-5 py-5 shadow-sm"
            >
              <Link href="/package-comparison">
                <span>See Package Comparison</span>
              </Link>
            </Button>
            <Button
              asChild
              className="bg-[#082615] hover:bg-[#0E3D22] text-white font-bold rounded-xl px-5 py-5 shadow-sm"
            >
              <Link href="/about/contact">
                <span>Talk to Us</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
