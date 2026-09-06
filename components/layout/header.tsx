"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigationConfig } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { MegaMenu } from "./mega-menu";
import { MobileNav } from "./mobile-nav";
import { ChevronDown, Search, X } from "lucide-react";

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const headerRef = useRef<HTMLDivElement>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavHover = (key: string) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setActiveMenu(key);
  };

  const handleHeaderLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 250);
  };

  const handleHeaderEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
  };

  // Close menus on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setIsSearchOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Sticky Top Nav Wrapper (Fixed height placeholder prevents page from shifting down when card expands) */}
      <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="max-w-7xl mx-auto h-[88px] lg:h-[104px] relative">
          {/* Unified Floating Pill / Expanding Header Card */}
          <div
            ref={headerRef}
            onMouseEnter={handleHeaderEnter}
            onMouseLeave={handleHeaderLeave}
            className={`absolute top-3 left-0 right-0 rounded-2xl bg-white border border-[#E5E7EB] transition-all duration-300 overflow-hidden pointer-events-auto z-50 ${
              activeMenu || isSearchOpen
                ? "shadow-[0_16px_45px_rgba(0,0,0,0.12)] border-[#D1D5DB]"
                : "shadow-[0_4px_25px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            }`}
          >
            {/* Main Navbar Top Row */}
            <div className="flex items-center justify-between h-16 lg:h-20 px-4 sm:px-6">
              {/* Col 1: Brand Logo */}
              <div className="flex items-center shrink-0">
                <Link href="/" className="relative block">
                  <span className="sr-only">hosting.com</span>
                  <div className="relative w-[150px] sm:w-[175px] h-[38px]">
                    <Image
                      src="/assets/brand/hosting-logo-on-dark.svg"
                      alt="hosting.com"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </Link>
              </div>

              {/* Col 2: Desktop Navigation Mega-Menu Triggers */}
              <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                {Object.entries(navigationConfig).map(([key, category]) => {
                  const isActive = activeMenu === key;
                  return (
                    <div key={key} className="relative">
                      <button
                        type="button"
                        onClick={() => setActiveMenu(isActive ? null : key)}
                        onMouseEnter={() => handleNavHover(key)}
                        className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all focus:outline-none ${
                          isActive
                            ? "bg-[#F3F4F6] text-[#0A1616]"
                            : "text-[#374151] hover:text-[#0A1616] hover:bg-[#F3F4F6]/70"
                        }`}
                        aria-expanded={isActive}
                      >
                        <span>{category.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isActive ? "rotate-180 text-[#0A1616]" : "text-[#6B7280]"
                          }`}
                        />
                      </button>
                    </div>
                  );
                })}
              </nav>

              {/* Col 3: Right Action Buttons */}
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Search Button */}
                <button
                  type="button"
                  onClick={() => {
                    setIsSearchOpen(!isSearchOpen);
                    setActiveMenu(null);
                  }}
                  className={`rounded-lg border p-2 transition-colors ${
                    isSearchOpen
                      ? "border-[#067547] text-[#067547] bg-[#E8F8F0]"
                      : "border-[#E5E7EB] text-[#374151] hover:text-[#0A1616] hover:bg-[#F3F4F6]"
                  }`}
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>

                {/* Basket / Cart Icon */}
                <Link
                  href="https://portal.jaasbd.com/cart.php"
                  className="rounded-lg p-2 text-[#374151] hover:text-[#0A1616] hover:bg-[#F3F4F6] transition-colors relative"
                  aria-label="Shopping Cart"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M1 1H3.8L4.13866 3.45882M4.13866 3.45882L5.27778 11.7294H17.7333L19 3.45882H4.13866Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.48869 11.7295V11.7295C4.55595 11.7295 3.7998 12.4856 3.7998 13.4184V13.5177C3.7998 14.5053 4.60042 15.306 5.58804 15.306H18.9998"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="8.23" cy="17.76" r="1.4" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="15.41" cy="17.76" r="1.4" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>

                {/* Client Portal Login Icon */}
                <Link
                  href={siteConfig.links.login}
                  className="rounded-lg p-2 text-[#374151] hover:text-[#0A1616] hover:bg-[#F3F4F6] transition-colors hidden sm:flex items-center justify-center"
                  aria-label="Client Login"
                >
                  <div className="relative w-5 h-5">
                    <Image
                      src="/assets/hosting-login-icon.svg"
                      alt="Login"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>

                {/* Mobile Menu Hamburger */}
                <button
                  type="button"
                  onClick={() => setIsMobileNavOpen(true)}
                  className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-[#0A1616] text-white hover:bg-[#162D28] transition-colors"
                  aria-label="Open mobile menu"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="4" y1="7" x2="20" y2="7" strokeLinecap="round" />
                    <line x1="4" y1="17" x2="20" y2="17" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Quick Search Dropdown Bar */}
            {isSearchOpen && (
              <div className="px-4 pb-4 pt-1 border-t border-[#F3F4F6] animate-in fade-in">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (searchQuery.trim()) {
                      window.location.href = `/#domain-search`;
                    }
                  }}
                  className="flex items-center gap-2 bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl px-3 py-2"
                >
                  <Search className="w-4 h-4 text-[#067547] shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search hosting plans, domains, or articles..."
                    className="w-full bg-transparent text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="text-[#9CA3AF] hover:text-[#111827]"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

            {/* Unified Expandable Mega Menu Shell (Expands inside the card over the page) */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                activeMenu
                  ? "grid-rows-[1fr] opacity-100 border-t border-[#F3F4F6]"
                  : "grid-rows-[0fr] opacity-0 border-t border-transparent pointer-events-none"
              }`}
            >
              <div className="overflow-hidden min-h-0">
                {activeMenu && navigationConfig[activeMenu] && (
                  <div className="p-6 lg:p-8 bg-[#F4F5F6]">
                    <MegaMenu
                      category={navigationConfig[activeMenu]}
                      onClose={() => setActiveMenu(null)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
}
