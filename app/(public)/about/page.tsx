import type { Metadata } from "next";
import Link from "next/link";
import { Target, Globe2, Heart, ArrowRight, CheckCircle2, Zap } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Runtime Gurus â€” our mission, team, and the values that drive us to deliver world-class YouTube automation and digital services.",
};

const values = [
  {
    icon: Target,
    title: "Results First",
    description:
      "We're obsessed with measurable outcomes. Every decision we make â€” from script structure to thumbnail colours â€” is guided by data and oriented toward real subscriber and revenue growth.",
    color: "text-blue-400",
    bg: "bg-blue-700/10",
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    description:
      "Our team works with creators across 30+ countries. We understand different markets, audiences, and cultures â€” giving our clients a true international edge.",
    color: "text-blue-400",
    bg: "bg-blue-600/10",
  },
  {
    icon: Heart,
    title: "Creator-First",
    description:
      "We built this agency because we're passionate about the creator economy. We treat your channel as if it were our own â€” with genuine care and long-term thinking.",
    color: "text-pink-400",
    bg: "bg-pink-600/10",
  },
  {
    icon: Zap,
    title: "Speed & Quality",
    description:
      "The YouTube algorithm rewards consistency. We deliver high-quality work on tight deadlines so your upload schedule never slips â€” without compromising on craft.",
    color: "text-amber-400",
    bg: "bg-amber-600/10",
  },
];

const teamStats = [
  { value: "6+", label: "Years in the industry" },
  { value: "25+", label: "Team specialists" },
  { value: "30+", label: "Countries served" },
  { value: "150+", label: "Active channels" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] opacity-10 pointer-events-none rounded-full"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,1) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/30 text-blue-300 text-xs font-medium mb-6">
            Our Story
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            We're the Team Behind{" "}
            <span className="gradient-text">150+ Growing Channels</span>
          </h1>
          <p className="text-[#94A3B8] text-xl leading-relaxed mb-8">
            Runtime Gurus was founded on a simple belief: talented creators and smart entrepreneurs shouldn't have to master video production, SEO, and editing just to build a successful YouTube presence. That's what we're here for.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            What started as a small editing collective grew into a full-service YouTube agency trusted by creators and brands on six continents. We've helped channels go from zero to 200K subscribers, generated over 2.8 billion views, and built dozens of monetised channels from scratch.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-[#1A2548]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamStats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-4xl font-black gradient-text mb-2">{value}</p>
              <p className="text-[#64748B] text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/30 text-blue-300 text-xs font-medium mb-5">
              Our Mission
            </div>
            <h2 className="text-4xl font-bold text-white mb-5">
              Making YouTube Growth Accessible to Everyone
            </h2>
            <p className="text-[#94A3B8] leading-relaxed mb-5">
              YouTube is the world's second-largest search engine and one of the most powerful tools for building authority, generating passive income, and reaching a global audience. But most people never tap its potential â€” not because they lack ideas, but because execution is hard.
            </p>
            <p className="text-[#94A3B8] leading-relaxed mb-8">
              Runtime Gurus exists to remove every barrier between your vision and a thriving channel. Whether you're an entrepreneur wanting a faceless channel, a coach trying to grow your audience, or a brand looking to reach millions â€” we make it happen.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-200"
            >
              Start Your Journey <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="space-y-4">
            {[
              "Remote-first team spanning 5 time zones",
              "Dedicated account manager for every client",
              "Transparent reporting with real-time access",
              "Monthly strategy calls and growth reviews",
              "No outsourcing â€” all work done in-house",
              "ISO-aligned processes for quality consistency",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-4 rounded-xl bg-[#0B1230] border border-[#1A2548]">
                <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-[#94A3B8] text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#1A2548]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              What We Stand For
            </h2>
            <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
              Our values aren't a corporate poster â€” they're the principles that guide every decision we make for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-[#0B1230] border border-[#1A2548] hover:border-blue-700/30 transition-colors">
                <div className={`w-11 h-11 rounded-xl ${v.bg} flex items-center justify-center mb-4`}>
                  <v.icon className={`w-5 h-5 ${v.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
