
/**
 * The product loop (§9 / §34): Sources → Propose → Review → Commit → ENS V2 →
 * IPFS → Network → Agent/App/Human → Consume → Contribute ↺
 *
 * Rendered as a living network rather than an architecture diagram: packets
 * travel the spine continuously so the eye reads flow, not boxes.
 */

const SOURCES = ["Humans", "Documents", "APIs", "Agents", "Applications"];
const CONSUMERS = ["Agent", "App", "Human"];

/** y-coordinates of each stage on the 720-tall canvas. */
const Y = {
  sources: 74,
  propose: 186,
  review: 246,
  commit: 306,
  ens: 396,
  ipfs: 480,
  network: 542,
  consumers: 620,
};

const CX = 400;

function Stage({
  y,
  label,
  delay,
}: {
  y: number;
  label: string;
  delay: number;
}) {
  return (
    <g className="kn-fade" style={{ animationDelay: `${delay}s` }}>
      <rect
        x={CX - 82}
        y={y - 17}
        width={164}
        height={34}
        rx={17}
        className="fill-canvas stroke-line"
        strokeWidth={1}
      />
      <text
        x={CX}
        y={y + 4}
        textAnchor="middle"
        className="fill-ink font-mono text-[11px] tracking-[0.18em]"
      >
        {label}
      </text>
    </g>
  );
}

