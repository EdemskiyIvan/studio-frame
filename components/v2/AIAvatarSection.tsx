import { Sparkles, ArrowRight, Repeat, Clock, TrendingUp } from "lucide-react";
import PlaceholderMedia from "../PlaceholderMedia";
import CornerBrackets from "../CornerBrackets";

const BENEFITS = [
  {
    icon: Repeat,
    title: "Одна оцифровка — множество роликов",
    text: "Достаточно один раз оцифровать вас или вашего эксперта",
  },
  {
    icon: Clock,
    title: "Экономия времени",
    text: "Новые видео генерируются автоматически, без вашего личного участия",
  },
  {
    icon: TrendingUp,
    title: "Больше контента",
    text: "Увеличиваете объёмы производства видеоматериалов",
  },
];

export default function AIAvatarSection() {
  return (
    <section id="ai-avatar" className="scroll-mt-20 bg-paper-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="relative order-last overflow-hidden rounded-2xl border border-line lg:order-first">
          <PlaceholderMedia
            variant="ink"
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1100&q=80"
            alt="Цифровой двойник эксперта — ИИ-аватар"
            className="aspect-[4/5] w-full sm:aspect-[4/3] lg:aspect-[4/5]"
          />
          <CornerBrackets />
          <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-medium text-white">
            <Sparkles size={13} />
            ИИ-технология
          </span>
        </div>

        <div>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-4 py-1.5 text-xs font-medium text-accent">
            <Sparkles size={13} />
            Новая услуга · ИИ Аватар
          </span>

          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
            Создаём цифрового двойника вас или вашего эксперта
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/65">
            ИИ-услуга позволяет многократно использовать вашего цифрового двойника для создания
            новых видеоматериалов. Достаточно один раз провести оцифровку — дальше новые ролики
            генерируются автоматически, без вашего личного участия. Это экономит время и
            увеличивает объёмы производства контента.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            {BENEFITS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-start gap-4 rounded-lg border border-line bg-card p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                  <Icon size={18} />
                </span>
                <div>
                  <h3 className="text-base font-medium text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/55">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#cta"
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-medium text-white transition-colors hover:bg-[#e63900]"
          >
            Заказать ИИ-аватар
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
