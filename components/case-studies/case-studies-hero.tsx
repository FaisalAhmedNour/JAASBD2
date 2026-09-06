import React from "react";
import Image from "next/image";

export function CaseStudiesHero() {
  return (
    <section className="bg-[#031a0d] text-white relative isolate overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-emerald-900/40">
      {/* Background Graphic Watermark */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40 mix-blend-overlay">
        <picture>
          <img
            src="/assets/watermarks/creo-background.webp"
            alt=""
            className="h-full w-full object-cover object-center"
            width={1920}
            height={500}
            loading="eager"
          />
        </picture>
      </div>

      <div className="container mx-auto px-siteContainer">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Green Brand Mark */}
            <div className="mb-4">
              <img
                src="/assets/intro/mark.webp"
                alt="hosting.com"
                width={56}
                height={56}
                className="w-auto h-14"
                loading="eager"
              />
            </div>

            <div className="mb-4">
              <h1 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                Welcome to our customer spotlight
              </h1>
            </div>

            <p className="font-body text-emerald-100/80 text-base sm:text-lg leading-relaxed max-w-xl">
              Explore our library of customer spotlights to see how global
              investigators, e-commerce giants, and creative agencies move past
              technical bottlenecks to achieve 100% stability and limitless scale.
            </p>
          </div>

          {/* Right Column: Hero Visual Photography */}
          <div className="lg:col-span-6 mt-8 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-emerald-800/40 shadow-2xl bg-[#041d0e]/60">
              <picture>
                <img
                  src="/assets/billboard/newsroom-hero.webp"
                  alt="Customer spotlights and case studies"
                  className="h-full w-full object-cover select-none"
                  width={752}
                  height={500}
                  loading="eager"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
