import Image from 'next/image';

const useCases = [
  {
    title: 'Startups & Growing Businesses',
    desc: 'High-performing, isolated, and scalable environment to grow your brand without paying for dedicated hardware.',
  },
  {
    title: 'High-Traffic E-Commerce',
    desc: 'Handle thousands of concurrent shoppers, active shopping carts, and flash sales with zero performance dips.',
  },
  {
    title: 'Custom Web & Mobile Apps',
    desc: 'Deploy custom Node.js, Python, Go, Ruby, Docker containers, and databases with guaranteed compute power.',
  },
  {
    title: 'Agencies & Developers',
    desc: 'Host dozens of client sites in secure isolated containers with custom PHP environments and delegate access.',
  },
];

export function VPSUseCases() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          {/* Left Text */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
              What is VPS hosting used for?
            </h2>
            <p className="text-base text-[#455A58] leading-relaxed mb-6">
              VPS hosting bridges the gap between shared web hosting and dedicated hardware, providing guaranteed CPU, RAM, and NVMe disk performance.
            </p>

            <div className="space-y-4">
              {useCases.map((item, idx) => (
                <div key={idx} className="flex gap-3.5 items-start">
                  <div className="w-6 h-6 rounded-full bg-[#114B27]/10 text-[#114B27] flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0A1616]">{item.title}</h4>
                    <p className="text-xs text-[#455A58] leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-[#E4E4DC] shadow-lg bg-white p-2">
              <Image
                src="/assets/juxtapose/hosting-image-5.webp"
                alt="VPS Use Cases"
                width={650}
                height={420}
                className="w-full h-auto object-contain rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
