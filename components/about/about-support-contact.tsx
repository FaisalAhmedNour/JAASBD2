import React from "react";
import Link from "next/link";
import Image from "next/image";

export function AboutSupportContact() {
  return (
    <section className="bg-background relative border-b border-ribbonBorder py-16 lg:py-24">
      <div className="container mx-auto px-siteContainer">
        <div className="flex flex-col lg:flex-row overflow-hidden rounded-3xl border border-boxBorder shadow-sm">
          {/* Left Column: Contact & Legal Info */}
          <div className="order-2 lg:order-1 lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-14 bg-white border-t lg:border-t-0 lg:border-r border-boxBorder">
            <div className="max-w-md space-y-6">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-heading mb-3">
                  We’ve got your back
                </h3>
                <p className="font-body text-content text-base sm:text-normal leading-relaxed">
                  Need help? We’re here 24/7. Just get in touch and we will be very happy to help.
                </p>
              </div>

              {/* Company Info Box */}
              <div className="space-y-3 pt-2 text-xs sm:text-sm font-body text-content border-t border-slate-100">
                <div>
                  <span className="font-bold text-heading block">Legal Name:</span>
                  <span>EyHost Ltd. (d/b/a hosting.com Bangladesh)</span>
                </div>
                <div>
                  <span className="font-bold text-heading block">Address:</span>
                  <span>
                    Concord MB Tower, Plot# 81, Road # 11, Block # E, Banani,
                    Dhaka-1213, Bangladesh
                  </span>
                </div>
                <div>
                  <span className="font-bold text-heading block">
                    Trade License Number:
                  </span>
                  <span>TRAD/DNCC/048824/2022</span>
                </div>
                <div>
                  <span className="font-bold text-heading block">
                    BIN Number (VAT ID):
                  </span>
                  <span>001318718-0402</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  href="/about/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#081e12] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-black transition-all group"
                >
                  <svg
                    className="w-4 h-4 text-primary group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Want to talk? Say hi</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Chat Mockup / Illustration Graphic */}
          <div className="order-1 lg:order-2 lg:w-1/2 bg-[#062514] relative flex items-center justify-center p-6 sm:p-10 lg:p-12 min-h-[320px]">
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl">
              <img
                src="/assets/juxtapose/questions-graphic2.webp"
                alt="24/7 Live Support Conversation"
                className="w-full h-auto object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
