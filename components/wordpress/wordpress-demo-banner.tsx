import Image from 'next/image';
import Link from 'next/link';

export function WordPressDemoBanner() {
  return (
    <section className="bg-[#082615] relative py-16 lg:py-24 overflow-hidden text-white">
      {/* Background Graphic Overlay */}
      <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-15 select-none w-1/2 h-full">
        <Image
          src="/assets/text/hero-8.webp"
          alt=""
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="relative z-10 container mx-auto px-siteContainer text-center max-w-4xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight">
          Ready to get started?
        </h2>
        <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Explore our Managed hosting for WordPress plans and find the perfect fit for your site. Alternatively, book a demo and speak with our platform specialists.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4">
          <Link
            href="#plans"
            className="px-8 py-3.5 rounded-full font-semibold text-sm bg-[#46FDAE] text-[#0A1616] hover:bg-[#3de09a] transition-colors"
          >
            Explore Plans
          </Link>
          <Link
            href="#demo"
            className="px-8 py-3.5 rounded-full font-semibold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
