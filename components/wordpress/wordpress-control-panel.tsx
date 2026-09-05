import Image from 'next/image';

export function WordPressControlPanel() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          {/* Left Text */}
          <div className="lg:col-span-6 text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
              Simple WordPress management
            </h2>
            <p className="text-base text-[#455A58] leading-relaxed mb-6">
              No PhD required. Hosting.com’s control panel is clean, intuitive, and built specifically for WordPress. Publishing, updating, cloning, and managing your sites is effortless.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-[#0A1616] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                <span>1-Click staging environment & automatic merge</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A1616] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                <span>Instant automated backups & point-in-time restore</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#0A1616] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                <span>Direct PHP version switching & WP-CLI access</span>
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-[#E4E4DC] shadow-lg bg-white p-2">
              <Image
                src="/assets/juxtapose/managed-wp-panel-sm.webp"
                alt="WordPress Control Panel Dashboard"
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
