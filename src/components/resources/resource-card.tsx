import type { Resource } from "@/content/resources";
import { StatusBadge, TagList } from "@/components/ui";

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-900/[0.03]">
      <div className="flex flex-wrap items-center gap-2">
        <StatusBadge status={resource.status} />
        <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-semibold text-zinc-700">
          {resource.accessType}
        </span>
      </div>
      <div className="mt-4 flex-1">
        <p className="text-sm font-semibold text-teal-700">{resource.category}</p>
        <h3 className="mt-2 text-xl font-semibold leading-tight text-zinc-950">
          {resource.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-zinc-700">{resource.summary}</p>
        <p className="mt-4 text-sm font-semibold text-zinc-900">
          Format: <span className="font-medium text-zinc-700">{resource.format}</span>
        </p>
        <div className="mt-5">
          <TagList items={resource.audience} label="Audience" />
        </div>
      </div>
      <div className="mt-5 border-t border-zinc-100 pt-4">
        <p className="text-sm leading-6 text-zinc-600">
          Future path: {resource.futureMonetizationPath}
        </p>
        <p className="mt-3 text-sm font-medium text-zinc-500">
          No download, payment, or gated access is connected yet.
        </p>
      </div>
    </article>
  );
}
