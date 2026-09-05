import Image from 'next/image';

const features = [
  {
    icon: '/assets/features/icon-turbo-hosting-green.svg',
    title: 'Up to 20x Faster Turbo',
    description: 'LiteSpeed web server and NVMe drives deliver blazing fast page speeds and superior SEO rankings.',
  },
  {
    icon: '/assets/features/icon-ssd-green.svg',
    title: 'Ultra-Fast NVMe Storage',
    description: 'Enterprise-grade NVMe solid state drives provide up to 3x faster read/write speeds than legacy SSDs.',
  },
  {
    icon: '/assets/features/icon-developer-green.svg',
    title: 'Developer Friendly',
    description: 'Complete root access, multiple PHP versions, Node.js, Python, Git, WP-CLI, and custom daemons.',
  },
  {
    icon: '/assets/features/qq-uptime.svg',
    title: '99.9% Uptime Commitment',
    description: 'Redundant power feeds, enterprise server hardware, and 24/7 proactive network monitoring.',
  },
  {
    icon: '/assets/features/qq-migration.svg',
    title: 'Free Website Migration',
    description: 'Our senior migration specialists move your files, databases, and emails with zero downtime.',
  },
  {
    icon: '/assets/features/icon-ssl-green.svg',
    title: 'Free SSL Certificates',
    description: 'Automated Let’s Encrypt SSL certificates protect your visitors and enhance e-commerce trust.',
  },
  {
    icon: '/assets/features/qq-guru-support.svg',
    title: '24/7/365 Guru Crew Support',
    description: 'Experienced in-house server administrators available around the clock via live chat and tickets.',
  },
  {
    icon: '/assets/features/icon-cost-effective-green.svg',
    title: 'Seamless Scalability',
    description: 'Scale CPU cores, RAM, and NVMe disk space with zero hassle as your online business expands.',
  },
];

export function VPSTurboFeatures() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE]">
              <span>Hosting.com Advantage</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
            VPS features you get with hosting.com
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed">
            Every virtual private server plan is backed by enterprise hardware, high-bandwidth networks, and dedicated engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-6 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between"
            >
              <div>
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
                <p className="text-xs sm:text-sm text-[#455A58] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
