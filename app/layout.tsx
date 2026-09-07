import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { FAQ } from "@/lib/faq";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
});

const OG_IMAGE = "https://s3.twcstorage.ru/d1640567-06d0-43f0-a0c8-bc0cd0a58287/showreel-cover.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://telnoffmedia.ru"),
  title: "Telnoff Media PROduction — профессиональная видеосъёмка для брендов, бизнеса и экспертов",
  description:
    "Видео- и фотопродакшн: рекламная съёмка, интервью, бизнес-форумы, видеотрансляции, лекции, подкасты, концерты и ИИ-аватары. Экспресс-монтаж в день съёмки, стабильные трансляции. СПб, Москва.",
  keywords: [
    "видеопродакшн",
    "видеосъёмка СПб",
    "видеосъёмка Москва",
    "рекламная съёмка",
    "видеосъёмка мероприятий",
    "видеотрансляция",
    "корпоративное видео",
    "ИИ аватар",
    "видеопродакшн для бизнеса",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Telnoff Media PROduction — видеопродакшн полного цикла",
    description:
      "Профессиональная видеосъёмка для брендов, бизнеса и экспертов. Монтаж в день съёмки, стабильные онлайн-трансляции, ИИ-аватары.",
    url: "https://telnoffmedia.ru",
    siteName: "Telnoff Media PROduction",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1280,
        height: 720,
        alt: "Telnoff Media PROduction — видеопродакшн полного цикла",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Telnoff Media PROduction — видеопродакшн полного цикла",
    description:
      "Профессиональная видеосъёмка для брендов, бизнеса и экспертов. Монтаж в день съёмки, стабильные онлайн-трансляции, ИИ-аватары.",
    images: [OG_IMAGE],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Telnoff Media PROduction",
  description:
    "Видео- и фотопродакшн: рекламная съёмка, интервью, бизнес-форумы, видеотрансляции, лекции, подкасты, концерты и ИИ-аватары.",
  url: "https://telnoffmedia.ru",
  image: OG_IMAGE,
  telephone: "+7-993-583-23-12",
  areaServed: ["Санкт-Петербург", "Москва"],
  sameAs: ["https://t.me/telnoffmedia", "https://max.ru/telnoffmedia"],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
          }}
        />
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
