import type { Metadata } from "next";
import Link from "next/link";
import { Play, Film, ImageIcon, FileText, LayoutDashboard, CheckCircle2, ArrowRight } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "YouTube Automation Services: Editing, Thumbnails & Channel Management",
  description:
    "Full-stack YouTube services: automation, video editing, thumbnail design, script writing, and complete channel management for international creators and brands.",
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    title: "YouTube Automation Services: Editing, Thumbnails & Channel Management | Runtime Gurus",
    description: "Full-stack YouTube services — automation, editing, thumbnails, scripts, and channel management. One agency, every aspect of your YouTube growth.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Runtime Gurus — YouTube Automation Services" }],
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.runtimeguru.com/services#webpage",
      url: "https://www.runtimeguru.com/services",
      name: "YouTube Automation Services: Editing, Thumbnails & Channel Management | Runtime Gurus",
      isPartOf: { "@id": "https://www.runtimeguru.com/#website" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.runtimeguru.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.runtimeguru.com/services" },
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.runtimeguru.com/services#servicelist",
      name: "Runtime Gurus YouTube Services",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "Service",
            "@id": "https://www.runtimeguru.com/services#automation",
            name: "YouTube Automation",
            url: "https://www.runtimeguru.com/services#automation",
            description: "YouTube automation is the process of running a profitable YouTube channel without doing any of the work yourself. We handle every element of the content pipeline so your channel grows on autopilot.",
            provider: { "@id": "https://www.runtimeguru.com/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "Service",
            "@id": "https://www.runtimeguru.com/services#editing",
            name: "Video Editing",
            url: "https://www.runtimeguru.com/services#editing",
            description: "Professional YouTube video editing across all formats — long-form educational, documentary, talking-head, faceless narration, and short-form vertical content.",
            provider: { "@id": "https://www.runtimeguru.com/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "Service",
            "@id": "https://www.runtimeguru.com/services#thumbnails",
            name: "Thumbnail Design",
            url: "https://www.runtimeguru.com/services#thumbnails",
            description: "Scroll-stopping, emotion-driven thumbnail designs that are A/B tested and continuously optimised for click-through rate.",
            provider: { "@id": "https://www.runtimeguru.com/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "Service",
            "@id": "https://www.runtimeguru.com/services#scripts",
            name: "Script Writing",
            url: "https://www.runtimeguru.com/services#scripts",
            description: "YouTube scripts blending storytelling, psychology, and SEO to hook viewers in the first 30 seconds and maximise watch time.",
            provider: { "@id": "https://www.runtimeguru.com/#organization" },
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "Service",
            "@id": "https://www.runtimeguru.com/services#management",
            name: "Channel Management",
            url: "https://www.runtimeguru.com/services#management",
            description: "Full end-to-end management of your YouTube presence — strategy, production, publishing, analytics, and community engagement.",
            provider: { "@id": "https://www.runtimeguru.com/#organization" },
          },
        },
      ],
    },
  ],
};

