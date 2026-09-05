export function VPSAnycastDns() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="max-w-4xl mx-auto rounded-3xl bg-white p-8 sm:p-12 border border-[#E4E4DC] shadow-sm text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE]">
            <span>Speed Optimization</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
            Getting the most speed out of your website
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed max-w-2xl mx-auto">
            Our premium Anycast DNS automatically routes visitor traffic to the closest geographical nameserver node worldwide, shaving crucial milliseconds off DNS lookup latency and providing native DDoS resilience.
          </p>
        </div>
      </div>
    </section>
  );
}
