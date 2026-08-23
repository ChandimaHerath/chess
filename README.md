# Dash Chess Academy — Chess Website

A modern, animated site for Dash Chess Academy, built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and **Framer Motion**.

## Highlights

- 🎬 **Animated chessboard hero** — pieces glide through Morphy's famous *Opera Game* (1858) on an endless loop, with last-move highlighting. Respects `prefers-reduced-motion`.
- ✨ Smooth scroll-reveal animations throughout.
- 📱 Fully responsive, dark "premium" theme with gold accents.
- 📄 Pages: **Home**, **Classes**, **Tournaments**, **Gallery**, **Somerset County Chess Club**, **Programs**, **About** and **Contact**.
- ♟ No image assets required — pieces use Unicode glyphs.

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Build for production

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx          # Root layout, fonts, navbar + footer
  page.tsx            # Landing page
  classes/page.tsx    # Classes and groups
  tournaments/page.tsx # USCF-rated tournament details
  gallery/page.tsx    # Tournament and club gallery
  programs/page.tsx   # Program paths
  about/page.tsx      # About + timeline + coaches
  contact/page.tsx    # Contact form
  globals.css         # Tailwind + custom theme styles
components/
  AnimatedChessBoard.tsx  # ⭐ the animated hero board
  Navbar.tsx  Footer.tsx  Hero.tsx
  Programs.tsx  Features.tsx  Coaches.tsx
  Testimonials.tsx  CTA.tsx  Reveal.tsx
```

## Customising

- **Colors / theme** → `tailwind.config.ts`
- **The animated game** → edit the `GAME` move list in `components/AnimatedChessBoard.tsx`
- **Copy & content** → each section component holds its own data array at the top.
