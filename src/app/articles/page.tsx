import { ArticleCard } from "@/components/cards";
import {
  FeaturedSection,
  FilterBar,
  GroupedSummary,
  StatsSummary,
} from "@/components/content";
import { NewsletterSignup, ResourceCallout } from "@/components/lead";
import { Container, PageHeader, SectionHeader } from "@/components/layout";
import { ResourceCard } from "@/components/resources";
import { EmptyState, getStatusLabel, TagList } from "@/components/ui";
import { articles } from "@/content/articles";
import { contentGrowthPaths } from "@/content/growth";
import { resources } from "@/content/resources";
import {
  countBy,
  getSearchParam,
  getUniqueTags,
  matchesFilter,
  uniqueSorted,
  type SearchParamsInput,
} from "@/lib/content-utils";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("articles");

type ArticlesPageProps = {
  searchParams?: Promise<SearchParamsInput>;
};

export default async function ArticlesPage({ searchParams }: ArticlesPageProps) {
  const params = searchParams ? await searchParams : {};
  const activeCategory = getSearchParam(params, "category");
  const activeStatus = getSearchParam(params, "status");
  const featuredArticles = articles.filter((article) => article.featured);
  const categoryGroups = countBy(articles, (article) => article.category);
  const statusGroups = countBy(articles, (article) => article.status);
  const uniqueKeywords = uniqueSorted(articles.flatMap((article) => article.keywords));
  const relatedResources = resources.filter((resource) => resource.featured).slice(0, 2);
  const filteredArticles = articles.filter(
    (article) =>
      matchesFilter(article.category, activeCategory) &&
      matchesFilter(article.status, activeStatus),
  );

  return (
    <main className="min-h-screen py-16 text-zinc-950 sm:py-20">
      <Container>
        <PageHeader
          eyebrow="Content creation"
          title="Articles"
          description="Read original technical writing by Idris Junaid on AI learning, biopharma quality, robotics, automation, and responsible technical communication."
        />

        <div className="mt-10">
          <StatsSummary
            items={[
              {
                label: "Article records",
                value: articles.length,
                description: "Published and planned editorial pieces.",
              },
              {
                label: "Featured",
                value: featuredArticles.length,
                description: "Article ideas highlighted on the main portfolio path.",
              },
              {
                label: "Outlines",
                value: articles.filter((article) => article.status === "outline")
                  .length,
                description: "Ideas with enough shape to become drafts later.",
              },
              {
                label: "SEO keywords",
                value: uniqueKeywords.length,
                description: "Search-ready topic phrases prepared for future writing.",
              },
            ]}
          />
        </div>

        {featuredArticles.length > 0 ? (
          <div className="mt-14">
            <FeaturedSection
              title="Featured articles"
              description="Full length articles on pharmaceutical AI, intelligent Quality systems, biotechnology and robotics."
            >
              {featuredArticles.map((article) => (
                <ArticleCard
                  article={article}
                  detailHref={`/articles/${article.slug}`}
                  key={article.id}
                />
              ))}
            </FeaturedSection>
          </div>
        ) : null}

        <section className="mt-14">
          <SectionHeader
            eyebrow="Explore"
            title="Browse the article library"
              description="Explore published features and upcoming writing by category and status."
          />
          <div className="mt-6">
            <FilterBar
              activeCategory={activeCategory}
              activeStatus={activeStatus}
              basePath="/articles"
              categoryOptions={categoryGroups.map((group) => ({
                count: group.count,
                label: group.label,
                value: group.label,
              }))}
              statusOptions={statusGroups.map((group) => ({
                count: group.count,
                label: getStatusLabel(group.label),
                value: group.label,
              }))}
            />
          </div>

          {filteredArticles.length > 0 ? (
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {filteredArticles.map((article) => (
                <ArticleCard
                  article={article}
                  detailHref={`/articles/${article.slug}`}
                  key={article.id}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10">
              <EmptyState
                actionHref="/articles"
                actionLabel="Clear filters"
                description="No article records match the current category and status filters."
                title="No matching articles"
              />
            </div>
          )}
        </section>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <GroupedSummary
            description="Category grouping shows how content ideas support the learning hub's main audience paths."
            groups={categoryGroups}
            title="Articles by category"
          />
          <GroupedSummary
            description="Status grouping separates early ideas from outlines, drafts, and future published work."
            formatLabel={getStatusLabel}
            groups={statusGroups}
            title="Articles by status"
          />
        </div>

        <section className="mt-14 border-t border-zinc-200 pt-8">
          <SectionHeader
            title="Audience and keyword organization"
            description="Article tags prepare the future blog for audience focus, SEO readiness, and content planning."
          />
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <TagList
              items={getUniqueTags(articles, (article) => article.audience, 24)}
              label="Audience groups"
            />
            <TagList
              items={getUniqueTags(articles, (article) => article.keywords, 24)}
              label="SEO keywords"
            />
          </div>
        </section>

        <section className="mt-14 border-t border-zinc-200 pt-8">
          <SectionHeader
            eyebrow="Content growth"
            title="From article ideas to useful resources"
            description="The article pipeline is designed to support future project writeups, assignment breakdowns, newsletter topics, and resource publishing without rushing into a paid product."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {contentGrowthPaths.slice(0, 4).map((path) => (
              <article
                className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-900/[0.03]"
                key={path.title}
              >
                <h3 className="text-base font-semibold text-zinc-950">
                  {path.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  {path.summary}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-6 border-t border-zinc-200 pt-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeader
              title="Related resource pathways"
              description="Featured resource plans that can grow from the article pipeline once the writing becomes useful and repeatable."
            />
            <div className="mt-6 grid gap-5">
              {relatedResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
          <div className="grid gap-5">
            <NewsletterSignup context="articles" />
            <ResourceCallout
              description="The Resources page holds future study guides, templates, prompts, and planning tools without downloads, payments, or gated access yet."
              href="/resources"
              label="Explore planned resources"
              title="Follow the resource roadmap"
            />
          </div>
        </section>

        {articles.length === 0 ? (
          <div className="mt-10">
            <EmptyState
              description="Add article planning objects in src/content/articles.ts to render cards here."
              title="No article ideas yet"
            />
          </div>
        ) : null}
      </Container>
    </main>
  );
}
