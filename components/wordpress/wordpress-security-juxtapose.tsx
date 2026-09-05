import Image from 'next/image';

export function WordPressSecurityJuxtapose() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          {/* Left Image */}
          <div className="lg:col-span-6 order-last lg:order-first">
            <div className="rounded-3xl overflow-hidden border border-[#E4E4DC] shadow-lg bg-white p-2">
              <Image
                src="/assets/juxtapose/bd-managed-hosting-for-wordpress-by-rocket.net-new.webp"
                alt="Enterprise level protection architecture"
                width={650}
                height={400}
                className="w-full h-auto object-contain rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
              Enterprise level protection
            </h2>
            <p className="text-base text-[#455A58] leading-relaxed mb-6">
              Security shouldn’t be complicated. Our Enterprise WAF quietly guards your site in the background, blocking harmful traffic, brute force login attacks, and zero-day exploits before they ever reach your origin server.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-[#0A1616] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                <span>Dual WAF layers powered by Cloudflare Enterprise</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A1616] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                <span>Automated real-time malware inspection & neutralization</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A1616] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                <span>Zero configuration or security plugin headaches</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
