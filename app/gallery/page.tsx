import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Gallery — Checkmate Academy",
  description:
    "See moments from Checkmate Academy classes, tournaments, coaching sessions and student celebrations.",
};

const gallery = [
  {
    title: "Opening Lab",
    caption: "Students compare plans from classic queen's pawn structures.",
    piece: "♕",
  },
  {
    title: "Rapid League",
    caption: "Weekend rounds with clocks, notation and coach observations.",
    piece: "♜",
  },
  {
    title: "Junior Class",
    caption: "Young players build confidence with puzzles and friendly games.",
    piece: "♙",
  },
  {
    title: "Game Review",
    caption: "Coaches turn missed chances into clear training targets.",
    piece: "♗",
  },
  {
    title: "Awards Day",
    caption: "Celebrating effort, sportsmanship and rating milestones.",
    piece: "♔",
  },
  {
    title: "Team Practice",
    caption: "Study groups prepare together before local events.",
    piece: "♞",
  },
];

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <section className="container-x py-12 text-center">
        <Reveal className="mx-auto max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            Academy Moments
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Student <span className="gold-text">Gallery</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-slate-500">
            A snapshot of the classrooms, boards, trophies and shared effort
            that make Checkmate Academy a lively chess community.
          </p>
        </Reveal>
      </section>

      <section className="container-x grid gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item, i) => (
          <Reveal key={item.title} delay={(i % 3) * 0.08}>
            <article className="card h-full overflow-hidden p-0">
              <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-gold-900">
                <span className="font-display text-8xl text-gold-300/90">
                  {item.piece}
                </span>
              </div>
              <div className="p-6">
                <h2 className="font-display text-xl font-bold text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {item.caption}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
