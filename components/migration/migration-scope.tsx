"use client";

import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export function MigrationScope() {
  const scopes = [
    {
      icon: "/assets/features/dark-web.svg",
      title: "Your website",
      description:
        "Every file, page, image and database, copied exactly as it is. Nothing rebuilt, nothing re-uploaded by you.",
      points: [
        "All WordPress, Laravel, PHP, Node.js files",
        "Full MySQL / MariaDB database sync",
        "Themes, plugins, uploads & custom configs",
      ],
    },
    {
      icon: "/assets/features/dark-email.svg",
      title: "Your email",
      description:
        "Mailboxes, messages and folders arrive intact, not empty accounts you set up again. Aliases, forwarders and catch-alls come too. On Google Workspace or Microsoft 365? We leave your mail where it is and move just the site.",
      points: [
        "Full IMAP mailbox and folder synchronization",
        "Email forwarders, filters and autoresponders",
        "Seamless MX & SPF/DKIM DNS configuration",
      ],
    },
    {
      icon: "/assets/features/dark-website.svg",
      title: "Your domains",
      description:
        "Transferring your domains to JAASBD is easy. We move your registration over, and there's no gap where your site or email drops offline. Once it's with us, your domains, hosting and email will all sit under your portal login.",
      points: [
        "Zero-downtime DNS cutover",
        "Free automatic SSL issued beforehand",
        "Unified dashboard management",
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-semibold text-[#067547] uppercase tracking-wider">
            Complete Coverage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1616] tracking-tight mt-2">
            One move. All of it.
          </h2>
          <p className="text-[#556360] text-sm sm:text-base mt-3">
            Your whole setup comes across in a single migration, not piece by piece, not &ldquo;site now, email later.&rdquo; If it&apos;s live today, it&apos;s part of the move.
          </p>
        </div>

        {/* 3 Scope Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {scopes.map((scope, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-[#E5E7EB] bg-[#F9FAFB] p-8 shadow-xs hover:shadow-md hover:border-[#00E599] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 mb-6 relative">
                  <Image
                    src={scope.icon}
                    alt={scope.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0A1616] mb-3">
                  {scope.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#556360] leading-relaxed mb-6">
                  {scope.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#E5E7EB] space-y-2.5">
                {scope.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2 text-xs text-[#374151]">
                    <Check className="w-4 h-4 text-[#067547] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center text-xs sm:text-sm text-[#6D7779] font-medium">
          Nothing stranded on your old host, nothing left for you to rebuild. You move once and everything comes with you.
        </div>
      </div>
    </section>
  );
}
