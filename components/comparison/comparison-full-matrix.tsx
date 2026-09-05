'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface SpecRow {
  name: string;
  starter: string | boolean;
  pro: string | boolean;
  max: string | boolean;
  server4: string | boolean;
  server8: string | boolean;
}

interface SpecCategory {
  title: string;
  rows: SpecRow[];
}

const matrixCategories: SpecCategory[] = [
  {
    title: 'Best for',
    rows: [
      {
        name: 'Target Audience',
        starter: 'Your first website',
        pro: 'A Growing Site',
        max: 'A portfolio of sites',
        server4: 'Your first server',
        server8: 'A high-traffic website / agency',
      },
    ],
  },
  {
    title: 'Build & migrate',
    rows: [
      { name: 'AI Website Builder for WordPress', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Compatible with Lovable & Replit', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Works with Claude, Cursor & AI builders', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'One-click app installs (Softaculous)', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Free managed migration (unlimited)', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Delegate access for team & developers', starter: true, pro: true, max: true, server4: true, server8: true },
    ],
  },
  {
    title: 'Websites & storage',
    rows: [
      { name: 'Number of websites', starter: '5', pro: '10', max: '50', server4: 'Unlimited', server8: 'Unlimited' },
      { name: 'Domain aliases', starter: '2', pro: '10', max: '20', server4: 'Unlimited', server8: 'Unlimited' },
      { name: 'NVMe storage', starter: '15GB', pro: '50GB', max: '100GB', server4: '100GB', server8: '150GB' },
      { name: 'Bandwidth / data transfer', starter: 'Unmetered', pro: 'Unmetered', max: 'Unmetered', server4: '5TB', server8: '10TB' },
      { name: 'Monthly page views guide', starter: '50,000', pro: '150,000', max: '500,000', server4: 'Millions', server8: 'Millions' },
    ],
  },
  {
    title: 'Dedicated resources',
    rows: [
      { name: 'Resource isolation model', starter: 'Isolated Container', pro: 'Isolated Container', max: 'Isolated Container', server4: '100% Dedicated', server8: '100% Dedicated' },
      { name: 'AMD EPYC processors', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'CPU Cores', starter: '2 (virtual)', pro: '4 (virtual)', max: '4 (virtual)', server4: '2 (dedicated)', server8: '4 (dedicated)' },
      { name: 'RAM (Memory)', starter: '2GB', pro: '4GB', max: '8GB', server4: '4GB', server8: '8GB' },
      { name: 'IOPS', starter: '1,024', pro: '2,048', max: '8,192', server4: 'Dedicated High', server8: 'Dedicated High' },
      { name: 'Inode (files) limit', starter: '200,000', pro: '400,000', max: '1,000,000', server4: 'Unlimited', server8: 'Unlimited' },
      { name: 'I/O bandwidth', starter: '50 MB/s', pro: '100 MB/s', max: '250 MB/s', server4: 'Full NVMe Bus', server8: 'Full NVMe Bus' },
      { name: 'Concurrent entry processes', starter: '30', pro: '60', max: '120', server4: 'Unlimited', server8: 'Unlimited' },
    ],
  },
  {
    title: 'Performance & developer stack',
    rows: [
      { name: 'LiteSpeed web server', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Free LiteSpeed Cache (LSCache)', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'HTTP/2 & HTTP/3 (QUIC)', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'PHP (multiple versions up to 8.5)', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Node.js (first-class support)', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Python & Ruby on Rails', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Databases (MySQL / MariaDB)', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'PostgreSQL support', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Max database size', starter: '1GB', pro: '1GB', max: '5GB', server4: 'Uncapped', server8: 'Uncapped' },
      { name: 'Redis & Memcached caching', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'SSH & SFTP access', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'WP-CLI & Git deployment', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Cron jobs & WebSockets', starter: true, pro: true, max: true, server4: true, server8: true },
    ],
  },
  {
    title: 'Domains & DNS',
    rows: [
      { name: 'Free domain registration (1st yr)', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Subdomains', starter: '5', pro: '10', max: '20', server4: 'Unlimited', server8: 'Unlimited' },
      { name: 'DNS zone management', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Global Anycast DNS', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Dedicated IP address', starter: 'Optional', pro: 'Optional', max: 'Optional', server4: '1 Included', server8: '1 Included' },
      { name: 'Private nameservers', starter: true, pro: true, max: true, server4: true, server8: true },
    ],
  },
  {
    title: 'Email',
    rows: [
      { name: 'Basic email accounts', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Number of mailboxes', starter: '5', pro: '20', max: '50', server4: 'Unlimited', server8: 'Unlimited' },
      { name: 'Mailbox storage', starter: '10GB', pro: '10GB', max: '10GB', server4: 'Shared Pool', server8: 'Shared Pool' },
      { name: 'Daily sending limit', starter: '2,400/day', pro: '2,400/day', max: '2,400/day', server4: 'Flexible', server8: 'Flexible' },
      { name: 'Max attachment size', starter: '100MB', pro: '100MB', max: '100MB', server4: '100MB', server8: '100MB' },
      { name: 'Email forwarders', starter: '20', pro: '80', max: '100', server4: 'Unlimited', server8: 'Unlimited' },
      { name: 'Spam protection (SPF/DKIM/DMARC)', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Webmail & mobile sync', starter: true, pro: true, max: true, server4: true, server8: true },
    ],
  },
  {
    title: 'Security',
    rows: [
      { name: 'Free automated SSL certificates', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Web Application Firewall (WAF)', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Monarx malware scan & auto-removal', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'DDoS filtering & mitigation', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Two-Factor Authentication (2FA)', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'IP blocker & hotlink protection', starter: true, pro: true, max: true, server4: true, server8: true },
    ],
  },
  {
    title: 'Platform & management',
    rows: [
      { name: 'Control panel interface', starter: 'hosting.com', pro: 'hosting.com', max: 'hosting.com', server4: 'hosting.com', server8: 'hosting.com' },
      { name: 'Granular automated backups', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Self-serve 1-click restore', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Backup retention period', starter: '30 days', pro: '30 days', max: '30 days', server4: '30 days', server8: '30 days' },
      { name: 'Backup schedule', starter: 'Daily', pro: 'Daily', max: 'Daily', server4: 'Daily + On-Demand', server8: 'Daily + On-Demand' },
      { name: 'Per-site isolated containers', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Full REST API access', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Fully managed sysadmin service', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Full root access available', starter: false, pro: false, max: false, server4: true, server8: true },
    ],
  },
  {
    title: 'Support & success',
    rows: [
      { name: 'Orbi AI assistant (24/7)', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Human engineering support (24/7/365)', starter: true, pro: true, max: true, server4: true, server8: true },
      { name: 'Average CSAT satisfaction', starter: '>85%', pro: '>85%', max: '>85%', server4: '>85%', server8: '>85%' },
      { name: 'Average initial response time', starter: '< 2 mins', pro: '< 2 mins', max: '< 2 mins', server4: '< 2 mins', server8: '< 2 mins' },
      { name: 'Uptime SLA guarantee', starter: '99.95%', pro: '99.95%', max: '99.95%', server4: '99.99%', server8: '99.99%' },
      { name: 'Money-back guarantee', starter: '30 days', pro: '30 days', max: '30 days', server4: '30 days', server8: '30 days' },
    ],
  },
];

function RenderCell({ val }: { val: string | boolean }) {
  if (typeof val === 'boolean') {
    return val ? (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#114B27]/10 text-[#114B27]">
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </span>
    ) : (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-400">
        <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </span>
    );
  }
  return <span className="text-xs sm:text-sm font-medium text-[#0A1616]">{val}</span>;
}

export function ComparisonFullMatrix() {
  return (
    <section id="plans" className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10">
        <div className="container mx-auto px-siteContainer">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
              Full package comparison
            </h2>
            <p className="text-base text-[#455A58] leading-relaxed">
              Compare all specs — resources, email, security, platform & management
            </p>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-2xl border border-[#E4E4DC] bg-white shadow-lg">
            <table className="w-full text-left border-collapse min-w-[900px]">
              {/* Table Sticky Header */}
              <thead>
                <tr className="border-b border-[#E4E4DC] bg-[#F7F7F4]">
                  <th className="p-4 sm:p-5 w-[240px] text-sm font-bold text-[#0A1616] font-display">Plan & Features</th>
                  <th className="p-4 sm:p-5 text-center w-[160px]">
                    <div className="font-bold text-base text-[#0A1616]">Starter Plan</div>
                    <div className="text-xs text-[#455A58] mt-0.5">৳415/mo</div>
                    <Link
                      href="https://checkout.hosting.com/?pid=starter"
                      className="mt-3 inline-block w-full py-1.5 px-3 rounded-full text-xs font-semibold bg-[#082615] text-white hover:bg-[#0d3b21] transition-colors"
                    >
                      Launch now
                    </Link>
                  </th>
                  <th className="p-4 sm:p-5 text-center w-[160px] bg-[#EAF7EE]/60 border-x border-[#114B27]/20">
                    <div className="inline-block bg-[#46FDAE] text-[#0A1616] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase mb-1">
                      Popular
                    </div>
                    <div className="font-bold text-base text-[#0A1616]">Pro Plan</div>
                    <div className="text-xs text-[#455A58] mt-0.5">৳830/mo</div>
                    <Link
                      href="https://checkout.hosting.com/?pid=pro"
                      className="mt-3 inline-block w-full py-1.5 px-3 rounded-full text-xs font-semibold bg-[#082615] text-white hover:bg-[#0d3b21] transition-colors"
                    >
                      Choose Pro
                    </Link>
                  </th>
                  <th className="p-4 sm:p-5 text-center w-[160px]">
                    <div className="font-bold text-base text-[#0A1616]">Max Plan</div>
                    <div className="text-xs text-[#455A58] mt-0.5">৳1,660/mo</div>
                    <Link
                      href="https://checkout.hosting.com/?pid=max"
                      className="mt-3 inline-block w-full py-1.5 px-3 rounded-full text-xs font-semibold bg-[#082615] text-white hover:bg-[#0d3b21] transition-colors"
                    >
                      Choose Max
                    </Link>
                  </th>
                  <th className="p-4 sm:p-5 text-center w-[160px]">
                    <div className="font-bold text-base text-[#0A1616]">4GB Cloud Server</div>
                    <div className="text-xs text-[#455A58] mt-0.5">৳8,500/mo</div>
                    <Link
                      href="https://checkout.hosting.com/?server=4gb"
                      className="mt-3 inline-block w-full py-1.5 px-3 rounded-full text-xs font-semibold bg-[#082615] text-white hover:bg-[#0d3b21] transition-colors"
                    >
                      Choose 4GB
                    </Link>
                  </th>
                  <th className="p-4 sm:p-5 text-center w-[160px]">
                    <div className="font-bold text-base text-[#0A1616]">8GB Cloud Server</div>
                    <div className="text-xs text-[#455A58] mt-0.5">৳14,500/mo</div>
                    <Link
                      href="https://checkout.hosting.com/?server=8gb"
                      className="mt-3 inline-block w-full py-1.5 px-3 rounded-full text-xs font-semibold bg-[#082615] text-white hover:bg-[#0d3b21] transition-colors"
                    >
                      Choose 8GB
                    </Link>
                  </th>
                </tr>
              </thead>

              {/* Table Body by Category */}
              <tbody>
                {matrixCategories.map((cat, catIdx) => (
                  <React.Fragment key={catIdx}>
                    {/* Category Title Header */}
                    <tr className="bg-[#E4E4DC]/50 border-t border-b border-[#E4E4DC]">
                      <td colSpan={6} className="py-2.5 px-5 font-display font-bold text-xs uppercase tracking-wider text-[#082615]">
                        {cat.title}
                      </td>
                    </tr>

                    {/* Category Rows */}
                    {cat.rows.map((row, rowIdx) => (
                      <tr
                        key={rowIdx}
                        className={`border-b border-[#E4E4DC]/60 hover:bg-[#FAF9F5] transition-colors ${
                          rowIdx % 2 === 1 ? 'bg-[#FCFCFA]' : 'bg-white'
                        }`}
                      >
                        <td className="p-3.5 sm:p-4 text-xs sm:text-sm font-medium text-[#0A1616]">
                          {row.name}
                        </td>
                        <td className="p-3.5 sm:p-4 text-center">
                          <RenderCell val={row.starter} />
                        </td>
                        <td className="p-3.5 sm:p-4 text-center bg-[#EAF7EE]/30 border-x border-[#114B27]/10">
                          <RenderCell val={row.pro} />
                        </td>
                        <td className="p-3.5 sm:p-4 text-center">
                          <RenderCell val={row.max} />
                        </td>
                        <td className="p-3.5 sm:p-4 text-center">
                          <RenderCell val={row.server4} />
                        </td>
                        <td className="p-3.5 sm:p-4 text-center">
                          <RenderCell val={row.server8} />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
