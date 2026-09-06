"use client";

import React from "react";
import { BLOG_CATEGORIES } from "@/data/blog-data";

interface BlogFilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  onSearchSubmit: () => void;
}

export function BlogFilterBar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onSearchSubmit,
}: BlogFilterBarProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit();
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-8 lg:pb-12">
      {/* Left: Search input + Search button */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-lg w-full">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search blog posts..."
          className="w-full rounded-xl border border-boxBorder bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:outline-none shadow-sm transition-colors"
        />
        <button
          type="submit"
          className="rounded-xl bg-[#081e12] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black transition-colors shrink-0"
        >
          Search
        </button>
      </form>

      {/* Right: Category Dropdown */}
      <div className="relative min-w-[240px] md:w-72">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          aria-label="Filter blog by category"
          className="w-full appearance-none rounded-xl border border-boxBorder bg-white px-4 py-3 pr-10 text-sm text-slate-800 font-medium shadow-sm focus:border-emerald-600 focus:outline-none cursor-pointer transition-colors"
        >
          <option value="">Select a Category</option>
          {BLOG_CATEGORIES.map((cat) => (
            <option key={cat} value={cat === "All Categories" ? "" : cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Chevron icon */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-500">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
