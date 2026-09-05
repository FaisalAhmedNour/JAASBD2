"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HostingMigration() {
  return (
    <section id="migration" className="py-16 lg:py-24 bg-white border-b border-[#E5E7EB] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A1616] leading-tight">
              We&apos;ll move you in for free
            </h2>

            <p className="text-base text-[#556360] leading-relaxed">
              Switching shouldn&apos;t be hard, so we do it for you. Our in-house team migrates your sites, emails and domains free of charge — unlimited sites, no per-move fee. On cPanel we move you with a quick backup and restore; on anything else we do it manually and tell you exactly what we need. One-off or bulk, staggered to your schedule, with zero downtime wherever possible.
            </p>

            <p className="text-base text-[#556360] leading-relaxed">
              Preview your site on a test URL and confirm it works before it goes live. Your logins are preserved, and if you would rather not touch it, our team does the whole move for you.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Button
                asChild
                className="bg-[#082615] hover:bg-[#0E3D22] text-white font-bold px-7 py-5 rounded-xl shadow-sm"
              >
                <Link href="/hosting/free-website-migration">
                  <span>Migrate my site free</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="pt-4 border-t border-[#F3F4F6] text-xs sm:text-sm text-[#6B7280] leading-relaxed">
              Moving in is free — and so is moving up. When you outgrow shared, the same team steps you onto a managed server of your own. You never re-platform, and you&apos;re never doing it alone.
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-[#F9FAFB] border border-[#E5E7EB] p-4 shadow-sm">
              <div className="relative w-full h-[320px] sm:h-[400px]">
                <Image
                  src="/assets/juxtapose/we'll-migrate-your-sites.webp"
                  alt="We'll migrate your sites for free"
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
