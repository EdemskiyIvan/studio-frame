"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, MessageSquare, Phone, X } from "lucide-react";

const PHONE = "+79992386999";
const TELEGRAM = "https://t.me/maximmediapro";
const MAX_LINK = "https://max.ru/u/f9LHodD0cOITkS3qobfW-4jlz82rVRDmaHDtjbD_4EYb57J0mpz0xIXQbmA";

function TelegramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.281c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.94z" />
    </svg>
  );
}

const ITEMS = [
  { key: "telegram", label: "Telegram", href: TELEGRAM, icon: TelegramIcon },
  { key: "max", label: "MAX", href: MAX_LINK, icon: MessageSquare },
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
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${idx * 40}ms` }}
              className="flex items-center gap-2 rounded-full bg-card px-5 py-3.5 text-sm font-medium text-ink shadow-lg ring-1 ring-line transition-colors [animation:modal-pop_0.2s_ease] hover:bg-accent hover:text-white"
            >
              <Icon size={18} />
              {label}
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
