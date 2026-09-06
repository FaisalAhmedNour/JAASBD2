import React from "react";
import { Metadata } from "next";
import { BlogContainer } from "@/components/blog/blog-container";

export const metadata: Metadata = {
  title: "Our blog | hosting.com",
  description:
    "Explore the latest news, trends, and insights surrounding hosting and domains - here at Hosting.com",
  alternates: {
    canonical: "https://hosting.com/blog/",
  },
  openGraph: {
    title: "Our blog | hosting.com",
    description:
      "Explore the latest news, trends, and insights surrounding hosting and domains - here at Hosting.com",
    url: "https://hosting.com/blog/",
    siteName: "hosting.com",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <main className="w-full min-h-screen">
      <BlogContainer />
    </main>
  );
}
