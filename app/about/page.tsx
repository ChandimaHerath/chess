import type { Metadata } from "next";
import Coaches from "@/components/Coaches";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Dash Chess Academy",
  description:
    "Learn about Dash Chess Academy, Coach Dash and the supportive chess community built through classes, clubs and tournaments.",
};

const milestones = [
  { year: "Classes", text: "In-person, online, group and individual lessons for students of all ages." },
  { year: "Clubs", text: "School chess clubs and Somerset County Chess Club meetups for local players." },
  { year: "Events", text: "USCF-rated quads hosted twice a month in Somerville, New Jersey." },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      <section className="container-x py-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Our <span className="gold-text">Story</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Dash Chess Academy believes in nurturing the chess talent within
            everyone. From beginners to advanced competitors, students learn in
            a warm, structured environment that supports growth on and off the
            chessboard.
          </p>
        </Reveal>
      </section>

      <section className="container-x grid gap-6 py-12 sm:grid-cols-3">
        {[
          { k: "Mission", v: "Help every player build confidence, skill and joy through chess." },
          { k: "Method", v: "Structured lessons, puzzles, supervised games and practical feedback." },
          { k: "Community", v: "A friendly New Jersey chess community built through classes, clubs and tournaments." },
        ].map((b, i) => (
          <Reveal key={b.k} delay={i * 0.1}>
            <div className="card h-full">
              <h3 className="font-display text-xl font-bold text-gold-700">
                {b.k}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {b.v}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="container-x py-16">
        <Reveal className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900">
            What we offer
          </h2>
        </Reveal>
        <div className="mx-auto max-w-2xl">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 0.08}>
              <div className="flex gap-6 border-l border-gold-500/30 pb-8 pl-6 last:pb-0">
                <div className="relative -ml-[1.85rem] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-400/50 bg-white font-display text-xs font-bold text-gold-700 shadow-sm">
                  {m.year}
                </div>
                <p className="pt-2 text-slate-600">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Coaches />
    </div>
  );
}
