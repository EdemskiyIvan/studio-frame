"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import PlaceholderMedia from "./PlaceholderMedia";
import CornerBrackets from "./CornerBrackets";
import AutoTabs from "./AutoTabs";

const SHOWCASE = [
  {
    label: "Соцсети",
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    alt: "Съёмка контента для социальных сетей",
  },
  {
    label: "Реклама",
    src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=1200&q=80",
    alt: "Студийная съёмка для рекламной кампании",
  },
  {
    label: "Маркетплейс",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
    alt: "Предметная съёмка товара для маркетплейса",
  },
  {
    label: "Личный бренд",
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80",
    alt: "Портретная съёмка для личного бренда",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % SHOWCASE.length);
    }, 3500);
    return () => clearInterval(id);
  }, [active]);

  const current = SHOWCASE[active];

  return (
    <section id="top" className="flex min-h-[100svh] flex-col justify-center bg-paper px-5 pt-24 pb-12 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        <div>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-black/[0.03] px-4 py-1.5 text-xs text-ink/70">
            <Sparkles size={14} className="text-accent" />
            Студия съёмки контента
          </span>

          <h1 className="text-4xl leading-[1.05] font-bold tracking-[-0.03em] text-ink sm:text-6xl lg:text-[72px] lg:leading-[1.05]">
            Профессиональная съёмка контента для брендов, бизнеса и экспертов
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/60 sm:text-lg">
            Создаём фото- и видеоконтент для социальных сетей, рекламы, сайтов, маркетплейсов
            и личного бренда - от идеи и подготовки до готовых материалов
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#e63900]"
            >
              Обсудить съёмку
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-ink/15 px-7 py-4 text-sm font-medium text-ink transition-colors hover:border-ink/30 hover:bg-black/[0.03]"
            >
              Портфолио
            </a>
          </div>
        </div>

        <div>
          <div className="relative">
            <PlaceholderMedia
              key={current.src}
              variant="ink"
              src={current.src}
              alt={current.alt}
              priority
              className="aspect-[4/5] w-full rounded-2xl [animation:fade-in_0.6s_ease] lg:aspect-auto lg:h-[52vh] lg:max-h-[560px]"
            />
            <CornerBrackets />

            <div className="absolute top-5 right-5 rounded-lg border border-white/10 bg-black/50 px-3.5 py-2.5 backdrop-blur-md">
              <p className="font-mono text-[10px] tracking-wide text-paper/50 uppercase">Отснято</p>
              <p className="mt-0.5 text-sm font-semibold text-paper">500+ проектов</p>
            </div>
          </div>

          <div className="mt-6">
            <AutoTabs
              items={SHOWCASE.map((s) => s.label)}
              active={active}
              onSelect={setActive}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
