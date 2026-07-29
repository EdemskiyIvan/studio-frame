"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

export default function ShowreelSection() {
  const [playing, setPlaying] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const fieldRef = useRef<HTMLButtonElement>(null);
  const center = useRef({ x: 0, y: 0 });

  const update = (e: React.MouseEvent) => {
    const rect = fieldRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const enter = (e: React.MouseEvent) => {
    const rect = fieldRef.current?.getBoundingClientRect();
    if (rect) center.current = { x: rect.width / 2, y: rect.height / 2 };
    setHover(true);
    update(e);
  };

  return (
    <section id="showreel" className="bg-paper-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-6xl">
            Шоурил 2026
          </h2>
          <p className="mt-3 text-base text-ink/55 sm:text-lg">
            Собрали лучшее за год в одном ролике
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-black">
          {playing ? (
            <video
              className="aspect-video w-full bg-black"
              controls
              autoPlay
              playsInline
              poster="/showreel-cover.jpg"
            >
              <source src="/showreel.mp4" type="video/mp4" />
              Ваш браузер не поддерживает воспроизведение видео
            </video>
          ) : (
            <button
              ref={fieldRef}
              type="button"
              onClick={() => setPlaying(true)}
              onMouseMove={update}
              onMouseEnter={enter}
              onMouseLeave={() => setHover(false)}
              className="block w-full"
              aria-label="Запустить шоурил"
            >
              {/* Живая обложка — тихо крутится зациклённый muted-превью, постер как fallback */}
              <video
                className="aspect-video w-full bg-black object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/showreel-cover.jpg"
              >
                <source src="/showreel-preview.mp4" type="video/mp4" />
              </video>
              <span className="absolute inset-0 bg-black/25" />

              {/* По центру, при наведении подпрыгивает и с инерцией бегает за курсором */}
              <span
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-1/2 z-10 transition-transform duration-[450ms] ease-out will-change-transform"
                style={{
                  transform: hover
                    ? `translate3d(${pos.x - center.current.x}px, ${pos.y - center.current.y}px, 0) translate(-50%, -50%)`
                    : "translate(-50%, -50%)",
                }}
              >
                <span className="flex flex-col items-center gap-2.5">
                  <span
                    className={`flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg sm:h-20 sm:w-20 ${
                      hover ? "animate-[play-pop_450ms_ease-out]" : ""
                    }`}
                  >
                    <Play size={26} className="ml-1" fill="currentColor" />
                  </span>
                  <span
                    className={`text-sm font-semibold whitespace-nowrap text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.6)] transition-opacity duration-300 ${
                      hover ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    Смотреть шоурил
                  </span>
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
