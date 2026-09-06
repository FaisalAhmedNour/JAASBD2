import React from "react";
import Image from "next/image";

export function AboutMission() {
  return (
    <section className="bg-background relative border-b border-ribbonBorder py-16 lg:py-24">
      <div className="container mx-auto px-siteContainer">
        <div className="grid lg:grid-cols-12 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Story & Commitment */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="mb-4">
              <h2 className="font-display text-heading text-3xl sm:text-4xl font-bold tracking-tight">
                Build global. Host local.
              </h2>
            </div>
            
            <div className="space-y-4 font-body text-content text-base sm:text-normal leading-relaxed">
              <p className="font-semibold text-heading text-lg">
                Start your online journey in Bangladesh with hosting.com and grow your business with confidence—locally and around the world.
              </p>
              <p>
                Since 2011, businesses across Bangladesh have trusted our team to power their online success. We&apos;ve built lasting relationships with customers across banking, media, education, e-commerce, enterprises, software companies, agencies, ISPs, SMEs, and many other industries. Today, as hosting.com Bangladesh, we continue that journey by combining trusted local expertise with the strength of a global platform.
              </p>
              <p>
                Whether your customers are in Bangladesh or across the world, hosting.com provides the infrastructure, expertise, and support to help your business grow. With 10 global hosting locations, enterprise-grade infrastructure, local billing, Bangla support, and a customer-facing office in Dhaka.
              </p>
            </div>
          </div>

          {/* Right Column: Office Photography */}
          <div className="lg:col-span-6 mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl border border-boxBorder shadow-lg">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="/assets/billboard/mobile/dhaka-office-web1.jpg"
                />
                <img
                  src="/assets/billboard/dhaka-office-web1.jpg"
                  alt="hosting.com Dhaka office"
                  className="h-full w-full object-cover lg:max-h-[28rem] xl:max-h-none select-none"
                  width={752}
                  height={500}
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
