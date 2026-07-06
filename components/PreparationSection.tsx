import { Check } from "lucide-react";

const ITEMS = [
  "Идею съёмки",
  "Moodboard",
  "Референсы",
  "Сценарии для видео",
  "Shot-list",
  "Рекомендации по локации",
  "Рекомендации по образам",
  "Рекомендации по реквизиту",
  "Структуру контента под соцсети",
  "Список форматов для рекламы",
];

export default function PreparationSection() {
  return (
    <section className="bg-paper-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
            Съёмка начинается не&nbsp;с&nbsp;камеры, а&nbsp;с&nbsp;подготовки
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/55 sm:text-lg">
            Чтобы результат был сильным, важно заранее понять задачу, аудиторию, площадки размещения
            и&nbsp;визуальный язык бренда
          </p>
          <div className="mt-8 rounded-lg border border-accent/20 bg-accent-soft p-6">
            <p className="text-sm leading-relaxed text-ink/70">
              Такой подход помогает получить не&nbsp;просто красивые кадры, а&nbsp;набор материалов,
              который можно использовать в&nbsp;маркетинге системно
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          {ITEMS.map((item) => (
            <div key={item} className="flex items-center gap-3 border-b border-line py-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                <Check size={13} />
              </span>
              <span className="text-sm text-ink/75 sm:text-base">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
