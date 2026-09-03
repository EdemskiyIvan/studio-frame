import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных — Telnoff Media PROduction",
  robots: { index: false },
};

export default function ConsentPage() {
  return (
    <div className="min-h-screen bg-white text-black [color-scheme:light]">
      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16">
        <Link href="/" className="text-sm underline underline-offset-2">
          ← На главную
        </Link>

        <h1 className="mt-8 text-2xl font-bold sm:text-3xl">
          Согласие на обработку персональных данных
        </h1>

        <div className="mt-8 space-y-5 text-[15px] leading-relaxed">
          <p>
            Заполняя форму на сайте, я свободно, своей волей и в своем интересе даю согласие
            оператору персональных данных:
          </p>

          <section>
            <p>Физическое лицо: Тельнов Максим Владимирович</p>
            <p>
              E-mail:{" "}
              <a href="mailto:maximtelnoff@mail.ru" className="underline underline-offset-2">
                maximtelnoff@mail.ru
              </a>
            </p>
          </section>

          <p>
            на обработку моих персональных данных в соответствии с Федеральным законом №152-ФЗ.
          </p>

          <section>
            <h2 className="font-bold">Обрабатываемые данные</h2>
            <ul className="mt-1 list-disc space-y-0.5 pl-5">
              <li>имя;</li>
              <li>номер телефона;</li>
              <li>контакт в мессенджере;</li>
              <li>выбранная услуга;</li>
              <li>комментарий;</li>
              <li>IP-адрес, Cookie и сведения о браузере.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold">Цели обработки</h2>
            <p className="mt-1">
              Обработка обращения, связь со мной, консультация, подготовка коммерческого
              предложения, заключение и исполнение договора.
            </p>
          </section>

          <p>
            Разрешаю осуществлять сбор, запись, хранение, использование, передачу техническим
            сервисам, удаление и уничтожение персональных данных.
          </p>

          <p>
            Согласие действует до достижения целей обработки либо до его отзыва. Отозвать согласие
            можно по электронной почте:{" "}
            <a href="mailto:maximtelnoff@mail.ru" className="underline underline-offset-2">
              maximtelnoff@mail.ru
            </a>
          </p>

          <p>
            Подтверждаю, что ознакомился(ась) с{" "}
            <Link href="/policy" className="underline underline-offset-2">
              Политикой в отношении обработки персональных данных
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
