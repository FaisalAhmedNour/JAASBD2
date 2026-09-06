import React from "react";
import Image from "next/image";

export function ContactDhakaMap() {
  return (
    <section id="dhakaofficeadress" className="relative py-16 lg:py-28 overflow-hidden isolate">
      {/* Dark Skyline Background Image */}
      <div className="absolute inset-0 -z-10">
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet="/assets/text/mobile/hosting_bd_dark_bg_mobile.webp"
          />
          <source
            media="(max-width: 1023px)"
            srcSet="/assets/text/tablet/hosting_bd_dark_bg_tablet.webp"
          />
          <img
            src="/assets/text/dhaka-background.webp"
            alt="Dhaka city skyline background"
            className="h-full w-full object-cover object-center"
            width={1920}
            height={500}
            loading="lazy"
          />
        </picture>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-siteContainer relative z-10">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 sm:p-12 lg:p-16 text-center shadow-2xl">
          <div className="flex flex-col items-center">
            {/* Green Brand Mark Icon */}
            <div className="mb-4">
              <img
                src="/assets/intro/mark.svg"
                alt="hosting.com"
                width={56}
                height={56}
                className="w-auto h-14 mx-auto"
                loading="lazy"
              />
            </div>

            {/* Preheading */}
            <div className="mb-2">
              <span className="font-body text-xs font-semibold tracking-wider text-emerald-700 uppercase">
                OUR BANGLADESH OFFICE
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Find Us in the Heart of Dhaka
            </h2>

            {/* Description & Address */}
            <div className="max-w-2xl font-body text-content text-base sm:text-lg leading-relaxed mb-8 space-y-4">
              <p>
                Our Bangladesh office is conveniently located in Banani, one of
                Dhaka’s key business districts. Visit our customer-facing office
                at Concord MB Tower during business hours or by scheduled
                appointment.
              </p>

              <div className="pt-2 text-sm sm:text-base border-t border-slate-100">
                <p className="font-bold text-heading">
                  hosting.com Bangladesh
                </p>
                <p className="text-content">
                  Concord MB Tower
                  <br />
                  Plot #81, Road #11, Block #E
                  <br />
                  Banani, Dhaka-1213, Bangladesh
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="https://maps.app.goo.gl/RBv4dEhfr8ppEFPfA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-[#081e12] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-black transition-all group"
              >
                <span>Get Directions on Map</span>
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
