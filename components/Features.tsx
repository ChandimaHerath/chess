import Reveal from "./Reveal";

const features = [
  {
    icon: "♟",
    title: "Structured Curriculum",
    desc: "Students are placed by age, experience and readiness so each player learns at the right pace.",
  },
  {
    icon: "💻",
    title: "Online & In-Person",
    desc: "Flexible class formats make it easier for busy families and students outside New Jersey to train.",
  },
  {
    icon: "👥",
    title: "Small Groups",
    desc: "Collaborative classes include lessons, puzzles, practice games and improvement feedback.",
  },
  {
    icon: "🏆",
    title: "USCF-Rated Events",
    desc: "Twice-monthly rated quads give players a fair, friendly way to gain tournament experience.",
  },
  {
    icon: "🏫",
    title: "School Chess Clubs",
    desc: "We partner with local schools to bring chess learning and organized play into the classroom.",
  },
  {
    icon: "🤝",
    title: "Somerset Club",
    desc: "Wednesday evening and Friday morning meetups welcome kids, adults, seniors and families.",
  },
];

export default function Features() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            Why Families Choose Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            A supportive place to grow
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08}>
              <div className="card h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-2xl">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {f.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
