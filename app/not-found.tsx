import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ background: "var(--bg-base)" }}>
      <p className="text-[#1E3FD8] font-mono text-sm font-semibold tracking-widest mb-4">404</p>
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
        Page Not Found
      </h1>
      <p className="text-[#94A3B8] text-lg max-w-md mb-10">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-200">
          Back to Home
        </Link>
        <Link href="/contact"
          className="px-6 py-3 rounded-xl border border-[#1A2548] text-[#94A3B8] hover:text-white hover:border-blue-700/50 transition-all duration-200">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
