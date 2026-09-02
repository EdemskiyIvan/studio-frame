"use client";

import { useEffect, useMemo, useState } from "react";
import { Play, X, Plus } from "lucide-react";
import PlaceholderMedia from "../PlaceholderMedia";
import { MEDIA_BASE } from "@/lib/media";

type Work = {
  slug: string;
  title: string;
  category: string;
  tag: string;
  variant: "slate" | "gold" | "rose" | "olive" | "clay" | "ink";
};

const CATEGORIES = [
  "Все",
  "Реклама и промо",
  "Корпоративные",
  "Мероприятия",
  "Клипы",
  "Концерты",
];

const WORKS: Work[] = [
  { slug: "vk-fest", title: "VK Fest", category: "Мероприятия", tag: "Мероприятие", variant: "rose" },
  { slug: "epdm", title: "Завод ЭПДМ", category: "Реклама и промо", tag: "Промышленное видео", variant: "olive" },
  { slug: "range-rover", title: "Range Rover LUMMA", category: "Реклама и промо", tag: "Автопромо", variant: "ink" },
  { slug: "klass-engineering", title: "Класс Инжиниринг", category: "Корпоративные", tag: "Корпоративный фильм", variant: "slate" },
  { slug: "mot", title: "Концерт Мота", category: "Концерты", tag: "Концертная съёмка", variant: "ink" },
  { slug: "megamade", title: "МЕГАМЕЙД", category: "Клипы", tag: "Рекламный клип", variant: "gold" },
  { slug: "gazprom", title: "Газпром межрегионгаз", category: "Корпоративные", tag: "Фильм о компании", variant: "slate" },
  { slug: "bentley", title: "Bentley", category: "Реклама и промо", tag: "Автопромо", variant: "ink" },
  { slug: "neva", title: "Нева", category: "Реклама и промо", tag: "Рекламный клип", variant: "clay" },
  { slug: "gusein", title: "Гусейн Гасанов", category: "Клипы", tag: "Персональный ролик", variant: "rose" },
  { slug: "interview", title: "Интервью", category: "Корпоративные", tag: "Формат интервью", variant: "slate" },
  { slug: "fashion", title: "Fashion-практика", category: "Реклама и промо", tag: "Fashion-съёмка", variant: "gold" },
  { slug: "arian-dali", title: "ARIAN DALI", category: "Клипы", tag: "Музыкальный клип", variant: "rose" },
  { slug: "tachki", title: "Авто · Аэроклуб", category: "Реклама и промо", tag: "Автопромо", variant: "clay" },
  { slug: "wolf", title: "Wolf Tsunami Picnic", category: "Мероприятия", tag: "Мероприятие", variant: "olive" },
  { slug: "grani", title: "Грани · Москва", category: "Клипы", tag: "Музыкальный клип", variant: "ink" },
  { slug: "ex-forma", title: "Экс Форма", category: "Корпоративные", tag: "Промо компании", variant: "slate" },
  { slug: "kaluga", title: "Калуга", category: "Мероприятия", tag: "Мероприятие", variant: "gold" },
  { slug: "bloggers", title: "Блогеры России", category: "Клипы", tag: "Спецпроект", variant: "rose" },
  { slug: "first-day", title: "First Day", category: "Мероприятия", tag: "Мероприятие", variant: "clay" },
];

const STEP = 6;

const posterSrc = (slug: string) => `${MEDIA_BASE}/portfolio/${slug}.jpg`;
const videoSrc = (slug: string) => `${MEDIA_BASE}/portfolio/${slug}.mp4`;

export default function PortfolioSection() {
  const [cat, setCat] = useState("Все");
  const [visible, setVisible] = useState(STEP);
  const [open, setOpen] = useState<string | null>(null);
  const active = open ? WORKS.find((w) => w.slug === open) ?? null : null;

  const filtered = useMemo(
    () => (cat === "Все" ? WORKS : WORKS.filter((w) => w.category === cat)),
    [cat],
  );
  const shown = filtered.slice(0, visible);

  function selectCat(c: string) {
    setCat(c);
    setVisible(STEP);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="portfolio" className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-6xl">
          Портфолио
        </h2>

        {/* Табы по категориям */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => selectCat(c)}
              className={`rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                c === cat
                  ? "bg-accent text-white"
                  : "border border-line bg-card text-ink/60 hover:border-ink/30 hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {shown.map((w) => (
            <button
              key={w.slug}
              type="button"
              onClick={() => setOpen(w.slug)}
              className="group relative block overflow-hidden rounded-2xl border border-line bg-black text-left [animation:fade-in_0.4s_ease]"
            >
              <PlaceholderMedia
                variant={w.variant}
                src={posterSrc(w.slug)}
                alt={w.title}
                className="aspect-video w-full transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                  <Play size={26} className="ml-0.5" fill="currentColor" />
                </span>
              </span>

              <span className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 p-5">
                <span className="font-mono text-[11px] tracking-wide text-accent uppercase">
                  {w.tag}
                </span>
                <span className="text-xl font-semibold text-white sm:text-2xl">{w.title}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Кнопка «Ещё кейсы» */}
        {visible < filtered.length && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setVisible((v) => v + STEP)}
              className="group inline-flex items-center gap-2 rounded-md border border-line bg-card px-8 py-4 text-sm font-medium text-ink transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Plus size={17} className="text-accent transition-transform group-hover:rotate-90" />
              Ещё кейсы
              <span className="text-ink/40">({filtered.length - visible})</span>
            </button>
          </div>
        )}
      </div>

      {/* Лайтбокс */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm [animation:fade-in_0.2s_ease]"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label="Закрыть"
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <div
            className="w-full max-w-5xl overflow-hidden rounded-2xl bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              key={active.slug}
              className="aspect-video w-full bg-black"
              controls
              autoPlay
              playsInline
              poster={posterSrc(active.slug)}
            >
              <source src={videoSrc(active.slug)} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
