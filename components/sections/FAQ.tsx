"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "What's included in every video?",
    a: "Every video includes a full script, professional AI voiceover reviewed by a human editor, full video editing with cuts and motion graphics, a custom high-CTR thumbnail, and metadata optimization. You receive a complete, ready-to-upload video file.",
  },
  {
    q: "Do you use AI for everything?",
    a: "We use AI as a tool, not a replacement. AI assists with scripts and voiceover, but every script is refined by a human, every edit is done by a trained editor, and every thumbnail is designed by our creative team. Fully AI channels get detected and demonetized. We build channels that last.",
  },
  {
    q: "What is the 90-day guarantee exactly?",
    a: "If your channel does not reach 500 subscribers within 90 days of launching with our production, we continue creating videos for free until it does. This applies to the Growth Plan and above. Simple as that.",
  },
  {
    q: "Which plan is right for me?",
    a: "Start with the $197 Trial Pack if you have never worked with us. It is 3 videos, full production, no monthly commitment. If you're ready to launch seriously, the Growth Starter at $599/month is the most popular. The Authority Build at $4,999 is our flagship offer for those who want everything handled for them.",
  },
  {
    q: "Do I need to provide anything?",
    a: "No. We handle everything from niche selection to uploading. If you have preferences for niche, style, or tone we incorporate them. If you have no preferences, we research and recommend based on current market trends.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Monthly plans can be cancelled at any time with 7 days notice before the next billing cycle. No long-term contracts for monthly plans.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#0B1230]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/30 text-blue-300 text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Common Questions
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div key={i}
              className={cn(
                "rounded-2xl border transition-all duration-200",
                open === i ? "bg-[#06091C] border-blue-700/40" : "bg-[#06091C] border-[#1A2548] hover:border-[#243268]"
              )}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left">
                <span className={cn("font-semibold text-base transition-colors", open === i ? "text-white" : "text-[#94A3B8]")}>
                  {faq.q}
                </span>
                <ChevronDown className={cn("w-5 h-5 flex-shrink-0 text-blue-400 transition-transform duration-200", open === i && "rotate-180")} />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
