"use client";

import React from "react";
import Image from "next/image";

const tools = [
  { name: "Joomla", src: "/assets/brands/joomla-1-1.svg" },
  { name: "WordPress", src: "/assets/brands/wordpress-grey-box.svg" },
  { name: "Magento", src: "/assets/brands/magento-1-1.svg" },
  { name: "Drupal", src: "/assets/brands/drupal-1-1.svg" },
  { name: "WooCommerce", src: "/assets/brands/woo.png" },
];

export function HostingToolsEcosystem() {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0A1616] mb-10">
          Works with the tools you know
        </h2>

        {/* Logos Flex / Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 lg:gap-20">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-200 flex items-center justify-center h-12 w-28 sm:w-36"
            >
              <div className="relative w-full h-9">
                <Image
                  src={tool.src}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
