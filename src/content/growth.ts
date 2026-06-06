export type GrowthPath = {
  title: string;
  summary: string;
  status: "planned" | "future";
};

export const newsletterInterests = [
  "AI learning notes",
  "Project breakdowns",
  "Machine learning study guides",
  "Pharma quality automation",
  "Student success systems",
  "AI agent prompts",
  "Digital entrepreneurship",
];

export const leadCapturePaths: GrowthPath[] = [
  {
    title: "Newsletter signup",
    summary: "General updates for AI learning notes, projects, and resources.",
    status: "planned",
  },
  {
    title: "Project update signup",
    summary: "Interest path for following specific project build progress.",
    status: "future",
  },
  {
    title: "Resource download interest",
    summary: "Waitlist path for study guides, templates, and prompt packs.",
    status: "future",
  },
  {
    title: "Study guide waitlist",
    summary: "Interest path for deeper AI and machine learning learning resources.",
    status: "future",
  },
  {
    title: "Template waitlist",
    summary: "Interest path for GitHub, portfolio, GMP, and project planning templates.",
    status: "future",
  },
  {
    title: "Mini course waitlist",
    summary: "Interest path for future structured learning products.",
    status: "future",
  },
  {
    title: "Consulting interest",
    summary: "Future path for AI workflow, content, and quality automation conversations.",
    status: "future",
  },
  {
    title: "Community interest",
    summary: "Future path for learners and builders who want shared learning support.",
    status: "future",
  },
];

export const futureMonetizationPaths: GrowthPath[] = [
  {
    title: "Newsletter",
    summary: "A free trust-building channel before any paid offer exists.",
    status: "planned",
  },
  {
    title: "Digital templates",
    summary: "Reusable student, project, workflow, and quality documentation templates.",
    status: "future",
  },
  {
    title: "AI study guides",
    summary: "Structured guides that grow from real learning notes and projects.",
    status: "future",
  },
  {
    title: "Project walkthroughs",
    summary: "Detailed build notes for assignments, AI projects, and automation tools.",
    status: "future",
  },
  {
    title: "Mini courses",
    summary: "Focused learning paths after articles and free resources show demand.",
    status: "future",
  },
  {
    title: "Consulting",
    summary: "Careful future service positioning around AI workflows and quality systems.",
    status: "future",
  },
  {
    title: "Premium resources",
    summary: "Optional deeper resources built only after useful free resources exist.",
    status: "future",
  },
  {
    title: "Community membership",
    summary: "A possible future learning community if audience needs become clear.",
    status: "future",
  },
  {
    title: "Affiliate resources",
    summary: "Potential recommendations only when they are useful, disclosed, and relevant.",
    status: "future",
  },
];

export const contentGrowthPaths: GrowthPath[] = [
  {
    title: "Article publishing",
    summary: "Turn article ideas into useful explanations, reflections, and search-ready notes.",
    status: "planned",
  },
  {
    title: "Project writeups",
    summary: "Document build decisions, tools, outcomes, limitations, and next iterations.",
    status: "planned",
  },
  {
    title: "Assignment breakdowns",
    summary: "Convert academic work into public learning artifacts with evidence and reflection.",
    status: "planned",
  },
  {
    title: "Resource publishing",
    summary: "Release free guides, templates, and checklists before considering paid versions.",
    status: "future",
  },
  {
    title: "Newsletter topics",
    summary: "Collect practical notes from AI learning, projects, pharma quality, and workflows.",
    status: "future",
  },
  {
    title: "Content pillar expansion",
    summary: "Use audience response to decide which themes deserve deeper coverage.",
    status: "future",
  },
  {
    title: "Digital product mapping",
    summary: "Map future offers to proven resource usefulness rather than guesses.",
    status: "future",
  },
];
