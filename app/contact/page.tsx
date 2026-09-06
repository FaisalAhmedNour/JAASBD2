import React from "react";
import { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactDhakaTeam } from "@/components/contact/contact-dhaka-team";
import { ContactDhakaMap } from "@/components/contact/contact-dhaka-map";
import { ContactDifference } from "@/components/contact/contact-difference";
import { ContactBlog } from "@/components/contact/contact-blog";

export const metadata: Metadata = {
  title: "Contact us - hosting.com",
  description:
    "Contact hosting.com. Need help? We've got you covered with 24/7 support, phone hotlines, and a customer-facing office in Banani, Dhaka.",
  alternates: {
    canonical: "https://hosting.com/en-bd/contact/",
  },
  openGraph: {
    title: "Contact us - hosting.com",
    description:
      "Contact hosting.com. Need help? We've got you covered with 24/7 support, phone hotlines, and a customer-facing office in Banani, Dhaka.",
    url: "https://hosting.com/en-bd/contact/",
    siteName: "hosting.com",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="w-full flex flex-col">
      {/* 1. Hero with Hotlines & Live Chat */}
      <ContactHero />

      {/* 2. Meet the hosting.com Team in Dhaka */}
      <ContactDhakaTeam />

      {/* 3. Find Us in the Heart of Dhaka (Map & Address) */}
      <ContactDhakaMap />

      {/* 4. Experience the hosting.com Difference */}
      <ContactDifference />

      {/* 5. Read more about our products (Blog Articles) */}
      <ContactBlog />
    </main>
  );
}
