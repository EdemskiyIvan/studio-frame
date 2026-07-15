import type { Metadata } from "next";
import Header from "@/components/v2/Header";
import HeroSection from "@/components/v2/HeroSection";
import ShowreelSection from "@/components/v2/ShowreelSection";
import ServicesSection from "@/components/v2/ServicesSection";
import AIAvatarSection from "@/components/v2/AIAvatarSection";
import PortfolioSection from "@/components/v2/PortfolioSection";
import ProcessSection from "@/components/v2/ProcessSection";
import FAQSection from "@/components/v2/FAQSection";
import FinalCTASection from "@/components/v2/FinalCTASection";
import Footer from "@/components/v2/Footer";

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

export default function V2Home() {
  return (
    <div className="v2-root min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <HeroSection />
        <ShowreelSection />
        <ServicesSection />
        <AIAvatarSection />
        <PortfolioSection />
        <ProcessSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
