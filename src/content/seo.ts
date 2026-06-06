export type PageMetadataPlan = {
  pageTitle: string;
  metaDescription: string;
  openGraphTitle: string;
  openGraphDescription: string;
  targetKeywords: string[];
};

export const audiencePlan = {
  primary: [
    "professors",
    "classmates",
    "recruiters",
    "collaborators",
    "AI learners",
    "pharma professionals",
    "future clients",
    "future content subscribers",
  ],
  secondary: [
    "startup founders",
    "healthcare innovators",
    "international students",
    "technical hiring teams",
    "digital product customers",
  ],
};

export const brandVoice = [
  "professional",
  "ambitious",
  "intelligent",
  "clear",
  "trustworthy",
  "academic",
  "technical",
  "entrepreneurial",
  "human",
];

export const contentVoiceGuide = {
  avoid: [
    "generic filler text",
    "overhyped claims",
    "weak student language",
    "unverified accomplishments",
    "salesy language",
    "cluttered wording",
  ],
  use: [
    "clear project descriptions",
    "evidence based language",
    "professional technical framing",
    "learning journey language",
    "founder mindset language",
    "portfolio ready summaries",
  ],
};

export const seoKeywordGroups = [
  "Artificial Intelligence student portfolio",
  "machine learning project portfolio",
  "AI learning journey",
  "pharma quality automation",
  "GMP quality systems and AI",
  "AI agents for education",
  "student project portfolio",
  "healthcare AI innovation",
  "robotics and automation in pharma",
  "AI entrepreneurship journey",
];

export const metadataPlan = {
  home: {
    pageTitle: "Efficacy AI Learning Hub",
    metaDescription:
      "A professional AI learning hub for academic assignments, AI projects, pharma quality automation, and future content creation.",
    openGraphTitle: "Efficacy AI Learning Hub",
    openGraphDescription:
      "Explore academic assignments, AI projects, articles, and the learning roadmap behind Efficacy AI Learning Hub.",
    targetKeywords: [
      "Artificial Intelligence student portfolio",
      "AI learning journey",
      "student project portfolio",
    ],
  },
  assignments: {
    pageTitle: "Assignments",
    metaDescription:
      "Academic assignments, labs, and learning artifacts from an AI student building a professional project portfolio.",
    openGraphTitle: "Assignments | Efficacy AI Learning Hub",
    openGraphDescription:
      "Review academic assignments, course deliverables, skills practiced, and learning outcomes.",
    targetKeywords: [
      "student project portfolio",
      "Artificial Intelligence student portfolio",
      "AI agents for education",
    ],
  },
  projects: {
    pageTitle: "Projects",
    metaDescription:
      "AI, machine learning, pharma quality automation, healthcare innovation, robotics, and developer tool project concepts.",
    openGraphTitle: "Projects | Efficacy AI Learning Hub",
    openGraphDescription:
      "Explore applied AI projects, quality automation ideas, and systems for student and professional growth.",
    targetKeywords: [
      "machine learning project portfolio",
      "pharma quality automation",
      "healthcare AI innovation",
    ],
  },
  articles: {
    pageTitle: "Articles",
    metaDescription:
      "Future articles on AI learning, machine learning, pharma quality systems, student success, and AI entrepreneurship.",
    openGraphTitle: "Articles | Efficacy AI Learning Hub",
    openGraphDescription:
      "Read planned content themes and article ideas for AI learning, quality automation, and entrepreneurship.",
    targetKeywords: [
      "AI learning journey",
      "GMP quality systems and AI",
      "AI entrepreneurship journey",
    ],
  },
  resources: {
    pageTitle: "Resources",
    metaDescription:
      "Future AI learning resources, machine learning study guides, GitHub workflow templates, GMP templates, AI agent prompts, and student success systems.",
    openGraphTitle: "Resources | Efficacy AI Learning Hub",
    openGraphDescription:
      "Explore planned AI study guides, templates, resource pathways, and future learning materials from Efficacy AI Learning Hub.",
    targetKeywords: [
      "AI learning resources",
      "machine learning study guides",
      "pharma quality automation resources",
      "GMP templates",
      "AI agent prompts",
      "student success systems",
      "digital learning resources",
    ],
  },
  about: {
    pageTitle: "About",
    metaDescription:
      "Learn about the AI student, pharma quality professional, automation builder, and future digital entrepreneur behind the site.",
    openGraphTitle: "About | Efficacy AI Learning Hub",
    openGraphDescription:
      "A professional identity connecting AI learning, pharma quality assurance, biotech operations, and future innovation.",
    targetKeywords: [
      "Artificial Intelligence student portfolio",
      "pharma quality automation",
      "AI entrepreneurship journey",
    ],
  },
  contact: {
    pageTitle: "Contact",
    metaDescription:
      "Contact Efficacy AI Learning Hub for academic, AI project, content, and future collaboration opportunities.",
    openGraphTitle: "Contact | Efficacy AI Learning Hub",
    openGraphDescription:
      "Connect for academic review, project collaboration, AI learning, and professional opportunities.",
    targetKeywords: [
      "AI learning journey",
      "student project portfolio",
      "healthcare AI innovation",
    ],
  },
} satisfies Record<string, PageMetadataPlan>;
