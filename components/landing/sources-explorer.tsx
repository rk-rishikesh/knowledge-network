"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SOURCE_CATEGORIES } from "@/lib/content";

/** §15 — the five ingestion methods, each opening a concrete example. */
export function SourcesExplorer() {
  const [active, setActive] = useState(0);
  const current = SOURCE_CATEGORIES[active];

  return (
    <div className="grid gap-10 md:grid-cols-[320px_1fr] md:gap-16">
      <div className="flex flex-col">
        {SOURCE_CATEGORIES.map((c, i) => {
          const on = i === active;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(i)}
              className={`group flex items-baseline gap-4 border-b border-line py-5 text-left transition-colors ${
                on ? "text-ink" : "text-ink-faint hover:text-ink-soft"
              }`}
            >
              <span className="font-mono text-[11px]">{c.glyph}</span>
              <span className="font-display text-2xl leading-none sm:text-3xl">
                {c.label}
              </span>
              <span
                className={`ml-auto h-2 w-2 shrink-0 rounded-full transition-colors ${
                  on ? "bg-lime" : "bg-transparent"
                }`}
              />
            </button>
          );
        })}
      </div>

      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="rounded-3xl border border-line bg-paper p-8 sm:p-10"
          >
            <span className="font-mono text-[10px] tracking-[0.24em] text-ink-faint">
              {current.id}
            </span>
            <p className="mt-5 font-display text-2xl leading-[1.3] text-ink sm:text-3xl">
              {current.blurb}
            </p>

            <div className="mt-8 rounded-2xl border border-line bg-canvas p-6">
              <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint">
                EXAMPLE
              </span>
              <p className="mt-3 font-mono text-[13px] break-words text-ink">
                {current.example.namespace}
              </p>
              <p className="mt-4 text-[15px] leading-7 text-ink-soft">
                {current.example.detail}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
