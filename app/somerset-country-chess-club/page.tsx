import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Somerset County Chess Club — Dash Chess Academy",
  description:
    "Join the Somerset County Chess Club for casual games, mini-lessons and community chess meetups at Raritan Public Library.",
};

const meetups = [
  {
    title: "Wednesday Evenings",
    time: "6:00 PM to 8:00 PM",
    desc: "A fun mid-week session for families, working adults and students with casual games, puzzles and short instructional lessons.",
  },
  {
    title: "Friday Mornings",
    time: "10:00 AM to 12:30 PM",
    desc: "A calm daytime meetup for retired community members, homeschooling families and anyone who prefers relaxed social chess.",
  },
];

const whoCanJoin = [
  "Kids, teens, adults and seniors",
  "Homeschooling students",
  "Retired adults",
  "Parents and kids",
  "Beginners learning the basics",
  "Experienced players looking for friendly competition",
];

const activities = [
  "Casual games",
  "Mini-lessons",
  "Puzzles and challenges",
  "Friendly in-house tournaments",
  "Social time and community building",
];

export default function SomersetCountryChessClubPage() {
  return (
    <div className="pt-24">
      <section className="container-x grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            A welcoming community for all ages
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Somerset County{" "}
            <span className="gold-text">Chess Club</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
            The Somerset County Chess Club is a friendly, relaxed and growing
            community where players of all ages come together to learn, play
            and enjoy chess.
          </p>
          <p className="mt-4 text-sm font-medium text-gold-700">
            President: Dharsha "Dash" Rupasinghe
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-gold-400/40 bg-gradient-to-br from-gold-50 via-white to-slate-50 p-8 shadow-sm">
            <div className="absolute -right-8 -top-10 font-display text-[10rem] text-gold-500 opacity-10">
              ♚
            </div>
            <div className="relative">
              <div className="text-sm font-semibold uppercase tracking-widest text-gold-700">
                Location
              </div>
              <h2 className="mt-3 font-display text-3xl font-bold text-slate-900">
                Raritan Public Library
              </h2>
              <p className="mt-3 text-slate-600">Somerset County, NJ</p>
              <p className="mt-6 rounded-2xl border border-slate-200 bg-white/80 p-5 text-sm text-slate-600">
                No registration needed. Just come by, sit down and play.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-x grid gap-6 pb-16 md:grid-cols-2">
        {meetups.map((meetup, i) => (
          <Reveal key={meetup.title} delay={i * 0.08}>
            <article className="card h-full">
              <h2 className="font-display text-2xl font-bold text-slate-900">
                {meetup.title}
              </h2>
              <div className="mt-2 text-sm font-semibold text-gold-700">
                {meetup.time}
              </div>
              <p className="mt-4 leading-relaxed text-slate-500">
                {meetup.desc}
              </p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="container-x grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-slate-900">
              Who can join?
            </h2>
            <p className="mt-4 text-slate-500">
              Everyone is welcome. No membership required and no experience
              needed.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {whoCanJoin.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 text-gold-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-3xl font-bold text-slate-900">
              What we do
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {activities.map((item) => (
                <li key={item} className="card h-full text-sm text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
