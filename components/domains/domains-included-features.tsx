import Image from 'next/image';

const domainFeatures = [
  {
    icon: '/assets/features/plans.svg',
    title: '600+ domain extensions',
    description: 'Classic TLDs (.com, .net), local country codes (.com.bd), and modern tech extensions (.io, .ai, .dev, .tech).',
  },
  {
    icon: '/assets/features/speed-boost.svg',
    title: 'Free DNS management',
    description: 'Fast, redundant global DNS servers with full record editing (A, AAAA, CNAME, MX, TXT, SRV) standard.',
  },
  {
    icon: '/assets/features/firewall.svg',
    title: 'WHOIS & ID privacy',
    description: 'Keep your personal email, phone number, and address hidden from spammers and scraping bots at no extra fee.',
  },
  {
    icon: '/assets/features/plugin.svg',
    title: 'Domain theft protection',
    description: 'Registrar transfer locking prevents unauthorized domain transfers, DNS hijacking, and ownership tampering.',
  },
  {
    icon: '/assets/features/sub-domains.svg',
    title: 'Custom nameservers & subdomains',
    description: 'Create unlimited subdomains for staging or apps, and configure private branded vanity nameservers.',
  },
  {
    icon: '/assets/features/personal-website-hosting.svg',
    title: 'Works with everything we host',
    description: '1-Click instant connection to our Web Hosting, WordPress, VPS, email accounts, and SSL certificates.',
  },
];

export function DomainsIncludedFeatures() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE]">
              <span>Zero Hidden Fees</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
            Everything a domain here comes with
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed">
            No hidden costs, no fine print. Every domain, registered or transferred, includes all of this.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {domainFeatures.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white p-7 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E4E4DC] flex items-center justify-center mb-5 p-2.5">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
