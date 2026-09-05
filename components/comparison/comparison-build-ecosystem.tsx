export function ComparisonBuildEcosystem() {
  const cards = [
    {
      title: 'AI Website Builder for WordPress',
      description: 'Describe your site and get a real WordPress build to edit and launch — on every plan.',
      tag: 'AI Powered',
    },
    {
      title: 'Deploy from Lovable & Replit',
      description: 'Ship projects straight from Lovable, v0, or Replit onto your hosting with one-click setup.',
      tag: 'No-Code & Full-Stack',
    },
    {
      title: 'Works with Claude, Cursor & AI IDEs',
      description: 'Compatible with modern AI developer workflows, git deployments, and exported code.',
      tag: 'Developer First',
    },
    {
      title: 'Code in whatever you want',
      description: 'First-class support for Node.js, PHP (up to 8.5), Python, Ruby on Rails, and static sites.',
      tag: 'Multi-Stack',
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
                <span>Start however you build</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
              Build it here, or bring it with you.
            </h2>
            <p className="text-base text-[#455A58] leading-relaxed">
              However you make websites today — a builder, AI, or hand-written code — you can launch it on hosting.com. And if it already lives somewhere else, we&apos;ll move it for free.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-6 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[11px] font-bold text-[#114B27] bg-[#E4E4DC] px-2.5 py-1 rounded-md mb-4 uppercase tracking-wider">
                    {card.tag}
                  </span>
                  <h3 className="font-display font-bold text-lg text-[#0A1616] mb-2">{card.title}</h3>
                  <p className="text-sm text-[#455A58] leading-relaxed">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
