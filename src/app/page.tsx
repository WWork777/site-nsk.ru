import About from "@/components/About";
import PortfolioGrid from "@/components/Blog/PortfolioGrid";
import ProjectCard from "@/components/Blog/ProjectCard";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Разработка сайтов на Next.js в Новосибирске — создание быстрых и современных веб-проектов",
  description:
    "Создаём сайты и веб-приложения на Next.js в Новосибирске. Скорость 100/100 Lighthouse, SEO-оптимизация, интеграция рекламы, админ-панели и CRM. Закажите сайт под ключ с гарантией результата.",
  keywords: [
    "разработка сайтов Новосибирск",
    "создание сайтов Next.js",
    "Next.js разработка Новосибирск",
    "веб-студия Новосибирск",
    "фронтенд разработка",
    "SEO оптимизация Next.js",
    "продвижение сайтов Новосибирск",
    "разработка под ключ",
  ],
  openGraph: {
    title:
      "Разработка сайтов на Next.js в Новосибирске — быстрые, SEO-оптимизированные проекты",
    description:
      "Разработка сайтов и веб-приложений на Next.js под ключ в Новосибирске. Адаптивный дизайн, SEO, интеграция рекламы, скорость 100/100.",
    url: "https://site-nsk.ru/",
    siteName: "Next.js Разработка в Новосибирске",
    images: [
      {
        url: "https://site-nsk.ru/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Разработка сайтов на Next.js в Новосибирске",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Разработка сайтов на Next.js в Новосибирске",
    description:
      "Создание быстрых, современных и SEO-оптимизированных сайтов на Next.js под ключ.",
    images: ["https://site-nsk.ru/og-image.jpg"],
  },
  alternates: {
    canonical: "https://site-nsk.ru/",
  },
  authors: [{ name: "Веб-студия Sakne", url: "https://site-nsk.ru/" }],
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Pricing />
      <Testimonials />
      <Faq />
      <Team />
      {/* <PortfolioGrid /> */}
      {/* <ProjectCard /> */}
      <Contact />
      {/* <Clients /> */}
    </main>
  );
}
