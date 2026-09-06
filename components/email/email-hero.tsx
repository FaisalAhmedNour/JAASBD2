'use client';

import Image from 'next/image';
import { Check, Mail, Inbox, Calendar, Users, Sparkles, Shield, Send, ArrowRight } from 'lucide-react';

const heroChecklist = [
  'Branded email @yourdomain',
  'Advanced anti-spam and anti-virus, ad-free',
  'Free migration from your current provider',
  'Calendar, contacts and mobile apps',
  'AI-assisted writing built in',
  '24/7 in-house support',
];

export function EmailHero() {
  const scrollToPlans = () => {
    const el = document.getElementById('plans');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#06180E] via-[#0A2616] to-[#0D3821] text-white pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-[#46FDAE]/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -left-20 h-80 w-80 rounded-full bg-[#00E599]/10 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Checklist */}
          <div className="lg:col-span-6 text-left">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE] mb-6 shadow-sm">
              <Mail className="h-3.5 w-3.5" />
              <span>Professional email</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white antialiased mb-5 leading-[1.15]">
              Business email worthy of your brand
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#C2D6CF] mb-8 leading-relaxed font-normal max-w-xl">
              Branded addresses at your own domain, plus a full productivity suite: calendar, contacts, scheduling and AI-assisted writing. Reliable, secure, and backed by 24/7 in-house support.
            </p>

            {/* Bullet Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
              {heroChecklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E2ECE8] font-medium">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#46FDAE]/20 text-[#46FDAE] border border-[#46FDAE]/40">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={scrollToPlans}
                className="px-8 py-3.5 rounded-xl font-bold text-sm bg-[#46FDAE] text-[#0A1616] hover:bg-[#34e89b] transition-all flex items-center gap-2 shadow-lg shadow-[#46FDAE]/20 active:scale-[0.98]"
              >
                <span>See Plans</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Webmail Dashboard Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto rounded-3xl bg-[#0F1E1A] border border-[#214337] p-3 sm:p-5 shadow-2xl backdrop-blur-md">
              {/* Top Window Header Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#214337] text-xs text-[#8E9F9A]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                  </div>
                  <span className="font-mono text-[11px] text-[#A6B8B3] ml-2">mail.yourdomain.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#46FDAE]/20 text-[#46FDAE] px-2 py-0.5 rounded-full text-[10px] font-semibold border border-[#46FDAE]/30">
                    AI Smart Write Active
                  </span>
                </div>
              </div>

              {/* Inner Mockup Layout */}
              <div className="grid grid-cols-12 gap-3 text-xs">
                {/* Sidebar Navigation */}
                <div className="col-span-4 bg-[#142A24] rounded-2xl p-3 border border-[#214337] hidden sm:block">
                  <button className="w-full py-2 px-3 rounded-xl bg-[#46FDAE] text-[#0A1616] font-bold text-xs flex items-center justify-center gap-1.5 mb-3 shadow-sm">
                    <Send className="h-3 w-3" />
                    <span>Compose</span>
                  </button>

                  <div className="space-y-1 text-[#C2D6CF]">
                    <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#214337] font-semibold text-white">
                      <div className="flex items-center gap-2">
                        <Inbox className="h-3.5 w-3.5 text-[#46FDAE]" />
                        <span>Inbox</span>
                      </div>
                      <span className="bg-[#46FDAE] text-[#0A1616] px-1.5 py-0.2 rounded-full text-[10px] font-bold">12</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-[#214337]/50 transition-colors">
                      <Calendar className="h-3.5 w-3.5 text-[#8E9F9A]" />
                      <span>Calendar</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-[#214337]/50 transition-colors">
                      <Users className="h-3.5 w-3.5 text-[#8E9F9A]" />
                      <span>Contacts</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg hover:bg-[#214337]/50 transition-colors">
                      <Sparkles className="h-3.5 w-3.5 text-[#46FDAE]" />
                      <span>Smart Templates</span>
                    </div>
                  </div>

                  {/* Storage Meter */}
                  <div className="mt-6 pt-3 border-t border-[#214337]/80 text-[11px] text-[#8E9F9A]">
                    <div className="flex justify-between mb-1">
                      <span>Mailbox Storage</span>
                      <span className="text-[#46FDAE] font-medium">1.2 / 50 GB</span>
                    </div>
                    <div className="h-1.5 w-full bg-[#0A1A15] rounded-full overflow-hidden">
                      <div className="h-full bg-[#46FDAE] rounded-full" style={{ width: '12%' }} />
                    </div>
                  </div>
                </div>

                {/* Main Mailbox Content */}
                <div className="col-span-12 sm:col-span-8 space-y-2.5">
                  {/* Email Item 1 (Highlighted) */}
                  <div className="bg-[#18332C] border border-[#46FDAE]/40 rounded-2xl p-3.5 shadow-md">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#46FDAE]" />
                        <span className="font-bold text-white text-xs sm:text-sm">sarah@partnerfirm.com</span>
                      </div>
                      <span className="text-[10px] text-[#8E9F9A]">10:42 AM</span>
                    </div>
                    <p className="font-semibold text-white text-xs line-clamp-1">Q3 Strategic Partnership Agreement Signed</p>
                    <p className="text-[11px] text-[#A6B8B3] line-clamp-1 mt-0.5">
                      Hi Faisal, attached is the fully countersigned agreement. Looking forward to launching next week!
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="bg-[#214337] text-[#46FDAE] text-[10px] px-2 py-0.5 rounded-md font-medium border border-[#46FDAE]/20">
                        Attachment: agreement.pdf (2.4 MB)
                      </span>
                      <span className="bg-[#214337] text-[#C2D6CF] text-[10px] px-2 py-0.5 rounded-md">
                        Read Receipt ✓
                      </span>
                    </div>
                  </div>

                  {/* Email Item 2 */}
                  <div className="bg-[#142A24] border border-[#214337] rounded-2xl p-3 text-[#C2D6CF] hover:border-[#46FDAE]/30 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-white">billing@clientcorp.bd</span>
                      <span className="text-[10px] text-[#8E9F9A]">Yesterday</span>
                    </div>
                    <p className="font-medium text-white text-xs line-clamp-1">Invoice #INV-2026-089 Settled via bKash</p>
                    <p className="text-[11px] text-[#8E9F9A] line-clamp-1 mt-0.5">
                      Thank you for your business. The transaction has been confirmed and verified.
                    </p>
                  </div>

                  {/* Email Item 3 (AI Composer Preview) */}
                  <div className="bg-[#0D211C] border border-[#214337] rounded-2xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-[#46FDAE]/15 text-[#46FDAE]">
                        <Sparkles className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-[11px]">AI Smart Write Ready</div>
                        <div className="text-[10px] text-[#8E9F9A]">Quick reply suggested: &quot;Thank you, received!&quot;</div>
                      </div>
                    </div>
                    <button className="px-3 py-1 rounded-lg bg-[#214337] hover:bg-[#46FDAE] hover:text-[#0A1616] text-white text-[11px] font-semibold transition-all">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
