import { ArrowRight, PlayCircle, BadgeCheck, Clock, Radio } from "lucide-react";
import PlaceholderMedia from "../PlaceholderMedia";
import CornerBrackets from "../CornerBrackets";

const TRUST = [
  { icon: BadgeCheck, text: "Индивидуальный подход к каждому проекту" },
  { icon: Clock, text: "Экспресс-монтаж материала в день съёмки" },
  { icon: Radio, text: "Стабильные онлайн-трансляции" },
];

export default function HeroSection() {
  return (
    <section
      id="top"
      className="flex min-h-[100svh] flex-col justify-center bg-paper px-5 pt-28 pb-14 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div>
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-xs text-ink/70">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Видеопродакшн полного цикла · СПб · Москва
          </span>

          <h1 className="text-5xl leading-[1.02] font-bold tracking-[-0.03em] text-ink sm:text-6xl lg:text-[80px] lg:leading-[0.98]">
            Профессиональная видеосъёмка для брендов, бизнеса и экспертов
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/65 sm:text-xl">
            Используем индивидуальный подход к каждому проекту. Создаём фото- и видеоконтент,
            делаем экспресс-монтаж материала в день съёмки, организуем качественную и стабильную
            online-трансляцию.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-medium text-white transition-colors hover:bg-[#e63900]"
            >
              Обсудить съёмку
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#showreel"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-8 py-4 text-base font-medium text-ink transition-colors hover:border-ink/40 hover:bg-white/[0.04]"
            >
              <PlayCircle size={18} />
              Смотреть шоурил
            </a>
          </div>
        </div>

        {/* Блок о Максе — фото и информация для доверия */}
        <div className="relative overflow-hidden rounded-2xl border border-line bg-card">
          <div className="relative">
            <PlaceholderMedia
              variant="ink"
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1000&q=80"
              alt="Макс Тельнов — режиссёр-оператор Telnoff Media PROduction"
              priority
              className="aspect-[4/3] w-full"
            />
            <CornerBrackets />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent p-6">
              <p className="font-mono text-[11px] tracking-wide text-white/60 uppercase">
                Основатель · режиссёр-оператор
              </p>
              <p className="mt-1 text-2xl font-semibold text-white">Макс Тельнов</p>
            </div>
          </div>

          <div className="p-6 sm:p-7">
            <ul className="flex flex-col gap-3">
              {TRUST.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent-soft text-accent">
                    <Icon size={14} />
                  </span>
                  <span className="text-sm leading-relaxed text-ink/75">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-6">
              <div>
                <p className="text-2xl font-semibold text-ink">10+</p>
                <p className="mt-1 text-xs text-ink/50">лет в продакшене</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-ink">500+</p>
                <p className="mt-1 text-xs text-ink/50">проектов снято</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-ink">24 ч</p>
                <p className="mt-1 text-xs text-ink/50">до готового материала</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
