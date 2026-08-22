import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, Eye, Users, ArrowRight, Calendar } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "YouTube Channel Growth Results & Case Studies",
  description:
    "See real YouTube channel growth results from Runtime Gurus clients across finance, health, business, tech, and lifestyle niches worldwide.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    url: "/portfolio",
    title: "YouTube Channel Growth Results & Case Studies | Runtime Gurus",
    description: "Real case studies from Runtime Gurus clients — channels taken from zero to monetization across finance, health, business, tech, and lifestyle niches worldwide.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Runtime Gurus — YouTube Channel Growth Results" }],
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.runtimeguru.com/portfolio#webpage",
      url: "https://www.runtimeguru.com/portfolio",
      name: "YouTube Channel Growth Results & Case Studies | Runtime Gurus",
      isPartOf: { "@id": "https://www.runtimeguru.com/#website" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.runtimeguru.com" },
        { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://www.runtimeguru.com/portfolio" },
      ],
    },
  ],
};

const caseStudies = [
  {
    niche: "Personal Finance",
    flag: "ðŸ‡ºðŸ‡¸",
    region: "United States",
    description: "A faceless automation channel targeting young professionals seeking financial independence. Built from zero with our full automation package.",
    before: { subs: "0", views: "0", rpm: "$0" },
    after: { subs: "183,000", views: "14.2M", rpm: "$8.40/1K" },
    timeframe: "8 months",
    services: ["YouTube Automation", "Video Editing", "Thumbnail Design", "Script Writing"],
    highlight: "Monetised at month 4. Generating $3,200+/month in AdSense.",
    tag: "Finance",
    color: "from-green-600/15 to-transparent",
    border: "border-green-600/20",
    tagColor: "bg-green-600/20 text-green-300",
    accentColor: "text-green-400",
  },
  {
    niche: "Business & Entrepreneurship",
    flag: "ðŸ‡¦ðŸ‡ª",
    region: "United Arab Emirates",
    description: "An established business coach who wanted to scale beyond his existing audience. We took over full channel management and implemented an aggressive content strategy.",
    before: { subs: "12,000", views: "1.1M", rpm: "$4.20/1K" },
    after: { subs: "241,000", views: "28.4M", rpm: "$6.80/1K" },
    timeframe: "10 months",
    services: ["Channel Management", "Video Editing", "Thumbnail Design"],
    highlight: "20x growth. New leads from YouTube increased client revenue by 40%.",
    tag: "Business",
    color: "from-amber-600/15 to-transparent",
    border: "border-amber-600/20",
    tagColor: "bg-amber-600/20 text-amber-300",
    accentColor: "text-amber-400",
  },
  {
    niche: "Health & Wellness",
    flag: "ðŸ‡¦ðŸ‡º",
    region: "Australia",
    description: "A naturopathic doctor who needed educational content at scale to build authority and drive clinic appointments. Faceless content with her voice-over.",
    before: { subs: "0", views: "0", rpm: "$0" },
    after: { subs: "67,000", views: "5.8M", rpm: "$5.10/1K" },
    timeframe: "6 months",
    services: ["YouTube Automation", "Script Writing", "Video Editing", "Thumbnail Design"],
    highlight: "Channel now drives 60+ monthly appointment inquiries.",
    tag: "Health",
    color: "from-blue-600/15 to-transparent",
    border: "border-blue-600/20",
    tagColor: "bg-blue-600/20 text-blue-300",
    accentColor: "text-blue-400",
  },
  {
    niche: "Technology Reviews",
    flag: "ðŸ‡©ðŸ‡ª",
    region: "Germany / Europe",
    description: "A tech enthusiast brand reviewing consumer electronics and software. We handled editing and thumbnails; client continued to film their own content.",
    before: { subs: "800", views: "120K", rpm: "$3.60/1K" },
    after: { subs: "52,000", views: "3.1M", rpm: "$4.80/1K" },
    timeframe: "5 months",
    services: ["Video Editing", "Thumbnail Design"],
    highlight: "CTR improved from 2.1% to 6.8% after thumbnail redesign.",
    tag: "Tech",
    color: "from-blue-700/15 to-transparent",
    border: "border-blue-700/20",
    tagColor: "bg-blue-700/20 text-blue-300",
    accentColor: "text-blue-400",
  },
  {
    niche: "Luxury Lifestyle",
    flag: "ðŸ‡«ðŸ‡·",
    region: "France / Francophone",
    description: "A luxury travel and lifestyle brand targeting high-net-worth audiences. Cinematic editing and aspirational storytelling were key to the channel's identity.",
    before: { subs: "3,200", views: "280K", rpm: "$6.50/1K" },
    after: { subs: "89,000", views: "7.6M", rpm: "$9.20/1K" },
    timeframe: "9 months",
    services: ["Channel Management", "Video Editing", "Script Writing"],
    highlight: "Brand partnership deals worth â‚¬18,000+ secured through channel growth.",
    tag: "Lifestyle",
    color: "from-pink-600/15 to-transparent",
    border: "border-pink-600/20",
    tagColor: "bg-pink-600/20 text-pink-300",
    accentColor: "text-pink-400",
  },
  {
    niche: "Online Education",
    flag: "ðŸ‡®ðŸ‡³",
    region: "India / South Asia",
    description: "An ed-tech startup wanting to distribute free courses on YouTube as a top-of-funnel lead generation strategy. High volume, fast turnaround was critical.",
    before: { subs: "0", views: "0", rpm: "$0" },
    after: { subs: "134,000", views: "11.2M", rpm: "$2.80/1K" },
    timeframe: "12 months",
    services: ["YouTube Automation", "Video Editing", "Thumbnail Design", "Script Writing", "Channel Management"],
    highlight: "Converted 12,000+ YouTube viewers into paid course students.",
    tag: "Education",
    color: "from-teal-600/15 to-transparent",
    border: "border-teal-600/20",
    tagColor: "bg-teal-600/20 text-teal-300",
    accentColor: "text-teal-400",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/30 text-blue-300 text-xs font-medium mb-6">
            Proven Results
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Real Numbers,{" "}
            <span className="gradient-text">Real Growth</span>
          </h1>
          <p className="text-[#94A3B8] text-xl max-w-2xl mx-auto">
            Case studies from clients across 6 continents. Every number here is real â€” verified from YouTube Analytics screenshots our clients shared with us.
          </p>
        </div>
      </section>

      {/* Overview stats */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 border-y border-[#1E1E3A]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: Users, v: "2.8B+", l: "Total Views Generated" },
            { icon: TrendingUp, v: "150+", l: "Channels Scaled" },
            { icon: Eye, v: "98%", l: "Client Satisfaction" },
            { icon: Calendar, v: "48hr", l: "Avg. Turnaround" },
          ].map(({ icon: Icon, v, l }) => (
            <div key={l} className="flex flex-col items-center gap-2">
              <Icon className="w-5 h-5 text-blue-400" />
              <p className="text-3xl font-black text-white">{v}</p>
              <p className="text-[#64748B] text-sm">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.niche}
              className={`p-8 rounded-2xl bg-gradient-to-r ${cs.color} border ${cs.border} bg-[#0F0F1A]`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{cs.flag}</span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-white">{cs.niche}</h3>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${cs.tagColor}`}>
                          {cs.tag}
                        </span>
                      </div>
                      <p className="text-[#64748B] text-sm">{cs.region}</p>
                    </div>
                  </div>
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">{cs.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {cs.services.map((s) => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-[#1E1E3A] text-[#94A3B8]">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className={`p-3 rounded-xl bg-black/20 border border-[#1E1E3A] text-sm`}>
                    <span className={`font-semibold ${cs.accentColor}`}>Key Outcome: </span>
                    <span className="text-[#94A3B8]">{cs.highlight}</span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 rounded-xl bg-black/30 border border-[#1E1E3A]">
                    <p className="text-xs text-[#64748B] mb-3 font-medium uppercase tracking-wider">Before Runtime Gurus</p>
                    <div className="space-y-2">
                      {[
                        { l: "Subscribers", v: cs.before.subs },
                        { l: "Total Views", v: cs.before.views },
                        { l: "RPM", v: cs.before.rpm },
                      ].map(({ l, v }) => (
                        <div key={l} className="flex justify-between text-sm">
                          <span className="text-[#64748B]">{l}</span>
                          <span className="text-white font-medium">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`p-4 rounded-xl bg-black/30 border ${cs.border}`}>
                    <p className={`text-xs font-medium uppercase tracking-wider mb-3 ${cs.accentColor}`}>
                      After {cs.timeframe}
                    </p>
                    <div className="space-y-2">
                      {[
                        { l: "Subscribers", v: cs.after.subs },
                        { l: "Total Views", v: cs.after.views },
                        { l: "RPM", v: cs.after.rpm },
                      ].map(({ l, v }) => (
                        <div key={l} className="flex justify-between text-sm">
                          <span className="text-[#64748B]">{l}</span>
                          <span className="text-white font-bold">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
