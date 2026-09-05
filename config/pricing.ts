export interface PricingTier {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  isPopular?: boolean;
  pricing: {
    monthlyBDT: number;
    annualBDT: number; // Price per month when billed annually
    monthlyUSD: number;
    annualUSD: number;
    discountPercent: number;
    regularPriceBDT: number;
    regularPriceUSD: number;
  };
  features: {
    websites: string;
    storage: string;
    bandwidth: string;
    ram: string;
    cpu: string;
    freeDomain: boolean;
    freeSSL: boolean;
    dailyBackups: boolean;
    turboSpeed: boolean;
    cPanel: boolean;
    emailAccounts: string;
    subdomains: string;
    databaseCount: string;
  };
  highlightBullets: string[];
  whmcsPid: number;
}

export interface PricingCategory {
  id: "get-online" | "grow-business" | "pro";
  label: string;
  badge?: string;
  description: string;
  plans: PricingTier[];
}

export const hostingCategories: PricingCategory[] = [
  {
    id: "get-online",
    label: "Get Online",
    description: "Ideal for personal websites, blogs, and new startup businesses.",
    plans: [
      {
        id: "starter",
        name: "Starter",
        subtitle: "Perfect for a single fast website or blog",
        pricing: {
          monthlyBDT: 299,
          annualBDT: 199,
          monthlyUSD: 3.99,
          annualUSD: 2.49,
          discountPercent: 65,
          regularPriceBDT: 599,
          regularPriceUSD: 7.99,
        },
        features: {
          websites: "1 Website",
          storage: "15 GB NVMe SSD",
          bandwidth: "Unmetered Bandwidth",
          ram: "1.5 GB Dedicated RAM",
          cpu: "1 Core CPU",
          freeDomain: true,
          freeSSL: true,
          dailyBackups: false,
          turboSpeed: false,
          cPanel: true,
          emailAccounts: "5 Custom Emails",
          subdomains: "5 Subdomains",
          databaseCount: "5 MySQL Databases",
        },
        highlightBullets: [
          "1 Hosted Website",
          "15 GB Pure NVMe SSD",
          "Free .COM / Domain Name",
          "Free Lifetime SSL",
          "Standard LiteSpeed Cache",
          "24/7 BD Ticket & Chat Support",
        ],
        whmcsPid: 1,
      },
      {
        id: "plus",
        name: "Plus",
        subtitle: "Host multiple sites with accelerated speeds",
        badge: "Most Popular",
        isPopular: true,
        pricing: {
          monthlyBDT: 499,
          annualBDT: 349,
          monthlyUSD: 5.99,
          annualUSD: 3.99,
          discountPercent: 70,
          regularPriceBDT: 999,
          regularPriceUSD: 12.99,
        },
        features: {
          websites: "Unlimited Websites",
          storage: "50 GB NVMe SSD",
          bandwidth: "Unmetered Bandwidth",
          ram: "2.5 GB Dedicated RAM",
          cpu: "2 Cores CPU",
          freeDomain: true,
          freeSSL: true,
          dailyBackups: true,
          turboSpeed: true,
          cPanel: true,
          emailAccounts: "Unlimited Emails",
          subdomains: "Unlimited",
          databaseCount: "Unlimited",
        },
        highlightBullets: [
          "Unlimited Hosted Websites",
          "50 GB Ultra NVMe SSD",
          "Free Domain Included",
          "20x Turbo Speed Engine",
          "Automated Daily Backups",
          "Free Website Migration",
        ],
        whmcsPid: 2,
      },
      {
        id: "pro",
        name: "Pro Turbo",
        subtitle: "Maximum performance for heavy traffic sites",
        pricing: {
          monthlyBDT: 799,
          annualBDT: 549,
          monthlyUSD: 8.99,
          annualUSD: 5.99,
          discountPercent: 75,
          regularPriceBDT: 1599,
          regularPriceUSD: 19.99,
        },
        features: {
          websites: "Unlimited Websites",
          storage: "100 GB NVMe SSD",
          bandwidth: "Unmetered Bandwidth",
          ram: "4.0 GB Dedicated RAM",
          cpu: "4 Cores CPU",
          freeDomain: true,
          freeSSL: true,
          dailyBackups: true,
          turboSpeed: true,
          cPanel: true,
          emailAccounts: "Unlimited Emails",
          subdomains: "Unlimited",
          databaseCount: "Unlimited",
        },
        highlightBullets: [
          "Unlimited Websites",
          "100 GB Gen4 NVMe SSD",
          "4 GB RAM & 4 Cores CPU",
          "LiteSpeed + Redis Object Cache",
          "Free Dedicated IP Available",
          "Priority 24/7 VIP Support",
        ],
        whmcsPid: 3,
      },
    ],
  },
  {
    id: "grow-business",
    label: "Grow Your Business",
    description: "Designed for e-commerce, high-concurrency portals, and agency clients.",
    plans: [
      {
        id: "biz-boost",
        name: "Business Boost",
        subtitle: "Optimized for WooCommerce & active stores",
        pricing: {
          monthlyBDT: 999,
          annualBDT: 749,
          monthlyUSD: 11.99,
          annualUSD: 8.49,
          discountPercent: 55,
          regularPriceBDT: 1999,
          regularPriceUSD: 24.99,
        },
        features: {
          websites: "Unlimited Websites",
          storage: "150 GB NVMe SSD",
          bandwidth: "Unmetered Bandwidth",
          ram: "6.0 GB Dedicated RAM",
          cpu: "4 Cores CPU",
          freeDomain: true,
          freeSSL: true,
          dailyBackups: true,
          turboSpeed: true,
          cPanel: true,
          emailAccounts: "Unlimited Emails",
          subdomains: "Unlimited",
          databaseCount: "Unlimited",
        },
        highlightBullets: [
          "High Concurrency E-commerce Optimized",
          "150 GB Ultra NVMe Storage",
          "6 GB RAM Dedicated",
          "Memcached & Redis Caching",
          "Malware Scanning & Cleanup",
          "Daily Offsite Jetpack Backups",
        ],
        whmcsPid: 4,
      },
      {
        id: "biz-scale",
        name: "Business Scale",
        subtitle: "Dedicated cloud slice with guaranteed compute",
        badge: "Enterprise Grade",
        isPopular: true,
        pricing: {
          monthlyBDT: 1599,
          annualBDT: 1199,
          monthlyUSD: 17.99,
          annualUSD: 13.49,
          discountPercent: 60,
          regularPriceBDT: 2999,
          regularPriceUSD: 36.99,
        },
        features: {
          websites: "Unlimited Websites",
          storage: "250 GB NVMe SSD",
          bandwidth: "Unmetered Bandwidth",
          ram: "8.0 GB Dedicated RAM",
          cpu: "6 Cores CPU",
          freeDomain: true,
          freeSSL: true,
          dailyBackups: true,
          turboSpeed: true,
          cPanel: true,
          emailAccounts: "Unlimited Emails",
          subdomains: "Unlimited",
          databaseCount: "Unlimited",
        },
        highlightBullets: [
          "Enterprise Cloud Container",
          "250 GB Enterprise NVMe SSD",
          "8 GB RAM & 6 Cores CPU",
          "Free Dedicated IP Address",
          "Advanced DDoS Shield Protection",
          "Zero-Downtime Guarantee",
        ],
        whmcsPid: 5,
      },
    ],
  },
  {
    id: "pro",
    label: "PRO & Cloud VPS",
    description: "Bare-metal performance, root isolation, and customizable cloud slices.",
    plans: [
      {
        id: "vps-entry",
        name: "Cloud VPS 1",
        subtitle: "Dedicated KVM virtualization",
        pricing: {
          monthlyBDT: 1499,
          annualBDT: 1299,
          monthlyUSD: 15.99,
          annualUSD: 13.99,
          discountPercent: 40,
          regularPriceBDT: 2499,
          regularPriceUSD: 24.99,
        },
        features: {
          websites: "Unlimited",
          storage: "80 GB NVMe Storage",
          bandwidth: "4 TB Monthly Traffic",
          ram: "4 GB Dedicated RAM",
          cpu: "2 vCPU Cores",
          freeDomain: false,
          freeSSL: true,
          dailyBackups: true,
          turboSpeed: true,
          cPanel: true,
          emailAccounts: "Unlimited",
          subdomains: "Unlimited",
          databaseCount: "Unlimited",
        },
        highlightBullets: [
          "2 vCPU Dedicated Cores",
          "4 GB RAM + 80 GB NVMe",
          "Full Root / SSH Access",
          "1 Dedicated IPv4 + /64 IPv6",
          "Choice of OS (Ubuntu, Alma, Debian)",
          "1 Gbps Port Speed",
        ],
        whmcsPid: 6,
      },
      {
        id: "vps-pro",
        name: "Cloud VPS 2",
        subtitle: "High-memory computing for production apps",
        badge: "Best Value VPS",
        isPopular: true,
        pricing: {
          monthlyBDT: 2699,
          annualBDT: 2299,
          monthlyUSD: 29.99,
          annualUSD: 24.99,
          discountPercent: 45,
          regularPriceBDT: 4599,
          regularPriceUSD: 49.99,
        },
        features: {
          websites: "Unlimited",
          storage: "160 GB NVMe Storage",
          bandwidth: "8 TB Monthly Traffic",
          ram: "8 GB Dedicated RAM",
          cpu: "4 vCPU Cores",
          freeDomain: false,
          freeSSL: true,
          dailyBackups: true,
          turboSpeed: true,
          cPanel: true,
          emailAccounts: "Unlimited",
          subdomains: "Unlimited",
          databaseCount: "Unlimited",
        },
        highlightBullets: [
          "4 vCPU Dedicated Cores",
          "8 GB RAM + 160 GB NVMe",
          "Full Root / cPanel Support",
          "2 Dedicated IPv4 Addresses",
          "Automated Snapshot Backups",
          "1 Gbps Redundant Uplink",
        ],
        whmcsPid: 7,
      },
    ],
  },
];

