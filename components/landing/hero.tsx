"use client";

import { ProductLoop } from "./product-loop";
import { ButtonLink } from "./ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-canvas px-6 pt-20 pb-24 sm:px-10 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="kn-rise-once mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-[11px] tracking-[0.14em] text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            KNOWLEDGE INFRASTRUCTURE FOR AI
          </span>

          <h1 className="mt-8 font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.98] tracking-[-0.02em] text-ink">
            Knowledge from everywhere.
            <br />
            One network for AI.
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-[17px] leading-8 text-ink-soft sm:text-lg">
            Connect knowledge from humans, documents, APIs, agents and
            applications. Give it an ENS identity. Version it. Review it. Make it
            available to AI.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href="#explorer">Explore Knowledge</ButtonLink>
            <ButtonLink href="#cta" variant="outline">
              Create Namespace
            </ButtonLink>
          </div>
        </div>

        {/* the living loop */}
        <div className="kn-reveal mx-auto mt-20 max-w-3xl">
          <ProductLoop />
        </div>
      </div>
    </section>
  );
}

/** Source marquee standing in for the reference design's logo wall. */
export function SourceStrip() {
  const names = [
    "Wikipedia",
    "Medium",
    "News API",
    "Weather API",
    "Government Archive",
    "Research Agent",
    "Financial API",
  ];
  return (
    <div className="overflow-hidden border-y border-line bg-canvas py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6">
        <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint">
          SOURCES ON THE NETWORK
        </span>
        {names.map((n) => (
          <span key={n} className="font-display text-xl text-ink/45">
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}
