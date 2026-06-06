import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, PageHeader, SectionHeader } from "@/components/layout";
import { StatusBadge, TagList } from "@/components/ui";
import { articles } from "@/content/articles";

type ArticleDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return {
      title: "Article not found",
    };
  }

  return {
    title: `${article.title} | Articles`,
    description: article.summary,
    keywords: article.keywords,
  };
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 text-zinc-950 sm:py-20">
      <Container>
        <PageHeader
          eyebrow={article.category}
          title={article.title}
          description={article.summary}
        />

        <div className="mt-8 flex flex-wrap items-center gap-3 border-y border-zinc-200 py-5">
          <StatusBadge status={article.status} />
          <span className="text-sm font-semibold text-zinc-700">
            {article.estimatedReadTime}
          </span>
          <span className="text-sm text-zinc-600">/{article.slug}</span>
        </div>

        <section className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader
              title="Audience"
              description="Audience tags keep the future article focused on the readers it should serve."
            />
            <div className="mt-5">
              <TagList items={article.audience} label="Audience groups" />
            </div>
          </div>

          <div>
            <SectionHeader
              title="SEO keywords"
              description="Keyword tags make the article record ready for future search optimization and editorial planning."
            />
            <div className="mt-5">
              <TagList items={article.keywords} label="SEO keywords" />
            </div>
          </div>
        </section>

        <section className="mt-12 border-t border-zinc-200 pt-8">
          <SectionHeader
            title="Editorial readiness"
            description="This route is prepared for future article drafts, outlines, research notes, publishing dates, and related resources."
          />
          <div className="mt-5 border-l-2 border-teal-700 bg-teal-50/50 px-5 py-4">
            <p className="text-sm font-semibold text-zinc-950">Future connection</p>
            <p className="mt-2 text-sm leading-6 text-zinc-700">
              {article.futureMonetizationLink ??
                "Future product, newsletter, template, or resource connection pending."}
            </p>
          </div>
        </section>

        <Link
          className="mt-10 inline-flex text-sm font-semibold text-teal-800 transition hover:text-teal-950"
          href="/articles"
        >
          Back to articles
        </Link>
      </Container>
    </main>
  );
}
