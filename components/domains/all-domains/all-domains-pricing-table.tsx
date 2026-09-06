'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowUpDown, ArrowUp, ArrowDown, ChevronLeft, ChevronRight, ExternalLink, Sparkles, Filter } from 'lucide-react';
import { allTldsData, TLDInfo } from '@/data/tlds-data';

type CategoryFilter = 'all' | 'popular' | 'business' | 'tech' | 'ecommerce' | 'creative' | 'country' | 'lifestyle';
type SortField = 'tld' | 'registerPrice' | 'renewalPrice' | 'transferPrice';
type SortDirection = 'asc' | 'desc';

const categoryTabs: { id: CategoryFilter; label: string }[] = [
  { id: 'all', label: 'All Extensions' },
  { id: 'popular', label: 'Popular' },
  { id: 'business', label: 'Business & Finance' },
  { id: 'tech', label: 'Tech & Dev' },
  { id: 'ecommerce', label: 'E-Commerce & Retail' },
  { id: 'creative', label: 'Media & Creative' },
  { id: 'country', label: 'Country / Regional' },
  { id: 'lifestyle', label: 'Lifestyle & Community' },
];

export function AllDomainsPricingTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [sortField, setSortField] = useState<SortField>('tld');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [currency, setCurrency] = useState<'BDT' | 'USD'>('BDT');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(25);

  // Filter & Search
  const filteredTlds = useMemo(() => {
    return allTldsData.filter((item) => {
      // Category match
      if (selectedCategory === 'popular' && !item.isPopular) return false;
      if (selectedCategory !== 'all' && selectedCategory !== 'popular' && item.category !== selectedCategory) return false;

      // Search match
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim();
        const matchesTld = item.tld.toLowerCase().includes(query);
        const matchesDesc = item.description?.toLowerCase().includes(query);
        const matchesCat = item.categoryLabel.toLowerCase().includes(query);
        if (!matchesTld && !matchesDesc && !matchesCat) return false;
      }

      return true;
    });
  }, [searchTerm, selectedCategory]);

  // Sorting
  const sortedTlds = useMemo(() => {
    return [...filteredTlds].sort((a, b) => {
      let valA: string | number = a[sortField];
      let valB: string | number = b[sortField];

      if (typeof valA === 'string' && typeof valB === 'string') {
        const comp = valA.localeCompare(valB);
        return sortDirection === 'asc' ? comp : -comp;
      } else {
        const numA = valA as number;
        const numB = valB as number;
        return sortDirection === 'asc' ? numA - numB : numB - numA;
      }
    });
  }, [filteredTlds, sortField, sortDirection]);

  // Pagination
  const totalItems = sortedTlds.length;
  const totalPages = pageSize === -1 ? 1 : Math.ceil(totalItems / pageSize);
  const paginatedTlds = useMemo(() => {
    if (pageSize === -1) return sortedTlds;
    const start = (currentPage - 1) * pageSize;
    return sortedTlds.slice(start, start + pageSize);
  }, [sortedTlds, currentPage, pageSize]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat: CategoryFilter) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const formatPrice = (bdtPrice: number, usdPrice: number) => {
    if (currency === 'BDT') {
      return `৳${bdtPrice.toLocaleString('en-US')}`;
    }
    return `$${usdPrice.toFixed(2)}`;
  };

  return (
    <section id="pricing-table" className="py-16 lg:py-24 bg-white border-t border-[#E4E4DC]">
      <div className="container mx-auto px-siteContainer">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0A1616] tracking-tight mb-4">
            Domain Registration and Renewal Pricing
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed">
            Transparent pricing on all {allTldsData.length}+ top-level domains. Search for any extension to check initial registration, annual renewal, and transfer rates.
          </p>
        </div>

        {/* Controls: Search, Category Tabs, Currency */}
        <div className="bg-[#F9F9F6] border border-[#E4E4DC] rounded-3xl p-6 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-6">
            {/* Search Input Filter */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#455A58]/60" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search extensions (e.g. .com, .bd, tech, store)..."
                className="w-full pl-11 pr-4 py-3 bg-white border border-[#E4E4DC] rounded-2xl text-sm text-[#0A1616] focus:outline-none focus:border-[#082615] transition-all font-body"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#455A58] bg-[#F2F2ED] hover:bg-[#E4E4DC] px-2 py-1 rounded-md"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Currency Switcher & Row Count */}
            <div className="flex items-center justify-between lg:justify-end gap-4">
              <div className="flex items-center gap-1 bg-white border border-[#E4E4DC] p-1 rounded-2xl">
                <button
                  onClick={() => setCurrency('BDT')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    currency === 'BDT'
                      ? 'bg-[#082615] text-white shadow-sm'
                      : 'text-[#455A58] hover:text-[#0A1616]'
                  }`}
                >
                  BDT (৳)
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    currency === 'USD'
                      ? 'bg-[#082615] text-white shadow-sm'
                      : 'text-[#455A58] hover:text-[#0A1616]'
                  }`}
                >
                  USD ($)
                </button>
              </div>

              {/* Rows Per Page */}
              <div className="flex items-center gap-2 text-xs text-[#455A58]">
                <span>Show:</span>
                <select
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="bg-white border border-[#E4E4DC] rounded-xl px-2.5 py-1.5 text-xs text-[#0A1616] font-medium focus:outline-none focus:border-[#082615]"
                >
                  <option value={10}>10 rows</option>
                  <option value={25}>25 rows</option>
                  <option value={50}>50 rows</option>
                  <option value={100}>100 rows</option>
                  <option value={-1}>All ({filteredTlds.length})</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-bold text-[#455A58] uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Filter className="h-3 w-3" /> Category:
            </span>
            {categoryTabs.map((tab) => {
              const isSelected = selectedCategory === tab.id;
              let count = 0;
              if (tab.id === 'all') count = allTldsData.length;
              else if (tab.id === 'popular') count = allTldsData.filter((x) => x.isPopular).length;
              else count = allTldsData.filter((x) => x.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  onClick={() => handleCategoryChange(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#082615] text-white shadow-sm'
                      : 'bg-white text-[#455A58] border border-[#E4E4DC] hover:border-[#0A1616]/40 hover:text-[#0A1616]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[#F2F2ED] text-[#6B7D7B]'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Table (Desktop / Tablet) */}
        <div className="hidden md:block overflow-hidden rounded-3xl border border-[#E4E4DC] bg-white shadow-sm mb-6">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F2F2ED] border-b border-[#E4E4DC] text-xs font-bold uppercase tracking-wider text-[#0A1616]">
                <th
                  onClick={() => handleSort('tld')}
                  className="py-4 px-6 cursor-pointer select-none hover:bg-[#EBEBE5] transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span>Domain Extension</span>
                    {sortField === 'tld' ? (
                      sortDirection === 'asc' ? <ArrowUp className="h-3.5 w-3.5 text-[#082615]" /> : <ArrowDown className="h-3.5 w-3.5 text-[#082615]" />
                    ) : (
                      <ArrowUpDown className="h-3.5 w-3.5 text-[#455A58]/50" />
                    )}
                  </div>
                </th>
                <th
                  onClick={() => handleSort('registerPrice')}
                  className="py-4 px-6 text-right cursor-pointer select-none hover:bg-[#EBEBE5] transition-colors"
                >
                  <div className="flex items-center justify-end gap-2">
                    <span>1st Year Price</span>
                    {sortField === 'registerPrice' ? (
                      sortDirection === 'asc' ? <ArrowUp className="h-3.5 w-3.5 text-[#082615]" /> : <ArrowDown className="h-3.5 w-3.5 text-[#082615]" />
                    ) : (
                      <ArrowUpDown className="h-3.5 w-3.5 text-[#455A58]/50" />
                    )}
                  </div>
                </th>
                <th
                  onClick={() => handleSort('renewalPrice')}
                  className="py-4 px-6 text-right cursor-pointer select-none hover:bg-[#EBEBE5] transition-colors"
                >
                  <div className="flex items-center justify-end gap-2">
                    <span>Renewal Price</span>
                    {sortField === 'renewalPrice' ? (
                      sortDirection === 'asc' ? <ArrowUp className="h-3.5 w-3.5 text-[#082615]" /> : <ArrowDown className="h-3.5 w-3.5 text-[#082615]" />
                    ) : (
                      <ArrowUpDown className="h-3.5 w-3.5 text-[#455A58]/50" />
                    )}
                  </div>
                </th>
                <th
                  onClick={() => handleSort('transferPrice')}
                  className="py-4 px-6 text-right cursor-pointer select-none hover:bg-[#EBEBE5] transition-colors"
                >
                  <div className="flex items-center justify-end gap-2">
                    <span>Transfer Price</span>
                    {sortField === 'transferPrice' ? (
                      sortDirection === 'asc' ? <ArrowUp className="h-3.5 w-3.5 text-[#082615]" /> : <ArrowDown className="h-3.5 w-3.5 text-[#082615]" />
                    ) : (
                      <ArrowUpDown className="h-3.5 w-3.5 text-[#455A58]/50" />
                    )}
                  </div>
                </th>
                <th className="py-4 px-6 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E4E4DC] text-sm">
              {paginatedTlds.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-[#6B7D7B]">
                    No domain extensions found matching &ldquo;{searchTerm}&rdquo; in this category.
                  </td>
                </tr>
              ) : (
                paginatedTlds.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#F9F9F6] transition-colors group"
                  >
                    {/* Domain Extension info */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <span className="font-display font-bold text-lg text-[#0A1616] group-hover:text-[#082615] transition-colors">
                          {item.tld}
                        </span>
                        {item.promoBadge && (
                          <span className="inline-flex items-center gap-1 bg-[#E8F8F0] text-[#082615] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#46FDAE]/50">
                            <Sparkles className="h-2.5 w-2.5 text-[#082615]" />
                            {item.promoBadge}
                          </span>
                        )}
                        {item.isPopular && !item.promoBadge && (
                          <span className="bg-[#F2F2ED] text-[#455A58] text-[10px] font-semibold px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                        {item.minYears && item.minYears > 1 && (
                          <span className="bg-[#FFF8E6] text-[#8C6200] text-[10px] font-semibold px-2 py-0.5 rounded-full border border-[#FFE8A3]">
                            {item.minYears}-Yr Min
                          </span>
                        )}
                      </div>
                      {item.description && (
                        <p className="text-xs text-[#6B7D7B] mt-0.5 line-clamp-1 max-w-md">
                          {item.description}
                        </p>
                      )}
                    </td>

                    {/* 1st Year Price */}
                    <td className="py-4 px-6 text-right">
                      <div className="font-bold text-[#0A1616] text-base">
                        {formatPrice(item.registerPrice, item.usdRegisterPrice)}
                        <span className="text-xs font-normal text-[#6B7D7B]">/yr</span>
                      </div>
                      {item.registerPrice < item.renewalPrice && (
                        <span className="text-[11px] text-[#00A868] font-medium">Save {Math.round(((item.renewalPrice - item.registerPrice) / item.renewalPrice) * 100)}%</span>
                      )}
                    </td>

                    {/* Renewal Price */}
                    <td className="py-4 px-6 text-right font-medium text-[#455A58]">
                      <div>
                        {formatPrice(item.renewalPrice, item.usdRenewalPrice)}
                        <span className="text-xs font-normal text-[#6B7D7B]">/yr</span>
                      </div>
                    </td>

                    {/* Transfer Price */}
                    <td className="py-4 px-6 text-right font-medium text-[#455A58]">
                      <div>
                        {formatPrice(item.transferPrice, item.usdTransferPrice)}
                        <span className="text-xs font-normal text-[#6B7D7B]">/yr</span>
                      </div>
                    </td>

                    {/* Action Buttons */}
                    <td className="py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Link
                          href={`https://checkout.hosting.com/domain-search?domain=${encodeURIComponent(item.tld)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-1.5 rounded-xl bg-[#082615] text-white hover:bg-[#0d3b21] text-xs font-bold transition-all inline-flex items-center gap-1 shadow-sm"
                        >
                          <span>Register</span>
                        </Link>
                        <Link
                          href={`/domains/domain-transfer`}
                          className="px-3 py-1.5 rounded-xl bg-white border border-[#E4E4DC] text-[#455A58] hover:text-[#0A1616] hover:border-[#0A1616] text-xs font-semibold transition-all"
                        >
                          Transfer
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards View (< md) */}
        <div className="md:hidden space-y-3 mb-6">
          {paginatedTlds.length === 0 ? (
            <div className="py-12 text-center text-[#6B7D7B] bg-white rounded-2xl border border-[#E4E4DC]">
              No domain extensions found matching &ldquo;{searchTerm}&rdquo;.
            </div>
          ) : (
            paginatedTlds.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E4E4DC] p-4 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-display font-bold text-xl text-[#0A1616]">{item.tld}</span>
                  {item.promoBadge && (
                    <span className="bg-[#E8F8F0] text-[#082615] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#46FDAE]/50">
                      {item.promoBadge}
                    </span>
                  )}
                </div>
                {item.description && (
                  <p className="text-xs text-[#6B7D7B] mb-3">{item.description}</p>
                )}

                <div className="grid grid-cols-3 gap-2 py-2 border-t border-b border-[#F2F2ED] text-xs mb-3">
                  <div>
                    <span className="text-[#6B7D7B] block text-[10px]">1st Year</span>
                    <span className="font-bold text-[#0A1616]">{formatPrice(item.registerPrice, item.usdRegisterPrice)}</span>
                  </div>
                  <div>
                    <span className="text-[#6B7D7B] block text-[10px]">Renewal</span>
                    <span className="font-medium text-[#455A58]">{formatPrice(item.renewalPrice, item.usdRenewalPrice)}</span>
                  </div>
                  <div>
                    <span className="text-[#6B7D7B] block text-[10px]">Transfer</span>
                    <span className="font-medium text-[#455A58]">{formatPrice(item.transferPrice, item.usdTransferPrice)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`https://checkout.hosting.com/domain-search?domain=${encodeURIComponent(item.tld)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-xl bg-[#082615] text-white text-xs font-bold text-center"
                  >
                    Register
                  </Link>
                  <Link
                    href={`/domains/domain-transfer`}
                    className="flex-1 py-2 rounded-xl bg-[#F2F2ED] text-[#0A1616] border border-[#E4E4DC] text-xs font-semibold text-center"
                  >
                    Transfer
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination Bar */}
        {pageSize !== -1 && totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E4E4DC]">
            <div className="text-xs text-[#6B7D7B]">
              Showing <span className="font-semibold text-[#0A1616]">{(currentPage - 1) * pageSize + 1}</span> to{' '}
              <span className="font-semibold text-[#0A1616]">{Math.min(currentPage * pageSize, totalItems)}</span> of{' '}
              <span className="font-semibold text-[#0A1616]">{totalItems}</span> extensions
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-xl border border-[#E4E4DC] bg-white text-[#455A58] hover:bg-[#F2F2ED] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous Page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {/* Dynamic page buttons */}
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let pageNum = i + 1;
                if (totalPages > 5 && currentPage > 3) {
                  pageNum = currentPage - 3 + i;
                  if (pageNum > totalPages) pageNum = totalPages - (4 - i);
                }
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`h-8 min-w-[32px] px-2 rounded-xl text-xs font-bold transition-all ${
                      currentPage === pageNum
                        ? 'bg-[#082615] text-white shadow-sm'
                        : 'bg-white border border-[#E4E4DC] text-[#455A58] hover:text-[#0A1616] hover:bg-[#F2F2ED]'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-xl border border-[#E4E4DC] bg-white text-[#455A58] hover:bg-[#F2F2ED] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                aria-label="Next Page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
