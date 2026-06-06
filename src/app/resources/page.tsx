import {
  FilterBar,
  GroupedSummary,
  StatsSummary,
} from "@/components/content";
import { NewsletterSignup, ResourceCallout, WaitlistCard } from "@/components/lead";
import { Container, PageHeader, SectionHeader } from "@/components/layout";
import { ResourceCard } from "@/components/resources";
import { EmptyState, getStatusLabel } from "@/components/ui";
import { newsletterInterests } from "@/content/growth";
import { resourceCategories, resources } from "@/content/resources";
import {
  countBy,
  getSearchParam,
  matchesFilter,
  uniqueSorted,
  type SearchParamsInput,
} from "@/lib/content-utils";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("resources");

type ResourcesPageProps = {
  searchParams?: Promise<SearchParamsInput>;
};

export default async function ResourcesPage({ searchParams }: ResourcesPageProps) {
  const params = searchParams ? await searchParams : {};
  const activeCategory = getSearchParam(params, "category");
  const activeStatus = getSearchParam(params, "status");
  const featuredResources = resources.filter((resource) => resource.featured);
  const categoryGroups = countBy(resources, (resource) => resource.category);
  const statusGroups = countBy(resources, (resource) => resource.status);
  const accessTypes = uniqueSorted(resources.map((resource) => resource.accessType));
  const filteredResources = resources.filter(
    (resource) =>
      matchesFilter(resource.category, activeCategory) &&
      matchesFilter(resource.status, activeStatus),
  );

  return (
    <main className="min-h-screen py-16 text-zinc-950 sm:py-20">
      <Container>
        <PageHeader
          eyebrow="Resource pathways"
          title="Resources"
          description="A front-end-ready resource library for future AI study guides, machine learning notes, GitHub templates, GMP learning tools, prompts, and student success systems."
        />

        <div className="mt-10">
          <StatsSummary
            items={[
              {
                label: "Resource records",
                value: resources.length,
                description: "Structured placeholders for future learning assets.",
              },
              {
                label: "Featured",
                value: featuredResources.length,
                description: "Priority resources for early audience growth.",
              },
              {
                label: "Categories",
                value: resourceCategories.length,
                description: "Resource pathways across AI, quality, workflow, and study systems.",
              },
              {
                label: "Access types",
                value: accessTypes.length,
                description: "No payment, downloads, or gated access are connected yet.",
              },
            ]}
          />
        </div>

        {featuredResources.length > 0 ? (
          <section className="mt-14">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeader
                eyebrow="Featured"
                title="Resource pathway preview"
                description="These planned resources show how articles, assignments, and projects can turn into practical guides and templates over time."
              />
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {featuredResources.slice(0, 6).map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-14">
          <SectionHeader
            eyebrow="Explore"
            title="Filter planned resources"
            description="Browse future resources by category and readiness status. Nothing here is downloadable, paid, or gated yet."
          />
          <div className="mt-6">
            <FilterBar
              activeCategory={activeCategory}
              activeStatus={activeStatus}
              basePath="/resources"
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

          {filteredResources.length > 0 ? (
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {filteredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          ) : (
            <div className="mt-10">
              <EmptyState
                actionHref="/resources"
                actionLabel="Clear filters"
                description="No planned resources match the current category and status filters."
                title="No matching resources"
              />
            </div>
          )}
        </section>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <GroupedSummary
            description="Category grouping keeps resource ideas connected to learning, projects, quality systems, and student success."
            groups={categoryGroups}
            title="Resources by category"
          />
          <GroupedSummary
            description="Status grouping keeps expectations clear while resources are still planned, outlined, or drafted."
            formatLabel={getStatusLabel}
            groups={statusGroups}
            title="Resources by status"
          />
        </div>

        <section className="mt-14 border-t border-zinc-200 pt-8">
          <SectionHeader
            eyebrow="Lead capture structure"
            title="Future waitlist pathways"
            description="These cards prepare the front end for resource interest, study guide waitlists, templates, consulting interest, and community interest without storing or sending data."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <WaitlistCard
              description="Register interest in future AI study guides, machine learning notes, and learning roadmaps."
              intent="study-guide-waitlist"
              interests={newsletterInterests}
              title="Study guide waitlist"
            />
            <WaitlistCard
              description="Register interest in future GitHub, GMP, student workflow, and project planning templates."
              intent="template-waitlist"
              interests={newsletterInterests}
              title="Template waitlist"
            />
            <WaitlistCard
              description="Register interest in future consulting, community, or deeper project support paths."
              intent="consulting-interest"
              interests={newsletterInterests}
              title="Consulting and community interest"
            />
          </div>
        </section>

        <section className="mt-14 grid gap-6 border-t border-zinc-200 pt-8 lg:grid-cols-2">
          <ResourceCallout
            description="Article ideas can become deeper explainers, resource outlines, templates, and project walkthroughs after the content proves useful."
            href="/articles"
            label="View article pipeline"
            title="Articles feed future resources"
          />
          <NewsletterSignup context="resources" />
        </section>
      </Container>
    </main>
  );
}
