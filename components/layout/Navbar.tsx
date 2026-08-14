"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#workflow", label: "Process" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#portfolio", label: "Results" },
  { href: "/#faq", label: "FAQ" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled ? "bg-[#06091C]/95 backdrop-blur-md border-b border-[#1A2548] py-3" : "bg-transparent py-5"
    )}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Runtime Gurus" width={36} height={36} className="rounded-lg ring-1 ring-blue-700/60 glow-purple-sm" />
          <span className="font-bold text-lg tracking-tight">
            <span className="text-white">Runtime</span>
            <span className="gradient-text"> Gurus</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-white bg-[#1A2548]"
                    : "text-[#94A3B8] hover:text-white hover:bg-[#1A2548]/50"
                )}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 text-white text-sm font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-200 glow-purple-sm hover:scale-105 active:scale-95">
            Book Free Call
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#1A2548] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#1A2548] bg-[#06091C]/98 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  pathname === link.href ? "text-white bg-[#1A2548]" : "text-[#94A3B8] hover:text-white hover:bg-[#1A2548]/50"
                )}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact"
              className="mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 text-white text-sm font-semibold text-center hover:from-blue-600 hover:to-blue-800 transition-all duration-200">
              Book Free Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
