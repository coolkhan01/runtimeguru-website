import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Guarantee from "@/components/sections/Guarantee";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import VideoProofs from "@/components/sections/VideoProofs";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Runtime Gurus — YouTube Automation Agency" }],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What's included in every video?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every video includes a full script, professional AI voiceover reviewed by a human editor, full video editing with cuts and motion graphics, a custom high-CTR thumbnail, and metadata optimization. You receive a complete, ready-to-upload video file.",
      },
    },
    {
      "@type": "Question",
      name: "Do you use AI for everything?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use AI as a tool, not a replacement. AI assists with scripts and voiceover, but every script is refined by a human, every edit is done by a trained editor, and every thumbnail is designed by our creative team. Fully AI channels get detected and demonetized. We build channels that last.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 90-day guarantee exactly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If your channel does not reach 500 subscribers within 90 days of launching with our production, we continue creating videos for free until it does. This applies to the Growth Plan and above.",
      },
    },
    {
      "@type": "Question",
      name: "Which plan is right for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with the $197 Trial Pack if you have never worked with us — it is 3 videos, full production, no monthly commitment. If you're ready to launch seriously, the Growth Starter at $599/month is the most popular. The Authority Build at $4,999 is our flagship offer for those who want everything handled for them.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to provide anything?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We handle everything from niche selection to uploading. If you have preferences for niche, style, or tone we incorporate them. If you have no preferences, we research and recommend based on current market trends.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Monthly plans can be cancelled at any time with 7 days notice before the next billing cycle. No long-term contracts for monthly plans.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <Stats />
      <Guarantee />
      <div className="section-divider" />
      <VideoProofs />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <Process />
      <div className="section-divider" />
      <Portfolio />
      <div className="section-divider" />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
