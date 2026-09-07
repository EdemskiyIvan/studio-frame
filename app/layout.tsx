import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Telnoff Media PROduction — профессиональная видеосъёмка для брендов, бизнеса и экспертов",
  description:
    "Видео- и фотопродакшн: рекламная съёмка, интервью, бизнес-форумы, видеотрансляции, лекции, подкасты, концерты и ИИ-аватары. Экспресс-монтаж в день съёмки, стабильные трансляции. СПб, Москва.",
  openGraph: {
    title: "Telnoff Media PROduction — видеопродакшн полного цикла",
    description:
      "Профессиональная видеосъёмка для брендов, бизнеса и экспертов. Монтаж в день съёмки, стабильные онлайн-трансляции, ИИ-аватары.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full antialiased">
        {children}

        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=112345613', 'ym');

            ym(112345613, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/112345613"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
