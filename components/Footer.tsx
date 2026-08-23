import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">♞</span>
            <span className="font-display text-lg font-bold text-slate-900">
              Dash <span className="gold-text">Chess Academy</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-slate-500">
            Structured classes, rated tournaments and a welcoming Somerset
            County chess community.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-500">
            <li>
              <Link href="/programs" className="hover:text-gold-700">
                Classes
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gold-700">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold-700">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-500">
            <li>dashchessacademy@dashnmore.com</li>
            <li>646-238-5213</li>
            <li>Somerville &amp; Somerset County, NJ</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900">Newsletter</h4>
          <p className="mt-4 text-sm text-slate-500">
            Weekly puzzles &amp; tactics in your inbox.
          </p>
          <form className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-800 outline-none focus:border-gold-500"
            />
            <button type="submit" className="btn-primary px-5 py-2">
              →
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-200 py-6">
        <p className="container-x text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Dash Chess Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
