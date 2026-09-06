"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Check, Globe, CheckCircle2, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BdDomainsHero() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<{
    domain: string;
    available: boolean;
    price: string;
  } | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsSearching(true);
    const cleanDomain = searchTerm.trim().toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, "");
    const fullDomain = cleanDomain.includes(".bd") ? cleanDomain : `${cleanDomain.replace(/\..+$/, "")}.com.bd`;

    setTimeout(() => {
      setIsSearching(false);
      setSearchResult({
        domain: fullDomain,
        available: true,
        price: "৳2,400 / 2 yrs (BTCL Fee Included)",
      });
    }, 450);
  };

  const checklist = [
    "Custom nameservers & anycast DNS",
    "Free DNS management & redirection",
    "Domain lock & theft protection",
    "24/7 local Bangladesh ticket & chat support",
    "24/7/365 Guru instant activation",
  ];

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#082615] text-white overflow-hidden border-b border-[#16472D]">
      {/* Radial Glow & Background Watermark */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#00E599]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#067547]/20 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Domain Search */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Register your <br />
              <span className="text-[#00E599]">.bd domain</span> now
            </h1>

            <p className="text-base sm:text-lg text-[#BDC8C5] max-w-xl leading-relaxed">
              Everything you need to register and protect your .bd domain. Put your Bangladesh business on the digital map.
            </p>

            {/* Search Box */}
            <form onSubmit={handleSearch} className="relative max-w-xl">
              <div className="relative flex items-center rounded-2xl bg-white p-2 shadow-2xl transition-all">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search for your domain (e.g. mycompany)..."
                  className="w-full bg-transparent text-[#0A1616] placeholder-[#8E9F9A] text-sm sm:text-base px-3 py-2.5 focus:outline-none"
                />
                <Button
                  type="submit"
                  disabled={isSearching || !searchTerm.trim()}
                  size="lg"
                  className="shrink-0 bg-[#082615] hover:bg-[#0d3b21] text-white font-bold rounded-xl px-6 py-6"
                >
                  {isSearching ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Checking...
                    </span>
                  ) : (
                    <span>Search</span>
                  )}
                </Button>
              </div>
            </form>

            {/* Live Search Result Pill */}
            {searchResult && (
              <div className="max-w-xl p-4 rounded-xl bg-[#0D331E] border border-[#00E599]/40 flex flex-col sm:flex-row items-center justify-between gap-3 animate-in fade-in">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#00E599] shrink-0" />
                  <div>
                    <span className="font-bold text-white text-sm sm:text-base">{searchResult.domain}</span>
                    <span className="text-xs text-[#00E599] font-semibold ml-2">is available!</span>
                  </div>
                </div>
                <Button
                  asChild
                  size="sm"
                  className="bg-[#00E599] hover:bg-[#00C885] text-[#082615] font-bold rounded-lg"
                >
                  <a
                    href={`https://portal.jaasbd.com/cart.php?a=add&domain=register&query=${searchResult.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </a>
                </Button>
              </div>
            )}

            {/* Popular TLD Price Chips */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0D331E] border border-[#16472D] text-xs">
                <span className="font-extrabold text-white">.com</span>
                <span className="text-[#8E9F9A]">from ৳1,250 / 1st yr</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0D331E] border border-[#00E599]/40 text-xs text-white">
                <span className="font-extrabold text-[#00E599]">.com.bd</span>
                <span className="text-[#BDC8C5]">from ৳2,400 / 2 yrs</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0D331E] border border-[#16472D] text-xs">
                <span className="font-extrabold text-white">.net</span>
                <span className="text-[#8E9F9A]">from ৳1,350 / 1st yr</span>
              </div>
            </div>

            {/* Checklist */}
            <div className="space-y-2.5 pt-4">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#BDC8C5]">
                  <Check className="w-4 h-4 text-[#00E599] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Graphic with Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#16472D] bg-[#0D331E] shadow-2xl aspect-[4/4]">
              <Image
                src="/assets/billboard/domains-hero.webp"
                alt="Register .bd domain in Bangladesh"
                fill
                priority
                className="object-cover object-top"
              />

              {/* Floating Top Card */}
              <div className="absolute top-4 right-4 bg-[#082615]/90 backdrop-blur-md border border-[#16472D] rounded-xl p-3 shadow-lg flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00E599] animate-pulse" />
                <span className="text-xs font-semibold text-white">Fast activated domain registration</span>
              </div>

              {/* Floating Bottom Card */}
              <div className="absolute bottom-6 left-6 bg-[#082615]/90 backdrop-blur-md border border-[#00E599]/30 rounded-2xl p-4 shadow-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00E599]/20 border border-[#00E599]/40 flex items-center justify-center text-[#00E599]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">.bd domain purchased</div>
                  <div className="text-[11px] text-[#00E599]">DNS &amp; Nameservers Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
