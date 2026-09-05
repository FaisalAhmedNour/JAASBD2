export function ComparisonOverviewSplit() {
  return (
    <section className="bg-background relative">
      <div className="relative z-10 pb-12 lg:pb-16 pt-0">
        <div className="container mx-auto px-siteContainer">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="px-7 pb-10 pt-7 bg-white text-left flex flex-col justify-between rounded-2xl border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-xl font-bold text-[#0A1616]">Web hosting</h3>
                <p className="text-sm text-[#455A58] leading-relaxed">
                  Your site in an isolated container. You get dedicated CPU and RAM inside a managed, shared server. First site up to a portfolio.
                </p>
              </div>
            </li>
            <li className="px-7 pb-10 pt-7 bg-white text-left flex flex-col justify-between rounded-2xl border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col gap-3">
                <h3 className="font-display text-xl font-bold text-[#0A1616]">Managed servers</h3>
                <p className="text-sm text-[#455A58] leading-relaxed">
                  A fully-managed server of your own. The whole box is yours - powered by the hosting.com platform and fully managed by us. The next rung up.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
