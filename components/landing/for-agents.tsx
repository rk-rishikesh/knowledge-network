/** §24 / §30 — retrieval returns context + provenance, not merely text. */
const PIPELINE = [
  "Agent",
  "MCP",
  "ENS namespace resolution",
  "Permissions",
  "Knowledge retrieval",
  "Provenance",
];

export function ForAgents() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
      <div>
        <ol className="relative">
          {PIPELINE.map((step, i) => (
            <li key={step} className="relative flex items-center gap-4 pb-7 last:pb-0">
              {i < PIPELINE.length - 1 && (
                <span className="absolute left-[15px] top-8 h-7 w-px bg-line" />
              )}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-canvas font-mono text-[11px] text-ink-faint">
                {i + 1}
              </span>
              <span className="text-[15px] text-ink">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="overflow-hidden rounded-3xl bg-ink">
        <div className="flex items-center gap-2 border-b border-canvas/10 px-6 py-4">
          <span className="h-2.5 w-2.5 rounded-full bg-canvas/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-canvas/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime/60" />
          <span className="ml-3 font-mono text-[11px] text-canvas/40">
            knowledge_search
          </span>
        </div>
        <pre className="overflow-x-auto px-6 py-6 font-mono text-[12.5px] leading-6 text-canvas/85">
{`knowledge_search(
  namespace="japan.travel.eth",
  query="vegetarian restaurants in Tokyo"
)

→ {
  `}<span className="text-lime">knowledge</span>{`:   [ … ],
  `}<span className="text-lime">sources</span>{`:     ["wikipedia.eth", "tokyo.food.eth"],
  `}<span className="text-lime">version</span>{`:     "v42",
  `}<span className="text-lime">namespace</span>{`:   "japan.travel.eth",
  `}<span className="text-lime">provenance</span>{`: {
    contributors: ["historian.eth"],
    reviewed_by:  3,
    cid:          "bafy…zdi"
  }
}`}
        </pre>
      </div>
    </div>
  );
}
