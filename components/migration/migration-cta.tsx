"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MigrationCta() {
  return (
    <section className="py-20 bg-[#F2F2ED] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-14 bg-[#082615] border border-[#16472D] shadow-2xl text-center space-y-6 text-white">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#00E599]/15 text-[#00E599] text-xs font-bold border border-[#00E599]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for effortless hosting?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-2xl mx-auto">
            Free website migration. Move once. Grow forever.
          </h2>

          <p className="text-[#BDC8C5] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Tell us where your site lives now and our team takes it from there: website, email, domains, the lot. Nothing goes offline, nothing lands on you, and you&apos;re on a platform you won&apos;t outgrow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="xl"
              className="w-full sm:w-auto text-base bg-[#00E599] hover:bg-[#00C885] text-[#082615] font-bold shadow-lg"
            >
              <Link href="/hosting#plans">
                <span>Compare Plans</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              size="xl"
              variant="outline"
              className="w-full sm:w-auto text-base bg-transparent border-[#4E6B5D] text-white hover:bg-white/10"
            >
              <Link href="/about/contact">
                <MessageSquare className="w-4 h-4 mr-2" />
                <span>Chat to our migration team</span>
              </Link>
            </Button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#8E9F9A]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00E599]" />
              30-Day Money-Back Guarantee
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00E599]" />
              100% Free With Any Plan
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00E599]" />
              24/7/365 Concierge Support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
