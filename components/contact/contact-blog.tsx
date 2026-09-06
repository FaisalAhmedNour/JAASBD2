import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  image: string;
  title: string;
  date: string;
  readTime: string;
  href: string;
}

const POSTS: BlogPost[] = [
  {
    image: "/assets/blog/bangladesh-office-blog-.webp",
    title:
      "Welcome to our new home: Hosting.com celebrates the opening of its customer-facing office in Bangladesh",
    date: "July 8, 2026",
    readTime: "5 min read",
    href: "/blog",
  },
  {
    image: "/assets/blog/hosting.com-has-officially-launched-in-bangladesh.webp",
    title:
      "Hosting.com has officially launched in the Bangladesh market, establishing a landmark",
    date: "February 9, 2026",
    readTime: "5 min read",
    href: "/blog",
  },
];

export function ContactBlog() {
  return (
    <section className="bg-background relative py-16 lg:py-24">
      <div className="container mx-auto px-siteContainer">
        {/* Section Heading */}
        <div className="mb-10 lg:mb-14">
          <h2 className="font-display text-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Read more about our products
          </h2>
        </div>

        {/* 2 Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {POSTS.map((post, idx) => (
            <Link
              key={idx}
              href={post.href}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-boxBorder bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Top Image with Hover Zoom */}
              <div>
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Corner Arrow Action Icon */}
                  <div className="absolute right-3 top-3 w-10 h-10 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-heading shadow-sm group-hover:bg-[#081e12] group-hover:text-white transition-colors">
                    <svg
                      className="w-4 h-4"
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

                <div className="p-6 sm:p-7">
                  <h3 className="font-display text-lg font-bold text-heading group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="px-6 sm:px-7 pb-6 sm:pb-7 flex items-center gap-6 font-body text-xs text-content">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
