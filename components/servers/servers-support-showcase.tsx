import Image from 'next/image';

export function ServersSupportShowcase() {
  return (
    <section className="bg-background relative">
      <div className="relative z-10">
        <div className="pb-16 lg:pb-32 pt-16 lg:pt-32 z-1 relative">
          <div className="container mx-auto px-siteContainer">
            <div className="grid lg:grid-cols-12 lg:gap-8 xl:gap-8 items-center">
              <div className="order-none lg:order-last lg:ml-auto place-self-center lg:col-span-6">
                <div className="pb-8 lg:pb-0">
                  <div className="mb-heading">
                    <h2 className="block hyphens-auto text-balance break-words font-display text-heading antialiased sm:hyphens-manual sm:break-normal mr-auto max-w-headingDefault text-3xl sm:text-4xl text-[#0A1616]">
                      The same team, whatever you host with us
                    </h2>
                  </div>
                  <div className="prose marker:text-content text-[#455A58] text-base leading-relaxed mr-auto">
                    <p>
                      From a first web hosting plan to the biggest servers, the same in-house team looks after you, around the clock and all year.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 lg:flex">
                <div className="relative w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/assets/juxtapose/nick-quote-image-3.webp"
                    width={752}
                    height={500}
                    alt="The same team, whatever you host with us"
                    className="h-full w-full object-cover lg:max-h-[28rem] xl:max-h-none select-none rounded-2xl"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
