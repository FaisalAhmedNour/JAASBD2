import Image from 'next/image';

const dnaFeatures = [
  {
    icon: '/assets/features/faster.svg',
    title: 'Always on, everywhere',
    description: 'Enterprise edge availability across 300+ global locations with high-availability failover.',
  },
  {
    icon: '/assets/features/cloudflare.svg',
    title: 'Already using Cloudflare?',
    description: 'Keep your custom DNS or use our included Cloudflare Enterprise stack with zero extra setup.',
  },
  {
    icon: '/assets/features/speed-boost.svg',
    title: 'Instant speed optimisations',
    description: 'Automatic WebP conversion, Brotli compression, and dynamic HTML caching standard.',
  },
  {
    icon: '/assets/features/firewall.svg',
    title: "300+ caching & security PoP's",
    description: 'Sub-100ms response times for visitors in Dhaka, Chittagong, Sylhet, and globally.',
  },
  {
    icon: '/assets/features/server.svg',
    title: 'Optimised edge servers',
    description: 'Tailored rulesets engineered specifically for WordPress core and WooCommerce transactions.',
  },
];

export function WordPressCloudflareDna() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE]">
              <span>Edge Performance</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
            Cloudflare and hosting is in our DNA
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed">
            While other hosting companies have recently tried to copy our formula, none have the deep-rooted expertise of our integrated edge platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {dnaFeatures.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-6 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E4E4DC] flex items-center justify-center mb-4 p-2.5">
                <Image
                  src={item.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display font-bold text-lg text-[#0A1616] mb-2">{item.title}</h3>
              <p className="text-sm text-[#455A58] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
