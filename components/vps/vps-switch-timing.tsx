import Image from 'next/image';

export function VPSSwitchTiming() {
  const signs = [
    {
      title: 'Traffic Surges & Busy Hours',
      text: 'Pages feel sluggish when hundreds of concurrent users browse your site simultaneously.',
    },
    {
      title: 'Custom Software & Daemons',
      text: 'You need Redis, Elasticsearch, Node.js background workers, or custom PHP modules.',
    },
    {
      title: 'Enhanced Security & Dedicated IPs',
      text: 'Compliance, SSL trust, email reputation, and completely isolated server environments.',
    },
    {
      title: 'Resource Limit Warnings',
      text: 'You frequently hit EP (Entry Processes), CPU, or Inode thresholds on shared hosting.',
    },
  ];

  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          {/* Left Image */}
          <div className="lg:col-span-6 order-last lg:order-first">
            <div className="rounded-3xl overflow-hidden border border-[#E4E4DC] shadow-lg bg-white p-2">
              <Image
                src="/assets/juxtapose/hosting-generic-2-720-680a1d6177452.webp"
                alt="When to upgrade to VPS hosting"
                width={650}
                height={420}
                className="w-full h-auto object-contain rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
              When should you switch to VPS hosting
            </h2>
            <p className="text-base text-[#455A58] leading-relaxed mb-6">
              We recommend switching to VPS hosting when your website requirements outgrow the shared resource pool. Here are the top indicators it&apos;s time to step up:
            </p>

            <div className="space-y-4">
              {signs.map((sign, idx) => (
                <div key={idx} className="flex gap-3.5 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#114B27]/10 text-[#114B27] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A1616]">{sign.title}</h4>
                    <p className="text-xs text-[#455A58] leading-relaxed mt-0.5">{sign.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
