"use client";

import React, { useState } from "react";
import Image from "next/image";
import { tldPills } from "@/config/pricing";
import { Button } from "@/components/ui/button";
import { Search, Globe, CheckCircle2 } from "lucide-react";

export function DomainSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTld, setSelectedTld] = useState(".com");
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
    const fullDomain = cleanDomain.includes(".") ? cleanDomain : `${cleanDomain}${selectedTld}`;

    setTimeout(() => {
      setIsSearching(false);
      setSearchResult({
        domain: fullDomain,
        available: true,
        price: selectedTld === ".com" ? "৳1,250/yr" : selectedTld === ".xyz" ? "৳299/yr" : "৳1,350/yr",
      });
    }, 450);
  };

  return (
    <section id="domain-search" className="py-14 bg-white border-y border-[#E5E7EB] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-semibold text-[#067547] uppercase tracking-wider mb-1">
            Domain Search & Registration
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1616]">
            Every plan includes a free domain for the first year
          </h2>
          <p className="text-sm text-[#6D7779] mt-1">
            Just want to grab the domain name for now? Search and register below.
          </p>
        </div>

        {/* Search Input Box */}
        <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
          <div className="relative flex items-center rounded-2xl bg-white border-2 border-[#D1D5DB] focus-within:border-[#082615] shadow-sm p-2 transition-all">
            <div className="pl-3 pr-2 text-[#6D7779]">
              <Search className="w-5 h-5 text-[#067547]" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Start with a domain name (e.g. mybusiness)..."
              className="w-full bg-transparent text-[#0A1616] placeholder-[#9CA3AF] text-sm sm:text-base px-2 py-2.5 focus:outline-none"
            />
            <Button
              type="submit"
              disabled={isSearching || !searchTerm.trim()}
              size="lg"
              className="shrink-0 bg-[#082615] hover:bg-[#0d3b21] text-white font-bold"
            >
              {isSearching ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Checking...
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-[#00E599]" />
                  Search
                </span>
              )}
            </Button>
          </div>
        </form>

        {/* Search Result Feedback */}
        {searchResult && (
          <div className="max-w-3xl mx-auto mt-4 p-4 rounded-xl bg-[#E8F8F0] border border-[#00E599]/40 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#067547] shrink-0" />
              <div>
                <span className="font-bold text-[#0A1616] text-base">{searchResult.domain}</span>
                <span className="text-xs text-[#067547] font-semibold ml-2">is available!</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-[#0A1616]">{searchResult.price}</span>
              <Button size="sm" className="bg-[#082615] hover:bg-[#0d3b21] text-white font-bold">
                Register Now
              </Button>
            </div>
          </div>
        )}

        {/* Featured TLD Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F9FAF8] border border-[#E5E7EB]">
            <div className="relative w-12 h-6">
              <Image
                src="/assets/tlds/dot-com-logo.webp"
                alt=".COM"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xs font-bold text-[#0A1616]">৳1,250/yr</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F9FAF8] border border-[#E5E7EB]">
            <div className="relative w-14 h-6">
              <Image
                src="/assets/tlds/com.bd.png"
                alt=".COM.BD"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xs font-bold text-[#0A1616]">৳2,400/2yrs</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F9FAF8] border border-[#E5E7EB]">
            <div className="relative w-12 h-6">
              <Image
                src="/assets/tlds/dot-net-logo-1.webp"
                alt=".NET"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xs font-bold text-[#0A1616]">৳1,350/yr</span>
          </div>
        </div>

        {/* Extended TLD Extension Pills */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {tldPills.map((tld, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelectedTld(tld.extension)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                selectedTld === tld.extension
                  ? "bg-[#082615] border-[#082615] text-white shadow-sm"
                  : "bg-white border-[#E5E7EB] text-[#4B5563] hover:border-[#9CA3AF] hover:text-[#0A1616]"
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
    </section>
  );
}
