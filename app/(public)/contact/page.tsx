import type { Metadata } from "next";
import { Mail, Clock, Globe2, MessageSquare, Phone } from "lucide-react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Book a Free Strategy Call",
  description: "Get in touch with Runtime Gurus. Book a free strategy call, request a quote, or ask us anything about YouTube automation and our services.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Book a Free Strategy Call | Runtime Gurus",
    description: "Book a free YouTube strategy call with Runtime Gurus. Get a custom growth plan for your channel — no commitment required.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Runtime Gurus — Book a Free Strategy Call" }],
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.runtimeguru.com/contact#webpage",
      url: "https://www.runtimeguru.com/contact",
      name: "Book a Free Strategy Call | Runtime Gurus",
      isPartOf: { "@id": "https://www.runtimeguru.com/#website" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.runtimeguru.com" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.runtimeguru.com/contact" },
      ],
    },
  ],
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "runtimeguru1@gmail.com",
    href: "mailto:runtimeguru1@gmail.com",
    color: "text-blue-400",
    bg: "bg-blue-600/10",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+92 3335082452",
    href: "https://wa.me/923335082452",
    color: "text-green-400",
    bg: "bg-green-600/10",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
    color: "text-amber-400",
    bg: "bg-amber-600/10",
  },
  {
    icon: Globe2,
    label: "Location",
    value: "Rawalpindi, Pakistan",
    href: null,
    color: "text-blue-400",
    bg: "bg-blue-600/10",
  },
  {
    icon: MessageSquare,
    label: "Free Strategy Call",
    value: "30 minutes, no obligation",
    href: "https://calendly.com/shehrozfaiq/discovery-call-youtube-automation",
    color: "text-blue-400",
    bg: "bg-blue-600/10",
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/30 text-blue-300 text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Get in Touch
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5">
            Let&apos;s Grow Your{" "}
            <span className="gradient-text">YouTube Channel</span>
          </h1>
          <p className="text-[#94A3B8] text-xl">
            Fill in the form below or email us directly. We&apos;ll get back to you within 24 hours with a tailored recommendation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-3">Start a Conversation</h2>
              <p className="text-[#94A3B8] text-sm leading-relaxed">
                Whether you&apos;re ready to start or just exploring, we&apos;d love to hear about your goals. Our team will review your submission and reach out with a personalised plan.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, href, color, bg }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-xl bg-[#0B1230] border border-[#1A2548]">
                  <div className={`w-10 h-10 rounded-lg ${bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <div>
                    <p className="text-[#64748B] text-xs mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                        className={`font-medium text-sm ${color} hover:underline`}>{value}</a>
                    ) : (
                      <p className="text-white font-medium text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-blue-700/5 border border-blue-700/20">
              <h3 className="text-white font-semibold mb-3">What happens next?</h3>
              <ol className="space-y-2.5">
                {[
                  "We review your submission same day",
                  "A team member reaches out with tailored advice",
                  "We schedule your free 30 min strategy call",
                  "You receive a custom proposal within 24hrs",
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-2.5 text-sm text-[#94A3B8]">
                    <span className="w-5 h-5 rounded-full bg-blue-700/20 text-blue-300 text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
