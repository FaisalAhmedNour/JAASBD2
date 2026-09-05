"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HostingHero() {
  const scrollToPlans = () => {
    const el = document.getElementById("plans");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#F2F2ED] relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <Image
          src="/assets/watermarks/hero-2.webp"
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
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-[#0A1616] leading-[1.15]">
              Fast, managed web hosting that grows with you
            </h1>

            <p className="text-base sm:text-lg text-[#556360] leading-relaxed max-w-2xl">
              Everything you need to get your business online and keep it growing: fast, secure and fully managed by us, honestly priced, and yours to scale from your first site to your own server. We&apos;ll even move you in for free.
            </p>

            {/* Checklist items */}
            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E8F8F0] text-[#067547] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm text-[#374151]">
                  <strong className="text-[#0A1616] font-bold">Fast for your visitors.</strong>{" "}
                  Quick-loading pages that keep people on your site
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E8F8F0] text-[#067547] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm text-[#374151]">
                  <strong className="text-[#0A1616] font-bold">Safe and handled.</strong>{" "}
                  Security, backups and updates taken care of, so you can focus on your business
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E8F8F0] text-[#067547] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm text-[#374151]">
                  <strong className="text-[#0A1616] font-bold">Support that shows up.</strong>{" "}
                  24/7/365 in-house experts, plus Orbi, our AI assistant
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E8F8F0] text-[#067547] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm text-[#374151]">
                  <strong className="text-[#0A1616] font-bold">Room to grow.</strong>{" "}
                  Move up any time with no downtime, all the way to your own server
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#E8F8F0] text-[#067547] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div className="text-sm text-[#374151]">
                  <strong className="text-[#0A1616] font-bold">Honest pricing.</strong>{" "}
                  Affordable rates, no hidden fees, no lock-ins or minimum terms
                </div>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button
                onClick={scrollToPlans}
                className="w-full sm:w-auto bg-[#082615] hover:bg-[#0E3D22] text-white font-bold px-8 py-6 rounded-xl text-base shadow-sm hover:shadow transition-all"
              >
                <span>See plans</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto bg-white hover:bg-[#F9FAFB] text-[#0A1616] border-[#D1D5DB] font-semibold px-7 py-6 rounded-xl text-base shadow-sm transition-all"
              >
                <Link href="#migration">Migrate my site free</Link>
              </Button>
            </div>
          </div>

          {/* Right Column (Hero Graphic) */}
          <div className="lg:col-span-5 mt-8 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <Image
                src="/assets/billboard/hosting-hero-new.webp"
                alt="Fast Web Hosting"
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
