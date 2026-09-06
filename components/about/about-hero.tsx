"use client";

import React from "react";
import Image from "next/image";

const PORTRAITS = [
  "/assets/team/plovdiv-portraits-31.webp",
  "/assets/team/plovdiv-portraits-32.webp",
  "/assets/team/plovdiv-portraits-33.webp",
  "/assets/team/plovdiv-portraits-34.webp",
  "/assets/team/plovdiv-portraits-35.webp",
  "/assets/team/plovdiv-portraits-36.webp",
  "/assets/team/plovdiv-portraits-37.webp",
  "/assets/team/plovdiv-portraits-38.webp",
  "/assets/team/plovdiv-portraits-39.webp",
  "/assets/team/plovdiv-portraits-40.webp",
  "/assets/team/plovdiv-portraits-41.webp",
  "/assets/team/plovdiv-portraits-42.webp",
  "/assets/team/plovdiv-portraits-43.webp",
  "/assets/team/plovdiv-portraits-44.webp",
  "/assets/team/plovdiv-portraits-45.webp",
  "/assets/team/plovdiv-portraits-46.webp",
  "/assets/team/plovdiv-portraits-47.webp",
  "/assets/team/plovdiv-portraits-48.webp",
  "/assets/team/plovdiv-portraits-50.webp",
  "/assets/team/plovdiv-portraits-51.webp",
  "/assets/team/plovdiv-portraits-52.webp",
  "/assets/team/plovdiv-portraits-53.webp",
  "/assets/team/plovdiv-portraits-54.webp",
  "/assets/team/plovdiv-portraits-55.webp",
  "/assets/team/plovdiv-portraits-56.webp",
  "/assets/team/plovdiv-portraits-57.webp",
  "/assets/team/plovdiv-portraits-58.webp",
  "/assets/team/plovdiv-portraits-59.webp",
  "/assets/team/plovdiv-portraits-60.webp",
  "/assets/team/india-portraits-82.webp",
  "/assets/team/india-portraits-83.webp",
  "/assets/team/india-portraits-90.webp",
  "/assets/team/india-portraits-93.webp",
  "/assets/team/india-portraits-96.webp",
  "/assets/team/india-portraits-97.webp",
  "/assets/team/india-portraits-123.webp",
  "/assets/team/manila-portraits-77.webp",
  "/assets/team/manila-portraits-100.webp",
  "/assets/team/manila-portraits-104.webp",
];

// Generate an array of 160 tiles (20 columns x 8 rows)
function generateMosaicGrid(seedOffset: number = 0) {
  const tiles: string[] = [];
  for (let i = 0; i < 160; i++) {
    const portrait = PORTRAITS[(i + seedOffset * 17) % PORTRAITS.length];
    tiles.push(portrait);
  }
  return tiles;
}

export function AboutHero() {
  const gridA = React.useMemo(() => generateMosaicGrid(0), []);
  const gridB = React.useMemo(() => generateMosaicGrid(1), []);

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#031a0d] min-h-[580px] lg:min-h-[640px] pt-12 pb-24 lg:pt-20 lg:pb-32">
      {/* Background Animated Face Mosaic */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 hover:opacity-50 transition-opacity duration-700"
      >
        <div
          className="flex h-full will-change-transform animate-team-marquee"
          style={{ width: "3200px" }}
        >
          {/* Grid Set 1 */}
          <div
            className="grid shrink-0"
            style={{
              width: "1600px",
              gridTemplateColumns: "repeat(20, 80px)",
              gridTemplateRows: "repeat(8, 80px)",
            }}
          >
            {gridA.map((src, idx) => (
              <div
                key={`a-${idx}`}
                className="w-[80px] h-[80px] overflow-hidden border border-[#081e12]/60 relative bg-[#041d0e]"
              >
                <img
                  src={src}
                  alt="Team member"
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-300"
                  loading="eager"
                />
              </div>
            ))}
          </div>

          {/* Grid Set 2 (Seamless loop) */}
          <div
            className="grid shrink-0"
            aria-hidden="true"
            style={{
              width: "1600px",
              gridTemplateColumns: "repeat(20, 80px)",
              gridTemplateRows: "repeat(8, 80px)",
            }}
          >
            {gridB.map((src, idx) => (
              <div
                key={`b-${idx}`}
                className="w-[80px] h-[80px] overflow-hidden border border-[#081e12]/60 relative bg-[#041d0e]"
              >
                <img
                  src={src}
                  alt="Team member"
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Center Overlay Content */}
      <div className="container relative z-10 mx-auto flex flex-col items-center px-siteContainer pt-16 lg:pt-24 text-center">
        <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl">
          <div className="relative isolate flex w-full flex-col items-center">
            {/* Radial backdrop blur card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-8 -inset-y-8 sm:-inset-x-12 sm:-inset-y-12 md:-inset-x-16 md:-inset-y-14 -z-10 rounded-3xl"
              style={{
                background:
                  "radial-gradient(ellipse 65% 65% at 50% 50%, rgba(11, 61, 46, 0.94) 0%, rgba(11, 61, 46, 0.7) 50%, rgba(11, 61, 46, 0.25) 75%, transparent 100%)",
                backdropFilter: "blur(16px) saturate(1.2)",
                WebkitBackdropFilter: "blur(16px) saturate(1.2)",
              }}
            />

            <div>
              <div className="mb-4 sm:mb-6">
                <h1 className="block hyphens-auto text-balance break-words font-display text-white antialiased text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  Meet our teams
                </h1>
              </div>
              <div className="text-white/90 font-body text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                <p>
                  Trusted in Bangladesh since 2011, and backed by hosting.com&apos;s
                  global platform — over 800 engineers across six teams,
                  working as one to keep your sites and apps online, secure, and
                  performant for 700,000+ customers worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes teamMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-1600px, 0, 0);
          }
        }
        .animate-team-marquee {
          animation: teamMarquee 80s linear infinite;
        }
        .animate-team-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
