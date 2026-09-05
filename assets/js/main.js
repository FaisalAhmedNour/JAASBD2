// hosting.com Interactive Experience Script (Bangladesh & Global Edition v3.0)
document.addEventListener('DOMContentLoaded', () => {
    initMegaMenu();
    initMobileDrawer();
    initBentoTabs();
    initPricingCycleToggle();
    initDropdowns();
    initReviewCarousel();
    initUpmWidgets();
});

/* ==========================================================================
   1. DESKTOP MEGA MENU NAVIGATION
   ========================================================================== */
function initMegaMenu() {
    const navTriggers = document.querySelectorAll('.desktop-header-nav .child');
    const panelWrapper = document.querySelector('.header-shell-panel-wrapper');
    const panelInner = document.querySelector('.header-shell-panel-inner');
    const navContainer = document.querySelector('.desktop-header-nav');
    const pill = navContainer ? navContainer.querySelector('div[style*="transform"]') : null;

    if (!panelWrapper || !panelInner || !navTriggers.length) return;

    // Detect path prefix based on nesting depth
    const path = window.location.pathname;
    let prefix = './';
    if (path.includes('/platforms/')) prefix = '../../../';
    else if (path.includes('/hosting/') || path.includes('/domains/') || path.includes('/security/') || path.includes('/about/') || path.includes('/agency/') || path.includes('/partners/') || path.includes('/case-studies/') || path.includes('/blog/') || path.includes('/package-comparison/') || path.includes('/en-bd/')) prefix = '../';

    // Bangladesh Edition 4 Mega-Menus
    const menuData = [
        {
            title: "Hosting & Websites",
            columns: [
                {
                    heading: "Hosting",
                    items: [
                        { title: "Web Hosting", desc: "Fast, managed web hosting", href: prefix + "hosting/index.html", icon: "globe" },
                        { title: "Servers", desc: "Your own server with dedicated resources", href: prefix + "hosting/dedicated-servers/index.html", icon: "server" },
                        { title: "Package Comparison", desc: "Full feature comparison and matrix", href: prefix + "package-comparison/index.html", icon: "chart" }
                    ]
                },
                {
                    heading: "Websites",
                    items: [
                        { title: "Build a Website", desc: "Build with AI, install apps or develop with our tools", href: prefix + "hosting/index.html", icon: "brush" },
                        { title: "Move to us", desc: "Effortless website transfers by experts", href: prefix + "hosting/free-website-migration/index.html", icon: "migration" }
                    ]
                },
                {
                    heading: "Applications",
                    items: [
                        { title: "Hosting for WordPress", desc: "Specialized hosting for WordPress websites", href: prefix + "hosting/platforms/wordpress-hosting/index.html", icon: "wordpress" },
                        { title: "Node.js Hosting", desc: "Deploy, build, and scale Node.js with ease", href: prefix + "hosting/index.html", icon: "code" },
                        { title: "AI Application Studio", desc: "Create AI-powered apps using prompts", href: prefix + "hosting/vps-hosting/index.html", icon: "sparkles" }
                    ]
                }
            ],
            feature: {
                img: prefix + "assets/navigation/bdtopmenusales.webp",
                heading: "Move to us",
                desc: "Free effortless website transfers by our migration experts",
                cta: "Talk to us",
                ctaHref: prefix + "about/contact/index.html"
            }
        },
        {
            title: "Domain & Email",
            columns: [
                {
                    heading: "Domains",
                    items: [
                        { title: "Register or Transfer a Domain", desc: "Register or Transfer your domain today", href: prefix + "domains/index.html", icon: "search" },
                        { title: ".bd Domains", desc: "Bangladesh's official web domain", href: prefix + "domains/index.html", icon: "bd" },
                        { title: ".com.bd Domains", desc: "For commercial sites in Bangladesh", href: prefix + "domains/com/index.html", icon: "bd" },
                        { title: "Domain Price List", desc: "Full TLD list with pricing", href: prefix + "domains/com/index.html", icon: "tag" }
                    ]
                },
                {
                    heading: "Business Tools",
                    items: [
                        { title: "Business Email", desc: "Your branded inbox: fast, secure, professional", href: prefix + "hosting/index.html", icon: "mail" },
                        { title: "Marketing Suite", desc: "SEO and marketing tools for small business", href: prefix + "agency/index.html", icon: "chart" }
                    ]
                },
                {
                    heading: "Security",
                    items: [
                        { title: "SSL Certificates", desc: "Lock in trust, secure your site with SSL", href: prefix + "security/ssl-certificates/index.html", icon: "lock" },
                        { title: "WordPress Malware Removal", desc: "Fix and protect a hacked WordPress website", href: prefix + "hosting/platforms/wordpress-hosting/index.html", icon: "shield" }
                    ]
                }
            ],
            feature: {
                img: prefix + "assets/navigation/free-migration-bd.webp",
                heading: "Talk to our sales team",
                desc: "Get in touch with our team to find the best solution for you in Bangladesh",
                cta: "Talk to us",
                ctaHref: prefix + "about/contact/index.html"
            }
        },
        {
            title: "Pro",
            columns: [
                {
                    heading: "Agencies and Web Pros",
                    items: [
                        { title: "cPanel Reseller Hosting", desc: "Launch your own hosting business", href: prefix + "hosting/cpanel-reseller-hosting/index.html", icon: "server" },
                        { title: "Flagship Reseller Hosting", desc: "Modern & powerful, built for freelancers & agencies", href: prefix + "agency/index.html", icon: "rocket" },
                        { title: "cPanel Hosting", desc: "The world's best cPanel stack", href: prefix + "hosting/cpanel-hosting/index.html", icon: "cpanel" }
                    ]
                },
                {
                    heading: "Managed Solutions",
                    items: [
                        { title: "Managed VDS Hosting", desc: "Fully Managed cPanel/WHM VDS", href: prefix + "hosting/vps-hosting/index.html", icon: "cloud" },
                        { title: "Managed cPanel/WHM Servers", desc: "Powerful Linux Managed Servers on our stack", href: prefix + "hosting/vps-hosting/index.html", icon: "server" },
                        { title: "Bespoke Solutions", desc: "Custom enterprise infrastructure for your unique needs", href: prefix + "about/contact/index.html", icon: "gear" },
                        { title: "AI Application Hosting", desc: "Deploy and scale custom-built apps securely", href: prefix + "hosting/vps-hosting/index.html", icon: "sparkles" }
                    ]
                },
                {
                    heading: "Self-Managed Servers",
                    items: [
                        { title: "Unmanaged VPS & Linux Cloud", desc: "Full root access, full control", href: prefix + "hosting/vps-hosting/index.html", icon: "terminal" },
                        { title: "Unmanaged Dedicated Servers", desc: "Full control on bare metal hardware", href: prefix + "hosting/dedicated-servers/index.html", icon: "rack" }
                    ]
                }
            ],
            feature: {
                img: prefix + "assets/navigation/promenubd.webp",
                heading: "Agency Partner Program",
                desc: "Our innovative partner program builds on 20 years of growing together with agencies",
                cta: "Agency Partner Program",
                ctaHref: prefix + "partners/index.html"
            }
        },
        {
            title: "Resources",
            columns: [
                {
                    heading: "Company",
                    items: [
                        { title: "About Us", desc: "Learn more about hosting.com", href: prefix + "about/index.html", icon: "info" },
                        { title: "Contact", desc: "We're here to help 24/7", href: prefix + "about/contact/index.html", icon: "mail" },
                        { title: "Case Studies", desc: "Read our customer success stories in Bangladesh", href: prefix + "case-studies/index.html", icon: "star" }
                    ]
                },
                {
                    heading: "Resources",
                    items: [
                        { title: "Blog", desc: "Latest insights, tech news & guides", href: prefix + "blog/index.html", icon: "book" },
                        { title: "Knowledge Base", desc: "Learn more about our products", href: prefix + "about/index.html", icon: "help" },
                        { title: "News & Releases", desc: "What's new at hosting.com", href: prefix + "about/index.html", icon: "bell" }
                    ]
                },
                {
                    heading: "Programs",
                    items: [
                        { title: "Affiliate Program", desc: "Start earning today with our top rates", href: prefix + "partners/index.html", icon: "dollar" },
                        { title: "Refer a Friend", desc: "Earn up to $130 with a single referral", href: prefix + "partners/index.html", icon: "gift" }
                    ]
                }
            ],
            feature: {
                img: prefix + "assets/navigation/bdresroucenew1.webp",
                heading: "Talk to our team",
                desc: "Get in touch with our team to find the best solution for you",
                cta: "Talk to our sales team",
                ctaHref: prefix + "about/contact/index.html"
            }
        }
    ];

    function getIconSvg(name) {
        const icons = {
            globe: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/></svg>`,
            server: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>`,
            chart: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
            brush: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4 5 5 0 015-5h14a2 2 0 012 2v1a2 2 0 01-2 2h-2a2 2 0 00-2 2v1a2 2 0 01-2 2H7z"/></svg>`,
            migration: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>`,
            wordpress: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.486 2 2 6.486 2 12c0 4.418 2.868 8.167 6.862 9.48L5.3 11.2a8.04 8.04 0 0 1-.225-1.897c0-2.07.75-3.513 1.396-4.636.877-1.442 1.7-2.658 1.7-4.08 0-1.587-1.2-3.076-2.883-3.076a4.8 4.8 0 0 0-.66.046C6.732 2.76 9.24 2 12 2zm0 20c-1.39 0-2.713-.284-3.914-.796L11.7 8.356c.394 1.08.766 2.455.766 3.528 0 1.258-.235 2.126-.47 3.013L15.3 21.05C14.26 21.66 13.06 22 12 22zm5.748-4.225l-2.483-7.21c.548-.035 1.052-.09 1.052-.09.49-.06.435-.78-.055-.78 0 0-1.472.12-2.427.12-.9 0-2.4-.12-2.4-.12-.49 0-.546.72-.055.78 0 0 .476.055.964.083l1.436 3.94-2.02 6.06A8.005 8.005 0 0 0 17.748 17.775z"/></svg>`,
            code: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
            sparkles: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.286L13 21l-2.286-6.857L5 12l5.714-2.286L13 3z"/></svg>`,
            search: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>`,
            bd: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#006a4e"/><circle cx="10" cy="12" r="4.5" fill="#f42a41"/></svg>`,
            tag: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"/></svg>`,
            shield: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
            mail: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
            lock: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>`,
            rocket: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/></svg>`,
            cpanel: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"/><path stroke-linecap="round" stroke-linejoin="round" d="M9 10h6m-6 4h4"/></svg>`,
            cloud: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z"/></svg>`,
            gear: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>`,
            terminal: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
            rack: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10m0-10a2 2 0 012-2h12a2 2 0 012 2m-16 0v10a2 2 0 002 2h12a2 2 0 002-2V7m-16 5h16M9 9h.01M9 14h.01M15 9h.01M15 14h.01"/></svg>`,
            info: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
            star: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>`,
            book: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
            help: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
            bell: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>`,
            dollar: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
            gift: `<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V6a2 2 0 10-2 2h2zm0 0h6a2 2 0 012 2v2a2 2 0 01-2 2h-6m0-4H6a2 2 0 00-2 2v2a2 2 0 002 2h6m0 0v9m0-9H6a2 2 0 00-2 2v5a2 2 0 002 2h6m0-9h6a2 2 0 012 2v5a2 2 0 01-2 2h-6"/></svg>`
        };
        return icons[name] || icons.globe;
    }

    // Build Mega Menu HTML Panels
    let panelsHtml = '';
    menuData.forEach((menu, idx) => {
        let colsHtml = '';
        menu.columns.forEach(col => {
            let itemsHtml = '';
            col.items.forEach(it => {
                itemsHtml += `
                <a href="${it.href}" class="group/navitem flex items-start gap-3.5 rounded-xl p-2.5 transition-colors hover:bg-white/5">
                    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] border border-white/10 text-gray-300 transition-colors group-hover/navitem:bg-[#C6FB4B]/10 group-hover/navitem:text-[#C6FB4B] group-hover/navitem:border-[#C6FB4B]/30">
                        ${getIconSvg(it.icon)}
                    </div>
                    <div class="flex flex-col">
                        <span class="font-medium text-sm text-white transition-colors group-hover/navitem:text-[#C6FB4B]">${it.title}</span>
                        <span class="mt-0.5 text-xs text-gray-400 line-clamp-1 leading-snug">${it.desc}</span>
                    </div>
                </a>`;
            });

            colsHtml += `
            <div class="flex flex-col">
                <div class="mb-3 px-2.5 font-semibold text-xs uppercase tracking-wider text-gray-400">${col.heading}</div>
                <div class="flex flex-col space-y-1">
                    ${itemsHtml}
                </div>
            </div>`;
        });

        panelsHtml += `
        <div class="mega-panel-item hidden py-6 px-siteContainer" data-index="${idx}">
            <div class="grid grid-cols-[1fr_300px] gap-8 items-stretch">
                <div class="grid grid-cols-3 gap-6">
                    ${colsHtml}
                </div>
                <div class="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
                    <div>
                        <div class="overflow-hidden rounded-xl bg-black/40">
                            <img src="${menu.feature.img}" alt="${menu.feature.heading}" class="h-32 w-full object-cover">
                        </div>
                        <h4 class="mt-4 font-bold text-base text-white">${menu.feature.heading}</h4>
                        <p class="mt-1.5 text-xs text-gray-300 leading-relaxed">${menu.feature.desc}</p>
                    </div>
                    <a href="${menu.feature.ctaHref}" class="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-[#C6FB4B] px-4 py-2.5 font-semibold text-xs text-black transition-colors hover:bg-[#b2e838]">
                        ${menu.feature.cta}
                    </a>
                </div>
            </div>
        </div>`;
    });

    panelInner.innerHTML = panelsHtml;

    // Mega Menu Hover Logic
    let activeIdx = -1;
    let closeTimer = null;

    function openPanel(idx) {
        clearTimeout(closeTimer);
        if (!menuData[idx]) {
            closePanel();
            return;
        }

        activeIdx = idx;
        const panels = panelInner.querySelectorAll('.mega-panel-item');
        panels.forEach((p, i) => {
            if (i === idx) p.classList.remove('hidden');
            else p.classList.add('hidden');
        });

        panelWrapper.classList.add('header-shell-panel-wrapper-active');

        if (pill && navTriggers[idx]) {
            const trigger = navTriggers[idx];
            pill.style.opacity = '1';
            pill.style.width = trigger.offsetWidth + 'px';
            pill.style.height = trigger.offsetHeight + 'px';
            pill.style.transform = `translateX(${trigger.offsetLeft}px)`;
        }
    }

    function closePanel() {
        closeTimer = setTimeout(() => {
            panelWrapper.classList.remove('header-shell-panel-wrapper-active');
            if (pill) pill.style.opacity = '0';
            activeIdx = -1;
        }, 150);
    }

    navTriggers.forEach((trig, idx) => {
        trig.addEventListener('mouseenter', () => openPanel(idx));
        trig.addEventListener('mouseleave', closePanel);
    });

    panelWrapper.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    panelWrapper.addEventListener('mouseleave', closePanel);
}

