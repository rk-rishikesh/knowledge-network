/** Source types from the product model. Every contribution knows its origin. */
export type SourceType =
  | "HUMAN"
  | "DOCUMENT"
  | "API"
  | "AGENT"
  | "APPLICATION";

export type SourceCategory = {
  id: SourceType;
  glyph: string;
  label: string;
  blurb: string;
  example: { namespace: string; detail: string };
};

export const SOURCE_CATEGORIES: SourceCategory[] = [
  {
    id: "HUMAN",
    glyph: "01",
    label: "Humans",
    blurb: "Researchers, experts and communities contribute knowledge.",
    example: {
      namespace: "historian.eth → india.history.eth",
      detail:
        "A domain expert proposes a correction to the independence timeline. It enters review before it is ever committed.",
    },
  },
  {
    id: "DOCUMENT",
    glyph: "02",
    label: "Documents",
    blurb: "PDFs, websites, datasets and documentation become structured knowledge.",
    example: {
      namespace: "research.india.history.eth",
      detail:
        "A 40-page research paper is parsed into discrete, addressable claims — each one retaining a citation back to its page and paragraph.",
    },
  },
  {
    id: "API",
    glyph: "03",
    label: "APIs",
    blurb: "Live information from weather, finance, sports, news and government systems.",
    example: {
      namespace: "weather.india.eth",
      detail:
        "A weather API writes continuously. Consumers resolve the namespace and always receive the current version plus its provenance.",
    },
  },
  {
    id: "AGENT",
    glyph: "04",
    label: "Agents",
    blurb: "AI agents discover, synthesize and propose new knowledge.",
    example: {
      namespace: "research-agent.eth → research.ai.eth",
      detail:
        "An agent synthesizes 200 papers into a summary and submits it as a proposal. Human reviewers approve before commit.",
    },
  },
  {
    id: "APPLICATION",
    glyph: "05",
    label: "Applications",
    blurb:
      "Existing products integrate the protocol and expose their knowledge to the network.",
    example: {
      namespace: "wikipedia.history.eth",
      detail:
        "Wikipedia maps its topic tree onto source-aware namespaces. 18,392 knowledge objects become resolvable by any agent.",
    },
  },
];

/** Connected source directory. Demo integrations for now; the shape is real. */
export const CONNECTED_SOURCES = [
  { name: "Wikipedia", type: "APPLICATION", namespaces: 24, objects: "18,392" },
  { name: "Medium", type: "APPLICATION", namespaces: 8, objects: "4,293" },
  { name: "Weather API", type: "API", namespaces: 12, objects: "2,104" },
  { name: "News API", type: "API", namespaces: 9, objects: "7,860" },
  { name: "Government Archive", type: "DOCUMENT", namespaces: 5, objects: "1,442" },
  { name: "Research Agent", type: "AGENT", namespaces: 6, objects: "938" },
] as const;

/** §14 — why ENS wins. `strong` marks the column we want to read as native. */
export const COMPARISON = {
  columns: ["Database", "Vector DB", "Knowledge Graph", "ENS V2"],
  rows: [
    {
      capability: "Identity",
      values: ["Application-defined", "Application-defined", "Usually centralized", "Native"],
    },
    {
      capability: "Hierarchical namespaces",
      values: ["Custom", "Custom", "Custom", "Native"],
    },
    { capability: "Ownership", values: ["App controlled", "App controlled", "Centralized", "Native"] },
    { capability: "Permissions", values: ["App controlled", "App controlled", "Custom", "Native"] },
    {
      capability: "Resolution",
      values: ["Application-specific", "Application-specific", "Application-specific", "Universal"],
    },
    { capability: "Subnamespaces", values: ["Custom", "Custom", "Custom", "Native"] },
    {
      capability: "Cross-application",
      values: ["Limited", "Limited", "Limited", "Designed for it"],
    },
    { capability: "Immutable storage", values: ["No", "No", "No", "Via IPFS"] },
    { capability: "Versioning", values: ["Custom", "Custom", "Custom", "Protocol layer"] },
    { capability: "Agent consumption", values: ["API", "API", "API", "MCP / API layer"] },
  ],
};

/** §10–13 — the alternatives, each answered rather than dismissed. */
export const ALTERNATIVES = [
  {
    id: "database",
    label: "Traditional database",
    goodAt: ["Storage", "Queries", "Application-specific data"],
    problems: [
      "Tied to a single application",
      "Centralized ownership",
      "Weak portable identity",
      "Hierarchy is application-defined",
      "Access controlled by the application",
    ],
    answer:
      "Knowledge gets an independent namespace and identity that outlives any one application.",
  },
  {
    id: "vector-db",
    label: "Vector database",
    goodAt: ["Semantic search", "Retrieval", "Embeddings"],
    problems: [
      "Who owns this knowledge?",
      "Who contributed it?",
      "Which version is authoritative?",
      "Who can modify it?",
      "Where did it originate?",
    ],
    answer:
      "We don't replace vector databases. We give the knowledge they retrieve an identity and ownership layer.",
  },
  {
    id: "silos",
    label: "Wikipedia, websites, documents",
    goodAt: ["Depth", "Editorial rigour", "Human readability"],
    problems: [
      "Each source is its own silo",
      "No shared addressing between sources",
      "Agents scrape rather than resolve",
      "Provenance is lost on ingest",
    ],
    answer:
      "A common layer through which existing sources become discoverable and consumable by AI.",
  },
  {
    id: "knowledge-graph",
    label: "Centralized knowledge graph",
    goodAt: ["Relationships", "Structure", "Inference"],
    problems: [
      "Still needs identity",
      "Still needs ownership",
      "Still needs permissions",
      "Still needs provenance",
      "Still needs portability",
    ],
    answer:
      "ENS acts as the identity and namespace layer around the graph, not a replacement for it.",
  },
];

/** §18 — namespace explorer tree. */
export type NamespaceNode = {
  name: string;
  source?: string;
  objects?: string;
  children?: NamespaceNode[];
};

export const NAMESPACE_TREE: NamespaceNode = {
  name: "history.eth",
  objects: "31,204",
  children: [
    { name: "wikipedia.history.eth", source: "Wikipedia", objects: "18,392" },
    { name: "medium.history.eth", source: "Medium", objects: "1,204" },
    { name: "research.history.eth", source: "Research Agent", objects: "938" },
    {
      name: "india.history.eth",
      objects: "6,821",
      children: [
        { name: "wikipedia.india.history.eth", source: "Wikipedia", objects: "4,410" },
        { name: "research.india.history.eth", source: "Research Paper", objects: "2,411" },
      ],
    },
    { name: "europe.history.eth", objects: "3,849" },
  ],
};
