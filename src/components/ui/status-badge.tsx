type StatusBadgeProps = {
  status: string;
};

const statusLabels: Record<string, string> = {
  planned: "Planned",
  concept: "Concept",
  idea: "Idea",
  outline: "Outline",
  draft: "Draft",
  published: "Published",
  prototype: "Prototype",
  "in-progress": "In progress",
  complete: "Complete",
};

const statusStyles: Record<string, string> = {
  planned: "border-amber-200 bg-amber-50 text-amber-800",
  concept: "border-sky-200 bg-sky-50 text-sky-800",
  idea: "border-sky-200 bg-sky-50 text-sky-800",
  outline: "border-teal-200 bg-teal-50 text-teal-800",
  draft: "border-teal-200 bg-teal-50 text-teal-800",
  published: "border-emerald-200 bg-emerald-50 text-emerald-800",
  prototype: "border-indigo-200 bg-indigo-50 text-indigo-800",
  "in-progress": "border-teal-200 bg-teal-50 text-teal-800",
  complete: "border-emerald-200 bg-emerald-50 text-emerald-800",
};

export function getStatusLabel(status: string) {
  return statusLabels[status] ?? status;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${statusStyles[status] ?? "border-zinc-300 bg-zinc-50 text-zinc-700"}`}
    >
      {getStatusLabel(status)}
    </span>
  );
}
