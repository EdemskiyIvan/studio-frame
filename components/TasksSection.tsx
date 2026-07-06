import { Layers, Megaphone, Package, Smartphone, Sparkles, Globe } from "lucide-react";
import PlaceholderMedia from "./PlaceholderMedia";

const TASKS = [
  { icon: Layers, title: "Упаковать бренд", text: "Единый визуальный образ, который выглядит дороже" },
  { icon: Smartphone, title: "Контент для соцсетей", text: "Посты, stories, Reels, VK, Telegram, Shorts" },
  { icon: Megaphone, title: "Рекламные креативы", text: "Материалы под запуск рекламы и акций" },
  { icon: Package, title: "Показать продукт", text: "Детали, фактура, эмоция вокруг продукта" },
  { icon: Sparkles, title: "Усилить личный бренд", text: "Уверенно, профессионально и живо" },
  { icon: Globe, title: "Обновить визуал сайта", text: "Главный экран, услуги, команда, портфолио" },
];

export default function TasksSection() {
  return (
    <section id="tasks" className="bg-paper-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
              Контент, который работает
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/60 sm:text-base">
              Разбираем, где будут использоваться материалы - и снимаем под конкретный сценарий,
              а не случайные кадры
            </p>
            <PlaceholderMedia
              variant="ink"
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
              alt="Фотограф во время съёмки"
              className="mt-8 hidden aspect-[4/5] w-full max-w-sm rounded-lg lg:block"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-fr">
            {TASKS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="flex min-h-[200px] flex-col items-start justify-center rounded-lg border border-line bg-paper p-6 text-left transition-colors hover:border-accent/50"
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
      </div>
    </section>
  );
}
