const STEPS = [
  {
    title: "Обсуждаем задачу",
    text: "Вы рассказываете, для чего нужен контент: соцсети, реклама, сайт, личный бренд, маркетплейс или запуск продукта",
  },
  {
    title: "Формируем идею и визуальную логику",
    text: "Определяем настроение, референсы, формат, основные кадры, сценарии видео и структуру материалов",
  },
  {
    title: "Готовим съёмку",
    text: "Согласуем локацию, образы, реквизит, список кадров, тайминг и необходимые материалы",
  },
  {
    title: "Проводим съёмку",
    text: "Снимаем по согласованному плану, но оставляем пространство для живых кадров и импровизаций",
  },
  {
    title: "Отбираем и обрабатываем материалы",
    text: "Готовим финальные фото, монтируем видео, адаптируем материалы под нужные площадки",
  },
  {
    title: "Передаём готовый контент",
    text: "Материалы, которые можно использовать в соцсетях, рекламе, на сайте и в карточках товаров",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
            Как проходит работа
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/55 sm:text-lg">
            Сопровождаем проект от&nbsp;идеи до&nbsp;готовых материалов, чтобы съёмка была понятной
            и&nbsp;управляемой, а&nbsp;не&nbsp;хаотичной
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 divide-y divide-line border-t border-line sm:grid-cols-2 sm:divide-y-0 sm:border-t-0 sm:gap-x-8 lg:grid-cols-3">
          {STEPS.map((step, i) => (
            <div key={step.title} className="border-line py-7 sm:border-t sm:py-8">
              <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-medium text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
