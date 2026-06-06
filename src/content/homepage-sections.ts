export type HomeSection = {
  id: string;
  title: string;
  description: string;
  purpose: string;
  contentType: string;
  recommendedCta: string;
};

export const homepageSections: HomeSection[] = [
  {
    id: "hero",
    title: "Hero",
    description: "Introduce Efficacy AI Learning Hub and the professional identity behind it.",
    purpose: "Give first-time visitors a fast, credible understanding of the site.",
    contentType: "Positioning statement, focus areas, and primary site entry points.",
    recommendedCta: "View featured work",
  },
  {
    id: "professional-identity",
    title: "Professional Identity",
    description: "Connect AI learning with pharma quality, biotech operations, and healthcare innovation.",
    purpose: "Frame the site owner as both a student and a regulated operations professional.",
    contentType: "Short bio, role summary, learning focus, and professional context.",
    recommendedCta: "Read about the journey",
  },
  {
    id: "featured-assignments",
    title: "Featured Assignments",
    description: "Highlight academic work that shows course progress and technical communication.",
    purpose: "Help professors, classmates, and reviewers quickly find representative assignments.",
    contentType: "Assignment cards with course, summary, skills, status, and learning outcome.",
    recommendedCta: "Browse assignments",
  },
  {
    id: "featured-projects",
    title: "Featured Projects",
    description: "Show practical AI, automation, healthcare, robotics, and developer work.",
    purpose: "Demonstrate applied problem solving beyond classroom submissions.",
    contentType: "Project cards with problem solved, tools, links, and future potential.",
    recommendedCta: "Explore projects",
  },
  {
    id: "content-pillars",
    title: "Content Pillars",
    description: "Organize the major themes that will guide articles and future resources.",
    purpose: "Make the site scalable as learning notes, tutorials, and thought pieces grow.",
    contentType: "Pillar summaries, target audience notes, and sample article ideas.",
    recommendedCta: "Read articles",
  },
  {
    id: "learning-roadmap",
    title: "Learning Roadmap",
    description: "Document the path from AI beginner to confident builder and future specialist.",
    purpose: "Turn the learning journey into a transparent record of growth.",
    contentType: "Milestones, skills in progress, completed work, and next learning goals.",
    recommendedCta: "Follow the roadmap",
  },
  {
    id: "future-monetization-roadmap",
    title: "Future Monetization Roadmap",
    description: "Reserve space for future products without adding sales features yet.",
    purpose: "Prepare the architecture for future resources, templates, courses, and consulting.",
    contentType: "Roadmap notes, future offering categories, and readiness criteria.",
    recommendedCta: "See future resources",
  },
  {
    id: "newsletter-call-to-action",
    title: "Newsletter Call to Action",
    description: "Plan a future email capture area for learning updates and content releases.",
    purpose: "Support a future subscriber audience once publishing becomes consistent.",
    contentType: "Newsletter value proposition and signup form in a later phase.",
    recommendedCta: "Join the future newsletter",
  },
  {
    id: "contact-and-collaboration",
    title: "Contact and Collaboration Call to Action",
    description: "Invite academic, professional, and project-based collaboration.",
    purpose: "Give visitors a clear path to connect without adding sales pressure.",
    contentType: "Contact prompt, collaboration categories, and professional links.",
    recommendedCta: "Start a conversation",
  },
];
