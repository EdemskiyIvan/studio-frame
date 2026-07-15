"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "ИИ Аватар", href: "#ai-avatar" },
  { label: "Кейсы", href: "#portfolio" },
  { label: "Процесс", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

function Wordmark() {
  return (
    <span className="text-base font-semibold tracking-tight text-ink sm:text-lg">
      Telnoff Media <span className="text-accent">PRO</span>duction
    </span>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="h-2 w-2 bg-accent" />
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wide text-ink/55 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#ai-avatar"
            className="inline-flex items-center gap-1.5 rounded-md border border-accent/40 px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
          >
            <Sparkles size={14} />
            ИИ Аватар
          </a>
          <a
            href="#cta"
            className="inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#e63900]"
          >
            Оставить заявку
          </a>
        </div>

        <button
          aria-label="Открыть меню"
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-5 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-mono text-xs uppercase tracking-wide text-ink/70 hover:bg-white/[0.05] hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-accent px-5 py-3 text-center text-sm font-medium text-white"
            >
              Оставить заявку
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
