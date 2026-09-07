import Link from "next/link";
import { ArticleCard, AssignmentCard, ProjectCard } from "@/components/cards";
import { NewsletterSignup } from "@/components/lead";
import { Container, SectionHeader } from "@/components/layout";
import { ResourceCard } from "@/components/resources";
import { articles } from "@/content/articles";
import { assignments } from "@/content/assignments";
import { contentPillars } from "@/content/content-pillars";
import { futureMonetizationPaths } from "@/content/growth";
import { projects } from "@/content/projects";
import { resources } from "@/content/resources";
import { pharmaDispatch } from "@/content/pharma-dispatch";
import { OrbitHero } from "@/components/orbit/orbit-hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata("home");

const learningRoadmap = [
  {
    stage: "AI foundations",
    summary:
      "Build fluency in core AI concepts, responsible use, technical vocabulary, and evidence-based learning habits.",
  },
  {
    stage: "Machine learning practice",
    summary:
      "Move from beginner concepts into datasets, models, evaluation, and portfolio-ready explanations.",
  },
  {
    stage: "Software projects",
    summary:
      "Use GitHub, TypeScript, and reusable project structure to turn coursework into professional artifacts.",
  },
  {
    stage: "Automation and AI agents",
    summary:
      "Design workflow systems for academic productivity, quality operations, and repeatable decision support.",
  },
  {
    stage: "Entrepreneurship",
    summary:
      "Grow the site toward useful resources, content systems, digital products, and future consulting readiness.",
  },
];

export default function Home() {
  const featuredAssignments = assignments.filter((assignment) => assignment.featured);
  const featuredProjects = projects.filter((project) => project.featured);
  const featuredArticles = articles.filter((article) => article.featured);
  const featuredResources = resources.filter((resource) => resource.featured).slice(0, 3);
  const featuredPillars = contentPillars.slice(0, 6);

  return (
    <main className="min-h-screen text-zinc-950">
      <OrbitHero />

      <section className="border-b border-zinc-200 bg-[#f7f7f3] py-14 sm:py-18">
        <Container className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div><p className="eyebrow text-zinc-500">A design universe</p><h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-zinc-950 sm:text-4xl">Where regulated systems meet expressive technology.</h2></div>
          <p className="max-w-2xl text-base leading-7 text-zinc-600">My practice spans product interfaces, brand systems, AI-assisted workflows, and technical writing for the teams building what comes next in biopharma, robotics, and intelligent software.</p>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeader
            eyebrow="Professional identity"
            title="A technical learning journey grounded in regulated operations"
            description="This site connects AI coursework, machine learning practice, software development, biotech manufacturing experience, pharma quality assurance, analytical chemistry, and future automation work."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Artificial Intelligence student",
              "Pharma quality professional",
              "Biotech manufacturing background",
              "Automation and healthcare innovation focus",
            ].map((item) => (
              <div
                className="border-l-2 border-teal-700 bg-teal-50/50 px-4 py-3 text-sm font-semibold text-zinc-900"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-200 bg-[#f4f8f6] py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Academic work"
              title="Featured assignments"
              description="Selected assignments that document technical learning, course progress, and portfolio-ready communication."
            />
            <Link href="/assignments" className="text-sm font-semibold text-teal-800">
              View all assignments
            </Link>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {featuredAssignments.map((assignment) => (
              <AssignmentCard
                assignment={assignment}
                detailHref={`/assignments/${assignment.id}`}
                key={assignment.id}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Applied work"
              title="Featured projects"
              description="Applied project shells for AI, pharma quality automation, healthcare innovation, developer tools, and student success systems."
            />
            <Link href="/projects" className="text-sm font-semibold text-teal-800">
              View all projects
            </Link>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                detailHref={`/projects/${project.id}`}
                key={project.id}
                project={project}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-200 bg-[#f8f7f1] py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Content creation"
              title="Featured article ideas"
              description="Planned articles that turn coursework, professional insight, and AI learning into useful public writing."
            />
            <Link href="/articles" className="text-sm font-semibold text-teal-800">
              View article plan
            </Link>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <ArticleCard
                article={article}
                detailHref={`/articles/${article.slug}`}
                key={article.id}
              />
            ))}
          </div>
        </Container>
      </section>

      <section id="dispatch" className="bg-[#eef2f5] py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader eyebrow="Original technical writing" title="AI Pharma Dispatch" description="A living notebook on AI, biopharma operations, robotics, and the writing practices that make technical change trustworthy." />
            <span className="rounded-full border border-zinc-300 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Updated monthly</span>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {pharmaDispatch.map((item) => <article key={item.id} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/[0.04]"><div className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-zinc-400"><span>{item.label}</span><span>{item.date}</span></div><h3 className="mt-7 text-xl font-medium tracking-[-0.025em] text-zinc-950">{item.title}</h3><p className="mt-4 text-sm leading-6 text-zinc-600">{item.summary}</p><p className="mt-6 text-xs font-semibold text-teal-800">{item.readTime} <span className="ml-2">↗</span></p></article>)}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Resources"
              title="Future resource pathways"
              description="Planned study guides, templates, prompt packs, and project planning tools that can grow from the current assignments, projects, and articles."
            />
            <Link href="/resources" className="text-sm font-semibold text-teal-800">
              Explore resources
            </Link>
          </div>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-200 bg-[#f4f8f6] py-16 sm:py-20">
        <Container>
          <SectionHeader
            align="center"
            eyebrow="Content pillars"
            title="A focused platform for learning, building, and teaching"
            description="These pillars keep the hub organized as assignments, projects, articles, and future resources expand."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-900/[0.03]"
              >
                <h3 className="text-lg font-semibold text-zinc-950">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-700">{pillar.purpose}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-950 py-16 text-white sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Learning roadmap"
            theme="dark"
            title="From AI foundations to automation and entrepreneurship"
            description="The roadmap is intentionally practical: learn the foundations, build credible projects, explain the work clearly, then grow toward useful resources and future ventures."
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-5">
            {learningRoadmap.map((item, index) => (
              <li
                key={item.stage}
                className="border-l border-teal-300/40 pl-4 md:border-l-0 md:border-t md:pt-4"
              >
                <p className="text-sm font-semibold text-teal-200">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-base font-semibold text-white">{item.stage}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{item.summary}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="Monetization readiness"
            title="A careful roadmap for future value"
            description="Nothing is being sold yet. These pathways simply reserve space for useful resources, subscriber content, and professional services after the audience and value become clearer."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {futureMonetizationPaths.slice(0, 8).map((path) => (
              <div
                className="rounded-lg border border-zinc-200 bg-[#f4f8f6] px-4 py-3 text-sm font-semibold text-zinc-900"
                key={path.title}
              >
                <h3>{path.title}</h3>
                <p className="mt-2 text-sm font-normal leading-6 text-zinc-700">
                  {path.summary}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-200 bg-[#f4f8f6] py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <SectionHeader
            eyebrow="Newsletter preview"
            title="A future channel for useful learning updates"
            description="The newsletter is only a planned content path right now. Later it can share AI learning notes, project updates, pharma quality automation reflections, and resource releases."
          />
          <NewsletterSignup context="home" />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Collaboration
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-950">
              Academic, AI, quality, and content collaboration
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-700">
              Connect about assignment review, AI project ideas, pharma quality
              automation, learning content, or future professional opportunities.
            </p>
          </div>
          <Link
            href="/contact"
            className="w-fit rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-900"
          >
            Contact
          </Link>
        </Container>
      </section>
    </main>
  );
}
