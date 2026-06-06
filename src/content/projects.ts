export type ProjectStatus = "concept" | "prototype" | "in-progress" | "complete";

export type ProjectCategory =
  | "AI and Machine Learning"
  | "Pharma Quality Automation"
  | "Robotics and Process Improvement"
  | "Healthcare Innovation"
  | "Developer Tools"
  | "Student Success Systems"
  | "Content Creation Systems";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  problemSolved: string;
  tools: string[];
  status: ProjectStatus;
  repositoryUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
  futurePotential: string;
};

export const projectCategories: ProjectCategory[] = [
  "AI and Machine Learning",
  "Pharma Quality Automation",
  "Robotics and Process Improvement",
  "Healthcare Innovation",
  "Developer Tools",
  "Student Success Systems",
  "Content Creation Systems",
];

export const projects: Project[] = [
  {
    id: "machine-learning-starter-portfolio",
    title: "Machine Learning Starter Portfolio",
    category: "AI and Machine Learning",
    summary:
      "A beginner-friendly portfolio project collection for documenting datasets, models, and learning reflections.",
    problemSolved:
      "Creates a structured way to show machine learning growth from first concepts to applied projects.",
    tools: ["Python", "Jupyter", "scikit-learn", "GitHub"],
    status: "concept",
    repositoryUrl: null,
    liveUrl: null,
    featured: true,
    futurePotential:
      "Can grow into a public machine learning case study library for recruiters and learners.",
  },
  {
    id: "quality-event-triage-assistant",
    title: "Quality Event Triage Assistant",
    category: "Pharma Quality Automation",
    summary:
      "A planned AI workflow for organizing deviation details, risk questions, and quality investigation next steps.",
    problemSolved:
      "Helps quality professionals structure early thinking during regulated event review.",
    tools: ["Next.js", "TypeScript", "AI agents", "GMP knowledge base"],
    status: "concept",
    repositoryUrl: null,
    liveUrl: null,
    featured: true,
    futurePotential:
      "Could become a regulated-operations decision support prototype after careful validation boundaries are defined.",
  },
  {
    id: "robotics-process-improvement-tracker",
    title: "Robotics Process Improvement Tracker",
    category: "Robotics and Process Improvement",
    summary:
      "A project concept for tracking robotics improvement opportunities, constraints, and implementation notes.",
    problemSolved:
      "Connects automation ideas to measurable process improvement instead of isolated experiments.",
    tools: ["React", "process mapping", "automation planning"],
    status: "concept",
    repositoryUrl: null,
    liveUrl: null,
    featured: false,
    futurePotential:
      "Can become a template for documenting robotics projects in healthcare or pharma environments.",
  },
  {
    id: "healthcare-ai-innovation-briefs",
    title: "Healthcare AI Innovation Briefs",
    category: "Healthcare Innovation",
    summary:
      "A structured content project for summarizing healthcare AI ideas, risks, use cases, and implementation questions.",
    problemSolved:
      "Turns broad healthcare AI interest into clear briefs that separate opportunity from hype.",
    tools: ["research writing", "AI literacy", "content strategy"],
    status: "concept",
    repositoryUrl: null,
    liveUrl: null,
    featured: false,
    futurePotential:
      "Can support future articles, newsletters, consulting content, or educational products.",
  },
  {
    id: "portfolio-content-data-toolkit",
    title: "Portfolio Content Data Toolkit",
    category: "Developer Tools",
    summary:
      "Reusable TypeScript data structures for assignments, projects, articles, metadata, and content pillars.",
    problemSolved:
      "Keeps portfolio content organized before adding a CMS or database.",
    tools: ["TypeScript", "Next.js", "structured content"],
    status: "in-progress",
    repositoryUrl: null,
    liveUrl: null,
    featured: true,
    futurePotential:
      "Can become an internal content engine or reusable starter template for other student portfolios.",
  },
  {
    id: "student-assignment-workflow-system",
    title: "Student Assignment Workflow System",
    category: "Student Success Systems",
    summary:
      "A planning system for turning course assignments into portfolio-ready deliverables.",
    problemSolved:
      "Helps students move from submission-only work to documented professional artifacts.",
    tools: ["AI planning", "GitHub", "rubric mapping", "workflow design"],
    status: "concept",
    repositoryUrl: null,
    liveUrl: null,
    featured: false,
    futurePotential:
      "Can grow into templates, tutorials, and automation tools for student creators.",
  },
  {
    id: "ai-learning-content-pipeline",
    title: "AI Learning Content Pipeline",
    category: "Content Creation Systems",
    summary:
      "A future system for turning learning notes into articles, posts, scripts, and newsletter ideas.",
    problemSolved:
      "Creates a repeatable publishing workflow for a future audience without adding monetization too early.",
    tools: ["content strategy", "AI drafting support", "editorial calendar"],
    status: "concept",
    repositoryUrl: null,
    liveUrl: null,
    featured: false,
    futurePotential:
      "Can support newsletters, courses, templates, and digital products after consistent publishing is established.",
  },
];
