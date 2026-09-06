"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface ValueItem {
  icon: string;
  title: string;
  tagline: string;
  quote: string;
  author: string;
}

const VALUES: ValueItem[] = [
  {
    icon: "/assets/features/trust.svg",
    title: "Be trusted.",
    tagline: "We’re open, honest, and clear. Always.",
    quote:
      "When I think about the work I do for our customers, my goal is for them to feel genuinely supported, valued, and confident in their decision to work with us. I want them to experience more than just a product or service, I want them to feel a true partnership built on trust, quality, and care.",
    author: "Shiva Kumar, Sales Manager",
  },
  {
    icon: "/assets/features/pragmatic.svg",
    title: "Be pragmatic.",
    tagline: "Real problems, real solutions, no fluff.",
    quote:
      "From an early age, I’ve always been driven by a need to understand how things work, to get to the root of a problem and find the most effective solution. What I love about my work is that it constantly challenges me with diverse issues to solve.",
    author: "Lukasz Mai Van, Senior Systems Administrator",
  },
  {
    icon: "/assets/features/energy.svg",
    title: "Be energetic.",
    tagline: "Passion, purpose, and a bit of fun.",
    quote:
      "What makes this journey even more meaningful is the incredible team I work with. Our shared enthusiasm and positive spirit, especially during challenges, make every day rewarding!",
    author: "Anton Moskov, Live Chat Support Representative",
  },
  {
    icon: "/assets/features/respect.svg",
    title: "Be respectful.",
    tagline: "Dignity, fairness, and honesty come first.",
    quote:
      "I love what I do because it allows me to help others move forward and reach their goals. There’s real joy in being able to assist our customers and colleagues... More than anything, I hope our customers walk away with the confidence that they can count on us. That they feel supported, understood, and genuinely cared for.",
    author: "Mario Stanev, VIP Team Supervisor",
  },
  {
    icon: "/assets/features/accountable.svg",
    title: "Be accountable.",
    tagline: "Own it. Fix it. Learn. Grow.",
    quote:
      "I’ve been working in Customer Care for the past 7 months, and what I love the most about what I do is solving complex problems... I do my best to support anyone who needs a hand, no matter what it is... I think my teammates nominated me because I’m always ready to jump in and help.",
    author: "Camilo Rios",
  },
  {
    icon: "/assets/features/account-migration.svg",
    title: "Be innovative.",
    tagline: "Challenging standards. Going beyond.",
    quote:
      "I love that we don't just 'land' in a new market; we use local statistics and insights to innovate, ensuring all of our hosting solutions are as authentically local as the entrepreneurs who use them.",
    author: "Asad Polash, Sr. Organic Growth Strategist",
  },
];

export function AboutValues() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.75;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#081e12] text-white py-16 lg:py-24 overflow-hidden relative isolate">
      <div className="container mx-auto px-siteContainer">
        {/* Header with Title and Nav Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="mb-3">
              <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border border-white/30 text-emerald-300">
                How we work
              </span>
            </div>
            <h2 className="font-display text-white text-3xl sm:text-4xl font-bold tracking-tight mb-3">
              These aren’t words on a wall.
            </h2>
            <p className="font-body text-white/80 text-base sm:text-lg">
              This is how we show up every day, in every interaction. Be trusted.
            </p>
          </div>

          {/* Slider Buttons */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous values"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-colors"
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
              aria-label="Next values"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-colors"
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

        {/* Scrollable Horizontal Values Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {VALUES.map((val, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[280px] sm:w-[340px] md:w-[380px] bg-white text-slate-900 rounded-2xl p-7 flex flex-col justify-between shadow-lg"
            >
              <div>
                <div className="mb-6">
                  <img
                    src={val.icon}
                    alt={val.title}
                    width={56}
                    height={56}
                    className="w-auto h-14"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-2">
                  <span>{val.title}</span>{" "}
                  <span className="font-normal text-slate-600 block text-base mt-1">
                    {val.tagline}
                  </span>
                </h3>
                <p className="font-body text-slate-600 text-sm leading-relaxed mt-4">
                  &ldquo;{val.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <p className="font-display font-semibold text-xs text-slate-900">
                  {val.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
