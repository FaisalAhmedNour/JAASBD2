import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { UtilityBar } from "@/components/layout/utility-bar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";

const aeonik = localFont({
  src: [
    {
      path: "../public/assets/fonts/Aeonik-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Aeonik-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Aeonik-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-aeonik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Web Hosting Services at 20x Speeds Bangladesh | JAASBD",
  description: siteConfig.description,
  keywords: [
    "web hosting bangladesh",
    "cpanel hosting bd",
    "bKash hosting payment",
    "cheap domain registration bd",
    "turbo vps bangladesh",
    "wordpress hosting bd",
  ],
  openGraph: {
    title: "Best Web Hosting Services at 20x Speeds Bangladesh",
    description: siteConfig.description,
    siteName: "hosting.com / JAASBD",
    locale: "en_BD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-bd" className={`${aeonik.variable} font-sans scroll-smooth`} suppressHydrationWarning>
      <body
        className="min-h-screen flex flex-col bg-[#F2F2ED] text-[#0A1616] selection:bg-[#00E599] selection:text-[#0A1616]"
        suppressHydrationWarning
      >
        <UtilityBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
