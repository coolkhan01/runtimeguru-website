import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon, LinkedInIcon, TwitterXIcon, DiscordIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";

const services = [
  { label: "YouTube Automation", href: "/services#automation" },
  { label: "Video Editing",      href: "/services#editing" },
  { label: "Thumbnail Design",   href: "/services#thumbnails" },
  { label: "Script Writing",     href: "/services#scripts" },
  { label: "Channel Management", href: "/services#management" },
];

const company = [
  { label: "About Us",    href: "/about" },
  { label: "Our Results", href: "/#portfolio" },
  { label: "Pricing",     href: "/pricing" },
  { label: "Contact",     href: "/contact" },
];

const social = [
  { Icon: InstagramIcon, href: "https://www.instagram.com/runtimegurus/",              label: "Instagram" },
  { Icon: LinkedInIcon,  href: "https://linkedin.com/in/youtubeautomation",             label: "LinkedIn" },
  { Icon: TwitterXIcon,  href: "https://twitter.com/Shehrozfaiq7",                     label: "Twitter / X" },
  { Icon: DiscordIcon,   href: "https://discord.gg/KFVH2pGsBC",                        label: "Discord" },
  { Icon: WhatsAppIcon,  href: "https://wa.me/923368856575",                            label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1A2548] bg-[#06091C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Runtime Gurus" width={36} height={36} className="rounded-lg ring-1 ring-blue-700/60" />
              <span className="font-bold text-lg">
                <span className="text-white">Runtime</span>
                <span className="gradient-text"> Gurus</span>
              </span>
            </Link>
            <p className="text-[#64748B] text-sm leading-relaxed mb-6">
              We handle scripts, voiceover, editing, thumbnails, and full channel management so you build passive income without touching a single video.
            </p>
            <div className="space-y-2">
              <a href="https://wa.me/923368856575" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#64748B] hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                +92 336 885 6575
              </a>
              <div className="flex items-center gap-2 text-sm text-[#64748B]">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                Rawalpindi, Pakistan
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-[#64748B] hover:text-blue-400 text-sm transition-colors duration-200">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-[#64748B] hover:text-blue-400 text-sm transition-colors duration-200">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h4 className="text-white font-semibold mb-5">Connect With Us</h4>
            <div className="flex flex-wrap gap-3 mb-8">
              {social.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-[#0B1230] border border-[#1A2548] flex items-center justify-center text-[#64748B] hover:text-blue-400 hover:border-blue-700/50 transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-700/10 to-blue-900/10 border border-blue-700/20">
              <p className="text-sm text-[#94A3B8] mb-3">Ready to scale your channel?</p>
              <Link href="/contact"
                className="inline-block w-full text-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-700 to-blue-900 text-white text-sm font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-200">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="section-divider my-10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#64748B]">
          <p>© {new Date().getFullYear()} Runtime Gurus. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
