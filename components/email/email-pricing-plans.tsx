'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Check, Sparkles, Shield, HardDrive, ArrowRight, HelpCircle } from 'lucide-react';

interface EmailPlan {
  id: string;
  name: string;
  description: string;
  isPopular?: boolean;
  priceBDT: number;
  priceUSD: number;
  features: {
    label: string;
    tooltip?: string;
    isKey?: boolean;
  }[];
  whmcsLink: string;
}

const emailPlans: EmailPlan[] = [
  {
    id: 'pro',
    name: 'Pro',
    description: 'Essential, secure email to kickstart your business.',
    priceBDT: 350,
    priceUSD: 2.99,
    features: [
      { label: '1 email account *', tooltip: 'Create a custom address @yourdomain. Add more anytime.' },
      { label: '10GB Mail Space', isKey: true, tooltip: 'Room for years of business correspondence and attachments.' },
      { label: 'Rich Webmail & Mobile Apps', tooltip: 'Access on browser, iOS and Android with IMAP/POP3 support.' },
      { label: 'Calendar & Contacts', tooltip: 'Integrated scheduling and address book.' },
      { label: '50 Read Receipts / mo', tooltip: 'Know when critical client messages are opened.' },
      { label: '1 Email Template', tooltip: 'Save your most common reply templates.' },
      { label: 'Advanced Anti-Spam & Anti-Virus', tooltip: 'Keeps junk and malicious payloads out.' },
      { label: 'Free Email Migration', tooltip: 'We move your messages from your current host for free.' },
      { label: '24/7/365 In-House Support' },
    ],
    whmcsLink: 'https://portal.jaasbd.com/cart.php?a=add&pid=email-pro',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'More storage & collaboration for growing teams.',
    isPopular: true,
    priceBDT: 540,
    priceUSD: 4.49,
    features: [
      { label: '1 email account *', tooltip: 'Create a custom address @yourdomain. Add more anytime.' },
      { label: '50GB Mail Space', isKey: true, tooltip: '5x the storage of Pro for high-volume inboxes.' },
      { label: '1GB Titan Drive Storage', isKey: true, tooltip: 'Store and share files directly from your webmail.' },
      { label: 'Rich Webmail & Mobile Apps' },
      { label: 'Shared Calendar & Contacts', tooltip: 'Share schedules with team members seamlessly.' },
      { label: 'Unlimited Read Receipts', tooltip: 'Track every important email without limits.' },
      { label: 'Unlimited Email Templates', tooltip: 'Build a library of reusable sales and support templates.' },
      { label: 'Send Later & Follow-up Reminders', tooltip: 'Schedule emails and get notified if a recipient does not reply.' },
      { label: 'Priority Anti-Spam & Anti-Virus' },
      { label: 'Free White-Glove Migration' },
      { label: '24/7/365 Priority Support' },
    ],
    whmcsLink: 'https://portal.jaasbd.com/cart.php?a=add&pid=email-premium',
  },
  {
    id: 'ultra',
    name: 'Ultra',
    description: 'Maximum storage, productivity & AI writing power.',
    priceBDT: 840,
    priceUSD: 6.99,
    features: [
      { label: '1 email account *', tooltip: 'Create a custom address @yourdomain. Add more anytime.' },
      { label: '100GB Mail Space', isKey: true, tooltip: 'Massive mailbox capacity for heavy enterprise usage.' },
      { label: '50GB Titan Drive Storage', isKey: true, tooltip: 'Generous cloud storage for all your office files and media.' },
      { label: 'AI Smart Write Assistant', isKey: true, tooltip: 'Draft, rewrite and polish emails with built-in AI prompts.' },
      { label: 'File Transfer (Large Attachments)', tooltip: 'Send oversized files that normally bounce over email.' },
      { label: 'Built-in Task Management', tooltip: 'Turn emails into actionable to-do items and track deadlines.' },
      { label: 'Rich Webmail & Mobile Apps' },
      { label: 'Shared Calendar & Contacts' },
      { label: 'Unlimited Read Receipts & Templates' },
      { label: 'Send Later & Follow-up Reminders' },
      { label: 'Enterprise Spam & Threat Protection' },
      { label: 'Free White-Glove Migration' },
      { label: '24/7/365 VIP Support' },
    ],
    whmcsLink: 'https://portal.jaasbd.com/cart.php?a=add&pid=email-ultra',
  },
];

