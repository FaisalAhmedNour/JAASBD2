"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServersCpanelCallout() {
  return (
    <section className="py-14 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-2xl space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-extrabold text-[#0A1616]">
              Looking for cPanel?
            </h3>
            <p className="text-sm sm:text-base text-[#556360] leading-relaxed">
              All our cloud servers run on the hosting.com panel, giving you a simple way to manage unlimited isolated websites and modern apps. Prefer standard cPanel/WHM? Head to our cPanel page to find the right plan for you.
            </p>
          </div>

          <div className="shrink-0">
            <Button
              asChild
              className="bg-[#082615] hover:bg-[#0E3D22] text-white font-bold px-6 py-5 rounded-xl shadow-sm"
            >
              <Link href="/hosting">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
