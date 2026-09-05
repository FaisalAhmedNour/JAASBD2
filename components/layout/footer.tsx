"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ShieldCheck, Lock, Headphones, Server, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#082615] border-t border-[#1C3E2B] text-[#9BA5A1] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust & Guarantee Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 mb-12 border-b border-[#1C3E2B]">
          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0D331E] border border-[#1A4B2E]">
            <div className="w-10 h-10 rounded-lg bg-[#00E599]/15 border border-[#00E599]/30 flex items-center justify-center shrink-0">
              <Server className="w-5 h-5 text-[#00E599]" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">20x Turbo Speed</h5>
              <p className="text-xs text-[#8E9F9A]">AMD EPYC & NVMe SSD Storage</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0D331E] border border-[#1A4B2E]">
            <div className="w-10 h-10 rounded-lg bg-[#00E599]/15 border border-[#00E599]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#00E599]" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">99.9% Uptime Guarantee</h5>
              <p className="text-xs text-[#8E9F9A]">Backed by 24/7 SLA monitoring</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0D331E] border border-[#1A4B2E]">
            <div className="w-10 h-10 rounded-lg bg-[#00E599]/15 border border-[#00E599]/30 flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5 text-[#00E599]" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">24/7/365 Local Support</h5>
              <p className="text-xs text-[#8E9F9A]">Bangla & English tech experts</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-xl bg-[#0D331E] border border-[#1A4B2E]">
            <div className="w-10 h-10 rounded-lg bg-[#00E599]/15 border border-[#00E599]/30 flex items-center justify-center shrink-0">
              <Lock className="w-5 h-5 text-[#00E599]" />
            </div>
            <div>
              <h5 className="text-sm font-bold text-white">30-Day Money-Back</h5>
              <p className="text-xs text-[#8E9F9A]">100% risk-free guarantee</p>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="relative block">
              <div className="relative w-[150px] h-[36px]">
                <Image
                  src="/assets/brand/hosting-logo-on-dark.svg"
                  alt="hosting.com"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-[#9BA5A1] leading-relaxed max-w-sm">
              Providing enterprise-grade web hosting, WordPress acceleration, domain registration, and cloud infrastructure engineered for businesses in Bangladesh and worldwide.
            </p>

            {/* Trustpilot Score Badge */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center text-[#00E599]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#00E599] text-[#00E599]" />
                ))}
              </div>
              <span className="text-xs font-semibold text-white">
                Rated {siteConfig.reviews.trustpilotScore}/5 from {siteConfig.reviews.reviewCount} reviews
              </span>
            </div>

            {/* Payment Badges */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-[#8E9F9A] uppercase tracking-wider block mb-2">
                Supported Payment Methods
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 bg-[#0D331E] border border-[#1A4B2E] rounded-md font-semibold text-pink-400">bKash</span>
                <span className="px-2.5 py-1 bg-[#0D331E] border border-[#1A4B2E] rounded-md font-semibold text-orange-400">Nagad</span>
                <span className="px-2.5 py-1 bg-[#0D331E] border border-[#1A4B2E] rounded-md font-semibold text-purple-400">Rocket</span>
                <span className="px-2.5 py-1 bg-[#0D331E] border border-[#1A4B2E] rounded-md font-semibold text-blue-400">Visa / Mastercard</span>
                <span className="px-2.5 py-1 bg-[#0D331E] border border-[#1A4B2E] rounded-md font-semibold text-emerald-400">SSLCommerz</span>
              </div>
            </div>
          </div>

          {/* Hosting Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Hosting
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.hosting.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#00E599] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Domains & Security */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Domains & Security
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.domains.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#00E599] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company & Help
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-[#00E599] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 border-t border-[#1C3E2B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7B8F89]">
          <div>
            © {new Date().getFullYear()} JAASBD / hosting.com. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-6">
            {footerLinks.legal.map((item, idx) => (
              <Link key={idx} href={item.href} className="hover:text-white transition-colors">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
