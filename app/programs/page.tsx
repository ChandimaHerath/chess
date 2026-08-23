import type { Metadata } from "next";
import Link from "next/link";
import Programs from "@/components/Programs";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Programs — Dash Chess Academy",
  description:
    "Explore Dash Chess Academy classes, groups, school clubs, tournaments and private lesson options.",
};

const plans = [
  {
    name: "Find the Right Class",
    features: [
      "In-person and online options",
      "Group placement by age and skill",
      "Private lessons available",
      "Tournament preparation support",
    ],
    cta: "View Classes",
    href: "/classes",
    featured: false,
  },
  {
    name: "Play Rated Events",
    features: [
      "USCF-rated quads",
      "Twice a month on Sundays",
      "Somerville, New Jersey",
      "All ages and ratings welcome",
    ],
    cta: "See Dates",
    href: "/tournaments",
    featured: true,
  },
  {
    name: "Join the Club",
    features: [
      "Wednesday evening meetups",
      "Friday morning meetups",
      "No registration needed",
      "Raritan Public Library",
    ],
    cta: "Visit Club Page",
    href: "/somerset-country-chess-club",
    featured: false,
  },
];

export default function ProgramsPage() {
  return (
    <div className="pt-24">
      <section className="container-x py-12 text-center">
        <Reveal>
          <h1 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Dash Chess <span className="gold-text">Programs</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Choose structured instruction, rated tournament play or casual
            community chess through Dash Chess Academy.
          </p>
        </Reveal>
      </section>

      <Programs />

      <section className="py-12">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                className={`relative h-full rounded-2xl border p-8 ${
                  p.featured
                    ? "border-gold-400/70 bg-gradient-to-b from-gold-50 to-white shadow-xl shadow-gold-500/15"
                    : "border-slate-200 bg-white shadow-sm"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 px-4 py-1 text-xs font-semibold text-slate-900">
                    Rated Events
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {p.name}
                </h3>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-0.5 text-gold-600">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={p.href}
                  className={`mt-8 w-full ${
                    p.featured ? "btn-primary" : "btn-ghost"
                  }`}
                >
                  {p.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
