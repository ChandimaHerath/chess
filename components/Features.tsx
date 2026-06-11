import Reveal from "./Reveal";

const features = [
  {
    icon: "🎯",
    title: "Personalised Curriculum",
    desc: "Every student gets a study plan tailored to their rating, goals and playing style.",
  },
  {
    icon: "👑",
    title: "Titled Coaches",
    desc: "Learn directly from GMs, IMs and FIDE-rated trainers with decades of experience.",
  },
  {
    icon: "📊",
    title: "Game Analysis",
    desc: "We review your tournament games move-by-move to turn mistakes into mastery.",
  },
  {
    icon: "🏆",
    title: "Tournaments & Leagues",
    desc: "Compete in our in-house leagues and get supported entry into rated events.",
  },
  {
    icon: "💻",
    title: "Online & In-Person",
    desc: "Join from anywhere with our interactive platform, or visit our academy in person.",
  },
  {
    icon: "🤝",
    title: "Thriving Community",
    desc: "A welcoming community of players for practice games, study groups and friendships.",
  },
];

export default function Features() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            Why Checkmate Academy
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Everything you need to improve
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
