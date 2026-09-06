"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Users, Award, Radio } from "lucide-react";

export function BangladeshGrowth() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <section className="py-16 sm:py-24 bg-[#F2F2ED] border-b border-[#DFE3E1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1616] tracking-tight">
            We are proud to be part of Bangladesh&apos;s digital growth story
          </h2>
          <p className="text-[#6D7779] text-sm sm:text-base leading-relaxed">
            Powering thousands of local businesses, freelancers, startups, and agencies across Bangladesh.
          </p>

          {/* Interactive Filter Pills */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === "all"
                  ? "bg-[#082615] text-white shadow-sm"
                  : "bg-white border border-[#DFE3E1] text-[#4B5563] hover:border-[#082615]"
              }`}
            >
              • Our Story
            </button>
            <button
              onClick={() => setActiveTab("culture")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === "culture"
                  ? "bg-[#082615] text-white shadow-sm"
                  : "bg-white border border-[#DFE3E1] text-[#4B5563] hover:border-[#082615]"
              }`}
            >
              Culture
            </button>
            <button
              onClick={() => setActiveTab("media")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                activeTab === "media"
                  ? "bg-[#082615] text-white shadow-sm"
                  : "bg-white border border-[#DFE3E1] text-[#4B5563] hover:border-[#082615]"
              }`}
            >
              Media
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">
          {/* Left Large Bento Card (Spans 6 cols on desktop) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#082615] border border-[#16472D] overflow-hidden flex flex-col justify-between shadow-md group transition-all">
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <Image
                src="/assets/features/bangladesh-launch-event.jpeg"
                alt="Celebrating Launch in Bangladesh"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#082615]/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#00E599] flex items-center gap-1.5 border border-[#00E599]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Official Launch</span>
              </div>
            </div>

            <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between text-white space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00E599]">
                  <Award className="w-4 h-4" />
                  <span>Events & Sponsorships</span>
                </div>
                <h3 className="text-2xl font-bold tracking-tight text-white leading-snug">
                  Celebrating launch in Bangladesh
                </h3>
                <p className="text-xs sm:text-sm text-[#BDC8C5] leading-relaxed">
                  Thank you to everyone who joined us. Take a look back at our official launch event in Dhaka and our vision for high-speed local hosting infrastructure.
                </p>
              </div>

              <div className="pt-4 border-t border-[#1C3E2B]">
                <Link
                  href="/about"
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-[#00E599] hover:underline gap-1.5"
                >
                  <span>Read launch recap</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column Bento Cards (Spans 6 cols on desktop) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Right Top Split Card (Culture + Team Photo) */}
            <div className="rounded-3xl bg-[#082615] border border-[#16472D] overflow-hidden grid grid-cols-1 sm:grid-cols-2 shadow-md group">
              {/* Left Text */}
              <div className="p-6 sm:p-7 flex flex-col justify-between text-white space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#00E599]">
                    <Users className="w-4 h-4" />
                    <span>Culture</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Culture
                  </h3>
                  <p className="text-xs text-[#BDC8C5] leading-relaxed">
                    Driven by a passionate local team delivering 24/7 native Bangla & English support to businesses nationwide.
                  </p>
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center text-xs font-bold text-[#00E599] hover:underline gap-1 pt-2"
                >
                  <span>Our values</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right Office Photo */}
              <div className="relative h-48 sm:h-full min-h-[160px] w-full overflow-hidden">
                <Image
                  src="/assets/features/meet-us.jpg"
                  alt="Team meeting in Dhaka"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Bottom Card (Media) */}
            <div className="rounded-3xl bg-[#082615] border border-[#16472D] p-6 sm:p-7 text-white flex flex-col justify-between shadow-md group space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00E599]">
                  <Radio className="w-4 h-4" />
                  <span>Media</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Media
                </h3>
                <p className="text-xs sm:text-sm text-[#BDC8C5] leading-relaxed">
                  Read press releases, media coverage, and technical milestones of our Bangladesh expansion and tier-3 local cloud deployments.
                </p>
              </div>

              <div className="pt-2 border-t border-[#1C3E2B]">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-[#00E599] hover:underline gap-1.5"
                >
                  <span>Explore media & press</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
