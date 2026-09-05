"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight, ArrowRight, Quote } from "lucide-react";

const caseStudies = [
  {
    title: "How Bangladeshi Software Scaling on JAASBD",
    company: "BS Case Study",
    quote: "Switching to Turbo hosting reduced our application response times by 68% across all districts in Bangladesh.",
    author: "Shamsul Arefin",
    role: "Managing Director",
    image: "/assets/case_studies/11-bangladeshi-software.webp",
    logo: "/assets/reviews/bscase.png",
    tag: "Enterprise cPanel",
  },
  {
    title: "Rajit Solutions: Fast WordPress & E-Commerce",
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
    <section className="py-20 bg-[#F2F2ED] border-t border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3">
            <span className="text-xs sm:text-sm font-semibold text-[#067547] uppercase tracking-wider">
              Customer Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1616] tracking-tight">
              Get to know our customers
            </h2>
            <p className="text-[#6D7779] text-sm sm:text-base max-w-xl">
              Want to know the full story on our customers? Read their experiences with hosting.com and how we helped them scale.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white border border-[#D1D5DB] flex items-center justify-center text-[#0A1616] hover:border-[#082615] transition-all shadow-sm"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white border border-[#D1D5DB] flex items-center justify-center text-[#0A1616] hover:border-[#082615] transition-all shadow-sm"
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
              className="rounded-3xl bg-white border border-[#DFE3E1] overflow-hidden flex flex-col justify-between hover:border-[#9CA3AF] shadow-sm transition-all group"
            >
              <div className="relative h-48 w-full bg-[#E5E7EB]">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-[#067547]">
                  {study.tag}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-[#0A1616] mb-2 leading-snug">
                    {study.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4B5563] italic leading-relaxed">
                    &ldquo;{study.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F3F4F6] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#0A1616]">{study.author}</div>
                    <div className="text-[11px] text-[#6D7779]">{study.role}, {study.company}</div>
                  </div>
                  <Link
                    href="/case-studies"
                    className="w-8 h-8 rounded-full bg-[#F9FAF8] border border-[#E5E7EB] flex items-center justify-center text-[#0A1616] group-hover:bg-[#082615] group-hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
