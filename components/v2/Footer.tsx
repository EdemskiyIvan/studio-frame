import { Mail, MessageSquare, Phone, Send } from "lucide-react";

const CONTACTS = [
  { icon: Phone, label: "+7 000 000-00-00", href: "tel:+70000000000" },
  { icon: Send, label: "Telegram", href: "https://t.me/telnoffmedia" },
  { icon: MessageSquare, label: "MAX", href: "https://max.ru/telnoffmedia" },
  { icon: Mail, label: "hello@telnoffmedia.ru", href: "mailto:hello@telnoffmedia.ru" },
];

export default function Footer() {
  return (
    <footer id="contacts" className="border-t border-line bg-paper px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="h-2 w-2 bg-accent" />
              <span className="text-lg font-semibold tracking-tight text-ink">
                Telnoff Media <span className="text-accent">PRO</span>duction
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/50">
              Видеопродакшн полного цикла: рекламная съёмка, интервью, мероприятия, трансляции,
              лекции, подкасты, концерты и ИИ-аватары. СПб, Москва
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-[11px] tracking-wide text-ink/40 uppercase">
              Контакты
            </p>
            <div className="flex flex-col gap-3">
              {CONTACTS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2.5 text-sm text-ink/60 transition-colors hover:text-ink"
                >
                  <Icon size={15} className="text-accent" />
                  {label}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-12 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink/40">
            © {new Date().getFullYear()} Telnoff Media PROduction
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a href="#" className="text-xs text-ink/40 transition-colors hover:text-ink/70">
              Обработка персональных данных
            </a>
            <a href="#" className="text-xs text-ink/40 transition-colors hover:text-ink/70">
              Политика конфиденциальности
            </a>
            <a
              href="https://montas.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ink/40 transition-colors hover:text-ink/70"
            >
              Разработка сайта — Montas
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
