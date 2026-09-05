import Image from 'next/image';
import Link from 'next/link';

interface UnmanagedPlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  period: string;
  ram: string;
  cores: string;
  storage: string;
  bandwidth: string;
  isTurbo?: boolean;
}

const unmanagedPlans: UnmanagedPlan[] = [
  {
    id: 'runway-1',
    name: 'Runway 1',
    price: '৳650',
    period: '/mo',
    ram: '1GB RAM',
    cores: '1 CPU Core',
    storage: '20GB NVMe Storage',
    bandwidth: '1TB Bandwidth',
  },
  {
    id: 'runway-2',
    name: 'Runway 2',
    price: '৳1,200',
    period: '/mo',
    ram: '2GB RAM',
    cores: '2 CPU Cores',
    storage: '40GB NVMe Storage',
    bandwidth: '2TB Bandwidth',
  },
  {
    id: 'runway-4',
    name: 'Runway 4',
    badge: 'Most Popular',
    price: '৳2,400',
    period: '/mo',
    ram: '4GB RAM',
    cores: '4 CPU Cores',
    storage: '80GB NVMe Storage',
    bandwidth: '3TB Bandwidth',
  },
  {
    id: 'supersonic-8',
    name: 'Supersonic 8',
    badge: 'Turbo 20x Faster',
    price: '৳4,800',
    period: '/mo',
    ram: '8GB RAM',
    cores: '6 CPU Cores (Turbo)',
    storage: '150GB NVMe Turbo',
    bandwidth: '4TB Bandwidth',
    isTurbo: true,
  },
];

export function VPSUnmanagedPricing() {
  return (
    <section id="unmanaged-vps" className="bg-background relative py-12 lg:py-24 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE]">
              <span>Full Root Access & Custom Stacks</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
            Unmanaged VPS hosting
          </h2>
          <p className="text-sm text-[#455A58] leading-relaxed">
            *The promotional price shown is for a 12 month term. Full administrative root access with instant OS deployment.
          </p>
        </div>

        {/* 4 Unmanaged Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12 items-stretch">
          {unmanagedPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl bg-white p-7 flex flex-col justify-between border transition-all duration-300 ${
                plan.badge === 'Most Popular' || plan.isTurbo
                  ? 'border-[#082615] shadow-xl ring-2 ring-[#082615]/10 lg:-translate-y-2'
                  : 'border-[#E4E4DC] shadow-sm hover:shadow-md'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#46FDAE] text-[#0A1616] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold font-display text-[#0A1616]">{plan.name}</h3>
                <div className="my-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#0A1616] font-display">{plan.price}</span>
                  <span className="text-xs text-[#455A58]">{plan.period}</span>
                </div>

                <div className="border-t border-[#E4E4DC] pt-4 mb-6 space-y-2.5 text-xs font-medium text-[#0A1616]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#114B27]"></span>
                    <span>{plan.ram}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#114B27]"></span>
                    <span>{plan.cores}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#114B27]"></span>
                    <span>{plan.storage}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#114B27]"></span>
                    <span>{plan.bandwidth}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#114B27]"></span>
                    <span>Full Root Access (SSH)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#114B27]"></span>
                    <span>Choice of Linux Distros</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#114B27]"></span>
                    <span>Dedicated IPv4 Address</span>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  href={`https://checkout.hosting.com/?unmanagedvps=${plan.id}`}
                  className={`w-full py-3 px-4 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-colors ${
                    plan.badge === 'Most Popular' || plan.isTurbo
                      ? 'bg-[#082615] text-white hover:bg-[#0d3b21]'
                      : 'bg-[#E4E4DC] text-[#0A1616] hover:bg-[#D9D9D0]'
                  }`}
                >
                  <span>Get {plan.name}</span>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
                    <path d="M12.3524 7.10073C12.696 6.75716 12.696 6.20012 12.3524 5.85654L6.75358 0.257686C6.41 -0.0858879 5.85296 -0.0858879 5.50939 0.257686C5.16581 0.601259 5.16581 1.1583 5.50939 1.50188L10.4861 6.47864L5.50939 11.4554C5.16581 11.799 5.16581 12.356 5.50939 12.6996C5.85296 13.0432 6.41 13.0432 6.75358 12.6996L12.3524 7.10073ZM0 6.47864L0 7.35841L11.7303 7.35841V6.47864V5.59886L0 5.59886L0 6.47864Z" fill="currentColor"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Unmanaged Callout Banner */}
        <div className="rounded-3xl bg-[#082615] text-white p-6 sm:p-8 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#46FDAE]/20 flex items-center justify-center">
              <Image
                src="/assets/watermarks/landscape-teal-67ea8168ac472.webp"
                alt="OS Distribution"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold font-display text-white">Full freedom over OS, software stacks & custom kernels</h4>
              <p className="text-xs sm:text-sm text-gray-300">Choose from Ubuntu, Debian, AlmaLinux, and Rocky Linux with instant automated 1-click reloads and VNC console.</p>
            </div>
          </div>
          <Link
            href="#unmanaged-vps"
            className="shrink-0 px-6 py-2.5 rounded-full font-semibold text-xs bg-[#46FDAE] text-[#0A1616] hover:bg-[#3de09a] transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
