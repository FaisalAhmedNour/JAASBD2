"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export function MigrationCaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);

  const stories = [
    {
      id: "silversurfers",
      image: "/assets/case_studies/ss.webp",
      badge: "They left a big-name host that kept letting them down. Five years on: zero downtime.",
      company: "Silversurfers",
      meta: "High-traffic UK community site · Switched from major global host",
      summary:
        "Silversurfers runs one of the UK's busiest community sites with massive daily audiences. Recurring downtime, sluggish performance and rising bills pushed them to move.",
      details:
        "They moved their whole operation to us. Five years on: zero downtime, faster load times under peak traffic, and roughly a fifth of what they were paying before. Our team did the full migration end-to-end.",
      bullets: [
        "0 downtime over 5+ years",
        "~5x lower infrastructure cost",
        "Significantly faster under peak load",
      ],
      link: "/case-studies",
      linkText: "Read Case Study",
    },
    {
      id: "axia",
      image: "/assets/case_studies/axia.webp",
      badge: "A security breach made them start over. They rebuilt somewhere safer.",
      company: "Axia Development",
      meta: "axia.ro · Real Estate & Property Development",
      summary:
        "When a phishing breach forced them to rebuild their website, security stopped being an afterthought. Juggling multiple fragmented providers created finger-pointing whenever issues arose.",
      details:
        "They moved to our managed platform with security, speed, and optimization in one unified place. Incidents dropped to zero, performance carried paid search spikes effortlessly, and the team was freed to focus on real estate.",
      bullets: [
        "Full Monarx & WAF malware shielding",
        "Managed speed & caching built-in",
        "Zero security incidents since migration",
      ],
      quote: "“…the security, performance, and confidence I need to run my business.” — Robert Ivan",
      link: "/case-studies",
      linkText: "Read Full Case Study",
    },
    {
      id: "cube-creative",
      image: "/assets/case_studies/cc.webp",
      badge: "They run 300+ client sites. Now they run them in one place.",
      company: "Cube Creative",
      meta: "Digital Agency · 300+ Active Client Websites",
      summary:
        "Cube Creative had client sites scattered across multiple hosting providers and shared reseller servers. Managing logins and diagnosing slowdowns had become overwhelming.",
      details:
        "They moved their entire portfolio of 300+ sites onto high-speed cloud VPS infrastructure. Full control over PHP versions, instant team support, and painless centralized administration.",
      bullets: [
        "300+ websites migrated with zero disruption",
        "Faster page speed across every client domain",
        "Room to scale the next 300 sites effortlessly",
      ],
      quote: "“Having a solid, reliable foundation supports everything we deliver for our clients.”",
      link: "/case-studies",
      linkText: "Read Agency Case Study",
    },
  ];

  const current = stories[activeIndex];

  return (
    <section className="py-16 lg:py-24 bg-[#082615] text-white border-b border-[#16472D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs sm:text-sm font-semibold text-[#00E599] uppercase tracking-wider">
              Proven Results
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Different reasons to switch. One reason to stay.
            </h2>
            <p className="text-sm sm:text-base text-[#9BA5A1] mt-3 leading-relaxed">
              A platform they&apos;d outgrown. A site that just kept getting bigger. A security breach. Businesses that came to us and found hosting they could grow on forever.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => setActiveIndex((prev) => (prev === 0 ? stories.length - 1 : prev - 1))}
              className="w-10 h-10 rounded-full border border-[#16472D] bg-[#0D331E] hover:bg-[#1A4B2E] text-white flex items-center justify-center transition-colors"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setActiveIndex((prev) => (prev === stories.length - 1 ? 0 : prev + 1))}
              className="w-10 h-10 rounded-full border border-[#16472D] bg-[#0D331E] hover:bg-[#1A4B2E] text-white flex items-center justify-center transition-colors"
              aria-label="Next story"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Featured Case Study Showcase Card */}
        <div className="rounded-3xl bg-[#0D331E] border border-[#1A4B2E] overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch transition-all duration-300">
          {/* Image */}
          <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-[#051A0E]">
            <Image
              src={current.image}
              alt={current.company}
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Body */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-[#16472D] border border-[#00E599]/30 px-3.5 py-1 text-xs font-semibold text-[#00E599]">
                {current.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {current.company}
              </h3>
              <p className="text-xs text-[#8E9F9A] font-medium">
                {current.meta}
              </p>

              <p className="text-sm text-[#BDC8C5] leading-relaxed">
                {current.details}
              </p>

              {current.quote && (
                <div className="p-4 rounded-xl bg-[#082615] border border-[#16472D] text-xs text-[#00E599] italic">
                  {current.quote}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {current.bullets.map((b, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-3 rounded-lg bg-[#082615]/80 border border-[#16472D] text-xs font-semibold text-white flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E599] shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#16472D] flex items-center justify-between">
              <Link
                href={current.link}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00E599] hover:underline"
              >
                <span>{current.linkText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="flex items-center gap-1.5">
                {stories.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveIndex(dotIdx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      dotIdx === activeIndex ? "bg-[#00E599] w-6" : "bg-[#16472D]"
                    }`}
                    aria-label={`Slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
