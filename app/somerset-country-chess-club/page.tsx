import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Somerset Country Chess Club — Checkmate Academy",
  description:
    "Learn about the Somerset Country Chess Club community page at Checkmate Academy.",
};

const highlights = [
  {
    title: "Club Nights",
    desc: "Casual games, puzzle tables and guided analysis for members who want regular over-the-board practice.",
  },
  {
    title: "County Fixtures",
    desc: "Team preparation and match-day support for players representing the club in local competition.",
  },
  {
    title: "Community Coaching",
    desc: "Beginner-friendly sessions for families, juniors and returning players building confidence together.",
  },
];

const details = [
  { label: "Meeting rhythm", value: "Weekly club night plus weekend events" },
  { label: "Playing formats", value: "Classical, rapid, blitz and training games" },
  { label: "Best for", value: "Students, local players and county teams" },
];

export default function SomersetCountryChessClubPage() {
  return (
    <div className="pt-24">
      <section className="container-x grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            Local Chess Community
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Somerset Country{" "}
            <span className="gold-text">Chess Club</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            A dedicated space for club players to meet, train and compete with
            the same coaching care that shapes every Checkmate Academy program.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              Contact the Club
            </Link>
            <Link href="/tournaments" className="btn-ghost">
              View Events
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-gold-400/40 bg-gradient-to-br from-gold-50 via-white to-slate-50 p-8 shadow-sm">
            <div className="absolute -right-8 -top-10 font-display text-[10rem] text-gold-500 opacity-10">
              ♚
            </div>
            <div className="relative grid gap-4">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="rounded-2xl border border-slate-200 bg-white/80 p-5"
                >
                  <div className="text-sm font-semibold text-gold-700">
                    {detail.label}
                  </div>
                  <div className="mt-1 text-slate-700">{detail.value}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-x grid gap-6 pb-20 md:grid-cols-3">
        {highlights.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <div className="card h-full">
              <div className="text-4xl text-gold-600">♟</div>
              <h2 className="mt-4 font-display text-xl font-bold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
