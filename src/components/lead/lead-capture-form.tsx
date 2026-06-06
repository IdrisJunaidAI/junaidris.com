"use client";

import { FormEvent, useId, useState } from "react";
import { InterestSelector } from "./interest-selector";

export type LeadCaptureIntent =
  | "newsletter"
  | "project-updates"
  | "resource-interest"
  | "study-guide-waitlist"
  | "template-waitlist"
  | "mini-course-waitlist"
  | "consulting-interest"
  | "community-interest";

type LeadCaptureFormProps = {
  buttonLabel?: string;
  compact?: boolean;
  includeName?: boolean;
  intent: LeadCaptureIntent;
  interestLabel?: string;
  interests?: string[];
  successMessage?: string;
  theme?: "light" | "dark";
};

type FormState = {
  email: string;
  interest: string;
  name: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const emptyFormState: FormState = {
  email: "",
  interest: "",
  name: "",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function LeadCaptureForm({
  buttonLabel = "Join the list",
  compact = false,
  includeName = true,
  intent,
  interestLabel = "Primary interest",
  interests = [],
  successMessage = "Preview confirmation only: no signup data was stored or sent.",
  theme = "light",
}: LeadCaptureFormProps) {
  const id = useId();
  const [formState, setFormState] = useState<FormState>(emptyFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [message, setMessage] = useState("");
  const isDark = theme === "dark";
  const helpTextId = `${id}-help`;
  const emailErrorId = `${id}-email-error`;
  const interestErrorId = `${id}-interest-error`;

  function updateField(field: keyof FormState, value: string) {
    setFormState((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setMessage("");
  }

  function validate() {
    const nextErrors: FormErrors = {};

    if (!formState.email.trim()) {
      nextErrors.email = "Enter an email address.";
    } else if (!isValidEmail(formState.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (interests.length > 0 && !formState.interest) {
      nextErrors.interest = "Choose one interest.";
    }

    return nextErrors;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setMessage("");
      return;
    }

    // Future integration point: after privacy, consent, and storage requirements
    // are defined, replace this client-only confirmation with a verified email
    // service or internal API route. No data is sent or stored in Phase 6.
    setFormState(emptyFormState);
    setMessage(successMessage);
  }

  return (
    <form
      aria-describedby={helpTextId}
      className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}
      data-intent={intent}
      noValidate
      onSubmit={handleSubmit}
    >
      {includeName ? (
        <div>
          <label
            className={`block text-sm font-semibold ${isDark ? "text-white" : "text-zinc-900"}`}
            htmlFor={`${id}-name`}
          >
            Name
          </label>
          <input
            autoComplete="name"
            className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20"
            id={`${id}-name`}
            name="name"
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Your name"
            type="text"
            value={formState.name}
          />
        </div>
      ) : null}

      <div>
        <label
          className={`block text-sm font-semibold ${isDark ? "text-white" : "text-zinc-900"}`}
          htmlFor={`${id}-email`}
        >
          Email
        </label>
        <input
          aria-describedby={errors.email ? emailErrorId : undefined}
          aria-invalid={Boolean(errors.email)}
          autoComplete="email"
          className="mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-900 outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/20"
          id={`${id}-email`}
          name="email"
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="you@example.com"
          type="email"
          value={formState.email}
        />
        {errors.email ? (
          <p className="mt-2 text-sm font-medium text-red-700" id={emailErrorId}>
            {errors.email}
          </p>
        ) : null}
      </div>

      {interests.length > 0 ? (
        <div className={compact ? "" : "sm:col-span-2"}>
          <InterestSelector
            id={`${id}-interest`}
            interests={interests}
            label={interestLabel}
            name="interest"
            onChange={(value) => updateField("interest", value)}
            theme={theme}
            value={formState.interest}
          />
          {errors.interest ? (
            <p className="mt-2 text-sm font-medium text-red-700" id={interestErrorId}>
              {errors.interest}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className={compact ? "" : "sm:col-span-2"}>
        <button
          className={`w-full rounded-full px-5 py-3 text-sm font-semibold transition ${
            isDark
              ? "bg-white text-zinc-950 hover:bg-teal-50"
              : "bg-zinc-950 text-white hover:bg-teal-900"
          }`}
          type="submit"
        >
          {buttonLabel}
        </button>
      </div>

      <p
        className={`text-xs leading-5 ${compact ? "" : "sm:col-span-2"} ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
        id={helpTextId}
      >
        Phase 6 preview only. This form validates in your browser. No data is
        sent or stored, and no email list is connected yet.
      </p>

      <div aria-live="polite" className={compact ? "" : "sm:col-span-2"}>
        {message ? (
          <p className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800">
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