/* ==========================================================================
   2. BENTO GRID TABS (Section 3: Bangladesh Digital Growth Story)
   ========================================================================== */
function initBentoTabs() {
    const tabButtons = document.querySelectorAll('button:has(> span[role="img"])');
    const container = document.querySelector('ul.lg\\:grid-rows-2');

    if (!container) return;

    // Detect path prefix
    const path = window.location.pathname;
    let prefix = './';
    if (path.includes('/platforms/')) prefix = '../../../';
    else if (path.includes('/hosting/') || path.includes('/domains/') || path.includes('/security/') || path.includes('/about/') || path.includes('/agency/') || path.includes('/partners/') || path.includes('/case-studies/') || path.includes('/blog/') || path.includes('/package-comparison/') || path.includes('/en-bd/')) prefix = '../';

    const bentoData = {
        'about us': [
            {
                tag: 'Hosting.com in Bangladesh',
                title: 'Celebrating hosting.com Launch in Bangladesh',
                desc: 'Delivering world-class high-speed infrastructure, low latency, and 24/7 localized support for businesses across Bangladesh.',
                img: prefix + 'assets/features/bangladesh-launch-event.jpeg',
                icon: prefix + 'assets/features/code_blocks.svg',
                href: prefix + 'about/index.html',
                rowSpan: 'lg:row-span-2 lg:row-start-1 lg:col-start-1',
                order: 'order-2'
            },
            {
                tag: 'Foundations',
                title: 'Our Story',
                desc: 'Over two decades of building reliable cloud and hosting infrastructure that powers over 3 million websites worldwide.',
                img: prefix + 'assets/features/our-story.jpg',
                icon: prefix + 'assets/features/account-migration-1.svg',
                href: prefix + 'about/index.html',
                rowSpan: 'lg:row-start-1 lg:col-start-2',
                order: 'order-2'
            },
            {
                tag: 'Our office',
                title: 'Meet us',
                desc: 'Meet our dedicated engineers and support staff available 24/7/365 to keep your mission-critical applications running.',
                img: prefix + 'assets/features/meet-us.jpg',
                icon: prefix + 'assets/features/hidden.svg',
                href: prefix + 'about/contact/index.html',
                rowSpan: 'lg:row-start-2 lg:col-start-2',
                order: 'order-2'
            }
        ],
        'agencies': [
            {
                tag: 'Agency Partner Program',
                title: 'Become Partner',
                desc: 'Join hundreds of development agencies and freelancers building on hosting.com with wholesale recurring commissions.',
                img: prefix + 'assets/features/agencies_managed-wordpress.webp',
                icon: prefix + 'assets/features/handshake.svg',
                href: prefix + 'partners/index.html',
                rowSpan: 'lg:row-span-2 lg:row-start-1 lg:col-start-1',
                order: 'order-2'
            },
            {
                tag: 'Reseller Hosting',
                title: 'Grow your hosting business',
                desc: 'Start your own hosting brand with automated cPanel/WHM accounts, 100% white-label tools and private nameservers.',
                img: prefix + 'assets/features/agencies_reseller-hosting.webp',
                icon: prefix + 'assets/features/handshake.svg',
                href: prefix + 'hosting/cpanel-reseller-hosting/index.html',
                rowSpan: 'lg:row-start-1 lg:col-start-2',
                order: 'order-2'
            },
            {
                tag: 'Flagship Reseller Hosting',
                title: 'Start selling today',
                desc: 'High-margin reseller hosting with NVMe storage and instant provisioning for agencies.',
                img: prefix + 'assets/features/agencies_managed-vps.webp',
                icon: prefix + 'assets/features/handshake.svg',
                href: prefix + 'hosting/cpanel-reseller-hosting/index.html',
                rowSpan: 'lg:row-start-2 lg:col-start-2',
                order: 'order-2'
            }
        ],
        'enterprises': [
            {
                tag: 'Bespoke Solutions',
                title: 'Enterprise hosting',
                desc: 'Custom bare-metal and private cloud configurations designed to handle extreme scale, high concurrency and compliance.',
                img: prefix + 'assets/features/agencies_managed-wordpress.webp',
                icon: prefix + 'assets/features/hosting-customers-icon.webp',
                href: prefix + 'about/contact/index.html',
                rowSpan: 'lg:row-span-2 lg:row-start-1 lg:col-start-1',
                order: 'order-2'
            },
            {
                tag: 'Managed VPS',
                title: 'Scale your infrastructure',
                desc: 'Dedicated CPU, RAM, and NVMe resources backed by full management and 99.9% uptime SLA.',
                img: prefix + 'assets/features/agencies_managed-vps.webp',
                icon: prefix + 'assets/features/cloud_upload.svg',
                href: prefix + 'hosting/vps-hosting/index.html',
                rowSpan: 'lg:row-start-1 lg:col-start-2',
                order: 'order-2'
            },
            {
                tag: 'Dedicated Servers',
                title: 'Take full control',
                desc: 'Uncompromised single-tenant bare-metal performance with IPMI access and custom network setups.',
                img: prefix + 'assets/features/agencies_dedicated-servers.webp',
                icon: prefix + 'assets/features/dns.svg',
                href: prefix + 'hosting/dedicated-servers/index.html',
                rowSpan: 'lg:row-start-2 lg:col-start-2',
                order: 'order-2'
            }
        ]
    };

    function renderBentoCards(key) {
        const cards = bentoData[key.toLowerCase()];
        if (!cards) return;

        let html = '';
        cards.forEach(card => {
            html += `
            <li class="${card.rowSpan} w-[82%] shrink-0 snap-start md:w-[44%] lg:w-auto lg:shrink bento-fade-in">
                <a href="${card.href}" class="group/feature relative flex h-full min-h-[20rem] w-full overflow-hidden rounded-2xl text-left text-white outline-offset-2 lg:min-h-[22rem] 2xl:min-h-[22.5rem] flex-col">
                    <span class="pointer-events-none absolute inset-2 -z-10 bg-bentoTabBackground" aria-hidden="true"></span>
                    <div class="relative z-10 ${card.order} flex flex-1 flex-col gap-6 bg-bentoTabBackground px-8 pb-8 pt-10 md:px-10 md:pb-10 md:pt-12 lg:shrink-0 lg:grow-0 lg:basis-[45%]">
                        <div class="flex items-center gap-2.5 text-white">
                            <div><img loading="lazy" alt="" src="${card.icon}" width="20" height="20" class="h-5 w-5 object-contain"></div>
                            <span class="font-medium text-[16px]">${card.tag}</span>
                            <span class="relative flex h-5 w-5 shrink-0 items-center justify-center text-white/50 group-hover/feature:text-white transition-colors">
                                <svg class="h-3.5 w-3.5 transition-transform duration-200 group-hover/feature:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                            </span>
                        </div>
                        <div>
                            <div class="font-display font-medium text-white text-2xl lg:text-3xl">${card.title}</div>
                            <p class="mt-2 text-sm text-gray-300 leading-relaxed">${card.desc}</p>
                        </div>
                    </div>
                    <div class="relative min-h-60 flex-1 overflow-hidden bg-bentoTabBackground lg:min-h-0">
                        <img loading="lazy" src="${card.img}" alt="${card.title}" class="h-full w-full object-cover transition-transform duration-500 group-hover/feature:scale-105">
                    </div>
                </a>
            </li>`;
        });

        container.innerHTML = html;
    }

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => {
                b.classList.remove('bg-tabsActiveBackground', 'text-tabsLabelActive');
                b.classList.add('text-tabsLabel');
            });
            btn.classList.add('bg-tabsActiveBackground', 'text-tabsLabelActive');
            btn.classList.remove('text-tabsLabel');

            const text = btn.innerText.trim();
            renderBentoCards(text);
        });
    });
}

