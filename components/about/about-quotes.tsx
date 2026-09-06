"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface QuoteItem {
  image: string;
  name: string;
  role: string;
  company?: string;
  paragraphs: string[];
}

const QUOTES: QuoteItem[] = [
  {
    image: "/assets/case_studies/nikolay-ilchev-profile.jpeg",
    name: "Nikolay Ilchev",
    role: "Senior Systems Administrator",
    paragraphs: [
      "I’ve always enjoyed solving problems and building things that just work — especially when nobody notices, because that usually means everything is running smoothly. That’s what I love about infrastructure: it’s the invisible backbone, and I’m proud to play a big role in it. It constantly challenges you to think ahead, prevent issues before they happen, and improve how things are done. That’s what keeps me committed.",
      "What makes the culture here stand out to me is the willingness to support each other when it matters. You can count on people stepping up during pressure moments — no drama, just action. That kind of reliability builds real trust and fellowship.",
    ],
  },
  {
    image: "/assets/case_studies/unggul-kirindi.jpeg",
    name: "Unggul Kirindi",
    role: "Customer Care,",
    company: "Fixed.net",
    paragraphs: [
      "What inspires me most about my team is how we step up for each other. Whether it’s a late issue or a tricky case, someone always shows up with solutions and a good attitude.",
      "When I think about the work we do for customers, I hope they feel peace of mind, that we’ve got their back, and they can rely on us not just to respond, but to care.",
    ],
  },
  {
    image:
      "/assets/case_studies/screenshot-2025-11-21-at-11.19.35-(1)-min-(1)-(1).png",
    name: "Iva Krasteva",
    role: "Contract & Vendor Management Specialist,",
    company: "hosting.com",
    paragraphs: [
      "Ever since I started working here I've had the opportunity to collaborate with an amazing group of people across all of our departments and to support them in meaningful ways. I genuinely enjoy developing new skills and my role has given me the opportunity to grow professionally and learn along the way. From creating and maintaining detailed vendor catalogues to helping improve and develop new processes, the past 8 months have been a great learning experience. I've been lucky enough to be part of an amazing team and to have worked with awesome people who have supported and guided me along the way.",
    ],
  },
];

export function AboutQuotes() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.85;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-background relative border-b border-ribbonBorder py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-siteContainer">
        {/* Header with Title and Nav Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="mb-3">
              <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border border-current text-primary">
                Employee Quotes
              </span>
            </div>
            <h2 className="font-display text-heading text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              Listen to the people
            </h2>
            <p className="font-body text-content text-base sm:text-lg">
              With team members across the globe, here’s what some of them have to say.
            </p>
          </div>

          {/* Slider Buttons */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous quote"
              className="w-10 h-10 rounded-full border border-boxBorder bg-box hover:bg-slate-100 flex items-center justify-center text-heading transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next quote"
              className="w-10 h-10 rounded-full border border-boxBorder bg-box hover:bg-slate-100 flex items-center justify-center text-heading transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Carousel of Quotes */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {QUOTES.map((item, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[90vw] sm:w-[85vw] lg:w-[800px] xl:w-[920px] rounded-2xl overflow-hidden border border-boxBorder bg-box shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 xl:grid-cols-[38%_62%]"
            >
              {/* Employee Photo Column */}
              <div className="relative min-h-[260px] xl:min-h-[400px] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Employee Quote Details Column */}
              <div className="p-6 sm:p-8 xl:p-10 flex flex-col justify-between">
                <div className="space-y-4 font-body text-content text-sm sm:text-base leading-relaxed overflow-y-auto max-h-[300px] pr-2">
                  {item.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>&ldquo;{p}&rdquo;</p>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-sm font-display">
                  <strong className="text-heading font-bold">{item.name}</strong>
                  <span className="text-content opacity-75">, {item.role}</span>
                  {item.company && (
                    <span className="text-primary font-medium">
                      {item.company}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
