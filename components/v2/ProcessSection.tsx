const STEPS = [
  {
    title: "Заявка",
    text: "Вы оставляете заявку на сайте или пишете нам напрямую. Быстро отвечаем и уточняем детали задачи",
  },
  {
    title: "Брифинг",
    text: "Обсуждаем задачу, цели, аудиторию и площадки размещения — чтобы точно понимать, какой результат нужен",
  },
  {
    title: "Подбор формата",
    text: "Предлагаем оптимальный формат под задачу: реклама, интервью, трансляция, подкаст, лекции или концерт",
  },
  {
    title: "Сценарий / концепция",
    text: "Разрабатываем сценарий и визуальную концепцию, готовим референсы и структуру будущих материалов",
  },
  {
    title: "Стоимость работы",
    text: "Фиксируем объём работ, сроки и прозрачную стоимость проекта — без скрытых доплат",
  },
  {
    title: "Подготовка к съёмке",
    text: "Согласуем локацию, оборудование, тайминг, список кадров и всё необходимое для съёмочного дня",
  },
  {
    title: "Съёмочный день",
    text: "Снимаем по согласованному плану на современном оборудовании, оставляя пространство для живых кадров",
  },
  {
    title: "Отбор материалов",
    text: "Отбираем лучшие дубли и кадры, готовим материал к монтажу и обработке",
  },
  {
    title: "Монтаж / ретушь",
    text: "Монтируем видео, обрабатываем фото, добавляем графику и звук. При необходимости — экспресс-монтаж в день съёмки",
  },
  {
    title: "Передача готового контента",
    text: "Отдаём готовые материалы в нужных форматах для соцсетей, рекламы, сайта и презентаций",
  },
  {
    title: "Сопровождение после съёмки",
    text: "Помогаем с правками, адаптацией под площадки и остаёмся на связи после сдачи проекта",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="px-5 py-24 sm:px-8 sm:py-32"
      style={{ backgroundColor: "#141414" }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-6xl">
            Процесс работы
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/55">
            Сопровождаем проект от&nbsp;заявки до&nbsp;готовых материалов, чтобы съёмка была
            понятной и&nbsp;управляемой на&nbsp;каждом этапе
          </p>
        </div>

        <div className="mt-14">
          {STEPS.map((step, i) => (
            <div
              key={step.title}
              className="group grid grid-cols-[auto_1fr] gap-5 border-t border-line py-7 sm:gap-8 sm:py-8"
            >
              <div className="flex items-start">
                <span className="font-mono text-2xl font-semibold text-accent sm:text-3xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-8">
                <h3 className="text-xl font-medium text-ink sm:w-64 sm:shrink-0">{step.title}</h3>
                <p className="max-w-xl text-base leading-relaxed text-ink/55">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