/* ==========================================================================
   3. PRICING CYCLE TOGGLE (Monthly vs Annually)
   ========================================================================== */
function initPricingCycleToggle() {
    const monthlyBtn = document.getElementById('btnBillingMonthly');
    const annualBtn = document.getElementById('btnBillingAnnual');

    if (!monthlyBtn || !annualBtn) return;

    const priceEls = document.querySelectorAll('.plan-price');
    const descEls = document.querySelectorAll('.plan-desc');

    function setCycle(isAnnual) {
        priceEls.forEach(el => {
            el.style.opacity = '0';
            setTimeout(() => {
                el.textContent = isAnnual ? el.getAttribute('data-annual') : el.getAttribute('data-monthly');
                el.style.opacity = '1';
            }, 120);
        });
        descEls.forEach(el => {
            el.textContent = isAnnual ? el.getAttribute('data-annual') : el.getAttribute('data-monthly');
        });

        if (isAnnual) {
            annualBtn.className = 'rounded-full bg-[#C6FB4B] px-6 py-2.5 text-xs font-bold text-black shadow-lg transition-all duration-300';
            monthlyBtn.className = 'rounded-full px-6 py-2.5 text-xs font-semibold text-gray-400 transition-all duration-300 hover:text-white';
        } else {
            monthlyBtn.className = 'rounded-full bg-[#C6FB4B] px-6 py-2.5 text-xs font-bold text-black shadow-lg transition-all duration-300';
            annualBtn.className = 'rounded-full px-6 py-2.5 text-xs font-semibold text-gray-400 transition-all duration-300 hover:text-white';
        }
    }

    monthlyBtn.addEventListener('click', () => setCycle(false));
    annualBtn.addEventListener('click', () => setCycle(true));
}

