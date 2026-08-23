import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "The group classes give students structure, puzzles and real games in a friendly environment.",
    author: "Group Classes",
    role: "Lessons for the right age and skill level",
  },
  {
    quote:
      "The twice-monthly quads help players gain USCF-rated experience close to home.",
    author: "Rated Tournaments",
    role: "Sundays in Somerville, NJ",
  },
  {
    quote:
      "Wednesday evening and Friday morning meetups welcome beginners, families and experienced players.",
    author: "Somerset County Chess Club",
    role: "Casual community chess",
  },
];

export default function Testimonials() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            Student Stories
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Classes, tournaments and community
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.1}>
              <figure className="card h-full">
                <div className="text-3xl text-gold-500">&ldquo;</div>
                <blockquote className="mt-2 text-sm leading-relaxed text-slate-700">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <div className="font-semibold text-slate-900">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
