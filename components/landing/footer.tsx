import Link from "next/link";
import { Mark } from "./nav";

const GROUPS = [
  {
    title: "Protocol",
    links: ["Namespaces", "Sources", "Provenance", "Versioning"],
  },
  { title: "Developers", links: ["MCP server", "API reference", "Quickstart", "Examples"] },
  { title: "Network", links: ["Explorer", "Reviews", "Contributors", "Status"] },
];

export function Footer() {
  return (
    <footer className="bg-canvas px-6 pt-20 pb-10 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Mark className="h-7 w-7" />
              <span className="font-display text-3xl text-ink">Knowledge Network</span>
            </div>
            <p className="mt-5 max-w-xs text-[15px] leading-7 text-ink-soft">
              An ENS V2-native knowledge network. Identity, ownership and
              provenance for the knowledge AI depends on.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {GROUPS.map((g) => (
              <div key={g.title}>
                <p className="font-mono text-[10px] tracking-[0.18em] text-ink-faint">
                  {g.title.toUpperCase()}
                </p>
                <ul className="mt-5 space-y-3">
                  {g.links.map((l) => (
                    <li key={l}>
                      <Link
                        href="#"
                        className="text-[14px] text-ink-soft transition-colors hover:text-ink"
                      >
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-ink-faint">
            © 2026 Knowledge Network · Built on ENS V2 + IPFS
          </p>
          <p className="font-mono text-[11px] text-ink-faint">
            knowledge.eth
          </p>
        </div>
      </div>
    </footer>
  );
}
