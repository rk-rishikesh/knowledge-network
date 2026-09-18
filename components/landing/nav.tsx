"use client";

import Link from "next/link";
import { useState } from "react";

const LINKS = [
  { href: "#why-ens", label: "Why ENS" },
  { href: "#sources", label: "Sources" },
  { href: "#explorer", label: "Explorer" },
  { href: "#for-agents", label: "For Agents" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <Mark />
          <span className="font-mono text-[13px] tracking-[0.02em] text-ink">
            knowledge.eth
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#for-agents"
            className="hidden text-[14px] text-ink-soft transition-colors hover:text-ink sm:block"
          >
            Docs
          </a>
          <a
            href="#cta"
            className="rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium text-canvas transition-colors hover:bg-ink/85"
          >
            Get Started
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={open}
            className="md:hidden"
          >
            <span className="block h-px w-6 bg-ink" />
            <span className="mt-1.5 block h-px w-6 bg-ink" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line px-6 py-4 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-[15px] text-ink-soft"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

/** Radial burst mark, echoing the reference logo. */
export function Mark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => (
        <rect
          key={i}
          x={11.2}
          y={1}
          width={1.6}
          height={6}
          rx={0.8}
          className="fill-ink"
          transform={`rotate(${i * 30} 12 12)`}
        />
      ))}
      <circle cx={12} cy={12} r={3.4} className="fill-ink" />
    </svg>
  );
}
