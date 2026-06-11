import type { Metadata } from "next";
import Link from "next/link";
import Programs from "@/components/Programs";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Programs & Pricing — Checkmate Academy",
  description:
    "Explore our chess programs for every level, from absolute beginner to advanced competitor, with flexible monthly plans.",
};

const plans = [
  {
    name: "Casual",
    price: "$49",
    period: "/month",
    features: [
      "2 group classes / week",
      "Weekly puzzle sets",
      "Community access",
      "Monthly progress report",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Serious",
    price: "$119",
    period: "/month",
    features: [
      "4 group classes / week",
      "2 game-analysis sessions",
      "Personalised study plan",
      "Tournament preparation",
      "Priority community support",
    ],
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "Elite",
    price: "$249",
    period: "/month",
    features: [
      "Weekly 1-on-1 with a GM/IM",
      "Unlimited group classes",
      "Deep opening preparation",
      "Custom training database",
      "Norm & title roadmap",
    ],
    cta: "Apply Now",
    featured: false,
  },
];

export default function ProgramsPage() {
  return (
    <div className="pt-24">
      <section className="container-x py-12 text-center">
        <Reveal>
          <h1 className="font-display text-4xl font-bold text-slate-900 sm:text-5xl">
            Programs &amp; <span className="gold-text">Pricing</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Flexible plans that grow with you. Switch or cancel anytime — every
            plan starts with a free trial lesson.
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
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-slate-900">
                  {p.name}
                </h3>
                <div className="mt-4 flex items-end gap-1">
                  <span className="font-display text-4xl font-bold text-gold-600">
                    {p.price}
                  </span>
                  <span className="pb-1 text-sm text-slate-500">
                    {p.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-0.5 text-gold-600">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
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
