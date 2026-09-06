"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, TrendingUp, ShieldCheck, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BdDomainsWhyChoose() {
  const points = [
    "Showcase your authentic Bangladesh presence",
    "Build local customer trust and national credibility",
    "Improve local SEO ranking on google.com.bd",
    "Tailor-made for companies and organizations in Bangladesh",
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F2F2ED] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Why Choose Copy */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1616] tracking-tight">
              Why choose a .bd domain?
            </h2>

            <p className="text-base text-[#556360] leading-relaxed">
              A .bd domain shows clearly who &amp; where you are. It tells customers you&apos;re local, authentic, and here to stay. If your business addresses audiences in Bangladesh, a .bd or .com.bd domain is essential.
            </p>

            <div className="space-y-3 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#374151] font-medium">
                  <div className="w-5 h-5 rounded-full bg-[#E8F8F0] border border-[#00E599]/50 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#067547]" />
                  </div>
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-[#6D7779] pt-2">
              Ready to secure your branded domain? Search for your ideal .bd domain and register in minutes.
            </p>

            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="bg-[#082615] hover:bg-[#0d3b21] text-white font-bold rounded-xl px-7 py-6 shadow-sm group"
              >
                <Link href="#search">
                  <span>Search domains</span>
                  <div className="w-6 h-6 rounded-md bg-[#00E599] flex items-center justify-center ml-3 text-[#082615]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Bangladesh Analytics Visual Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#9BE7C4] via-[#74D6AA] to-[#45BA8B] shadow-xl overflow-hidden flex items-center justify-center">
              {/* Floating Dark Glassmorphism Performance Card */}
              <div className="w-full max-w-sm rounded-2xl bg-[#0A1616]/95 border border-white/20 p-6 shadow-2xl space-y-6 text-white backdrop-blur-md">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#00E599] animate-pulse" />
                    <span className="text-xs font-bold text-white tracking-wide">Domain Network BD</span>
                  </div>
                  <span className="text-[10px] text-[#00E599] bg-[#00E599]/15 px-2 py-0.5 rounded-full font-bold">
                    Active
                  </span>
                </div>

                {/* Metric 1 */}
                <div className="space-y-1">
                  <div className="text-[11px] text-[#8E9F9A] uppercase tracking-wider font-semibold">
                    Traffic &amp; Routing
                  </div>
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl font-black text-white">99.98%</span>
                    <span className="text-xs font-bold text-[#00E599] flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Local Fast Anycast
                    </span>
                  </div>
                </div>

                {/* Country Flag & Geo Details */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Image
                        src="/assets/flags/bd.svg"
                        alt="Bangladesh"
                        width={18}
                        height={18}
                        className="object-contain"
                      />
                      <span className="text-xs font-bold text-white">Bangladesh</span>
                    </div>
                    <div className="text-[10px] text-[#8E9F9A]">ccTLD .bd / .com.bd</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <div className="text-xs font-bold text-white flex items-center gap-1">
                      <Activity className="w-3.5 h-3.5 text-[#00E599]" />
                      <span>&lt; 5ms</span>
                    </div>
                    <div className="text-[10px] text-[#8E9F9A]">Local Dhaka Latency</div>
                  </div>
                </div>

                {/* Bottom SLA guarantee */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-[#8E9F9A]">
                  <span>24/7/365 DNS Resolution</span>
                  <span className="text-[#00E599] font-bold">100% Up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
