"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { tldPills } from "@/config/pricing";
import {
  ArrowRight,
  CheckCircle2,
  Server,
  Shield,
  Layers,
  Globe,
  Sparkles,
  Search,
} from "lucide-react";

export function HeroSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTld, setSelectedTld] = useState(".com");
  const [searchResult, setSearchResult] = useState<{
    domain: string;
    available: boolean;
    price: string;
  } | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const quickCards = [
    {
      title: "Web hosting",
      description: "Your first site or a growing small business",
      href: "/hosting",
      icon: Server,
    },
    {
      title: "Managed servers",
      description: "Dedicated resources, still fully managed",
      href: "/hosting/platforms/managed-servers",
      icon: Layers,
    },
    {
      title: "Reseller Accounts",
      description: "Run your own white-label hosting",
      href: "/hosting",
      icon: Shield,
    },
    {
      title: "Domain Names",
      description: "Register a .com or .bd domain today",
      href: "/domains",
      icon: Globe,
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsSearching(true);
    const cleanDomain = searchTerm.trim().toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, "");
    const fullDomain = cleanDomain.includes(".") ? cleanDomain : `${cleanDomain}${selectedTld}`;

    setTimeout(() => {
      setIsSearching(false);
      setSearchResult({
        domain: fullDomain,
        available: true,
        price: selectedTld === ".com" ? "৳1,250/yr" : selectedTld === ".xyz" ? "৳299/yr" : "৳1,350/yr",
      });
    }, 400);
  };

  return (
    <section className="relative pt-6 pb-12 lg:pt-10 lg:pb-16 bg-[#F2F2ED] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Copy */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          {/* Promo Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DFE3E1] text-xs sm:text-sm font-semibold text-[#0A1616] shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-[#00E599]" />
            <Sparkles className="w-3.5 h-3.5 text-[#067547]" />
            <span>Special Bangladesh Launch Offer — Up to 75% Off + Free Domain</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A1616] leading-[1.12]">
            The hosting platform for growth
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#6D7779] max-w-2xl mx-auto leading-relaxed">
            Fast, reliable, and secure web hosting built for your website. 24/7 expert support and 30-day money-back guarantee.
          </p>

          {/* Trust Highlights Checklist */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-y-2.5 gap-x-6 text-xs sm:text-sm text-[#0A1616] font-semibold">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#067547]" />
              <span>99.9% Uptime Guarantee</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#067547]" />
              <span>Free Domain & SSL</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#067547]" />
              <span>24/7 Local Support</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#067547]" />
              <span>30-Day Money-Back</span>
            </div>
          </div>
        </div>

        {/* 4 Billboard Quick Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {quickCards.map((card, idx) => {
            return (
              <Link
                key={idx}
                href={card.href}
                className="group block p-6 rounded-2xl bg-white border border-[#DFE3E1] hover:border-[#00E599] hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2.5">
                  <h3 className="text-base font-bold text-[#0A1616] group-hover:text-[#067547] transition-colors">
                    {card.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-[#6D7779] group-hover:text-[#067547] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-xs sm:text-sm text-[#6D7779] leading-snug">
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* Integrated Domain Search Card (Attached directly below cards) */}
        <div className="mt-6 max-w-6xl mx-auto p-5 sm:p-7 rounded-2xl bg-white border border-[#DFE3E1] shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#0A1616]">
                Find your ideal domain name
              </h3>
              <p className="text-xs sm:text-sm text-[#6D7779]">
                .com from ৳1,250/yr, .bd also available. Free domain included with annual hosting plans.
              </p>
            </div>
          </div>

          {/* Search Input Box */}
          <form onSubmit={handleSearch} className="relative w-full">
            <div className="relative flex items-center rounded-xl bg-white border-2 border-[#D1D5DB] focus-within:border-[#082615] p-1.5 transition-all">
              <div className="pl-3 pr-2 text-[#6D7779]">
                <Search className="w-5 h-5 text-[#067547]" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Start with a domain name (e.g. mybrand)..."
                className="w-full bg-transparent text-[#0A1616] placeholder-[#9CA3AF] text-sm sm:text-base px-2 py-2 focus:outline-none"
              />
              <Button
                type="submit"
                disabled={isSearching || !searchTerm.trim()}
                size="default"
                className="shrink-0 bg-[#082615] hover:bg-[#0d3b21] text-white font-bold rounded-lg px-5 py-2.5"
              >
                {isSearching ? (
                  <span className="flex items-center gap-2 text-xs">
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Checking...
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs sm:text-sm">
                    <Search className="w-3.5 h-3.5 text-[#00E599]" />
                    Search
                  </span>
                )}
              </Button>
            </div>
          </form>

          {/* Search Result Feedback */}
          {searchResult && (
            <div className="mt-3 p-3.5 rounded-xl bg-[#E8F8F0] border border-[#00E599]/40 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#067547] shrink-0" />
                <div>
                  <span className="font-bold text-[#0A1616] text-sm sm:text-base">{searchResult.domain}</span>
                  <span className="text-xs text-[#067547] font-semibold ml-2">is available!</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-[#0A1616]">{searchResult.price}</span>
                <Button asChild size="sm" className="bg-[#082615] hover:bg-[#0d3b21] text-white font-bold text-xs">
                  <Link href={`https://portal.jaasbd.com/cart.php?a=add&domain=register&query=${searchResult.domain}`}>
                    Register Now
                  </Link>
                </Button>
              </div>
            </div>
          )}

          {/* TLD Extension Price Badges */}
          <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
            {tldPills.slice(0, 6).map((tld, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedTld(tld.extension)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold border transition-all ${
                  selectedTld === tld.extension
                    ? "bg-[#082615] border-[#082615] text-white shadow-sm"
                    : "bg-[#F9FAFB] border-[#E5E7EB] text-[#4B5563] hover:border-[#9CA3AF] hover:text-[#0A1616]"
                }`}
              >
                <span className="font-bold">{tld.extension}</span>
                <span className={selectedTld === tld.extension ? "text-[#D1D5DB]" : "text-[#6D7779]"}>
                  {tld.popularPrice}
                </span>
                {tld.badge && (
                  <span className="text-[10px] bg-[#00E599] text-[#0A1616] px-1.5 py-0.2 rounded font-bold">
                    {tld.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
