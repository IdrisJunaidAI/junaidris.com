import Link from "next/link";
import type { Project } from "@/content/projects";
import { ContentLinkList } from "@/components/ui/content-link-list";
import { StatusBadge } from "@/components/ui/status-badge";
import { TagList } from "@/components/ui/tag-list";

type ProjectCardProps = {
  detailHref?: string;
  project: Project;
};

export function ProjectCard({ detailHref, project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/[0.03] transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md hover:shadow-teal-900/[0.06]">
      <div className="h-1 bg-gradient-to-r from-teal-700 via-emerald-600 to-amber-500" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={project.status} />
          <span className="text-sm font-medium text-zinc-600">{project.category}</span>
        </div>
        <div className="mt-4 flex-1">
          <h2 className="text-xl font-semibold leading-tight tracking-normal text-zinc-950">
            {project.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">{project.summary}</p>
          <div className="mt-5">
            <p className="text-sm font-semibold text-zinc-900">Problem solved</p>
            <p className="mt-2 text-sm leading-6 text-zinc-700">
              {project.problemSolved}
            </p>
          </div>
          <div className="mt-5">
            <TagList items={project.tools} label="Tools and methods" />
          </div>
          <div className="mt-5">
            <p className="text-sm font-semibold text-zinc-900">Future potential</p>
            <p className="mt-2 text-sm leading-6 text-zinc-700">
              {project.futurePotential}
            </p>
          </div>
        </div>
        <div className="mt-5 border-t border-zinc-100 pt-4">
          <ContentLinkList liveUrl={project.liveUrl} repositoryUrl={project.repositoryUrl} />
          {detailHref ? (
            <Link
              className="mt-3 inline-flex text-sm font-semibold text-teal-800 transition hover:text-teal-950"
              href={detailHref}
            >
              View project details
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
