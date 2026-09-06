export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  excerpt?: string;
}

export const BLOG_CATEGORIES = [
  "All Categories",
  "WordPress",
  "Hosting",
  "Agency",
  "Security & SSL",
  "Domains",
  "E-Commerce & WooCommerce",
  "AI & Developer Tools",
  "Marketing Your Business",
  "Site Optimization",
  "cPanel & Cloud VPS",
  "Announcements & News",
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    slug: "when-your-website-needs-more-than-hosting",
    title: "When your website needs more than hosting",
    image:
      "/assets/blog/blog-agency-success-network-when-your-website-needs-more-than-hosting.webp",
    date: "September 4, 2026",
    readTime: "5 min read",
    category: "Agency",
    excerpt:
      "Why modern agencies and high-traffic businesses require specialized infrastructure, automated workflows, and dedicated partner support.",
  },
  {
    id: 2,
    slug: "livestream-the-rescue-site-audit-know-what-youre-inheriting",
    title:
      "Livestream: The rescue site audit: Know what you're inheriting before you quote it",
    image:
      "/assets/blog/livestream-the-rescue-site-audit-know-what-you-re-inheriting-before-you-quote-it-optimized.webp",
    date: "August 26, 2026",
    readTime: "5 min read",
    category: "WordPress",
    excerpt:
      "Learn how to audit existing WordPress sites, spot hidden security risks, and price client maintenance projects accurately.",
  },
  {
    id: 3,
    slug: "livestream-from-page-builder-to-blocks-rebuilding-a-wordpress-site-with-ai",
    title:
      "Livestream: From page builder to blocks: Rebuilding a WordPress site with AI",
    image: "/assets/blog/livestream-1.webp",
    date: "August 14, 2026",
    readTime: "5 min read",
    category: "AI & Developer Tools",
    excerpt:
      "Step-by-step guide to modernizing legacy page builders into lightning-fast WordPress block themes using AI accelerators.",
  },
  {
    id: 4,
    slug: "from-websites-to-outcomes-how-ai-is-changing-online-marketing-success",
    title:
      "From websites to outcomes: how AI is changing online marketing success",
    image: "/assets/blog/youtube-founder-at-marketgoo.webp",
    date: "August 11, 2026",
    readTime: "5 min read",
    category: "Marketing Your Business",
    excerpt:
      "How intelligent automation and automated SEO audits are transforming how digital businesses acquire and convert customers.",
  },
  {
    id: 5,
    slug: "the-hostingcom-agency-success-network",
    title: "The hosting.com Agency Success Network: Bringing people together",
    image:
      "/assets/blog/youtube-the-hosting.com-agency-success-network-bringing-people-together.webp",
    date: "August 6, 2026",
    readTime: "5 min read",
    category: "Agency",
    excerpt:
      "Inside our global agency network: peer roundtables, direct developer engineering support, and co-marketing opportunities.",
  },
  {
    id: 6,
    slug: "building-ai-powered-apps-without-a-backend-team",
    title:
      "Building AI-powered apps without a backend team: what's actually possible in 2026 (and what you should outsource).",
    image: "/assets/blog/12784aeb-eec8-4525-8bab-82209eb7a962.webp",
    date: "July 28, 2026",
    readTime: "8 min read",
    category: "AI & Developer Tools",
    excerpt:
      "A pragmatic overview of full-stack AI development, edge functions, managed databases, and scalable hosting architecture.",
  },
  {
    id: 7,
    slug: "livestream-is-your-site-agent-ready",
    title: "Livestream: Is your site agent ready?",
    image: "/assets/blog/livestream-is-your-site-agent-ready.webp",
    date: "July 28, 2026",
    readTime: "5 min read",
    category: "AI & Developer Tools",
    excerpt:
      "Preparing your web infrastructure and structured data for autonomous AI agents and intelligent search crawlers.",
  },
  {
    id: 8,
    slug: "what-enterprise-hosting-is-how-to-tell-if-you-need-it",
    title: "What Enterprise Hosting is and how to tell if you need it",
    image:
      "/assets/blog/article-blog-what-enterprise-hosting-is-and-how-to-tell-if-you-need-it.webp",
    date: "July 27, 2026",
    readTime: "5 min read",
    category: "Hosting",
    excerpt:
      "Key signs your high-growth business has outgrown shared or entry-level cloud hosting and needs dedicated SLA infrastructure.",
  },
  {
    id: 9,
    slug: "welcome-to-our-new-home-hostingcom-office-bangladesh",
    title:
      "Welcome to our new home: Hosting.com celebrates the opening of its customer-facing office in Bangladesh",
    image: "/assets/blog/bangladesh-office-blog-.webp",
    date: "July 8, 2026",
    readTime: "5 min read",
    category: "Announcements & News",
    excerpt:
      "Celebrating our brand-new modern customer-facing space in Concord MB Tower, Banani, Dhaka with our community.",
  },
  {
    id: 10,
    slug: "hostingcom-has-officially-launched-in-bangladesh",
    title:
      "Hosting.com has officially launched in the Bangladesh market, establishing a landmark",
    image: "/assets/blog/hosting.com-has-officially-launched-in-bangladesh.webp",
    date: "February 9, 2026",
    readTime: "5 min read",
    category: "Announcements & News",
    excerpt:
      "Uniting EyHost's 15-year Bangladeshi legacy with hosting.com's global platform and high-performance infrastructure.",
  },
];
