export type StatItem = {
  description?: string;
  label: string;
  value: number | string;
};

type StatsSummaryProps = {
  items: StatItem[];
};

export function StatsSummary({ items }: StatsSummaryProps) {
  return (
    <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-900/[0.03]"
          key={item.label}
        >
          <dt className="text-sm font-medium text-zinc-600">{item.label}</dt>
          <dd className="mt-2 text-3xl font-semibold text-zinc-950">{item.value}</dd>
          {item.description ? (
            <dd className="mt-2 text-sm leading-6 text-zinc-600">{item.description}</dd>
          ) : null}
        </div>
      ))}
    </dl>
  );
}
