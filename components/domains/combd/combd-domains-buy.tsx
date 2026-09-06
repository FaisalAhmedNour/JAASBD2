"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CombdDomainsBuy() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Floating Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#E5E7EB] bg-[#F9FAFB] shadow-xl aspect-[4/3]">
              <Image
                src="/assets/juxtapose/buy-a-.com-domain.webp"
                alt="Buy a .com.bd domain"
                fill
                className="object-cover"
              />

              {/* Floating Top Card */}
              <div className="absolute top-4 left-4 bg-[#082615]/90 backdrop-blur-md border border-[#16472D] rounded-xl p-3 shadow-lg flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00E599]" />
                <span className="text-xs font-bold text-white">Fast activated domain registration</span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-[#E5E7EB] rounded-2xl p-4 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F8F0] border border-[#00E599]/40 flex items-center justify-center text-[#067547]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0A1616]">.com.bd domain registered</div>
                    <div className="text-[11px] text-[#556360]">Official BTCL DNS propagation complete</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#067547] bg-[#E8F8F0] px-2.5 py-1 rounded-full">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Call to Action */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-semibold text-[#067547] uppercase tracking-wider">
                Bangladesh Commercial TLD
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1616] tracking-tight">
                Buy a .com.bd domain
              </h2>
            </div>

            <p className="text-base text-[#0A1616] font-medium leading-relaxed">
              Show your audience you&apos;re local with JAASBD. Quick to register. Easy to manage. Built for your audience.
            </p>

            <p className="text-sm text-[#556360] leading-relaxed">
              A .com.bd domain tells your customers and search engines you&apos;re a legitimate business in Bangladesh. Whether you&apos;re launching your first online store or expanding your corporate footprint, it signals trust, credibility, and local presence.
            </p>

            <p className="text-sm text-[#556360] leading-relaxed">
              From local startups to multinational enterprises, connect with your target market across Dhaka, Chittagong, Sylhet, and beyond.
            </p>

            <div className="pt-2">
              <Button
                asChild
                size="lg"
                className="bg-[#082615] hover:bg-[#0d3b21] text-white font-bold rounded-xl px-7 py-6 shadow-sm group cursor-pointer"
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
        </div>
      </div>
    </section>
  );
}
