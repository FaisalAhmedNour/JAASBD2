"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigationConfig, countryList } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ChevronDown, X, Phone, Mail, MessageSquare, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>("hosting");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Dark Overlay */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-[#0A1616] border-l border-[#1E332E] h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl z-10">
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-5 border-b border-[#1E332E]">
            <Link href="/" onClick={onClose} className="relative block">
              <div className="relative w-[140px] h-[34px]">
                <Image
                  src="/assets/brand/hosting-logo-on-dark.svg"
                  alt="hosting.com"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-[#8E9F9A] hover:text-white rounded-lg hover:bg-[#162D28] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Accordion */}
          <div className="py-4 space-y-1">
            {Object.entries(navigationConfig).map(([key, category]) => {
              const isExpanded = expandedSection === key;
              return (
                <div key={key} className="border-b border-[#142622] pb-2">
                  <button
                    onClick={() => setExpandedSection(isExpanded ? null : key)}
                    className="flex items-center justify-between w-full py-3 text-base font-medium text-[#E5EBE9] hover:text-[#00E599] transition-colors text-left"
                  >
                    <span>{category.label}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#7B8F89] transition-transform duration-200 ${
                        isExpanded ? "rotate-180 text-[#00E599]" : ""
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="pl-2 py-2 space-y-3 animate-in fade-in">
                      {category.columns.map((col, cIdx) => (
                        <div key={cIdx} className="space-y-1">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#687C77]">
                            {col.title}
                          </span>
                          {col.items.map((item, iIdx) => (
                            <Link
                              key={iIdx}
                              href={item.href}
                              onClick={onClose}
                              className="flex items-center justify-between py-1.5 text-sm text-[#BDC8C5] hover:text-[#00E599] transition-colors"
                            >
                              <span>{item.title}</span>
                              {item.badge && (
                                <span className="text-[10px] bg-[#00E599]/15 text-[#00E599] px-1.5 py-0.2 rounded font-semibold border border-[#00E599]/30">
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="pt-6 border-t border-[#1E332E] space-y-3">
          <Button asChild className="w-full bg-[#00E599] hover:bg-[#00C885] text-[#0A1616] font-bold">
            <Link href="/#pricing" onClick={onClose}>
              View Hosting Plans
            </Link>
          </Button>

          <div className="grid grid-cols-3 gap-2 text-center text-xs pt-2">
            <Link
              href="/about/contact"
              onClick={onClose}
              className="p-2 rounded-lg bg-[#142A25] border border-[#1E3A33] text-[#BDC8C5] hover:text-white flex flex-col items-center gap-1"
            >
              <MessageSquare className="w-4 h-4 text-[#00E599]" />
              <span>Live Chat</span>
            </Link>

            <Link
              href="mailto:support@jaasbd.com"
              onClick={onClose}
              className="p-2 rounded-lg bg-[#142A25] border border-[#1E3A33] text-[#BDC8C5] hover:text-white flex flex-col items-center gap-1"
            >
              <Mail className="w-4 h-4 text-[#00E599]" />
              <span>Email</span>
            </Link>

            <Link
              href="tel:+8809614101010"
              onClick={onClose}
              className="p-2 rounded-lg bg-[#142A25] border border-[#1E3A33] text-[#BDC8C5] hover:text-white flex flex-col items-center gap-1"
            >
              <Phone className="w-4 h-4 text-[#00E599]" />
              <span>Phone</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
