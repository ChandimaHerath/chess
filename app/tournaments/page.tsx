import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Tournaments — Checkmate Academy",
  description:
    "Join Checkmate Academy chess tournaments, leagues, rated practice events and student championship days.",
};

const events = [
  {
    name: "Academy Rapid League",
    date: "Every Saturday",
    format: "15+10 rapid · 5 rounds",
    audience: "Club players and juniors",
  },
  {
    name: "Junior Championship",
    date: "Monthly",
    format: "Age-group sections",
    audience: "Students under 18",
  },
  {
    name: "Blitz Arena Night",
    date: "First Friday",
    format: "3+2 blitz · open arena",
    audience: "All academy members",
  },
];

const support = [
  "Pre-event preparation sessions",
  "Pairing and scorekeeping support",
  "Post-tournament game analysis",
  "Fair-play focused playing environment",
];

export default function TournamentsPage() {
  return (
    <div className="pt-24">
      <section className="container-x py-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            Competitive Play
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Chess <span className="gold-text">Tournaments</span>
          </h1>
          <p className="mt-5 text-slate-500">
            Regular events help students turn training into confidence. Our
            tournaments are organised, welcoming and built for real improvement.
          </p>
        </Reveal>
      </section>

      <section className="container-x grid gap-6 pb-16 lg:grid-cols-3">
        {events.map((event, i) => (
          <Reveal key={event.name} delay={i * 0.1}>
            <div className="card h-full">
              <div className="text-4xl">♜</div>
              <h2 className="mt-4 font-display text-2xl font-bold text-slate-900">
                {event.name}
              </h2>
              <div className="mt-4 space-y-3 text-sm">
                <p>
                  <span className="font-semibold text-gold-700">When:</span>{" "}
                  <span className="text-slate-600">{event.date}</span>
                </p>
                <p>
                  <span className="font-semibold text-gold-700">Format:</span>{" "}
                  <span className="text-slate-600">{event.format}</span>
                </p>
                <p>
                  <span className="font-semibold text-gold-700">For:</span>{" "}
                  <span className="text-slate-600">{event.audience}</span>
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-slate-900">
              Tournament support
            </h2>
            <p className="mt-4 text-slate-500">
              We help players prepare before the first round and learn from the
              final scoresheet afterward, so every event becomes part of the
              training plan.
            </p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {support.map((item, i) => (
              <Reveal key={item} delay={i * 0.08}>
                <div className="card h-full">
                  <span className="text-2xl text-gold-600">✓</span>
                  <p className="mt-3 font-medium text-slate-700">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-slate-900">
            Ready for your next event?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            Contact us to confirm the next tournament date, section and entry
            details for your level.
          </p>
          <Link href="/contact" className="btn-primary mt-8">
            Ask About Events
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
