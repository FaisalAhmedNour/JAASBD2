"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export function MigrationTeamQuote() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#082615] text-white overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Quote Content */}
          <div className="lg:col-span-8 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
            <Quote className="w-10 h-10 text-[#00E599] mb-6 opacity-80" />

            <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-white leading-relaxed mb-8">
              &ldquo;Most people arrive dreading this — they&apos;ve heard the horror stories. My team&apos;s whole job is to make sure you never feel any of it. We do the work, we test everything, and nothing goes live until you&apos;ve seen it and said yes. You really don&apos;t touch a thing.&rdquo;
            </blockquote>

            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00E599]" />
              <div>
                <div className="font-bold text-white text-base">Nicky Penev</div>
                <div className="text-xs text-[#00E599] font-medium">Migrations Team Lead</div>
              </div>
            </div>
          </div>

          {/* Team Lead Image */}
          <div className="lg:col-span-4 relative min-h-[300px] lg:min-h-full bg-[#051A0E]">
            <Image
              src="/assets/reviews/nice-case-2.webp"
              alt="Nicky Penev - Migrations Team Lead"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
