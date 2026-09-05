export function DomainsMoreThanRegistrar() {
  const pillars = [
    {
      title: 'One place for everything',
      desc: 'Manage your domain registrations, DNS records, web hosting packages, and professional email mailboxes in one unified dashboard.',
    },
    {
      title: 'Renewals you can predict',
      desc: 'Transparent, upfront pricing with zero renewal traps or sudden price increases when your domain expires. Auto-renewal protection included.',
    },
    {
      title: 'Real human support 24/7',
      desc: 'Got a question about DNS propagation, nameservers, or transfer codes? Our in-house engineering team responds in under 2 minutes.',
    },
  ];

  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
            More than a registrar
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed">
            Keep your domain, site and email in one place, with a team that actually picks up.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white p-8 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display font-bold text-xl text-[#0A1616] mb-3">{item.title}</h3>
                <p className="text-sm text-[#455A58] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
