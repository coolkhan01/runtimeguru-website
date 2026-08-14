import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    avatar: "U",
    name: "UK Audit",
    channel: "2.19K subscribers",
    color: "bg-blue-600",
    text: "I honestly can't say enough good things about working with Shehroz. When I started my YouTube automation channel I wasn't sure what to expect, but he made the whole process seamless.",
  },
  {
    avatar: "P",
    name: "Pit Lane",
    channel: "2.98K subscribers",
    color: "bg-blue-700",
    text: "Speedy, competent and very friendly. The quality of production was exactly what we needed to get our channel off the ground. Highly recommend.",
  },
  {
    avatar: "F",
    name: "Food Facts Canada",
    channel: "1.27K subscribers",
    color: "bg-blue-800",
    text: "Channel growing consistently since working with Runtime Gurus. The team handles everything and I literally don't have to do anything. Exactly what I wanted.",
  },
];

export default function Testimonials() {
  return (
    <section id="results" className="py-24 bg-[#06091C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/30 text-blue-300 text-xs font-medium mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Client Results
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Real Channels. Real Results.
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-xl mx-auto">
            Every result below is from a real channel we produced content for. No mock-ups.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name}
              className="group p-7 rounded-2xl bg-[#0B1230] border border-[#1A2548] hover:border-blue-700/30 transition-all duration-300 flex flex-col">
              <Quote className="w-8 h-8 text-blue-700/40 mb-4" />
              <div className="flex mb-3">
                {[1,2,3,4,5].map((s) => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-[#1A2548]">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[#64748B] text-xs">{t.channel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
