"use client";

import { FormEvent, useState } from "react";
import { Send, Phone, MessageSquare } from "lucide-react";

const PROJECT_TYPES = [
  "Рекламная съёмка для бизнеса",
  "Интервью",
  "Бизнес-форум / мероприятие",
  "Видеотрансляция",
  "Лекции / видеоуроки",
  "Видеоподкаст",
  "Соцсети (Reels / Shorts)",
  "Концерт",
  "ИИ Аватар",
  "Другое",
];

export default function FinalCTASection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="cta" className="scroll-mt-20 bg-paper px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-6xl">
            Обсудим вашу съёмку?
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/60">
            Расскажите, какой контент вам нужен, — предложим формат, структуру съёмки
            и&nbsp;примерный план подготовки.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+70000000000"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-white/[0.04]"
            >
              <Phone size={16} className="text-accent" />
              Позвонить
            </a>
            <a
              href="https://t.me/telnoffmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-white/[0.04]"
            >
              <Send size={16} className="text-accent" />
              Telegram
            </a>
            <a
              href="https://max.ru/telnoffmedia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-white/[0.04]"
            >
              <MessageSquare size={16} className="text-accent" />
              MAX
            </a>
          </div>

          <div className="mt-10 rounded-xl border border-line bg-card p-6">
            <p className="text-sm leading-relaxed text-ink/60">
              Работаем в&nbsp;СПб, Москве и&nbsp;других городах. Монтаж в&nbsp;день съёмки,
              публикация материалов день в&nbsp;день, стабильные онлайн-трансляции.
            </p>
          </div>
        </div>

        <div
          id="lead-form"
          className="scroll-mt-28 rounded-2xl border border-line bg-card p-6 sm:p-8"
        >
          {submitted ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-medium text-ink">Спасибо!</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink/60">
                Мы получили вашу заявку и&nbsp;скоро свяжемся с&nbsp;вами, чтобы обсудить съёмку.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <p className="text-sm leading-relaxed text-ink/60">
                Оставьте контакты — свяжемся с&nbsp;вами, уточним задачу и&nbsp;предложим
                подходящий формат съёмки.
              </p>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-medium text-ink/60">
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="rounded-md border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact" className="text-xs font-medium text-ink/60">
                  Телефон или мессенджер
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  required
                  className="rounded-md border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="projectType" className="text-xs font-medium text-ink/60">
                  Тип проекта
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="rounded-md border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
                >
                  <option value="" disabled>
                    Выберите тип проекта
                  </option>
                  {PROJECT_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="comment" className="text-xs font-medium text-ink/60">
                  Комментарий
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={3}
                  className="resize-none rounded-md border border-line bg-paper px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
                />
              </div>

              {/* Согласие на обработку персональных данных */}
              <label htmlFor="consent" className="flex items-start gap-3 text-xs leading-relaxed text-ink/55">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
                />
                <span>
                  Я&nbsp;согласен на&nbsp;обработку персональных данных в&nbsp;соответствии
                  с&nbsp;политикой конфиденциальности.
                </span>
              </label>

              <button
                type="submit"
                className="mt-2 rounded-md bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#e63900]"
              >
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