const services = [
  {
    icon: Play,
    id: "automation",
    title: "YouTube Automation",
    tagline: "Build a passive income channel â€” 100% hands-off",
    description:
      "YouTube automation is the process of running a profitable YouTube channel without doing any of the work yourself. We handle every element of the content pipeline so your channel grows on autopilot.",
    points: [
      "Niche research and competitive analysis",
      "Channel branding and positioning strategy",
      "Full content production pipeline",
      "SEO-optimised titles, descriptions, and tags",
      "Upload scheduling and community posts",
      "Monthly performance reviews and strategy pivots",
    ],
    ideal: "Investors, passive income seekers, entrepreneurs who want a YouTube asset without doing the work",
    gradient: "from-red-600/10 to-transparent",
    iconColor: "text-red-400",
    iconBg: "bg-red-600/15",
    borderColor: "border-red-600/20",
  },
  {
    icon: Film,
    id: "editing",
    title: "Video Editing",
    tagline: "Cinematic edits that maximise watch time",
    description:
      "Our video editors specialise in YouTube content across all formats â€” long-form educational, documentary, talking-head, faceless narration, and short-form vertical content for Shorts and Reels.",
    points: [
      "Long-form and short-form editing",
      "Custom motion graphics and lower thirds",
      "Professional colour grading",
      "Background music and sound design",
      "Captions and multilingual subtitles",
      "48-hour standard turnaround",
    ],
    ideal: "Creators who film their own content and need professional post-production",
    gradient: "from-blue-600/10 to-transparent",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-600/15",
    borderColor: "border-blue-600/20",
  },
  {
    icon: ImageIcon,
    id: "thumbnails",
    title: "Thumbnail Design",
    tagline: "Thumbnails that demand clicks",
    description:
      "Thumbnails account for up to 70% of a video's click-through rate. Our designers create scroll-stopping, emotion-driven visuals that are A/B tested and continuously optimised for performance.",
    points: [
      "Custom concept ideation and moodboards",
      "2 unique design directions per video",
      "A/B testing recommendation support",
      "Brand kit and consistency guidelines",
      "Optimised for mobile and desktop viewports",
      "72-hour delivery with unlimited revisions",
    ],
    ideal: "Any YouTube channel looking to increase CTR and views without changing the content itself",
    gradient: "from-amber-600/10 to-transparent",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-600/15",
    borderColor: "border-amber-600/20",
  },
  {
    icon: FileText,
    id: "scripts",
    title: "Script Writing",
    tagline: "Words engineered for retention and conversions",
    description:
      "Great scripts are the foundation of a great video. Our writers blend storytelling, psychology, and SEO to produce scripts that hook viewers in the first 30 seconds and keep them watching to the end.",
    points: [
      "Powerful opening hooks and pattern interrupts",
      "Structured storytelling arc",
      "SEO keyword weaving for search visibility",
      "Tone and voice matching for your brand",
      "CTA integration and viewer conversion points",
      "Research and fact-checking included",
    ],
    ideal: "Creators who want better retention, educators, coaches, and business channels",
    gradient: "from-green-600/10 to-transparent",
    iconColor: "text-green-400",
    iconBg: "bg-green-600/15",
    borderColor: "border-green-600/20",
  },
  {
    icon: LayoutDashboard,
    id: "management",
    title: "Channel Management",
    tagline: "Your YouTube team, without the overhead",
    description:
      "Full end-to-end management of your YouTube presence. We act as your dedicated YouTube department â€” handling strategy, production, publishing, analytics, and community engagement.",
    points: [
      "Dedicated channel manager and team",
      "Weekly analytics and performance reports",
      "Community management and comment moderation",
      "Trend monitoring and reactive content planning",
      "Monthly strategy calls with your account manager",
      "Monetisation and partnership management",
    ],
    ideal: "Brands, media companies, coaches, and high-volume creators who need a full-service partner",
    gradient: "from-blue-700/10 to-transparent",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-700/15",
    borderColor: "border-blue-700/20",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(124,58,237,0.6) 0%, transparent 70%)" }} />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/30 text-blue-300 text-xs font-medium mb-6">
            Our Services
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Every YouTube Service,{" "}
            <span className="gradient-text">Under One Roof</span>
          </h1>
          <p className="text-[#94A3B8] text-xl max-w-2xl mx-auto mb-8">
            Stop juggling multiple freelancers. Runtime Gurus is your single team for every aspect of YouTube content creation and channel growth.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-200 glow-purple"
          >
            Get a Custom Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className={`p-8 rounded-2xl bg-gradient-to-r ${s.gradient} border ${s.borderColor} bg-[#0F0F1A]`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center mb-5`}>
                    <s.icon className={`w-6 h-6 ${s.iconColor}`} />
                  </div>
                  <p className="text-xs font-medium text-[#64748B] uppercase tracking-wider mb-2">{s.tagline}</p>
                  <h2 className="text-3xl font-bold text-white mb-4">{s.title}</h2>
                  <p className="text-[#94A3B8] leading-relaxed mb-5">{s.description}</p>
                  <div className="p-4 rounded-xl bg-black/20 border border-[#1E1E3A]">
                    <p className="text-xs text-[#64748B] font-medium uppercase tracking-wider mb-1">Ideal for</p>
                    <p className="text-[#94A3B8] text-sm">{s.ideal}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">What&apos;s Included</h3>
                  <ul className="space-y-3">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${s.iconColor} flex-shrink-0 mt-0.5`} />
                        <span className="text-[#94A3B8] text-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${s.iconBg} ${s.iconColor} hover:opacity-80`}
                  >
                    Get Started with {s.title} <ArrowRight className="w-4 h-4" />
                  </Link>
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
