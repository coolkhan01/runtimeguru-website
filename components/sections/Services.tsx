import Link from "next/link";
import { Play, Film, ImageIcon, FileText, LayoutDashboard, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Film,
    id: "editing",
    title: "Video Editing",
    tagline: "Professional, binge-worthy content",
    description:
      "Cinematic edits that retain viewers and boost watch time. From talking heads to faceless automation content, we handle all styles and formats.",
    features: ["Long-form & short-form", "Custom motion graphics", "Color grading", "Captions & subtitles", "48hr turnaround"],
    color: "from-blue-600/20 to-blue-900/10",
    borderColor: "border-blue-600/30 hover:border-blue-500/60",
    iconBg: "bg-blue-600/20",
    iconColor: "text-blue-400",
    badge: null,
    badgeColor: "",
  },
  {
    icon: ImageIcon,
    id: "thumbnails",
    title: "Thumbnail Design",
    tagline: "Click-worthy visuals that convert",
    description:
      "High-CTR thumbnail designs engineered to stand out in search results. A/B tested concepts with proven click-through improvement.",
    features: ["Custom illustrated concepts", "A/B testing variants", "Brand consistency", "72hr delivery", "Unlimited revisions"],
    color: "from-amber-600/20 to-amber-900/10",
    borderColor: "border-amber-600/30 hover:border-amber-500/60",
    iconBg: "bg-amber-600/20",
    iconColor: "text-amber-400",
    badge: null,
    badgeColor: "",
  },
  {
    icon: FileText,
    id: "scripts",
    title: "Script Writing",
    tagline: "Words that keep viewers watching",
    description:
      "Compelling scripts optimised for audience retention, written to match your tone of voice and optimized with psychological hooks and structured storytelling.",
    features: ["Hooks & pattern interrupts", "SEO keyword integration", "Tone-matched writing", "Research & fact-checking", "Unlimited revisions"],
    color: "from-green-600/20 to-green-900/10",
    borderColor: "border-green-600/30 hover:border-green-500/60",
    iconBg: "bg-green-600/20",
    iconColor: "text-green-400",
    badge: null,
    badgeColor: "",
  },
  {
    icon: LayoutDashboard,
    id: "management",
    title: "Channel Management",
    tagline: "Full-service channel operations",
    description:
      "End to end management of your YouTube presence: community management, analytics reporting, growth strategy, and trend capitalisation.",
    features: ["Analytics & reporting", "Community management", "Upload scheduling", "Trend monitoring", "Monthly strategy calls"],
    color: "from-blue-600/20 to-blue-900/10",
    borderColor: "border-blue-600/30 hover:border-blue-500/60",
    iconBg: "bg-blue-600/20",
    iconColor: "text-blue-400",
    badge: "Premium",
    badgeColor: "bg-blue-600/20 text-blue-300 border-blue-600/30",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/30 text-blue-300 text-xs font-medium mb-4">
            What We Do
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Everything Your Channel Needs,{" "}
            <span className="gradient-text">Done For You</span>
          </h2>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto">
            A complete suite of YouTube services delivered by a dedicated team of specialists, so you never have to juggle freelancers again.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${service.color} border ${service.borderColor} transition-all duration-300 group`}
            >
              {service.badge && (
                <span className={`absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
                  {service.badge}
                </span>
              )}
              <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-5`}>
                <service.icon className={`w-6 h-6 ${service.iconColor}`} />
              </div>
              <div className="mb-1 text-xs font-medium text-[#64748B] uppercase tracking-wider">
                {service.tagline}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#94A3B8]">
                    <span className={`w-1.5 h-1.5 rounded-full ${service.iconBg} ${service.iconColor} flex-shrink-0`}
                      style={{ background: "currentColor" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services#${service.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#94A3B8] group-hover:text-white transition-colors"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}

          {/* CTA card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-700/20 to-blue-900/20 border border-blue-700/40 flex flex-col items-center justify-center text-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center glow-purple-sm">
              <ArrowRight className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Need a Custom Package?</h3>
              <p className="text-[#94A3B8] text-sm">
                We build bespoke solutions for agencies, brands, and high-volume creators.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold text-sm hover:from-blue-600 hover:to-blue-800 transition-all duration-200 hover:scale-105"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
