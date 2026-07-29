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
            и&nbsp;примерный план подготовки
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

        </div>

        <div
          id="lead-form"
          className="scroll-mt-28 rounded-2xl border border-line bg-card p-6 sm:p-8"
        >
          {submitted ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-medium text-ink">Спасибо!</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink/60">
                Мы получили вашу заявку и&nbsp;скоро свяжемся с&nbsp;вами, чтобы обсудить съёмку
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold tracking-[-0.01em] text-ink">
                Оставить заявку
              </h3>
              <p className="-mt-1 text-sm leading-relaxed text-ink/55">
                Ваш персональный менеджер свяжется с&nbsp;вами в&nbsp;течение 15&nbsp;минут
              </p>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Имя"
                aria-label="Имя"
                className="rounded-xl border border-line bg-paper px-3.5 py-4 text-sm font-medium text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
              />

              <input
                id="contact"
                name="contact"
                type="text"
                required
                placeholder="Телефон или мессенджер"
                aria-label="Телефон или мессенджер"
                className="rounded-xl border border-line bg-paper px-3.5 py-4 text-sm font-medium text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
              />

              <select
                aria-label="Тип проекта"
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="appearance-none rounded-xl border border-line bg-paper px-3.5 py-4 pr-11 text-sm font-medium text-ink outline-none transition-colors focus:border-accent"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                    backgroundSize: "16px",
                  }}
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

              <textarea
                id="comment"
                name="comment"
                rows={3}
                placeholder="Комментарий"
                aria-label="Комментарий"
                className="resize-none rounded-xl border border-line bg-paper px-3.5 py-4 text-sm font-medium text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
              />

              {/* Согласие на обработку персональных данных */}
              <label htmlFor="consent" className="mt-1 flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-ink/55">
                <input id="consent" name="consent" type="checkbox" required className="peer sr-only" />
                <span
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 rounded-[5px] border border-line bg-paper bg-center bg-no-repeat transition-colors peer-checked:border-accent peer-checked:bg-accent peer-checked:bg-[length:12px] peer-checked:bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%223.5%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpolyline%20points=%2220%206%209%2017%204%2012%22/%3E%3C/svg%3E')]"
                />
                <span>
                  Согласен с{" "}
                  <a href="#" className="text-ink/75 underline underline-offset-2 transition-colors hover:text-ink">
                    обработкой персональных данных
                  </a>{" "}
                  и{" "}
                  <a href="#" className="text-ink/75 underline underline-offset-2 transition-colors hover:text-ink">
                    политикой конфиденциальности
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="mt-2 w-fit self-start rounded-md bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#e63900]"
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
