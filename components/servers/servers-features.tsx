"use client";

import React from "react";
import { LayoutGrid, Headphones, RefreshCw, ShieldCheck, Lock } from "lucide-react";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureItem[] = [
  {
    title: "One simple panel",
    description:
      "Your sites, email and settings in one place, in the same straightforward panel our web hosting uses. Nothing technical to learn.",
    icon: <LayoutGrid className="w-5 h-5 text-[#067547]" />,
  },
  {
    title: "Our team runs it",
    description:
      "Real people, in-house, looking after the hard parts and answering whenever you need a hand. Around the clock, all year.",
    icon: <Headphones className="w-5 h-5 text-[#067547]" />,
  },
  {
    title: "Free migration",
    description:
      "We move every site across for you with zero downtime, and check everything works before you switch over.",
    icon: <RefreshCw className="w-5 h-5 text-[#067547]" />,
  },
  {
    title: "Automated SSL & email",
    description:
      "Standard and wildcard SSL certificates handled automatically, alongside dedicated business email and webmail.",
    icon: <Lock className="w-5 h-5 text-[#067547]" />,
  },
  {
    title: "Proactive security",
    description:
      "Monarx active malware protection, automated daily off-site backups, and DDoS mitigation keeping your server secure 24/7.",
    icon: <ShieldCheck className="w-5 h-5 text-[#067547]" />,
  },
];

export function ServersFeatures() {
  return (
    <section className="py-16 lg:py-24 bg-[#F2F2ED] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0A1616]">
            The power of a server, the simplicity of web hosting
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#556360] leading-relaxed">
            Running a server sounds technical. This doesn&apos;t feel like it: everything lives in one simple panel, the day-to-day is handled, and help is there whenever you want it.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between ${
                idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E8F8F0] border border-[#C6F0D8] flex items-center justify-center mb-4">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0A1616] mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#556360] leading-relaxed">
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
