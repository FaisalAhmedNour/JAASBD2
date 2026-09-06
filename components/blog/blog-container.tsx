"use client";

import React, { useState, useMemo } from "react";
import { BlogHeader } from "./blog-header";
import { BlogFilterBar } from "./blog-filter-bar";
import { BlogGrid } from "./blog-grid";
import { BlogPagination } from "./blog-pagination";
import { BLOG_POSTS, BlogPost } from "@/data/blog-data";

const POSTS_PER_PAGE = 8;

export function BlogContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on search query and category
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        !selectedCategory || post.category === selectedCategory;
      const matchesSearch =
        !appliedSearch ||
        post.title.toLowerCase().includes(appliedSearch.toLowerCase()) ||
        (post.excerpt &&
          post.excerpt.toLowerCase().includes(appliedSearch.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, appliedSearch]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));

  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleSearchSubmit = () => {
    setAppliedSearch(searchQuery.trim());
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="w-full bg-background">
      <div className="container mx-auto px-siteContainer">
        {/* Blog Header (Pill + Title) */}
        <BlogHeader />

        {/* Search & Category Filter Bar */}
        <BlogFilterBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
          onSearchSubmit={handleSearchSubmit}
        />

        {/* 4-Column Blog Grid */}
        <BlogGrid posts={currentPosts} />

        {/* Pagination Bar */}
        <BlogPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>
    </div>
  );
}
