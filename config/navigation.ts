export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  icon?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface MegaMenuCategory {
  label: string;
  featured?: {
    title: string;
    description: string;
    href: string;
    image: string;
  };
  columns: NavSection[];
}

export const navigationConfig: Record<string, MegaMenuCategory> = {
  hosting: {
    label: "Hosting & Websites",
    featured: {
      title: "Move to us",
      description: "Free effortless website transfers by experts",
      href: "/hosting/free-website-migration",
      image: "/assets/navigation/free-migration-bd.webp",
    },
    columns: [
      {
        title: "Hosting",
        items: [
          {
            title: "Web Hosting",
            href: "/hosting",
            description: "Fast, managed web hosting",
            icon: "globe",
          },
          {
            title: "Servers",
            href: "/hosting/vps-hosting",
            description: "Your own server with dedicated resources",
            icon: "server",
          },
          {
            title: "Package Comparison",
            href: "/package-comparison",
            description: "Full feature comparison and matrix",
            icon: "comparison",
          },
        ],
      },
      {
        title: "Websites",
        items: [
          {
            title: "Build a Website",
            href: "/hosting",
            description: "Build with AI, install apps or develop with our tools",
            icon: "builder",
          },
          {
            title: "Move to us",
            href: "/hosting/free-website-migration",
            description: "Effortless website transfers by experts",
            icon: "transfer",
          },
        ],
      },
      {
        title: "Applications",
        items: [
          {
            title: "Hosting for WordPress",
            href: "/hosting/platforms/wordpress-hosting",
            description: "Specialized hosting for WordPress websites",
            icon: "wordpress",
          },
          {
            title: "Node.js Hosting",
            href: "/hosting/vps-hosting",
            description: "Deploy, build, and scale your Node.js applications with ease.",
            icon: "nodejs",
          },
          {
            title: "AI Application Studio",
            href: "/hosting",
            description: "Create AI-powered apps using prompts. This is where ideas come to life.",
            icon: "ai",
          },
        ],
      },
    ],
  },
  domain: {
    label: "Domain & Email",
    featured: {
      title: "Talk to our sales team",
      description: "Get in touch with our team to find the best solution for you",
      href: "/about/contact",
      image: "/assets/navigation/bdtopmenusales.webp",
    },
    columns: [
      {
        title: "Domains",
        items: [
          {
            title: "Register or Transfer a Domain",
            href: "/domains",
            description: "Register or Transfer your domain today",
            icon: "www",
          },
          {
            title: ".bd Domains",
            href: "/domains/bd",
            description: "Bangladesh's official web domain",
            icon: "globe-bd",
          },
          {
            title: ".com.bd Domains",
            href: "/domains/combd",
            description: "For commercial sites in Bangladesh",
            icon: "globe-bd",
          },
          {
            title: "Domain Price List",
            href: "/domains/all-domains",
            description: "Full TLD list with pricing",
            icon: "globe-bd",
          },
        ],
      },
      {
        title: "Business Tools",
        items: [
          {
            title: "Business Email",
            href: "/hosting/hosting-by-service/email",
            description: "Your branded inbox: fast, secure, professional",
            icon: "email",
          },
          {
            title: "Marketing Suite",
            href: "/marketing-suite",
            description: "SEO and marketing tools for small business",
            icon: "marketing",
          },
        ],
      },
      {
        title: "Security",
        items: [
          {
            title: "SSL Certificates",
            href: "/security/ssl-certificates",
            description: "Secure your site and your visitors with SSL",
            icon: "shield-lock",
          },
        ],
      },
    ],
  },
  // pro: {
  //   label: "Pro",
  //   featured: {
  //     title: "Agency Solutions",
  //     description: "Multi-client staging, isolated cPanels & priority support.",
  //     href: "/agency",
  //     image: "/assets/navigation/promenubd.webp",
  //   },
  //   columns: [
  //     {
  //       title: "Business & Agencies",
  //       items: [
  //         {
  //           title: "Agency Web Hosting",
  //           href: "/agency",
  //           description: "Custom multi-client management and staging environments.",
  //           icon: "agency",
  //         },
  //         {
  //           title: "Enterprise Dedicated Servers",
  //           href: "/hosting/dedicated-servers",
  //           description: "Custom SLA, dedicated account managers, and bare-metal power.",
  //           icon: "server",
  //         },
  //         {
  //           title: "Partner & Affiliate Program",
  //           href: "/partners",
  //           description: "Earn recurring affiliate commissions and partner perks.",
  //           icon: "partner",
  //         },
  //       ],
  //     },
  //     {
  //       title: "High Performance Cloud",
  //       items: [
  //         {
  //           title: "Cloud VPS Hosting",
  //           href: "/hosting/vps-hosting",
  //           description: "Dedicated CPU & RAM with full root/cPanel management.",
  //           icon: "cloud",
  //         },
  //         {
  //           title: "Reseller Accounts",
  //           href: "/hosting/cpanel-reseller-hosting",
  //           description: "Start and scale your own hosting company.",
  //           icon: "reseller",
  //         },
  //       ],
  //     },
  //   ],
  // },
  resources: {
    label: "Resources",
    featured: {
      title: "Talk to our team",
      description: "Get in touch with our team to find the best solution for you",
      href: "/contact",
      image: "/assets/navigation/bdresroucenew1.webp",
    },
    columns: [
      {
        title: "Company",
        items: [
          {
            title: "About",
            href: "/about",
            description: "Learn more about hosting.com",
            icon: "about",
          },
          {
            title: "Contact",
            href: "/contact",
            description: "We're here to help 24/7",
            icon: "contact",
          },
          {
            title: "Case Studies",
            href: "/case-studies",
            description: "Read our customer success stories",
            icon: "case-studies",
          },
        ],
      },
      {
        title: "Resources",
        items: [
          {
            title: "Blog",
            href: "/blog",
            description: "Latest insights",
            icon: "blog",
          },
          {
            title: "Knowledge Base",
            href: "/knowledge-base",
            description: "Learn more about our products",
            icon: "knowledge",
          },
          {
            title: "News",
            href: "/news",
            description: "What's new at hosting.com",
            icon: "news",
          },
        ],
      },
      {
        title: "Programs",
        items: [
          {
            title: "Affiliate Program",
            href: "/affiliates",
            description: "Start earning today",
            icon: "affiliate",
          },
          {
            title: "Refer a Friend",
            href: "/refer-a-friend",
            description: "Earn up to $130 with a single referral",
            icon: "referral",
          },
        ],
      },
    ],
  },
};

