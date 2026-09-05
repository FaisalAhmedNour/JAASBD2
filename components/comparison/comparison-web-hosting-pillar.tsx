import Link from 'next/link';

interface Plan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  price: string;
  period: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter Plan',
    description: 'Your First Site',
    price: '৳415',
    period: '/mo',
    features: [
      '5 Websites',
      'Build New or Migrate',
      'Emails & Security Included',
      '15GB NVMe Disk Space',
      'Free Domain Name Registration',
    ],
    ctaText: 'Launch now',
    ctaHref: 'https://checkout.hosting.com/?pid=starter',
  },
  {
    id: 'pro',
    name: 'Pro Plan',
    badge: 'Most Popular',
    description: 'A Growing Site',
    price: '৳830',
    period: '/mo',
    isPopular: true,
    features: [
      '10 Websites',
      'Build New or Migrate',
      'Emails & Security Included',
      '50GB NVMe Disk Space',
      'Free Domain Name Registration',
    ],
    ctaText: 'Choose Pro',
    ctaHref: 'https://checkout.hosting.com/?pid=pro',
  },
  {
    id: 'max',
    name: 'Max Plan',
    description: 'A Portfolio of Sites',
    price: '৳1,660',
    period: '/mo',
    features: [
      '50 Websites',
      'Build New or Migrate',
      'Emails & Security Included',
      '100GB NVMe Disk Space',
      'Free Domain Name Registration',
    ],
    ctaText: 'Choose Max',
    ctaHref: 'https://checkout.hosting.com/?pid=max',
  },
];

export function ComparisonWebHostingPillar() {
  return (
    <section id="web-hosting" className="bg-background relative py-12 lg:py-20">
      <div className="relative z-10">
        <div className="container mx-auto px-siteContainer">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="mb-4 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE]">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    d="M7.5 9.26475L8.87258 10.0847C9.00331 10.1679 9.13106 10.165 9.25584 10.0758C9.38062 9.98669 9.42518 9.86488 9.38953 9.71039L9.03301 8.15955L10.2452 7.10783C10.364 7.00088 10.3997 6.87313 10.3521 6.72458C10.3046 6.57603 10.1976 6.49582 10.0313 6.48393L8.44476 6.35915L7.82086 4.87961C7.76144 4.73701 7.65449 4.66571 7.5 4.66571C7.34551 4.66571 7.23856 4.73701 7.17914 4.87961L6.55523 6.35915L4.96874 6.48393C4.80237 6.49582 4.69541 6.57603 4.64788 6.72458C4.60034 6.87313 4.636 7.00088 4.75483 7.10783L5.96699 8.15955L5.61047 9.71039C5.57482 9.86488 5.61938 9.98669 5.74416 10.0758C5.86894 10.165 5.99669 10.1679 6.12742 10.0847L7.5 9.26475ZM5.11135 13.2042H3.22182C2.82965 13.2042 2.49393 13.0646 2.21466 12.7853C1.93539 12.5061 1.79576 12.1703 1.79576 11.7782V9.88865L0.423176 8.49824C0.292454 8.35564 0.191441 8.19818 0.120138 8.02586C0.0488351 7.85354 0.0131836 7.67826 0.0131836 7.5C0.0131836 7.32174 0.0488351 7.14646 0.120138 6.97414C0.191441 6.80182 0.292454 6.64436 0.423176 6.50176L1.79576 5.11135V3.22182C1.79576 2.82965 1.93539 2.49393 2.21466 2.21466C2.49393 1.93539 2.82965 1.79576 3.22182 1.79576H5.11135L6.50176 0.423176C6.64436 0.292454 6.80182 0.191441 6.97414 0.120138C7.14646 0.0488351 7.32174 0.0131836 7.5 0.0131836C7.67826 0.0131836 7.85354 0.0488351 8.02586 0.120138C8.19818 0.191441 8.35564 0.292454 8.49824 0.423176L9.88865 1.79576H11.7782C12.1703 1.79576 12.5061 1.93539 12.7853 2.21466C13.0646 2.49393 13.2042 2.82965 13.2042 3.22182V5.11135L14.5768 6.50176C14.7075 6.64436 14.8086 6.80182 14.8799 6.97414C14.9512 7.14646 14.9868 7.32174 14.9868 7.5C14.9868 7.67826 14.9512 7.85354 14.8799 8.02586C14.8086 8.19818 14.7075 8.35564 14.5768 8.49824L13.2042 9.88865V11.7782C13.2042 12.1703 13.0646 12.5061 12.7853 12.7853C12.5061 13.0646 12.1703 13.2042 11.7782 13.2042H9.88865L8.49824 14.5768C8.35564 14.7075 8.19818 14.8086 8.02586 14.8799C7.85354 14.9512 7.67826 14.9868 7.5 14.9868C7.32174 14.9868 7.14646 14.9512 6.97414 14.8799C6.80182 14.8086 6.64436 14.7075 6.50176 14.5768L5.11135 13.2042Z"
                    fill="#0A1616"
                  />
                </svg>
                <span>Web Hosting</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
              Start on a Web Hosting Plan ...
            </h2>
            <p className="text-base text-[#455A58] leading-relaxed">
              <strong className="text-[#0A1616]">We are more than a web host.</strong> Succeeding online isn&apos;t just where your site lives — it&apos;s your email, your domains, your security, and the team behind you. We run all of it, so you can run your business.
            </p>
          </div>

          {/* 3 Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl bg-white p-7 flex flex-col justify-between border transition-all duration-300 ${
                  plan.isPopular
                    ? 'border-[#082615] shadow-xl ring-2 ring-[#082615]/10 lg:-translate-y-2'
                    : 'border-[#E4E4DC] shadow-sm hover:shadow-md'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#46FDAE] text-[#0A1616] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold font-display text-[#0A1616]">{plan.name}</h3>
                  <p className="text-xs text-[#455A58] mt-1 mb-6">{plan.description}</p>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-bold text-[#0A1616] font-display">{plan.price}</span>
                    <span className="text-sm text-[#455A58]">{plan.period}</span>
                  </div>

                  <div className="border-t border-[#E4E4DC] pt-6 mb-8">
                    <ul className="space-y-3.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[#0A1616]">
                          <svg className="w-5 h-5 text-[#114B27] shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Link
                    href={plan.ctaHref}
                    className={`w-full py-3 px-5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 transition-colors ${
                      plan.isPopular
                        ? 'bg-[#082615] text-white hover:bg-[#0d3b21]'
                        : 'bg-[#E4E4DC] text-[#0A1616] hover:bg-[#D9D9D0]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5">
                      <path d="M12.3524 7.10073C12.696 6.75716 12.696 6.20012 12.3524 5.85654L6.75358 0.257686C6.41 -0.0858879 5.85296 -0.0858879 5.50939 0.257686C5.16581 0.601259 5.16581 1.1583 5.50939 1.50188L10.4861 6.47864L5.50939 11.4554C5.16581 11.799 5.16581 12.356 5.50939 12.6996C5.85296 13.0432 6.41 13.0432 6.75358 12.6996L12.3524 7.10073ZM0 6.47864L0 7.35841L11.7303 7.35841V6.47864V5.59886L0 5.59886L0 6.47864Z" fill="currentColor"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
