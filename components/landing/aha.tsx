/** §17 — three namespaces compose into one personalized agent. */
const LAYERS = [
  {
    ns: "alice.eth",
    kind: "Personal knowledge",
    holds: "Vegetarian. Prefers walking routes. Travels light.",
  },
  {
    ns: "japan.travel.eth",
    kind: "Shared knowledge",
    holds: "Tokyo transit, districts, etiquette, seasonal timing.",
  },
  {
    ns: "tokyo.food.eth",
    kind: "Domain knowledge",
    holds: "Restaurants, cuisines, locations and reviews.",
  },
];

export function AhaMoment() {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3">
        {LAYERS.map((l, i) => (
          <div
            key={l.ns}
            className="kn-reveal rounded-3xl border border-line bg-canvas p-7"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint">
              {l.kind.toUpperCase()}
            </span>
            <p className="mt-4 font-mono text-[14px] break-all text-ink">{l.ns}</p>
            <p className="mt-4 text-[15px] leading-7 text-ink-soft">{l.holds}</p>
          </div>
        ))}
      </div>

      {/* convergence */}
      <div className="relative mx-auto mt-2 h-20 w-full max-w-3xl">
        <svg viewBox="0 0 600 80" className="h-full w-full" aria-hidden="true">
          {[100, 300, 500].map((x) => (
            <path
              key={x}
              d={`M ${x} 0 C ${x} 40, 300 30, 300 78`}
              className="stroke-line"
              strokeWidth={1.25}
              fill="none"
            />
          ))}
          <circle r={3} className="fill-lime">
            <animateMotion
              dur="2.6s"
              repeatCount="indefinite"
              path="M 100 0 C 100 40, 300 30, 300 78"
            />
          </circle>
          <circle r={3} className="fill-lime">
            <animateMotion
              dur="2.6s"
              begin="0.8s"
              repeatCount="indefinite"
              path="M 300 0 C 300 40, 300 30, 300 78"
            />
          </circle>
          <circle r={3} className="fill-lime">
            <animateMotion
              dur="2.6s"
              begin="1.6s"
              repeatCount="indefinite"
              path="M 500 0 C 500 40, 300 30, 300 78"
            />
          </circle>
        </svg>
      </div>

      <div className="kn-reveal mx-auto max-w-2xl rounded-3xl bg-ink p-8 text-canvas sm:p-10">
        <span className="font-mono text-[10px] tracking-[0.24em] text-canvas/50">
          PERSONALIZED TRAVEL AGENT
        </span>
        <p className="mt-5 font-display text-2xl leading-[1.25] sm:text-3xl">
          &ldquo;Plan a 3-day Tokyo trip for me.&rdquo;
        </p>
        <p className="mt-5 text-[15px] leading-7 text-canvas/70">
          A vegetarian-first itinerary built from the user&rsquo;s own context and
          shared knowledge — none of which the travel app owns.
        </p>
        <div className="mt-7 border-t border-canvas/15 pt-6">
          <span className="font-mono text-[10px] tracking-[0.2em] text-canvas/50">
            KNOWLEDGE USED
          </span>
          <ul className="mt-4 space-y-2.5">
            {LAYERS.map((l) => (
              <li
                key={l.ns}
                className="flex items-center gap-3 font-mono text-[13px] text-canvas/90"
              >
                <span className="text-lime">✓</span>
                {l.ns}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
