"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#services", label: "Услуги" },
  { href: "#about", label: "О себе" },
  { href: "#process", label: "Процесс" },
  { href: "#portfolio", label: "Работы" },
  { href: "#contacts", label: "Контакты" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-surface/50 py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-display font-bold text-sm text-gradient">
          ВП
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted hover:text-text-primary transition-colors font-display"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacts"
            className="btn-glow px-5 py-2 rounded-lg bg-accent text-white text-sm font-display font-semibold transition-all duration-300 hover:bg-accent/90"
          >
            Написать
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-text-muted hover:text-text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12"/>
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-surface/50 px-6 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-text-muted hover:text-text-primary transition-colors font-display py-1"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacts"
            onClick={() => setOpen(false)}
            className="block btn-glow px-5 py-3 rounded-lg bg-accent text-white text-sm font-display font-semibold text-center transition-all duration-300"
          >
            Написать
          </a>
        </div>
      )}
    </nav>
  );
}
