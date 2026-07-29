import { Mail, MessageSquare, Send } from "lucide-react";

const MESSENGERS = [
  { icon: Send, label: "Telegram", href: "https://t.me/telnoffmedia" },
  { icon: MessageSquare, label: "MAX", href: "https://max.ru/telnoffmedia" },
  { icon: Mail, label: "hello@telnoffmedia.ru", href: "mailto:hello@telnoffmedia.ru" },
];

export default function Footer() {
  return (
    <footer id="contacts" className="relative overflow-hidden border-t border-line bg-paper">
      <div className="w-full px-5 pt-20 pb-8 sm:px-10">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
          {/* Бренд */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 bg-accent" />
              <span className="text-xl font-semibold tracking-tight text-ink">
                Telnoff Media <span className="text-accent">PRO</span>duction
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/50">
              Видеопродакшн полного цикла: рекламная съёмка, интервью, мероприятия, трансляции,
              лекции, подкасты, концерты и ИИ-аватары. СПб, Москва
            </p>
          </div>

          {/* Контакты */}
          <div className="lg:text-right">
            <a
              href="tel:+79935832312"
              className="block text-3xl font-semibold tracking-tight text-ink transition-colors hover:text-accent sm:text-4xl"
            >
              +7 993 583 23 12
            </a>

            <div className="mt-6 flex flex-wrap gap-3 lg:justify-end">
              {MESSENGERS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-line bg-card px-5 py-3 text-sm font-medium text-ink/80 transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Icon size={16} className="text-accent" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Крупный декоративный логотип — глифы растянуты на всю ширину блока (SVG) */}
        <div className="pointer-events-none mt-16 select-none">
          <svg
            viewBox="0 0 1200 108"
            width="100%"
            aria-hidden
            className="block text-ink"
          >
            <text
              x="0"
              y="86"
              textLength="1200"
              lengthAdjust="spacing"
              fontFamily="var(--font-display), sans-serif"
              fontWeight={700}
              fontSize={88}
              fill="currentColor"
              fillOpacity={0.05}
            >
              Telnoff Media PROduction
            </text>
          </svg>
        </div>

        {/* Нижний бар */}
        <div className="mt-8 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink/40">
            © {new Date().getFullYear()} Telnoff Media PROduction
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-2">
            <a href="#" className="text-xs text-ink/40 transition-colors hover:text-accent">
              Обработка персональных данных
            </a>
            <a href="#" className="text-xs text-ink/40 transition-colors hover:text-accent">
              Политика конфиденциальности
            </a>
            <a
              href="https://montas.ru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ink/40 transition-colors hover:text-accent"
            >
              Разработка сайта — Montas
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