/* ==========================================================================
   4. DYNAMIC UPM-WIDGET PLAN CARDS RENDERER (For subpages)
   ========================================================================== */
function initUpmWidgets() {
    const widgets = document.querySelectorAll('upm-widget');
    widgets.forEach(w => {
        if (w.children.length > 0) return;
        const bindAttr = w.getAttribute('bind');
        if (!bindAttr) return;
        try {
            const data = JSON.parse(bindAttr);
            const isHigh = data.isHighlighted || false;
            const highText = data.highlightText || 'Most Popular';
            const title = data.title || 'Hosting Plan';
            const desc = data.description || '';
            const cta = data.ctaText || 'Choose Plan';
            const href = data.href || 'https://checkout.hosting.com';
            
            let price = data.price;
            if (!price) {
                const t = title.toLowerCase();
                if (t.includes('starter')) price = '$2.99';
                else if (t.includes('pro')) price = '$4.99';
                else if (t.includes('max')) price = '$7.99';
                else if (t.includes('free')) price = '$0.00';
                else price = '$9.99';
            } else if (!price.toString().startsWith('$')) {
                price = '$' + price;
            }

            let featsHtml = '';
            if (Array.isArray(data.features)) {
                data.features.forEach(f => {
                    if (f.included !== false) {
                        featsHtml += `
                        <li class="flex items-center gap-3 text-sm text-gray-300">
                            <svg class="h-5 w-5 shrink-0 text-[#C6FB4B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                            <span>${f.label}</span>
                        </li>`;
                    }
                });
            }

            w.innerHTML = `
            <div class="plan-card relative flex flex-col justify-between rounded-3xl ${isHigh ? 'border-2 border-[#C6FB4B] bg-[#142323] shadow-2xl' : 'border border-white/10 bg-[#0F1B1B]'} p-8 text-white transition-all duration-300 hover:border-white/20 hover:shadow-2xl">
                ${isHigh ? `<div class="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#C6FB4B] px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">${highText}</div>` : ''}
                <div>
                    <div class="text-xs font-semibold uppercase tracking-wider text-gray-400">${title}</div>
                    ${desc ? `<div class="mt-1 text-sm text-gray-300">${desc}</div>` : ''}
                    <div class="mt-6 flex items-baseline gap-2">
                        <span class="text-5xl font-bold tracking-tight text-white">${price}</span>
                        <span class="text-sm font-medium text-gray-400">/mo</span>
                    </div>
                    <div class="my-6 h-px w-full bg-white/10"></div>
                    <ul class="space-y-3.5">
                        ${featsHtml}
                    </ul>
                </div>
                <div class="mt-8">
                    <a href="${href}" target="_blank" rel="noopener noreferrer" class="block w-full text-center rounded-xl ${isHigh ? 'bg-[#C6FB4B] text-black hover:bg-[#b2e838]' : 'bg-white/10 text-white hover:bg-white/20'} py-3.5 font-semibold text-sm transition-colors duration-200">${cta}</a>
                </div>
            </div>`;
        } catch (e) {
            console.error(e);
        }
    });
}

