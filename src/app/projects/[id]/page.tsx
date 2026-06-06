import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, PageHeader, SectionHeader } from "@/components/layout";
import { ContentLinkList, StatusBadge, TagList } from "@/components/ui";
import { projects } from "@/content/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function getProject(id: string) {
  return projects.find((project) => project.id === id);
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: `${project.title} | Projects`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = getProject(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 text-zinc-950 sm:py-20">
      <Container>
        <PageHeader
          eyebrow={project.category}
          title={project.title}
          description={project.summary}
        />

        <div className="mt-8 flex flex-wrap items-center gap-3 border-y border-zinc-200 py-5">
          <StatusBadge status={project.status} />
          <span className="text-sm font-semibold text-zinc-700">
            {project.category}
          </span>
        </div>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="border-l-2 border-teal-700 bg-teal-50/50 px-5 py-4">
            <p className="text-sm font-semibold text-zinc-950">Problem solved</p>
            <p className="mt-2 text-sm leading-6 text-zinc-700">
              {project.problemSolved}
            </p>
          </div>

          <div className="border-l-2 border-amber-500 bg-amber-50/60 px-5 py-4">
            <p className="text-sm font-semibold text-zinc-950">Future potential</p>
            <p className="mt-2 text-sm leading-6 text-zinc-700">
              {project.futurePotential}
            </p>
          </div>
        </section>

        <section className="mt-12 border-t border-zinc-200 pt-8">
          <SectionHeader
            title="Tools and methods"
            description="These tags show the current technical and strategic ingredients for the project."
          />
          <div className="mt-5">
            <TagList items={project.tools} label="Project tools and methods" />
          </div>
        </section>

        <section className="mt-12 border-t border-zinc-200 pt-8">
          <SectionHeader
            title="Detail readiness"
            description="This route is prepared for future case studies, repository links, prototypes, screenshots, validation notes, and build updates."
          />
          <div className="mt-5">
            <ContentLinkList
              liveUrl={project.liveUrl}
              repositoryUrl={project.repositoryUrl}
            />
          </div>
        </section>

        <Link
          className="mt-10 inline-flex text-sm font-semibold text-teal-800 transition hover:text-teal-950"
          href="/projects"
        >
          Back to projects
        </Link>
      </Container>
    </main>
  );
}
