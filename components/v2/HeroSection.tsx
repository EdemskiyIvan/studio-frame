import RotatingWord from "./RotatingWord";
import LeadButton from "./LeadButton";
import { MEDIA_BASE } from "@/lib/media";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pt-28 pb-14 sm:px-8"
      style={{ backgroundColor: "#141414" }}
    >
      {/* Фоновый объём: тонкие вертикальные линии + тёплое свечение */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Линии на весь блок, без CSS-маски (mask-image ненадёжен между браузерами) */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 132px)",
          }}
        />

        {/* Затухание линий к краям — обычная заливка цветом фона поверх,
            без masking, поэтому рендерится одинаково везде */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 65% at 22% 50%, transparent 0%, transparent 35%, #141414 85%)",
          }}
        />

        {/* Тёплое свечение под заголовком — даёт глубину, цвет фирменный */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 12% 88%, rgba(255,65,0,0.10) 0%, rgba(255,65,0,0.035) 40%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <h1 className="text-4xl leading-[1.12] font-bold tracking-[-0.03em] text-ink sm:text-5xl lg:text-[56px]">
            Профессиональная видеосъёмка
          </h1>

          <p
            className="-mt-[3px] flex flex-wrap items-center gap-x-3 text-4xl leading-[1.12] font-bold tracking-[-0.03em] sm:text-5xl lg:text-[56px]"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            <span className="text-ink">для</span>
            <RotatingWord />
          </p>

          <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-ink/65">
            Мы используем индивидуальный подход к каждому проекту. Создаем фото и видеоконтент.
            Делаем экспресс монтаж материала в день съемки. Организуем качественную и стабильную
            online трансляцию
          </p>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <LeadButton className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-8 py-4 text-base font-medium text-white transition-colors hover:bg-[#e63900]">
              Обсудить проект
            </LeadButton>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-8 py-4 text-base font-medium text-ink transition-colors hover:border-ink/40 hover:bg-white/[0.04]"
            >
              Портфолио
            </a>
          </div>
        </div>
      </div>

      {/* Орбита-глобус: на мобиле — под кнопками в потоке, на десктопе — фоном справа */}
      <video
        src={`${MEDIA_BASE}/hero-orbit.mp4`}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        className="pointer-events-none relative left-1/2 z-0 mt-8 h-[95vw] w-[145vw] max-w-none -translate-x-1/2 object-cover object-center opacity-90 mix-blend-lighten lg:absolute lg:top-1/2 lg:left-auto lg:right-[-4%] lg:mt-0 lg:h-auto lg:w-[62vw] lg:translate-x-0 lg:object-contain lg:-translate-y-1/2"
      />
    </section>
  );
}
