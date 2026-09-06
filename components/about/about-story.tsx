import React from "react";
import Image from "next/image";

interface StoryMilestone {
  yearIcon: string;
  title: string;
  description: string;
}

const MILESTONES: StoryMilestone[] = [
  {
    yearIcon: "/assets/features/2003.svg",
    title: "In the beginning",
    description: "A2 Hosting is founded in Ann Arbor, Michigan.",
  },
  {
    yearIcon: "/assets/features/2019.svg",
    title: "Birth of a titan",
    description:
      "World Host Group is born, uniting brands under a global-first mindset.",
  },
  {
    yearIcon: "/assets/features/2025.svg",
    title: "A union for the ages",
    description:
      "We become hosting.com, bringing together the best of WHG and A2.",
  },
  {
    yearIcon: "/assets/features/2026.svg",
    title: "A New Chapter in Bangladesh",
    description:
      "Building on the trusted legacy of EyHost since 2011, hosting.com officially launched in Bangladesh, combining world-class infrastructure with local expertise, dedicated support, and a long-term commitment to helping businesses grow.",
  },
];

export function AboutStory() {
  return (
    <section className="bg-background relative border-b border-ribbonBorder py-16 lg:py-24">
      <div className="container mx-auto px-siteContainer">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Our story
          </h2>
          <p className="font-body text-content text-base sm:text-lg leading-relaxed">
            This isn&apos;t an overnight success story. It&apos;s built on years
            of innovation, trusted relationships, and a commitment to helping
            businesses succeed—globally and now proudly in Bangladesh.
          </p>
        </div>

        {/* 4-column timeline cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {MILESTONES.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-boxBorder bg-box p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-start"
            >
              <div className="mb-6">
                <div className="w-14 h-14 flex items-center justify-start">
                  <img
                    src={item.yearIcon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="w-auto h-12"
                    loading="lazy"
                  />
                </div>
              </div>

              <h3 className="font-display text-lg font-bold text-boxHeading mb-3">
                {item.title}
              </h3>

              <p className="font-body text-boxContent text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
