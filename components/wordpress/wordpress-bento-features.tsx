import Image from 'next/image';

const features = [
  {
    title: 'Enterprise Edge Caching',
    description:
      'Serve full pages directly from 300+ global Cloudflare Enterprise edge nodes. TTFB under 100ms worldwide.',
    image: '/assets/features/managed-hosting-for-wordpress-v2.webp',
  },
  {
    title: 'Security Automation',
    description:
      'Autonomous patch management, real-time malware neutralization, and dual WAF defense running 24/7 in the background.',
    image: '/assets/features/security-automation.png',
  },
  {
    title: 'Unlimited PHP Workers & NVMe',
    description:
      'Never hit concurrency bottlenecks during flash sales. Handle millions of dynamic requests with uncapped PHP workers.',
    image: '/assets/features/hosting-for-wordpress-new.webp',
  },
];

export function WordPressBentoFeatures() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
            Supercharge your WordPress site with no compromises
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed">
            The modern WordPress site requires a finely-tuned stack for optimal performance, speed, and security. We&apos;ve built the ultimate platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white p-7 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-[#0A1616] mb-2">{item.title}</h3>
                <p className="text-sm text-[#455A58] leading-relaxed mb-6">{item.description}</p>
              </div>
              <div className="relative w-full h-48 rounded-xl overflow-hidden mt-auto bg-[#F7F7F4] flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={360}
                  height={220}
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
