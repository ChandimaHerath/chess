"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/classes", label: "Classes" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/gallery", label: "Gallery" },
  { href: "/somerset-country-chess-club", label: "Somerset Club" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-slate-200 bg-white/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-2xl">♞</span>
          <span className="font-display text-lg font-bold tracking-wide text-slate-900">
            Dash <span className="gold-text">Chess Academy</span>
          </span>
        </Link>

        <div className="hidden items-center gap-4 lg:flex xl:gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-gold-700"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 lg:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-slate-700 hover:bg-slate-50"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
