import Link from "next/link";
import AnimatedChessBoard from "./AnimatedChessBoard";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Copy */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold-700">
            ♚ Est. 2009 · 12,000+ students trained
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl">
            Master the <span className="gold-text">Royal Game</span>
            <br />
            move by move.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            From your first opening to grandmaster-level strategy, Checkmate
            Academy pairs you with titled coaches and a proven curriculum.
            Online &amp; in-person classes for every age and rating.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/contact" className="btn-primary">
              Book a Free Trial Lesson
            </Link>
            <Link href="/programs" className="btn-ghost">
              Explore Programs
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { k: "25+", v: "Titled Coaches" },
              { k: "98%", v: "Rating Improvement" },
              { k: "40+", v: "Countries" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-bold text-gold-600">
                  {s.k}
                </div>
                <div className="text-sm text-slate-500">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated board */}
        <div className="mx-auto w-full max-w-md animate-float lg:max-w-lg">
          <AnimatedChessBoard />
        </div>
      </div>
    </section>
  );
}
