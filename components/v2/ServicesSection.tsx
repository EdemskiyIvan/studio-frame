import {
  Megaphone,
  Mic,
  Users,
  Radio,
  GraduationCap,
  Headphones,
  Smartphone,
  Music,
  ArrowRight,
} from "lucide-react";
import PlaceholderMedia from "../PlaceholderMedia";
import LeadButton from "./LeadButton";

const SERVICES = [
  {
    icon: Megaphone,
    variant: "slate" as const,
    title: "Рекламная съёмка для бизнеса",
    text: "Фото- и видеосъёмка вашего бизнеса, товаров и услуг с рекламными целями",
    src: "/services/reklama.jpg",
    alt: "Рекламная студийная съёмка для бизнеса",
  },
  {
    icon: Mic,
    variant: "rose" as const,
    title: "Интервью для бизнеса",
    text: "Разработка сценария, подбор эксперта и проведение интервью с целью освещения деталей вашего бизнеса",
    src: "/services/interview.jpg",
    alt: "Съёмка делового интервью с экспертом",
  },
  {
    icon: Users,
    variant: "gold" as const,
    title: "Бизнес-форумы",
    text: "Организуем фото- и видеосъёмку в день мероприятия. Делаем экспресс-монтаж — отдаём готовый материал на следующий день",
    src: "/services/forum.jpg",
    alt: "Съёмка бизнес-форума и делового мероприятия",
  },
  {
    icon: Headphones,
    variant: "ink" as const,
    title: "Подкасты",
    text: "Студийная и выездная съёмка ваших подкастов. Монтаж готового подкаста и серии рилсов",
    src: "/services/podcast.jpg",
    alt: "Студийная съёмка видеоподкаста",
  },
  {
    icon: Smartphone,
    variant: "rose" as const,
    title: "Соцсети",
    text: "Съёмка вертикальных видео (Reels, Shorts) для социальных сетей",
    src: "/services/social.jpg",
    alt: "Съёмка вертикальных видео для соцсетей",
  },
  {
    icon: Radio,
    variant: "olive" as const,
    title: "Видеотрансляции",
    text: "Проводим видеотрансляции, организуем Yandex Телемост и вебинары",
    src: "/services/stream.jpg",
    alt: "Организация онлайн-видеотрансляции",
  },
  {
    icon: GraduationCap,
    variant: "clay" as const,
    title: "Лекции и видеоуроки",
    text: "Снимем и смонтируем цикл лекций (уроков). Добавим визуализацию, инфографику и слайды",
    src: "/services/lecture.jpg",
    alt: "Съёмка лекций и обучающих видеоуроков",
  },
  {
    icon: Music,
    variant: "slate" as const,
    title: "Концерты",
    text: "Снимаем с нескольких камер, используем многоканальную звуковую запись и делаем динамичный монтаж видеоклипа",
    src: "/services/concert.jpg",
    alt: "Многокамерная съёмка концерта",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div>
          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-6xl">
            Услуги
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink/55 sm:whitespace-nowrap sm:text-lg">
            Подбираем формат под задачу — от рекламной съёмки и интервью
            <br />
            до трансляций, подкастов и концертов
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ variant, title, text, src, alt }) => (
            <LeadButton
              key={title}
              className="group flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-card text-left transition-colors hover:border-accent/50"
            >
              {/* Крупное фото сверху — главный акцент карточки */}
              <div className="relative overflow-hidden">
                <PlaceholderMedia
                  variant={variant}
                  src={src}
                  alt={alt}
                  className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Текст под фото */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-medium text-ink">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/55">{text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Оставить заявку
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </LeadButton>
          ))}

          {/* 9-я карточка — абстрактный CTA «не нашли услугу?» */}
          <div className="group relative flex flex-col justify-center overflow-hidden rounded-2xl border border-accent/40 bg-accent-soft p-7">
            {/* абстрактное свечение */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-accent/30 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-accent/15 blur-3xl"
            />

            <div className="relative">
              <span className="font-mono text-[11px] tracking-wide text-accent uppercase">
                Индивидуальный запрос
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.01em] text-ink sm:text-3xl">
                Не нашли нужную услугу?
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/60">
                Расскажите задачу — подберём формат съёмки под вас и предложим решение
              </p>

              <LeadButton className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-4 text-base font-medium text-white transition-colors hover:bg-[#e63900]">
                Обсудить задачу
                <ArrowRight size={18} />
              </LeadButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
