"use client";

import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";
import PlaceholderMedia from "./PlaceholderMedia";
import AutoTabs from "./AutoTabs";

const CATEGORIES = ["Все", "Бренды", "Эксперты", "Рестораны", "Продукты", "Видео", "Соцсети"];

const ITEMS = [
  {
    category: "Бренды",
    variant: "gold" as const,
    src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=900&q=80",
    alt: "Съёмка коллекции для бренда",
  },
  {
    category: "Продукты",
    variant: "olive" as const,
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    alt: "Предметная съёмка товара",
  },
  {
    category: "Эксперты",
    variant: "rose" as const,
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    alt: "Портретная съёмка эксперта",
  },
  {
    category: "Рестораны",
    variant: "clay" as const,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    alt: "Food-съёмка блюда",
  },
  {
    category: "Видео",
    variant: "ink" as const,
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
    alt: "Видеопродакшн",
    video: true,
  },
  {
    category: "Бренды",
    variant: "slate" as const,
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80",
    alt: "Съёмка витрины бренда",
  },
  {
    category: "Эксперты",
    variant: "gold" as const,
    src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=900&q=80",
    alt: "Портретная съёмка для личного бренда",
  },
  {
    category: "Бренды",
    variant: "rose" as const,
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    alt: "Lifestyle-съёмка бренда",
  },
  {
    category: "Рестораны",
    variant: "clay" as const,
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    alt: "Съёмка блюда для меню",
  },
  {
    category: "Соцсети",
    variant: "slate" as const,
    src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=900&q=80",
    alt: "Контент для Reels и Stories",
  },
  {
    category: "Соцсети",
    variant: "olive" as const,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    alt: "Съёмка контента для соцсетей",
  },
  {
    category: "Видео",
    variant: "ink" as const,
    src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=900&q=80",
    alt: "Съёмка рекламного ролика",
    video: true,
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState(0);
  const activeCategory = CATEGORIES[active];
  const visible = activeCategory === "Все" ? ITEMS : ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="bg-paper-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">Портфолио</h2>
          <p className="max-w-sm text-sm leading-relaxed text-ink/55 sm:text-base">
            Примеры съёмок для брендов, бизнеса, экспертов и digital-проектов
          </p>
        </div>

        <div className="mt-8">
          <AutoTabs items={CATEGORIES} active={active} onSelect={setActive} />
        </div>

        {visible.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {visible.map((item, i) => (
              <div
                key={`${item.category}-${i}`}
                className="group relative overflow-hidden rounded-lg border border-line transition-colors hover:border-accent/50"
              >
                <PlaceholderMedia
                  variant={item.variant}
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[4/5] w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
                {item.video && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                      <Play size={18} className="ml-0.5 text-white" fill="currentColor" />
                    </span>
                  </span>
                )}
                <span className="absolute bottom-3 left-3 rounded-full bg-black/40 px-2.5 py-1 text-[10px] tracking-wide text-white/80 uppercase backdrop-blur-sm">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-sm text-ink/50">
            Мы регулярно обновляем портфолио. Больше примеров работ можно получить по запросу - отправим
            подборку под&nbsp;вашу задачу
          </p>
        )}

        <div className="mt-10">
          <a
            href="#cta"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#e63900]"
          >
            Хочу похожую съёмку
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
