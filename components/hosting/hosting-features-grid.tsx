"use client";

import React from "react";
import Image from "next/image";

interface FeatureCard {
  title: string;
  description: string;
  image: string;
}

const features: FeatureCard[] = [
  {
    title: "Rock-solid performance",
    description:
      "Litespeed Webserver ultrafast PHP execution and better time-to-first-byte, without overloading the server. Along with finely MySQL databases, our platform is engineered with caching, load balancing, and high-availability architecture.",
    image: "/assets/features/rock-solid-performance.png",
  },
  {
    title: "Automated backups",
    description:
      "Daily backups stored off-server, with restore for any point in the last 30 days. Our Web Application Firewall (WAF) actively blocks hacks, malware, and suspicious bots.",
    image: "/assets/features/your-data,-kept-safe.png",
  },
  {
    title: "Premium hardware",
    description:
      "AMD EPYC CPUs and NVMe SSD storage, refreshed to the latest generation with no downtime — the reason your site loads fast. Our fully cloud-based infrastructure lets us upgrade your site to the latest hardware seamlessly, with no downtime or disruption.",
    image: "/assets/features/superfast-nvme-servers.webp",
  },
  {
    title: "Scale without downtime",
    description:
      "Keep upgrading as you need more resources. Move up instantly, no migration, no interruption. Start with one site and scale up to 100 on the same plan family, with no replatforming. When you outgrow web hosting, step up to your own server with zero downtime. Same panel, same team, and we move you across for free.",
    image: "/assets/features/always-the-latest-hardware.png",
  },
  {
    title: "Collaboration Tools",
    description:
      "Invite colleagues or developers to work on your websites and manage your account on your behalf; remove them when they are no longer needed",
    image: "/assets/features/collaboration-tools.webp",
  },
  {
    title: "Build with AI",
    description:
      "An inbuilt AI Website Builder for WordPress, so you can build a website quickly by prompting",
    image: "/assets/features/build-with-ai.webp",
  },
  {
    title: "Email included",
    description:
      "Email accounts and forwarders are included. Access via desktop, phones or webmail.",
    image: "/assets/features/email-accounts-with-webmail.webp",
  },
  {
    title: "Supports all major software",
    description:
      "Support for all major website languages and databases - PHP, NodeJS, MySQL, PostgreSQL and more. So no matter how you build your site, our hosting will run it.",
    image: "/assets/features/php)-and-database-support.webp",
  },
];

export function HostingFeaturesGrid() {
  return (
    <section className="py-16 lg:py-24 bg-[#F2F2ED] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A1616]">
            Everything included, nothing to bolt on
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556360] leading-relaxed">
            The performance, security and tooling most hosts charge extra for come standard on every plan. Every plan includes NVMe storage, LiteSpeed caching, unlimited databases, malware protection and free SSL. No un-necessary upsells.
          </p>
        </div>

        {/* 8 Feature Cards Grid (4 columns on wide screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-[#0A1616] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#556360] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Feature Graphic */}
              <div className="relative w-full h-[150px] rounded-xl overflow-hidden bg-[#F9FAFB] border border-[#F3F4F6] mt-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
