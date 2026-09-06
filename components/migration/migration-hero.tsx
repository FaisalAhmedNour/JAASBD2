"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MigrationHero() {
  const highlights = [
    "100% free, no catch",
    "Managed end-to-end",
    "Tested before it goes live",
    "Your site stays online throughout",
  ];

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#F2F2ED] border-b border-[#E5E7EB] overflow-hidden">
      {/* Subtle Background Watermark */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/assets/watermarks/background_light_06.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00E599] text-[#0A1616] text-xs sm:text-sm font-bold shadow-sm mb-6">
          <Sparkles className="w-4 h-4 text-[#0A1616]" />
          <span>Migrate your site</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0A1616] tracking-tight leading-[1.12] mb-6">
          Free website migration. Move once. Grow forever.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl text-[#556360] max-w-3xl mx-auto leading-relaxed mb-8">
          Our team moves your site, email and domains for free — you don&apos;t touch a thing, and nothing goes offline. Then you&apos;re on a platform built to scale from your first visitor to your millionth.
        </p>

        {/* Checkpoints */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-10 text-xs sm:text-sm font-bold text-[#0A1616]">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#E8F8F0] border border-[#00E599]/50 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-[#067547]" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="xl"
            className="w-full sm:w-auto bg-[#082615] hover:bg-[#0d3b21] text-white font-bold rounded-xl px-8 py-6 shadow-md"
          >
            <Link href="/hosting#plans">
              <span>See Plans</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>

          <Button
            asChild
            size="xl"
            variant="outline"
            className="w-full sm:w-auto bg-white hover:bg-[#F9FAFB] text-[#0A1616] border-[#D1D5DB] font-bold rounded-xl px-8 py-6 shadow-sm"
          >
            <Link href="/about/contact">
              <MessageSquare className="w-4 h-4 mr-2 text-[#067547]" />
              <span>Chat to our migration team</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
