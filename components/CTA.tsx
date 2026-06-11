import Link from "next/link";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold-400/40 bg-gradient-to-br from-gold-50 via-white to-slate-50 px-8 py-16 text-center shadow-sm sm:px-16">
            <div className="absolute -right-10 -top-10 text-[12rem] text-gold-500 opacity-10">
              ♚
            </div>
            <h2 className="relative font-display text-3xl font-bold text-slate-900 sm:text-4xl">
              Your best move starts today
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-slate-600">
              Book a free 30-minute trial lesson with one of our coaches. No
              commitment — just a chance to feel the difference.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Claim Your Free Trial
              </Link>
              <Link href="/programs" className="btn-ghost">
                See Pricing &amp; Plans
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
