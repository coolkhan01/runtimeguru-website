import type { Metadata } from "next";
import { PricingSection } from "@/components/pricing/PricingSection";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "YouTube Agency Pricing — Packages from $197",
  description: "Transparent YouTube automation pricing for every stage. Start with 3 videos for $197 or go all-in with the Authority Build — zero to monetized in 90 days.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    url: "/pricing",
    title: "YouTube Agency Pricing — Packages from $197 | Runtime Gurus",
    description: "Transparent YouTube automation pricing. Trial Pack from $197, Growth Starter at $599/month, and Authority Build for full-service channel management.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Runtime Gurus — YouTube Automation Agency Pricing" }],
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.runtimeguru.com/pricing#webpage",
      url: "https://www.runtimeguru.com/pricing",
      name: "YouTube Agency Pricing — Packages from $197 | Runtime Gurus",
      isPartOf: { "@id": "https://www.runtimeguru.com/#website" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.runtimeguru.com" },
        { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.runtimeguru.com/pricing" },
      ],
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <PricingSection />
      <CTA />
    </>
  );
}
