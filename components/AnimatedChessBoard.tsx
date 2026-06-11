"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * AnimatedChessBoard
 * Plays through Morphy's "Opera Game" (Paris, 1858) on an endless loop.
 * Pieces glide between squares; captured pieces fade away.
 */

type Color = "w" | "b";
type PieceType = "k" | "q" | "r" | "b" | "n" | "p";

interface Piece {
  id: string;
  type: PieceType;
  color: Color;
  square: string; // e.g. "e4"
}

interface Ply {
  // each ply may move one or two pieces (castling), and may capture
  moves: { from: string; to: string }[];
  capture?: string; // square of the captured piece (removed before the move)
}

const GLYPH: Record<Color, Record<PieceType, string>> = {
  w: { k: "♔", q: "♕", r: "♖", b: "♗", n: "♘", p: "♙" },
  b: { k: "♚", q: "♛", r: "♜", b: "♝", n: "♞", p: "♟" },
};

const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];

function initialPieces(): Piece[] {
  const back: PieceType[] = ["r", "n", "b", "q", "k", "b", "n", "r"];
  const pieces: Piece[] = [];
  FILES.forEach((f, i) => {
    pieces.push({ id: `w${f}1`, type: back[i], color: "w", square: `${f}1` });
    pieces.push({ id: `w${f}2`, type: "p", color: "w", square: `${f}2` });
    pieces.push({ id: `b${f}8`, type: back[i], color: "b", square: `${f}8` });
    pieces.push({ id: `b${f}7`, type: "p", color: "b", square: `${f}7` });
  });
  return pieces;
}

// The Opera Game — Morphy vs. Duke Karl / Count Isouard, 1858.
const GAME: Ply[] = [
  { moves: [{ from: "e2", to: "e4" }] },
  { moves: [{ from: "e7", to: "e5" }] },
  { moves: [{ from: "g1", to: "f3" }] },
  { moves: [{ from: "d7", to: "d6" }] },
  { moves: [{ from: "d2", to: "d4" }] },
  { moves: [{ from: "c8", to: "g4" }] },
  { moves: [{ from: "d4", to: "e5" }], capture: "e5" },
  { moves: [{ from: "g4", to: "f3" }], capture: "f3" },
  { moves: [{ from: "d1", to: "f3" }], capture: "f3" },
  { moves: [{ from: "d6", to: "e5" }], capture: "e5" },
  { moves: [{ from: "f1", to: "c4" }] },
  { moves: [{ from: "g8", to: "f6" }] },
  { moves: [{ from: "f3", to: "b3" }] },
  { moves: [{ from: "d8", to: "e7" }] },
  { moves: [{ from: "b1", to: "c3" }] },
  { moves: [{ from: "c7", to: "c6" }] },
  { moves: [{ from: "c1", to: "g5" }] },
  { moves: [{ from: "b7", to: "b5" }] },
  { moves: [{ from: "c3", to: "b5" }], capture: "b5" },
  { moves: [{ from: "c6", to: "b5" }], capture: "b5" },
  { moves: [{ from: "c4", to: "b5" }], capture: "b5" },
  { moves: [{ from: "b8", to: "d7" }] },
  // O-O-O
  {
    moves: [
      { from: "e1", to: "c1" },
      { from: "a1", to: "d1" },
    ],
  },
  { moves: [{ from: "a8", to: "d8" }] },
  { moves: [{ from: "d1", to: "d7" }], capture: "d7" },
  { moves: [{ from: "d8", to: "d7" }], capture: "d7" },
  { moves: [{ from: "h1", to: "d1" }] },
  { moves: [{ from: "e7", to: "e6" }] },
  { moves: [{ from: "b5", to: "d7" }], capture: "d7" },
  { moves: [{ from: "f6", to: "d7" }], capture: "d7" },
  { moves: [{ from: "b3", to: "b8" }] },
  { moves: [{ from: "d7", to: "b8" }], capture: "b8" },
  { moves: [{ from: "d1", to: "d8" }] }, // checkmate
];

function squareToPercent(square: string) {
  const file = FILES.indexOf(square[0]);
  const rank = parseInt(square[1], 10);
  // White at the bottom: rank 8 at top, rank 1 at bottom.
  return { left: file * 12.5, top: (8 - rank) * 12.5 };
}

export default function AnimatedChessBoard() {
  const [pieces, setPieces] = useState<Piece[]>(initialPieces);
  const [lastMove, setLastMove] = useState<{ from: string; to: string } | null>(
    null
  );
  const plyRef = useRef(0);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let timeout: ReturnType<typeof setTimeout>;

    const step = () => {
      const ply = GAME[plyRef.current];

      if (!ply) {
        // Game finished — pause, then reset to the starting position.
        timeout = setTimeout(() => {
          setPieces(initialPieces());
          setLastMove(null);
          plyRef.current = 0;
          timeout = setTimeout(step, 1200);
        }, 2600);
        return;
      }

      setPieces((prev) => {
        let next = prev;
        if (ply.capture) {
          next = next.filter((p) => p.square !== ply.capture);
        }
        next = next.map((p) => {
          const mv = ply.moves.find((m) => m.from === p.square);
          return mv ? { ...p, square: mv.to } : p;
        });
        return next;
      });

      setLastMove(ply.moves[0]);
      plyRef.current += 1;
      timeout = setTimeout(step, 1100);
    };

    timeout = setTimeout(step, 900);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative aspect-square w-full select-none">
      {/* Glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gold-500/10 blur-2xl" />

      <div className="relative overflow-hidden rounded-2xl border border-gold-500/40 shadow-2xl shadow-slate-900/25 ring-1 ring-slate-900/5">
        {/* Squares */}
        <div className="grid grid-cols-8">
          {Array.from({ length: 64 }).map((_, i) => {
            const file = i % 8;
            const rank = 7 - Math.floor(i / 8);
            const square = `${FILES[file]}${rank + 1}`;
            const isLight = (file + rank) % 2 === 1;
            const highlighted =
              lastMove &&
              (lastMove.from === square || lastMove.to === square);
            return (
              <div
                key={square}
                className={`relative aspect-square ${
                  isLight ? "bg-board-light" : "bg-board-dark"
                }`}
              >
                {highlighted && (
                  <div className="absolute inset-0 bg-gold-400/35" />
                )}
              </div>
            );
          })}
        </div>

        {/* Pieces */}
        <AnimatePresence>
          {pieces.map((p) => {
            const { left, top } = squareToPercent(p.square);
            return (
              <motion.div
                key={p.id}
                initial={false}
                animate={{ left: `${left}%`, top: `${top}%` }}
                exit={{ opacity: 0, scale: 0.4 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 26,
                  mass: 0.7,
                }}
                className="absolute flex h-[12.5%] w-[12.5%] items-center justify-center"
                style={{ left: `${left}%`, top: `${top}%` }}
              >
                <span
                  className={`text-[7.5vw] leading-none sm:text-[5vw] lg:text-[2.7rem] ${
                    p.color === "w"
                      ? "text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]"
                      : "text-slate-800 drop-shadow-[0_1px_1px_rgba(255,255,255,0.35)]"
                  }`}
                >
                  {GLYPH[p.color][p.type]}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <p className="mt-4 text-center text-xs uppercase tracking-[0.3em] text-slate-400">
        Morphy&apos;s Opera Game · 1858
      </p>
    </div>
  );
}
