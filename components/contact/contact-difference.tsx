import React from "react";
import Image from "next/image";

interface DifferenceFeature {
  icon: string;
  title: string;
  description: string;
}

const FEATURES: DifferenceFeature[] = [
  {
    icon: "/assets/features/qq-20x-faster-turbo.svg",
    title: "Up to 20X faster turbo",
    description:
      "That means better SEO rankings, lower bounce rates & higher conversion rates!",
  },
  {
    icon: "/assets/features/qq-guru-support.svg",
    title: "Guru crew support",
    description:
      "Our knowledgeable and friendly support team is available 24/7/365 to help!",
  },
  {
    icon: "/assets/features/icon-transfer-domain-green.svg",
    title: "Free account migration",
    description:
      "We’ll move your site from your old host for free. Contact our team to request a transfer.",
  },
  {
    icon: "/assets/features/qq-money-back.svg",
    title: "Money-back guarantee",
    description: "Give our high-speed hosting service a try completely risk-free!",
  },
  {
    icon: "/assets/features/qq-uptime.svg",
    title: "99.9% uptime commitment",
    description:
      "Hosting.com is the host you can depend on with ultra-reliable servers!",
  },
];

export function ContactDifference() {
  return (
    <section className="bg-[#031a0d] text-white py-16 lg:py-24 relative isolate overflow-hidden">
      <div className="container mx-auto px-siteContainer">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="font-display text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Experience the hosting.com difference
          </h2>
        </div>

        {/* 5-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border border-emerald-900/60 bg-[#072916] p-7 sm:p-8 flex flex-col justify-between shadow-lg hover:border-emerald-600/50 transition-all duration-300 ${
                idx === 3 ? "lg:col-span-1" : idx === 4 ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-start">
                    <img
                      src={feat.icon}
                      alt={feat.title}
                      width={56}
                      height={56}
                      className="w-auto h-12"
                      loading="lazy"
                    />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {feat.title}
                </h3>

                <p className="font-body text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
