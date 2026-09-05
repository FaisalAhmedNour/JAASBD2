import Image from 'next/image';
import Link from 'next/link';

export function WordPressMigration() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          {/* Left Text */}
          <div className="lg:col-span-6 text-left">
            <div className="mb-3">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE]">
                <span>Zero Downtime</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
              Unlimited free migrations
            </h2>
            <p className="text-base text-[#455A58] leading-relaxed mb-6">
              Nervous about change? Hosting.com provides hassle-free migrations for WordPress by seasoned experts from any hosting provider with zero downtime guaranteed.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-[#0A1616] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                <span>Complete transfer of WordPress database, plugins & media</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A1616] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                <span>Pre-migration testing on private preview URLs</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A1616] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                <span>No limits on the number of sites we move for you</span>
              </li>
            </ul>

            <Link
              href="/hosting/free-website-migration"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#082615] underline hover:text-[#114B27]"
            >
              Learn how our free migration works →
            </Link>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-[#E4E4DC] shadow-lg bg-white p-2">
              <Image
                src="/assets/juxtapose/bd-unlimited-free-migrations.webp"
                alt="Unlimited free WordPress migration"
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
