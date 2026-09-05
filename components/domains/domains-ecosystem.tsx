import Link from 'next/link';

export function DomainsEcosystem() {
  const ecosystemItems = [
    {
      title: 'Give your domain a home',
      desc: 'Fast, fully managed web hosting on LiteSpeed NVMe servers. Free SSL and automated backups included.',
      price: 'From ৳415/mo',
      cta: 'Explore Web Hosting',
      href: '/hosting',
    },
    {
      title: 'Get professional email',
      desc: 'Look legitimate with personalized email (you@yourdomain.com). Includes webmail, spam protection, and 10GB storage.',
      price: 'Free with hosting',
      cta: 'Explore Email Plans',
      href: '/hosting',
    },
    {
      title: 'Build your site with AI',
      desc: 'Describe your vision in plain text and launch a fully functional, mobile-ready WordPress site in minutes.',
      price: 'Included on every plan',
      cta: 'Explore AI Builder',
      href: '/hosting/platforms/wordpress-hosting',
    },
  ];

  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-body font-semibold text-xs leading-none text-[#0A1616] bg-[#46FDAE]">
              <span>Next Steps</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
            Your domain is just the start
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed">
            You have got the name. Here is where it lives and where it goes to work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {ecosystemItems.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white p-8 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-bold text-[#114B27] bg-[#E4E4DC] px-2.5 py-1 rounded-md inline-block mb-4">
                  {item.price}
                </div>
                <h3 className="font-display font-bold text-xl text-[#0A1616] mb-3">{item.title}</h3>
                <p className="text-sm text-[#455A58] leading-relaxed mb-6">{item.desc}</p>
              </div>

              <div>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#082615] underline hover:text-[#114B27]"
                >
                  <span>{item.cta}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
