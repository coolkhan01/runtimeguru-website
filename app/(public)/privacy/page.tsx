import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Runtime Gurus Privacy Policy — how we collect, use, and protect your personal information.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us when you:
• Fill out our contact or inquiry form (name, email, company, YouTube channel URL, message)
• Book a strategy call via our scheduling link
• Communicate with us via WhatsApp or email

We do not collect sensitive personal information such as payment card numbers — billing is handled by third party processors.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:
• Respond to your inquiries and provide the services you requested
• Send you project updates, proposals, and communications related to your account
• Improve our services and website experience
• Send occasional marketing emails if you have opted in (you may unsubscribe at any time)
• Comply with legal obligations`,
  },
  {
    title: "3. Information Sharing",
    content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:
• Trusted service providers who assist us in operating our website and delivering services (e.g., email platforms, scheduling tools)
• Law enforcement or regulatory authorities if required by law

All third party partners are bound by confidentiality agreements.`,
  },
  {
    title: "4. Data Retention",
    content: `We retain your personal information for as long as necessary to provide our services and fulfil the purposes outlined in this policy. When data is no longer needed, we securely delete or anonymise it. You may request deletion of your data at any time by contacting us.`,
  },
  {
    title: "5. Cookies",
    content: `Our website uses cookies and similar tracking technologies to improve your browsing experience, analyse website traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of certain parts of our website.`,
  },
  {
    title: "6. Security",
    content: `We implement industry standard security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "7. Third Party Links",
    content: `Our website may contain links to third party websites such as YouTube, LinkedIn, Instagram, and Discord. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.`,
  },
  {
    title: "8. Your Rights",
    content: `Depending on your location, you may have the right to:
• Access the personal information we hold about you
• Request correction of inaccurate data
• Request deletion of your personal data
• Object to or restrict processing of your data
• Data portability

To exercise any of these rights, please contact us at the details below.`,
  },
  {
    title: "9. Children's Privacy",
    content: `Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a minor, please contact us immediately.`,
  },
  {
    title: "10. Changes to This Policy",
    content: `We may update this Privacy Policy periodically. When we do, we will revise the date at the top of this page. Continued use of our website after changes constitutes your acceptance of the updated policy.`,
  },
  {
    title: "11. Contact Us",
    content: `If you have any questions about this Privacy Policy or how we handle your data, please contact us:

Runtime Gurus
Rawalpindi, Pakistan
Phone / WhatsApp: +92 336 885 6575
Instagram: @runtimegurus`,
  },
];

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/30 text-blue-300 text-xs font-medium mb-6">
            Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-[#64748B] text-sm">Last updated: June 2026</p>
          <p className="text-[#94A3B8] mt-4 leading-relaxed">
            Runtime Gurus (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy.
            This policy explains how we collect, use, and safeguard your information when you use our website and services.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl bg-[#0B1230] border border-[#1A2548]">
              <h2 className="text-white font-semibold text-lg mb-3">{s.title}</h2>
              <p className="text-[#94A3B8] text-sm leading-relaxed whitespace-pre-line">{s.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 text-white font-semibold text-sm hover:from-blue-600 hover:to-blue-800 transition-all duration-200">
            Contact Us With Questions
          </Link>
        </div>
      </div>
    </section>
  );
}
