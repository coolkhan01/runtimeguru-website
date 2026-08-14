import Link from "next/link";
import { TrendingUp, ArrowRight, Eye, Users } from "lucide-react";

const caseStudies = [
  {
    niche: "Personal Finance",
    flag: "🇺🇸",
    region: "North America",
    before: "2,400",
    after: "183,000",
    timeframe: "8 months",
    views: "14.2M",
    metric: "subscribers",
    gradient: "from-green-600/20 to-green-900/10",
    border: "border-green-600/20 hover:border-green-500/40",
    tag: "Finance",
    tagColor: "bg-green-600/20 text-green-300",
  },
  {
    niche: "Health & Wellness",
    flag: "🇦🇺",
    region: "Australia",
    before: "0",
    after: "67,000",
    timeframe: "6 months",
    views: "5.8M",
    metric: "subscribers",
    gradient: "from-blue-600/20 to-blue-900/10",
    border: "border-blue-600/20 hover:border-blue-500/40",
    tag: "Health",
    tagColor: "bg-blue-600/20 text-blue-300",
  },
  {
    niche: "Business & Entrepreneurship",
    flag: "🇦🇪",
    region: "Middle East",
    before: "12,000",
    after: "241,000",
    timeframe: "10 months",
    views: "28.4M",
    metric: "subscribers",
    gradient: "from-amber-600/20 to-amber-900/10",
    border: "border-amber-600/20 hover:border-amber-500/40",
    tag: "Business",
    tagColor: "bg-amber-600/20 text-amber-300",
  },
  {
    niche: "Technology Reviews",
    flag: "🇩🇪",
    region: "Europe",
    before: "800",
    after: "52,000",
    timeframe: "5 months",
    views: "3.1M",
    metric: "subscribers",
    gradient: "from-blue-700/20 to-blue-900/10",
    border: "border-blue-700/20 hover:border-blue-500/40",
    tag: "Tech",
    tagColor: "bg-blue-700/20 text-blue-300",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/30 text-blue-300 text-xs font-medium mb-4">
            Case Studies
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Channels We've{" "}
            <span className="gradient-text">Grown From Scratch</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            Real client results from channels across multiple niches and countries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {caseStudies.map((cs) => (
            <div
              key={cs.niche}
              className={`p-6 rounded-2xl bg-gradient-to-br ${cs.gradient} border ${cs.border} transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{cs.flag}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{cs.niche}</p>
                    <p className="text-[#64748B] text-xs">{cs.region}</p>
                  </div>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${cs.tagColor}`}>
                  {cs.tag}
                </span>
              </div>

              <div className="flex items-center gap-4 mb-5">
                <div className="flex-1 p-3 rounded-xl bg-black/20">
                  <p className="text-[#64748B] text-xs mb-1">Before</p>
                  <p className="text-white font-bold text-xl">{cs.before}</p>
                  <p className="text-[#64748B] text-xs">{cs.metric}</p>
                </div>
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <div className="w-px h-6 bg-[#1E1E3A] my-1" />
                  <ArrowRight className="w-4 h-4 text-green-400" />
                </div>
                <div className="flex-1 p-3 rounded-xl bg-black/20 border border-green-500/20">
                  <p className="text-green-400 text-xs mb-1">After {cs.timeframe}</p>
                  <p className="text-white font-bold text-xl">{cs.after}</p>
                  <p className="text-[#64748B] text-xs">{cs.metric}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-sm">
                  <Eye className="w-4 h-4 text-[#64748B]" />
                  <span className="text-white font-medium">{cs.views}</span>
                  <span className="text-[#64748B]">total views</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm">
                  <Users className="w-4 h-4 text-[#64748B]" />
                  <span className="text-white font-medium">{cs.timeframe}</span>
                  <span className="text-[#64748B]">to achieve</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F0F1A] border border-[#1E1E3A] text-white font-medium hover:border-blue-700/40 hover:bg-[#101840] transition-all duration-200"
          >
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
