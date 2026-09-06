"use client";

import React, { useRef } from "react";
import Image from "next/image";

interface OfficeItem {
  image: string;
  city: string;
  country?: string;
  paragraphs: string[];
}

const OFFICES: OfficeItem[] = [
  {
    image: "/assets/case_studies/dhaka-team_portrait_fit.jpg",
    city: "Dhaka,",
    country: "Bangladesh",
    paragraphs: [
      "Our Dhaka office is more than a workplace—it's a home for hosting in Bangladesh, where local expertise, innovation, and customer success come together. Since 2011, we've helped businesses across Bangladesh build, manage, and grow their online presence, earning the trust of customers across banking, media, education, e-commerce, software companies, agencies, ISPs, SMEs, enterprises, and many other industries.",
      "Today, our growing team of 18+ dedicated professionals works alongside hosting.com's global teams to deliver world-class hosting, cloud, domain, and digital solutions. From customer success and technical support to web services, business development, and content management, we're committed to providing reliable technology with personalised local service.",
      "More than an office, our Dhaka location is a place where customers, partners, developers, agencies, and entrepreneurs can connect with real experts. With face-to-face consultation, local billing, Bangla support, and the strength of a globally trusted hosting platform, hosting.com Bangladesh is helping businesses start locally, grow confidently, and reach customers around the world.",
    ],
  },
  {
    image: "/assets/case_studies/xmas-'24.webp",
    city: "Bali",
    paragraphs: [
      "Our Bali office is home to 138 talented specialists who keep our global hosting operation running smoothly around the clock. From the lightning-fast LiveChat and Ticket Support teams who solve customer issues in real time, to our Trust & Safety experts safeguarding every platform, this is where reliability meets heart. Our Retention and Billing teams ensure customers stay happy and supported, while our QA and Trainer roles raise the bar for quality and growth. Behind the scenes, technical masters in Infrastructure, Migration, and Fixed.net keep websites performing flawlessly, backed by the precision of our Domain and Accounting teams. Leading it all are our dedicated Supervisors, Care Team Leaders, and HR — the driving force behind Bali’s reputation for excellence, teamwork, and unbeatable customer care.",
    ],
  },
  {
    image: "/assets/case_studies/img_6764-(1)-(1)-(1).webp",
    city: "Bangalore",
    paragraphs: [
      "Our Bangalore office brings together more than 150 brilliant minds powering everything from customer care and sales to marketing, product, and beyond. It’s a vibrant hub of creativity, collaboration, and problem-solving - where strategies are built, relationships are nurtured, and ideas come to life. From guiding customers to the right solutions to driving global campaigns and innovation, our Bangalore team is at the heart of growth and connection. Fueled by energy, expertise, and a passion for excellence, they’re the people turning big ambitions into real results every day.",
    ],
  },
  {
    image: "/assets/case_studies/image-(4).webp",
    city: "Manila",
    paragraphs: [
      "The Manila, Philippines Team is a dedicated group of 92 professionals who are at the heart of delivering exceptional service and support to our global customers. As one of our most important operational hubs, this team plays a central role in empowering clients with reliable, secure, and easy-to-use web hosting solutions. Led by SJ Pineda of Customer Care and Shreeshaa Talwar of Global Sales and Retention, the team focuses on three key areas: Phone Customer Care, Billing, and Sales. These core functions ensure that our customers receive timely support, accurate billing, and the best hosting packages for their needs.",
    ],
  },
  {
    image: "/assets/case_studies/sofia-office.webp",
    city: "Sofia",
    paragraphs: [
      "Our Sofia office is powered by a team of 85 dedicated experts who blend technical brilliance with a passion for service. From lightning-fast LiveChat agents and skilled ticket support specialists to the sharp minds in Trust & Safety, Migration, and Infrastructure, every team member plays a crucial role in keeping our platforms reliable and our customers happy. This is also home to our Head of Global Training, ensuring every new hire across the company is set up for success. With specialists in WordPress maintenance, domain management, and quality assurance working alongside talented leaders, HR, and accounting professionals, Sofia stands as a hub of innovation, teamwork, and precision. It’s a place where expertise meets enthusiasm—where every problem has a solution, and every customer feels supported.",
    ],
  },
];

export function AboutOffices() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.85;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-background relative border-b border-ribbonBorder py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-siteContainer">
        {/* Header with Title and Nav Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="mb-3">
              <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border border-current text-primary">
                Global Offices
              </span>
            </div>
            <h2 className="font-display text-heading text-3xl sm:text-4xl font-bold tracking-tight mb-2">
              Meet our teams
            </h2>
            <p className="font-body text-content text-base sm:text-lg">
              Our global offices keep us moving everyday.
            </p>
          </div>

          {/* Slider Buttons */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous office"
              className="w-10 h-10 rounded-full border border-boxBorder bg-box hover:bg-slate-100 flex items-center justify-center text-heading transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next office"
              className="w-10 h-10 rounded-full border border-boxBorder bg-box hover:bg-slate-100 flex items-center justify-center text-heading transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Carousel of Offices */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {OFFICES.map((office, idx) => (
            <div
              key={idx}
              className="snap-start shrink-0 w-[90vw] sm:w-[85vw] lg:w-[800px] xl:w-[920px] rounded-2xl overflow-hidden border border-boxBorder bg-box shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 xl:grid-cols-[38%_62%]"
            >
              {/* Office Image Column */}
              <div className="relative min-h-[260px] xl:min-h-[420px] overflow-hidden bg-slate-100">
                <img
                  src={office.image}
                  alt={`${office.city} Office`}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Office Details Column */}
              <div className="p-6 sm:p-8 xl:p-10 flex flex-col justify-between">
                <div className="space-y-4 font-body text-content text-sm sm:text-base leading-relaxed overflow-y-auto max-h-[320px] pr-2">
                  {office.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-sm font-display">
                  <strong className="text-heading font-bold">{office.city}</strong>
                  {office.country && (
                    <span className="text-content font-medium opacity-70">
                      {office.country}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
