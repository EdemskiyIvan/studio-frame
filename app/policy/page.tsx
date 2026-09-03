import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Политика в отношении обработки персональных данных — Telnoff Media PROduction",
  robots: { index: false },
};

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-white text-black [color-scheme:light]">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <Link href="/" className="text-sm underline underline-offset-2">
          ← На главную
        </Link>

        <h1 className="mt-8 text-2xl font-bold sm:text-3xl">
          Политика в отношении обработки персональных данных
        </h1>

        <div className="mt-8 space-y-5 text-[15px] leading-relaxed">
          <section>
            <h2 className="font-bold">Общие положения</h2>
            <p className="mt-1">
              Настоящая Политика разработана в соответствии с Федеральным законом №152-ФЗ и
              определяет порядок обработки персональных данных пользователей сайта.
            </p>
          </section>

          <section>
            <h2 className="font-bold">Оператор персональных данных</h2>
            <p className="mt-1">Физическое лицо: Тельнов Максим Владимирович</p>
            <p>
              E-mail:{" "}
              <a href="mailto:maximtelnoff@mail.ru" className="underline underline-offset-2">
                maximtelnoff@mail.ru
              </a>
            </p>
            <p>Сайт: https://www.telnoffmedia.pro</p>
          </section>

          <section>
            <h2 className="font-bold">Обрабатываемые данные</h2>
            <ul className="mt-1 list-disc space-y-0.5 pl-5">
              <li>имя;</li>
              <li>номер телефона;</li>
              <li>контакт в мессенджере;</li>
              <li>выбранная услуга;</li>
              <li>комментарий пользователя;</li>
              <li>IP-адрес, Cookie, сведения о браузере и данные Яндекс.Метрики.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold">Цели обработки</h2>
            <p className="mt-1">
              Обработка заявок, связь с пользователем, консультации, подготовка коммерческого
              предложения, заключение и исполнение договора, ведение деловой переписки, улучшение
              работы сайта.
            </p>
          </section>

          <section>
            <h2 className="font-bold">Правовые основания</h2>
            <p className="mt-1">
              Добровольное согласие пользователя, заполнение форм сайта, требования
              законодательства РФ.
            </p>
          </section>

          <section>
            <h2 className="font-bold">Порядок обработки</h2>
            <p className="mt-1">
              Персональные данные защищаются организационными и техническими мерами, могут
              передаваться только сервисам, обеспечивающим работу сайта (хостинг, почта,
              веб-аналитика и др.) либо в случаях, предусмотренных законом. Данные хранятся до
              достижения целей обработки либо до отзыва согласия.
            </p>
          </section>

          <section>
            <h2 className="font-bold">Права пользователя</h2>
            <p className="mt-1">
              Получение информации, уточнение, удаление данных, отзыв согласия.
            </p>
            <p className="mt-1">
              Обращения:{" "}
              <a href="mailto:maximtelnoff@mail.ru" className="underline underline-offset-2">
                maximtelnoff@mail.ru
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-bold">Cookie</h2>
            <p className="mt-1">
              Сайт использует Cookie и Яндекс.Метрику для анализа посещаемости и улучшения работы
              сайта.
            </p>
          </section>

          <section>
            <h2 className="font-bold">Заключительные положения</h2>
            <p className="mt-1">
              Политика может обновляться. Актуальная версия размещается по адресу
              https://telnoffmedia.pro/policy
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
