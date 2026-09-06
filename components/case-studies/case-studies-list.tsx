import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudyItem {
  id: string;
  image: string;
  title: string;
  description: string;
  company: string;
  pdfOrLink: string;
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "soxcessful",
    image: "/assets/case_studies/automated-backups.webp",
    title: "They were losing Google rankings everyime their site went down",
    description:
      "Every minute of downtime is a missed opportunity for Google to crawl your site, leading to tanked rankings and lost enterprise credibility. This case study reveals how Soxcessful escaped the cycle of recurring outages and \"silent\" SEO killers by moving their Magento-driven activations to a specialized, managed VPS. Download the full report to see the exact infrastructure blueprint used to eliminate downtime and restore search visibility for high-stakes marketing campaigns.",
    company: "Soxcessful",
    pdfOrLink: "https://65e9ba8d-6c9e-4e5c-9b32-c46af490145b.eu02.ldpgs.eu/fmdl3",
  },
  {
    id: "cube-creative",
    image: "/assets/case_studies/ai-website.webp",
    title: "They managed 300+ client sites across multiple hosts. One move fixed it.",
    description:
      "Managing a fragmented portfolio across different providers creates massive operational drag and makes consistent SEO performance impossible to guarantee. This case study reveals how Cube Creative Design consolidated over 300 client websites onto a single, high-performance platform to reclaim full configuration control and server-level stability. Download the full report to see the exact VPS structure they used to eliminate management headaches and optimize speed across their entire agency portfolio.",
    company: "Cube Creative",
    pdfOrLink: "https://65e9ba8d-6c9e-4e5c-9b32-c46af490145b.eu02.ldpgs.eu/te1b5mo",
  },
  {
    id: "cotton-creek-farm",
    image: "/assets/case_studies/bd-reseller.webp",
    title: "Their WooCommerce store was invisible to Google. Here's what changed.",
    description:
      "Every time a slow server blocks a Google crawl, your products vanish from search results, costing you rankings and revenue. This case study reveals how Cotton Creek Farms restored indexing for their 1,000+ SKU store by moving to a WooCommerce-optimized environment that eliminated performance bottlenecks. Download the full report to see the exact hosting setup that fixed crawlability and removed the need for ongoing developer support.",
    company: "Cotton Creek Farm",
    pdfOrLink: "https://65e9ba8d-6c9e-4e5c-9b32-c46af490145b.eu02.ldpgs.eu/wfa0jfi",
  },
  {
    id: "axia-development",
    image: "/assets/case_studies/generic-image-02.webp",
    title: "A security breach forced them to rebuild their entire website. It won't happen again.",
    description:
      "For a reputation-based business, a single phishing attack can destroy years of client trust and force a costly, total infrastructure rebuild. This case study reveals how Axia Development moved from a fragmented, vulnerable setup to a consolidated platform that integrates security, performance, and optimization into one impenetrable layer. Download the full report to see how they eliminated the \"blame loop\" between providers and secured their digital assets with a single-platform solution.",
    company: "Axia Development",
    pdfOrLink: "https://65e9ba8d-6c9e-4e5c-9b32-c46af490145b.eu02.ldpgs.eu/7mxafox",
  },
  {
    id: "usersearch",
    image: "/assets/case_studies/com-domain-registration-support.webp",
    title: "A four-hour investigation task, automated to eight minutes. The infrastructure had to keep up.",
    description:
      "When law enforcement and cybersecurity experts depend on your platform for active investigations, server downtime isn't just a technical glitch—it's a threat to live cases. This case study reveals how UserSearch.com scaled to serve over one million monthly users by evolving from a shared script to a high-concurrency, self-managed VPS environment. Download the full report to see the 20-year infrastructure roadmap that allowed a global investigative tool to scale massively without a single disruptive migration.",
    company: "UserSearch.com",
    pdfOrLink: "https://65e9ba8d-6c9e-4e5c-9b32-c46af490145b.eu02.ldpgs.eu/v4l45hx",
  },
];

export function CaseStudiesList() {
  return (
    <section className="bg-background relative py-16 lg:py-24">
      <div className="container mx-auto px-siteContainer">
        <div className="space-y-10 lg:space-y-14">
          {CASE_STUDIES.map((study, idx) => (
            <article
              key={study.id}
              className="group grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-3xl border border-boxBorder shadow-sm hover:shadow-md transition-all duration-300 bg-[#072916] text-white"
            >
              {/* Left Column: Visual / Product Screenshot (5 cols) */}
              <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] bg-emerald-950/40 overflow-hidden flex items-center justify-center p-6 sm:p-8">
                <picture className="w-full h-full flex items-center justify-center">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-contain max-h-[380px] transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </picture>
              </div>

              {/* Right Column: Case Study Narrative (7 cols) */}
              <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl lg:text-3xl font-bold text-white tracking-tight mb-4 leading-snug">
                    {study.title}
                  </h2>

                  <p className="font-body text-emerald-100/80 text-sm sm:text-base leading-relaxed mb-8">
                    {study.description}
                  </p>
                </div>

                {/* Bottom Row: Company & CTA Action */}
                <div className="pt-6 border-t border-emerald-800/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="font-display font-semibold text-sm text-emerald-300 tracking-wide">
                    {study.company}
                  </span>

                  <a
                    href={study.pdfOrLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow hover:bg-slate-100 transition-all group/btn"
                  >
                    <span>Read the full case study</span>
                    <span className="w-6 h-6 rounded-md bg-emerald-500 text-slate-950 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                      <svg
                        className="w-3.5 h-3.5"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
