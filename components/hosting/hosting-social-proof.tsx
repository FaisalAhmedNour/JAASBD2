"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

export function HostingSocialProof() {
  return (
    <section className="py-8 lg:py-12 bg-[#F2F2ED] border-y border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h4 className="text-base sm:text-lg font-bold text-[#0A1616] mb-8">
          Trusted by over 700,000 customers to power 3,000,000+ websites!
        </h4>

        {/* 3 Review Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto items-center">
          {/* Trustpilot */}
          <Link
            href="https://www.trustpilot.com/review/hosting.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-[#E5E7EB] shadow-sm hover:shadow transition-shadow group"
          >
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-5 h-5 bg-[#00B67A] flex items-center justify-center text-white text-xs"
                >
                  <Star className="w-3.5 h-3.5 fill-white text-white" />
                </div>
              ))}
            </div>
            <div className="text-xs font-semibold text-[#0A1616]">
              Trustpilot <strong className="font-extrabold">4.8 / 5</strong>
              <span className="text-[#6B7280] font-normal ml-1">· 7,100 reviews</span>
            </div>
          </Link>

          {/* Google Reviews */}
          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-[#E5E7EB] shadow-sm">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />
              ))}
            </div>
            <div className="text-xs font-semibold text-[#0A1616]">
              Google Reviews <strong className="font-extrabold">4.9 / 5</strong>
              <span className="text-[#6B7280] font-normal ml-1">· Top Rated</span>
            </div>
          </div>

          {/* HostAdvice */}
          <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-[#E5E7EB] shadow-sm">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#067547] text-[#067547]" />
              ))}
            </div>
            <div className="text-xs font-semibold text-[#0A1616]">
              HostAdvice <strong className="font-extrabold">4.8 / 5</strong>
              <span className="text-[#6B7280] font-normal ml-1">· Excellent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
