const steps = [
  { num: "01", title: "Research",     desc: "Identify winning niches and viral topics using real data, not guesswork." },
  { num: "02", title: "Script",       desc: "AI-assisted, human-refined scripts built for retention and watch time." },
  { num: "03", title: "Voiceover",    desc: "Professional voice production reviewed for pacing and clarity." },
  { num: "04", title: "Editing",      desc: "Cinematic cuts, motion graphics, and retention-focused pacing." },
  { num: "05", title: "Thumbnail",    desc: "High-CTR thumbnail design tested against competitor formats." },
  { num: "06", title: "Upload",       desc: "Scheduled uploads with metadata and SEO optimization." },
  { num: "07", title: "Optimization", desc: "CTR and retention analysis with action plans every 2 weeks." },
  { num: "08", title: "Monetization", desc: "Revenue channel activation and long-term growth strategy." },
];

export default function Process() {
  return (
    <section id="workflow" className="py-24 bg-[#0B1230]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/30 text-blue-300 text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Our Process
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            The Production Pipeline
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
            Every video goes through an 8-step process. You approve, we execute. Nothing goes live without your sign-off.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => (
            <div key={step.num}
              className="group p-6 rounded-2xl bg-[#06091C] border border-[#1A2548] hover:border-blue-700/40 hover:bg-[#0B1230] transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center mb-4">
                <span className="text-white text-xs font-bold">{step.num}</span>
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
              <p className="text-[#64748B] text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
