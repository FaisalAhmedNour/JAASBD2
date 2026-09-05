"use client";

import React from "react";

export function StatsSection() {
  const stats = [
    {
      value: "3 million+",
      title: "Websites Hosted",
      description: "Trusted worldwide for fast, secure, always-online hosting.",
    },
    {
      value: "99.9%",
      title: "Uptime Guaranteed",
      description: "Engineered with redundant power grids and automated failover.",
    },
    {
      value: "20x",
      title: "Faster Turbo Speed",
      description: "Powered by AMD EPYC silicon and PCIe Gen4 NVMe arrays.",
    },
  ];

  return (
    <section className="py-20 bg-[#F2F2ED] border-t border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1616] tracking-tight">
            The stats speak for themselves
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative pt-6">
              {/* Green divider line */}
              <div className="h-0.5 w-full bg-[#082615]/20 mb-6" />

              <div className="text-4xl sm:text-5xl font-black text-[#0A1616] tracking-tight mb-3">
                {stat.value}
              </div>

              <h4 className="text-base font-bold text-[#0A1616] mb-1">
                {stat.title}
              </h4>

              <p className="text-xs sm:text-sm text-[#6D7779] leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
