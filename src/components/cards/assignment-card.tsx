import Link from "next/link";
import type { Assignment } from "@/content/assignments";
import { ContentLinkList } from "@/components/ui/content-link-list";
import { StatusBadge } from "@/components/ui/status-badge";
import { TagList } from "@/components/ui/tag-list";

type AssignmentCardProps = {
  assignment: Assignment;
  detailHref?: string;
};

export function AssignmentCard({ assignment, detailHref }: AssignmentCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm shadow-zinc-900/[0.03] transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md hover:shadow-teal-900/[0.06]">
      <div className="h-1 bg-gradient-to-r from-teal-700 via-emerald-600 to-amber-500" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={assignment.status} />
          <span className="text-sm font-medium text-zinc-600">
            {assignment.category}
          </span>
          <time className="text-sm text-zinc-500" dateTime={assignment.date}>
            {assignment.date}
          </time>
        </div>
        <div className="mt-4 flex-1">
          <p className="text-sm font-semibold text-teal-700">{assignment.course}</p>
          <h2 className="mt-2 text-xl font-semibold leading-tight tracking-normal text-zinc-950">
            {assignment.title}
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-700">
            {assignment.summary}
          </p>
          <div className="mt-5">
            <TagList items={assignment.skills} label="Skills practiced" />
          </div>
          <div className="mt-5">
            <p className="text-sm font-semibold text-zinc-900">Learning outcome</p>
            <p className="mt-2 text-sm leading-6 text-zinc-700">
              {assignment.learningOutcome}
            </p>
          </div>
        </div>
        <div className="mt-5 border-t border-zinc-100 pt-4">
          <ContentLinkList
            liveUrl={assignment.liveUrl}
            repositoryUrl={assignment.repositoryUrl}
          />
          {detailHref ? (
            <Link
              className="mt-3 inline-flex text-sm font-semibold text-teal-800 transition hover:text-teal-950"
              href={detailHref}
            >
              View assignment details
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
