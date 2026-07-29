import RotatingWord from "./RotatingWord";
import LeadButton from "./LeadButton";

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-5 pt-28 pb-14 sm:px-8"
      style={{ backgroundColor: "#141414" }}
    >
      {/* Орбита-глобус: фоновое видео справа, отдельным слоем — не влияет на текст */}
      <video
        src="/hero-orbit.mp4?v=5"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-[-4%] z-0 w-[68vw] max-w-none -translate-y-1/2 object-contain opacity-90 mix-blend-lighten lg:w-[56vw]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="max-w-2xl">
          <h1 className="text-4xl leading-[1.05] font-bold tracking-[-0.03em] text-ink sm:text-5xl lg:text-[56px] lg:leading-[1.02]">
            Профессиональная видеосъёмка
          </h1>

          <p
            className="mt-2 flex flex-wrap items-center gap-x-3 text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-[56px] lg:leading-[1.02]"
            style={{ fontFamily: "var(--font-display), sans-serif" }}
          >
            <span className="text-ink">для</span>
            <RotatingWord />
          </p>

          <p className="mt-7 max-w-xl text-[18px] leading-relaxed text-ink/65">
            Мы используем индивидуальный подход к каждому проекту. Создаем фото- и видеоконтент
            Делаем экспресс монтаж материала в день съемки. Организуем качественную и стабильную
            online трансляцию
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
    </section>
  );
}
