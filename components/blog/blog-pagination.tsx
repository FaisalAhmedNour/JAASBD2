"use client";

import React from "react";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center gap-6 pt-6 pb-16">
      {pages.map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`relative pt-2 text-base font-display transition-colors ${
              isActive
                ? "font-bold text-slate-900"
                : "font-medium text-slate-500 hover:text-slate-900"
            }`}
          >
            {/* Top Active Bar Indicator */}
            {isActive && (
              <span className="absolute top-0 left-0 right-0 h-0.5 bg-slate-900" />
            )}
            <span>{page}</span>
          </button>
        );
      })}

      {/* End Button */}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(totalPages)}
          className="relative pt-2 text-base font-display font-medium text-slate-500 hover:text-slate-900 transition-colors"
        >
          <span>End</span>
        </button>
      )}
    </div>
  );
}
