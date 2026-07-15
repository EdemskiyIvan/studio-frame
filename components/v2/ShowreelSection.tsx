"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import PlaceholderMedia from "../PlaceholderMedia";
import CornerBrackets from "../CornerBrackets";

export default function ShowreelSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="showreel" className="bg-paper-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-6xl">
            Шоурил
          </h2>
          <p className="max-w-md text-base leading-relaxed text-ink/55 sm:text-lg">
            Краткая нарезка наших работ — реклама, мероприятия, интервью, концерты и трансляции
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-2xl border border-line bg-black">
          {playing ? (
            // Собственный встроенный плеер — без рекламы. Положите файл в /public/showreel.mp4
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
              type="button"
              onClick={() => setPlaying(true)}
              className="group relative block w-full"
              aria-label="Запустить шоурил"
            >
              <PlaceholderMedia
                variant="ink"
                src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80"
                alt="Превью шоурила Telnoff Media PROduction"
                className="aspect-video w-full"
              />
              <span className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />
              <CornerBrackets />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-24 sm:w-24">
                  <Play size={30} className="ml-1" fill="currentColor" />
                </span>
              </span>
              <span className="absolute bottom-5 left-5 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                Смотреть шоурил · 2:00
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