export function ProductLoop() {
  return (
    <div className="relative -mx-6 w-[calc(100%+3rem)] overflow-x-auto px-6 sm:mx-0 sm:w-full sm:overflow-visible sm:px-0">
      <svg
        viewBox="0 0 800 720"
        className="h-auto w-full min-w-[560px]"
        role="img"
        aria-label="The knowledge loop: sources propose knowledge, it is reviewed and committed, given an ENS V2 namespace and stored on IPFS, then consumed by agents, applications and humans who contribute back."
      >
        {/* ---- source row ---------------------------------------------- */}
        {SOURCES.map((s, i) => {
          const x = 80 + i * 160;
          return (
            <g key={s} className="kn-fade" style={{ animationDelay: `${i * 0.07}s` }}>
              <rect
                x={x - 62}
                y={Y.sources - 18}
                width={124}
                height={36}
                rx={18}
                className="fill-paper stroke-line"
                strokeWidth={1}
              />
              <text
                x={x}
                y={Y.sources + 5}
                textAnchor="middle"
                className="fill-ink-soft font-mono text-[11px]"
              >
                {s}
              </text>
              {/* feeder line into the spine */}
              <path
                d={`M ${x} ${Y.sources + 18} C ${x} ${Y.sources + 62}, ${CX} ${
                  Y.propose - 70
                }, ${CX} ${Y.propose - 19}`}
                className="stroke-line"
                strokeWidth={1}
                fill="none"
              />
              {(
                <circle r={3} className="fill-lime">
                  <animateMotion
                    dur={`${3.6 + i * 0.45}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.5}s`}
                    path={`M ${x} ${Y.sources + 18} C ${x} ${Y.sources + 62}, ${CX} ${
                      Y.propose - 70
                    }, ${CX} ${Y.propose - 19}`}
                  />
                </circle>
              )}
            </g>
          );
        })}

        <text
          x={CX}
          y={26}
          textAnchor="middle"
          className="fill-ink-faint font-mono text-[10px] tracking-[0.3em]"
        >
          DATA SOURCES
        </text>

        {/* ---- spine ---------------------------------------------------- */}
        <path
          d={`M ${CX} ${Y.propose + 17} L ${CX} ${Y.review - 17}
              M ${CX} ${Y.review + 17} L ${CX} ${Y.commit - 17}
              M ${CX} ${Y.commit + 17} L ${CX} ${Y.ens - 34}
              M ${CX} ${Y.ens + 34} L ${CX} ${Y.ipfs - 17}
              M ${CX} ${Y.ipfs + 17} L ${CX} ${Y.network - 14}`}
          className="stroke-line"
          strokeWidth={1.5}
          fill="none"
        />

        <Stage y={Y.propose} label="PROPOSE" delay={0.1} />
        <Stage y={Y.review} label="REVIEW" delay={0.18} />
        <Stage y={Y.commit} label="COMMIT" delay={0.26} />

        {/* travelling packet down the review spine */}
        {(
          <circle r={3.5} className="fill-ink">
            <animateMotion
              dur="4.2s"
              repeatCount="indefinite"
              path={`M ${CX} ${Y.propose} L ${CX} ${Y.ipfs}`}
            />
          </circle>
        )}

        {/* ---- ENS V2 block --------------------------------------------- */}
        <g className="kn-fade" style={{ animationDelay: "0.34s" }}>
          <rect
            x={CX - 118}
            y={Y.ens - 34}
            width={236}
            height={68}
            rx={20}
            className="fill-lime"
          />
          <text
            x={CX}
            y={Y.ens - 8}
            textAnchor="middle"
            className="fill-ink font-mono text-[12px] font-semibold tracking-[0.2em]"
          >
            ENS V2
          </text>
          <text
            x={CX}
            y={Y.ens + 12}
            textAnchor="middle"
            className="fill-ink/70 font-mono text-[9.5px] tracking-[0.08em]"
          >
            identity · namespace · ownership
          </text>
        </g>

        <Stage y={Y.ipfs} label="IPFS" delay={0.42} />

        {/* ---- network bar ---------------------------------------------- */}
        <g className="kn-fade" style={{ animationDelay: "0.5s" }}>
          <text
            x={CX}
            y={Y.network + 4}
            textAnchor="middle"
            className="fill-ink font-mono text-[11px] tracking-[0.26em]"
          >
            KNOWLEDGE NETWORK
          </text>
          <line
            x1={150}
            x2={650}
            y1={Y.network + 20}
            y2={Y.network + 20}
            className="stroke-line"
            strokeWidth={1}
          />
        </g>

        {/* ---- consumers ------------------------------------------------- */}
        {CONSUMERS.map((c, i) => {
          const x = 240 + i * 160;
          return (
            <g
              key={c}
              className="kn-fade"
              style={{ animationDelay: `${0.58 + i * 0.08}s` }}
            >
              <path
                d={`M ${CX} ${Y.network + 20} C ${CX} ${Y.network + 50}, ${x} ${
                  Y.consumers - 46
                }, ${x} ${Y.consumers - 18}`}
                className="stroke-line"
                strokeWidth={1}
                fill="none"
              />
              {(
                <circle r={3} className="fill-ink/40">
                  <animateMotion
                    dur={`${2.8 + i * 0.4}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.35}s`}
                    path={`M ${CX} ${Y.network + 20} C ${CX} ${Y.network + 50}, ${x} ${
                      Y.consumers - 46
                    }, ${x} ${Y.consumers - 18}`}
                  />
                </circle>
              )}
              <rect
                x={x - 54}
                y={Y.consumers - 18}
                width={108}
                height={36}
                rx={18}
                className="fill-canvas stroke-ink"
                strokeWidth={1.25}
              />
              <text
                x={x}
                y={Y.consumers + 5}
                textAnchor="middle"
                className="fill-ink font-mono text-[11px]"
              >
                {c}
              </text>
            </g>
          );
        })}

        {/* ---- contribute return loop ------------------------------------ */}
        <g className="kn-fade" style={{ animationDelay: "0.8s" }}>
          <path
            d={`M ${240 - 54} ${Y.consumers} C 60 ${Y.consumers}, 24 ${Y.sources},
                ${80 - 62} ${Y.sources}`}
            className="stroke-lime"
            strokeWidth={1.5}
            strokeDasharray="5 6"
            fill="none"
          />
          <text
            x={46}
            y={Y.ens}
            textAnchor="middle"
            className="fill-ink-faint font-mono text-[10px] tracking-[0.22em]"
            transform={`rotate(-90 46 ${Y.ens})`}
          >
            CONTRIBUTE ↺
          </text>
        </g>
      </svg>
    </div>
  );
}
