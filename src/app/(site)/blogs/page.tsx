// app/(site)/blogs/page.tsx
import type { Metadata } from "next";
import Breadcrumb from "@/components/Common/Breadcrumb"; // проверь путь к компоненту хлебных
import { projects } from "@/data/portfolio";
import ProjectCard from "@/components/Blog/ProjectCard";

export const metadata: Metadata = {
  title: "Портфолио — проекты на Next.js в Новосибирске | Кейсы веб-разработки",
  description:
    "Портфолио проектов на Next.js: лендинги, интернет-магазины и корпоративные сайты. ⚡ Высокая скорость (100/100 Lighthouse), SEO-оптимизация и современные технологии фронтенда.",
  keywords: [
    "портфолио Next.js",
    "разработка сайтов Новосибирск",
    "кейсы веб разработки",
    "Next.js проекты",
    "лендинг Next.js",
    "интернет магазин Next.js",
    "создание сайтов под ключ Новосибирск",
    "фронтенд разработка Next.js",
  ],
  openGraph: {
    title: "Портфолио — проекты на Next.js в Новосибирске",
    description:
      "Посмотрите наши проекты: сайты на Next.js с идеальной скоростью, адаптивностью и SEO. Разработка под ключ в Новосибирске.",
    url: "https://site-nsk.ru/blogs",
    siteName: "NextNova — разработка сайтов на Next.js",
    images: [
      {
        url: "https://site-nsk.ru/og-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "Портфолио Next.js проектов в Новосибирске",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Портфолио Next.js проектов | Новосибирск",
    description:
      "Кейсы и примеры сайтов, созданных на Next.js: скорость, SEO и дизайн. Разработка под ключ.",
    images: ["https://site-nsk.ru/og-portfolio.jpg"],
  },
  alternates: {
    canonical: "https://site-nsk.ru/blogs",
  },
  authors: [{ name: "Веб-студия Sakne", url: "https://site-nsk.ru/" }],
};

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumb pageName="Портфолио" />

      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            {projects.map((p) => (
              <div key={p.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
                <ProjectCard p={p} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
