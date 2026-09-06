'use client';

import { AtSign, Smartphone, ShieldCheck, CalendarCheck, Clock, Sparkles } from 'lucide-react';

const coreFeatures = [
  {
    title: 'Email at your domain',
    description: 'Professional addresses like you@yourbusiness.com, set up in minutes.',
    icon: AtSign,
  },
  {
    title: 'Webmail and apps',
    description: 'A clean web inbox, plus iOS and Android apps. Works with Outlook and Apple Mail over IMAP.',
    icon: Smartphone,
  },
  {
    title: 'Anti-spam and anti-virus',
    description: 'Active filtering keeps junk and threats out. Ad-free, always.',
    icon: ShieldCheck,
  },
  {
    title: 'Calendar and contacts',
    description: 'Keep your schedule and address book in the same place as your mail.',
    icon: CalendarCheck,
  },
  {
    title: 'Write on your terms',
    description: 'Templates, scheduled send, read receipts and follow-up reminders built in.',
    icon: Clock,
  },
  {
    title: 'AI-assisted writing',
    description: 'Smart Write helps you draft and polish emails faster.',
    icon: Sparkles,
  },
];

export function EmailCoreFeatures() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A1616] text-white">
      <div className="container mx-auto px-siteContainer">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Everything in every mailbox
          </h2>
          <p className="text-base sm:text-lg text-[#9CAEA9] leading-relaxed">
            The core suite is the same on every plan. Start with one mailbox and add more as your team grows.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-[#122420] border border-[#203D36] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#46FDAE]/40 transition-all group"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#46FDAE] text-[#0A1616] mb-6 shadow-md group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6 stroke-[2]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{feat.title}</h3>
                  <p className="text-sm text-[#A6B8B3] leading-relaxed">{feat.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
