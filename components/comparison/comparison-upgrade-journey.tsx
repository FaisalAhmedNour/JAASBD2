export function ComparisonUpgradeJourney() {
  const steps = [
    {
      step: '01',
      title: 'Moving up (Web Hosting)',
      description: 'Upgrade any time with one click. It is instant, with zero downtime, and you get new resources immediately. You only pay the prorated difference.',
    },
    {
      step: '02',
      title: 'Moving to a Managed Server',
      description: 'Outgrowing shared? Moving to a dedicated cloud server is completely handled by our senior engineers in ~1 hour with zero site downtime.',
    },
    {
      step: '03',
      title: 'Moving down or resizing',
      description: 'If resource needs decrease or projects end, downgrade smoothly at any time. We credit any remaining prorated balance to your billing account.',
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
                <span>Already with us?</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
              Moving up (or down) is simple
            </h2>
            <p className="text-base text-[#455A58] leading-relaxed">
              Most sites start small and move up as they grow, and you can move back down if things change. Here&apos;s how a switch works.
            </p>
          </div>

          {/* 3 Steps Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-7 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-display font-bold text-[#114B27]/30 mb-4">{item.step}</div>
                  <h3 className="font-display font-bold text-xl text-[#0A1616] mb-3">{item.title}</h3>
                  <p className="text-sm text-[#455A58] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
