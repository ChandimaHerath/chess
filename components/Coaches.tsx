import Reveal from "./Reveal";

const coaches = [
  {
    name: "Coach Dash",
    title: "Founder & Chess Instructor",
    blurb:
      "A dedicated and passionate instructor with years of experience coaching aspiring chess players. Coach Dash creates an inspiring learning environment where players of all levels can thrive on and off the chessboard.",
    initials: "DR",
  },
];

export default function Coaches() {
  return (
    <section className="py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            Meet the Coach
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Coach Dash
          </h2>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-3xl gap-6">
          {coaches.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 0.08}>
              <div className="card group h-full text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 font-display text-2xl font-bold text-ink-950">
                  {c.initials}
                </div>
                <h3 className="mt-5 font-semibold text-slate-900">{c.name}</h3>
                <div className="text-xs text-gold-700">{c.title}</div>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  {c.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
