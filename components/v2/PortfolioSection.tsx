"use client";

import { useState } from "react";
import { Play, ArrowRight } from "lucide-react";
import PlaceholderMedia from "../PlaceholderMedia";
import CornerBrackets from "../CornerBrackets";

type Case = {
  button: string;
  tag: string;
  title: string;
  client: string;
  description: string;
  points: string[];
  poster: string;
  video: string;
  alt: string;
  variant: "slate" | "gold" | "rose" | "olive" | "clay" | "ink";
};

const CASES: Case[] = [
  {
    button: "Завод ЭПДМ",
    tag: "Рекламная съёмка",
    title: "Рекламная съёмка завода ЭПДМ",
    client: "Производство резиновой крошки · «Газ Голдер»",
    description:
      "Рекламный ролик о производстве, который раскрывает уникальные особенности проекта: масштаб цехов, технологический цикл и качество продукции.",
    points: [
      "Показали полный цикл производства резиновой крошки",
      "Съёмка на действующем заводе с соблюдением ТБ",
      "Динамичный монтаж под рекламные цели",
    ],
    poster: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
    video: "/cases/epdm.mp4",
    alt: "Рекламная съёмка производства на заводе ЭПДМ",
    variant: "slate",
  },
  {
    button: "Класс Инжиниринг",
    tag: "Корпоративный фильм",
    title: "Корпоративный видеофильм на юбилей",
    client: "Компания «Класс Инжиниринг»",
    description:
      "Юбилейный фильм об истории и команде компании: интервью с сотрудниками, съёмка производства и офиса, архивные материалы в едином стиле.",
    points: [
      "Сценарий и режиссура юбилейного фильма",
      "Серия интервью с руководством и командой",
      "Финальный монтаж под показ на мероприятии",
    ],
    poster: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    video: "/cases/class-engineering.mp4",
    alt: "Корпоративный видеофильм для компании Класс Инжиниринг",
    variant: "gold",
  },
  {
    button: "Этнофорум 2026",
    tag: "Мероприятие",
    title: "Этнофорум 2026",
    client: "Государственный музей «Кунсткамера», СПб",
    description:
      "Фото- и видеосъёмка форума в день мероприятия. Экспресс-монтаж и передача готового материала на следующий день.",
    points: [
      "Многокамерная съёмка в день мероприятия",
      "Экспресс-монтаж — материал на следующий день",
      "Фотоотчёт и видеоролик для музея",
    ],
    poster: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    video: "/cases/ethnoforum.mp4",
    alt: "Съёмка Этнофорума 2026 для музея Кунсткамера",
    variant: "olive",
  },
  {
    button: "12 видеолекций",
    tag: "Лекции",
    title: "Серия из двенадцати видеолекций",
    client: "Государственный музей «Кунсткамера», СПб",
    description:
      "Цикл из двенадцати образовательных видеолекций с визуализацией, инфографикой и слайдами — готовый обучающий контент для музея.",
    points: [
      "Студийная съёмка цикла из 12 лекций",
      "Инфографика, слайды и визуализация",
      "Единый стиль оформления серии",
    ],
    poster: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1200&q=80",
    video: "/cases/lectures.mp4",
    alt: "Серия видеолекций для музея Кунсткамера",
    variant: "clay",
  },
  {
    button: "Рушель Блаво",
    tag: "Подкасты · Reels",
    title: "Подкасты и обучающие видеорилсы",
    client: "Доктор медицинских наук, психотерапевт Рушель Блаво",
    description:
      "Серия подкастов и обучающих видеорилсов для эксперта: студийная съёмка, монтаж выпусков и нарезка вертикальных роликов для соцсетей.",
    points: [
      "Съёмка серии подкастов в студии",
      "Монтаж выпусков и серии рилсов",
      "Контент для соцсетей и продвижения",
    ],
    poster: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
    video: "/cases/blavo.mp4",
    alt: "Съёмка подкастов и видеорилсов для эксперта",
    variant: "rose",
  },
  {
    button: "Концерт Мота",
    tag: "Концерт",
    title: "Концерт Мота в A2 Green Concert",
    client: "Популярный музыкант Мот · A2 Green Concert",
    description:
      "Многокамерная съёмка концерта с многоканальной звуковой записью и динамичным монтажом видеоклипа.",
    points: [
      "Съёмка с нескольких камер",
      "Многоканальная запись звука",
      "Динамичный монтаж концертного видеоклипа",
    ],
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
    video: "/cases/mot.mp4",
    alt: "Многокамерная съёмка концерта Мота в A2 Green Concert",
    variant: "ink",
  },
];

export default function PortfolioSection() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const current = CASES[active];

  function selectCase(i: number) {
    setActive(i);
    setPlaying(false);
  }

  return (
    <section id="portfolio" className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-6xl">
            Портфолио и кейсы
          </h2>
          <p className="max-w-md text-base leading-relaxed text-ink/55 sm:text-lg">
            Конкретные проекты — от рекламы производства и корпоративных фильмов до лекций,
            подкастов и концертов
          </p>
        </div>

        {/* Кнопки кейсов */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {CASES.map((c, i) => (
            <button
              key={c.button}
              onClick={() => selectCase(i)}
              className={`rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                i === active
                  ? "bg-accent text-white"
                  : "border border-line bg-card text-ink/60 hover:border-ink/30 hover:text-ink"
              }`}
            >
              {c.button}
            </button>
          ))}
        </div>

        {/* Блок с описанием и видео для выбранного кейса */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="relative overflow-hidden rounded-2xl border border-line bg-black">
            {playing ? (
              <video
                key={current.video}
                className="aspect-video w-full bg-black"
                controls
                autoPlay
                playsInline
                poster={current.poster}
              >
                <source src={current.video} type="video/mp4" />
                Ваш браузер не поддерживает воспроизведение видео.
              </video>
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                className="group relative block w-full"
                aria-label={`Смотреть видео: ${current.title}`}
              >
                <PlaceholderMedia
                  key={current.poster}
                  variant={current.variant}
                  src={current.poster}
                  alt={current.alt}
                  className="aspect-video w-full [animation:fade-in_0.4s_ease]"
                />
                <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15" />
                <CornerBrackets />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:scale-110">
                    <Play size={24} className="ml-0.5" fill="currentColor" />
                  </span>
                </span>
              </button>
            )}
          </div>

          <div className="flex flex-col justify-center [animation:fade-in_0.4s_ease]" key={current.title}>
            <span className="inline-flex w-fit items-center rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
              {current.tag}
            </span>
            <h3 className="mt-4 text-2xl font-semibold text-ink sm:text-3xl">{current.title}</h3>
            <p className="mt-2 text-sm font-medium text-ink/50">{current.client}</p>
            <p className="mt-5 text-base leading-relaxed text-ink/65">{current.description}</p>

            <ul className="mt-6 flex flex-col gap-2.5">
              {current.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-ink/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              ))}
            </ul>

            <a
              href="#cta"
              className="group mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#e63900]"
            >
              Хочу похожий проект
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
