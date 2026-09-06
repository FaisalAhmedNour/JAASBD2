"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronRight } from "lucide-react";

export function MigrationTrustStats() {
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

  const toggleReview = (idx: number) => {
    setExpandedReviews((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const reviews = [
    {
      author: "TJ Lily",
      preview:
        "I'm blown away by their support - goes above and beyond every single time. I just asked for clarification on something, and next minute Zunaid has off...",
      full:
        "I'm blown away by their support - goes above and beyond every single time. I just asked for clarification on something, and next minute Zunaid has moved our whole database and tested the SSL perfectly with zero downtime.",
    },
    {
      author: "Dilan",
      preview:
        "Just had a great experience cloning a WordPress site into a new domain. Mariela helped my client and me throughout the whole process with great care a...",
      full:
        "Just had a great experience cloning a WordPress site into a new domain. Mariela helped my client and me throughout the whole process with great care and swift response times.",
    },
    {
      author: "Allan Rousselle",
      preview:
        "I've had my internet domains (esp. my e-mail boxes and websites) hosted by hosting.com for a while. I moved to them several years ago because I can ge...",
      full:
        "I've had my internet domains (esp. my e-mail boxes and websites) hosted by hosting.com for a while. I moved to them several years ago because I can get actual humans on the line who know what they are doing.",
    },
    {
      author: "Chele Isaac",
      preview:
        "I needed to get an old, neglected Wordpress site active again; I was fearing the worst! I was moved from Bot to human in a reasonable amount of time, ...",
      full:
        "I needed to get an old, neglected Wordpress site active again; I was fearing the worst! I was moved from Bot to human in a reasonable amount of time, and the team fixed the entire migration in under two hours.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F9FAFB] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Stats & Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1616] tracking-tight leading-tight">
              Over 100,000 website migrations completed...
            </h2>

            <p className="text-base text-[#556360] leading-relaxed">
              We are many businesses&apos; second or third host — and almost always their last. Switching host is the part everyone dreads. It&apos;s the part we&apos;ve done more than any other. And our team does the work so you don&apos;t have to.
            </p>

            {/* 4 Metric Bullets */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E5E7EB] flex items-start gap-3 shadow-xs">
                <div className="text-xl font-extrabold text-[#067547] shrink-0 min-w-[90px]">
                  100,000+
                </div>
                <div className="text-xs sm:text-sm text-[#374151]">
                  <strong className="text-[#0A1616]">Migrations completed</strong> · From one-page blogs to complex multi-site setups
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5E7EB] flex items-start gap-3 shadow-xs">
                <div className="text-xl font-extrabold text-[#067547] shrink-0 min-w-[90px]">
                  4.8 / 5
                </div>
                <div className="text-xs sm:text-sm text-[#374151]">
                  <strong className="text-[#0A1616]">Rated on Trustpilot</strong> · 2,450+ verified customer reviews
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5E7EB] flex items-start gap-3 shadow-xs">
                <div className="text-xl font-extrabold text-[#067547] shrink-0 min-w-[90px]">
                  97%
                </div>
                <div className="text-xs sm:text-sm text-[#374151]">
                  <strong className="text-[#0A1616]">Customer satisfaction</strong> · Measured on every single support ticket
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E5E7EB] flex items-start gap-3 shadow-xs">
                <div className="text-xl font-extrabold text-[#067547] shrink-0 min-w-[90px]">
                  &lt; 1 min
                </div>
                <div className="text-xs sm:text-sm text-[#374151]">
                  <strong className="text-[#0A1616]">Average live-chat response</strong> · Real engineers, around the clock
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#6D7779] italic pt-2">
              The team that moves you is the same team that stays with you. We are 24/7/365 and in-house, from your first day to your busiest.
            </p>
          </div>

          {/* Right Column: 4 Real Review Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reviews.map((rev, idx) => {
              const isExpanded = expandedReviews[idx];
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-xs flex flex-col justify-between hover:shadow-md transition-all"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 text-[#00E599] mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#00E599] text-[#00E599]" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-xs text-[#4B5563] leading-relaxed">
                      {isExpanded ? rev.full : rev.preview}
                      {!isExpanded && (
                        <button
                          type="button"
                          onClick={() => toggleReview(idx)}
                          className="ml-1 text-[#067547] font-bold hover:underline cursor-pointer inline"
                        >
                          Show more
                        </button>
                      )}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F3F4F6] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0A1616]">{rev.author}</span>
                    <span className="text-[10px] text-[#9CA3AF] font-semibold">Verified Migration</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
