type TagListProps = {
  items: string[];
  label: string;
};

export function TagList({ items, label }: TagListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div aria-label={label}>
      <p className="text-sm font-semibold text-zinc-900">{label}</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-teal-100 bg-teal-50/70 px-2.5 py-1 text-xs font-medium text-teal-900"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
