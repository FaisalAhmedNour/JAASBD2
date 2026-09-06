import type { Metadata } from "next";
import { MigrationHero } from "@/components/migration/migration-hero";
import { MigrationSteps } from "@/components/migration/migration-steps";
import { MigrationTrustStats } from "@/components/migration/migration-trust-stats";
import { MigrationTeamQuote } from "@/components/migration/migration-team-quote";
import { MigrationScope } from "@/components/migration/migration-scope";
import { MigrationCaseStudies } from "@/components/migration/migration-case-studies";
import { MigrationGuarantees } from "@/components/migration/migration-guarantees";
import { MigrationFaq } from "@/components/migration/migration-faq";
import { MigrationCta } from "@/components/migration/migration-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Free Website Migration to a Better Host | JAASBD Hosting",
  description:
    "Move your website to faster hosting with free migration from JAASBD. Our team handles the transfer to minimise disruption with zero downtime.",
  openGraph: {
    title: "Free Website Migration to a Better Host | JAASBD",
    description:
      "Move your website to 20x faster hosting with free zero-downtime migration from JAASBD.",
    url: `https://${siteConfig.domain}/hosting/free-website-migration`,
  },
};

export default function FreeWebsiteMigrationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F2F2ED]">
      <MigrationHero />
      <MigrationSteps />
      <MigrationTrustStats />
      <MigrationTeamQuote />
      <MigrationScope />
      <MigrationCaseStudies />
      <MigrationGuarantees />
      <MigrationFaq />
      <MigrationCta />
    </div>
  );
}
