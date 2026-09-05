import Image from 'next/image';

export function ComparisonSupportTeam() {
  const stats = [
    { label: 'Average initial response', value: '< 2 mins' },
    { label: 'Customer satisfaction score', value: '> 85%' },
    { label: 'Support availability', value: '24/7/365' },
  ];

  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10">
        <div className="container mx-auto px-siteContainer">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE]">
                  <span>Support that grows with you</span>
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
                You&apos;re not buying a plan. You&apos;re getting a team.
              </h2>
              <p className="text-base text-[#455A58] leading-relaxed mb-8">
                Hosting is the easy part. As your business grows, what you need is help the moment something breaks. At hosting.com we are a partner who knows your setup. That&apos;s built in, at every tier.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#E4E4DC] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[#114B27]">AI</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#0A1616]">Orbi, your 24/7 AI assistant</h3>
                    <p className="text-sm text-[#455A58]">Instant answers any hour — Orbi resolves configuration, DNS, and script issues in seconds.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-[#E4E4DC] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-[#114B27]">24/7</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#0A1616]">Real humans, around the clock</h3>
                    <p className="text-sm text-[#455A58]">In-house senior sysadmins on support 24/7/365 — not outsourced tiers or copy-paste scripts.</p>
                  </div>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 border-t border-[#E4E4DC] pt-6">
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-2xl sm:text-3xl font-bold font-display text-[#0A1616]">{stat.value}</div>
                    <div className="text-xs text-[#455A58] mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-[#E4E4DC]">
                <Image
                  src="/assets/juxtapose/chat_with_team.jpg"
                  alt="hosting.com engineering support team"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
