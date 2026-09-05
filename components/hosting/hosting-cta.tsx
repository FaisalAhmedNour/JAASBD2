"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, ShieldCheck, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HostingCta() {
  const scrollToPlans = () => {
    const el = document.getElementById("plans");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#082615] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Subtle Glow Overlay */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00E599]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mb-6 border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00E599]" />
              Risk-Free 30-Day Money-Back Guarantee
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to get started? Launch your fast hosting today.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#A3B8B0] leading-relaxed max-w-2xl">
              Join over 700,000 customers powering their online presence with 20x faster page loads, 24/7 human support, and free zero-downtime migration.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Button
                onClick={scrollToPlans}
                className="w-full sm:w-auto bg-[#00E599] hover:bg-[#00C885] text-[#0A1616] font-bold px-8 py-6 rounded-xl text-base shadow-sm transition-all"
              >
                <span>Choose a Plan</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border-white/30 font-semibold px-7 py-6 rounded-xl text-base transition-all"
              >
                <Link href="/about/contact">
                  <MessageSquare className="w-4 h-4 mr-2 text-[#00E599]" />
                  <span>Talk to an Expert</span>
                </Link>
              </Button>
            </div>

            {/* Micro guarantees */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#A3B8B0]">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#00E599]" />
                <span>Instant Account Setup</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#00E599]" />
                <span>Free Migration Handled For You</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#00E599]" />
                <span>No Lock-In Contracts</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
