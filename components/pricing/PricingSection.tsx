"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Flame, Zap, ShieldCheck, Star, ChevronRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

function useCountUp(end: number, duration = 1600, trigger = false) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const t0 = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - t0) / duration, 1);
      setN(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [end, duration, trigger]);
  return n;
}

const plans = [
  {
    name: "Starter Package",
    label: "For New Channels",
    price: "$599",
    period: "per month / 8 videos",
    badge: null,
    features: ["8 videos per month", "Full script, VO, edit, thumbnail", "Niche research included", "Weekly progress update", "Priority WhatsApp support"],
    cta: "Get Started",
  },
  {
    name: "Growth package",
    label: "For Growing Channels",
    price: "$1,099",
    period: "per month / 12 to 16 videos",
    badge: "MOST POPULAR",
    featured: true,
    features: ["12 to 16 videos per month", "Full channel management", "CTR + retention optimization", "Weekly analytics report", "Dedicated account manager", "Competitor analysis monthly"],
    cta: "Order Now",
  },
];

const steps = ["Starter Package", "Growth package", "⭐ Investor Package"];

export function PricingSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const router = useRouter();

  const videos = useCountUp(25, 1400, triggered);
  const calls  = useCountUp(12, 1600, triggered);
  const days   = useCountUp(90, 1800, triggered);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect(); } }, { threshold: 0.2 });
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  function handleStepClick(step: string) {
    const name = step.replace("⭐ ", "");
    if (name === "Investor Package") {
      heroRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      setActive("Investor Package");
    } else {
      setActive(name);
      document.getElementById(`plan-${name.replace(/ /g, "-")}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function handleCardClick(name: string) {
    router.push("/contact");
  }

  return (
    <section className="pt-32 pb-20 bg-[#06091C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/30 text-blue-300 text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Transparent Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Choose Your <span className="gradient-text">Growth Path</span>
          </h1>
          {/* Interactive progression steps */}
          <div className="flex flex-wrap items-center justify-center gap-1">
            {steps.map((step, i) => {
              const name = step.replace("⭐ ", "");
              const isActive = active === name;
              const isLast = i === steps.length - 1;
              return (
                <div key={step} className="flex items-center">
                  <button
                    onClick={() => handleStepClick(step)}
                    className={cn(
                      "px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap",
                      isActive
                        ? isLast
                          ? "bg-blue-700 text-white scale-110 shadow-[0_0_20px_rgba(30,63,216,0.5)]"
                          : "bg-blue-700/25 border border-blue-700/70 text-blue-200 scale-105"
                        : isLast
                          ? "bg-blue-700/15 border border-blue-700/40 text-blue-300 hover:bg-blue-700/30 hover:scale-105"
                          : "text-[#64748B] hover:text-white hover:bg-[#1A2548] hover:scale-105"
                    )}>
                    {step}
                  </button>
                  {i < steps.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-[#1A2548] mx-0.5 flex-shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
          <br></br>
          <div className="max-w-xl mx-auto mb-8">
            <a
              href={`https://mail.google.com/mail/?view=cm&to=admin@runtime.com&su=${encodeURIComponent('I Want to Get My Channel Monetized')}&body=${encodeURIComponent(`Hi Runtime Gurus Team,\n\nI'm interested in your $300 Channel Monetization package and would love to get started.\nPlease let me know the next steps.\n\nThank you!`)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => { e.stopPropagation(); }}
              className="relative inline-block overflow-hidden font-semibold text-sm tracking-wide uppercase rounded-full px-5 py-2 border border-[#F59E0B] transition-transform duration-200 hover:scale-105 active:scale-95"
              style={{
                color: '#FFFFFF',
                textShadow: '0 0 12px rgba(245,158,11,0.8), 0 0 28px rgba(245,158,11,0.5)',
                letterSpacing: '0.08em',
                boxShadow: '0 0 16px rgba(245,158,11,0.4)',
              }}
            >
              Get Monetized Channel in $300
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.7) 50%, transparent 60%)',
                  backgroundSize: '200% 100%',
                  animation: 'shine-ltr 2.4s linear infinite',
                }}
              />
            </a>
          </div>
          <style>{`
            @keyframes shine-ltr {
              0%   { background-position: -100% 0; }
              100% { background-position: 200% 0; }
            }
          `}</style>

          
        </div>

        {/* INVESTOR PACKAGE */}
        <div ref={heroRef} id="plan-Investor-Package" className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-semibold">
              <Flame className="w-3.5 h-3.5" />
              ONLY 2 CLIENT SPOTS AVAILABLE THIS MONTH — HIGH DEMAND
              <Flame className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className={cn(
            "flagship-border p-[2px] rounded-2xl transition-all duration-300",
            active === "Investor Package"
              ? "flagship-glow scale-[1.01] shadow-[0_0_60px_rgba(30,63,216,0.4)]"
              : "flagship-glow"
          )}>
            <div className="bg-[#0B1230] rounded-[14px] overflow-hidden">
              <div className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 py-2 px-5 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-3.5 h-3.5" /> Flagship Offer · Most Clients Choose This
                </div>
                <div className="flex items-center gap-1.5 text-blue-100 text-xs">
                  <ShieldCheck className="w-3 h-3" /> Strongest Runtime Gurus Guarantee
                </div>
              </div>

              <div className="grid lg:grid-cols-[1fr_280px]">
                <div className="p-5 border-b lg:border-b-0 lg:border-r border-[#1A2548]">
                  <div className="mb-4">
                    <p className="text-xs text-blue-300 font-semibold uppercase tracking-widest mb-1">For Serious Channel Investors</p>
                    <h2 className="text-xl font-bold text-white mb-1">
                      Investor Package &mdash; <span className="gradient-text">Zero to Monetized in 90 Days</span>
                    </h2>
                    <p className="text-[#94A3B8] text-sm leading-relaxed">
                      A complete business asset: dedicated team, expert strategy, and everything produced until your channel is monetization-ready.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[{ label: "Videos", value: videos, suffix: "+" }, { label: "Calls", value: calls, suffix: "" }, { label: "Days", value: days, suffix: "" }].map(({ label, value, suffix }) => (
                      <div key={label} className="text-center py-2 px-3 rounded-lg bg-blue-700/8 border border-blue-700/20">
                        <div className="text-xl font-bold text-white tabular-nums">{value}{suffix}</div>
                        <div className="text-[#64748B] text-xs">{label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-1.5 mb-4">
                    {["25+ fully produced videos", "Weekly 1-on-1 strategy calls", "Full channel branding kit", "Monetization roadmap & SEO", "6-month content calendar", "Dedicated account manager", "Priority production queue", "CTR + retention optimization"].map(f => (
                      <div key={f} className="flex items-center gap-2 text-xs text-[#94A3B8]">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> {f}
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg bg-green-500/5 border border-green-500/20 p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 font-semibold text-xs">Investor Guarantee — We Work Until You Succeed</span>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      {["90-Day Monetization Focus", "Dedicated Production Team", "Weekly Strategy Calls", "Continue Until Goals Met"].map(g => (
                        <div key={g} className="flex items-center gap-1.5 text-xs text-[#94A3B8]">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" /> {g}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between">
                  <div className="p-3 rounded-lg bg-blue-700/5 border border-blue-700/20 mb-4">
                    <div className="flex mb-1.5">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-[#94A3B8] text-xs italic leading-relaxed mb-2">
                      &ldquo;He managed our entire channel. 100% Recommended!&rdquo;
                    </p>
                    <div className="flex items-center gap-1.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="https://storage.ytjobs.co/channel_thumbnails/ieVVhWtVb7vNAOyWez2Jmx1saMXWfikYvj8rAJW7.jpg" alt="Food Facts Canada" className="w-5 h-5 rounded-full" />
                      <span className="text-white text-xs font-semibold">Food Facts Canada</span>
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <div className="text-[10px] text-[#64748B] uppercase tracking-widest mb-0.5">Investment</div>
                    <div className="text-4xl font-bold text-white leading-none mb-1">$4,999</div>
                    <div className="text-[#64748B] text-xs">90-day full engagement</div>
                    <div className="text-blue-300 text-xs mt-0.5">≈ $1,666/month</div>
                  </div>

                  <div className="space-y-2">
                    <Link href="/contact"
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold text-sm hover:from-blue-600 hover:to-blue-800 transition-all duration-200 glow-purple hover:scale-105 active:scale-95">
                      Apply For Investor Package <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/contact"
                      className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-[#1A2548] text-[#94A3B8] text-xs font-medium hover:border-blue-700/40 hover:text-white transition-all duration-200">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" /> Book Free Strategy Call
                    </Link>
                    <div className="space-y-1 pt-1">
                      {["Limited spots, first come first served", "No hidden fees, all inclusive"].map(t => (
                        <div key={t} className="flex items-center gap-1.5 text-[10px] text-[#64748B]">
                          <div className="w-1 h-1 rounded-full bg-[#64748B]" /> {t}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#1A2548]" />
          <span className="text-xs font-semibold text-[#64748B] uppercase tracking-widest whitespace-nowrap px-2">
            Or Start With a Monthly Plan
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#1A2548]" />
        </div>

        {/* Plan cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6 max-w-2xl mx-auto">
          {plans.map((plan) => {
            const isActive = active === plan.name;
            return (
              <button
                key={plan.name}
                id={`plan-${plan.name.replace(/ /g, "-")}`}
                onClick={() => handleCardClick(plan.name)}
                onMouseEnter={() => setActive(plan.name)}
                onMouseLeave={() => setActive(null)}
                className={cn(
                  "group relative flex flex-col rounded-2xl border text-left transition-all duration-200 cursor-pointer w-full",
                  isActive
                    ? plan.featured
                      ? "scale-[1.04] border-blue-500 bg-[#0f1e38] shadow-[0_16px_48px_rgba(30,63,216,0.35)]"
                      : "scale-[1.04] border-blue-700/70 bg-[#0f1535] shadow-[0_16px_48px_rgba(30,63,216,0.25)]"
                    : plan.featured
                      ? "border-blue-700/50 bg-gradient-to-b from-[#0d1a30] to-[#0B1230]"
                      : "border-[#1A2548] bg-[#0B1230]"
                )}>
                {plan.badge && (
                  <div className={cn(
                    "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest whitespace-nowrap transition-all duration-200",
                    isActive ? "scale-110" : "",
                    (plan as { badgeGreen?: boolean }).badgeGreen ? "bg-[#10B981] text-black" : "bg-blue-700 text-white"
                  )}>{plan.badge}</div>
                )}

                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-4">
                    <div className="text-[#64748B] text-[10px] font-medium uppercase tracking-wider mb-0.5">{plan.label}</div>
                    <div className={cn("font-bold text-base transition-colors", isActive ? "text-white" : "text-[#E2E8F0]")}>{plan.name}</div>
                  </div>

                  <div className="mb-4">
                    <span className={cn("text-2xl font-bold transition-colors", isActive ? "text-white" : "text-white")}>{plan.price}</span>
                    <div className="text-[#64748B] text-xs mt-0.5">{plan.period}</div>
                  </div>

                  <div className="h-px bg-[#1A2548] mb-4" />

                  <ul className="space-y-2 mb-5 flex-1">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-xs text-[#94A3B8]">
                        <CheckCircle className={cn("w-3.5 h-3.5 flex-shrink-0 mt-0.5 transition-colors",
                          isActive ? "text-blue-400" : plan.featured ? "text-blue-400" : (plan as { badgeGreen?: boolean }).badgeGreen ? "text-green-400" : "text-blue-400/50"
                        )} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className={cn(
                    "w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200",
                    isActive
                      ? "bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-[0_4px_16px_rgba(30,63,216,0.4)]"
                      : plan.featured
                        ? "bg-gradient-to-r from-blue-700 to-blue-900 text-white"
                        : (plan as { badgeGreen?: boolean }).badgeGreen
                          ? "bg-green-500/10 border border-green-500/30 text-green-400"
                          : "bg-transparent border border-[#1A2548] text-[#94A3B8]"
                  )}>
                    {plan.cta} <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <p className="text-center text-xs text-[#64748B]">
          Need individual videos?{" "}
          <strong className="text-[#94A3B8]">$65/video</strong> — script, VO, edit and thumbnail. Min 3 videos.{" "}
          <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-2">Contact us</Link>
        </p>
      </div>
    </section>
  );
}
