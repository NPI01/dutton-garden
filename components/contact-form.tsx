"use client";

/**
 * Accessible inquiry form. Client-side validation with aria wiring and a
 * honeypot field for spam. It is not yet wired to a backend — on submit it
 * shows a confirmation; connect `onSubmit` to an email service or API route
 * (see README) to deliver messages.
 */

import { useState, type FormEvent } from "react";

const INQUIRY_TYPES = [
  "General",
  "Collector or gallery",
  "Press or research",
  "Performance or licensing",
  "Sculpture commission",
  "Studio visit",
];

type Errors = { name?: string; email?: string; message?: string };

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (form: HTMLFormElement): Errors => {
    const next: Errors = {};
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();
    if (!name) next.name = "Please tell us your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (!message || message.length < 10)
      next.message = "A sentence or two, at least, so we can reply well.";
    return next;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    // Honeypot: real people leave this empty.
    if ((form.elements.namedItem("company") as HTMLInputElement)?.value) return;
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // TODO: POST to an API route / email service here.
      setSent(true);
      form.reset();
    }
  };

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-sm border border-terracotta/40 bg-cream/60 p-8 text-center"
      >
        <p className="font-display text-3xl text-soil">Thank you</p>
        <p className="mt-3 text-soil/70">
          Your note has been received. Dan reads them himself, so a reply may
          take a little while.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-5 text-sm uppercase tracking-label text-soil/60 hover:text-soil"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      {/* Honeypot (hidden from users & AT) */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <Field label="Your name" htmlFor="name" error={errors.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="input"
        />
      </Field>

      <Field label="Email" htmlFor="email" error={errors.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="input"
        />
      </Field>

      <Field label="What's this about?" htmlFor="type">
        <select id="type" name="type" className="input" defaultValue="General">
          {INQUIRY_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>

      <Field label="Message" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={6}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="input resize-y"
        />
      </Field>

      <button
        type="submit"
        className="rounded-full bg-soil px-8 py-3 font-display text-lg text-cream transition-opacity hover:opacity-90"
      >
        Send
      </button>

      <style jsx>{`
        .input {
          width: 100%;
          background: rgba(244, 234, 212, 0.5);
          border: 1px solid rgba(36, 26, 18, 0.25);
          border-radius: 2px;
          padding: 0.7rem 0.9rem;
          color: #241a12;
          font-family: inherit;
          font-size: 1rem;
        }
        .input:focus-visible {
          outline: 2px solid #b25a3b;
          outline-offset: 2px;
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm uppercase tracking-label text-soil/70">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="mt-2 text-sm text-rust">
          {error}
        </p>
      )}
    </div>
  );
}
