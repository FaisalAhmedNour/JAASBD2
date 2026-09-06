import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F2F2ED] px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-12 shadow-md">
        <div className="w-16 h-16 rounded-2xl bg-[#E8F8F0] border border-[#00E599]/40 flex items-center justify-center mx-auto text-[#067547]">
          <Server className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-[#067547] uppercase tracking-wider">
            404 Error
          </span>
          <h1 className="text-3xl font-extrabold text-[#0A1616]">
            Page not found
          </h1>
          <p className="text-sm text-[#556360] leading-relaxed">
            The page you are looking for doesn&apos;t exist or has moved to a new URL.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            asChild
            className="bg-[#082615] hover:bg-[#0d3b21] text-white font-bold rounded-xl px-6 py-5 shadow-sm"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              <span>Back to Home</span>
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="bg-white hover:bg-[#F9FAFB] text-[#0A1616] border-[#D1D5DB] font-bold rounded-xl px-6 py-5 shadow-sm"
          >
            <Link href="/hosting">
              <span>View Hosting</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
