import Link from 'next/link';

export function VPSManagementLevel() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
            Choose your VPS management level
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed">
            Whether you want completely hands-off managed servers with cPanel or full root control via command line, we have the perfect server configuration for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Managed VPS Card */}
          <div className="rounded-3xl bg-white p-8 sm:p-10 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#46FDAE] text-[#0A1616] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                100% Hands-Off
              </div>
              <h3 className="font-display font-bold text-2xl text-[#0A1616] mb-3">Managed VPS hosting</h3>
              <p className="text-sm text-[#455A58] leading-relaxed mb-6">
                Complete peace of mind. We handle server administration, kernel patches, security hardening, and updates. Includes cPanel license and pre-installed CloudLinux OS.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2.5 text-sm text-[#0A1616] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                  <span>Easy-to-use cPanel Control Panel</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-[#0A1616] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                  <span>Pre-installed CloudLinux Operating System</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-[#0A1616] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                  <span>Automated backups & security patches managed by us</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-[#0A1616] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                  <span>24/7/365 Guru Crew proactive support</span>
                </li>
              </ul>
            </div>

            <Link
              href="#managed-vps"
              className="w-full py-3.5 px-6 rounded-full font-semibold text-sm bg-[#082615] text-white hover:bg-[#0d3b21] transition-colors text-center"
            >
              Explore Managed VPS Plans
            </Link>
          </div>

          {/* Unmanaged VPS Card */}
          <div className="rounded-3xl bg-white p-8 sm:p-10 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#E4E4DC] text-[#0A1616] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                Full Root Control
              </div>
              <h3 className="font-display font-bold text-2xl text-[#0A1616] mb-3">Unmanaged VPS hosting</h3>
              <p className="text-sm text-[#455A58] leading-relaxed mb-6">
                For developers, sysadmins, and technical teams who want full root access and complete command line control over custom stacks and kernels.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2.5 text-sm text-[#0A1616] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                  <span>Full Root Access & Command Line Management</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-[#0A1616] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                  <span>Linux choice: Ubuntu, Debian, AlmaLinux, Rocky</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-[#0A1616] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                  <span>Custom kernel and package installations</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-[#0A1616] font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#114B27]"></span>
                  <span>Cost-effective high-performance cloud compute</span>
                </li>
              </ul>
            </div>

            <Link
              href="#unmanaged-vps"
              className="w-full py-3.5 px-6 rounded-full font-semibold text-sm bg-[#E4E4DC] text-[#0A1616] hover:bg-[#D9D9D0] transition-colors text-center"
            >
              Explore Unmanaged VPS Plans
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
