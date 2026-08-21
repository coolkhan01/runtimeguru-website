import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.runtimeguru.com"),
  title: {
    default: "Runtime Gurus — YouTube Automation Agency | Done For You Channel Growth",
    template: "%s | Runtime Gurus",
  },
  description:
    "Runtime Gurus is a professional YouTube automation agency. We handle scripts, voiceover, editing, thumbnails, and full channel management — delivering 90-day monetization results. Serving 200+ creators worldwide.",
  keywords: [
    "YouTube automation agency",
    "YouTube channel management",
    "done for you YouTube",
    "video editing agency",
    "YouTube thumbnail design",
    "YouTube script writing",
    "faceless YouTube channel",
    "YouTube growth service",
    "channel monetization",
    "YouTube content creation",
    "passive income YouTube",
    "Runtime Gurus",
  ],
  authors: [{ name: "Runtime Gurus", url: "https://www.runtimeguru.com" }],
  creator: "Runtime Gurus",
  publisher: "Runtime Gurus",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.runtimeguru.com",
    siteName: "Runtime Gurus",
    title: "Runtime Gurus — YouTube Automation Agency | Done For You Channel Growth",
    description:
      "Professional YouTube automation agency. Scripts, voiceover, editing, thumbnails, and channel management — 90-day monetization guarantee. 200+ channels grown.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Runtime Gurus Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Runtime Gurus — YouTube Automation Agency",
    description: "Done for you YouTube channel growth. 90-day monetization guarantee. 200+ creators served.",
    creator: "@Shehrozfaiq7",
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
  alternates: {
    canonical: "https://www.runtimeguru.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.runtimeguru.com/#organization",
      name: "Runtime Gurus",
      url: "https://www.runtimeguru.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.runtimeguru.com/logo.png",
        width: 512,
        height: 512,
      },
      description: "Professional YouTube automation agency providing done for you channel growth, video editing, script writing, thumbnail design, and channel management services.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rawalpindi",
        addressCountry: "PK",
      },
      telephone: "+923368856575",
      sameAs: [
        "https://www.instagram.com/runtimegurus/",
        "https://linkedin.com/in/youtubeautomation",
        "https://twitter.com/Shehrozfaiq7",
        "https://discord.gg/KFVH2pGsBC",
        "https://ytjobs.co/talent/profile/381182",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+923368856575",
        contactType: "Customer Service",
        availableLanguage: ["English", "Urdu", "Arabic"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://www.runtimeguru.com/#website",
      url: "https://www.runtimeguru.com",
      name: "Runtime Gurus",
      publisher: { "@id": "https://www.runtimeguru.com/#organization" },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
