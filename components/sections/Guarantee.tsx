import { ShieldCheck, Clock, RefreshCw } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "90-Day Guarantee" },
  { icon: Clock,       label: "24-48hr Turnaround" },
  { icon: RefreshCw,   label: "Free Revisions" },
];

export default function Guarantee() {
  return (
    <section className="py-20 bg-[#06091C] border-b border-[#1A2548]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Our Promise
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-6 text-white">
              Zero Risk.<br />
              <span className="text-green-400">Real Results.</span>
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-8">
              If your channel does not reach{" "}
              <strong className="text-white">500 subscribers within 90 days</strong>{" "}
              of launching, we continue production at no additional charge until it does.{" "}
              <strong className="text-white">No questions. No fine print.</strong>
            </p>
            <div className="flex flex-wrap gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/5 border border-green-500/20 text-green-400 text-sm font-medium">
                  <Icon className="w-4 h-4" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-green-500/5 rounded-2xl blur-3xl" />
            <div className="relative bg-[#0B1230] rounded-2xl border border-green-500/20 p-10 text-center">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-t-2xl" />
              <ShieldCheck className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Monetization Guarantee</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                500 subscribers in 90 days or we keep working for free. That&apos;s how confident we are in our production quality.
              </p>
              <div className="mt-6 pt-6 border-t border-[#1A2548] flex items-center justify-center gap-2 text-green-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Backed by our work guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
