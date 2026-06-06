import Link from "next/link";

type ResourceCalloutProps = {
  description: string;
  href: string;
  label: string;
  title: string;
};

export function ResourceCallout({
  description,
  href,
  label,
  title,
}: ResourceCalloutProps) {
  return (
    <div className="border-l-2 border-teal-700 bg-teal-50/50 px-5 py-4">
      <h3 className="text-lg font-semibold text-zinc-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-700">{description}</p>
      <Link
        className="mt-4 inline-flex text-sm font-semibold text-teal-800 transition hover:text-teal-950"
        href={href}
      >
        {label}
      </Link>
    </div>
  );
}
