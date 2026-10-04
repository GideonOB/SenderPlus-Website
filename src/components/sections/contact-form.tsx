"use client";

import { FormEvent, useRef, useState } from "react";

const topics = [
  "Sending a package",
  "Tracking",
  "Coverage",
  "Student delivery",
  "Business delivery",
  "Partnership / business inquiry",
  "Other",
] as const;

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmissionState("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = new URLSearchParams();

    formData.forEach((value, key) => body.append(key, value.toString()));

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error("Form submission failed");

      formRef.current?.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  }

  const fieldStyles = "mt-2 min-h-12 w-full border border-ink/30 bg-white px-4 py-3 text-base text-ink outline-none transition-colors hover:border-ink/60 focus:border-sender-red focus:ring-1 focus:ring-sender-red disabled:opacity-60";

  return <form
    ref={formRef}
    name="senderplus-help"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    onSubmit={handleSubmit}
    className="border-t-2 border-ink pt-7"
  >
    <input type="hidden" name="form-name" value="senderplus-help" />
    <p className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
      <label>Do not fill this out if you are human: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label>
    </p>

    <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2">
      <label className="text-sm font-bold text-ink">
        Name <span className="text-sender-red" aria-hidden="true">*</span>
        <span className="sr-only">required</span>
        <input className={fieldStyles} type="text" name="name" autoComplete="name" required disabled={submissionState === "submitting"} />
      </label>
      <label className="text-sm font-bold text-ink">
        Email <span className="text-sender-red" aria-hidden="true">*</span>
        <span className="sr-only">required</span>
        <input className={fieldStyles} type="email" name="email" autoComplete="email" required disabled={submissionState === "submitting"} />
      </label>
      <label className="text-sm font-bold text-ink">
        Phone number <span className="font-normal text-charcoal">(optional)</span>
        <input className={fieldStyles} type="tel" name="phone" autoComplete="tel" disabled={submissionState === "submitting"} />
      </label>
      <label className="text-sm font-bold text-ink">
        Topic <span className="text-sender-red" aria-hidden="true">*</span>
        <span className="sr-only">required</span>
        <select className={fieldStyles} name="topic" defaultValue="" required disabled={submissionState === "submitting"}>
          <option value="" disabled>Select a topic</option>
          {topics.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
        </select>
      </label>
      <label className="text-sm font-bold text-ink sm:col-span-2">
        Message <span className="text-sender-red" aria-hidden="true">*</span>
        <span className="sr-only">required</span>
        <textarea className={`${fieldStyles} min-h-40 resize-y`} name="message" required disabled={submissionState === "submitting"} />
      </label>
    </div>

    <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs leading-5 text-charcoal">Please don&apos;t include sensitive personal or payment information.</p>
        <div className="mt-2 min-h-6 text-sm font-bold" aria-live="polite" aria-atomic="true">
          {submissionState === "success" && <p className="text-ink">Thanks. Your message has been sent.</p>}
          {submissionState === "error" && <p className="text-sender-red" role="alert">We couldn&apos;t send your message. Please try again.</p>}
        </div>
      </div>
      <button type="submit" disabled={submissionState === "submitting"} className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-ink px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-sender-red disabled:cursor-wait disabled:opacity-60">
        {submissionState === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </div>
  </form>;
}

