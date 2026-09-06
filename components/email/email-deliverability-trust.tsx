'use client';

import { ShieldCheck, Activity, Lock, Headphones, RefreshCw, LayoutDashboard, EyeOff } from 'lucide-react';

const deliveryBadges = [
  { label: 'SPF, DKIM and DMARC', desc: 'Pre-configured DNS authentication', icon: ShieldCheck },
  { label: '99.9% Uptime SLA', desc: 'High-availability email servers', icon: Activity },
  { label: 'Encrypted in transit and at rest', desc: 'TLS 1.3 & AES-256 storage', icon: Lock },
];

const whyUsPillars = [
  {
    title: '24/7 in-house support',
    description: 'Real people on live chat, phone and tickets, never outsourced. The same team behind your hosting and domains.',
    icon: Headphones,
  },
  {
    title: 'Free migration',
    description: 'We move your existing email across from Gmail, Microsoft 365 or your current provider over IMAP, at no charge.',
    icon: RefreshCw,
  },
  {
    title: 'One place for everything',
    description: 'Your email, domains and hosting in a single dashboard, on one bill.',
    icon: LayoutDashboard,
  },
  {
    title: 'Private and ad-free',
    description: 'Your mailbox is yours. No ads, and your mail is never scanned to sell you things.',
    icon: EyeOff,
  },
];

export function EmailDeliverabilityTrust() {
  return (
    <div className="w-full">
      {/* 1. Built to Reach the Inbox */}
      <section className="py-20 lg:py-28 bg-white border-t border-[#E4E4DC]">
        <div className="container mx-auto px-siteContainer">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A1616] mb-4">
              Built to reach the inbox
            </h2>
            <p className="text-base sm:text-lg text-[#455A58] leading-relaxed">
              Standard email authentication, active spam and virus filtering, and a maintained sending reputation give your mail the best chance of landing where it should, not in a junk folder.
            </p>
          </div>

          {/* 3 Delivery Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {deliveryBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F9F9F6] border border-[#E4E4DC] rounded-2xl p-6 text-center flex flex-col items-center justify-center hover:border-[#082615]/30 transition-all shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#082615] text-[#46FDAE] mb-4 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display font-bold text-[#0A1616] text-base mb-1">{badge.label}</h3>
                  <p className="text-xs text-[#6B7D7B]">{badge.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Why Run Your Email with hosting.com */}
      <section className="py-20 lg:py-28 bg-[#F2F2ED] border-t border-[#E4E4DC]">
        <div className="container mx-auto px-siteContainer">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Title Column */}
            <div className="lg:col-span-4 text-left">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A1616] mb-4 leading-tight">
                Why run your email with hosting.com
              </h2>
              <p className="text-base text-[#455A58] leading-relaxed">
                Everything you need to maintain corporate communication with zero friction, backed by our Dhaka and global technical team.
              </p>
            </div>

            {/* Right 4-Pillar Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyUsPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-[#E4E4DC] rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E8F8F0] text-[#082615] border border-[#46FDAE]/40 mb-6">
                      <Icon className="h-6 w-6 stroke-[2]" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#0A1616] mb-2.5">{pillar.title}</h3>
                    <p className="text-sm text-[#455A58] leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
