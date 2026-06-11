"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="pt-24">
      <section className="container-x py-12">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Book Your <span className="gold-text">Free Trial</span>
          </h1>
          <p className="mt-4 text-slate-500">
            Tell us a little about yourself and we&apos;ll match you with the
            perfect coach. We typically reply within one business day.
          </p>
        </Reveal>
      </section>

      <section className="container-x grid gap-10 pb-20 lg:grid-cols-[1fr_1.2fr]">
        {/* Info */}
        <Reveal>
          <div className="card h-full">
            <h2 className="font-display text-xl font-bold text-slate-900">
              Get in touch
            </h2>
            <ul className="mt-6 space-y-5 text-sm">
              <li>
                <div className="text-gold-700">Email</div>
                <div className="text-slate-700">hello@checkmateacademy.com</div>
              </li>
              <li>
                <div className="text-gold-700">Phone</div>
                <div className="text-slate-700">+1 (555) 013-2027</div>
              </li>
              <li>
                <div className="text-gold-700">Studio</div>
                <div className="text-slate-700">
                  14 Grandmaster Lane, Suite 64
                  <br />
                  Open Mon–Sat, 9am–8pm
                </div>
              </li>
            </ul>
            <div className="mt-8 rounded-xl border border-gold-400/30 bg-gold-50 p-4 text-sm text-slate-600">
              ♞ Prefer to chat? Call us and we&apos;ll set up a no-pressure trial
              lesson at a time that suits you.
            </div>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="card"
          >
            {submitted ? (
              <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                <div className="text-5xl">♔</div>
                <h3 className="mt-4 font-display text-2xl font-bold text-slate-900">
                  Thank you!
                </h3>
                <p className="mt-2 max-w-sm text-slate-500">
                  Your request is in. One of our coordinators will reach out
                  shortly to schedule your free trial lesson.
                </p>
              </div>
            ) : (
              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name" name="name" placeholder="Jane Doe" />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jane@email.com"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <Label>Current level</Label>
                    <select className="input">
                      <option>Complete beginner</option>
                      <option>Casual / club player</option>
                      <option>Intermediate (800–1600)</option>
                      <option>Advanced (1600+)</option>
                    </select>
                  </div>
                  <div>
                    <Label>Student age</Label>
                    <select className="input">
                      <option>Child (5–12)</option>
                      <option>Teen (13–17)</option>
                      <option>Adult (18+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label>What are your goals?</Label>
                  <textarea
                    rows={4}
                    placeholder="e.g. I want to start competing in tournaments…"
                    className="input resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Request Free Trial Lesson
                </button>
              </div>
            )}
          </form>
        </Reveal>
      </section>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          padding: 0.65rem 0.9rem;
          font-size: 0.875rem;
          color: #1e293b;
          outline: none;
        }
        .input::placeholder { color: #94a3b8; }
        .input:focus { border-color: #d4af37; }
      `}</style>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1.5 block text-sm font-medium text-slate-700">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="input"
      />
    </div>
  );
}
