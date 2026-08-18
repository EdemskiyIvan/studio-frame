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
  { icon: Phone, label: "Позвонить", href: "tel:+79935832312" },
  { icon: Send, label: "Telegram", href: "https://t.me/telnoffmedia" },
  { icon: MessageSquare, label: "MAX", href: "https://max.ru/telnoffmedia" },
];

export default function LeadModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState("");

  useEffect(() => {
    const openHandler = (e: Event) => {
      const pt = (e as CustomEvent<{ projectType?: string }>).detail?.projectType;
      setProjectType(pt && PROJECT_TYPES.includes(pt) ? pt : "");
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
      className="fixed inset-0 z-[110] flex items-end justify-center bg-black/30 backdrop-blur-md [animation:fade-in_0.2s_ease] sm:items-center sm:p-4"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90dvh] w-full overflow-y-auto overscroll-contain rounded-t-2xl border border-line bg-card p-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] [animation:sheet-up_0.3s_cubic-bezier(0.22,1,0.36,1)] sm:max-h-[92vh] sm:max-w-lg sm:rounded-2xl sm:p-8 sm:pb-8 sm:[animation:modal-pop_0.2s_ease]"
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
              Мы получили вашу заявку и&nbsp;скоро свяжемся с&nbsp;вами, чтобы обсудить съёмку
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
              Мы свяжемся с&nbsp;вами в&nbsp;ближайшее время. Обычно&nbsp;— в&nbsp;течение
              15&nbsp;минут в&nbsp;рабочее время
            </p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-2">
              <input
                id="m-name"
                name="name"
                type="text"
                required
                placeholder="Имя"
                aria-label="Имя"
                className="rounded-xl border border-line bg-paper px-3.5 py-4 text-base font-medium text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
              />

              <input
                id="m-contact"
                name="contact"
                type="text"
                required
                placeholder="Телефон или мессенджер"
                aria-label="Телефон или мессенджер"
                className="rounded-xl border border-line bg-paper px-3.5 py-4 text-base font-medium text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
              />

              <select
                aria-label="Тип проекта"
                id="m-projectType"
                  name="projectType"
                  required
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="appearance-none rounded-xl border border-line bg-paper px-3.5 py-4 pr-11 text-base font-medium text-ink outline-none transition-colors focus:border-accent"
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
                id="m-comment"
                name="comment"
                rows={3}
                placeholder="Комментарий"
                aria-label="Комментарий"
                className="resize-none rounded-xl border border-line bg-paper px-3.5 py-4 text-base font-medium text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
              />

              <label
                htmlFor="m-consent"
                className="mt-1 flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-ink/55"
              >
                <input id="m-consent" name="consent" type="checkbox" required className="peer sr-only" />
                <span
                  aria-hidden
                  className="mt-0.5 h-5 w-5 shrink-0 rounded-[5px] border border-line bg-paper bg-center bg-no-repeat transition-colors peer-checked:border-accent peer-checked:bg-accent peer-checked:bg-[length:12px] peer-checked:bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22white%22%20stroke-width=%223.5%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%3E%3Cpolyline%20points=%2220%206%209%2017%204%2012%22/%3E%3C/svg%3E')]"
                />
                <span>
                  Я даю согласие на{" "}
                  <a href="#" className="text-ink/75 underline underline-offset-2 transition-colors hover:text-ink">
                    обработку персональных данных
                  </a>{" "}
                  и принимаю{" "}
                  <a href="#" className="text-ink/75 underline underline-offset-2 transition-colors hover:text-ink">
                    Политику конфиденциальности
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
