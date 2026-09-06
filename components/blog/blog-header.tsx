import React from "react";

export function BlogHeader() {
  return (
    <div className="pt-8 pb-6 sm:pt-12 sm:pb-8">
      {/* Breadcrumb pill */}
      <div className="mb-4">
        <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
          Blog
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="font-display text-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
        Blog
      </h1>
    </div>
  );
}
