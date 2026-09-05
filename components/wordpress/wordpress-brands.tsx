import Image from 'next/image';

const brands = [
  { name: 'IHG', src: '/assets/brands/ihg.png', width: 100, height: 40 },
  { name: 'Telstra', src: '/assets/brands/telstra.png', width: 110, height: 40 },
  { name: 'Amnesty International', src: '/assets/brands/amnesty.png', width: 130, height: 40 },
  { name: '7-Eleven', src: '/assets/brands/7eleven.png', width: 100, height: 40 },
  { name: 'Global', src: '/assets/brands/global.png', width: 100, height: 40 },
  { name: 'BBC', src: '/assets/brands/bbc.png', width: 90, height: 40 },
];

export function WordPressBrands() {
  return (
    <section className="bg-background relative py-12 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer text-center">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-[#0A1616] mb-2">
          Trusted by the world’s top enterprises
        </h2>
        <p className="text-sm text-[#455A58] mb-8">
          We power experiences for some of the biggest brands in the world.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
          {brands.map((brand, idx) => (
            <div key={idx} className="relative h-9 flex items-center justify-center">
              <Image
                src={brand.src}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                className="max-h-8 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
