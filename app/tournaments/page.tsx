import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "USCF-Rated Tournaments — Dash Chess Academy",
  description:
    "Join Dash Chess Academy USCF-rated quads twice a month on Sundays in Somerville, New Jersey.",
};

const details = [
  { label: "Location", value: "Somerville, NJ" },
  { label: "Frequency", value: "Twice a month, Sundays" },
  { label: "Format", value: "USCF-Rated Quads" },
  { label: "Time Control", value: "G/30; d5" },
  { label: "Who Can Play", value: "All ages and ratings, beginners to advanced" },
  { label: "Required", value: "Active USCF membership" },
];

const months = [
  { month: "June", dates: ["June 14", "June 28"] },
  { month: "July", dates: ["July 12", "July 26"] },
  { month: "August", dates: ["August 9", "August 23"] },
  { month: "September", dates: ["September 13", "September 27"] },
  { month: "October", dates: ["October 11", "October 25"] },
  { month: "November", dates: ["November 8", "November 22"] },
  { month: "December", dates: ["December 6", "December 20"] },
];

const discounts = [
  "OVER1000 — for players rated 1000+",
  "OVER1400 — for players rated 1400+",
  "OVER1800 — for players rated 1800+",
];

const whyPlay = [
  "Consistent rated events every other Sunday",
  "Friendly, well-organized environment",
  "Great for beginners entering competitive chess",
  "Strong competition for advanced players",
  "Local, convenient and family-friendly",
];

export default function TournamentsPage() {
  return (
    <div className="pt-24">
      <section className="container-x py-12">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            USCF-Rated Tournaments
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Rated <span className="gold-text">Quads</span> in Somerville
          </h1>
          <p className="mt-5 text-slate-500">
            Dash Chess Academy hosts competitive, friendly and local
            USCF-rated tournaments twice a month for players of all ages and
            rating levels.
          </p>
        </Reveal>
      </section>

      <section className="container-x grid gap-6 pb-16 sm:grid-cols-2 lg:grid-cols-3">
        {details.map((detail, i) => (
          <Reveal key={detail.label} delay={(i % 3) * 0.08}>
            <div className="card h-full">
              <div className="text-sm font-semibold uppercase tracking-widest text-gold-700">
                {detail.label}
              </div>
              <p className="mt-3 text-lg font-medium text-slate-800">
                {detail.value}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-slate-900">
              Tournament format
            </h2>
            <p className="mt-4 text-slate-500">
              Players are grouped into sets of four based on official USCF
              rating. Each player competes in three rounds, one against each
              opponent in their quad.
            </p>
            <p className="mt-4 text-slate-500">
              We provide clocks, boards, score sheets and a clean, quiet
              playing environment.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="card">
              <h3 className="font-display text-2xl font-bold text-slate-900">
                Tournament policies
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                <li>Players must arrive 10-15 minutes early.</li>
                <li>USCF membership is required for rated play.</li>
                <li>Parents may wait in the designated area.</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-16">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900">
            Upcoming tournament dates
          </h2>
          <p className="mt-4 text-slate-500">
            Select a month to register. Each button can point to the matching
            registration form when your forms are ready.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {months.map((month, i) => (
            <Reveal key={month.month} delay={(i % 4) * 0.06}>
              <div className="card h-full">
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {month.month}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {month.dates.join(" and ")}
                </p>
                <Link href="/contact" className="btn-ghost mt-5 w-full">
                  Register for {month.month}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-slate-900">
              Discounts
            </h2>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {discounts.map((discount) => (
                <li key={discount}>{discount}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl font-bold text-slate-900">
              Why play at Dash Chess Academy?
            </h2>
            <ul className="mt-5 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              {whyPlay.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="container-x py-16 text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-slate-900">
            Questions?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500">
            We are happy to help with USCF membership or tournament readiness.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="mailto:dashchessacademy@dashnmore.com" className="btn-primary">
              Email Us
            </a>
            <a href="tel:16462385213" className="btn-ghost">
              646-238-5213
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
