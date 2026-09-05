"use client";

import React from "react";
import { Star } from "lucide-react";

interface CustomerReview {
  title: string;
  content: string;
  author: string;
}

const customerReviews: CustomerReview[] = [
  {
    title: "Reliable support every time",
    content:
      "Hosting.com has consistently delivered great customer service. Every time I reach out, someone is available quickly and knows exactly how to help. They’re patient, even when I don’t fully understand the technical side of things, and I never feel rushed or dismissed. It makes a big difference knowing I can count on them to solve issues without any hassle.",
    author: "Sean Tucker",
  },
  {
    title: "Wonderful service for ecommerce stores",
    content:
      "Wonderful service, speed and even better customer support. I fully support them for anyone who wants to scale. As an ecommerce site owner, speed is of utmost importance as even with a few seconds of delay can hurt your sales. They never disappoint in their services.",
    author: "Ahmad Jamshed",
  },
  {
    title: "Exceptional assistance",
    content:
      "Exceptional assistance who went the extra mile and made sure everything was working properly and did not hesitate to do everything and anything to complete the tasks. I am 1,000% satisfied and can rate the tech support as 5-stars plus.",
    author: "Brother David Mary",
  },
];

export function HostingReviews() {
  return (
    <section className="py-16 lg:py-24 bg-[#F2F2ED] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A1616]">
            What our customers have to say
          </h2>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customerReviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-8 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* 5 Green Stars */}
                <div className="flex items-center gap-1 text-[#00B67A] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 bg-[#00B67A] flex items-center justify-center text-white text-xs"
                    >
                      <Star className="w-3.5 h-3.5 fill-white text-white" />
                    </div>
                  ))}
                </div>

                <h3 className="text-lg font-bold text-[#0A1616] mb-3 leading-snug">
                  {rev.title}
                </h3>

                <p className="text-sm text-[#556360] leading-relaxed mb-6">
                  {rev.content}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3F4F6] text-sm font-bold text-[#0A1616]">
                {rev.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
