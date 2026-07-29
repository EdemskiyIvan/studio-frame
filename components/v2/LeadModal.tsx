"use client";

import { FormEvent, useEffect, useState } from "react";
import { X, Phone, Send, MessageSquare } from "lucide-react";

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

const CONTACTS = [
  { icon: Phone, label: "Позвонить", href: "tel:+70000000000" },
  { icon: Send, label: "Telegram", href: "https://t.me/telnoffmedia" },
  { icon: MessageSquare, label: "MAX", href: "https://max.ru/telnoffmedia" },
];

export default function LeadModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const openHandler = () => {
      setSubmitted(false);
      setOpen(true);
    };
    window.addEventListener("open-lead-form", openHandler);
    return () => window.removeEventListener("open-lead-form", openHandler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className="v2-root fixed inset-0 z-[110] flex items-end justify-center bg-black/70 backdrop-blur-sm [animation:fade-in_0.2s_ease] sm:items-center sm:p-4"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full overflow-y-auto rounded-t-2xl border border-line bg-card p-6 [animation:sheet-up_0.3s_cubic-bezier(0.22,1,0.36,1)] sm:max-w-lg sm:rounded-2xl sm:p-8 sm:[animation:modal-pop_0.2s_ease]"
      >
        <button
          type="button"
          aria-label="Закрыть"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-ink/70 transition-colors hover:bg-white/[0.12] hover:text-ink"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-semibold text-ink">Спасибо!</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink/60">
              Мы получили вашу заявку и&nbsp;скоро свяжемся с&nbsp;вами, чтобы обсудить съёмку.
            </p>
          </div>
        ) : (
          <>
            {/* индикатор-«ручка» для мобильного bottom-sheet */}
            <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-white/15 sm:hidden" />

            <h3 className="text-2xl font-semibold tracking-[-0.01em] text-ink">
              Оставить заявку
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/55">
              Свяжемся с&nbsp;вами, уточним задачу и&nbsp;предложим подходящий формат съёмки.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="m-name" className="text-xs font-medium text-ink/60">
                  Имя
                </label>
                <input
                  id="m-name"
                  name="name"
                  type="text"
                  required
                  className="rounded-xl border border-line bg-paper px-3.5 py-3.5 text-sm text-ink outline-none transition-colors focus:border-accent"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="m-contact" className="text-xs font-medium text-ink/60">
                  Телефон или мессенджер
                </label>
                <input
                  id="m-contact"
                  name="contact"
                  type="text"
                  required
                  className="rounded-xl border border-line bg-paper px-3.5 py-3.5 text-sm text-ink outline-none transition-colors focus:border-accent"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="m-projectType" className="text-xs font-medium text-ink/60">
                  Тип проекта
                </label>
                <select
                  id="m-projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="appearance-none rounded-xl border border-line bg-paper px-3.5 py-3.5 pr-11 text-sm text-ink outline-none transition-colors focus:border-accent"
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
              </div>

              <label
                htmlFor="m-consent"
                className="flex items-start gap-3 text-xs leading-relaxed text-ink/55"
              >
                <input
                  id="m-consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
                />
                <span>
                  Согласен с{" "}
                  <a href="#" className="text-accent underline underline-offset-2 hover:text-ink">
                    обработкой персональных данных
                  </a>{" "}
                  и{" "}
                  <a href="#" className="text-accent underline underline-offset-2 hover:text-ink">
                    политикой конфиденциальности
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="mt-1 rounded-md bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#e63900]"
              >
                Отправить заявку
              </button>
            </form>

            <div className="mt-5 flex items-center gap-3 border-t border-line pt-5">
              <span className="text-xs text-ink/45">Или напишите напрямую:</span>
              <div className="flex gap-2">
                {CONTACTS.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-accent transition-colors hover:bg-accent-soft"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
