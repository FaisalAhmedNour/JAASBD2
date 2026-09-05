import Link from 'next/link';

export function ServersCTA() {
  return (
    <section className="bg-background relative">
      <div className="relative z-10">
        <div className="pb-16 lg:pb-32 pt-16 lg:pt-32 z-1 relative">
          <div className="text-center">
            <div className="container mx-auto px-siteContainer">
              <div className="mb-heading">
                <h2 className="block hyphens-auto text-balance break-words font-display text-heading antialiased sm:hyphens-manual sm:break-normal mx-auto max-w-headingDefault text-3xl sm:text-4xl font-bold text-[#0A1616]">
                  Ready to step up?
                </h2>
              </div>
              <div className="prose text-[#455A58] text-base leading-relaxed mx-auto mb-8 max-w-2xl">
                <p>
                  Your own server, still fully managed, moved for free. Pick a size, or ask us and we&apos;ll size it with you.
                </p>
              </div>
              <div className="justify-center flex flex-wrap gap-4">
                <Link
                  href="#plans"
                  className="group relative isolate inline-flex cursor-pointer items-center gap-3 rounded-full py-1.5 pe-1.5 ps-5 font-body leading-normal text-white bg-[#082615] hover:bg-[#0d3b21] transition-all duration-200"
                >
                  <span className="block font-semibold text-sm sm:text-base">See Server Plans</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#114B27] text-white">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-0.5">
                      <path d="M12.3524 7.10073C12.696 6.75716 12.696 6.20012 12.3524 5.85654L6.75358 0.257686C6.41 -0.0858879 5.85296 -0.0858879 5.50939 0.257686C5.16581 0.601259 5.16581 1.1583 5.50939 1.50188L10.4861 6.47864L5.50939 11.4554C5.16581 11.799 5.16581 12.356 5.50939 12.6996C5.85296 13.0432 6.41 13.0432 6.75358 12.6996L12.3524 7.10073ZM0 6.47864L0 7.35841L11.7303 7.35841V6.47864V5.59886L0 5.59886L0 6.47864Z" fill="currentColor"/>
                    </svg>
                  </span>
                </Link>
                <button
                  type="button"
                  className="group relative isolate inline-flex cursor-pointer items-center gap-3 rounded-full py-1.5 pe-1.5 ps-5 font-body leading-normal text-[#0A1616] bg-[#E4E4DC] hover:bg-[#D9D9D0] transition-all duration-200"
                >
                  <span className="block font-semibold text-sm sm:text-base">Talk to us</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D1D1C7] text-[#0A1616]">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-0.5">
                      <path d="M12.3524 7.10073C12.696 6.75716 12.696 6.20012 12.3524 5.85654L6.75358 0.257686C6.41 -0.0858879 5.85296 -0.0858879 5.50939 0.257686C5.16581 0.601259 5.16581 1.1583 5.50939 1.50188L10.4861 6.47864L5.50939 11.4554C5.16581 11.799 5.16581 12.356 5.50939 12.6996C5.85296 13.0432 6.41 13.0432 6.75358 12.6996L12.3524 7.10073ZM0 6.47864L0 7.35841L11.7303 7.35841V6.47864V5.59886L0 5.59886L0 6.47864Z" fill="currentColor"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
