import Reveal from "./Reveal";

const programs = [
  {
    icon: "♟",
    title: "In-Person & Online Classes",
    level: "Flexible learning",
    desc: "Choose local small-group instruction or interactive Zoom lessons with puzzles, screen-share and live games.",
    features: ["Structured lessons", "Practice games", "Coach feedback"],
  },
  {
    icon: "♞",
    title: "Group Classes",
    level: "Placed by age and skill",
    desc: "Students learn with peers in the right group, from total beginners to serious tournament competitors.",
    features: ["Daily lesson focus", "Puzzle solving", "Improvement tips"],
  },
  {
    icon: "♛",
    title: "Clubs & Tournaments",
    level: "Community and competition",
    desc: "Join school chess clubs, the Somerset County Chess Club and USCF-rated quads hosted around New Jersey.",
    features: ["School partnerships", "Rated quads", "Casual club play"],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            What We Offer
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            A path for every player
          </h2>
          <p className="mt-4 text-slate-500">
            Whether you want to learn the rules, prepare for tournaments or
            simply enjoy chess with a welcoming community, Dash Chess Academy
            has a place for you.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/60 bg-white/55 p-7 shadow-xl shadow-emerald-700/10 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-emerald-600/50 hover:bg-white/70 hover:shadow-emerald-600/25">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-8 font-display text-[9rem] leading-none text-slate-900/[0.06] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                >
                  {p.icon}
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-white/20 to-gold-100/35" />
                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-200/70 bg-emerald-50/80 text-4xl text-emerald-700 shadow-sm">
                    {p.icon}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-slate-900">
                    {p.title}
                  </h3>
                  <div className="mt-1 text-sm font-medium text-gold-700">
                    {p.level}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">
                    {p.desc}
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-600">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="text-gold-600">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
