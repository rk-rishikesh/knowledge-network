"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ALTERNATIVES, COMPARISON } from "@/lib/content";

/** §10–13 — each alternative taken seriously, then answered. */
export function Alternatives() {
  const [i, setI] = useState(0);
  const alt = ALTERNATIVES[i];

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {ALTERNATIVES.map((a, idx) => (
          <button
            key={a.id}
            type="button"
            onClick={() => setI(idx)}
            className={`rounded-full border px-5 py-2.5 text-[14px] transition-colors ${
              idx === i
                ? "border-ink bg-ink text-canvas"
                : "border-line text-ink-soft hover:border-ink/40"
            }`}
          >
            {a.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={alt.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.26 }}
          className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3"
        >
          <div className="bg-canvas p-8">
            <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint">
              GOOD AT
            </span>
            <ul className="mt-5 space-y-3">
              {alt.goodAt.map((g) => (
                <li key={g} className="text-[15px] leading-6 text-ink">
                  {g}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-canvas p-8">
            <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint">
              DOESN&rsquo;T ANSWER
            </span>
            <ul className="mt-5 space-y-3">
              {alt.problems.map((p) => (
                <li key={p} className="text-[15px] leading-6 text-ink-soft">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-lime-soft p-8">
            <span className="font-mono text-[10px] tracking-[0.2em] text-ink/50">
              WITH ENS V2
            </span>
            <p className="mt-5 font-display text-2xl leading-[1.3] text-ink">
              {alt.answer}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/** §14 — the capability matrix. */
export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr className="border-b border-ink/15">
            <th className="py-4 pr-4 font-mono text-[10px] tracking-[0.18em] font-normal text-ink-faint">
              CAPABILITY
            </th>
            {COMPARISON.columns.map((c, i) => {
              const last = i === COMPARISON.columns.length - 1;
              return (
                <th
                  key={c}
                  className={`py-4 px-4 text-[14px] font-medium ${
                    last ? "text-ink" : "text-ink-faint"
                  }`}
                >
                  {c}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {COMPARISON.rows.map((r) => (
            <tr key={r.capability} className="border-b border-line">
              <td className="py-4 pr-4 text-[14px] text-ink">{r.capability}</td>
              {r.values.map((v, i) => {
                const last = i === r.values.length - 1;
                return (
                  <td
                    key={i}
                    className={`px-4 py-4 text-[14px] ${
                      last
                        ? "bg-lime-soft/50 font-medium text-ink"
                        : "text-ink-faint"
                    }`}
                  >
                    {v}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
