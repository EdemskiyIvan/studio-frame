import { AtSign, Mail, MessageCircle, Phone, Send } from "lucide-react";

const CONTACTS = [
  { icon: Phone, label: "+7 000 000-00-00", href: "tel:+70000000000" },
  { icon: Send, label: "@studioframe", href: "https://t.me/studioframe" },
  { icon: MessageCircle, label: "+7 000 000-00-00", href: "https://wa.me/70000000000" },
  { icon: Mail, label: "hello@studioframe.ru", href: "mailto:hello@studioframe.ru" },
];

const SOCIALS = [
  { icon: AtSign, label: "Instagram", href: "https://instagram.com" },
  { icon: Send, label: "VK", href: "https://vk.com" },
];

export default function Footer() {
  return (
    <footer id="contacts" className="border-t border-white/10 bg-ink px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1.2fr_1fr_auto]">
          <div>
            <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight text-paper">
              <span className="h-2 w-2 bg-accent" />
              STUDIO FRAME
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/50">
              Студия профессиональной съёмки контента для брендов, бизнеса и&nbsp;экспертов. Создаём фото
              и&nbsp;видео для digital, рекламы, сайтов и&nbsp;социальных сетей
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {CONTACTS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-2.5 text-sm text-paper/60 transition-colors hover:text-paper"
              >
                <Icon size={15} className="text-accent" />
                {label}
              </a>
            ))}
          </div>

          <div className="flex gap-3 sm:flex-col">
            {SOCIALS.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-paper/60 transition-colors hover:text-paper"
              >
                <Icon size={15} className="text-accent" />
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-paper/40">© {new Date().getFullYear()} Studio Frame</p>
          <a href="#" className="text-xs text-paper/40 transition-colors hover:text-paper/70">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
