"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import PlaceholderMedia from "../PlaceholderMedia";

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
              poster="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80"
            >
              <source src="/showreel.mp4" type="video/mp4" />
              Ваш браузер не поддерживает воспроизведение видео.
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
              <PlaceholderMedia
                variant="ink"
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80"
                alt="Превью шоурила Telnoff Media PROduction"
                className="aspect-video w-full"
              />

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
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg sm:h-20 sm:w-20 ${
                    hover ? "animate-[play-pop_450ms_ease-out]" : ""
                  }`}
                >
                  <Play size={26} className="ml-1" fill="currentColor" />
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
