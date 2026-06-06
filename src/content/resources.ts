export type ResourceCategory =
  | "AI study guides"
  | "Machine learning notes"
  | "GitHub and developer workflow templates"
  | "Pharma quality and GMP templates"
  | "Cleanroom deviation practice tools"
  | "Student success systems"
  | "AI agent prompts"
  | "Project planning templates";

export type ResourceStatus = "planned" | "outline" | "draft";

export type ResourceFormat =
  | "study guide"
  | "notes collection"
  | "template"
  | "practice tool"
  | "prompt pack"
  | "checklist"
  | "planning worksheet";

export type ResourceAccessType =
  | "free planned"
  | "free preview planned"
  | "future premium option";

export type Resource = {
  id: string;
  title: string;
  category: ResourceCategory;
  summary: string;
  audience: string[];
  status: ResourceStatus;
  format: ResourceFormat;
  accessType: ResourceAccessType;
  futureMonetizationPath: string;
  featured: boolean;
};

export const resourceCategories: ResourceCategory[] = [
  "AI study guides",
  "Machine learning notes",
  "GitHub and developer workflow templates",
  "Pharma quality and GMP templates",
  "Cleanroom deviation practice tools",
  "Student success systems",
  "AI agent prompts",
  "Project planning templates",
];

export const resources: Resource[] = [
  {
    id: "ai-learning-starter-roadmap",
    title: "AI Learning Starter Roadmap",
    category: "AI study guides",
    summary:
      "A future guide for moving from beginner AI concepts into structured practice, project notes, and portfolio artifacts.",
    audience: ["AI learners", "students", "career switchers"],
    status: "outline",
    format: "study guide",
    accessType: "free planned",
    futureMonetizationPath:
      "Could later expand into a deeper AI learning guide or mini course after free value is proven.",
    featured: true,
  },
  {
    id: "machine-learning-model-notes",
    title: "Machine Learning Model Notes",
    category: "Machine learning notes",
    summary:
      "A planned notes collection explaining beginner model concepts, evaluation language, and portfolio-ready reflections.",
    audience: ["machine learning beginners", "classmates", "technical reviewers"],
    status: "planned",
    format: "notes collection",
    accessType: "free planned",
    futureMonetizationPath:
      "Could become a structured machine learning study bundle after more projects are complete.",
    featured: true,
  },
  {
    id: "github-student-workflow-template",
    title: "GitHub Student Workflow Template",
    category: "GitHub and developer workflow templates",
    summary:
      "A future template for organizing repositories, READMEs, screenshots, commits, and project evidence.",
    audience: ["students", "AI learners", "portfolio builders"],
    status: "outline",
    format: "template",
    accessType: "free preview planned",
    futureMonetizationPath:
      "Could later support a paid student portfolio toolkit with examples and walkthroughs.",
    featured: true,
  },
  {
    id: "gmp-deviation-notes-template",
    title: "GMP Deviation Notes Template",
    category: "Pharma quality and GMP templates",
    summary:
      "A careful future template for organizing learning notes around GMP events, questions, and quality reasoning.",
    audience: ["pharma learners", "quality professionals", "GMP students"],
    status: "planned",
    format: "template",
    accessType: "free preview planned",
    futureMonetizationPath:
      "Could become part of a broader pharma quality automation resource library after review boundaries are defined.",
    featured: false,
  },
  {
    id: "cleanroom-deviation-practice-scenarios",
    title: "Cleanroom Deviation Practice Scenarios",
    category: "Cleanroom deviation practice tools",
    summary:
      "A planned scenario set for practicing structured thinking around cleanroom quality events and documentation logic.",
    audience: ["quality learners", "pharma professionals", "students"],
    status: "planned",
    format: "practice tool",
    accessType: "future premium option",
    futureMonetizationPath:
      "Could later support an interactive practice tool if the educational scope is validated.",
    featured: false,
  },
  {
    id: "assignment-to-portfolio-checklist",
    title: "Assignment to Portfolio Checklist",
    category: "Student success systems",
    summary:
      "A practical checklist for turning academic submissions into clean portfolio entries with outcomes and evidence.",
    audience: ["students", "classmates", "portfolio builders"],
    status: "draft",
    format: "checklist",
    accessType: "free planned",
    futureMonetizationPath:
      "Could become a free newsletter resource that introduces later student workflow templates.",
    featured: true,
  },
  {
    id: "ai-agent-prompt-library-starter",
    title: "AI Agent Prompt Library Starter",
    category: "AI agent prompts",
    summary:
      "A future prompt set for planning assignments, project writeups, learning reflections, and content outlines responsibly.",
    audience: ["AI learners", "students", "content creators"],
    status: "planned",
    format: "prompt pack",
    accessType: "free preview planned",
    futureMonetizationPath:
      "Could become a prompt library or workflow pack after responsible-use guidance is fully documented.",
    featured: false,
  },
  {
    id: "project-planning-one-page-template",
    title: "Project Planning One Page Template",
    category: "Project planning templates",
    summary:
      "A planned worksheet for defining a project problem, audience, tools, evidence, status, and next build step.",
    audience: ["project builders", "students", "AI learners"],
    status: "outline",
    format: "planning worksheet",
    accessType: "free planned",
    futureMonetizationPath:
      "Could anchor a future project walkthrough series or template bundle.",
    featured: true,
  },
];
