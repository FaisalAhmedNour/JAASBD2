"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ChevronDown, Plus } from "lucide-react";

export function MigrationFaq() {
  const [showAll, setShowAll] = useState(false);

  const initialFaqs = [
    {
      q: "Will my email come across — messages and all, or just empty mailboxes?",
      a: "Your mailboxes come across in full — messages, folders, and attachments, not empty accounts recreated at the other end. We configure your MX and DNS records as part of the move, so email keeps flowing without disruption. Prefer to keep Google Workspace or Microsoft 365? We'll move just your site and leave your mail exactly where it is.",
    },
    {
      q: "Is the migration really free — and is there a limit?",
      a: "Yes, 100% free with no hidden fees, no setup charge, and no per-site invoice at the end. Migrations are completely included on every hosting, VPS, and managed server plan.",
    },
    {
      q: "What exactly do you move?",
      a: "Coming from cPanel, Plesk, DirectAdmin, or any standard Linux server, we bring everything: core files, database content, themes, plugins, mailboxes, DNS zone records, and SSL certificates (re-issued and verified before go-live). For custom CMS architectures, our engineers migrate all files and databases by hand.",
    },
    {
      q: "Do I have to do any of the technical work?",
      a: "None at all. Our migration engineers do the entire transfer. You provide your old host login or a backup archive; we reconstruct everything on our LiteSpeed NVMe servers; you test on a temporary preview link and confirm the go-live.",
    },
    {
      q: "How long does it take? Can I choose when?",
      a: "Most migrations complete within 30 minutes to a few hours depending on database and media size. Because our team is on duty 24/7/365, we can schedule the cutover at whatever exact hour suits your business best.",
    },
    {
      q: "Will my site go offline during the move?",
      a: "No downtime. Your current website remains 100% live and serving visitors at your old host throughout the copy process. We only switch your domain DNS once the new server clone is tested and approved by you.",
    },
  ];

  const additionalFaqs = [
    {
      q: "I've lost access to my old host and only have a backup file. Can you still help?",
      a: "Yes! If you've been locked out or cancelled, our team can restore directly from your backup file (.tar.gz, .zip, cPanel backup, or WordPress export plugins like UpdraftPlus, All-in-One WP Migration, or Duplicator). We don't enforce file size limits on migration archives.",
    },
    {
      q: "Do you only migrate WordPress sites?",
      a: "No — while WordPress and WooCommerce represent many transfers, we routinely migrate Joomla, Drupal, Magento, Laravel, Node.js applications, static HTML sites, and custom PHP applications.",
    },
    {
      q: "What if my site is high-traffic or ecommerce?",
      a: "For busy WooCommerce or high-traffic portals, we perform a delta sync: we copy the bulk files first, put the old site in brief maintenance during off-peak hours to capture the latest orders and customer registrations, and switch DNS immediately with zero lost transactions.",
    },
    {
      q: "My migration is already under way — where do I check status?",
      a: "You can track your live migration ticket in our client portal (portal.jaasbd.com), or ping our 24/7 live chat support with your ticket ID anytime.",
    },
    {
      q: "What if I'm not happy after switching?",
      a: "Every hosting plan is backed by our unconditional 30-Day Money-Back Guarantee. If you aren't completely delighted with the speed and support, we'll refund your hosting fee immediately.",
    },
  ];

  const visibleFaqs = showAll ? [...initialFaqs, ...additionalFaqs] : initialFaqs;

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Header */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs sm:text-sm font-semibold text-[#067547] uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1616] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#556360] leading-relaxed">
              Have questions about your specific platform, email configuration, or domain names? Browse through our migration answers or talk to our live team.
            </p>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              {visibleFaqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] px-6 py-1 data-[state=open]:bg-white data-[state=open]:shadow-sm transition-all"
                >
                  <AccordionTrigger className="text-left font-bold text-[#0A1616] hover:no-underline text-base sm:text-lg py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-[#556360] leading-relaxed pb-4 pt-1">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {!showAll && (
              <div className="mt-6 text-left">
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#067547] hover:underline cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Show more questions ({additionalFaqs.length} more)</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