/* ==========================================================================
   5. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileDrawer() {
    const hamburgerBtn = document.querySelector('button[aria-controls="mobile-menu-toggle"]');
    if (!hamburgerBtn) return;

    const path = window.location.pathname;
    let prefix = './';
    if (path.includes('/platforms/')) prefix = '../../../';
    else if (path.includes('/hosting/') || path.includes('/domains/') || path.includes('/security/') || path.includes('/about/') || path.includes('/agency/') || path.includes('/partners/') || path.includes('/case-studies/') || path.includes('/blog/') || path.includes('/package-comparison/') || path.includes('/en-bd/')) prefix = '../';

    let drawer = document.getElementById('mobileNavDrawer');
    if (!drawer) {
        drawer = document.createElement('div');
        drawer.id = 'mobileNavDrawer';
        drawer.className = 'fixed inset-0 z-[9999] hidden flex-col bg-[#0A1616] text-white overflow-y-auto px-6 py-6 transition-all duration-300';
        drawer.innerHTML = `
            <div class="flex items-center justify-between border-b border-white/10 pb-4">
                <a href="${prefix}index.html">
                    <img src="${prefix}assets/brand/hosting-logo-on-dark.svg" alt="hosting.com" class="h-8 w-auto">
                </a>
                <button id="closeMobileDrawer" class="rounded-lg p-2 text-gray-400 hover:text-white">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
            </div>
            <div class="mt-6 flex flex-col space-y-4 text-base font-medium">
                <div>
                    <button class="mobile-acc-btn flex w-full items-center justify-between py-2 text-left text-lg font-semibold text-white">
                        <span>Hosting & Websites</span>
                        <svg class="h-4 w-4 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div class="mobile-acc-content hidden pl-4 pt-2 space-y-2 text-sm text-gray-300">
                        <a href="${prefix}hosting/index.html" class="block py-1">Web Hosting</a>
                        <a href="${prefix}hosting/dedicated-servers/index.html" class="block py-1">Servers</a>
                        <a href="${prefix}package-comparison/index.html" class="block py-1">Package Comparison</a>
                        <a href="${prefix}hosting/platforms/wordpress-hosting/index.html" class="block py-1">WordPress Hosting</a>
                        <a href="${prefix}hosting/free-website-migration/index.html" class="block py-1">Move to us (Migration)</a>
                    </div>
                </div>
                <div>
                    <button class="mobile-acc-btn flex w-full items-center justify-between py-2 text-left text-lg font-semibold text-white">
                        <span>Domain & Email</span>
                        <svg class="h-4 w-4 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div class="mobile-acc-content hidden pl-4 pt-2 space-y-2 text-sm text-gray-300">
                        <a href="${prefix}domains/index.html" class="block py-1">Register or Transfer Domain</a>
                        <a href="${prefix}domains/index.html" class="block py-1">.bd Domains (Bangladesh)</a>
                        <a href="${prefix}domains/com/index.html" class="block py-1">.com.bd Domains</a>
                        <a href="${prefix}domains/com/index.html" class="block py-1">Domain Price List</a>
                        <a href="${prefix}security/ssl-certificates/index.html" class="block py-1">SSL Certificates</a>
                    </div>
                </div>
                <div>
                    <button class="mobile-acc-btn flex w-full items-center justify-between py-2 text-left text-lg font-semibold text-white">
                        <span>Pro</span>
                        <svg class="h-4 w-4 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div class="mobile-acc-content hidden pl-4 pt-2 space-y-2 text-sm text-gray-300">
                        <a href="${prefix}hosting/cpanel-reseller-hosting/index.html" class="block py-1">cPanel Reseller Hosting</a>
                        <a href="${prefix}hosting/cpanel-hosting/index.html" class="block py-1">cPanel Hosting</a>
                        <a href="${prefix}hosting/vps-hosting/index.html" class="block py-1">VPS & Cloud Servers</a>
                        <a href="${prefix}hosting/dedicated-servers/index.html" class="block py-1">Dedicated Servers</a>
                    </div>
                </div>
                <div>
                    <button class="mobile-acc-btn flex w-full items-center justify-between py-2 text-left text-lg font-semibold text-white">
                        <span>Resources</span>
                        <svg class="h-4 w-4 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div class="mobile-acc-content hidden pl-4 pt-2 space-y-2 text-sm text-gray-300">
                        <a href="${prefix}about/index.html" class="block py-1">About Us</a>
                        <a href="${prefix}about/contact/index.html" class="block py-1">Contact Us</a>
                        <a href="${prefix}case-studies/index.html" class="block py-1">Customer Stories (Bangladesh)</a>
                        <a href="${prefix}blog/index.html" class="block py-1">Blog</a>
                        <a href="${prefix}partners/index.html" class="block py-1">Affiliate Program</a>
                    </div>
                </div>
            </div>
            <div class="mt-auto border-t border-white/10 pt-6 space-y-3">
                <a href="https://my.hosting.com" class="block w-full text-center rounded-xl bg-white/10 py-3 font-semibold text-sm text-white">Log in</a>
                <a href="https://checkout.hosting.com" class="block w-full text-center rounded-xl bg-[#C6FB4B] py-3 font-semibold text-sm text-black">Get Started</a>
            </div>
        `;
        document.body.appendChild(drawer);

        drawer.querySelectorAll('.mobile-acc-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const svg = btn.querySelector('svg');
                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    svg.classList.add('rotate-180');
                } else {
                    content.classList.add('hidden');
                    svg.classList.remove('rotate-180');
                }
            });
        });

        document.getElementById('closeMobileDrawer').addEventListener('click', () => {
            drawer.classList.add('hidden');
        });
    }

    hamburgerBtn.addEventListener('click', () => {
        drawer.classList.toggle('hidden');
    });
}

/* ==========================================================================
   6. TOPBAR DROPDOWNS (Country Switcher & Contact Us)
   ========================================================================== */