export function EmailPricingPlans() {
  const [currency, setCurrency] = useState<'BDT' | 'USD'>('BDT');

  return (
    <section id="plans" className="py-16 lg:py-24 bg-[#F2F2ED]">
      <div className="container mx-auto px-siteContainer">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1616] tracking-tight mb-4">
            Choose your plan
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed mb-8">
            Every plan is branded email at your domain with the core productivity suite. The difference is storage and how much of the toolkit you need.
          </p>

          {/* Currency Toggle */}
          <div className="inline-flex items-center gap-1 bg-white border border-[#E4E4DC] p-1.5 rounded-2xl shadow-sm">
            <button
              onClick={() => setCurrency('BDT')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                currency === 'BDT'
                  ? 'bg-[#082615] text-white shadow-sm'
                  : 'text-[#455A58] hover:text-[#0A1616]'
              }`}
            >
              BDT (৳)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-[#082615] text-white shadow-sm'
                  : 'text-[#455A58] hover:text-[#0A1616]'
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {emailPlans.map((plan) => {
            const formattedPrice =
              currency === 'BDT'
                ? `BDT ${plan.priceBDT.toFixed(2)}`
                : `$${plan.priceUSD.toFixed(2)}`;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all bg-white border shadow-sm ${
                  plan.isPopular
                    ? 'border-[#46FDAE] ring-2 ring-[#46FDAE]/40 shadow-xl'
                    : 'border-[#E4E4DC] hover:border-[#0A1616]/30'
                }`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-[#082615] text-[#46FDAE] border border-[#46FDAE]/40 text-xs font-bold px-3.5 py-1 rounded-full shadow-md">
                      <Sparkles className="h-3 w-3" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Desc */}
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold text-[#0A1616] mb-2">{plan.name}</h3>
                    <p className="text-xs sm:text-sm text-[#455A58] leading-relaxed min-h-[38px]">{plan.description}</p>
                  </div>

                  {/* Pricing Box */}
                  <div className="mb-6 pb-6 border-b border-[#F0F0EA]">
                    <div className="flex items-baseline gap-1.5 mb-1">
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#0A1616]">
                        {formattedPrice}
                      </span>
                      <span className="text-xs text-[#6B7D7B] font-medium">/mo</span>
                    </div>
                    <span className="text-xs text-[#8E9F9A] block font-normal">price per mailbox</span>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href={plan.whmcsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-xl font-bold text-sm text-center block mb-8 transition-all shadow-sm active:scale-[0.98] ${
                      plan.isPopular
                        ? 'bg-[#082615] text-white hover:bg-[#0d3b21]'
                        : 'bg-[#082615] text-white hover:bg-[#0d3b21]'
                    }`}
                  >
                    Buy now
                  </Link>

                  {/* Feature Checklist */}
                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#0A1616] mb-3">Included features:</p>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E8F8F0] text-[#082615] border border-[#46FDAE]/40">
                          <Check className="h-2.5 w-2.5 stroke-[2.5]" />
                        </div>
                        <span className={feature.isKey ? 'font-semibold text-[#0A1616]' : 'text-[#455A58]'}>
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Guarantee Note */}
        <div className="max-w-2xl mx-auto text-center text-xs text-[#6B7D7B] leading-relaxed">
          <p>
            Additional mailboxes from $2.99/mo (৳350/mo). Free migration included. 30-day money-back guarantee.
          </p>
        </div>
      </div>
    </section>
  );
}
