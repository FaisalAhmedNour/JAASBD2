"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MegaMenuCategory } from "@/config/navigation";

interface MegaMenuProps {
  category: MegaMenuCategory;
  onClose: () => void;
}

function NavIcon({ name }: { name?: string }) {
  switch (name) {
    case "www":
      return (
        <div className="border-[1.5px] border-[#067547] rounded-md px-1 py-0.5 flex items-center justify-center">
          <span className="text-[10px] font-black tracking-tight text-[#067547] leading-none font-mono">www</span>
        </div>
      );
    case "globe-bd":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067547" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="10.5" cy="10.5" r="8" />
          <path d="M10.5 2.5a11.5 11.5 0 0 0 0 16 11.5 11.5 0 0 0 0-16" />
          <path d="M2.5 10.5h16" />
          <circle cx="17.5" cy="17.5" r="4.5" fill="white" stroke="#067547" strokeWidth="1.4" />
          <text x="17.5" y="19.2" textAnchor="middle" fontSize="5" fontWeight="bold" fill="#067547" stroke="none" fontFamily="sans-serif">.bd</text>
        </svg>
      );
    case "globe":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      );
    case "server":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
          <line x1="6" x2="6.01" y1="6" y2="6" />
          <line x1="6" x2="6.01" y1="18" y2="18" />
        </svg>
      );
    case "comparison":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M2 15h10" />
          <path d="m9 18 3-3-3-3" />
        </svg>
      );
    case "builder":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case "transfer":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "wordpress":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-5.514-4.486-10-10-10zm-8.86 10c0-1.123.21-2.196.588-3.184l4.28 11.728c-2.977-1.802-4.868-5.02-4.868-8.544zm8.86 8.86c-.958 0-1.879-.153-2.744-.434l2.842-8.243 2.91 7.98a8.878 8.878 0 0 1-3.008.697zm6.758-5.263l-2.613-7.58c.846-.044 1.637-.134 1.637-.134.403-.045.358-.627-.045-.627 0 0-1.298.134-2.148.134-.805 0-2.148-.134-2.148-.134-.403 0-.448.582-.045.627 0 0 .746.09 1.547.134l3.867 10.875a8.877 8.877 0 0 0-.052-3.279zm-8.683-11.41c.492 0 .94.045 1.343.134l-3.224 9.358-2.284-6.269c.806-.045 1.547-.134 1.547-.134.403 0 .358-.582-.045-.627 0 0-1.298.134-2.148.134-.134 0-.291-.007-.448-.022A8.832 8.832 0 0 1 12 3.14c2.254 0 4.316.843 5.88 2.239l-.492.09c-.895.179-1.522.761-1.522 1.522 0 .537.313 1.074.627 1.612.448.806.94 1.746.94 3.179 0 .985-.38 2.261-.896 3.94l-1.164 3.88-3.328-9.409c.09-.045.179-.09.269-.09.403-.045.358-.627-.045-.627 0 0-1.298.134-2.148.134z" />
        </svg>
      );
    case "nodejs":
      return (
        <span className="text-[12px] font-black tracking-tight text-[#067547]">JS</span>
      );
    case "ai":
      return (
        <div className="flex flex-col items-center justify-center leading-none">
          <span className="text-[9px] font-black tracking-wider text-[#067547]">AI</span>
          <span className="text-[7px] font-bold text-[#6B7280]">STUDIO</span>
        </div>
      );
    case "search":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      );
    case "email":
    case "email-check":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067547" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="3" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case "marketing":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067547" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" fill="#067547" />
        </svg>
      );
    case "shield":
    case "shield-lock":
      return (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#067547" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <rect x="9.5" y="10" width="5" height="4" rx="1" fill="#067547" />
          <path d="M10.5 10V8.5a1.5 1.5 0 0 1 3 0V10" stroke="#067547" strokeWidth="1.4" />
        </svg>
      );
    case "lock":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );
    case "agency":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
      );
    case "partner":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m11 17 2 2a1 1 0 0 0 1.42 0l4.24-4.24a1 1 0 0 0 0-1.42l-2-2" />
          <path d="m2 12 5.29-5.29a1 1 0 0 1 1.41 0l4.24 4.24a1 1 0 0 1 0 1.41L7.65 17.65a1 1 0 0 1-1.41 0L2 13.41A1 1 0 0 1 2 12Z" />
        </svg>
      );
    case "cloud":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </svg>
      );
    case "reseller":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      );
    case "company":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M8 10h.01" />
          <path d="M16 10h.01" />
          <path d="M8 14h.01" />
          <path d="M16 14h.01" />
        </svg>
      );
    case "support":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
          <path d="M21 16v2a4 4 0 0 1-4 4h-5" />
        </svg>
      );
    case "case-study":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      );
    case "book":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10" />
          <path d="M6 10h10" />
        </svg>
      );
    default:
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" x2="12" y1="8" y2="12" />
          <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
      );
  }
}

export function MegaMenu({ category, onClose }: MegaMenuProps) {
  const columnCount = category.columns.length;

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-start">
      {/* Category Link Columns */}
      {category.columns.map((column, colIdx) => (
        <div key={colIdx} className="flex flex-col space-y-3">
          <h4 className="text-sm font-bold text-[#111827] px-1 tracking-tight">
            {column.title}
          </h4>
          <div className="flex flex-col space-y-2.5">
            {column.items.map((item, itemIdx) => (
              <Link
                key={itemIdx}
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between p-3 rounded-xl bg-white border border-[#E5E7EB] hover:border-[#067547]/40 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-sm transition-all duration-150"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Green-themed Icon Badge */}
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#E5E7EB] flex items-center justify-center shrink-0 shadow-none text-[#067547] group-hover:bg-[#E8F8F0] group-hover:border-[#067547]/30 transition-colors">
                    <NavIcon name={item.icon} />
                  </div>
                  <div className="min-w-0 pr-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-[#111827] group-hover:text-[#067547] transition-colors leading-tight truncate">
                        {item.title}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] bg-[#E8F8F0] text-[#067547] font-semibold px-1.5 py-0.5 rounded shrink-0">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.description && (
                      <p className="text-xs text-[#6B7280] mt-0.5 leading-snug line-clamp-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
                {/* Trailing Arrow */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-[#111827] group-hover:text-[#067547] group-hover:translate-x-0.5 transition-all shrink-0 ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* When columns are fewer than 3, fill empty column slots or give more room */}
      {columnCount < 3 &&
        Array.from({ length: 3 - columnCount }).map((_, i) => (
          <div key={`empty-${i}`} className="hidden lg:block" />
        ))}

      {/* Col 4: Featured Promo Visual Card */}
      {category.featured && (
        <div className="col-span-1 h-full flex flex-col justify-between pt-7">
          <Link
            href={category.featured.href}
            onClick={onClose}
            className="group block rounded-xl overflow-hidden border border-[#E5E7EB] shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow bg-white flex flex-col h-full"
          >
            {/* Top image */}
            <div className="relative w-full h-[140px] bg-[#F3F4F6] overflow-hidden">
              <Image
                src={category.featured.image}
                alt={category.featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Bottom Dark Forest Green Banner */}
            <div className="bg-[#093F2B] text-white p-4 flex items-center justify-between mt-auto">
              <div className="min-w-0 pr-3">
                <div className="text-sm font-bold text-white group-hover:text-[#00E599] transition-colors leading-tight">
                  {category.featured.title}
                </div>
                <div className="text-xs text-[#A9C8BC] mt-1 leading-snug">
                  {category.featured.description}
                </div>
              </div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform shrink-0"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
