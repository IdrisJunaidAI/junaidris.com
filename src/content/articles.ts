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
  publishedOn?: string;
  sections?: { heading: string; paragraphs: string[] }[];
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
    status: "published",
    estimatedReadTime: "6 minutes",
    keywords: ["AI learning journey", "artificial intelligence student portfolio"],
    futureMonetizationLink: "Future AI learning roadmap resource",
    featured: true,
    publishedOn: "2026-09-01",
    sections: [
      { heading: "The real opportunity is decision support", paragraphs: ["AI is often introduced into pharma quality conversations as if the goal were to automate judgment. I see a more useful opportunity: make the evidence around a decision easier to assemble, inspect, and explain.", "A quality professional still needs to understand the event, ask the right questions, assess risk, and own the conclusion. An AI system can help retrieve related records, compare patterns, draft questions, and surface missing context—but those capabilities only help when the review path remains visible."] },
      { heading: "Traceability is a product feature", paragraphs: ["For regulated work, a polished interface is not enough. Each suggestion should point back to its source, distinguish fact from inference, and preserve the human review step. That is as much a design problem as a model problem.", "The best quality AI will feel less like an oracle and more like a well-organized workbench: useful, inspectable, and honest about uncertainty."] },
    ],
  },
  {
    id: "ai-transform-pharma-quality-assurance",
    title: "Why AI Will Transform Pharma Quality Assurance",
    slug: "ai-transform-pharma-quality-assurance",
    category: "Pharma Quality and GMP Insights",
    summary:
      "A practical look at how AI can support quality systems while respecting validation, compliance, and human accountability.",
    audience: ["pharma professionals", "AI learners", "healthcare innovators"],
    status: "published",
    estimatedReadTime: "8 minutes",
    keywords: ["pharma quality automation", "GMP quality systems and AI"],
    futureMonetizationLink: "Future pharma AI consulting page",
    featured: true,
    publishedOn: "2026-08-25",
    sections: [
      { heading: "A new operational layer", paragraphs: ["Biopharma manufacturing is becoming more observable. Sensors, automation, robotics, and software interfaces are bringing more process signals into the daily workspace.", "That shift creates a design responsibility. Operators need systems that communicate state clearly, reduce noise, and support safe escalation when conditions change."] },
      { heading: "The human center remains", paragraphs: ["Automation should reduce avoidable cognitive load, not remove the expertise that keeps a regulated operation safe. The strongest systems will pair machine consistency with human context, training, and accountability."] },
    ],
  },
  {
    id: "building-assignments-like-software-products",
    title: "Building Assignment Projects Like Professional Software Products",
    slug: "building-assignments-like-software-products",
    category: "Student Success Systems",
    summary:
      "A guide to treating academic assignments as portfolio-ready products with structure, version control, and reflection.",
    audience: ["students", "classmates", "technical hiring teams"],
    status: "published",
    estimatedReadTime: "7 minutes",
    keywords: ["student project portfolio", "GitHub student workflow"],
    futureMonetizationLink: "Future student project template",
    featured: true,
    publishedOn: "2026-08-18",
    sections: [
      { heading: "Writing is a verification workflow", paragraphs: ["AI-assisted writing is most valuable when it speeds up structure, comparison, and first-pass synthesis. It becomes risky when fluency is mistaken for evidence.", "My practice starts with source discipline: identify the source, understand its scope, separate observation from interpretation, and make uncertainty visible to the reader."] },
      { heading: "Clarity is not simplification", paragraphs: ["Technical writing should make a complex subject easier to navigate without flattening the nuance that matters. That means defining terms, showing the reasoning, and keeping the reader oriented through the decision or process."] },
    ],
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
