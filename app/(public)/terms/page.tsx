import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Runtime Gurus Terms of Service — the rules and conditions governing use of our YouTube automation services.",
  robots: { index: true, follow: true },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing our website, booking a consultation, or purchasing any service from Runtime Gurus, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`,
  },
  {
    title: "2. Services Provided",
    content: `Runtime Gurus provides YouTube automation and content production services including but not limited to:
• Video editing and post-production
• Script writing and research
• Thumbnail design
• Voiceover production
• Channel management and strategy

The specific scope of services for each client is defined in the service agreement or proposal accepted prior to commencement of work.`,
  },
  {
    title: "3. Payment Terms",
    content: `• All prices are quoted in US Dollars (USD)
• Payment for monthly plans is due at the start of each billing cycle
• The Trial Pack ($197) is a one time payment, non-refundable after video 2 is delivered
• The Authority Build ($4,999) is payable upfront for the full 90 day engagement
• Late payments may result in suspension of services
• We reserve the right to adjust pricing with 30 days notice for existing monthly clients`,
  },
  {
    title: "4. Cancellation and Refunds",
    content: `Monthly Plans: You may cancel at any time with 7 days written notice before your next billing date. No refunds are issued for the current billing period.

Trial Pack: If you are not satisfied after the first video is delivered, you may request a full refund before video 2 begins production. No refunds after video 2.

Authority Build: Due to the intensive resource commitment, this engagement is non-refundable once production has commenced. However, we guarantee continued production until your channel goals are met.`,
  },
  {
    title: "5. Client Responsibilities",
    content: `As a client, you agree to:
• Provide accurate information about your channel, goals, and preferences
• Respond to communication requests within 48 hours to avoid production delays
• Review and approve content within 3 business days of delivery
• Ensure you own or have rights to any materials you provide to us
• Comply with YouTube's Terms of Service for your channel`,
  },
  {
    title: "6. Intellectual Property",
    content: `Upon full payment, all delivered content (videos, scripts, thumbnails, and assets) becomes your property. Runtime Gurus retains the right to showcase the work in our portfolio unless you request otherwise in writing.

You grant us a non-exclusive licence to use your channel name and content samples for marketing purposes. This can be revoked at any time with written notice.`,
  },
  {
    title: "7. The 90 Day Monetization Guarantee",
    content: `The 90 Day Guarantee applies to the Authority Build package and Growth Plan. The guarantee states that we will continue producing content at no additional cost if your channel does not reach 500 subscribers within 90 days of launch.

The guarantee is void if:
• You fail to publish videos on the agreed schedule
• You make significant unsanctioned changes to the channel
• You do not provide necessary approvals within 3 business days
• Your channel violates YouTube Community Guidelines`,
  },
  {
    title: "8. Limitation of Liability",
    content: `Runtime Gurus is not liable for:
• YouTube algorithm changes or policy updates that affect channel performance
• Channel demonetisation or strikes caused by content you provided or approved
• Indirect, incidental, or consequential damages arising from our services
• Revenue loss or business interruption

Our total liability to you for any claim shall not exceed the amount paid by you in the 3 months preceding the claim.`,
  },
  {
    title: "9. Confidentiality",
    content: `Both parties agree to keep confidential any proprietary information shared during the course of the engagement. This includes business strategies, client lists, content ideas, and financial information. This obligation survives termination of the agreement.`,
  },
  {
    title: "10. Governing Law",
    content: `These Terms of Service are governed by the laws of Pakistan. Any disputes arising from these terms shall first be attempted to be resolved through good faith negotiation. If unresolved, disputes shall be subject to binding arbitration.`,
  },
  {
    title: "11. Changes to Terms",
    content: `We reserve the right to modify these terms at any time. Updated terms will be posted on this page with a revised date. Continued use of our services after changes constitutes acceptance of the new terms. We will notify active clients of material changes via email or WhatsApp.`,
  },
  {
    title: "12. Contact",
    content: `For questions about these Terms of Service, please contact:

Runtime Gurus
Rawalpindi, Pakistan
Phone / WhatsApp: +92 336 885 6575
Instagram: @runtimegurus`,
  },
];

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-700/10 border border-blue-700/30 text-blue-300 text-xs font-medium mb-6">
            Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-[#64748B] text-sm">Last updated: June 2026</p>
          <p className="text-[#94A3B8] mt-4 leading-relaxed">
            Please read these Terms of Service carefully before using Runtime Gurus services.
            These terms govern your use of our website and the services we provide.
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
