"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { ArrowRight, CheckCircle2, Server, Shield, Layers, Globe, Star, Sparkles } from "lucide-react";

export function HeroSection() {
  const quickCards = [
    {
      title: "Web hosting",
      description: "Your first site or a growing small business",
      href: "/hosting",
      icon: Server,
    },
    {
      title: "Managed servers",
      description: "Dedicated resources, still fully managed",
      href: "/hosting/vps-hosting",
      icon: Layers,
    },
    {
      title: "Reseller Accounts",
      description: "Run your own white-label hosting",
      href: "/hosting/cpanel-reseller-hosting",
      icon: Shield,
    },
    {
      title: "Domain Names",
      description: "Register a .com or .bd domain today",
      href: "/domains",
      icon: Globe,
    },
  ];

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 bg-[#F2F2ED] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Promo Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFE3E1] text-xs sm:text-sm font-semibold text-[#0A1616] shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#00E599]" />
            <Sparkles className="w-3.5 h-3.5 text-[#067547]" />
            <span>Special Bangladesh Launch Offer — Up to 75% Off + Free Domain</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A1616] leading-[1.12]">
            The hosting platform for growth in Bangladesh
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#6D7779] max-w-2xl mx-auto leading-relaxed">
            Websites, WordPress, servers and domains, all fully managed on one platform. Start where you are today, and step up without ever switching host.
          </p>

          {/* Trust Highlights Checklist */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 text-xs sm:text-sm text-[#0A1616] font-semibold">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#067547]" />
              <span>Free managed migration</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#067547]" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#067547]" />
              <span>24/7 in-house support</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#067547]" />
              <span>Bangladeshi office</span>
            </div>
          </div>
        </div>

        {/* 4 Billboard Quick Cards (1:1 hosting.com billboard features) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {quickCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={idx}
                href={card.href}
                className="group block p-6 rounded-2xl bg-white border border-[#DFE3E1] hover:border-[#00E599] hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-[#0A1616] group-hover:text-[#067547] transition-colors">
                    {card.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-[#6D7779] group-hover:text-[#067547] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs sm:text-sm text-[#6D7779] leading-snug">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
