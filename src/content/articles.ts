export type ArticleStatus = "idea" | "outline" | "draft" | "published";

export type Article = {
  id: string;
  title: string;
  slug: string;
  category: string;
  summary: string;
  audience: string[];
  status: ArticleStatus;
  estimatedReadTime: string;
  keywords: string[];
  futureMonetizationLink: string | null;
  featured: boolean;
};

export const articles: Article[] = [
  {
    id: "learning-ai-from-beginner-to-builder",
    title: "How I Am Learning AI From Beginner to Builder",
    slug: "learning-ai-from-beginner-to-builder",
    category: "AI Learning Notes",
    summary:
      "A transparent article about building AI skills through assignments, projects, reflection, and consistent practice.",
    audience: ["AI learners", "classmates", "professors", "future collaborators"],
    status: "idea",
    estimatedReadTime: "6 minutes",
    keywords: ["AI learning journey", "artificial intelligence student portfolio"],
    futureMonetizationLink: "Future AI learning roadmap resource",
    featured: true,
  },
  {
    id: "ai-transform-pharma-quality-assurance",
    title: "Why AI Will Transform Pharma Quality Assurance",
    slug: "ai-transform-pharma-quality-assurance",
    category: "Pharma Quality and GMP Insights",
    summary:
      "A practical look at how AI can support quality systems while respecting validation, compliance, and human accountability.",
    audience: ["pharma professionals", "AI learners", "healthcare innovators"],
    status: "idea",
    estimatedReadTime: "8 minutes",
    keywords: ["pharma quality automation", "GMP quality systems and AI"],
    futureMonetizationLink: "Future pharma AI consulting page",
    featured: true,
  },
  {
    id: "building-assignments-like-software-products",
    title: "Building Assignment Projects Like Professional Software Products",
    slug: "building-assignments-like-software-products",
    category: "Student Success Systems",
    summary:
      "A guide to treating academic assignments as portfolio-ready products with structure, version control, and reflection.",
    audience: ["students", "classmates", "technical hiring teams"],
    status: "outline",
    estimatedReadTime: "7 minutes",
    keywords: ["student project portfolio", "GitHub student workflow"],
    futureMonetizationLink: "Future student project template",
    featured: true,
  },
  {
    id: "gmp-floor-operations-to-ai-automation",
    title: "From GMP Floor Operations to AI Automation",
    slug: "gmp-floor-operations-to-ai-automation",
    category: "AI Agents and Automation",
    summary:
      "A professional reflection connecting regulated operations experience with future AI automation opportunities.",
    audience: ["pharma professionals", "recruiters", "startup founders"],
    status: "idea",
    estimatedReadTime: "7 minutes",
    keywords: ["AI automation", "GMP operations", "pharma innovation"],
    futureMonetizationLink: "Future operations automation case study",
    featured: false,
  },
  {
    id: "students-use-github-like-professionals",
    title: "How Students Can Use GitHub Like Professionals",
    slug: "students-use-github-like-professionals",
    category: "Developer Tools",
    summary:
      "A beginner-focused article showing how students can organize repositories, documentation, and project evidence.",
    audience: ["students", "classmates", "AI learners"],
    status: "outline",
    estimatedReadTime: "6 minutes",
    keywords: ["student GitHub portfolio", "student project portfolio"],
    futureMonetizationLink: "Future GitHub portfolio checklist",
    featured: false,
  },
  {
    id: "ai-student-to-ai-entrepreneur-roadmap",
    title: "My Roadmap From AI Student to AI Entrepreneur",
    slug: "ai-student-to-ai-entrepreneur-roadmap",
    category: "Entrepreneurship and Digital Products",
    summary:
      "A roadmap article connecting AI coursework, portfolio projects, content creation, and future digital products.",
    audience: ["AI learners", "future subscribers", "startup founders"],
    status: "idea",
    estimatedReadTime: "8 minutes",
    keywords: ["AI entrepreneurship journey", "AI learning journey"],
    futureMonetizationLink: "Future newsletter or digital product roadmap",
    featured: false,
  },
];
