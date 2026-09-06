"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MigrationGuarantees() {
  const guarantees = [
    {
      title: "Free migration, every plan",
      desc: "Our team does the work whatever tier you're on — starter to enterprise.",
    },
    {
      title: "Free SSL certificates",
      desc: "Your padlock is auto-provisioned and auto-renewing, with zero extra fee.",
    },
    {
      title: "99.9% uptime SLA guarantee",
      desc: "A written SLA commitment ensuring your sites stay available 24/7/365.",
    },
    {
      title: "Always-on active malware shield",
      desc: "Real-time Monarx protection scanning every upload and script automatically.",
    },
    {
      title: "30-day money-back guarantee",
      desc: "Not 100% delighted after the migration? Full unconditional refund.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F2F2ED] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Guarantees List */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1616] tracking-tight leading-tight">
              Whichever plan you pick, the move is on us.
            </h2>

            <p className="text-sm sm:text-base text-[#556360] leading-relaxed">
              The free migration applies to every plan — no setup fee, no per-site charge, no surprise at the end. You choose the plan that fits your site; our team handles the move either way.
            </p>

            <div className="space-y-3.5 pt-2">
              {guarantees.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#067547] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-xs sm:text-sm font-bold text-[#0A1616] block">
                      {item.title}
                    </strong>
                    <span className="text-xs text-[#556360]">
                      {item.desc}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[#082615] hover:bg-[#0d3b21] text-white font-bold rounded-xl px-6 py-5 shadow-sm"
              >
                <Link href="/hosting#plans">
                  <span>Compare plans</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Graphic Image */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-[#DFE3E1] shadow-xl bg-white">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/assets/juxtapose/migration-image-for-free.webp"
                  alt="Whichever plan you pick, the move is on us."
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
