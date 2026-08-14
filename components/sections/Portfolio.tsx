"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ExternalLink, CheckCircle, Star, Play, TrendingUp, Video, Users, Eye, X, ChevronRight } from "lucide-react";
import { channels, portfolioVideos, reviews, profileStats, type Channel } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

// ── Count-up hook ─────────────────────────────────────────────────────────────
function useCountUp(end: number, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = Date.now();
    const frame = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(end * eased));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [end, duration, trigger]);
  return count;
}

// ── Channel Modal ─────────────────────────────────────────────────────────────
function ChannelModal({ channel, onClose }: { channel: Channel; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const channelVideos = portfolioVideos.filter(v => v.channelName === channel.name);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0B1230] border border-[#1A2548] shadow-2xl"
        onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="relative p-6 border-b border-[#1A2548]">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-lg text-[#64748B] hover:text-white hover:bg-[#1A2548] transition-colors">
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={channel.avatar} alt={channel.name} className="w-16 h-16 rounded-full ring-2 ring-blue-700/40" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{channel.name}</h3>
                {channel.verified && <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />}
              </div>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-700/15 border border-blue-700/30 text-blue-300">{channel.niche}</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 divide-x divide-[#1A2548] border-b border-[#1A2548]">
          {[
            { icon: Users, label: "Subscribers", value: channel.subscribers },
            { icon: Eye,   label: "Total Views",  value: channel.views },
            { icon: Video, label: "Videos Made",  value: channel.videos },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center py-4">
              <Icon className="w-4 h-4 text-blue-400 mb-1" />
              <span className="text-white font-bold text-lg">{value}</span>
              <span className="text-[#64748B] text-xs">{label}</span>
            </div>
          ))}
        </div>

        <div className="p-6 space-y-5">
          <p className="text-[#94A3B8] text-sm leading-relaxed">{channel.description}</p>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-3">Services Provided</h4>
            <div className="flex flex-wrap gap-2">
              {channel.services.map(s => (
                <span key={s} className="text-xs px-3 py-1 rounded-full bg-blue-700/10 border border-blue-700/25 text-blue-300">{s}</span>
              ))}
            </div>
          </div>

          {/* Case study (if featured) */}
          {channel.challenge && (
            <div className="space-y-3">
              {[
                { label: "Challenge", value: channel.challenge, color: "text-amber-400" },
                { label: "Solution",  value: channel.solution,  color: "text-blue-400" },
                { label: "Result",    value: channel.result,    color: "text-green-400" },
              ].map(({ label, value, color }) => value && (
                <div key={label} className="p-3 rounded-xl bg-[#06091C] border border-[#1A2548]">
                  <span className={`text-xs font-semibold ${color} block mb-1`}>{label}</span>
                  <p className="text-[#94A3B8] text-sm">{value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Videos */}
          {channelVideos.length > 0 && (
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Portfolio Videos</h4>
              <div className="space-y-2">
                {channelVideos.map(v => (
                  <a key={v.id} href={v.url} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#06091C] transition-colors group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={v.thumbnail} alt={v.title} className="w-20 h-12 rounded-lg object-cover flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-medium truncate group-hover:text-blue-400 transition-colors">{v.title}</p>
                      <p className="text-[#64748B] text-xs">{v.views} views</p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#64748B] group-hover:text-blue-400 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {channel.ytLink && (
            <a href={channel.ytLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 text-white text-sm font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-200">
              View YouTube Channel <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Featured Case Study ───────────────────────────────────────────────────────
function FeaturedCaseStudy() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const featured = channels.find(c => c.featured)!;
  const views = useCountUp(1180000, 2200, started);
  const subs  = useCountUp(3000,    1800, started);
  const vids  = useCountUp(57,      1500, started);

  return (
    <div ref={ref} className="rounded-2xl bg-[#0B1230] border border-blue-700/25 overflow-hidden">
      <div className="grid lg:grid-cols-2">
        {/* Left */}
        <div className="p-8 border-b lg:border-b-0 lg:border-r border-[#1A2548]">
          <div className="flex items-center gap-3 mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featured.avatar} alt={featured.name} className="w-14 h-14 rounded-full ring-2 ring-blue-700/50" />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{featured.name}</h3>
                <CheckCircle className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-xs text-blue-300 font-medium">{featured.niche} · Verified Client</span>
            </div>
          </div>

          <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">{featured.description}</p>

          <div className="space-y-3 mb-6">
            {[
              { label: "Challenge", text: featured.challenge!, color: "border-amber-500/30 bg-amber-500/5", badge: "text-amber-400" },
              { label: "Solution",  text: featured.solution!,  color: "border-blue-700/30 bg-blue-700/5",  badge: "text-blue-400" },
              { label: "Result",    text: featured.result!,    color: "border-green-500/30 bg-green-500/5",badge: "text-green-400" },
            ].map(({ label, text, color, badge }) => (
              <div key={label} className={`p-4 rounded-xl border ${color}`}>
                <span className={`text-xs font-bold ${badge} block mb-1 uppercase tracking-wide`}>{label}</span>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {featured.services.map(s => (
              <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-blue-700/10 border border-blue-700/20 text-blue-300">{s}</span>
            ))}
          </div>
        </div>

        {/* Right — animated stats */}
        <div className="p-8 flex flex-col justify-center">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/30 text-blue-300 text-xs font-medium mb-4">
              <TrendingUp className="w-3.5 h-3.5" /> Featured Case Study
            </div>
            <h3 className="text-2xl font-bold text-white">Growth in Numbers</h3>
          </div>

          <div className="space-y-6">
            {[
              { icon: Eye,   label: "Total Views Generated", value: views, suffix: "", prefix: "", format: (n: number) => n >= 1000000 ? `${(n/1000000).toFixed(2)}M` : n >= 1000 ? `${(n/1000).toFixed(0)}K` : String(n) },
              { icon: Users, label: "Subscribers Gained",    value: subs,  suffix: "+", prefix: "", format: (n: number) => n >= 1000 ? `${(n/1000).toFixed(1)}K` : String(n) },
              { icon: Video, label: "Videos Produced",       value: vids,  suffix: "", prefix: "", format: (n: number) => String(n) },
            ].map(({ icon: Icon, label, value, format }) => (
              <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-[#06091C] border border-[#1A2548]">
                <div className="w-10 h-10 rounded-xl bg-blue-700/15 border border-blue-700/25 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white tabular-nums">{format(value)}</div>
                  <div className="text-[#64748B] text-xs">{label}</div>
                </div>
              </div>
            ))}
          </div>

          {featured.ytLink && (
            <a href={featured.ytLink} target="_blank" rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 text-white text-sm font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-200 glow-purple">
              Visit Channel <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main Portfolio Section ────────────────────────────────────────────────────
const NICHES = ["All", "Motorsports", "Manufacturing", "Food & Nutrition", "Technology", "Entertainment", "Mystery & Documentary", "Health & Medicine"];

export default function Portfolio() {
  const [activeNiche, setActiveNiche] = useState("All");
  const [selectedChannel, setSelectedChannel] = useState<Channel | null>(null);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const filteredChannels = activeNiche === "All"
    ? channels
    : channels.filter(c => c.niche === activeNiche);

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <section id="portfolio" className="py-24 bg-[#06091C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/30 text-blue-300 text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Portfolio & Results
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-5">
            Results That Speak<br />For Themselves
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto mb-8">
            We help creators and brands scale through professional YouTube content production, channel management, editing, scripting, and thumbnails.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[#94A3B8]">
            {[
              { icon: Eye,         text: `${profileStats.totalViews} Views Generated` },
              { icon: Video,       text: `${profileStats.totalVideos}+ Videos Produced` },
              { icon: Star,        text: `${profileStats.totalReviews} Reviews — All 10/10` },
              { icon: CheckCircle, text: "Multiple Niches Served" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B1230] border border-[#1A2548]">
                <Icon className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Case Study */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1A2548]" />
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest px-4 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/25">Featured Client</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#1A2548]" />
          </div>
          <FeaturedCaseStudy />
        </div>

        {/* Channel Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <h3 className="text-2xl font-bold text-white">All Channels</h3>
            <div className="flex flex-wrap gap-2">
              {NICHES.slice(0, 5).map(n => (
                <button key={n} onClick={() => setActiveNiche(n)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200",
                    activeNiche === n
                      ? "bg-blue-700 text-white"
                      : "bg-[#0B1230] border border-[#1A2548] text-[#94A3B8] hover:border-blue-700/40 hover:text-white"
                  )}>
                  {n}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredChannels.map((channel) => (
              <button key={channel.id} onClick={() => setSelectedChannel(channel)} className="group text-left">
                <div className={cn(
                  "p-5 rounded-2xl bg-[#0B1230] border transition-all duration-300 h-full flex flex-col",
                  channel.featured
                    ? "border-blue-700/40 hover:border-blue-600/60"
                    : "border-[#1A2548] hover:border-blue-700/30",
                  "hover:bg-[#101840] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(30,63,216,0.15)]"
                )}>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={channel.avatar} alt={channel.name} className="w-11 h-11 rounded-full ring-1 ring-[#1A2548] group-hover:ring-blue-700/40 transition-all" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-white font-semibold text-sm truncate">{channel.name}</span>
                        {channel.verified && <CheckCircle className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />}
                      </div>
                      <span className="text-[#64748B] text-xs">{channel.niche}</span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[
                      { label: "Subs",   value: channel.subscribers },
                      { label: "Views",  value: channel.views },
                      { label: "Videos", value: String(channel.videos) },
                    ].map(({ label, value }) => (
                      <div key={label} className="text-center p-2 rounded-lg bg-[#06091C] border border-[#1A2548]">
                        <div className="text-white font-bold text-xs">{value}</div>
                        <div className="text-[#64748B] text-[10px]">{label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-[#64748B] text-xs leading-relaxed flex-1 mb-4 line-clamp-2">{channel.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {channel.services.slice(0, 2).map(s => (
                        <span key={s} className="text-[10px] px-1.5 py-0.5 rounded bg-blue-700/10 text-blue-400">{s}</span>
                      ))}
                      {channel.services.length > 2 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1A2548] text-[#64748B]">+{channel.services.length - 2}</span>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#64748B] group-hover:text-blue-400 transition-colors" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Video Showcase */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1A2548]" />
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest px-4 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/25">Portfolio Videos</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#1A2548]" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioVideos.map(video => (
              <a key={video.id} href={video.url} target="_blank" rel="noopener noreferrer"
                className="group rounded-xl overflow-hidden bg-[#0B1230] border border-[#1A2548] hover:border-blue-700/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(30,63,216,0.12)]">
                <div className="relative aspect-video overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center">
                      <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded bg-black/70 text-white text-[10px] font-medium">
                    <Eye className="w-2.5 h-2.5" /> {video.views}
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center gap-2 mb-1.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={video.channelAvatar} alt={video.channelName} className="w-5 h-5 rounded-full" />
                    <span className="text-[#64748B] text-xs">{video.channelName}</span>
                  </div>
                  <p className="text-white text-xs font-medium leading-snug line-clamp-2 group-hover:text-blue-300 transition-colors">{video.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Client Reviews */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1A2548]" />
            <span className="text-xs font-semibold text-blue-300 uppercase tracking-widest px-4 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/25">
              Client Reviews — {reviews.length} Reviews · All 10/10
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#1A2548]" />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {displayedReviews.map((review, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#0B1230] border border-[#1A2548] hover:border-blue-700/25 transition-all duration-300 flex flex-col">
                <div className="flex mb-3">
                  {[1,2,3,4,5].map(s => <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                  <span className="text-[#64748B] text-xs ml-2">10/10</span>
                </div>
                <p className="text-[#94A3B8] text-sm leading-relaxed flex-1 mb-4 italic">&ldquo;{review.body}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#1A2548]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={review.avatar} alt={review.reviewer} className="w-9 h-9 rounded-full ring-1 ring-[#1A2548]" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                      <span className="text-white font-semibold text-sm">{review.reviewer}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                    </div>
                    <div className="text-[#64748B] text-xs">{review.subscribers} subs · {review.views} views</div>
                  </div>
                  {review.ytLink && (
                    <a href={review.ytLink} target="_blank" rel="noopener noreferrer"
                      className="p-1.5 rounded-lg hover:bg-[#1A2548] transition-colors">
                      <ExternalLink className="w-3.5 h-3.5 text-[#64748B]" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {reviews.length > 3 && (
            <div className="text-center mt-6">
              <button onClick={() => setShowAllReviews(!showAllReviews)}
                className="px-6 py-2.5 rounded-xl bg-[#0B1230] border border-[#1A2548] text-[#94A3B8] text-sm font-medium hover:border-blue-700/40 hover:text-white transition-all duration-200">
                {showAllReviews ? "Show Less" : `Show All ${reviews.length} Reviews`}
              </button>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#64748B] text-sm mb-4">Ready to be our next success story?</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold text-sm hover:from-blue-600 hover:to-blue-800 transition-all duration-200 glow-purple hover:scale-105">
              Start Your Channel <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedChannel && (
        <ChannelModal channel={selectedChannel} onClose={() => setSelectedChannel(null)} />
      )}
    </section>
  );
}
