import Link from "next/link";
import { NewsletterSignup } from "@/components/lead";
import { futureNavIdeas, primaryNav } from "@/content/navigation";

const contentAreas = [
  "AI learning resources",
  "Machine learning study guides",
  "Pharma quality automation resources",
  "Student success systems",
];

const socialPlaceholders = ["LinkedIn pending", "GitHub pending", "YouTube pending"];

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-zinc-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1.25fr] lg:px-8">
        <div>
          <p className="text-lg font-semibold text-white">Efficacy AI Learning Hub</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-400">
            A professional learning and project hub for AI, software development,
            pharma quality systems, automation, healthcare innovation, and future
            digital ventures.
          </p>
          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
              Professional identity
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              AI student, pharma quality professional, automation learner, and
              future digital resource builder.
            </p>
          </div>
          <ul className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-500">
            {socialPlaceholders.map((item) => (
              <li
                className="rounded-full border border-zinc-800 px-2.5 py-1"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
            Main pages
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-zinc-300 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
            Content areas
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            {contentAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
            Future resources
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>
              <Link href="/resources" className="text-zinc-300 hover:text-white">
                Resource library
              </Link>
            </li>
            {futureNavIdeas.slice(0, 4).map((item) => (
              <li key={item.href}>{item.label}</li>
            ))}
          </ul>
        </div>

        <NewsletterSignup compact context="footer" theme="dark" />
      </div>
      <div className="border-t border-zinc-800 px-5 py-5 text-center text-xs text-zinc-500">
        Copyright 2026 Efficacy AI Learning Hub. Built as a phased portfolio and
        content platform foundation.
      </div>
    </footer>
  );
}
