"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Headphones, RefreshCw, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SupportBento() {
  return (
    <section className="py-20 bg-white border-t border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-semibold text-[#067547] uppercase tracking-wider">
            Dedicated Customer Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1616] tracking-tight">
            We always have your back
          </h2>
          <p className="text-[#6D7779] text-sm sm:text-base">
            Whether it&apos;s tech support from our engineers or our sales team to find out our latest deals, we&apos;re always here for you.
          </p>
        </div>

        {/* 3 Contained Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: 24/7/365 Support */}
          <div className="p-8 rounded-3xl bg-[#F9FAF8] border border-[#DFE3E1] flex flex-col justify-between hover:border-[#9CA3AF] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8F0] border border-[#00E599]/40 flex items-center justify-center mb-6">
                <Headphones className="w-6 h-6 text-[#067547]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1616] mb-2">
                Support team is available 24/7/365
              </h3>
              <p className="text-xs sm:text-sm text-[#6D7779] leading-relaxed mb-6">
                Connect in seconds via live chat, open a priority ticket, or call our direct hotline in Bangladesh.
              </p>
            </div>
            <Link
              href="/about/contact"
              className="inline-flex items-center text-xs font-bold text-[#067547] hover:underline"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          {/* Card 2: Free Migration */}
          <div className="p-8 rounded-3xl bg-[#F9FAF8] border border-[#DFE3E1] flex flex-col justify-between hover:border-[#9CA3AF] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8F0] border border-[#00E599]/40 flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6 text-[#067547]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1616] mb-2">
                Want to migrate your site?
              </h3>
              <p className="text-xs sm:text-sm text-[#6D7779] leading-relaxed mb-6">
                Our experts will transfer all your files, databases, and emails with zero downtime — completely free.
              </p>
            </div>
            <Link
              href="/hosting/free-website-migration"
              className="inline-flex items-center text-xs font-bold text-[#067547] hover:underline"
            >
              <span>Request free migration</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>

          {/* Card 3: Awards & Recognition */}
          <div className="p-8 rounded-3xl bg-[#F9FAF8] border border-[#DFE3E1] flex flex-col justify-between hover:border-[#9CA3AF] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8F0] border border-[#00E599]/40 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-[#067547]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1616] mb-2">
                Recognized for what we love doing
              </h3>
              <p className="text-xs sm:text-sm text-[#6D7779] leading-relaxed mb-4">
                Consistently rated 4.8/5 on Trustpilot and voted top web hosting provider by industry publications.
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-20 h-6">
                  <Image
                    src="/assets/brands/pc-mag.webp"
                    alt="PC Mag"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-16 h-6">
                  <Image
                    src="/assets/brands/g2.webp"
                    alt="G2"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center text-xs font-bold text-[#067547] hover:underline mt-4"
            >
              <span>Read reviews & awards</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
