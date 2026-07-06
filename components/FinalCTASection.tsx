"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send } from "lucide-react";

const PROJECT_TYPES = [
  "Бренд / продукт",
  "Эксперт / личный бренд",
  "Ресторан / кафе",
  "Соцсети",
  "Реклама",
  "Маркетплейс",
  "Другое",
];

export default function FinalCTASection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="cta" className="bg-ink px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <h2 className="text-3xl font-semibold tracking-[-0.02em] text-paper sm:text-5xl">
            Обсудим вашу съёмку?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-paper/55 sm:text-lg">
            Расскажите, какой контент вам нужен, а мы предложим формат, структуру съёмки
            и&nbsp;примерный план подготовки
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#e63900]"
            >
              Оставить заявку
            </a>
            <a
              href="https://t.me/studioframe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-white/5"
            >
              <Send size={16} />
              Telegram
            </a>
            <a
              href="https://wa.me/70000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-white/5"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        <div id="lead-form" className="scroll-mt-28 rounded-2xl bg-paper p-6 sm:p-8">
          {submitted ? (
            <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
              <h3 className="text-xl font-medium text-ink">Спасибо!</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink/60">
                Мы получили вашу заявку и&nbsp;скоро свяжемся с&nbsp;вами, чтобы обсудить съёмку
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <p className="text-sm leading-relaxed text-ink/60">
                Оставьте контакты - мы свяжемся с&nbsp;вами, уточним задачу и&nbsp;предложим
                подходящий формат съёмки
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
