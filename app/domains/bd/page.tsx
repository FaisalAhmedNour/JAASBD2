import type { Metadata } from "next";
import { BdDomainsHero } from "@/components/domains/bd/bd-domains-hero";
import { BdDomainsBuy } from "@/components/domains/bd/bd-domains-buy";
import { BdDomainsWhyUs } from "@/components/domains/bd/bd-domains-why-us";
import { BdDomainsWhyChoose } from "@/components/domains/bd/bd-domains-why-choose";
import { BdDomainsFaq } from "@/components/domains/bd/bd-domains-faq";
import { BdDomainsCta } from "@/components/domains/bd/bd-domains-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Register your .bd Domain Name in Bangladesh | JAASBD Hosting",
  description:
    "Register your .bd and .com.bd domains with JAASBD. Fast BTCL verification, free DNS management, 24/7 Dhaka support, and instant nameserver routing.",
  openGraph: {
    title: "Register your .bd Domain Name in Bangladesh | JAASBD",
    description:
      "Everything you need to register and protect your .bd domain. Put your Bangladesh business on the map.",
    url: `https://${siteConfig.domain}/domains/bd`,
  },
};

export default function BdDomainsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2F2ED]">
      <div id="search">
        <BdDomainsHero />
      </div>
      <BdDomainsBuy />
      <BdDomainsWhyUs />
      <BdDomainsWhyChoose />
      <BdDomainsFaq />
      <BdDomainsCta />
    </div>
  );
}
