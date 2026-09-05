"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Server, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServersHero() {
  const scrollToPlans = () => {
    const el = document.getElementById("plans");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#F2F2ED] relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <Image
          src="/assets/watermarks/background_light_06.jpg"
          alt="Watermark"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 lg:gap-8 xl:gap-12 items-center py-12 lg:py-20">
          {/* Left Column (Hero Text & Checklist) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-xs font-semibold text-[#067547] shadow-sm">
              <Server className="w-3.5 h-3.5 text-[#067547]" />
              <span>Managed Web Servers</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-[#0A1616] leading-[1.15]">
              Fully managed servers. More speed, more power and more room to grow.
            </h1>

            <p className="text-base sm:text-lg text-[#556360] leading-relaxed max-w-2xl">
              A fully managed server gives your site the speed and space a web hosting plan can&apos;t, and we run every part of it for you.
            </p>

            {/* Checklist items */}
            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E8F8F0] text-[#067547] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm text-[#374151]">
                  <strong className="text-[#0A1616] font-bold">Fast NVMe storage and LiteSpeed</strong>, so pages load quickly out of the box.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E8F8F0] text-[#067547] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm text-[#374151]">
                  <strong className="text-[#0A1616] font-bold">Runs WordPress and every common site type</strong>, natively.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E8F8F0] text-[#067547] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm text-[#374151]">
                  <strong className="text-[#0A1616] font-bold">99.95% uptime guaranteed</strong>, backed by an SLA and a 30-day money-back guarantee.
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E8F8F0] text-[#067547] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm text-[#374151]">
                  <strong className="text-[#0A1616] font-bold">Honest pricing</strong>, with no lock-in.
                </div>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button
                onClick={scrollToPlans}
                className="w-full sm:w-auto bg-[#082615] hover:bg-[#0E3D22] text-white font-bold px-8 py-6 rounded-xl text-base shadow-sm hover:shadow transition-all"
              >
                <span>See Plans</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto bg-white hover:bg-[#F9FAFB] text-[#0A1616] border-[#D1D5DB] font-semibold px-7 py-6 rounded-xl text-base shadow-sm transition-all"
              >
                <Link href="/about/contact">
                  <MessageSquare className="w-4 h-4 mr-2 text-[#067547]" />
                  <span>Talk to an Expert</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column (Hero Graphic) */}
          <div className="lg:col-span-5 mt-8 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <Image
                src="/assets/billboard/vps-hosting.webp"
                alt="Managed Cloud Servers"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
