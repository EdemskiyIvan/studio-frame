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

const SERVICES = [
  {
    icon: Megaphone,
    variant: "slate" as const,
    title: "Рекламная съёмка для бизнеса",
    text: "Фото- и видеосъёмка вашего бизнеса, товаров и услуг с рекламными целями",
    src: "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&w=1000&q=80",
    alt: "Рекламная студийная съёмка для бизнеса",
  },
  {
    icon: Mic,
    variant: "rose" as const,
    title: "Интервью для бизнеса",
    text: "Разработка сценария, подбор эксперта и проведение интервью с целью освещения деталей вашего бизнеса",
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80",
    alt: "Съёмка делового интервью с экспертом",
  },
  {
    icon: Users,
    variant: "gold" as const,
    title: "Бизнес-форумы",
    text: "Организуем фото- и видеосъёмку в день мероприятия. Делаем экспресс-монтаж — отдаём готовый материал на следующий день",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    alt: "Съёмка бизнес-форума и делового мероприятия",
  },
  {
    icon: Radio,
    variant: "olive" as const,
    title: "Видеотрансляции",
    text: "Проводим видеотрансляции, организуем Yandex Телемост и вебинары",
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=80",
    alt: "Организация онлайн-видеотрансляции",
  },
  {
    icon: GraduationCap,
    variant: "clay" as const,
    title: "Лекции и видеоуроки",
    text: "Снимем и смонтируем цикл лекций (уроков). Добавим визуализацию, инфографику и слайды",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
    alt: "Съёмка лекций и обучающих видеоуроков",
  },
  {
    icon: Headphones,
    variant: "ink" as const,
    title: "Видеоподкасты",
    text: "Студийная и выездная съёмка ваших подкастов. Монтаж готового подкаста и серии рилсов",
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1000&q=80",
    alt: "Студийная съёмка видеоподкаста",
  },
  {
    icon: Smartphone,
    variant: "rose" as const,
    title: "Соцсети",
    text: "Съёмка вертикальных видео (Reels, Shorts) для социальных сетей",
    src: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1000&q=80",
    alt: "Съёмка вертикальных видео для соцсетей",
  },
  {
    icon: Music,
    variant: "slate" as const,
    title: "Концерты",
    text: "Снимаем с нескольких камер, используем многоканальную звуковую запись и делаем динамичный монтаж видеоклипа",
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=80",
    alt: "Многокамерная съёмка концерта",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-6xl">
            Услуги
          </h2>
          <p className="max-w-md text-base leading-relaxed text-ink/55 sm:text-lg">
            Подбираем формат под задачу — от рекламной съёмки и интервью до трансляций,
            подкастов и концертов
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, variant, title, text, src, alt }) => (
            <a
              key={title}
              href="#cta"
              className="group flex flex-col overflow-hidden rounded-xl border border-line bg-card transition-colors hover:border-accent/50"
            >
              {/* Описание блоком над фото */}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-accent">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 text-lg font-medium text-ink">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/55">{text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  Оставить заявку
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>

              <PlaceholderMedia
                variant={variant}
                src={src}
                alt={alt}
                className="aspect-[16/10] w-full transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
