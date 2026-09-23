"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";

const PHONE = "+79992386999";
const TELEGRAM = "https://t.me/maximmediapro";
const WHATSAPP = `https://wa.me/${PHONE.replace("+", "")}`;

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.281c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.94z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.43 1.27 4.87L2 22l5.29-1.39A9.94 9.94 0 0012.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm0 18.15c-1.56 0-3.02-.42-4.28-1.16l-.31-.18-3.14.82.84-3.06-.2-.32a8.15 8.15 0 01-1.26-4.35c0-4.5 3.66-8.15 8.15-8.15s8.15 3.66 8.15 8.15-3.66 8.15-8.15 8.15zm4.47-6.12c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.11-.49.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.04-.47-.08-.12-.5-1.21-.69-1.65-.18-.44-.36-.38-.5-.38-.13 0-.28-.01-.43-.01-.15 0-.39.06-.6.29-.21.24-.8.79-.8 1.92 0 1.13.82 2.23.94 2.39.12.16 1.61 2.45 3.9 3.35 2.29.9 2.29.6 2.7.56.41-.04 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.06-.09-.21-.15-.45-.27z" />
    </svg>
  );
}

const ITEMS = [
  { key: "telegram", label: "Telegram", href: TELEGRAM, icon: TelegramIcon },
  { key: "whatsapp", label: "WhatsApp", href: WHATSAPP, icon: WhatsappIcon },
  { key: "phone", label: "Позвонить", href: `tel:${PHONE}`, icon: Phone },
];

export default function ContactWidget() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="fixed right-5 bottom-5 z-30 flex flex-col items-end gap-3 sm:right-8 sm:bottom-8">
      {open && (
        <div className="flex flex-col items-end gap-3">
          {ITEMS.map(({ key, label, href, icon: Icon }, idx) => (
            <a
              key={key}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${idx * 40}ms` }}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-ink shadow-lg ring-1 ring-line transition-colors [animation:modal-pop_0.2s_ease] hover:bg-accent hover:text-white"
            >
              <Icon />
            </a>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Закрыть контакты" : "Связаться"}
        className="flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#e63900]"
      >
        {open ? <X size={18} /> : <MessageCircle size={18} />}
        Связаться
      </button>
    </div>
  );
}
