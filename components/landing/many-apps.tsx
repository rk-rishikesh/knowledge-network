/** §16 — one knowledge layer, many apps. */
const APPS = ["AI Tutor", "Research AI", "Travel AI"];

export function ManyApps() {
  return (
    <div className="rounded-3xl border border-line bg-canvas px-6 py-12 sm:px-12">
      <svg viewBox="0 0 700 300" className="mx-auto w-full max-w-3xl" aria-hidden="true">
        <rect x={280} y={16} width={140} height={40} rx={20} className="fill-lime" />
        <text
          x={350}
          y={41}
          textAnchor="middle"
          className="fill-ink font-mono text-[12px]"
        >
          knowledge.eth
        </text>

        {APPS.map((a, i) => {
          const x = 120 + i * 230;
          return (
            <g key={a}>
              <path
                d={`M 350 56 C 350 100, ${x} 90, ${x} 128`}
                className="stroke-line"
                strokeWidth={1.25}
                fill="none"
              />
              <circle r={3} className="fill-lime">
                <animateMotion
                  dur="2.4s"
                  begin={`${i * 0.6}s`}
                  repeatCount="indefinite"
                  path={`M 350 56 C 350 100, ${x} 90, ${x} 128`}
                />
              </circle>
              <rect
                x={x - 70}
                y={128}
                width={140}
                height={44}
                rx={22}
                className="fill-canvas stroke-ink"
                strokeWidth={1.25}
              />
              <text
                x={x}
                y={155}
                textAnchor="middle"
                className="fill-ink font-mono text-[12px]"
              >
                {a}
              </text>
              <path
                d={`M ${x} 172 C ${x} 214, 350 208, 350 248`}
                className="stroke-line"
                strokeWidth={1.25}
                strokeDasharray="4 5"
                fill="none"
              />
            </g>
          );
        })}

        <text
          x={350}
          y={272}
          textAnchor="middle"
          className="fill-ink-faint font-mono text-[11px] tracking-[0.22em]"
        >
          SAME KNOWLEDGE
        </text>
      </svg>

      <p className="mx-auto mt-10 max-w-xl text-center text-[16px] leading-7 text-ink-soft">
        Knowledge should not have to be rebuilt every time a new AI application is
        created.
      </p>
    </div>
  );
}
