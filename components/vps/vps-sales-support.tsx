import Image from 'next/image';

export function VPSSalesSupport() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          {/* Left Text */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
              Questions? We’re here to help.
            </h2>
            <p className="text-base text-[#455A58] leading-relaxed mb-8">
              Our hosting.com Sales & Server Engineering Team is available 24/7 to help you size resources, plan migrations, and pick the perfect VPS plan for your workload.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                className="px-6 py-3.5 rounded-full font-semibold text-sm bg-[#082615] text-white hover:bg-[#0d3b21] transition-colors"
              >
                Chat with Sales
              </button>
              <a
                href="tel:+8809614101010"
                className="px-6 py-3.5 rounded-full font-semibold text-sm bg-[#E4E4DC] text-[#0A1616] hover:bg-[#D9D9D0] transition-colors"
              >
                Call +8809614101010
              </a>
            </div>
          </div>

          {/* Right Support Photo */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-[#E4E4DC] shadow-lg bg-white p-2">
              <Image
                src="/assets/juxtapose/hosting-support-white-desktop-67dd62ac4566a.webp"
                alt="24/7 VPS Sales and Support Team"
                width={650}
                height={400}
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
