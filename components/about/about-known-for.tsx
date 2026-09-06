import React from "react";
import Image from "next/image";

interface KnownForItem {
  icon: string;
  title: string;
  description: string;
}

const ITEMS: KnownForItem[] = [
  {
    icon: "/assets/features/transparency.svg",
    title: "Transparency",
    description:
      "No hidden fees. No confusing terms. Just clear info, fair pricing, and real people.",
  },
  {
    icon: "/assets/features/tech-first.svg",
    title: "Tech-first thinking",
    description:
      "From day one, you’ve been on our performance-first platform, which is engineered to scale with you.",
  },
  {
    icon: "/assets/features/trust-at-scale.svg",
    title: "Trust at scale",
    description: "3 million+ sites and counting. We don’t take that lightly.",
  },
];

export function AboutKnownFor() {
  return (
    <section className="bg-background relative border-b border-ribbonBorder py-16 lg:py-24">
      <div className="container mx-auto px-siteContainer">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-heading text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            What we’re known for
          </h2>
          <p className="font-body text-content text-base sm:text-lg">
            Doing what we say.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-boxBorder bg-box p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-start"
            >
              <div className="mb-6">
                <div className="w-12 h-12 flex items-center justify-start">
                  <img
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="w-auto h-12"
                    loading="lazy"
                  />
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-boxHeading mb-3">
                {item.title}
              </h3>

              <p className="font-body text-boxContent text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
