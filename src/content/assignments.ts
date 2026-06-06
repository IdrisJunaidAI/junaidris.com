export type AssignmentStatus = "planned" | "in-progress" | "complete";

export type Assignment = {
  id: string;
  title: string;
  course: string;
  category: string;
  summary: string;
  skills: string[];
  status: AssignmentStatus;
  date: string;
  repositoryUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
  learningOutcome: string;
};

export const assignments: Assignment[] = [
  {
    id: "evolution-of-artificial-intelligence",
    title: "The Evolution of Artificial Intelligence",
    course: "Artificial Intelligence Foundations",
    category: "Research and Reflection",
    summary:
      "A written assignment tracing major milestones in artificial intelligence and connecting them to modern learning goals.",
    skills: ["AI history", "research writing", "technical communication"],
    status: "complete",
    date: "2026-02-10",
    repositoryUrl: null,
    liveUrl: null,
    featured: true,
    learningOutcome:
      "Explain how historical AI developments connect to current machine learning and automation opportunities.",
  },
  {
    id: "github-first-repository",
    title: "Getting Started with GitHub and First Repository",
    course: "Software Development Tools",
    category: "Developer Foundations",
    summary:
      "A first repository setup documenting basic GitHub workflow, version control habits, and portfolio readiness.",
    skills: ["GitHub", "version control", "repository setup"],
    status: "complete",
    date: "2026-02-18",
    repositoryUrl: null,
    liveUrl: null,
    featured: true,
    learningOutcome:
      "Use GitHub as a professional home for academic and technical project work.",
  },
  {
    id: "intro-machine-learning-portfolio",
    title: "Intro to Machine Learning Portfolio",
    course: "Machine Learning Foundations",
    category: "Machine Learning",
    summary:
      "A starter machine learning portfolio assignment focused on beginner concepts, model thinking, and clear explanations.",
    skills: ["machine learning basics", "portfolio writing", "model evaluation"],
    status: "in-progress",
    date: "2026-03-01",
    repositoryUrl: null,
    liveUrl: null,
    featured: true,
    learningOutcome:
      "Translate beginner machine learning practice into a clear portfolio artifact.",
  },
  {
    id: "cleanroom-deviation-response-game",
    title: "Cleanroom Deviation Response Game",
    course: "Pharma Quality Systems",
    category: "Quality Assurance Simulation",
    summary:
      "A scenario-based learning assignment that models decision making during cleanroom deviation response.",
    skills: ["GMP reasoning", "quality systems", "scenario design"],
    status: "planned",
    date: "2026-03-15",
    repositoryUrl: null,
    liveUrl: null,
    featured: false,
    learningOutcome:
      "Practice structured response logic for regulated cleanroom quality events.",
  },
  {
    id: "canvas-assignment-workflow-agent",
    title: "AI Agent for Canvas Assignment Workflow",
    course: "AI Productivity and Automation",
    category: "AI Agents",
    summary:
      "A workflow concept for using AI agents to organize assignment requirements, deadlines, and drafting steps.",
    skills: ["AI agents", "workflow mapping", "academic productivity"],
    status: "planned",
    date: "2026-04-01",
    repositoryUrl: null,
    liveUrl: null,
    featured: false,
    learningOutcome:
      "Design an AI-assisted process that supports student planning without replacing original academic work.",
  },
  {
    id: "unix-operating-systems-labs",
    title: "Unix Operating Systems Lab Projects",
    course: "Unix Operating Systems",
    category: "Systems Lab",
    summary:
      "A collection of Unix labs documenting command line practice, file systems, permissions, and shell workflows.",
    skills: ["Unix", "shell commands", "systems fundamentals"],
    status: "in-progress",
    date: "2026-04-12",
    repositoryUrl: null,
    liveUrl: null,
    featured: false,
    learningOutcome:
      "Build confidence with operating system concepts and command line problem solving.",
  },
  {
    id: "computer-virtualization-labs",
    title: "Computer Virtualization Lab Projects",
    course: "Computer Virtualization",
    category: "Infrastructure Lab",
    summary:
      "A lab series focused on virtual machines, system setup, snapshots, and practical infrastructure concepts.",
    skills: ["virtualization", "lab documentation", "systems setup"],
    status: "in-progress",
    date: "2026-04-20",
    repositoryUrl: null,
    liveUrl: null,
    featured: false,
    learningOutcome:
      "Understand how virtualization supports repeatable technical learning environments.",
  },
];
