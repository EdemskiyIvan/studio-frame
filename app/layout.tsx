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
  title: "STUDIO FRAME - профессиональная съёмка контента для брендов и бизнеса",
  description:
    "Фото- и видеосъёмка контента для соцсетей, рекламы, сайтов, маркетплейсов и личного бренда. Помогаем с идеей, подготовкой, съёмкой и готовыми материалами.",
  openGraph: {
    title: "STUDIO FRAME - профессиональная съёмка контента",
    description:
      "Создаём фото- и видеоконтент для брендов, бизнеса и экспертов: от идеи до готовых материалов.",
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
