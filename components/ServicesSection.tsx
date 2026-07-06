import { Camera, Gem, Sparkles, UtensilsCrossed, Video } from "lucide-react";
import PlaceholderMedia from "./PlaceholderMedia";

const SERVICES = [
  {
    icon: Camera,
    variant: "slate" as const,
    title: "Контент-съёмка для соцсетей",
    text: "Фото и видео для регулярного ведения Instagram, VK, Telegram, Reels и Shorts",
    tags: ["Фото", "Reels", "Stories", "Обложки"],
    src: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1000&q=80",
    alt: "Съёмка контента для социальных сетей",
  },
  {
    icon: Gem,
    variant: "gold" as const,
    title: "Съёмка для брендов и продуктов",
    text: "Визуальная упаковка товара, коллекции или новой линейки",
    tags: ["Предметная", "Lifestyle", "Модели", "Видеообзоры"],
    src: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=80",
    alt: "Съёмка коллекции для бренда",
  },
  {
    icon: Sparkles,
    variant: "rose" as const,
    title: "Съёмка для экспертов",
    text: "Контент для личного бренда, блога, прогревов и профессиональной коммуникации",
    tags: ["Портреты", "Видео-визитка", "Интервью", "Экспертные ролики"],
    src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80",
    alt: "Портретная съёмка эксперта",
  },
  {
    icon: UtensilsCrossed,
    variant: "clay" as const,
    title: "Ресторанная и food-съёмка",
    text: "Контент для ресторанов, кафе, баров, доставок и гастропроектов",
    tags: ["Блюда", "Интерьер", "Команда", "Меню"],
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80",
    alt: "Food-съёмка блюда для ресторана",
  },
  {
    icon: Video,
    variant: "ink" as const,
    title: "Видео для рекламы и презентаций",
    text: "Короткие ролики для рекламы, сайта, соцсетей и коммерческих материалов",
    tags: ["Рекламный ролик", "Промо", "Backstage", "Вертикальные форматы"],
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1000&q=80",
    alt: "Видеопродакшн для рекламы",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
            Форматы съёмки
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-ink/55 sm:text-base">
            Подбираем формат под задачу - от быстрой контент-съёмки до полноценного продакшна
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {SERVICES.map(({ icon: Icon, variant, title, text, tags, src, alt }, i) => (
            <div
              key={title}
              className={`group overflow-hidden rounded-lg border border-line transition-colors hover:border-accent/50 ${
                i === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <PlaceholderMedia
                variant={variant}
                src={src}
                alt={alt}
                className={`w-full transition-transform duration-500 group-hover:scale-[1.03] ${
                  i === 0 ? "aspect-[16/7]" : "aspect-[16/10]"
                }`}
              />
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-2.5">
                  <Icon size={16} className="text-accent" />
                  <h3 className="text-lg font-medium text-ink">{title}</h3>
                </div>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink/55">{text}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-black/[0.04] px-2.5 py-1 text-xs text-ink/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
