export type PharmaDispatch = {
  id: string;
  date: string;
  label: string;
  title: string;
  summary: string;
  readTime: string;
};

export const pharmaDispatch: PharmaDispatch[] = [
  {
    id: "ai-quality-systems-human-accountability",
    date: "September 2026",
    label: "Quality systems",
    title: "AI in pharma quality needs a human accountability layer",
    summary:
      "The most useful quality AI will not replace judgment. It will make evidence easier to find, deviations easier to triage, and decisions easier to explain.",
    readTime: "4 min read",
  },
  {
    id: "robotics-biopharma-floor",
    date: "September 2026",
    label: "Robotics",
    title: "The biopharma floor is becoming a software-defined workspace",
    summary:
      "Robotics, sensors, and well-designed interfaces are converging into a new operational layer for safer, more observable manufacturing work.",
    readTime: "5 min read",
  },
  {
    id: "technical-writing-ai-evidence",
    date: "August 2026",
    label: "Technical writing",
    title: "Why AI-assisted technical writing still starts with source discipline",
    summary:
      "Good technical writing is a traceability practice: establish the source, define the audience, show the reasoning, and make uncertainty visible.",
    readTime: "4 min read",
  },
];
