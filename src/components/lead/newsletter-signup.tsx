import { newsletterInterests } from "@/content/growth";
import { LeadCaptureForm } from "./lead-capture-form";

type NewsletterSignupProps = {
  compact?: boolean;
  context?: "home" | "articles" | "resources" | "footer";
  theme?: "light" | "dark";
};

const copyByContext = {
  home: {
    eyebrow: "Newsletter readiness",
    title: "Join the AI learning and project building journey",
    description:
      "Get practical notes, project breakdowns, and careful insights on AI, automation, pharma quality, student success, and digital entrepreneurship.",
  },
  articles: {
    eyebrow: "Follow the writing",
    title: "Get future article and resource updates",
    description:
      "Follow the path from article ideas to project notes, study guides, templates, and useful learning resources.",
  },
  resources: {
    eyebrow: "Resource updates",
    title: "Follow future resource releases",
    description:
      "Get notified when AI study guides, templates, prompt packs, and project planning resources are ready to review.",
  },
  footer: {
    eyebrow: "Newsletter",
    title: "Follow future updates",
    description:
      "A front-end-only signup preview for AI learning notes, project updates, and future resources.",
  },
};

export function NewsletterSignup({
  compact = false,
  context = "home",
  theme = "light",
}: NewsletterSignupProps) {
  const copy = copyByContext[context];
  const isDark = theme === "dark";

  return (
    <div
      className={`rounded-xl border p-5 ${
        isDark
          ? "border-zinc-800 bg-zinc-900/70"
          : "border-zinc-200 bg-white shadow-sm shadow-zinc-900/[0.03]"
      }`}
    >
      <p
        className={`text-sm font-semibold uppercase tracking-[0.16em] ${
          isDark ? "text-teal-200" : "text-teal-700"
        }`}
      >
        {copy.eyebrow}
      </p>
      <h2
        className={`mt-3 font-semibold tracking-normal ${
          compact ? "text-xl" : "text-2xl sm:text-3xl"
        } ${isDark ? "text-white" : "text-zinc-950"}`}
      >
        {copy.title}
      </h2>
      <p
        className={`mt-3 text-sm leading-6 ${
          isDark ? "text-zinc-300" : "text-zinc-700"
        }`}
      >
        {copy.description}
      </p>
      <div className="mt-5">
        <LeadCaptureForm
          buttonLabel={compact ? "Register interest" : "Register interest"}
          compact={compact}
          includeName={!compact}
          intent="newsletter"
          interests={newsletterInterests}
          successMessage="Preview interest registered. No data was stored or sent."
          theme={theme}
        />
      </div>
    </div>
  );
}
