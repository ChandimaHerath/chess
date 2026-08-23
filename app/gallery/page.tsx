import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Gallery — Dash Chess Academy",
  description:
    "See moments from Dash Chess Academy tournaments and the Somerset County Chess Club community.",
};

const gallery = [
  {
    title: "Tournament Rounds",
    caption: "USCF-rated quads with focused players, clocks and notation.",
    piece: "♕",
  },
  {
    title: "Quad Groups",
    caption: "Players grouped by rating for fair, competitive games.",
    piece: "♜",
  },
  {
    title: "Medal Moments",
    caption: "Celebrating effort, sportsmanship and strong tournament results.",
    piece: "♙",
  },
  {
    title: "Club Meetups",
    caption: "Kids, adults and seniors playing together at Raritan Library.",
    piece: "♗",
  },
  {
    title: "Puzzle Challenges",
    caption: "Friendly weekly practice for learners of every experience level.",
    piece: "♔",
  },
  {
    title: "Community Games",
    caption: "Wednesday evening and Friday morning chess in Somerset County.",
    piece: "♞",
  },
];

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <section className="container-x py-12 text-center">
        <Reveal className="mx-auto max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            Gallery
          </span>
          <h1 className="mt-3 font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Tournament &amp; Club <span className="gold-text">Photos</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-slate-500">
            A look into our tournaments and the growing Somerset County chess
            community. Add your tournament and club photos here as the gallery
            grows.
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
