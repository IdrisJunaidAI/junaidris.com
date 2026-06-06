/**
 * Phase 2 navigation plan.
 * Keep this file focused on route structure and future navigation ideas.
 */

export type NavItem = {
  label: string;
  href: string;
  description: string;
};

export const primaryNav: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Landing page for identity, featured work, and site direction.",
  },
  {
    label: "Assignments",
    href: "/assignments",
    description: "Academic assignments, labs, and course deliverables.",
  },
  {
    label: "Projects",
    href: "/projects",
    description: "AI, automation, healthcare, robotics, and developer projects.",
  },
  {
    label: "Articles",
    href: "/articles",
    description: "Learning notes, technical reflections, and content ideas.",
  },
  {
    label: "Resources",
    href: "/resources",
    description: "Future study guides, templates, prompts, and resource pathways.",
  },
  {
    label: "About",
    href: "/about",
    description: "Professional background, learning journey, and positioning.",
  },
  {
    label: "Contact",
    href: "/contact",
    description: "Collaboration, academic, and professional contact path.",
  },
];

export const futureNavIdeas: NavItem[] = [
  {
    label: "Templates",
    href: "/templates",
    description: "Future downloadable study, project, and workflow templates.",
  },
  {
    label: "Courses",
    href: "/courses",
    description: "Future structured lessons or paid learning products.",
  },
  {
    label: "Newsletter",
    href: "/newsletter",
    description: "Future email list for learning updates and content releases.",
  },
  {
    label: "Consulting",
    href: "/consulting",
    description: "Future services for AI workflow and quality automation.",
  },
  {
    label: "Community",
    href: "/community",
    description: "Future community space for learners and builders.",
  },
];

export const routeTemplates = {
  home: "/",
  assignments: {
    index: "/assignments",
  },
  projects: {
    index: "/projects",
  },
  articles: {
    index: "/articles",
    detail: (slug: string) => `/articles/${slug}`,
  },
  resources: {
    index: "/resources",
  },
  about: "/about",
  contact: "/contact",
} as const;
