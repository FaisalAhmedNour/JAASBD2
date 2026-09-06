import type { Metadata } from "next";
import { CombdDomainsHero } from "@/components/domains/combd/combd-domains-hero";
import { CombdDomainsBuy } from "@/components/domains/combd/combd-domains-buy";
import { CombdDomainsWhyUs } from "@/components/domains/combd/combd-domains-why-us";
import { CombdDomainsWhyChoose } from "@/components/domains/combd/combd-domains-why-choose";
import { CombdDomainsFaq } from "@/components/domains/combd/combd-domains-faq";
import { CombdDomainsCta } from "@/components/domains/combd/combd-domains-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Register your .com.bd Domain Name in Bangladesh | JAASBD Hosting",
  description:
    "Register your .com.bd domain name with JAASBD. Fast BTCL verification, free DNS management, 24/7 Dhaka support, and instant nameserver routing.",
  openGraph: {
    title: "Register your .com.bd Domain Name in Bangladesh | JAASBD",
    description:
      "Everything you need to register and protect your .com.bd domain. Put your Bangladeshi business or venture on the map.",
    url: `https://${siteConfig.domain}/domains/combd`,
  },
};

export default function CombdDomainsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2F2ED]">
      <div id="search">
        <CombdDomainsHero />
      </div>
      <CombdDomainsBuy />
      <CombdDomainsWhyUs />
      <CombdDomainsWhyChoose />
      <CombdDomainsFaq />
      <CombdDomainsCta />
    </div>
  );
}
