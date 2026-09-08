import Link from "next/link";
import { primaryNav } from "@/content/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group inline-flex items-center gap-3 text-base font-semibold text-zinc-950"
        >
          <span
            aria-hidden="true"
            className="flex size-9 items-center justify-center rounded-full bg-teal-900 text-sm font-bold text-white shadow-sm shadow-teal-900/20"
          >
            IJ
          </span>
          <span className="leading-tight">
            Junaidris
            <span className="block text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
              Idris Junaid · Design · AI
            </span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-x-0.5 text-sm font-medium text-zinc-700">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-2.5 py-2 transition hover:bg-teal-50 hover:text-teal-800"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <details className="group relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-zinc-300 bg-white px-3 py-2 text-sm font-semibold text-zinc-900">
            Menu
          </summary>
          <nav
            aria-label="Mobile primary navigation"
            className="absolute right-0 mt-3 w-56 rounded-lg border border-zinc-200 bg-white p-2 shadow-lg shadow-zinc-900/10"
          >
            <ul className="space-y-1">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-teal-50 hover:text-teal-800"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
