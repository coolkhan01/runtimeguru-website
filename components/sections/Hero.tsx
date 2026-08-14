"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, TrendingUp, Users, Video, Star, X } from "lucide-react";

const bullets = [
  "Done for you production, script to published video",
  "Real human team, not just AI automation",
  "90 day monetization guarantee or we work free",
];

const avatars = ["U", "P", "M", "F", "+"];
const VIDEO_ID = "0Vsv_6O0QTU";

function VideoModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
      <div className="relative z-10 w-full max-w-5xl" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-white/60 hover:text-white flex items-center gap-1.5 text-sm">
          <X className="w-4 h-4" /> Close
        </button>
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
          <iframe src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
            className="w-full h-full" allow="autoplay; encrypted-media; fullscreen" allowFullScreen />
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24" style={{
      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30,63,216,0.18) 0%, transparent 70%), linear-gradient(180deg, #060A20 0%, #06091C 50%, #04070F 100%)",
    }}>

      {/* Deep background grid */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(75,114,247,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(75,114,247,0.8) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      {/* Orbs — larger and more prominent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-1 absolute -top-48 -left-32 w-[750px] h-[750px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, rgba(30,63,216,0.5) 0%, rgba(30,63,216,0.15) 40%, transparent 70%)" }} />
        <div className="orb-2 absolute -bottom-48 -right-32 w-[650px] h-[650px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(75,114,247,0.4) 0%, rgba(30,63,216,0.15) 40%, transparent 70%)" }} />
        {/* Center bloom */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, rgba(30,63,216,0.3) 0%, transparent 60%)" }} />
        {/* Top accent light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-15"
          style={{ background: "radial-gradient(ellipse, rgba(75,114,247,0.6) 0%, transparent 70%)" }} />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-[5fr_6fr] gap-12 lg:gap-16 items-center mb-20">

          {/* LEFT — text */}
          <div>
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-blue-700/12 border border-blue-700/35 text-blue-300 text-sm font-medium mb-9 backdrop-blur-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
              YouTube Automation Specialists
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-7 text-left">
              <span className="text-white">Your Channel</span>
              <br />
              <span className="gradient-text">Monetized</span>
              <br />
              <span className="text-white">in 90 Days.</span>
            </h1>

            <p className="text-xl text-[#94A3B8] mb-9 leading-relaxed max-w-lg">
              We handle everything: scripts, voiceover, editing, thumbnails, and uploads.
              You own the channel, keep all the revenue, and don&apos;t touch a single video.
            </p>

            <ul className="flex flex-col gap-4 mb-11">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3.5 text-[#94A3B8] text-base">
                  <span className="w-6 h-6 rounded-full bg-blue-700/25 border border-blue-600/40 flex items-center justify-center flex-shrink-0">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href="/pricing"
                className="flex items-center gap-2.5 px-9 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold text-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-200 glow-purple hover:scale-105 active:scale-95">
                Choose Your Plan
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="/#portfolio"
                className="flex items-center gap-2.5 px-9 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 hover:border-blue-700/50 transition-all duration-200 backdrop-blur-sm">
                <Play className="w-5 h-5 text-blue-400 fill-blue-400" />
                See Our Results
              </a>
            </div>
          </div>

          {/* RIGHT — video with glowing stroke */}
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute -inset-[3px] rounded-2xl opacity-70"
              style={{ background: "linear-gradient(135deg, rgba(30,63,216,0.8), rgba(75,114,247,0.4), rgba(30,63,216,0.8))", filter: "blur(2px)" }} />

            {/* Video container */}
            <div className="relative rounded-xl overflow-hidden border border-blue-700/30 shadow-[0_0_60px_rgba(30,63,216,0.3),0_24px_64px_rgba(0,0,0,0.6)]">
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&rel=0&modestbranding=1&playsinline=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Runtime Gurus Work Showcase"
                />
              </div>
              {/* Watch with sound overlay */}
              <button onClick={() => setVideoOpen(true)}
                className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 backdrop-blur-sm text-white text-xs font-medium hover:bg-black/90 transition-colors border border-white/10">
                <Play className="w-3.5 h-3.5 fill-white" /> Watch with sound
              </button>
            </div>
          </div>
        </div>

        {/* Bottom — social proof (centered) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-7 sm:gap-12">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {avatars.map((a, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 border-2 border-[#06091C] flex items-center justify-center text-white text-sm font-bold">
                  {a}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-0.5 mb-0.5">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-sm text-[#64748B]">200+ happy clients</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-[#1A2548]" />
          <StatBadge icon={TrendingUp} value="2.8B+" label="Views Generated" />
          <div className="hidden sm:block w-px h-10 bg-[#1A2548]" />
          <StatBadge icon={Video} value="12,000+" label="Videos Produced" />
          <div className="hidden sm:block w-px h-10 bg-[#1A2548]" />
          <StatBadge icon={Users} value="200+" label="Channels Managed" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#06091C] to-transparent" />
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </section>
  );
}

function StatBadge({ icon: Icon, value, label }: { icon: React.ComponentType<{ className?: string }>; value: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-blue-700/15 border border-blue-700/25 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-blue-400" />
      </div>
      <div>
        <p className="text-white font-bold text-lg leading-none">{value}</p>
        <p className="text-[#64748B] text-sm mt-0.5">{label}</p>
      </div>
    </div>
  );
}