export const tldPills = [
  { extension: ".com", popularPrice: "৳1,250", renewal: "৳1,550", badge: "Hot" },
  { extension: ".com.bd", popularPrice: "৳2,400", renewal: "৳2,400", badge: "Local" },
  { extension: ".org", popularPrice: "৳1,450", renewal: "৳1,650" },
  { extension: ".net", popularPrice: "৳1,350", renewal: "৳1,600" },
  { extension: ".xyz", popularPrice: "৳299", renewal: "৳1,400", badge: "80% Off" },
  { extension: ".store", popularPrice: "৳399", renewal: "৳2,200", badge: "Sale" },
  { extension: ".online", popularPrice: "৳250", renewal: "৳2,100" },
];

export const faqs = [
  {
    question: "Why choose JAASBD Hosting over other providers?",
    answer: "JAASBD is engineered specifically for ultra-fast load times in Bangladesh and globally. Powered by modern AMD EPYC processors, 100% enterprise NVMe SSD storage, and LiteSpeed web server technology, your websites load up to 20x faster with 99.9% guaranteed uptime and 24/7 local support.",
  },
  {
    question: "Do you offer free website migration from my current host?",
    answer: "Yes! Our technical team will migrate all your website files, databases, cPanel settings, and email accounts from your current web host with zero downtime — completely free of charge.",
  },
  {
    question: "Which payment methods are accepted in Bangladesh?",
    answer: "We support all major Bangladeshi payment methods including bKash, Nagad, Rocket, Upay, Visa, MasterCard, American Express, and local Internet Banking through SSLCommerz, as well as International Credit Cards and PayPal.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 30-day risk-free money-back guarantee on all Shared, WordPress, and Reseller hosting plans. If you are not completely satisfied, you will receive a full refund.",
  },
  {
    question: "What is the difference between Shared and VPS hosting?",
    answer: "Shared Hosting shares server resources among multiple websites, making it very cost-effective for small-to-medium sites. VPS (Virtual Private Server) gives you dedicated CPU, RAM, and storage with isolated environments for high-traffic stores, SaaS platforms, or heavy database applications.",
  },
];
