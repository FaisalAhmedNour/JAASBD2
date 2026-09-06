'use client';

import { useState } from 'react';
import { redemptionTiers } from '@/data/tlds-data';
import { Search, AlertCircle, ShieldAlert } from 'lucide-react';

export function AllDomainsRedemption() {
  const [searchTld, setSearchTld] = useState('');
  const [currency, setCurrency] = useState<'BDT' | 'USD'>('USD');

  const filteredTiers = redemptionTiers.filter((tier) => {
    if (!searchTld.trim()) return true;
    const query = searchTld.toLowerCase().trim();
    return (
      tier.tlds.some((t) => t.toLowerCase().includes(query)) ||
      tier.description?.toLowerCase().includes(query)
    );
  });

  const formatPrice = (usd: number, bdt: number) => {
    if (currency === 'BDT') {
      return `৳${bdt.toLocaleString('en-US')}`;
    }
    return `$${usd.toLocaleString('en-US')}`;
  };

  return (
    <section className="py-16 lg:py-24 bg-[#F2F2ED] border-t border-[#E4E4DC]">
      <div className="container mx-auto px-siteContainer">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-left mb-8">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold bg-[#FFF4E5] text-[#9A5B00] border border-[#FFE0B2] mb-3">
              <ShieldAlert className="h-3.5 w-3.5" />
              <span>Expired Domain Recovery</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1616] tracking-tight mb-4">
              Domain Redemption Fees
            </h2>
            <p className="text-sm sm:text-base text-[#455A58] leading-relaxed max-w-3xl">
              If your domain expires and passes the standard grace period into the registry redemption phase, there is a specialized recovery fee we must pay directly to the upstream registry on your behalf to restore it. Below are the redemption fees by extension tier. If you pay in Bangladeshi Taka (BDT), exchange rates are automatically converted at checkout.
            </p>
          </div>

          {/* Quick Notice Alert */}
          <div className="bg-white rounded-2xl p-4 border border-[#E4E4DC] mb-8 flex items-start gap-3 text-xs sm:text-sm text-[#455A58]">
            <AlertCircle className="h-5 w-5 text-[#082615] shrink-0 mt-0.5" />
            <p>
              <strong className="text-[#0A1616]">Pro tip:</strong> You can completely avoid redemption fees by keeping <strong>Auto-Renew</strong> enabled in your client portal before expiration.
            </p>
          </div>

          {/* Controls: Search and Currency */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#455A58]/60" />
              <input
                type="text"
                value={searchTld}
                onChange={(e) => setSearchTld(e.target.value)}
                placeholder="Look up extension (e.g. .com, .ai)..."
                className="w-full pl-10 pr-4 py-2 bg-white border border-[#E4E4DC] rounded-xl text-xs text-[#0A1616] focus:outline-none focus:border-[#082615]"
              />
            </div>

            <div className="flex items-center gap-1 bg-white border border-[#E4E4DC] p-1 rounded-xl self-end sm:self-auto">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  currency === 'USD' ? 'bg-[#082615] text-white shadow-sm' : 'text-[#455A58] hover:text-[#0A1616]'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency('BDT')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  currency === 'BDT' ? 'bg-[#082615] text-white shadow-sm' : 'text-[#455A58] hover:text-[#0A1616]'
                }`}
              >
                BDT (৳)
              </button>
            </div>
          </div>

          {/* Redemption Fees Table */}
          <div className="overflow-hidden rounded-2xl border border-[#E4E4DC] bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0A1616] text-white text-xs font-bold uppercase tracking-wider">
                  <th className="py-4 px-6">Top-Level Domain (TLD) Extensions</th>
                  <th className="py-4 px-6 text-right">Redemption Fee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E4E4DC] text-sm">
                {filteredTiers.length === 0 ? (
                  <tr>
                    <td colSpan={2} className="py-8 text-center text-[#6B7D7B]">
                      No redemption fee tier found matching &ldquo;{searchTld}&rdquo;. Unlisted domains fall under &ldquo;All other domains&rdquo; ($250).
                    </td>
                  </tr>
                ) : (
                  filteredTiers.map((tier, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-[#F9F9F6] transition-colors"
                    >
                      <td className="py-4 px-6">
                        <div className="font-mono text-xs sm:text-sm font-semibold text-[#0A1616] leading-relaxed">
                          {tier.tlds.join(', ')}
                        </div>
                        {tier.description && (
                          <div className="text-[11px] text-[#6B7D7B] mt-0.5">
                            {tier.description}
                          </div>
                        )}
                      </td>
                      <td className="py-4 px-6 text-right font-display font-bold text-[#0A1616] text-base whitespace-nowrap">
                        {formatPrice(tier.usdPrice, tier.bdtPrice)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
