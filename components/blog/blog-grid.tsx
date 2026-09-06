import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/data/blog-data";

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="font-body text-slate-500 text-lg">
          No articles found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12">
      {posts.map((post) => (
        <article
          key={post.id}
          className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-boxBorder bg-white shadow-sm hover:shadow-md transition-all duration-300"
        >
          <Link href={`/blog/${post.slug}`} className="flex flex-col h-full justify-between">
            {/* Image Header with Overlay Arrow */}
            <div>
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                <picture>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </picture>

                {/* Top Right Action Arrow Badge */}
                <div className="absolute right-3 top-3 w-9 h-9 rounded-lg bg-white/95 backdrop-blur flex items-center justify-center text-slate-900 shadow-sm group-hover:bg-[#081e12] group-hover:text-white transition-colors">
                  <svg
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M7 17L17 7M17 7H7M17 7V17"
                    />
                  </svg>
                </div>
              </div>

              {/* Title Section */}
              <div className="p-5 sm:p-6">
                <h2 className="font-display text-base font-bold text-heading group-hover:text-primary transition-colors leading-snug line-clamp-3">
                  {post.title}
                </h2>
              </div>
            </div>

            {/* Bottom Metadata */}
            <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-2 flex items-center justify-between font-body text-xs text-slate-500 border-t border-slate-50 mt-auto">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
