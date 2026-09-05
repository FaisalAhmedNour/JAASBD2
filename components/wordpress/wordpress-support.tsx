import Image from 'next/image';

const supportPillars = [
  {
    icon: '/assets/features/shared-web-hosting-1.png',
    title: 'Hosting.com always has your back',
    description: 'Real engineers ready to troubleshoot plugin conflicts, WooCommerce errors, and caching setups.',
  },
  {
    icon: '/assets/features/crew-support-1.png',
    title: 'WordPress core expertise',
    description: 'Our team includes active WordPress developers and server specialists who understand the ecosystem.',
  },
  {
    icon: '/assets/features/online-support.svg',
    title: '24/7/365 live assistance',
    description: 'Instant answers any hour of the day or night with average response times under 2 minutes.',
  },
  {
    icon: '/assets/features/respect-1.png',
    title: 'Trusted by millions',
    description: 'Over 3 million websites powered with proven enterprise stability and 99.99% uptime guarantees.',
  },
];

export function WordPressSupport() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
            WordPress support you can count on
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed">
            How many times have you reached out to your hosting provider in a moment of need, only to be met with silence or an unhelpful response? We’re different.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {supportPillars.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-6 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E4E4DC] flex items-center justify-center mb-5 p-2.5">
                <Image
                  src={item.icon}
                  alt=""
                  width={48}
                  height={48}
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
