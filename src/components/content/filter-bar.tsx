import Link from "next/link";

export type FilterOption = {
  count?: number;
  label: string;
  value: string;
};

type FilterBarProps = {
  activeCategory?: string;
  activeStatus?: string;
  basePath: string;
  categoryOptions: FilterOption[];
  statusOptions: FilterOption[];
};

function buildHref(basePath: string, category?: string, status?: string) {
  const params = new URLSearchParams();

  if (category) {
    params.set("category", category);
  }

  if (status) {
    params.set("status", status);
  }

  const query = params.toString();
  return query ? `${basePath}?${query}` : basePath;
}

function FilterLinks({
  activeValue,
  basePath,
  category,
  label,
  options,
  status,
  type,
}: {
  activeValue?: string;
  basePath: string;
  category?: string;
  label: string;
  options: FilterOption[];
  status?: string;
  type: "category" | "status";
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-zinc-950">{label}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = activeValue === option.value;
          const nextCategory = type === "category" ? option.value : category;
          const nextStatus = type === "status" ? option.value : status;

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={`rounded-full border px-3 py-1.5 text-sm font-semibold transition ${
                isActive
                  ? "border-teal-700 bg-teal-800 text-white"
                  : "border-zinc-300 bg-white text-zinc-700 hover:border-teal-700 hover:text-teal-800"
              }`}
              href={buildHref(basePath, nextCategory, nextStatus)}
              key={option.value || "all"}
            >
              {option.label}
              {typeof option.count === "number" ? (
                <span className="ml-1 opacity-75">({option.count})</span>
              ) : null}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function FilterBar({
  activeCategory,
  activeStatus,
  basePath,
  categoryOptions,
  statusOptions,
}: FilterBarProps) {
  return (
    <section aria-label="Content filters" className="border-y border-zinc-200 py-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <FilterLinks
          activeValue={activeCategory ?? ""}
          basePath={basePath}
          category={activeCategory}
          label="Category"
          options={[{ label: "All categories", value: "" }, ...categoryOptions]}
          status={activeStatus}
          type="category"
        />
        <FilterLinks
          activeValue={activeStatus ?? ""}
          basePath={basePath}
          category={activeCategory}
          label="Status"
          options={[{ label: "All statuses", value: "" }, ...statusOptions]}
          status={activeStatus}
          type="status"
        />
      </div>
    </section>
  );
}
