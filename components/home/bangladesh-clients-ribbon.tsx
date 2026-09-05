"use client";

import React from "react";
import Image from "next/image";

const bdClients = [
  { name: "The Business Standard", src: "/assets/brands/tbs_logo.webp" },
  { name: "bKash", src: "/assets/brands/bkash-logo.png" },
  { name: "Eastern Bank Ltd", src: "/assets/brands/logo_of_eastern_bank_(bangladesh).svg.png" },
  { name: "Prime Bank", src: "/assets/brands/logo_of_prime_bank.svg.png" },
  { name: "Bengal Group", src: "/assets/brands/bengel-group_logo.png" },
  { name: "Rangs Group", src: "/assets/brands/rangs-group-logo.png" },
  { name: "Mongla Port", src: "/assets/brands/mongla-port_logo.jpeg" },
  { name: "Bhaia Group", src: "/assets/brands/bhaia-group.png" },
];

export function BangladeshClientsRibbon() {
  return (
    <div className="py-12 bg-[#F9FAF8] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#6D7779] mb-8">
          Trusted by businesses throughout Bangladesh
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {bdClients.map((client, idx) => (
            <div
              key={idx}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-200 flex items-center justify-center h-10 w-24 sm:w-28"
            >
              <div className="relative w-full h-8">
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
