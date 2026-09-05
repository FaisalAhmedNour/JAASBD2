import Image from 'next/image';

const reasons = [
  {
    icon: '/assets/features/shared-web-hosting-1.png',
    title: 'Global data centres',
    description: 'Be where your visitors are. Choose from data center regions across Asia, Europe, and North America.',
  },
  {
    icon: '/assets/features/crew-support-1.png',
    title: 'Enterprise infrastructure',
    description: 'Modern AMD EPYC server clusters, pure NVMe drives, and redundant power networks.',
  },
  {
    icon: '/assets/features/trust-at-scale-1.png',
    title: 'Unmatched security',
    description: 'Cloudflare Enterprise WAF, autonomous malware neutralization, and zero-day protection.',
  },
  {
    icon: '/assets/features/lead.svg',
    title: 'Dedicated WordPress experts',
    description: 'In-house support engineers who live and breathe WordPress performance and troubleshooting.',
  },
  {
    icon: '/assets/features/speed-light.png',
    title: 'Transparent pricing',
    description: 'No hidden introductory rate spikes or complicated upsells. Just transparent value.',
  },
];

export function WordPressWhyUs() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
            Why hosting.com & Rocket.net
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed">
            The power of modern enterprise cloud hosting combined with dedicated WordPress optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((item, idx) => (
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
