"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const FAQ = [
  {
    q: "Сколько длится съёмка?",
    a: "Зависит от задачи и объёма материалов. Небольшая контент-съёмка может занять несколько часов, а более сложный проект - полный съёмочный день или несколько этапов",
  },
  {
    q: "Можно ли прийти без готовой идеи?",
    a: "Да. Мы можем помочь с концепцией, референсами, сценариями, визуальной логикой и списком кадров",
  },
  {
    q: "Вы снимаете только фото или видео тоже?",
    a: "Мы можем подготовить и фото, и видео. Формат зависит от задачи: соцсети, реклама, сайт, маркетплейс, личный бренд или презентация",
  },
  {
    q: "Можно ли использовать материалы для рекламы?",
    a: "Да. Мы можем заранее заложить в съёмку форматы, которые подойдут для рекламных креативов и продвижения в социальных сетях",
  },
  {
    q: "Кто готовит локацию и реквизит?",
    a: "Это обсуждается индивидуально. Мы можем дать рекомендации по локации, реквизиту, образам и подготовке, чтобы съёмка прошла эффективнее",
  },
  {
    q: "Можно ли заказать регулярный контент?",
    a: "Да. Для брендов и бизнесов можно выстроить регулярные съёмки, чтобы постоянно обновлять контент для социальных сетей и рекламы",
  },
  {
    q: "Как получить стоимость?",
    a: "Оставьте заявку, и мы уточним задачу, формат, объём материалов и подготовим предложение под ваш проект",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper-soft px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl">
          Вопросы и ответы
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
                  <span className="text-base font-medium text-ink sm:text-lg">{item.q}</span>
                  <Plus
                    size={18}
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
                    <p className="max-w-xl text-sm leading-relaxed text-ink/60 sm:text-base">{item.a}</p>
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
