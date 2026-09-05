import Image from 'next/image';

const testimonials = [
  {
    quote: 'Best WordPress hosting support I have had since 1993. The speed difference was night and day immediately after migration.',
    name: 'David Miller',
    role: 'Digital Agency Director',
    stars: 5,
  },
  {
    quote: 'Our WooCommerce checkout speeds doubled, and our Google Core Web Vitals score went from red to 99 in 24 hours. Incredible stack.',
    name: 'Sarah Rahman',
    role: 'E-commerce Founder',
    stars: 5,
  },
  {
    quote: 'Zero downtime during migration of our 25+ client sites. The in-house support team helped us with complex Nginx/PHP rewrites seamlessly.',
    name: 'Tanvir Hossain',
    role: 'Senior Fullstack Dev',
    stars: 5,
  },
];

export function WordPressReviews() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Image
              src="/assets/intro/trustpilot-1_wo4.svg"
              alt="Trustpilot"
              width={90}
              height={22}
              className="h-5 w-auto"
            />
            <div className="flex gap-1">
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
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-2">
            What our customers have to say
          </h2>
          <p className="text-sm text-[#455A58]">
            Rated Excellent by thousands of real website owners worldwide.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((review, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white p-7 border border-[#E4E4DC] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Image
                      key={i}
                      src="/assets/reviews/stars.svg"
                      alt="Star"
                      width={16}
                      height={16}
                      className="w-3.5 h-3.5"
                    />
                  ))}
                </div>
                <p className="text-sm text-[#0A1616] leading-relaxed italic mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-[#E4E4DC] pt-4">
                <div className="font-bold text-sm text-[#0A1616]">{review.name}</div>
                <div className="text-xs text-[#455A58]">{review.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
