import React from "react";
import { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutMission } from "@/components/about/about-mission";
import { AboutEthos } from "@/components/about/about-ethos";
import { AboutValues } from "@/components/about/about-values";
import { AboutStory } from "@/components/about/about-story";
import { AboutStats } from "@/components/about/about-stats";
import { AboutKnownFor } from "@/components/about/about-known-for";
import { AboutOffices } from "@/components/about/about-offices";
import { AboutQuotes } from "@/components/about/about-quotes";
import { AboutSupportContact } from "@/components/about/about-support-contact";
import { AboutLocalPayments } from "@/components/about/about-local-payments";

export const metadata: Metadata = {
  title: "About us - hosting.com",
  description:
    "Hosting.com - Trusted with 99.9% uptime, ultra-fast hosting, and award-winning support. Meet the team behind your website's success.",
  alternates: {
    canonical: "https://hosting.com/en-bd/about/",
  },
  openGraph: {
    title: "About us - hosting.com",
    description:
      "Hosting.com - Trusted with 99.9% uptime, ultra-fast hosting, and award-winning support. Meet the team behind your website's success.",
    url: "https://hosting.com/en-bd/about/",
    siteName: "hosting.com",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col">
      {/* 1. Hero with Animated Team Portrait Mosaic */}
      <AboutHero />

      {/* 2. Build global. Host local. Section */}
      <AboutMission />

      {/* 3. Our Ethos (Vision, Mission, Technology, Leadership) */}
      <AboutEthos />

      {/* 4. Core Values ("These aren't words on a wall.") */}
      <AboutValues />

      {/* 5. Our Story Timeline Milestones */}
      <AboutStory />

      {/* 6. Green Gradient Stats Banner */}
      <AboutStats />

      {/* 7. What We're Known For (Transparency, Tech-First, Trust at Scale) */}
      <AboutKnownFor />

      {/* 8. Global Offices Carousel (Dhaka, Bali, Bangalore, Manila, Sofia) */}
      <AboutOffices />

      {/* 9. Employee Quotes Carousel ("Listen to the people") */}
      <AboutQuotes />

      {/* 10. We've got your back (24/7 Support & Legal Info) */}
      <AboutSupportContact />

      {/* 11. Easy Local Payments in Bangladesh */}
      <AboutLocalPayments />
    </main>
  );
}
