import { CONNECTED_SOURCES } from "@/lib/content";

/** §6 / IA step 6 — the connected source directory. */
export function SourceEcosystem() {
  return (
    <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {CONNECTED_SOURCES.map((s) => (
        <div key={s.name} className="bg-canvas p-7 transition-colors hover:bg-paper">
          <div className="flex items-start justify-between">
            <span className="font-display text-2xl text-ink">{s.name}</span>
            <span className="mt-1 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-ink-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              CONNECTED
            </span>
          </div>
          <p className="mt-2 font-mono text-[10px] tracking-[0.18em] text-ink-faint">
            {s.type}
          </p>
          <dl className="mt-7 flex gap-8">
            <div>
              <dt className="font-mono text-[10px] text-ink-faint">NAMESPACES</dt>
              <dd className="mt-1 text-[22px] text-ink">{s.namespaces}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] text-ink-faint">OBJECTS</dt>
              <dd className="mt-1 text-[22px] text-ink">{s.objects}</dd>
            </div>
          </dl>
        </div>
      ))}
    </div>
  );
}
