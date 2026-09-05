import Image from 'next/image';

const awards = [
  { src: '/assets/brands/qq-brand-1.webp', alt: 'Industry Award 1' },
  { src: '/assets/brands/qq-brand-2.webp', alt: 'Industry Award 2' },
  { src: '/assets/brands/qq-brand-3.webp', alt: 'Industry Award 3' },
  { src: '/assets/brands/qq-brand-4.webp', alt: 'Industry Award 4' },
];

export function VPSIndustryAwards() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer text-center">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
          Industry best solutions – hosting.com
        </h2>
        <p className="text-base text-[#455A58] leading-relaxed max-w-2xl mx-auto mb-10">
          Our goal isn’t to win awards. Our goal is to offer the best web host solutions that are both blazing fast and ultra-reliable.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 max-w-4xl mx-auto">
          {awards.map((badge, idx) => (
            <div key={idx} className="relative h-20 w-36 flex items-center justify-center p-2 bg-white rounded-2xl border border-[#E4E4DC] shadow-sm">
              <Image
                src={badge.src}
                alt={badge.alt}
                width={120}
                height={60}
                className="max-h-14 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
