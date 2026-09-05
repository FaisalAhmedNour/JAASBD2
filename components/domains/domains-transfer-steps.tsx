export function DomainsTransferSteps() {
  const steps = [
    {
      step: '01',
      title: 'Unlock and get your code',
      desc: 'At your current registrar, unlock the domain and request your authorization / EPP transfer code.',
    },
    {
      step: '02',
      title: 'Enter it into our transfer tool',
      desc: 'Submit your domain name and auth code. Our automated system verifies ownership in seconds.',
    },
    {
      step: '03',
      title: 'We do the rest with zero downtime',
      desc: 'We complete the registrar handover in the background. Your website, DNS, and emails remain 100% live.',
    },
  ];

  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE]">
              <span>Simple Transfer Process</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
            Transfer your domain in three steps
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed">
            Your site and email stay live the whole time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white p-8 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl font-display font-bold text-[#114B27]/30 mb-4">{item.step}</div>
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
