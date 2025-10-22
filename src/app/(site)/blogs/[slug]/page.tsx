import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetails({
  params,
}: Awaited<{ params: { slug: string } }>) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  return (
    <section className="container py-10">
      <nav className="text-muted-foreground mb-4 text-sm">
        <Link href="/">Главная</Link> / <Link href="/blogs">Портфолио</Link> /{" "}
        <span className="text-foreground">{p.title}</span>
      </nav>

      <div className="mb-6 flex items-center justify-between gap-3">
        <h1 className="text-3xl font-bold">{p.title}</h1>
        <div className="flex gap-2">
          <Link
            href="/blogs"
            className="hover:bg-accent rounded-lg border px-4 py-2"
          >
            Назад
          </Link>
          {p.href && (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90"
            >
              Перейти на сайт
            </a>
          )}
        </div>
      </div>

      <div className="ring-border/50 relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl ring-1">
        <Image src={p.cover} alt={p.title} fill className="object-cover" />
      </div>

      <p className="text-muted-foreground mb-6">{p.excerpt}</p>
    </section>
  );
}
