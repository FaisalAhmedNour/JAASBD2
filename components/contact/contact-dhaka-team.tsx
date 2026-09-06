import React from "react";
import Link from "next/link";
import Image from "next/image";

export function ContactDhakaTeam() {
  return (
    <section className="bg-background relative border-b border-ribbonBorder py-16 lg:py-24">
      <div className="container mx-auto px-siteContainer">
        {/* Top Intro: Visit Us in Dhaka */}
        <div className="grid lg:grid-cols-12 lg:gap-12 xl:gap-16 items-start mb-16 lg:mb-20">
          <div className="lg:col-span-5">
            <div className="mb-3">
              <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border border-current text-primary">
                VISIT US IN DHAKA
              </span>
            </div>
            <h2 className="font-display text-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Meet the hosting.com Team in Dhaka
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-4 font-body text-content text-base sm:text-normal leading-relaxed mt-4 lg:mt-0">
            <p>
              Sometimes it’s better to talk face-to-face. Visit our Dhaka office
              and meet our local team to discuss your hosting needs, get
              personalized guidance, or explore new solutions for your business.
            </p>
            <p>
              To ensure you receive dedicated attention without delay, we
              encourage visitors to book an appointment in advance. This helps us
              ensure our specialists are available to understand your
              requirements, and provide you with personalized guidance for your
              business and web hosting needs.
            </p>

            <div className="pt-2">
              <a
                href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=4wiO6nqcwECV727AqFKpYRj8VwK3JT9EuQls02Ppj8pUM1UwQk9DUUtSTlZISVRIRTcxSFhTUTM1VC4u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-[#081e12] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-black transition-all group"
              >
                <span>Schedule an Office Visit</span>
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

        {/* Juxtaposed Feature Card: Your Local Home for Hosting */}
        <div className="flex flex-col lg:flex-row overflow-hidden rounded-3xl border border-boxBorder shadow-sm bg-white">
          {/* Left Narrative Box */}
          <div className="order-2 lg:order-1 lg:w-2/5 flex flex-col justify-center p-8 sm:p-12 lg:p-14 bg-white">
            <div className="space-y-5">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-heading">
                Your Local Home for Hosting in Bangladesh
              </h3>
              <p className="font-body text-content text-base leading-relaxed">
                More than an office, this is our home for hosting in Bangladesh —
                a space created for customers, businesses, developers, agencies,
                and our local digital community. It reflects our commitment to
                being present, accessible, and connected to the people we serve.
              </p>

              <div className="pt-3">
                <a
                  href="https://maps.app.goo.gl/RBv4dEhfr8ppEFPfA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#081e12] px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-black transition-all group"
                >
                  <span>Get Directions</span>
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

          {/* Right Office Interior Photo */}
          <div className="order-1 lg:order-2 lg:w-3/5 overflow-hidden bg-slate-100 min-h-[300px]">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet="/assets/juxtapose/mobile/dhaka_office_mobile.webp"
              />
              <source
                media="(max-width: 1023px)"
                srcSet="/assets/juxtapose/tablet/dhaka_office_tablet.webp"
              />
              <img
                src="/assets/juxtapose/dhaka_office_web.webp"
                alt="Your Local Home for Hosting in Bangladesh"
                className="w-full h-full object-cover object-center"
                width={1080}
                height={720}
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
