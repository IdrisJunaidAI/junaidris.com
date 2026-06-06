import { LeadCaptureForm, type LeadCaptureIntent } from "./lead-capture-form";

type WaitlistCardProps = {
  description: string;
  intent: LeadCaptureIntent;
  interests: string[];
  title: string;
};

export function WaitlistCard({
  description,
  intent,
  interests,
  title,
}: WaitlistCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-900/[0.03]">
      <h3 className="text-lg font-semibold text-zinc-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-700">{description}</p>
      <div className="mt-5">
        <LeadCaptureForm
          buttonLabel="Register interest"
          compact
          includeName={false}
          intent={intent}
          interests={interests}
          successMessage="Preview interest registered. No waitlist data was stored or sent."
        />
      </div>
    </article>
  );
}
