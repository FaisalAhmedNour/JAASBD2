"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "How Bangladeshi Software Scaled with 20x Speeds",
    company: "BS Case Study",
    quote: "Switching to Turbo hosting reduced our application response times by 68% across all districts in Bangladesh.",
    author: "Shamsul Arefin",
    role: "Managing Director",
    image: "/assets/case_studies/11-bangladeshi-software.webp",
    logo: "/assets/reviews/bscase.png",
    tag: "Enterprise cPanel",
  },
  {
    title: "Rajit Solutions: Instant WordPress Checkout",
    company: "Rajit Solutions",
    quote: "LiteSpeed cache with NVMe storage resolved all our checkout delays during peak campaign seasons.",
    author: "Mahmud Hasan",
    role: "Head of Infrastructure",
    image: "/assets/case_studies/13-rajit-solutions.webp",
    logo: "/assets/reviews/shamimcase_bg_compressed.png",
    tag: "Business Boost",
  },
  {
    title: "UserSearch.org: Scaling High-Concurrency Queries",
    company: "UserSearch",
    quote: "The raw compute performance on AMD EPYC dedicated VPS servers is unmatched at this price point.",
    author: "Alex Turner",
    role: "Lead Architect",
    image: "/assets/case_studies/14-cube-creative-design.webp",
    logo: "/assets/reviews/usersearch-logo.png",
    tag: "Cloud VPS",
  },
];

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-[#082615] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-semibold text-[#00E599] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Customer Stories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Get to know our customers
            </h2>
            <p className="text-[#BDC8C5] text-sm sm:text-base max-w-xl leading-relaxed">
              Want to know the full story on our customers? Read their experiences with hosting.com and how we helped them scale.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-[#0D331E] border border-[#1A4B2E] flex items-center justify-center text-white hover:border-[#00E599] transition-all shadow-sm"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-[#0D331E] border border-[#1A4B2E] flex items-center justify-center text-white hover:border-[#00E599] transition-all shadow-sm"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-[#0D331E] border border-[#1A4B2E] overflow-hidden flex flex-col justify-between hover:border-[#00E599]/50 shadow-lg transition-all group"
            >
              <div className="relative h-48 w-full bg-[#082615] overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#082615]/85 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-[#00E599] border border-[#00E599]/30">
                  {study.tag}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#BDC8C5] italic leading-relaxed">
                    &ldquo;{study.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C3E2B] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{study.author}</div>
                    <div className="text-[11px] text-[#8E9F9A]">{study.role}, {study.company}</div>
                  </div>
                  <Link
                    href="/case-studies"
                    className="w-8 h-8 rounded-full bg-[#16472D] border border-[#225E3B] flex items-center justify-center text-[#00E599] group-hover:bg-[#00E599] group-hover:text-[#082615] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Meet Our Clients CTA Button */}
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white text-[#082615] hover:bg-[#F2F2ED] font-bold text-xs sm:text-sm px-7 py-3 shadow-md"
          >
            <Link href="/case-studies" className="inline-flex items-center gap-2">
              <span>Meet our clients</span>
              <span className="w-5 h-5 rounded-full bg-[#082615] text-[#00E599] flex items-center justify-center">
                <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
