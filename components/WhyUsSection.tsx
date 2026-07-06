import { Layers, Lightbulb, ListChecks, Smartphone, Target, Wand2 } from "lucide-react";

const NBSP = " ";

const REASONS = [
  {
    icon: Target,
    title: "Думаем задачами бизнеса",
    text: `Сначала понимаем, где будет использоваться контент и${NBSP}какую задачу он должен решить`,
  },
  {
    icon: Lightbulb,
    title: "Помогаем с идеей",
    text: `Если готовой концепции нет, предложим визуальную логику, референсы и${NBSP}сценарии`,
  },
  {
    icon: Layers,
    title: "Контент под разные площадки",
    text: `Один съёмочный день даёт материалы для сайта, соцсетей, рекламы и${NBSP}презентаций`,
  },
  {
    icon: Wand2,
    title: "Разные форматы",
    text: `Снимаем продукты, людей, интерьер, процессы, мероприятия и${NBSP}короткие видео`,
  },
  {
    icon: ListChecks,
    title: "Понятный процесс",
    text: `Согласовываем этапы, список кадров, тайминг и${NBSP}финальные материалы заранее`,
  },
  {
    icon: Smartphone,
    title: "Адаптируем под digital",
    text: `Готовим контент так, чтобы его было удобно использовать в${NBSP}соцсетях и${NBSP}рекламе`,
  },
];

export default function WhyUsSection() {
  return (
    <section className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
          Почему с{NBSP}нами удобно работать
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-fr lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="flex min-h-[190px] flex-col items-start justify-center rounded-lg border border-line bg-paper-soft p-6 transition-colors hover:border-accent/50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent-soft text-accent">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-base font-medium text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/55">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
