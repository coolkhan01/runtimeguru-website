"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log to an error tracking service when one is configured
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ background: "var(--bg-base)" }}>
      <p className="text-amber-400 font-mono text-sm font-semibold tracking-widest mb-4">500</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        Something Went Wrong
      </h1>
      <p className="text-[#94A3B8] text-lg max-w-md mb-10">
        An unexpected error occurred. Please try again or contact us if the problem persists.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-200">
          Try Again
        </button>
        <Link href="/"
          className="px-6 py-3 rounded-xl border border-[#1A2548] text-[#94A3B8] hover:text-white hover:border-blue-700/50 transition-all duration-200">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
