import Link from "next/link";
import type { Article } from "@/content/articles";
import { StatusBadge } from "@/components/ui/status-badge";
import { TagList } from "@/components/ui/tag-list";

type ArticleCardProps = {
  article: Article;
  detailHref?: string;
};

export function ArticleCard({ article, detailHref }: ArticleCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/[0.03] transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md hover:shadow-teal-900/[0.06]">
      <div className="h-1 bg-gradient-to-r from-teal-700 via-emerald-600 to-amber-500" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={article.status} />
          <span className="text-sm font-medium text-zinc-600">
            {article.estimatedReadTime}
          </span>
        </div>
        <div className="mt-4 flex-1">
          <p className="text-sm font-semibold text-teal-700">{article.category}</p>
          <h2 className="mt-2 text-xl font-semibold leading-tight tracking-normal text-zinc-950">
            {article.title}
          </h2>
          <p className="mt-2 text-xs font-medium text-zinc-500">/{article.slug}</p>
          <p className="mt-3 text-sm leading-6 text-zinc-700">{article.summary}</p>
          <div className="mt-5">
            <TagList items={article.audience} label="Audience" />
          </div>
          <div className="mt-5">
            <TagList items={article.keywords} label="SEO keywords" />
          </div>
        </div>
        <div className="mt-5 border-t border-zinc-100 pt-4">
          {article.futureMonetizationLink ? (
            <p className="text-sm leading-6 text-zinc-600">
              Future connection: {article.futureMonetizationLink}
            </p>
          ) : (
            <p className="text-sm text-zinc-500">Future monetization link pending</p>
          )}
          {detailHref ? (
            <Link
              className="mt-3 inline-flex text-sm font-semibold text-teal-800 transition hover:text-teal-950"
              href={detailHref}
            >
              View article details
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
