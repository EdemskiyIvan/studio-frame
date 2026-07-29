import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
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
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
