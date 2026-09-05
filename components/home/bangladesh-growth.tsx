"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

export function BangladeshGrowth() {
  return (
    <section className="py-20 bg-white border-b border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs sm:text-sm font-semibold text-[#067547] uppercase tracking-wider">
            Bangladesh Growth Story
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1616] tracking-tight">
            We are proud to be part of Bangladesh&apos;s digital growth story
          </h2>
          <p className="text-[#6D7779] text-sm sm:text-base leading-relaxed">
            Tailored for creators, trusted by agencies and built to scale with enterprises. No matter who you are, we&apos;re here to help you grow online.
          </p>
        </div>

        {/* 3 Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Launch Event */}
          <div className="rounded-3xl border border-[#DFE3E1] bg-[#F9FAF8] overflow-hidden flex flex-col justify-between hover:border-[#9CA3AF] shadow-sm transition-all group">
            <div className="relative h-56 w-full bg-[#E5E7EB]">
              <Image
                src="/assets/features/bangladesh-launch-event.jpeg"
                alt="Celebrating Launch in Bangladesh"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#0A1616] mb-2">
                  Celebrating Launch in Bangladesh
                </h3>
                <p className="text-xs sm:text-sm text-[#6D7779] leading-relaxed">
                  Thank you to everyone who joined us. Take a look back at our official launch event in Dhaka and our vision for high-speed local hosting.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center text-xs font-bold text-[#067547] hover:underline"
              >
                <span>Read launch recap</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Card 2: Our Story */}
          <div className="rounded-3xl border border-[#DFE3E1] bg-[#F9FAF8] overflow-hidden flex flex-col justify-between hover:border-[#9CA3AF] shadow-sm transition-all group">
            <div className="relative h-56 w-full bg-[#E5E7EB]">
              <Image
                src="/assets/features/our-story.jpg"
                alt="Our Story"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-[#0A1616] mb-2">
                  Our Story
                </h3>
                <p className="text-xs sm:text-sm text-[#6D7779] leading-relaxed">
                  From the foundations of local tech teams in Dhaka, read about how we started and built trust with thousands of clients nationwide.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center text-xs font-bold text-[#067547] hover:underline"
              >
                <span>Discover our journey</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

          {/* Card 3: Meet Us */}
          <div className="rounded-3xl border border-[#DFE3E1] bg-[#F9FAF8] overflow-hidden flex flex-col justify-between hover:border-[#9CA3AF] shadow-sm transition-all group p-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8F0] border border-[#00E599]/40 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#067547]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1616]">
                Meet Us in Dhaka
              </h3>
              <p className="text-xs sm:text-sm text-[#6D7779] leading-relaxed">
                Visit our local office and discuss your web hosting, custom server setups, and business growth face-to-face with our technical experts.
              </p>
              <div className="p-4 rounded-xl bg-white border border-[#E5E7EB] text-xs text-[#0A1616] space-y-1">
                <div className="font-bold">Dhaka Office</div>
                <div className="text-[#6D7779]">Gulshan / Banani, Dhaka, Bangladesh</div>
                <div className="text-[#067547] font-semibold pt-1">Hotline: +880 9614-101010</div>
              </div>
            </div>

            <Link
              href="/about/contact"
              className="inline-flex items-center text-xs font-bold text-[#067547] hover:underline pt-4"
            >
              <span>Schedule an appointment</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
