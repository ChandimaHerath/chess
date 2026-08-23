import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Classes — Dash Chess Academy",
  description:
    "Explore Dash Chess Academy in-person, online, group and private chess classes for every age and skill level.",
};

const formats = [
  {
    title: "In-Person Classes",
    desc: "Held at Somerset County locations with small groups, structured lessons and supervised games.",
  },
  {
    title: "Online Classes",
    desc: "Interactive Zoom-based lessons with puzzles, screen-share and live games for busy families or students outside New Jersey.",
  },
  {
    title: "Group Classes",
    desc: "Students are placed by age and skill level. Each class includes a lesson, puzzles, practice games and feedback.",
  },
  {
    title: "Private / Individual Lessons",
    desc: "One-on-one coaching tailored to student goals, rapid improvement and tournament preparation.",
  },
];

const groups = [
  {
    title: "Group 1 — Total Beginners",
    goal: "Become confident playing full games independently.",
    learns: [
      "Piece movement and rules",
      "Check, checkmate and stalemate",
      "Basic opening ideas",
      "Simple tactics",
      "Fun puzzles and guided games",
    ],
  },
  {
    title: "Group 2 — Grades K-2",
    goal: "Build strong fundamentals and prepare for beginner tournaments.",
    learns: [
      "Basic checkmate patterns",
      "Opening principles",
      "Tactics and puzzle solving",
      "Endgame basics",
      "Playing with purpose",
    ],
  },
  {
    title: "Group 3 — Grades 3+",
    goal: "Prepare for unrated and USCF beginner-level tournaments.",
    learns: [
      "Tactical patterns",
      "Opening fundamentals",
      "Positional ideas",
      "Endgame technique",
      "Game analysis",
    ],
  },
  {
    title: "Group 4 — Competitive / Serious Players",
    goal: "Build strong USCF performance and long-term competitive growth.",
    learns: [
      "Deep opening preparation",
      "Advanced tactics and calculation",
      "Endgame mastery",
      "Tournament psychology",
      "Analyzing student games and master games",
    ],
  },
];

const reasons = [
  "All ages welcome, from 5 to 75+",
  "Small group sizes",
  "Structured curriculum",
  "USCF-affiliated tournaments",
  "Friendly, supportive environment",
  "Clear communication with parents",
  "Opportunities for tournaments, clubs and camps",
];

export default function ClassesPage() {
  return (
    <div className="pt-24">
      <section className="container-x py-12 text-center">
        <Reveal className="mx-auto max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            Classes &amp; Groups
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Chess <span className="gold-text">Classes</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-slate-500">
            Structured chess learning for every age and skill level. Students
            are placed into groups based on age, experience and readiness so
            every child learns at the right pace.
          </p>
        </Reveal>
      </section>

      <section className="container-x grid gap-6 pb-16 md:grid-cols-2">
        {formats.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="card h-full">
              <h2 className="font-display text-2xl font-bold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-4 leading-relaxed text-slate-500">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
              Our Groups
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold text-slate-900">
              The right group for each player
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {groups.map((group, i) => (
              <Reveal key={group.title} delay={(i % 2) * 0.08}>
                <article className="card h-full">
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    {group.title}
                  </h3>
                  <ul className="mt-5 space-y-2 text-sm text-slate-600">
                    {group.learns.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-0.5 text-gold-600">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-sm font-medium text-gold-700">
                    Goal: {group.goal}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-slate-900">
            Why families choose us
          </h2>
          <p className="mt-4 text-slate-500">
            Dash Chess Academy offers a warm, structured and supportive learning
            environment with clear paths into tournaments, clubs and camps.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">
              View Schedule &amp; Register
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact Us for Placement
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason, i) => (
            <Reveal key={reason} delay={(i % 2) * 0.08}>
              <div className="card h-full">
                <span className="text-2xl text-gold-600">✓</span>
                <p className="mt-3 font-medium text-slate-700">{reason}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
