import Image from 'next/image';

const reviews = [
  {
    title: 'Exceptional assistance',
    quote: 'Exceptional assistance who went the extra mile and made sure everything was working properly on our Lift 8 server. Page load times dropped dramatically.',
    author: 'Karim Ullah',
    role: 'E-commerce Business Owner',
  },
  {
    title: 'Flawless server migration',
    quote: 'Migrated 40 cPanel accounts to a Managed VPS with zero downtime. Everything worked seamlessly out of the box and customer support is top tier.',
    author: 'Sadia Chowdhury',
    role: 'Lead Developer at WebCraft BD',
  },
  {
    title: 'Unmatched raw speed with Turbo',
    quote: 'The Mach 8 Turbo VPS with NVMe storage and LiteSpeed is insane. Our database queries execute in milliseconds and uptime has been 100%.',
    author: 'Rafiqul Islam',
    role: 'SaaS Platform Founder',
  },
];

export function VPSReviews() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src="/assets/reviews/stars.svg"
                alt="5 Stars"
                width={18}
                height={18}
                className="w-4 h-4"
              />
            ))}
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-2">
            What our customers have to say
          </h2>
          <p className="text-sm text-[#455A58]">
            Rated Excellent by thousands of real server and VPS owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white p-7 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <h4 className="font-bold text-base text-[#0A1616] mb-3">{rev.title}</h4>
                <p className="text-sm text-[#455A58] leading-relaxed italic mb-6">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-[#E4E4DC] pt-4">
                <div className="font-bold text-sm text-[#0A1616]">{rev.author}</div>
                <div className="text-xs text-[#455A58]">{rev.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
