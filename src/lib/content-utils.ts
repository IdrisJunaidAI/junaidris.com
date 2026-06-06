export type CountGroup = {
  count: number;
  label: string;
};

export type SearchParamsInput = Record<string, string | string[] | undefined>;

export function getSearchParam(
  searchParams: SearchParamsInput,
  key: string,
): string | undefined {
  const value = searchParams[key];

  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

export function uniqueSorted(values: string[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

export function countBy<T>(items: T[], getValue: (item: T) => string): CountGroup[] {
  const counts = new Map<string, number>();

  for (const item of items) {
    const value = getValue(item);
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([label, count]) => ({ count, label }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export function matchesFilter(value: string, activeFilter?: string) {
  return !activeFilter || value === activeFilter;
}

export function getUniqueTags<T>(
  items: T[],
  getTags: (item: T) => string[],
  limit = 12,
) {
  return uniqueSorted(items.flatMap(getTags)).slice(0, limit);
}
