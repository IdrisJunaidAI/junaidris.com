import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, PageHeader, SectionHeader } from "@/components/layout";
import { ContentLinkList, StatusBadge, TagList } from "@/components/ui";
import { assignments } from "@/content/assignments";

type AssignmentDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function getAssignment(id: string) {
  return assignments.find((assignment) => assignment.id === id);
}

export function generateStaticParams() {
  return assignments.map((assignment) => ({
    id: assignment.id,
  }));
}

export async function generateMetadata({
  params,
}: AssignmentDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const assignment = getAssignment(id);

  if (!assignment) {
    return {
      title: "Assignment not found",
    };
  }

  return {
    title: `${assignment.title} | Assignments`,
    description: assignment.summary,
  };
}

export default async function AssignmentDetailPage({
  params,
}: AssignmentDetailPageProps) {
  const { id } = await params;
  const assignment = getAssignment(id);

  if (!assignment) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 text-zinc-950 sm:py-20">
      <Container>
        <PageHeader
          eyebrow={assignment.course}
          title={assignment.title}
          description={assignment.summary}
        />

        <div className="mt-8 flex flex-wrap items-center gap-3 border-y border-zinc-200 py-5">
          <StatusBadge status={assignment.status} />
          <span className="text-sm font-semibold text-zinc-700">
            {assignment.category}
          </span>
          <time className="text-sm text-zinc-600" dateTime={assignment.date}>
            {assignment.date}
          </time>
        </div>

        <section className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              title="Skills practiced"
              description="The skills below connect the assignment to the broader academic and technical portfolio."
            />
            <div className="mt-5">
              <TagList items={assignment.skills} label="Assignment skills" />
            </div>
          </div>

          <div className="border-l-2 border-teal-700 bg-teal-50/50 px-5 py-4">
            <p className="text-sm font-semibold text-zinc-950">Learning outcome</p>
            <p className="mt-2 text-sm leading-6 text-zinc-700">
              {assignment.learningOutcome}
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-zinc-200 pt-8">
          <SectionHeader
            title="Detail readiness"
            description="This route is prepared for future evidence such as repositories, live previews, screenshots, professor feedback, reflections, and final write-ups."
          />
          <div className="mt-5">
            <ContentLinkList
              liveUrl={assignment.liveUrl}
              repositoryUrl={assignment.repositoryUrl}
            />
          </div>
        </section>

        <Link
          className="mt-10 inline-flex text-sm font-semibold text-teal-800 transition hover:text-teal-950"
          href="/assignments"
        >
          Back to assignments
        </Link>
      </Container>
    </main>
  );
}
