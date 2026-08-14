import type { Metadata } from "next";
import { PricingSection } from "@/components/pricing/PricingSection";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent YouTube automation pricing for every stage. Start with 3 videos for $197 or go all-in with the Authority Build — zero to monetized in 90 days.",
};

export default function PricingPage() {
  return (
    <>
      <PricingSection />
      <CTA />
    </>
  );
}
