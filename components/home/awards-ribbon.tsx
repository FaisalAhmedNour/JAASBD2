"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AwardsRibbon() {
  return (
    <section className="py-20 bg-[#F2F2ED] border-t border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-[#DFE3E1] p-8 sm:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block text-xs sm:text-sm font-semibold text-[#067547] uppercase tracking-wider">
              Industry Recognition
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1616] tracking-tight leading-tight">
              Recognized for what we love doing
            </h2>

            <p className="text-sm sm:text-base text-[#6D7779] leading-relaxed">
              At hosting.com we don&apos;t do it for the trophies, but it&apos;s nice to be recognized for our speed, reliable 99.9% uptime, and 24/7/365 fanatical technical support.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2">
                <div className="flex text-[#00E599]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#00E599] text-[#00E599]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#0A1616]">4.8/5 Trustpilot Rating</span>
              </div>
              <span className="text-[#DFE3E1]">|</span>
              <span className="text-xs font-semibold text-[#6D7779]">Over 7,000+ Verified Reviews</span>
            </div>

            <div className="pt-2">
              <Button asChild className="bg-[#082615] hover:bg-[#0d3b21] text-white font-bold">
                <Link href="/about">
                  <span>Explore Our Accolades</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Badges Grid */}
          <div className="lg:col-span-5 bg-[#F9FAF8] rounded-2xl border border-[#E5E7EB] p-6 grid grid-cols-2 gap-6 items-center justify-items-center">
            <div className="relative w-28 h-12">
              <Image
                src="/assets/brands/pc-mag.webp"
                alt="PC Mag Choice"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-24 h-12">
              <Image
                src="/assets/brands/g2.webp"
                alt="G2 Leader"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-28 h-12">
              <Image
                src="/assets/brands/sourceforge.webp"
                alt="Sourceforge Community Choice"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-24 h-12">
              <Image
                src="/assets/brands/top.webp"
                alt="Top Hosting Provider"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
