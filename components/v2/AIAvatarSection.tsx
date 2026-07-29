import { Sparkles, ArrowRight, Repeat, Clock, TrendingUp } from "lucide-react";

const BENEFITS = [
  {
    icon: Repeat,
    title: "Одна оцифровка — тысячи роликов",
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
        <div className="order-last lg:order-first">
          <video
            src="/ai-avatar.mp4?v=5"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
        </div>

        <div>
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-4 py-1.5 text-xs font-medium text-accent">
            <Sparkles size={13} />
            ИИ Аватар
          </span>

          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
            Создаём цифрового двойника вас или вашего эксперта
          </h2>

          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink/60">
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
