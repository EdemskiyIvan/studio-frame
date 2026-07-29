"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const FAQ = [
  {
    q: "Сколько времени занимает съёмка?",
    a: "Зависит от формата: контент-съёмка или интервью — несколько часов, мероприятие или концерт — полный день, а масштабный проект может состоять из нескольких съёмочных дней",
  },
  {
    q: "Когда будут готовы материалы?",
    a: "Для мероприятий и форумов делаем экспресс-монтаж и отдаём готовый материал на следующий день. Сроки по остальным проектам согласуем на этапе брифинга",
  },
  {
    q: "Можно ли прийти без готовой идеи?",
    a: "Да. Мы поможем со сценарием, концепцией, референсами и структурой материалов под вашу задачу",
  },
  {
    q: "Вы снимаете только видео или фото тоже?",
    a: "И то, и другое. Готовим фото- и видеоконтент под рекламу, соцсети, сайт, лекции, подкасты и мероприятия",
  },
  {
    q: "Как проходят онлайн-трансляции?",
    a: "Организуем стабильную трансляцию, Yandex Телемост и вебинары, отвечаем за качество звука и картинки в прямом эфире",
  },
  {
    q: "Что такое ИИ-аватар?",
    a: "Это цифровой двойник вас или вашего эксперта. Достаточно один раз провести оцифровку — дальше новые видеоролики генерируются автоматически, без вашего личного участия",
  },
  {
    q: "Как узнать стоимость?",
    a: "Оставьте заявку — уточним задачу, формат и объём материалов и подготовим прозрачное предложение под ваш проект",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-6xl">
          Вопрос — ответ
        </h2>

        <div className="mt-10 divide-y divide-line border-t border-b border-line">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-lg font-medium text-ink">{item.q}</span>
                  <Plus
                    size={20}
                    className={`shrink-0 text-ink/50 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-xl text-base leading-relaxed text-ink/60">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
