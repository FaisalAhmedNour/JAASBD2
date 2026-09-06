"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Headphones, RefreshCw, Award, ArrowRight } from "lucide-react";

export function SupportBento() {
  return (
    <section className="py-20 bg-[#082615] text-white border-t border-[#16472D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs sm:text-sm font-semibold text-[#00E599] uppercase tracking-wider">
            Dedicated Customer Care
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            We always have your back
          </h2>
          <p className="text-[#BDC8C5] text-sm sm:text-base leading-relaxed">
            Whether it&apos;s tech support from our engineers or our sales team to find out our latest deals, we&apos;re always here for you.
          </p>
        </div>

        {/* 3 Contained Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: 24/7/365 Support */}
          <div className="p-8 rounded-3xl bg-[#0D331E] border border-[#1A4B2E] flex flex-col justify-between hover:border-[#00E599]/50 transition-all shadow-lg group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00E599]/15 border border-[#00E599]/30 flex items-center justify-center mb-6">
                <Headphones className="w-6 h-6 text-[#00E599]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Support team is available 24/7/365
              </h3>
              <p className="text-xs sm:text-sm text-[#BDC8C5] leading-relaxed mb-6">
                Connect in seconds via live chat, open a priority ticket, or call our direct hotline in Bangladesh.
              </p>
            </div>
            <Link
              href="/about/contact"
              className="inline-flex items-center text-xs font-bold text-[#00E599] hover:underline gap-1.5"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 2: Free Migration */}
          <div className="p-8 rounded-3xl bg-[#0D331E] border border-[#1A4B2E] flex flex-col justify-between hover:border-[#00E599]/50 transition-all shadow-lg group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00E599]/15 border border-[#00E599]/30 flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6 text-[#00E599]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Want to migrate your site?
              </h3>
              <p className="text-xs sm:text-sm text-[#BDC8C5] leading-relaxed mb-6">
                Our experts will transfer all your files, databases, and emails with zero downtime — completely free.
              </p>
            </div>
            <Link
              href="/hosting/free-website-migration"
              className="inline-flex items-center text-xs font-bold text-[#00E599] hover:underline gap-1.5"
            >
              <span>Request free migration</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Card 3: Awards & Recognition */}
          <div className="p-8 rounded-3xl bg-[#0D331E] border border-[#1A4B2E] flex flex-col justify-between hover:border-[#00E599]/50 transition-all shadow-lg group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#00E599]/15 border border-[#00E599]/30 flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-[#00E599]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Recognized for what we love doing
              </h3>
              <p className="text-xs sm:text-sm text-[#BDC8C5] leading-relaxed mb-4">
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
              className="inline-flex items-center text-xs font-bold text-[#00E599] hover:underline gap-1.5 mt-4"
            >
              <span>Read reviews & awards</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
