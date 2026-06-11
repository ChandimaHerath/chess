import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Classes — Checkmate Academy",
  description:
    "Explore Checkmate Academy chess classes for juniors, adults, club players and tournament-focused students.",
};

const classes = [
  {
    title: "Junior Foundations",
    level: "Ages 6-12",
    schedule: "Tue & Thu · 4:30pm",
    desc: "Friendly group lessons covering board vision, tactics, checkmates and confident game habits.",
  },
  {
    title: "Club Player Lab",
    level: "Rating 800-1400",
    schedule: "Mon & Wed · 6:00pm",
    desc: "Guided calculation drills, annotated classics and practical opening plans for regular players.",
  },
  {
    title: "Tournament Squad",
    level: "Rating 1400+",
    schedule: "Sat · 10:00am",
    desc: "Serious preparation with game review, repertoire work, clock management and event strategy.",
  },
  {
    title: "Adult Beginners",
    level: "Adults 18+",
    schedule: "Fri · 7:00pm",
    desc: "A relaxed introduction to chess fundamentals, tactical patterns and enjoyable over-the-board play.",
  },
];

const formats = [
  "Small group classes with coach feedback",
  "Online and in-person lesson options",
  "Weekly homework puzzles and game review",
  "Clear progress tracking for every student",
];

export default function ClassesPage() {
  return (
    <div className="pt-24">
      <section className="container-x py-12 text-center">
        <Reveal className="mx-auto max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            Weekly Training
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Chess <span className="gold-text">Classes</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-slate-500">
            Choose a class that matches your age, rating and goals. Every group
            follows a structured curriculum while leaving room for individual
            questions and live game analysis.
          </p>
        </Reveal>
      </section>

      <section className="container-x grid gap-6 pb-16 md:grid-cols-2">
        {classes.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="card h-full">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-2xl font-bold text-slate-900">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-gold-700">
                    {item.level}
                  </p>
                </div>
                <span className="rounded-full border border-gold-400/40 bg-gold-50 px-3 py-1 text-xs font-semibold text-gold-700">
                  {item.schedule}
                </span>
              </div>
              <p className="mt-5 leading-relaxed text-slate-500">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-slate-900">
              What each class includes
            </h2>
            <p className="mt-4 text-slate-500">
              Our classes are built around repetition, review and practical
              play, so students leave each week with a sharper eye for the next
              best move.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Book a Trial Class
            </Link>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {formats.map((format, i) => (
              <Reveal key={format} delay={i * 0.08}>
                <div className="card h-full">
                  <div className="text-3xl text-gold-600">♘</div>
                  <p className="mt-4 font-medium text-slate-700">{format}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
