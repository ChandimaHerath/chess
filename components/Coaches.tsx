import Reveal from "./Reveal";

const coach = {
  name: "Coach Dash",
  blurb:
    "Personalized coaching that turns chess from a chore into a game kids actually look forward to.",
  photo: "https://picsum.photos/id/1005/1600/1200",
  stats: [
    { value: "10+", label: "Years Coaching" },
    { value: "500+", label: "Students Taught" },
    { value: "50+", label: "Tournaments Hosted" },
  ],
};

export default function Coaches() {
  const [firstWord, ...rest] = coach.name.split(" ");
  const lastWord = rest.join(" ");

  return (
    <section className="relative overflow-hidden bg-emerald-950">
      <div className="relative min-h-[560px] sm:min-h-[620px] md:min-h-[680px]">
        <img
          src={coach.photo}
          alt={coach.name}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "60% 25%" }}
        />
        {/* Layer 3: subtle green tint across the whole photograph */}
        <div className="absolute inset-0 bg-board-dark/15 mix-blend-multiply" />

        {/* Layer 1: wide translucent green wash — bleeds well past the diagonal, into the photo,
            fading out so the photograph stays visible underneath and beyond it */}
        <div
          className="absolute inset-y-0 left-0 w-[92%] sm:w-[85%] md:w-[80%] lg:w-[76%]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 52% 100%, 0 100%)",
            backgroundImage:
              "linear-gradient(100deg, rgba(2,44,34,0.85) 0%, rgba(2,44,34,0.72) 32%, rgba(115,149,82,0.48) 52%, rgba(115,149,82,0.2) 72%, rgba(115,149,82,0) 92%)",
          }}
        />

        {/* Layer 2: darker green gradient, narrower and biased toward the top-left corner, for depth */}
        <div
          className="absolute inset-y-0 left-0 w-[64%] sm:w-[55%] md:w-[50%] lg:w-[47%] bg-gradient-to-br from-emerald-950/85 via-emerald-950/35 to-transparent"
          style={{ clipPath: "polygon(0 0, 100% 0, 82% 100%, 0 100%)" }}
        />

        {/* content, sitting on top of the overlay layers rather than its own opaque backdrop */}
        <div className="absolute inset-y-0 left-0 w-[64%] sm:w-[55%] md:w-[50%] lg:w-[47%]">
          <div className="relative flex h-full flex-col justify-center px-6 py-20 sm:px-10 md:px-12 lg:px-16">
            <Reveal>
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Meet the Coach
              </span>
              <h1 className="mt-4 font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-6xl">
                Meet Your
                <br />
                {firstWord}
                {lastWord && (
                  <>
                    {" "}
                    <span className="text-emerald-300">{lastWord}</span>
                  </>
                )}
              </h1>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/80 sm:text-base">
                {coach.blurb}
              </p>
            </Reveal>
          </div>
        </div>

        {/* decorative diagonal stripes bridging the split and the bar below */}
        <div className="absolute bottom-16 left-[46%] hidden gap-2 sm:flex md:left-[42%] lg:left-[39%]">
          <span className="block h-24 w-3 -skew-x-[18deg] bg-emerald-400/80" />
          <span className="block h-24 w-3 -skew-x-[18deg] bg-board-dark" />
          <span className="block h-24 w-3 -skew-x-[18deg] bg-emerald-950" />
        </div>
      </div>

      {/* integrated video CTA + stats bar */}
      <Reveal delay={0.1}>
        <div className="relative flex flex-col bg-emerald-950 sm:flex-row sm:items-stretch">
          <div
            className="relative flex items-center gap-3 bg-board-dark px-6 py-5 sm:pr-10"
            style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 22px) 100%, 0 100%)" }}
          >
            <span
              aria-hidden
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white/70"
            >
              <svg viewBox="0 0 16 16" className="ml-0.5 h-4 w-4 fill-white">
                <path d="M4 2.5v11l10-5.5z" />
              </svg>
            </span>
            <span className="text-sm font-bold uppercase leading-tight text-white">
              Watch
              <br />
              <span className="font-normal">the video</span>
            </span>
          </div>

          <div className="grid flex-1 grid-cols-3 divide-x divide-white/10 px-6 py-6 sm:px-10">
            {coach.stats.map((s) => (
              <div key={s.label} className="px-2 text-center sm:px-6 sm:text-left">
                <div className="font-sans text-2xl font-black text-white sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-300/90 sm:text-xs">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* bottom angular geometry connecting back into the diagonal */}
      <div
        className="h-10 bg-gradient-to-r from-emerald-950 via-board-dark to-emerald-700 sm:h-14"
        style={{ clipPath: "polygon(0 0, 38% 0, 18% 100%, 0 100%)" }}
      />
    </section>
  );
}