function initDropdowns() {
    const countryToggle = document.querySelector('button[aria-label="Country"]');
    const countryMenu = document.querySelector('div[in-header]');
    if (countryToggle && countryMenu) {
        countryToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            countryMenu.classList.toggle('hidden');
        });
        document.addEventListener('click', (e) => {
            if (!countryToggle.contains(e.target) && !countryMenu.contains(e.target)) {
                countryMenu.classList.add('hidden');
            }
        });
    }
}

/* ==========================================================================
   7. REVIEWS CAROUSEL (Smooth manual + auto-play animation)
   ========================================================================== */
function initReviewCarousel() {
    const list = document.querySelector('.reviews-carousel-large ul');
    const prevBtn = document.querySelector('button[data-v-91629f10]:has(svg.-scale-x-100)');
    const nextBtn = document.querySelector('button[data-v-91629f10]:not(:has(svg.-scale-x-100))');

    if (!list) return;

    function scrollNext() {
        const itemWidth = list.firstElementChild ? list.firstElementChild.clientWidth : 350;
        if (list.scrollLeft + list.clientWidth >= list.scrollWidth - 10) {
            list.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            list.scrollBy({ left: itemWidth, behavior: 'smooth' });
        }
    }

    function scrollPrev() {
        const itemWidth = list.firstElementChild ? list.firstElementChild.clientWidth : 350;
        list.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }

    if (nextBtn) nextBtn.addEventListener('click', scrollNext);
    if (prevBtn) prevBtn.addEventListener('click', scrollPrev);

    // Auto-scroll every 4.5 seconds
    let autoInterval = setInterval(scrollNext, 4500);
    list.addEventListener('mouseenter', () => clearInterval(autoInterval));
    list.addEventListener('mouseleave', () => {
        clearInterval(autoInterval);
        autoInterval = setInterval(scrollNext, 4500);
    });
}
