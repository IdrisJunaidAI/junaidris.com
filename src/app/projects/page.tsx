import { ProjectCard } from "@/components/cards";
import {
  FeaturedSection,
  FilterBar,
  GroupedSummary,
  StatsSummary,
} from "@/components/content";
import { Container, PageHeader, SectionHeader } from "@/components/layout";
import { EmptyState, getStatusLabel, TagList } from "@/components/ui";
import { projectCategories, projects } from "@/content/projects";
import {
  countBy,
  getSearchParam,
  getUniqueTags,
  matchesFilter,
  uniqueSorted,
  type SearchParamsInput,
} from "@/lib/content-utils";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("projects");

type ProjectsPageProps = {
  searchParams?: Promise<SearchParamsInput>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = searchParams ? await searchParams : {};
  const activeCategory = getSearchParam(params, "category");
  const activeStatus = getSearchParam(params, "status");
  const featuredProjects = projects.filter((project) => project.featured);
  const categoryGroups = countBy(projects, (project) => project.category);
  const statusGroups = countBy(projects, (project) => project.status);
  const uniqueTools = uniqueSorted(projects.flatMap((project) => project.tools));
  const filteredProjects = projects.filter(
    (project) =>
      matchesFilter(project.category, activeCategory) &&
      matchesFilter(project.status, activeStatus),
  );

  return (
    <main className="min-h-screen py-16 text-zinc-950 sm:py-20">
      <Container>
        <PageHeader
          eyebrow="Applied work"
          title="Projects"
          description="This page documents AI, pharma quality automation, robotics, healthcare innovation, developer tools, and student success systems."
        />

        <div className="mt-10">
          <StatsSummary
            items={[
              {
                label: "Project records",
                value: projects.length,
                description: "Applied project shells ready for evidence links.",
              },
              {
                label: "Featured",
                value: featuredProjects.length,
                description: "Projects highlighted for the portfolio story.",
              },
              {
                label: "Categories",
                value: projectCategories.length,
                description: "Strategic paths across AI, quality, tools, and content.",
              },
              {
                label: "Tool tags",
                value: uniqueTools.length,
                description: "Technologies, methods, and systems represented.",
              },
            ]}
          />
        </div>

        {featuredProjects.length > 0 ? (
          <div className="mt-14">
            <FeaturedSection
              title="Featured projects"
              description="Selected project records that connect AI learning, automation strategy, and portfolio development."
            >
              {featuredProjects.map((project) => (
                <ProjectCard
                  detailHref={`/projects/${project.id}`}
                  key={project.id}
                  project={project}
                />
              ))}
            </FeaturedSection>
          </div>
        ) : null}

        <section className="mt-14">
          <SectionHeader
            eyebrow="Explore"
            title="Filter project work"
            description="Browse project records by strategic category and build status."
          />
          <div className="mt-6">
            <FilterBar
              activeCategory={activeCategory}
              activeStatus={activeStatus}
              basePath="/projects"
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

          {filteredProjects.length > 0 ? (
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {filteredProjects.map((project) => (
                <ProjectCard
                  detailHref={`/projects/${project.id}`}
                  key={project.id}
                  project={project}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10">
              <EmptyState
                actionHref="/projects"
                actionLabel="Clear filters"
                description="No project records match the current category and status filters."
                title="No matching projects"
              />
            </div>
          )}
        </section>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <GroupedSummary
            description="Category grouping keeps projects aligned with the site pillars and future portfolio paths."
            groups={categoryGroups}
            title="Projects by category"
          />
          <GroupedSummary
            description="Status grouping separates concepts from work that has moved into active development."
            formatLabel={getStatusLabel}
            groups={statusGroups}
            title="Projects by status"
          />
        </div>

        <section className="mt-14 border-t border-zinc-200 pt-8">
          <SectionHeader
            title="Tool organization"
            description="Project tags make the portfolio easier to scan by technology, workflow, and domain method."
          />
          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <TagList items={projectCategories} label="Project categories" />
            <TagList
              items={getUniqueTags(projects, (project) => project.tools, 24)}
              label="Project tools and methods"
            />
          </div>
        </section>

        {projects.length === 0 ? (
          <div className="mt-8">
            <EmptyState
              description="Add project objects in src/content/projects.ts to render cards here."
              title="No projects yet"
            />
          </div>
        ) : null}
      </Container>
    </main>
  );
}
