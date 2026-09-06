import React from "react";
import Image from "next/image";

export function AboutStats() {
  const stats = [
    {
      value: "3M+",
      label: "Websites Hosted",
    },
    {
      value: "10",
      label: "Locations around the world",
    },
    {
      value: "800+",
      label: "Humans behind the scenes",
    },
  ];

  return (
    <section className="relative overflow-hidden isolate py-16 lg:py-24 bg-gradient-to-r from-[#008f51] via-[#00a859] to-[#00b05b] text-white">
      {/* Background Graphic Watermark */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40 mix-blend-overlay">
        <img
          src="/assets/watermarks/banner-background.webp"
          alt=""
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-siteContainer">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center ${
                idx > 0 ? "pt-8 md:pt-0 md:pl-8" : "pb-8 md:pb-0"
              }`}
            >
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2 text-white">
                {stat.value}
              </div>
              <div className="font-body text-white/90 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
