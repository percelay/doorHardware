"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/90 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo / Wordmark */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="w-2 h-8 bg-[#FF8C00] block" />
          <span className="text-sm font-black tracking-widest uppercase leading-none">
            Door<br />Hardware
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-bold tracking-widest uppercase text-black/60 hover:text-black transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-xs font-black tracking-widest uppercase bg-black text-white px-5 py-2.5 hover:bg-[#FF8C00] transition-colors duration-200"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-black/10">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-xs font-bold tracking-widest uppercase text-black/60 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-xs font-black tracking-widest uppercase bg-black text-white px-5 py-3 text-center hover:bg-[#FF8C00] transition-colors"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
