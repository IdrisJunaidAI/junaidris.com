import { Container, PageHeader, SectionHeader } from "@/components/layout";
import { TagList } from "@/components/ui";
import { contentPillars } from "@/content/content-pillars";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("about");

const identityHighlights = [
  "Artificial Intelligence student",
  "Pharma quality assurance professional",
  "Biotech manufacturing background",
  "Analytical chemistry foundation",
  "Regulated operations experience",
  "AI, robotics, automation, healthcare innovation, and entrepreneurship focus",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16 text-zinc-950 sm:py-20">
      <Container>
        <PageHeader
          eyebrow="Professional identity"
          title="About"
          description="Efficacy AI Learning Hub connects academic growth in artificial intelligence with practical experience in pharma quality, biotech manufacturing, analytical chemistry, and regulated operations."
        />

        <section className="mt-10 grid gap-10 border-y border-zinc-200 py-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeader
              title="Positioning"
              description="The site is built around a credible learning journey: becoming stronger in AI and machine learning while applying professional judgment from quality assurance and regulated operations."
            />
            <p className="mt-5 text-sm leading-6 text-zinc-700">
              The tone is intentionally grounded: this is a record of learning,
              practice, project development, and professional direction rather
              than a claim of finished expertise.
            </p>
          </div>
          <div>
            <TagList items={identityHighlights} label="Identity signals" />
          </div>
        </section>

        <section className="mt-12">
          <SectionHeader
            eyebrow="Content pillars"
            title="What the hub will keep documenting"
            description="These themes organize academic work, projects, articles, and future resources without overstating progress."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {contentPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-900/[0.03]"
              >
                <h2 className="text-lg font-semibold text-zinc-950">{pillar.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-700">{pillar.purpose}</p>
                <p className="mt-4 text-sm font-medium text-zinc-900">
                  Future opportunity
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-700">
                  {pillar.futureMonetizationOpportunity}
                </p>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </main>
  );
}
