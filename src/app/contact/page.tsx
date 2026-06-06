import { Container, PageHeader, SectionHeader } from "@/components/layout";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("contact");

const collaborationPaths = [
  "Academic project review and assignment feedback",
  "AI project collaboration and portfolio development",
  "Content and learning journey conversations",
  "Pharma quality automation and healthcare innovation discussion",
];

const contactPlaceholders = [
  {
    label: "Email",
    value: "hello@example.com",
    note: "Placeholder email",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/placeholder",
    note: "Placeholder LinkedIn",
  },
  {
    label: "GitHub",
    value: "github.com/placeholder",
    note: "Placeholder GitHub",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16 text-zinc-950 sm:py-20">
      <Container>
        <PageHeader
          eyebrow="Collaboration"
          title="Contact"
          description="Use this page as a lightweight contact hub for academic review, AI project collaboration, content conversations, and professional connections."
        />

        <section className="mt-10 grid gap-10 border-y border-zinc-200 py-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeader
              title="Collaboration message"
              description="I am building this site to document learning, share useful project work, and connect academic progress with practical AI, automation, and quality systems interests."
            />
            <ul className="mt-6 space-y-3">
              {collaborationPaths.map((path) => (
                <li
                  key={path}
                  className="rounded-lg border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 shadow-sm shadow-zinc-900/[0.03]"
                >
                  {path}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeader
              title="Contact placeholders"
              description="These are front end placeholders only. A connected form, verified links, and backend handling can be added in a later phase."
            />
            <dl className="mt-6 space-y-4">
              {contactPlaceholders.map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm shadow-zinc-900/[0.03]"
                >
                  <dt className="text-sm font-medium text-zinc-900">{item.label}</dt>
                  <dd className="mt-1 text-sm text-zinc-700">{item.value}</dd>
                  <dd className="mt-1 text-xs uppercase tracking-wide text-zinc-500">
                    {item.note}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </Container>
    </main>
  );
}
