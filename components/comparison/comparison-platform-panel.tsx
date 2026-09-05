export function ComparisonPlatformPanel() {
  const panelFeatures = [
    {
      title: 'Granular backups',
      description: 'Scheduled and on-demand, restore a whole site or just the exact files/databases you need.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#114B27]">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M12 7v5l4 2" />
        </svg>
      ),
    },
    {
      title: 'API-first automation',
      description: 'Automate deployments, provisioning, and site configurations with our complete REST API.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#114B27]">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: 'Mobile-friendly panel',
      description: 'Manage sites, email accounts, and backups seamlessly from your phone or tablet on the go.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#114B27]">
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
    {
      title: 'Per-site isolation',
      description: 'Zero neighbor risk. Every website runs in its own jailed container with dedicated resource allocations.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#114B27]">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
        </svg>
      ),
    },
    {
      title: 'Staging & one-click clones',
      description: 'Safely test plugin updates, theme changes, or code overhauls before pushing to production.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#114B27]">
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      ),
    },
    {
      title: 'Monarx active protection',
      description: 'Continuous background malware scanning, automated payload removal, and zero false positives.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#114B27]">
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10">
        <div className="container mx-auto px-siteContainer">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE]">
                <span>Included on every plan</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
              Powered by the hosting.com panel
            </h2>
            <p className="text-base text-[#455A58] leading-relaxed">
              A faster, more capable control panel we built in-house — the default on every shared plan and every server. Everything&apos;s in one place, and it does more out of the box.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {panelFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-7 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E4E4DC] flex items-center justify-center mb-5">
                  {feat.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-[#0A1616] mb-2">{feat.title}</h3>
                <p className="text-sm text-[#455A58] leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
