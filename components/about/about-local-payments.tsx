import React from "react";
import Image from "next/image";

const PAYMENT_METHODS = [
  "Mobile Financial Services: bKash, Nagad, Rocket & more",
  "Debit, Credit & Prepaid Cards: Visa, Mastercard, American Express & other supported cards",
  "Internet Banking: Citytouch, Bank Asia, Islami Bank Bangladesh, Mutual Trust Bank & other supported banks",
  "Local Bank Cards: DBBL Nexus, Q-Cash & other supported proprietary cards",
  "Digital Wallets: Supported local e-wallets",
  "Bangla QR: Supported QR payments",
  "Bank Transfer: Direct bank transfer*",
];

export function AboutLocalPayments() {
  return (
    <section className="bg-background relative py-16 lg:py-24">
      <div className="container mx-auto px-siteContainer">
        <div className="grid lg:grid-cols-12 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Heading & Payment Features */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="mb-4">
              <h3 className="font-display text-heading text-3xl sm:text-4xl font-bold tracking-tight">
                Easy Local Payments in Bangladesh
              </h3>
            </div>
            
            <p className="font-body text-content text-base sm:text-normal leading-relaxed mb-6">
              hosting.com supports all major payment methods in Bangladesh, making it easy to pay your hosting bills. Pay conveniently using bKash, Nagad, debit and credit cards, bank transfers, and other popular local payment methods.
            </p>

            <ul role="list" className="border-t border-ribbonBorder pt-6 space-y-3.5">
              {PAYMENT_METHODS.map((method, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-emerald-600 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-body text-sm text-content leading-snug">
                    {method}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Payment Gateways Banner */}
          <div className="lg:col-span-6 mt-8 lg:mt-0 flex justify-center">
            <div className="relative overflow-hidden rounded-2xl border border-boxBorder shadow-sm bg-white p-4 sm:p-6 w-full flex items-center justify-center">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="/assets/juxtapose/mobile/payment_methods_mobile_webview.webp"
                />
                <source
                  media="(max-width: 1023px)"
                  srcSet="/assets/juxtapose/tablet/payment_methods_tablet_bd.webp"
                />
                <img
                  src="/assets/juxtapose/latestsslcomerbdpayment-okbd.webp"
                  alt="Easy Local Payments in Bangladesh with bKash, Nagad, Rocket, DBBL, Cards and Net Banking"
                  className="h-auto w-full object-contain select-none"
                  width={752}
                  height={500}
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
