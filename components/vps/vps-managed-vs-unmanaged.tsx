export function VPSManagedVsUnmanaged() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
            Choose between managed or unmanaged VPS hosting
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed">
            Compare key operational differences to select the right server environment for your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Comparison Item 1 */}
          <div className="rounded-3xl bg-white p-7 sm:p-8 border border-[#E4E4DC] shadow-sm">
            <h3 className="font-display font-bold text-xl text-[#0A1616] mb-4">
              Easy cPanel Control Panel vs Command Line
            </h3>
            <div className="space-y-4 text-sm text-[#455A58]">
              <div>
                <strong className="text-[#0A1616] block mb-1">Managed VPS:</strong>
                Includes full cPanel & WHM licensing. Manage files, DNS records, MariaDB databases, and email mailboxes with a friendly graphical interface.
              </div>
              <div className="border-t border-[#E4E4DC] pt-3">
                <strong className="text-[#0A1616] block mb-1">Unmanaged VPS:</strong>
                Manage your server via SSH terminal. Perfect for DevOps engineers who prefer CLI, Ansible, Docker, or custom web stacks.
              </div>
            </div>
          </div>

          {/* Comparison Item 2 */}
          <div className="rounded-3xl bg-white p-7 sm:p-8 border border-[#E4E4DC] shadow-sm">
            <h3 className="font-display font-bold text-xl text-[#0A1616] mb-4">
              Pre-installed CloudLinux vs Custom Linux Distros
            </h3>
            <div className="space-y-4 text-sm text-[#455A58]">
              <div>
                <strong className="text-[#0A1616] block mb-1">Managed VPS:</strong>
                Comes pre-configured with CloudLinux OS, CageFS virtualized user security, and hardened kernel patches standard.
              </div>
              <div className="border-t border-[#E4E4DC] pt-3">
                <strong className="text-[#0A1616] block mb-1">Unmanaged VPS:</strong>
                Select from popular enterprise Linux distributions (Ubuntu, Debian, AlmaLinux, Rocky) with instant 1-click re-imaging.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
