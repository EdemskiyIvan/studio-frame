"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PlaceholderMedia from "../PlaceholderMedia";

const COUNT = 15;
const DURATION = 3800; // мс на одно фото
// Порядок показа: концертный кадр (11) первым, дальше остальные
const ORDER = [11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15];
const PHOTOS = ORDER.map((n) => `/events/photo-${String(n).padStart(2, "0")}.jpg`);
const VARIANTS = ["slate", "rose", "olive", "clay", "gold", "ink"] as const;

export default function EventsGallery() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Единый rAF-таймер: он же двигает прогресс-бар (через DOM-ref, без ре-рендеров),
  // он же переключает фото — поэтому рассинхрона и лагов нет
  const barRef = useRef<HTMLSpanElement>(null);
  const progress = useRef(0);

  const resetProgress = useCallback(() => {
    progress.current = 0;
    if (barRef.current) barRef.current.style.width = "0%";
  }, []);

  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (lightbox === null) {
        progress.current += dt / DURATION;
        if (progress.current >= 1) {
          progress.current = 0;
          setActive((a) => (a + 1) % COUNT);
        }
        if (barRef.current) barRef.current.style.width = `${Math.min(progress.current, 1) * 100}%`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [lightbox]);

  const selectActive = useCallback(
    (i: number) => {
      resetProgress();
      setActive(i);
    },
    [resetProgress],
  );

  const go = useCallback(
    (dir: number) => setLightbox((cur) => (cur === null ? cur : (cur + dir + COUNT) % COUNT)),
    [],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, go]);

  return (
    <section id="events" className="overflow-hidden bg-paper-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="mx-auto text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-6xl">
            Фото с мероприятий
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-ink/55 sm:text-lg">
            Форумы, концерты, корпоративы и праздники — репортажная съёмка вживую
          </p>
        </div>
      </div>

      {/* Бесконечный авто-слайдер (coverflow) — активное фото на всю ширину блока */}
      <div className="relative mt-14 h-[240px] sm:h-[520px]">
        {PHOTOS.map((src, i) => {
          let rel = (i - active + COUNT) % COUNT;
          if (rel > COUNT / 2) rel -= COUNT;

          const abs = Math.abs(rel);
          const isActive = rel === 0;
          const spacing = 760; // px между центрами карточек
          const scale = isActive ? 1 : abs === 1 ? 0.72 : 0.55;
          const opacity = abs > 2 ? 0 : isActive ? 1 : abs === 1 ? 0.4 : 0.18;

          return (
            <button
              key={src}
              type="button"
              onClick={() => (isActive ? setLightbox(i) : selectActive(i))}
              aria-label={`Фото с мероприятия ${i + 1}`}
              className="absolute top-1/2 left-1/2 w-[min(92vw,900px)] appearance-none border-0 bg-transparent p-0 shadow-none outline-none ring-0"
              style={{
                transform: `translate(-50%, -50%) translateX(${rel * spacing}px) scale(${scale})`,
                opacity,
                zIndex: 20 - abs,
                transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.7s ease",
                pointerEvents: abs > 2 ? "none" : "auto",
              }}
            >
              <div className="relative overflow-hidden rounded-2xl border-0 shadow-none">
                <PlaceholderMedia
                  variant={VARIANTS[i % VARIANTS.length]}
                  src={src}
                  alt={`Фото с мероприятия ${i + 1}`}
                  className="aspect-video w-full"
                />
                {/* затемнение неактивных */}
                <span
                  className={`absolute inset-0 bg-black transition-opacity duration-700 ${
                    isActive ? "opacity-0" : "opacity-45"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Индикаторы с прогресс-баром автопрокрутки */}
      <div className="mt-10 flex items-center justify-center gap-2">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Перейти к фото ${i + 1}`}
            onClick={() => selectActive(i)}
            className={`h-1.5 overflow-hidden rounded-full transition-all ${
              i === active ? "w-8 bg-white/20" : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          >
            {i === active && (
              <span ref={barRef} className="block h-full w-0 rounded-full bg-accent" />
            )}
          </button>
        ))}
      </div>

      {/* Лайтбокс */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm [animation:fade-in_0.2s_ease]"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Закрыть"
            className="absolute top-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={22} />
          </button>
          <button
            type="button"
            aria-label="Предыдущее"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            aria-label="Следующее"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
          >
            <ChevronRight size={24} />
          </button>

          <div
            className="relative max-h-[85vh] w-full max-w-5xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <PlaceholderMedia
              key={PHOTOS[lightbox]}
              variant={VARIANTS[lightbox % VARIANTS.length]}
              src={PHOTOS[lightbox]}
              alt={`Фото с мероприятия ${lightbox + 1}`}
              priority
              className="aspect-[3/2] w-full [animation:fade-in_0.25s_ease]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
