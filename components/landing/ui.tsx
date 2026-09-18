import Link from "next/link";
import type { ReactNode } from "react";

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] tracking-[0.12em] text-ink-soft">
      {children}
    </span>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-medium transition-colors";
  const styles =
    variant === "solid"
      ? "bg-ink text-canvas hover:bg-ink/85"
      : "border border-ink/20 text-ink hover:border-ink/50";
  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

/** Section wrapper: consistent rhythm and an optional eyebrow pill. */
export function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  tone = "canvas",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  tone?: "canvas" | "paper";
}) {
  return (
    <section
      id={id}
      className={`${
        tone === "paper" ? "bg-paper" : "bg-canvas"
      } px-6 py-24 sm:px-10 md:py-32`}
    >
      <div className="mx-auto max-w-6xl">
        {(eyebrow || title) && (
          <div className="mb-14 md:mb-20">
            {eyebrow && <Pill>{eyebrow}</Pill>}
            {title && (
              <h2 className="mt-7 max-w-3xl font-display text-4xl leading-[1.08] tracking-[-0.015em] text-ink sm:text-5xl md:text-6xl">
                {title}
              </h2>
            )}
            {lead && (
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
                {lead}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/** Monospace ENS name — used everywhere a namespace appears. */
export function Ens({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[0.92em] text-ink">{children}</span>
  );
}
