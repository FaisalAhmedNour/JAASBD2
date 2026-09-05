import Image from 'next/image';
import Link from 'next/link';

const posts = [
  {
    title: 'Welcome to our new home: Hosting.com celebrates the opening of its customer-facing office in Bangladesh',
    date: 'July 8, 2026',
    image: '/assets/blog/bangladesh-office-blog-.webp',
    href: '/blog',
  },
  {
    title: 'Hosting.com has officially launched in Bangladesh: Bringing world-class hosting locally',
    date: 'June 15, 2026',
    image: '/assets/blog/hosting.com-has-officially-launched-in-bangladesh.webp',
    href: '/blog',
  },
];

export function VPSNewsBlog() {
  return (
    <section className="bg-background relative py-12 lg:py-20 border-t border-[#E4E4DC]">
      <div className="relative z-10 container mx-auto px-siteContainer">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0A1616] tracking-tight mb-4">
            Recent VPS news & blog posts
          </h2>
          <p className="text-base text-[#455A58] leading-relaxed">
            Stay up to date with hosting innovations, Bangladesh server launches, and engineering tips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white overflow-hidden border border-[#E4E4DC] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative h-56 w-full bg-[#F7F7F4]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-7 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs font-semibold text-[#114B27] mb-2 block">{post.date}</span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#0A1616] leading-snug mb-4">
                    {post.title}
                  </h3>
                </div>

                <Link
                  href={post.href}
                  className="text-sm font-bold text-[#082615] hover:text-[#114B27] inline-flex items-center gap-1.5"
                >
                  <span>Read Article</span>
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
