import type { CountGroup } from "@/lib/content-utils";

type GroupedSummaryProps = {
  description?: string;
  formatLabel?: (label: string) => string;
  groups: CountGroup[];
  title: string;
};

export function GroupedSummary({
  description,
  formatLabel = (label) => label,
  groups,
  title,
}: GroupedSummaryProps) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-zinc-950">{title}</h2>
      {description ? (
        <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-700">{description}</p>
      ) : null}
      <dl className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <div
            className="rounded-lg border border-zinc-200 bg-white px-4 py-3 shadow-sm shadow-zinc-900/[0.03]"
            key={group.label}
          >
            <dt className="text-sm font-medium text-zinc-700">
              {formatLabel(group.label)}
            </dt>
            <dd className="mt-1 text-2xl font-semibold text-zinc-950">{group.count}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
