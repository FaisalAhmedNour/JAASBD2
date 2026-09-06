"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Globe, Shield, Headphones, Sparkles, CheckCircle } from "lucide-react";

export function CombdDomainsWhyUs() {
  const [activeTab, setActiveTab] = useState(0);

  const cards = [
    {
      step: "Step 1",
      badge: "Speed",
      title: "Easy .com.bd domain registration",
      description1:
        "Registering a .com.bd domain shouldn't feel complicated. With JAASBD, it takes just a few minutes.",
      description2:
        "Our streamlined registration flow, non-stop automated verification, and intuitive dashboard make it simple to search, secure, and manage your domain without jumping through a dozen hoops.",
      graphicText: ".com.bd domain purchased",
      graphicSub: "Instant activation in minutes",
      icon: Globe,
      image: "/assets/case_studies/easy-.com-domain-registration.webp",
    },
    {
      step: "Step 2",
      badge: "Security",
      title: "Rock-solid domain protection",
      description1:
        "Your business identity is your most valuable online asset. We protect it with automated domain locking and transfer prevention.",
      description2:
        "Prevent unauthorized transfers, DNS spoofing, and accidental expirations with proactive renewal notifications and comprehensive DNSSEC support at zero extra charge.",
      graphicText: "Domain lock active",
      graphicSub: "Theft & hijack protection",
      icon: Shield,
      image: "/assets/case_studies/com-domain-registration-security.webp",
    },
    {
      step: "Step 3",
      badge: "Local Support",
      title: "24/7/365 Dhaka Expert Assistance",
      description1:
        "Need help with BTCL paperwork, trade licenses, or custom nameserver propagation?",
      description2:
        "Our in-house technical team in Dhaka is ready around the clock via live chat, phone, and ticketing to handle any domain administrative challenge.",
      graphicText: "Local BD Engineers",
      graphicSub: "Average response < 1 min",
      icon: Headphones,
      image: "/assets/case_studies/com-domain-registration-support.webp",
    },
  ];

  const current = cards[activeTab];

  return (
    <section className="py-16 lg:py-24 bg-[#082615] text-white border-b border-[#16472D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why register your .com.bd domain with JAASBD?
            </h2>
            <p className="text-sm sm:text-base text-[#BDC8C5] mt-3 leading-relaxed">
              Thousands of Bangladeshi businesses trust JAASBD to manage their domains. We keep the process straightforward, the tools intuitive, and the support non-stop.
            </p>
            <p className="text-xs text-[#00E599] font-semibold mt-2">
              Fast nameserver setups, high reliability, free transfer assistance across the board.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab((prev) => (prev === 0 ? cards.length - 1 : prev - 1))}
              className="w-10 h-10 rounded-full border border-[#16472D] bg-[#0D331E] hover:bg-[#1A4B2E] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveTab((prev) => (prev === cards.length - 1 ? 0 : prev + 1))}
              className="w-10 h-10 rounded-full border border-[#16472D] bg-[#0D331E] hover:bg-[#1A4B2E] text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Showcase Card */}
        <div className="rounded-3xl bg-white text-[#0A1616] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Left Visual Area */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#067547] to-[#082615] p-8 sm:p-12 flex flex-col justify-between relative min-h-[280px] text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E599]/15 rounded-full blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#00E599] text-xs font-bold w-fit">
              <span>{current.step}</span>
            </div>

            <div className="relative z-10 p-5 rounded-2xl bg-[#082615]/85 backdrop-blur-md border border-white/15 shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#00E599]/20 border border-[#00E599]/40 flex items-center justify-center text-[#00E599] shrink-0">
                <current.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">{current.graphicText}</div>
                <div className="text-xs text-[#00E599]">{current.graphicSub}</div>
              </div>
            </div>

            <div className="text-xs text-[#BDC8C5] pt-4">
              Official BTCL Licensed Registration Partner
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-md bg-[#E8F8F0] text-[#067547] text-xs font-bold uppercase tracking-wider">
                {current.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1616]">
                {current.title}
              </h3>
              <p className="text-sm sm:text-base text-[#0A1616] font-medium leading-relaxed">
                {current.description1}
              </p>
              <p className="text-sm sm:text-base text-[#556360] leading-relaxed">
                {current.description2}
              </p>
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2 pt-4">
              {cards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === activeTab ? "w-8 bg-[#067547]" : "w-2 bg-[#D1D5DB]"
                  }`}
                  aria-label={`Tab ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
