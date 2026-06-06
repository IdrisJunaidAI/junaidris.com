type ContentLinkListProps = {
  repositoryUrl?: string | null;
  liveUrl?: string | null;
};

export function ContentLinkList({ repositoryUrl, liveUrl }: ContentLinkListProps) {
  const links = [
    { href: repositoryUrl, label: "Repository" },
    { href: liveUrl, label: "Live preview" },
  ];

  return (
    <div className="flex flex-wrap gap-2" aria-label="Content links">
      {links.map((link) =>
        link.href ? (
          <a
            key={link.label}
            href={link.href}
            aria-label={`Open ${link.label.toLowerCase()} for this item`}
            className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-sm font-semibold text-zinc-900 transition hover:border-teal-700 hover:text-teal-700"
            rel="noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        ) : (
          <span
            key={link.label}
            className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-sm text-zinc-500"
          >
            {link.label} pending
          </span>
        ),
      )}
    </div>
  );
}
