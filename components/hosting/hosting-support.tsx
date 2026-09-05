"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Bot, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HostingSupport() {
  return (
    <section className="py-16 lg:py-24 bg-[#F2F2ED] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A1616] leading-tight">
              Support that shows up. 24/7, in-house, human
            </h2>

            <p className="text-base text-[#556360] leading-relaxed">
              Real engineers, not scripts. Reach us on live chat, phone and tickets, 24/7/365 — staffed by our own in-house team, never outsourced. Whether you&apos;re launching your first site or running a whole portfolio, the same people are behind you.
            </p>

            {/* Orbi Assistant Card */}
            <div className="rounded-2xl bg-white border border-[#E5E7EB] p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#082615] text-[#00E599] flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0A1616]">
                  Orbi is your instant technical assistant
                </h3>
              </div>

              <p className="text-sm text-[#556360] leading-relaxed">
                Orbi, our AI assistant, is on every plan and answers the moment you ask — setup, DNS, WordPress, billing, the lot. When something needs a person, Orbi hands you straight to our in-house team. No queue, no bot pretending to be human.
              </p>

              <div className="pt-2 text-xs font-bold text-[#067547]">
                Helps with 60% of technical enquiries, instantly.
              </div>
            </div>

            {/* Chat Action */}
            <div className="pt-2">
              <Button
                asChild
                className="bg-[#082615] hover:bg-[#0E3D22] text-white font-bold px-7 py-5 rounded-xl shadow-sm"
              >
                <Link href="/about/contact">
                  <MessageSquare className="w-4 h-4 mr-2 text-[#00E599]" />
                  <span>Chat with us</span>
                </Link>
              </Button>
            </div>

            <div className="pt-4 border-t border-[#DFE3E1] text-xs sm:text-sm text-[#6B7280] leading-relaxed flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#067547] shrink-0" />
              <span>Backed by a 99.9% uptime SLA and a 30-day money-back guarantee — we stand behind the service, not just sell it.</span>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden bg-white border border-[#E5E7EB] p-4 shadow-sm">
              <div className="relative w-full h-[320px] sm:h-[400px]">
                <Image
                  src="/assets/juxtapose/questions-graphic-final.webp"
                  alt="In-house Technical Support"
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
