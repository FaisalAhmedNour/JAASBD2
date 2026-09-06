'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Check, Minus } from 'lucide-react';

interface ComparisonRow {
  name: string;
  starter: string | boolean;
  pro: string | boolean;
  premium: string | boolean;
}

interface ComparisonCategory {
  title: string;
  rows: ComparisonRow[];
}

const comparisonData: ComparisonCategory[] = [
  {
    title: 'Overview',
    rows: [
      {
        name: 'Best for',
        starter: 'Improve your ranking & test ads',
        pro: 'Local businesses on Maps & reviews',
        premium: 'Maximum results, minimum hands-on time',
      },
    ],
  },
  {
    title: 'Grow your visibility',
    rows: [
      {
        name: 'SEO with AI-supported tasks',
        starter: true,
        pro: true,
        premium: true,
      },
      {
        name: 'Google Ads with micro-budgets',
        starter: true,
        pro: true,
        premium: true,
      },
      {
        name: 'AI Visibility',
        starter: 'Included',
        pro: 'Included',
        premium: 'Pro',
      },
      {
        name: 'Brand Monitoring (RADAR)',
        starter: true,
        pro: true,
        premium: true,
      },
      {
        name: 'WordPress plugin & mobile app',
        starter: true,
        pro: true,
        premium: true,
      },
    ],
  },
  {
    title: 'Reputation & reach',
    rows: [
      {
        name: 'Local listings — up to 33 directories',
        starter: false,
        pro: true,
        premium: true,
      },
      {
        name: 'AI-powered review responses',
        starter: false,
        pro: true,
        premium: true,
      },
      {
        name: 'Competitor comparison & monitoring',
        starter: false,
        pro: true,
        premium: true,
      },
    ],
  },
  {
    title: 'Automation',
    rows: [
      {
        name: 'Social AI Manager (FB & Instagram)',
        starter: false,
        pro: false,
        premium: true,
      },
      {
        name: 'AI Visibility Pro',
        starter: false,
        pro: false,
        premium: true,
      },
    ],
  },
  {
    title: 'The basics',
    rows: [
      {
        name: 'Websites covered',
        starter: '1',
        pro: '1',
        premium: '1',
      },
      {
        name: 'Billing terms',
        starter: 'Billed monthly, cancel anytime',
        pro: 'Billed monthly, cancel anytime',
        premium: 'Billed monthly, cancel anytime',
      },
      {
        name: 'Money-back guarantee',
        starter: '30-day money-back guarantee',
        pro: '30-day money-back guarantee',
        premium: '30-day money-back guarantee',
      },
    ],
  },
];

export function MarketingComparisonMatrix() {
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    'Overview': true,
    'Grow your visibility': true,
    'Reputation & reach': true,
    'Automation': true,
    'The basics': true,
  });

  const toggleCategory = (title: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const renderValue = (val: string | boolean) => {
    if (typeof val === 'boolean') {
      return val ? (
        <div className="flex justify-center">
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E8F8F0] text-[#082615] border border-[#46FDAE]/40">
            <Check className="h-3 w-3 stroke-[2.5]" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center text-[#9CAEA9]">
          <Minus className="h-4 w-4" />
        </div>
      );
    }
    return <span className="font-semibold text-xs sm:text-sm text-[#0A1616]">{val}</span>;
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F2F2ED] border-b border-[#E4E4DC]">
      <div className="container mx-auto px-siteContainer">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0A1616] mb-4">
            Compare the plans
          </h2>
          <p className="text-base sm:text-lg text-[#455A58] leading-relaxed">
            Starter, Pro, and Premium side by side. Features only — for pricing, see the plan cards above.
          </p>
        </div>

        {/* Matrix Container */}
        <div className="max-w-5xl mx-auto rounded-3xl border border-[#E4E4DC] bg-white shadow-sm overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-[#F9F9F6] border-b border-[#E4E4DC] p-4 sm:p-6 text-xs sm:text-sm font-bold text-[#0A1616]">
            <div className="col-span-5 text-left text-[#6B7D7B] uppercase tracking-wider font-semibold">
              Features
            </div>
            <div className="col-span-2 sm:col-span-2 text-center">
              <div className="font-bold text-sm sm:text-base text-[#0A1616]">Starter</div>
              <div className="text-[11px] text-[#6B7D7B] font-normal hidden sm:block">৳1,500/mo</div>
            </div>
            <div className="col-span-3 sm:col-span-2 text-center">
              <div className="font-bold text-sm sm:text-base text-[#082615]">Pro</div>
              <div className="text-[11px] text-[#00A868] font-semibold hidden sm:block">৳3,500/mo</div>
            </div>
            <div className="col-span-2 sm:col-span-3 text-center">
              <div className="font-bold text-sm sm:text-base text-[#0A1616]">Premium</div>
              <div className="text-[11px] text-[#6B7D7B] font-normal hidden sm:block">৳7,400/mo</div>
            </div>
          </div>

          {/* Accordion Categories */}
          <div className="divide-y divide-[#E4E4DC]">
            {comparisonData.map((cat, catIdx) => {
              const isOpen = openCategories[cat.title] !== false;
              return (
                <div key={catIdx}>
                  {/* Category Header Bar */}
                  <button
                    onClick={() => toggleCategory(cat.title)}
                    className="w-full flex items-center justify-between py-3.5 px-6 bg-[#0A1616] text-white text-xs sm:text-sm font-bold uppercase tracking-wider text-left select-none hover:bg-[#122721] transition-colors"
                  >
                    <span>{cat.title}</span>
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>

                  {/* Category Rows */}
                  {isOpen && (
                    <div className="divide-y divide-[#F2F2ED] text-xs sm:text-sm">
                      {cat.rows.map((row, rIdx) => (
                        <div
                          key={rIdx}
                          className="grid grid-cols-12 p-4 sm:px-6 items-center hover:bg-[#F9F9F6] transition-colors"
                        >
                          <div className="col-span-5 font-medium text-[#0A1616] text-left pr-2">
                            {row.name}
                          </div>
                          <div className="col-span-2 sm:col-span-2 text-center">
                            {renderValue(row.starter)}
                          </div>
                          <div className="col-span-3 sm:col-span-2 text-center">
                            {renderValue(row.pro)}
                          </div>
                          <div className="col-span-2 sm:col-span-3 text-center">
                            {renderValue(row.premium)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
