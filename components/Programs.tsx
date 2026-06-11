import Reveal from "./Reveal";

const programs = [
  {
    icon: "♟",
    title: "Beginners (Pawns)",
    level: "Rating 0–800",
    desc: "Learn the rules, piece values, basic checkmates and the principles of a strong opening.",
    features: ["Board fundamentals", "Basic tactics", "Weekly puzzles"],
  },
  {
    icon: "♞",
    title: "Intermediate (Knights)",
    level: "Rating 800–1600",
    desc: "Sharpen tactical vision, study classic games and build a reliable opening repertoire.",
    features: ["Tactical patterns", "Endgame theory", "Tournament prep"],
  },
  {
    icon: "♛",
    title: "Advanced (Queens)",
    level: "Rating 1600+",
    desc: "Deep strategic planning, calculation training and personalised game analysis with masters.",
    features: ["Positional play", "Opening prep", "1-on-1 coaching"],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            Our Programs
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            A path for every player
          </h2>
          <p className="mt-4 text-slate-500">
            Structured tracks designed by grandmasters to take you from your
            current level to your next milestone.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="card h-full">
                <div className="text-4xl">{p.icon}</div>
                <h3 className="mt-4 font-display text-xl font-bold text-slate-900">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
