import Image from 'next/image';

const guarantees = [
  {
    icon: '/assets/features/dark-cre-support.svg',
    title: 'In-house, 24/7/365',
    description: 'Real people who know the platform, not outsourced tiers or scripts.',
  },
  {
    icon: '/assets/features/dark-migration.svg',
    title: 'Free migration',
    description: "We move every site for you, and we're on hand if anything needs a look afterwards",
  },
  {
    icon: '/assets/features/dark-orbi.svg',
    title: 'Orbi AI Assistance',
    description: 'Unbelievable quality AI support so you can ask questions and get fixes instantly',
  },
  {
    icon: '/assets/features/dark-uptime.svg',
    title: 'Backed by an SLA',
    description: 'A 99.99% uptime guarantee, plus a 30-day money-back guarantee.',
  },
];

export function ServersGuarantees() {
  return (
    <section className="bg-background relative">
      <div className="relative z-10">
        <div className="pb-16 lg:pb-32 pt-4 lg:pt-8 z-1 relative">
          <div className="container mx-auto px-siteContainer">
            <div className="lg:grid-cols-3 xl:grid-cols-4 gap-10 grid grid-cols-1 sm:grid-cols-2">
              {guarantees.map((item, idx) => (
                <div key={idx} className="text-left">
                  <div className="mb-3">
                    <div className="w-16 h-16 mr-auto">
                      <Image
                        src={item.icon}
                        alt=""
                        width={64}
                        height={64}
                        loading="lazy"
                        className="w-16 h-16"
                      />
                    </div>
                  </div>
                  <div className="mb-2 font-display text-lg font-semibold text-heading text-[#0A1616]">
                    {item.title}
                  </div>
                  <div className="text-sm text-[#455A58] leading-relaxed">
                    <p>{item.description}</p>
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
