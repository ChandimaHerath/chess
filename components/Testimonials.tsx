import Reveal from "./Reveal";

const testimonials = [
  {
    quote:
      "My son went from learning the rules to winning his school championship in under a year. The coaches genuinely care.",
    author: "Priya M.",
    role: "Parent of a junior student",
  },
  {
    quote:
      "I was stuck at 1200 for years. The personalised analysis sessions pushed me past 1700. Worth every minute.",
    author: "Marcus T.",
    role: "Adult improver",
  },
  {
    quote:
      "The community is incredible. Daily practice games and study groups kept me motivated all the way to my first norm.",
    author: "Aisha K.",
    role: "Competitive player",
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
            Loved by players worldwide
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
