import React from "react";
import { Metadata } from "next";
import { CaseStudiesHero } from "@/components/case-studies/case-studies-hero";
import { CaseStudiesList } from "@/components/case-studies/case-studies-list";

export const metadata: Metadata = {
  title: "Case studies - hosting.com",
  description:
    "Explore our library of customer spotlights to see how global investigators, e-commerce giants, and creative agencies move past technical bottlenecks to achieve 100% stability and limitless scale.",
  alternates: {
    canonical: "https://hosting.com/en-bd/case-studies/",
  },
  openGraph: {
    title: "Case studies - hosting.com",
    description:
      "Explore our library of customer spotlights to see how global investigators, e-commerce giants, and creative agencies move past technical bottlenecks to achieve 100% stability and limitless scale.",
    url: "https://hosting.com/en-bd/case-studies/",
    siteName: "hosting.com",
    type: "website",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="w-full flex flex-col">
      {/* 1. Hero with Customer Spotlight Title & Billboard Graphic */}
      <CaseStudiesHero />

      {/* 2. Customer Case Studies List & Downloads */}
      <CaseStudiesList />
    </main>
  );
}
