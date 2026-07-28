import {
  Unbounded,
  Onest,
  Playfair_Display,
  Montserrat,
  Golos_Text,
  Sofia_Sans,
} from "next/font/google";

const unbounded = Unbounded({ subsets: ["latin", "cyrillic"] });
const onest = Onest({ subsets: ["latin", "cyrillic"] });
const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"] });
const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });
const golos = Golos_Text({ subsets: ["latin", "cyrillic"] });
const sofia = Sofia_Sans({ subsets: ["latin", "cyrillic"] });

const PAIRS = [
  {
    id: 1,
    name: "Unbounded × Onest",
    note: "Дисплейный геометрик + чистый гротеск. Смело и современно.",
    display: unbounded,
    body: onest,
  },
  {
    id: 2,
    name: "Playfair Display × Onest",
    note: "Элегантный серифный заголовок + нейтральный текст. Премиально.",
    display: playfair,
    body: onest,
  },
  {
    id: 3,
    name: "Montserrat × Golos Text",
    note: "Классика, деловито и максимально читаемо.",
    display: montserrat,
    body: golos,
  },
  {
    id: 4,
    name: "Sofia Sans × Onest",
    note: "Динамичный узкий гротеск в заголовке + гротеск в тексте.",
    display: sofia,
    body: onest,
  },
];

export default function FontsPreview() {
  return (
    <div className="min-h-screen bg-[#100E15] px-5 py-16 text-[#f4f3f1] sm:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold sm:text-3xl">Варианты шрифтовых пар</h1>
        <p className="mt-2 text-[#f4f3f1]/50">
          Выбери номер пары — применю её ко всему /v2.
        </p>

        <div className="mt-12 flex flex-col gap-6">
          {PAIRS.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:p-9"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff4100] text-sm font-bold text-white">
                  {p.id}
                </span>
                <div>
                  <p className="font-semibold">{p.name}</p>
                  <p className="text-sm text-[#f4f3f1]/45">{p.note}</p>
                </div>
              </div>

              <h2
                style={p.display.style}
                className="text-4xl leading-[1.05] font-bold tracking-[-0.02em] sm:text-[56px] sm:leading-[1.02]"
              >
                Профессиональная видеосъёмка
              </h2>
              <p
                style={p.display.style}
                className="mt-3 text-2xl font-semibold tracking-[-0.01em] sm:text-4xl"
              >
                для <span className="text-[#ff4100]">брендов</span>
              </p>
              <p
                style={p.body.style}
                className="mt-6 max-w-xl text-[18px] leading-relaxed text-[#f4f3f1]/65"
              >
                Мы используем индивидуальный подход к каждому проекту. Создаем фото- и
                видеоконтент. Делаем экспресс монтаж материала в день съемки.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
