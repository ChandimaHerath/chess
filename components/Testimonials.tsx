import Reveal from "./Reveal";

// Placeholder testimonials — swap these for real parent/student quotes (with
// their consent) and real photos before this goes live.
const rawTestimonials = [
  {
    name: "Sarah Chen",
    role: "Parent of a Student",
    quote:
      "My daughter went from knowing the rules to winning her first rated tournament in under a year.",
    photo: "https://i.pravatar.cc/96?img=47",
  },
  {
    name: "Marcus Webb",
    role: "Tournament Player",
    quote:
      "Coach Dash makes every lesson feel like a puzzle worth solving. I actually look forward to practice now.",
  },
  {
    name: "Priya Patel",
    role: "Adult Beginner",
    quote:
      "I started as a total beginner in my 30s and the small-group format made it easy to keep up.",
    photo: "https://i.pravatar.cc/96?img=32",
  },
  {
    name: "James Okafor",
    role: "Parent of Two Students",
    quote: "Both my kids look forward to Tuesday classes every single week.",
  },
  {
    name: "Emily Novak",
    role: "Club Member",
    quote:
      "The Somerset club nights are the best part of my week — welcoming for players at every level.",
    photo: "https://i.pravatar.cc/96?img=45",
  },
  {
    name: "David Kim",
    role: "Parent of a Student",
    quote: "Structured, patient and genuinely fun. Exactly what we were looking for.",
  },
  {
    name: "Lisa Tran",
    role: "Tournament Player",
    quote:
      "Went from casual games to USCF-rated quads in a few months. Great coaching, real results.",
    photo: "https://i.pravatar.cc/96?img=48",
  },
  {
    name: "Robert Hayes",
    role: "Club Member",
    quote: "A warm community that takes chess seriously without losing the fun.",
  },
];

const testimonials = rawTestimonials.map((t, id) => ({ ...t, id }));

const pieces = ["♟", "♞", "♝", "♜", "♛", "♚"];

const avatarColors = [
  "bg-gold-600",
  "bg-emerald-600",
  "bg-board-dark",
  "bg-ink-700",
  "bg-gold-800",
];

function initials(name: string) {
  const parts = name.split(" ");
  return (parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "");
}

function TestimonialCard({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="card flex h-full w-80 shrink-0 flex-col sm:w-96">
      <span
        aria-hidden
        className="select-none text-3xl text-gold-500"
      >
        {pieces[t.id % pieces.length]}
      </span>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700">
        {t.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        {t.photo ? (
          <img
            src={t.photo}
            alt={t.name}
            className="h-11 w-11 rounded-full object-cover"
          />
        ) : (
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-full font-semibold text-white ${
              avatarColors[t.id % avatarColors.length]
            }`}
          >
            {initials(t.name)}
          </div>
        )}
        <div>
          <div className="font-semibold text-slate-900">{t.name}</div>
          <div className="text-xs text-slate-500">{t.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

function MarqueeRow({
  items,
  speed,
}: {
  items: typeof testimonials;
  speed: "slow" | "fast";
}) {
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <div
        className={`flex w-max gap-6 ${
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee-fast"
        } hover:[animation-play-state:paused]`}
      >
        {[...items, ...items].map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4, 8);

  return (
    <section className="border-y border-slate-200 bg-slate-50 py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-gold-700">
            Student Stories
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Classes, tournaments and community
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 space-y-6">
        <MarqueeRow items={row1} speed="slow" />
        <MarqueeRow items={row2} speed="fast" />
      </div>
    </section>
  );
}
