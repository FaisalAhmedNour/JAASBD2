import Image from 'next/image';
import Link from 'next/link';

export function VPSHero() {
  return (
    <section className="bg-background relative pt-12 pb-16 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Background Watermark */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40 select-none">
        <Image
          src="/assets/watermarks/grad-dark-landscape-02.webp"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 text-left">
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE]">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path
                  d="M7.5 9.26475L8.87258 10.0847C9.00331 10.1679 9.13106 10.165 9.25584 10.0758C9.38062 9.98669 9.42518 9.86488 9.38953 9.71039L9.03301 8.15955L10.2452 7.10783C10.364 7.00088 10.3997 6.87313 10.3521 6.72458C10.3046 6.57603 10.1976 6.49582 10.0313 6.48393L8.44476 6.35915L7.82086 4.87961C7.76144 4.73701 7.65449 4.66571 7.5 4.66571C7.34551 4.66571 7.23856 4.73701 7.17914 4.87961L6.55523 6.35915L4.96874 6.48393C4.80237 6.49582 4.69541 6.57603 4.64788 6.72458C4.60034 6.87313 4.636 7.00088 4.75483 7.10783L5.96699 8.15955L5.61047 9.71039C5.57482 9.86488 5.61938 9.98669 5.74416 10.0758C5.86894 10.165 5.99669 10.1679 6.12742 10.0847L7.5 9.26475ZM5.11135 13.2042H3.22182C2.82965 13.2042 2.49393 13.0646 2.21466 12.7853C1.93539 12.5061 1.79576 12.1703 1.79576 11.7782V9.88865L0.423176 8.49824C0.292454 8.35564 0.191441 8.19818 0.120138 8.02586C0.0488351 7.85354 0.0131836 7.67826 0.0131836 7.5C0.0131836 7.32174 0.0488351 7.14646 0.120138 6.97414C0.191441 6.80182 0.292454 6.64436 0.423176 6.50176L1.79576 5.11135V3.22182C1.79576 2.82965 1.93539 2.49393 2.21466 2.21466C2.49393 1.93539 2.82965 1.79576 3.22182 1.79576H5.11135L6.50176 0.423176C6.64436 0.292454 6.80182 0.191441 6.97414 0.120138C7.14646 0.0488351 7.32174 0.0131836 7.5 0.0131836C7.67826 0.0131836 7.85354 0.0488351 8.02586 0.120138C8.19818 0.191441 8.35564 0.292454 8.49824 0.423176L9.88865 1.79576H11.7782C12.1703 1.79576 12.5061 1.93539 12.7853 2.21466C13.0646 2.49393 13.2042 2.82965 13.2042 3.22182V5.11135L14.5768 6.50176C14.7075 6.64436 14.8086 6.80182 14.8799 6.97414C14.9512 7.14646 14.9868 7.32174 14.9868 7.5C14.9868 7.67826 14.9512 7.85354 14.8799 8.02586C14.8086 8.19818 14.7075 8.35564 14.5768 8.49824L13.2042 9.88865V11.7782C13.2042 12.1703 13.0646 12.5061 12.7853 12.7853C12.5061 13.0646 12.1703 13.2042 11.7782 13.2042H9.88865L8.49824 14.5768C8.35564 14.7075 8.19818 14.8086 8.02586 14.8799C7.85354 14.9512 7.67826 14.9868 7.5 14.9868C7.32174 14.9868 7.14646 14.9512 6.97414 14.8799C6.80182 14.8086 6.64436 14.7075 6.50176 14.5768L5.11135 13.2042Z"
                  fill="#0A1616"
                />
              </svg>
              <span>VPS Hosting</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A1616] tracking-tight antialiased mb-4 leading-tight">
              Ultra-reliable VPS web hosting up to 20x faster than others
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#455A58] mb-8 leading-relaxed max-w-2xl">
              Powerful virtual private server hosting with dedicated processor and memory resources, pure NVMe storage, and 24/7 in-house support.
            </p>

            {/* Checkmarks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2.5 text-sm font-medium text-[#0A1616]">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#114B27] text-white shrink-0">
                  <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Up to 20x Faster Turbo Options</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-[#0A1616]">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#114B27] text-white shrink-0">
                  <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>100% Dedicated CPU & RAM</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-[#0A1616]">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#114B27] text-white shrink-0">
                  <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>24/7/365 In-House Guru Support</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-[#0A1616]">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#114B27] text-white shrink-0">
                  <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>99.9% Uptime Commitment SLA</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#managed-vps"
                className="group relative isolate inline-flex cursor-pointer items-center gap-3 rounded-full py-1.5 pe-1.5 ps-5 font-body leading-normal text-white bg-[#082615] hover:bg-[#0d3b21] transition-all duration-200"
              >
                <span className="block font-semibold text-sm sm:text-base">Managed VPS Plans</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#114B27] text-white">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-0.5">
                    <path d="M12.3524 7.10073C12.696 6.75716 12.696 6.20012 12.3524 5.85654L6.75358 0.257686C6.41 -0.0858879 5.85296 -0.0858879 5.50939 0.257686C5.16581 0.601259 5.16581 1.1583 5.50939 1.50188L10.4861 6.47864L5.50939 11.4554C5.16581 11.799 5.16581 12.356 5.50939 12.6996C5.85296 13.0432 6.41 13.0432 6.75358 12.6996L12.3524 7.10073ZM0 6.47864L0 7.35841L11.7303 7.35841V6.47864V5.59886L0 5.59886L0 6.47864Z" fill="currentColor"/>
                  </svg>
                </span>
              </Link>

              <Link
                href="#unmanaged-vps"
                className="group relative isolate inline-flex cursor-pointer items-center gap-3 rounded-full py-1.5 pe-1.5 ps-5 font-body leading-normal text-[#0A1616] bg-transparent border border-[#0A1616]/20 hover:border-[#0A1616] hover:bg-black/5 transition-all duration-200"
              >
                <span className="block font-semibold text-sm sm:text-base">Unmanaged VPS Plans</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E4E4DC] text-[#0A1616]">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-0.5">
                    <path d="M12.3524 7.10073C12.696 6.75716 12.696 6.20012 12.3524 5.85654L6.75358 0.257686C6.41 -0.0858879 5.85296 -0.0858879 5.50939 0.257686C5.16581 0.601259 5.16581 1.1583 5.50939 1.50188L10.4861 6.47864L5.50939 11.4554C5.16581 11.799 5.16581 12.356 5.50939 12.6996C5.85296 13.0432 6.41 13.0432 6.75358 12.6996L12.3524 7.10073ZM0 6.47864L0 7.35841L11.7303 7.35841V6.47864V5.59886L0 5.59886L0 6.47864Z" fill="currentColor"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Floating Billboard Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg">
              <Image
                src="/assets/billboard/vps-hosting.webp"
                alt="Virtual Private Server Hosting"
                width={560}
                height={480}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
