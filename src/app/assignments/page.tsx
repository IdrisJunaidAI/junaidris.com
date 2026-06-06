import { AssignmentCard } from "@/components/cards";
import {
  FeaturedSection,
  FilterBar,
  GroupedSummary,
  StatsSummary,
} from "@/components/content";
import { Container, PageHeader, SectionHeader } from "@/components/layout";
import { EmptyState, getStatusLabel, TagList } from "@/components/ui";
import { assignments } from "@/content/assignments";
import {
  countBy,
  getSearchParam,
  getUniqueTags,
  matchesFilter,
  uniqueSorted,
  type SearchParamsInput,
} from "@/lib/content-utils";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("assignments");

type AssignmentsPageProps = {
  searchParams?: Promise<SearchParamsInput>;
};

export default async function AssignmentsPage({
  searchParams,
}: AssignmentsPageProps) {
  const params = searchParams ? await searchParams : {};
  const activeCategory = getSearchParam(params, "category");
  const activeStatus = getSearchParam(params, "status");
  const featuredAssignments = assignments.filter((assignment) => assignment.featured);
  const categoryGroups = countBy(assignments, (assignment) => assignment.category);
  const statusGroups = countBy(assignments, (assignment) => assignment.status);
  const uniqueSkills = uniqueSorted(assignments.flatMap((assignment) => assignment.skills));
  const filteredAssignments = assignments.filter(
    (assignment) =>
      matchesFilter(assignment.category, activeCategory) &&
      matchesFilter(assignment.status, activeStatus),
  );

  return (
    <main className="min-h-screen py-16 text-zinc-950 sm:py-20">
      <Container>
        <PageHeader
          eyebrow="Academic work"
          title="Assignments"
          description="This page documents academic work, technical learning, and project based assignments as professional portfolio artifacts."
        />

        <div className="mt-10">
          <StatsSummary
            items={[
              {
                label: "Assignment records",
                value: assignments.length,
                description: "Academic work tracked as portfolio-ready artifacts.",
              },
              {
                label: "Featured",
                value: featuredAssignments.length,
                description: "Highlighted on key portfolio surfaces.",
              },
              {
                label: "Complete",
                value: assignments.filter(
                  (assignment) => assignment.status === "complete",
                ).length,
                description: "Finished records ready for stronger evidence links.",
              },
              {
                label: "Skill tags",
                value: uniqueSkills.length,
                description: "Skills and methods practiced across coursework.",
              },
            ]}
          />
        </div>

        {featuredAssignments.length > 0 ? (
          <div className="mt-14">
            <FeaturedSection
              title="Featured assignments"
              description="Selected assignments that best show learning progress, technical communication, and portfolio readiness."
            >
              {featuredAssignments.map((assignment) => (
                <AssignmentCard
                  assignment={assignment}
                  detailHref={`/assignments/${assignment.id}`}
                  key={assignment.id}
                />
              ))}
            </FeaturedSection>
          </div>
        ) : null}

        <section className="mt-14">
          <SectionHeader
            eyebrow="Explore"
            title="Filter academic work"
            description="Browse assignments by category and status while the content library grows."
          />
          <div className="mt-6">
            <FilterBar
              activeCategory={activeCategory}
              activeStatus={activeStatus}
              basePath="/assignments"
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

          {filteredAssignments.length > 0 ? (
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {filteredAssignments.map((assignment) => (
                <AssignmentCard
                  assignment={assignment}
                  detailHref={`/assignments/${assignment.id}`}
                  key={assignment.id}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10">
              <EmptyState
                actionHref="/assignments"
                actionLabel="Clear filters"
                description="No assignment records match the current category and status filters."
                title="No matching assignments"
              />
            </div>
          )}
        </section>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <GroupedSummary
            description="Category grouping keeps coursework organized by the kind of learning or artifact being built."
            groups={categoryGroups}
            title="Assignments by category"
          />
          <GroupedSummary
            description="Status grouping shows what is complete, in progress, or planned for future evidence."
            formatLabel={getStatusLabel}
            groups={statusGroups}
            title="Assignments by status"
          />
        </div>

        <section className="mt-14 border-t border-zinc-200 pt-8">
          <SectionHeader
            title="Skill organization"
            description="These tags make it easier to connect coursework to academic outcomes, technical practice, and future project evidence."
          />
          <div className="mt-5">
            <TagList
              items={getUniqueTags(assignments, (assignment) => assignment.skills, 24)}
              label="Assignment skills"
            />
          </div>
        </section>

        {assignments.length === 0 ? (
          <div className="mt-10">
            <EmptyState
              description="Add assignment objects in src/content/assignments.ts to render cards here."
              title="No assignments yet"
            />
          </div>
        ) : null}
      </Container>
    </main>
  );
}
