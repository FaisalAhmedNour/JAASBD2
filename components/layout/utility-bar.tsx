"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { countryList } from "@/config/navigation";
import { ChevronDown, MessageSquare, Mail, Phone, Check } from "lucide-react";

export function UtilityBar() {
  const [selectedCountry, setSelectedCountry] = useState(countryList[1]); // Default to Bangladesh (index 1)
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const countryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
        setIsCountryOpen(false);
      }
      if (contactRef.current && !contactRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="hidden lg:block bg-[#0A1616] text-[#BDC8C5] border-b border-[#162723] text-xs py-2 px-4 md:px-8 z-50 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left message (Optional subtle badge) */}
        <div className="flex items-center gap-2 text-[#8E9F9A] text-[11px]">
          <span className="w-2 h-2 rounded-full bg-[#00E599] animate-pulse" />
          <span>Award-winning 20x speed hosting in Bangladesh</span>
        </div>

        {/* Right utility items: Partners | Country Switcher | Contact Us */}
        <div className="flex items-center space-x-4">
          {/* Partners link */}
          <Link
            href="/partners"
            className="hover:text-white transition-colors text-xs font-medium text-[#BDC8C5]"
          >
            Partners
          </Link>

          {/* Separator */}
          <span className="h-4 w-px bg-[#1F312B]" />

          {/* Country Selector Dropdown */}
          <div className="relative" ref={countryRef}>
            <button
              type="button"
              onClick={() => {
                setIsCountryOpen(!isCountryOpen);
                setIsContactOpen(false);
              }}
              className="flex items-center space-x-1.5 hover:text-white transition-colors py-0.5 focus:outline-none"
              aria-expanded={isCountryOpen}
            >
              <div className="relative w-4 h-4 overflow-hidden rounded-sm flex items-center justify-center">
                <Image
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-medium">{selectedCountry.name}</span>
              <ChevronDown
                className={`w-3 h-3 text-[#7B8F89] transition-transform duration-200 ${
                  isCountryOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isCountryOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-[#0E1E1C] border border-[#1E332E] rounded-xl shadow-2xl py-2 z-[100] animate-in fade-in zoom-in-95">
                <div className="px-4 py-2 border-b border-[#1E332E] text-xs font-semibold text-[#8E9F9A]">
                  Select your country
                </div>
                <div className="max-h-72 overflow-y-auto py-1 custom-scrollbar">
                  {countryList.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => {
                        setSelectedCountry(country);
                        setIsCountryOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-4 py-2 text-left text-xs transition-colors hover:bg-[#162D28] ${
                        selectedCountry.code === country.code
                          ? "text-[#00E599] font-semibold bg-[#162D28]/60"
                          : "text-[#D2DCDB]"
                      }`}
                    >
                      <div className="flex items-center space-x-2.5">
                        <Image
                          src={country.flag}
                          alt={country.name}
                          width={16}
                          height={16}
                          className="object-contain"
                        />
                        <span>{country.name}</span>
                      </div>
                      {selectedCountry.code === country.code && (
                        <Check className="w-3.5 h-3.5 text-[#00E599]" />
                      )}
                    </button>
                  ))}
                </div>
                <div className="px-4 py-2.5 border-t border-[#1E332E] text-[11px] text-[#8E9F9A]">
                  3 million <strong className="text-white font-semibold">websites hosted</strong>
                </div>
              </div>
            )}
          </div>

          {/* Separator */}
          <span className="h-4 w-px bg-[#1F312B]" />

          {/* Contact Us Flyout */}
          <div className="relative" ref={contactRef}>
            <button
              type="button"
              onClick={() => {
                setIsContactOpen(!isContactOpen);
                setIsCountryOpen(false);
              }}
              className="flex items-center space-x-1.5 hover:text-white transition-colors py-0.5 focus:outline-none"
              aria-expanded={isContactOpen}
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#00E599]" />
              <span className="text-xs font-medium">Contact us</span>
              <ChevronDown
                className={`w-3 h-3 text-[#7B8F89] transition-transform duration-200 ${
                  isContactOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isContactOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-[#0E1E1C] border border-[#1E332E] rounded-xl shadow-2xl p-2 z-[100] animate-in fade-in zoom-in-95">
                <div className="px-3 py-2 border-b border-[#1E332E] text-xs font-semibold text-[#8E9F9A]">
                  Support you can rely on
                </div>
                <div className="py-2 space-y-1">
                  <Link
                    href="/about/contact"
                    onClick={() => setIsContactOpen(false)}
                    className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-[#162D28] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#162D28] border border-[#224039] flex items-center justify-center shrink-0 group-hover:border-[#00E599]/40">
                      <MessageSquare className="w-4 h-4 text-[#00E599]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#00E599] transition-colors">
                        Live Chat
                      </div>
                      <div className="text-xs text-[#8E9F9A] leading-snug">
                        Real-time guidance from a knowledgeable expert.
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="mailto:support@jaasbd.com"
                    onClick={() => setIsContactOpen(false)}
                    className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-[#162D28] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#162D28] border border-[#224039] flex items-center justify-center shrink-0 group-hover:border-[#00E599]/40">
                      <Mail className="w-4 h-4 text-[#00E599]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#00E599] transition-colors">
                        Email
                      </div>
                      <div className="text-xs text-[#8E9F9A] leading-snug">
                        Reach out anytime — we respond with care and clarity.
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="tel:+8809614101010"
                    onClick={() => setIsContactOpen(false)}
                    className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-[#162D28] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#162D28] border border-[#224039] flex items-center justify-center shrink-0 group-hover:border-[#00E599]/40">
                      <Phone className="w-4 h-4 text-[#00E599]" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-[#00E599] transition-colors">
                        Phone
                      </div>
                      <div className="text-xs text-[#8E9F9A] leading-snug">
                        Call (Business Hours) +880 9614-101010
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="px-3 py-2 border-t border-[#1E332E] text-[11px] text-[#8E9F9A]">
                  <span className="text-[#00E599] font-medium underline">Award-winning service</span>, just a click away.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
