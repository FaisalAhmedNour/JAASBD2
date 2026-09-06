"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { RefreshCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F2F2ED] px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-12 shadow-md">
        <div className="space-y-2">
          <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
            Something went wrong
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A1616]">
            Application Error
          </h1>
          <p className="text-sm text-[#556360] leading-relaxed">
            An unexpected error occurred while loading this page.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={() => reset()}
            className="bg-[#082615] hover:bg-[#0d3b21] text-white font-bold rounded-xl px-6 py-5 shadow-sm"
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            <span>Try Again</span>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-white hover:bg-[#F9FAFB] text-[#0A1616] border-[#D1D5DB] font-bold rounded-xl px-6 py-5 shadow-sm"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              <span>Back Home</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
