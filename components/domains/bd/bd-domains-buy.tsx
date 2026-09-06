"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BdDomainsBuy() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image with Floating UI Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#E5E7EB] bg-[#F9FAFB] shadow-xl aspect-[4/3]">
              <Image
                src="/assets/juxtapose/buy-a-.com-domain.webp"
                alt="Buy a .bd domain with JAASBD"
                fill
                className="object-cover"
              />

              {/* Floating Top Card */}
              <div className="absolute top-4 left-4 bg-[#082615]/90 backdrop-blur-md border border-[#16472D] rounded-xl p-3 shadow-lg flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#00E599]" />
                <span className="text-xs font-bold text-white">.bd domain registered</span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-[#E5E7EB] rounded-2xl p-4 shadow-lg flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#E8F8F0] border border-[#00E599]/40 flex items-center justify-center text-[#067547]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0A1616]">Instant DNS Activation</div>
                    <div className="text-[11px] text-[#556360]">BTCL-compliant DNS records configured</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#067547] bg-[#E8F8F0] px-2.5 py-1 rounded-full">
                  Active
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-semibold text-[#067547] uppercase tracking-wider">
                Official Bangladesh TLD
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1616] tracking-tight">
                Buy a .bd domain
              </h2>
            </div>

            <p className="text-base text-[#556360] leading-relaxed">
              Secure your .bd domain with JAASBD. Quick to register. Simple to manage. Full control made easy.
            </p>

            <p className="text-sm text-[#556360] leading-relaxed">
              A .bd domain tells customers instantly where you are and who you&apos;re here to serve. Whether you&apos;re launching something new or simply upgrading your online identity, it&apos;s a clear signal of trust, credibility, and local presence.
            </p>

            <p className="text-sm text-[#556360] leading-relaxed">
              From startups to established companies, connect with your customer base locally in Bangladesh when it matters most.
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
        </div>
      </div>
    </section>
  );
}
