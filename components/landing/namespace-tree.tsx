"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { NAMESPACE_TREE, type NamespaceNode } from "@/lib/content";

/** §18 — hierarchy made legible. Selecting a node resolves it on the right. */
function Row({
  node,
  depth,
  selected,
  onSelect,
}: {
  node: NamespaceNode;
  depth: number;
  selected: string;
  onSelect: (n: NamespaceNode) => void;
}) {
  const on = selected === node.name;
  return (
    <>
      <button
        type="button"
        onClick={() => onSelect(node)}
        style={{ paddingLeft: `${depth * 22 + 14}px` }}
        className={`flex w-full items-center gap-3 rounded-lg py-2.5 pr-3 text-left font-mono text-[12.5px] transition-colors sm:text-[13px] ${
          on ? "bg-lime text-ink" : "text-ink-soft hover:bg-paper"
        }`}
      >
        {depth > 0 && <span className="text-ink-faint">└─</span>}
        <span className="truncate">{node.name}</span>
        {node.objects && (
          <span className="ml-auto shrink-0 text-[11px] text-ink-faint">
            {node.objects}
          </span>
        )}
      </button>
      {node.children?.map((c) => (
        <Row
          key={c.name}
          node={c}
          depth={depth + 1}
          selected={selected}
          onSelect={onSelect}
        />
      ))}
    </>
  );
}

export function NamespaceTree() {
  const [node, setNode] = useState<NamespaceNode>(
    NAMESPACE_TREE.children![3].children![0],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
      <div className="rounded-3xl border border-line bg-canvas p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between px-2">
          <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint">
            NAMESPACE EXPLORER
          </span>
          <span className="font-mono text-[10px] text-ink-faint">OBJECTS</span>
        </div>
        <Row node={NAMESPACE_TREE} depth={0} selected={node.name} onSelect={setNode} />
      </div>

      {/* resolved record */}
      <motion.div
        key={node.name}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-3xl border border-line bg-paper p-7 sm:p-9"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint">
          RESOLVED
        </span>
        <p className="mt-4 font-mono text-[15px] break-all text-ink sm:text-[17px]">
          {node.name}
        </p>

        <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6">
          <Field label="Source" value={node.source ?? "Multiple"} />
          <Field label="Knowledge objects" value={node.objects ?? "—"} />
          <Field label="Version" value="v42" />
          <Field label="Status" value="Verified" accent />
          <Field label="Contributors" value="23" />
          <Field label="Storage" value="IPFS" />
        </dl>

        <div className="mt-8 rounded-2xl border border-line bg-canvas p-5">
          <span className="font-mono text-[10px] tracking-[0.2em] text-ink-faint">
            CID
          </span>
          <p className="mt-2 font-mono text-[12px] break-all text-ink-soft">
            bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi
          </p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2.5">
          {["View history", "View sources", "View diff"].map((a) => (
            <span
              key={a}
              className="rounded-full border border-ink/15 px-4 py-2 font-mono text-[11px] text-ink-soft"
            >
              {a}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function Field({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <dt className="font-mono text-[10px] tracking-[0.16em] text-ink-faint">
        {label.toUpperCase()}
      </dt>
      <dd className="mt-1.5 flex items-center gap-2 text-[15px] text-ink">
        {accent && <span className="h-1.5 w-1.5 rounded-full bg-lime" />}
        {value}
      </dd>
    </div>
  );
}
