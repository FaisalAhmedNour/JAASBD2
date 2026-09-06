"use client";

import React from "react";
import Image from "next/image";

export function MigrationSteps() {
  const steps = [
    {
      step: 1,
      icon: "/assets/features/dark-1.svg",
      title: "Tell us what you're moving",
      description:
        "Sign up, then share a login for your old host — or just a backup file. Either works.",
    },
    {
      step: 2,
      icon: "/assets/features/dark-2.svg",
      title: "We copy everything and test it",
      description:
        "Your live site stays up and untouched while we migrate a copy of it to our servers.",
    },
    {
      step: 3,
      icon: "/assets/features/dark-3.svg",
      title: "You check it, then we switch",
      description:
        "Preview your migrated site on a temporary URL before any DNS changes. You approve the go-live.",
    },
    {
      step: 4,
      icon: "/assets/features/dark-deploy.svg",
      title: "Your site goes live",
      description:
        "Post-migration checks, then the same team stays on hand 24/7.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-semibold text-[#067547] uppercase tracking-wider">
            Simple 4-Step Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1616] tracking-tight mt-2">
            How our zero-downtime migration works
          </h2>
          <p className="text-[#556360] text-sm sm:text-base mt-3">
            Sit back and let our certified server engineers handle the heavy lifting while your business runs uninterrupted.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-7 shadow-sm hover:shadow-md hover:border-[#00E599] transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 mb-6 relative">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-[#0A1616] mb-2.5 leading-snug group-hover:text-[#067547] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#556360] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-bold text-[#9CA3AF]">
                <span>Step 0{item.step}</span>
                <span className="w-2 h-2 rounded-full bg-[#00E599]/40 group-hover:bg-[#00E599] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
