"use client";

import React from "react";
import Image from "next/image";

const toolLogos = [
  { name: "WordPress", src: "/assets/brands/wordpress-grey-box.svg" },
  { name: "Drupal", src: "/assets/brands/drupal-1-1.svg" },
  { name: "Joomla", src: "/assets/brands/joomla-1-1.svg" },
  { name: "Magento", src: "/assets/brands/magento-1-1.svg" },
  { name: "Typo3", src: "/assets/brands/typo3-1-1.svg" },
  { name: "WooCommerce", src: "/assets/brands/woo.png" },
  { name: ".NET", src: "/assets/brands/dotnet_logo.svg" },
];

export function ToolsMarquee() {
  return (
    <section className="py-16 bg-white border-t border-[#E5E7EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1616] mb-3">
          Works with the tools you know
        </h2>
        <p className="text-sm text-[#6D7779] max-w-xl mx-auto mb-10">
          Seamless 1-click installation for 400+ popular frameworks, CMS platforms, and databases.
        </p>

        {/* Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
          {toolLogos.map((logo, idx) => (
            <div
              key={idx}
              className="grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-200 flex items-center justify-center h-12 w-28 sm:w-32"
            >
              <div className="relative w-full h-8">
                <Image
                  src={logo.src}
                  alt={logo.name}
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
