"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FeatureItem {
  piece: string;
  title: string;
  desc: string;
}

const items: FeatureItem[] = [
  {
    piece: "♟",
    title: "Structured Curriculum",
    desc: "Students are placed by age, experience and readiness so each player learns at the right pace.",
  },
  {
    piece: "♜",
    title: "Online & In-Person",
    desc: "Flexible class formats make it easier for busy families and students outside New Jersey to train.",
  },
  {
    piece: "♟",
    title: "Small Groups",
    desc: "Collaborative classes include lessons, puzzles, practice games and improvement feedback.",
  },
  {
    piece: "♜",
    title: "USCF-Rated Events",
    desc: "Twice-monthly rated quads give players a fair, friendly way to gain tournament experience.",
  },
  {
    piece: "♛",
    title: "School Chess Clubs",
    desc: "We partner with local schools to bring chess learning and organized play into the classroom.",
  },
  {
    piece: "♚",
    title: "Somerset Club",
    desc: "Wednesday evening and Friday morning meetups welcome kids, adults, seniors and families.",
  },
];

const BASE_DELAY = 0.2;
const COLUMN_STAGGER = 0.15;
const SLIDE_DURATION = 0.45;

function FeatureCard({ f, columnDelay }: { f: FeatureItem; columnDelay: number }) {
  const [inView, setInView] = useState(false);
  const slideDelay = BASE_DELAY + columnDelay;
  const descDelay = slideDelay + SLIDE_DURATION;

  return (
    <motion.div
      className="relative h-full overflow-hidden rounded-2xl border border-white/60 bg-white/55 p-7 shadow-xl shadow-emerald-700/10 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-emerald-600/50 hover:bg-white/70 hover:shadow-emerald-600/25"
      onViewportEnter={() => setInView(true)}
      viewport={{ once: true, margin: "-80px" }}
    >
      <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>

      <div className="relative mt-4 flex h-16 w-32 overflow-hidden rounded-lg border border-gold-200/60 shadow-sm">
        <div className="h-full w-1/2 bg-board-light/60" />
        <div className="h-full w-1/2 bg-board-dark/30" />
        <motion.div
          className="absolute top-0 flex h-16 w-16 items-center justify-center text-3xl text-gold-700"
          initial={{ left: "0%" }}
          animate={{ left: inView ? "50%" : "0%" }}
          transition={{ delay: inView ? slideDelay : 0, duration: SLIDE_DURATION, ease: "easeInOut" }}
        >
          {f.piece}
        </motion.div>
      </div>

      <motion.p
        className="mt-4 text-sm leading-relaxed text-slate-500"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 8 }}
        transition={{ delay: inView ? descDelay : 0, duration: 0.4, ease: "easeOut" }}
      >
        {f.desc}
      </motion.p>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            Why Families Choose Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            A supportive place to grow
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {items.map((f, i) => (
            <FeatureCard key={f.title} f={f} columnDelay={(i % 2) * COLUMN_STAGGER} />
          ))}
        </div>
      </div>
    </section>
  );
}
