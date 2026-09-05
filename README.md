# hosting.com 1:1 Pixel-Perfect Clone

A complete, 1:1 exact local clone of **[hosting.com](https://hosting.com)**.

## 🚀 Highlights & Integrity
- **Exact Typography & Fonts**: Full Aeonik font family (`Aeonik-Regular.woff2`, `Aeonik-Medium.woff2`, `Aeonik-Bold.woff2`) included locally with identical kerning, weight, line-height, and anti-aliasing.
- **Identical Layout & Spacing**: Scoped styles and compiled Tailwind CSS (`entry.css`, `NuxtMarquee.css`, `Lottie.css`) preserved with zero shift or alignment discrepancy.
- **100% Local Images & Media**: All WebP hero graphics, SVG icons, country flags, customer review logos, and badge assets stored locally in `assets/`.
- **All Core Pages Included**:
  - `index.html` - Homepage (Hero, Domain Search, Plan Tiers, Feature Bento Grid, Reviews, FAQs, Footer)
  - `hosting/index.html` - Shared Web Hosting
  - `hosting/platforms/wordpress-hosting/index.html` - WordPress Hosting
  - `hosting/cpanel-hosting/index.html` - cPanel Hosting
  - `hosting/vps-hosting/index.html` - VPS Hosting
  - `hosting/dedicated-servers/index.html` - Dedicated Bare-Metal Servers
  - `hosting/cpanel-reseller-hosting/index.html` - Reseller Hosting
  - `hosting/free-website-migration/index.html` - Free Website Migration
  - `domains/index.html` - Domain Search & TLD Explorer
  - `domains/domain-transfer/index.html` - Domain Transfer
  - `domains/com/index.html` - .COM Domains
  - `security/ssl-certificates/index.html` - SSL Certificates
  - `about/index.html` - About Us
  - `about/contact/index.html` - Contact Us
  - `agency/index.html` - Agency Hosting
  - `partners/index.html` - Partners & Affiliates
  - `case-studies/index.html` - Customer Case Studies
  - `blog/index.html` - Blog & Insights
  - `package-comparison/index.html` - Package Comparison
- **Interactive UI**:
  - Header Navigation Dropdown Mega-Menus (Websites & Hosting, Domains, Pro, Resources)
  - Country / Currency switcher dropdown
  - Contact Us flyout menu (Live Chat, Email, Phone)
  - Mobile hamburger drawer
  - Plan category tabs (Get online / Grow your business / PRO)
  - Billing cycle switcher (Monthly / Annually)
  - Reviews carousel navigation (Next / Previous)

## 💻 How to Run Locally

### Option 1: One-Click PowerShell Server (Recommended)
Right-click `serve.ps1` and select **Run with PowerShell**, or run in terminal:
```powershell
powershell -ExecutionPolicy Bypass -File .\serve.ps1
```
It will start a local server at `http://localhost:8080/` and open your default browser automatically.

### Option 2: Direct File Viewing
Double-click `index.html` to open it directly in Google Chrome, Microsoft Edge, or any modern web browser.
