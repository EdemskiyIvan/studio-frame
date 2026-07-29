"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const SERVICES = [
  { label: "Рекламная съёмка", href: "#services" },
  { label: "Интервью для бизнеса", href: "#services" },
  { label: "Бизнес-форумы", href: "#services" },
  { label: "Видеотрансляции", href: "#services" },
  { label: "Лекции и видеоуроки", href: "#services" },
  { label: "Подкасты", href: "#services" },
  { label: "Соцсети (Reels, Shorts)", href: "#services" },
  { label: "Концерты", href: "#services" },
  { label: "ИИ Аватар", href: "#ai-avatar" },
];

const NAV_LINKS = [
  { label: "ИИ Аватар", href: "#ai-avatar" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
];

function openLeadForm() {
  window.dispatchEvent(new Event("open-lead-form"));
}

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
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="relative flex w-full items-center justify-between px-5 py-4 sm:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="h-2 w-2 bg-accent" />
          <Wordmark />
        </a>

        <nav className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-7 lg:flex">
          {/* Услуги — дропдаун */}
          <div className="relative" onMouseEnter={openMenu} onMouseLeave={closeMenu}>
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1 font-mono text-xs tracking-wide text-ink/55 uppercase transition-colors hover:text-ink"
            >
              Услуги
              <ChevronDown
                size={13}
                className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`absolute top-full left-1/2 w-64 -translate-x-1/2 pt-4 transition-all duration-200 ${
                servicesOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-1 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-xl border border-line bg-paper/95 p-2 shadow-xl backdrop-blur-md">
                {SERVICES.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    onClick={() => setServicesOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-ink/70 transition-colors hover:bg-white/[0.05] hover:text-ink"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs tracking-wide text-ink/55 uppercase transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={openLeadForm}
            className="inline-flex items-center rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#e63900]"
          >
            Оставить заявку
          </button>
        </div>

        <button
          aria-label="Открыть меню"
          className="text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-5 pb-6 lg:hidden">
          <nav className="flex flex-col gap-1 pt-4">
            {/* Услуги — раскрывающийся список */}
            <button
              type="button"
              onClick={() => setMobileServices((v) => !v)}
              className="flex items-center justify-between rounded-lg px-2 py-3 font-mono text-xs tracking-wide text-ink/70 uppercase hover:bg-white/[0.05] hover:text-ink"
            >
              Услуги
              <ChevronDown
                size={15}
                className={`transition-transform ${mobileServices ? "rotate-180" : ""}`}
              />
            </button>
            {mobileServices && (
              <div className="mb-1 flex flex-col border-l border-line pl-3">
                {SERVICES.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-2.5 text-sm text-ink/60 hover:text-ink"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 font-mono text-xs tracking-wide text-ink/70 uppercase hover:bg-white/[0.05] hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openLeadForm();
              }}
              className="mt-2 rounded-md bg-accent px-5 py-3 text-center text-sm font-medium text-white"
            >
              Оставить заявку
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