export const countryList = [
  { code: "au", name: "Australia", flag: "/assets/flags/au.svg", currency: "AUD", symbol: "A$" },
  { code: "bd", name: "Bangladesh", flag: "/assets/flags/bd.svg", currency: "BDT", symbol: "৳" },
  { code: "ca", name: "Canada", flag: "/assets/flags/ca.svg", currency: "CAD", symbol: "C$" },
  { code: "esp", name: "Spain", flag: "/assets/flags/esp.svg", currency: "EUR", symbol: "€" },
  { code: "in", name: "India", flag: "/assets/flags/in.svg", currency: "INR", symbol: "₹" },
  { code: "ken", name: "Kenya", flag: "/assets/flags/ken.svg", currency: "KES", symbol: "KSh" },
  { code: "mex", name: "Mexico", flag: "/assets/flags/mex.svg", currency: "MXN", symbol: "Mex$" },
  { code: "nga", name: "Nigeria", flag: "/assets/flags/nga.svg", currency: "NGN", symbol: "₦" },
  { code: "rw", name: "Rwanda", flag: "/assets/flags/rw.svg", currency: "RWF", symbol: "FRw" },
  { code: "uk", name: "United Kingdom", flag: "/assets/flags/uk.svg", currency: "GBP", symbol: "£" },
  { code: "us", name: "United States (Global)", flag: "/assets/flags/us.svg", currency: "USD", symbol: "$" },
];

export const footerLinks = {
  hosting: [
    { title: "cPanel Hosting", href: "/hosting" },
    { title: "WordPress Hosting", href: "/hosting/platforms/wordpress-hosting" },
    { title: "VPS Hosting", href: "/hosting/vps-hosting" },
    { title: "Dedicated Servers", href: "/hosting/dedicated-servers" },
    { title: "Reseller Hosting", href: "/hosting/cpanel-reseller-hosting" },
    { title: "Free Website Migration", href: "/hosting/free-website-migration" },
  ],
  domains: [
    { title: "Domain Search", href: "/domains" },
    { title: "Domain Transfer", href: "/domains/domain-transfer" },
    { title: ".COM Registration", href: "/domains/com" },
    { title: "SSL Certificates", href: "/security/ssl-certificates" },
    { title: "DNS Management", href: "/domains" },
  ],
  company: [
    { title: "About Us", href: "/about" },
    { title: "Contact Support", href: "/about/contact" },
    { title: "Agency Hosting", href: "/agency" },
    { title: "Partners & Affiliates", href: "/partners" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "Blog", href: "/blog" },
  ],
  legal: [
    { title: "Terms of Service", href: "#" },
    { title: "Privacy Policy", href: "#" },
    { title: "Service Level Agreement (SLA)", href: "#" },
    { title: "Acceptable Use Policy", href: "#" },
  ],
};
