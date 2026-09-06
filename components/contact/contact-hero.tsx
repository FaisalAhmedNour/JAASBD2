"use client";

import React from "react";
import Image from "next/image";

export function ContactHero() {
  return (
    <section className="bg-background relative border-b border-ribbonBorder pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="container mx-auto px-siteContainer">
        <div className="grid lg:grid-cols-12 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading & Contact Channels */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="mb-4">
              <h1 className="font-display text-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Contact us
              </h1>
            </div>

            <div className="space-y-6 font-body text-content text-base sm:text-lg leading-relaxed">
              <p>
                Need help? We’ve got you covered! Whether you have questions
                about your existing services, want to explore new options, or
                need assistance with billing, our team is here to help. Prefer
                speaking to someone directly?
              </p>

              <div>
                <p className="font-bold text-heading text-base sm:text-lg mb-2">
                  Give us a call now!
                </p>
                <ul className="space-y-1.5 font-medium text-primary">
                  <li>
                    <a
                      href="tel:+8809614101010"
                      className="hover:underline inline-flex items-center gap-2 text-base sm:text-lg"
                    >
                      <span className="text-content font-normal text-sm">BD:</span>
                      +8809614101010
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+17342224678"
                      className="hover:underline inline-flex items-center gap-2 text-base sm:text-lg"
                    >
                      <span className="text-content font-normal text-sm">US:</span>
                      +1 (734) 222-4678
                    </a>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <p className="text-content text-base mb-4">
                  If you need quick answers, start a Live Chat with a support
                  team member now!
                </p>

                <div>
                  <button
                    type="button"
                    onClick={() => {
                      // Trigger live chat if available or open support modal
                      if (typeof window !== "undefined") {
                        const evt = new CustomEvent("open-live-chat");
                        window.dispatchEvent(evt);
                      }
                    }}
                    className="inline-flex items-center gap-3 rounded-xl bg-[#081e12] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-black transition-all group"
                  >
                    <span>Chat with us</span>
                    <span className="w-7 h-7 rounded-md bg-emerald-500 text-[#081e12] flex items-center justify-center group-hover:translate-x-1 transition-transform">
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
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Support Representative Photo */}
          <div className="lg:col-span-6 mt-10 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-boxBorder shadow-lg bg-slate-50">
              <picture>
                <img
                  src="/assets/billboard/contact.webp"
                  alt="hosting.com customer support representative on call"
                  className="h-full w-full object-cover object-left select-none"
                  width={752}
                  height={500}
                  loading="eager"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
