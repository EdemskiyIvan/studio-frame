import { Building2, Gem, ShoppingBag, User, UtensilsCrossed } from "lucide-react";
import PlaceholderMedia from "./PlaceholderMedia";

const AUDIENCE = [
  {
    icon: Gem,
    variant: "gold" as const,
    title: "Бренды и продукты",
    text: "Одежда, косметика, аксессуары, lifestyle и новые коллекции",
    src: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80",
    alt: "Съёмка модной коллекции для бренда",
  },
  {
    icon: UtensilsCrossed,
    variant: "clay" as const,
    title: "Рестораны и локальные проекты",
    text: "Меню, атмосфера, мероприятия, карточки на онлайн-платформах",
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    alt: "Food-съёмка блюда для ресторана",
  },
];

const AUDIENCE_ROW_2 = [
  {
    icon: User,
    variant: "rose" as const,
    title: "Эксперты и личные бренды",
    text: "Reels, интервью, прогревы, курсы, позиционирование",
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    alt: "Портретная съёмка эксперта для личного бренда",
  },
  {
    icon: Building2,
    variant: "slate" as const,
    title: "Компании и сервисы",
    text: "Сайты, реклама, кейсы, команда, digital-коммуникация",
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80",
    alt: "Съёмка команды компании для сайта",
  },
  {
    icon: ShoppingBag,
    variant: "olive" as const,
    title: "Маркетплейсы и e-commerce",
    text: "Карточки товаров, lifestyle-контент, видеообзоры",
    src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    alt: "Предметная съёмка товара для маркетплейса",
  },
];

function AudienceCard({
  icon: Icon,
  variant,
  title,
  text,
  src,
  alt,
  index,
  className = "",
}: {
  icon: typeof User;
  variant: "gold" | "clay" | "rose" | "slate" | "olive";
  title: string;
  text: string;
  src: string;
  alt: string;
  index: number;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-lg border border-line transition-colors hover:border-accent/50 ${className}`}
    >
      <PlaceholderMedia
        variant={variant}
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

      <span className="absolute top-3 left-3 font-mono text-[10px] tracking-wide text-white/70 uppercase">
        {String(index).padStart(2, "0")}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="flex items-center gap-2.5">
          <Icon size={16} className="text-accent" />
          <h3 className="text-lg font-medium text-white">{title}</h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{text}</p>
      </div>
    </div>
  );
}

export default function ForWhomSection() {
  return (
    <section id="audience" className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
            Для кого мы снимаем
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-ink/55 sm:text-base">
            Для проектов, которым важно выглядеть профессионально и продавать через визуал
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-[1.6fr_1fr] sm:h-[480px] lg:h-[560px]">
          {AUDIENCE.map((item, i) => (
            <AudienceCard key={item.title} {...item} index={i + 1} className="aspect-[4/5] sm:aspect-auto" />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE_ROW_2.map((item, i) => (
            <AudienceCard key={item.title} {...item} index={i + 3} className="aspect-[3/4]" />
          ))}
        </div>
      </div>
    </section>
  );
}
