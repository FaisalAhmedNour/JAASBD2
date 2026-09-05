"use client";

import React from "react";
import { Zap, ShieldCheck, Server, RefreshCw, Headphones, Lock, CheckCircle } from "lucide-react";

export function FeatureBento() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-block text-xs sm:text-sm font-semibold text-[#067547] uppercase tracking-wider">
            Engineered For Pure Performance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1616] tracking-tight">
            Why Our Servers Outperform Standard Hosting
          </h2>
          <p className="text-[#6D7779] text-sm sm:text-base leading-relaxed">
            We invest in enterprise AMD EPYC silicon, Gen4 PCIe NVMe arrays, and tuned LiteSpeed web engines so your business runs without bottlenecks.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: 20x Turbo Speed (Large 2-col) */}
          <div className="md:col-span-2 rounded-3xl p-8 bg-[#F9FAF8] border border-[#DFE3E1] shadow-sm relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F8F0] border border-[#00E599]/40 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-[#067547]" />
            </div>

            <h3 className="text-2xl font-extrabold text-[#0A1616] mb-3">
              Up to 20x Faster Page Loads
            </h3>
            <p className="text-[#4B5563] text-sm leading-relaxed mb-6">
              Faster sites convert more visitors and rank higher on Google. Our servers use LiteSpeed Web Server, HTTP/3, and QUIC protocols for instantaneous TTFB.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#E5E7EB] text-xs font-semibold text-[#0A1616]">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#067547]" />
                <span>40% Lower TTFB</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#067547]" />
                <span>3x More Requests/sec</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#067547]" />
                <span>Built-in LSCache</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#067547]" />
                <span>HTTP/3 & QUIC Enabled</span>
              </div>
            </div>
          </div>

          {/* Card 2: Enterprise NVMe SSD */}
          <div className="rounded-3xl p-8 bg-[#F9FAF8] border border-[#DFE3E1] flex flex-col justify-between hover:border-[#9CA3AF] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8F0] border border-[#00E599]/40 flex items-center justify-center mb-6">
                <Server className="w-6 h-6 text-[#067547]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1616] mb-2">
                100% NVMe Storage
              </h3>
              <p className="text-[#6D7779] text-xs sm:text-sm leading-relaxed">
                7x faster read/write speeds than regular SATA SSDs, ensuring blazing database queries.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-xs font-bold text-[#067547]">
              PCIe Gen4 Architecture →
            </div>
          </div>

          {/* Card 3: Free 0-Downtime Migration */}
          <div className="rounded-3xl p-8 bg-[#F9FAF8] border border-[#DFE3E1] flex flex-col justify-between hover:border-[#9CA3AF] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8F0] border border-[#00E599]/40 flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6 text-[#067547]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1616] mb-2">
                Free Expert Migration
              </h3>
              <p className="text-[#6D7779] text-xs sm:text-sm leading-relaxed">
                Moving from another host? Our migration engineers transfer everything with zero downtime.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-xs font-bold text-[#067547]">
              100% Free Service →
            </div>
          </div>

          {/* Card 4: 99.9% Uptime SLA */}
          <div className="rounded-3xl p-8 bg-[#F9FAF8] border border-[#DFE3E1] flex flex-col justify-between hover:border-[#9CA3AF] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8F0] border border-[#00E599]/40 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-[#067547]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1616] mb-2">
                99.9% Uptime SLA
              </h3>
              <p className="text-[#6D7779] text-xs sm:text-sm leading-relaxed">
                Redundant power grids, Tier-3 data center facilities, and automated hardware failover.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-xs font-bold text-[#067547]">
              Real-time Monitoring →
            </div>
          </div>

          {/* Card 5: Local 24/7/365 Support (Large 2-col) */}
          <div className="md:col-span-2 lg:col-span-2 rounded-3xl p-8 bg-[#F9FAF8] border border-[#DFE3E1] shadow-sm relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F8F0] border border-[#00E599]/40 flex items-center justify-center mb-6">
              <Headphones className="w-6 h-6 text-[#067547]" />
            </div>

            <h3 className="text-2xl font-extrabold text-[#0A1616] mb-3">
              24/7/365 Local Support in Bangladesh
            </h3>
            <p className="text-[#4B5563] text-sm leading-relaxed mb-6">
              Never wait hours for overseas replies. Our expert technical team is available 24/7 via Live Chat, phone hotline, and ticket system in both Bengali and English.
            </p>

            <div className="flex flex-wrap gap-3 text-xs font-semibold text-[#0A1616]">
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#DFE3E1] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00E599]" />
                Live Chat: &lt; 2 min response
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-[#DFE3E1] flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00E599]" />
                Ticket SLA: &lt; 15 mins
              </span>
            </div>
          </div>

          {/* Card 6: Free SSL & Malware Protection */}
          <div className="rounded-3xl p-8 bg-[#F9FAF8] border border-[#DFE3E1] flex flex-col justify-between hover:border-[#9CA3AF] transition-all">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E8F8F0] border border-[#00E599]/40 flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-[#067547]" />
              </div>
              <h3 className="text-xl font-bold text-[#0A1616] mb-2">
                Free SSL & Security
              </h3>
              <p className="text-[#6D7779] text-xs sm:text-sm leading-relaxed">
                Automated Let&apos;s Encrypt SSL certificates, DDoS shield, and real-time malware scanner.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E5E7EB] text-xs font-bold text-[#067547]">
              Always Protected →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
