import React from "react";
import Image from "next/image";

interface EthosCardProps {
  icon: string;
  bgImage: string;
  title: string;
  description: string;
}

const ETHOS_CARDS: EthosCardProps[] = [
  {
    icon: "/assets/features/vision.svg",
    bgImage: "/assets/features/bd-about-4.webp",
    title: "Our vision",
    description:
      "To be the most trusted hosting company in the world. That’s it. That’s our North Star. At hosting.com, we’re building something better: reliable, sustainable, and unapologetically human. Trust is earned daily. Not just through uptime, but by doing what we say, fixing what breaks, and showing up when it matters.",
  },
  {
    icon: "/assets/features/mission.svg",
    bgImage: "/assets/features/bd-about-3.webp",
    title: "Our mission",
    description:
      "We provide a global hosting platform that helps people succeed online. Built on powerful tech, best-in-class service, and a people-first approach. We make the complex simpler. We give you tools and support that actually help. We show up, consistently. Because trust isn’t a slogan, it’s a promise.",
  },
  {
    icon: "/assets/features/what-we-do.svg",
    bgImage: "/assets/features/bd-about-1.webp",
    title: "Building for the future",
    description:
      "We keep your site fast, stable, and ready to grow. Every plan runs on high-performance infrastructure: AMD EPYC processors, Samsung NVMe storage, and Anycast DNS. It’s built to scale whether you’re running a personal blog or a global eCommerce empire.",
  },
  {
    icon: "/assets/features/lead.svg",
    bgImage: "/assets/features/bd-about-2.webp",
    title: "Leading from the front",
    description:
      "Our leadership doesn’t sit on the sidelines. We build fast, lead by example, and go the extra mile. We believe in quiet confidence, taking action, and helping entrepreneurs win worldwide.",
  },
];

export function AboutEthos() {
  return (
    <section className="bg-background relative border-b border-ribbonBorder py-16 lg:py-24">
      <div className="container mx-auto px-siteContainer">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="mb-3">
            <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border border-current text-primary">
              Trust
            </span>
          </div>
          <h2 className="font-display text-heading text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Our ethos
          </h2>
          <p className="font-body text-content text-base sm:text-lg leading-relaxed">
            Whether you&apos;re launching your first website or managing enterprise infrastructure, we&apos;re committed to helping you succeed with global technology, trusted local expertise, and support that puts your business first.
          </p>
        </div>

        {/* 2x2 Grid of Ethos Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ETHOS_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-boxBorder shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between p-8 sm:p-10 min-h-[380px] bg-white"
            >
              {/* Card Background Overlay / Photo */}
              <div className="absolute inset-0 -z-10 opacity-30 group-hover:opacity-40 transition-opacity duration-300">
                <img
                  src={card.bgImage}
                  alt=""
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                <div>
                  <div className="mb-6">
                    <img
                      src={card.icon}
                      alt={card.title}
                      width={50}
                      height={50}
                      className="w-auto h-12"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-heading mb-4">
                    {card.title}
                  </h3>
                  <p className="font-body text-content text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
