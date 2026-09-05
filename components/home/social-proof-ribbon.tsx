"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export function SocialProofRibbon() {
  return (
    <div className="py-8 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Text */}
          <div className="text-center lg:text-left">
            <p className="text-sm md:text-base font-bold text-[#0A1616]">
              Trusted by over 700,000 customers to power 3,000,000+ websites!
            </p>
          </div>

          {/* Right Review Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {/* Trustpilot */}
            <div className="flex items-center gap-3 bg-[#F9FAF8] px-4 py-2 rounded-xl border border-[#E5E7EB]">
              <div className="relative w-24 h-6">
                <Image
                  src="/assets/reviews/trustpilot-logo.svg"
                  alt="Trustpilot"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-left">
                <div className="flex items-center text-[#00E599]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#00E599] text-[#00E599]" />
                  ))}
                </div>
                <p className="text-[11px] font-semibold text-[#6D7779] mt-0.5">
                  <strong>4.8</strong> out of 5 (7,007 reviews)
                </p>
              </div>
            </div>

            {/* Google Reviews */}
            <div className="relative w-28 h-8 opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/assets/reviews/google-on-light-home.webp"
                alt="Google Reviews"
                fill
                className="object-contain"
              />
            </div>

            {/* HostAdvice */}
            <div className="relative w-28 h-8 opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/assets/reviews/hostadvice-review-2.webp"
                alt="HostAdvice"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
