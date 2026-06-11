import Reveal from "./Reveal";

const coaches = [
  {
    name: "GM Elena Vasquez",
    title: "Grandmaster · Head Coach",
    rating: "2615",
    blurb: "Two-time national champion specialising in dynamic attacking play.",
    initials: "EV",
  },
  {
    name: "IM David Okonkwo",
    title: "International Master",
    rating: "2480",
    blurb: "Endgame virtuoso and beloved mentor for junior competitors.",
    initials: "DO",
  },
  {
    name: "FM Sara Lindqvist",
    title: "FIDE Master · Youth Lead",
    rating: "2310",
    blurb: "Turns beginners into tournament-ready players with patient coaching.",
    initials: "SL",
  },
  {
    name: "GM Hiroshi Tanaka",
    title: "Grandmaster · Strategy",
    rating: "2590",
    blurb: "Opening theory expert who has trained three national teams.",
    initials: "HT",
  },
];

export default function Coaches() {
  return (
    <section className="py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            Meet the Masters
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Coaches who&apos;ve been there
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coaches.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 0.08}>
              <div className="card group h-full text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 font-display text-2xl font-bold text-ink-950">
                  {c.initials}
                </div>
                <h3 className="mt-5 font-semibold text-slate-900">{c.name}</h3>
                <div className="text-xs text-gold-700">{c.title}</div>
                <div className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                  Elo {c.rating}
                </div>
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
