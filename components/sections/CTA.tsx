import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-[#06091C] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, rgba(30,63,216,1) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/30 text-blue-300 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Ready to Start
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 max-w-3xl mx-auto leading-tight">
          Your Channel.<br />
          <span className="gradient-text">Our Production.</span>
        </h2>

        <p className="text-[#94A3B8] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Start with 3 videos for $197. No monthly commitment. See the quality before you commit to anything bigger.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/pricing"
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold text-base hover:from-blue-600 hover:to-blue-800 transition-all duration-200 glow-purple hover:scale-105 active:scale-95 w-full sm:w-auto justify-center">
            Choose Your Plan
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/contact"
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B1230] border border-[#1A2548] text-white font-semibold text-base hover:bg-[#101840] hover:border-blue-700/50 transition-all duration-200 w-full sm:w-auto justify-center">
            <Calendar className="w-4 h-4 text-blue-400" />
            Book Free Strategy Call
          </Link>
        </div>

        {/* Trust strip */}
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-[#64748B] list-none">
          <li>✓ No monthly commitment on Trial Pack</li>
          <li>✓ 90-day money-back guarantee</li>
          <li>✓ Dedicated account manager</li>
        </ul>
      </div>
    </section>
  );
}
