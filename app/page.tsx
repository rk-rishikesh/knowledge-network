import { Nav } from "@/components/landing/nav";
import { Hero, SourceStrip } from "@/components/landing/hero";
import { Alternatives, ComparisonTable } from "@/components/landing/why-ens";
import { SourcesExplorer } from "@/components/landing/sources-explorer";
import { ManyApps } from "@/components/landing/many-apps";
import { AhaMoment } from "@/components/landing/aha";
import { SourceEcosystem } from "@/components/landing/ecosystem";
import { NamespaceTree } from "@/components/landing/namespace-tree";
import { ForAgents } from "@/components/landing/for-agents";
import { Footer } from "@/components/landing/footer";
import { ButtonLink, Section } from "@/components/landing/ui";

export default function Home() {
  return (
    <div className="mx-auto max-w-[1600px] bg-canvas md:my-6 md:rounded-[32px] md:shadow-[0_1px_60px_rgba(0,0,0,0.06)] md:overflow-hidden">
      <Nav />
      <main>
        {/* 1 — Hero + the product loop */}
        <Hero />
        <SourceStrip />

        {/* 2 — Why ENS? */}
        <Section
          id="why-ens"
          tone="paper"
          eyebrow="WHY ENS"
          title="Knowledge needs more than storage."
          lead="It needs identity, ownership, hierarchy and permission. Here is what every alternative gets right — and what it leaves unanswered."
        >
          <Alternatives />
          <div className="mt-20">
            <ComparisonTable />
            <p className="mt-12 max-w-3xl font-display text-2xl leading-[1.3] text-ink sm:text-3xl">
              ENS turns knowledge from application data into an addressable,
              ownable and composable network resource.
            </p>
          </div>
        </Section>

        {/* 3 — Knowledge everywhere */}
        <Section
          id="sources"
          eyebrow="INGESTION"
          title="Where does knowledge come from?"
          lead="Five ways in. Every contribution keeps the source it came from, for the whole of its life."
        >
          <SourcesExplorer />
        </Section>

        {/* 4 — One layer, many apps */}
        <Section
          tone="paper"
          eyebrow="COMPOSABILITY"
          title="Build once. Consume everywhere."
        >
          <ManyApps />
        </Section>

        {/* 5 — The aha moment */}
        <Section
          eyebrow="THE AHA MOMENT"
          title="Your AI shouldn't start from zero."
          lead="Personal, shared and domain knowledge are separate namespaces with separate owners. An agent composes them at query time."
        >
          <AhaMoment />
        </Section>

        {/* 6 — Source ecosystem */}
        <Section
          tone="paper"
          eyebrow="ECOSYSTEM"
          title="Sources, not silos."
          lead="Wikipedia, Medium, live APIs, agents and applications — each mapped onto source-aware namespaces. One source may contribute to many."
        >
          <SourceEcosystem />
        </Section>

        {/* 7 — Knowledge explorer */}
        <Section
          id="explorer"
          eyebrow="EXPLORER"
          title="Hierarchy you can resolve."
          lead="Browse the namespace tree, resolve any node, and inspect its sources, version and provenance."
        >
          <NamespaceTree />
        </Section>

        {/* 8 — Agent integration */}
        <Section
          id="for-agents"
          tone="paper"
          eyebrow="FOR AGENTS"
          title="Give your agent access to the world's knowledge."
          lead="Retrieval returns context and provenance, not merely text. Your agent knows where an answer came from, who reviewed it and which version it read."
        >
          <ForAgents />
        </Section>

        {/* 9 — Developer CTA */}
        <section id="cta" className="bg-canvas px-6 pb-28 pt-8 sm:px-10">
          <div className="mx-auto max-w-6xl rounded-[28px] bg-lime px-8 py-20 text-center sm:px-16">
            <h2 className="mx-auto max-w-2xl font-display text-4xl leading-[1.05] tracking-[-0.015em] text-ink sm:text-5xl md:text-6xl">
              Build on the Knowledge Network.
            </h2>
            <p className="mx-auto mt-7 max-w-lg text-[17px] leading-8 text-ink/70">
              Connect your application&rsquo;s knowledge to an ENS namespace and let
              any AI agent consume it — with ownership and provenance intact.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <ButtonLink href="#for-agents">Read the docs</ButtonLink>
              <ButtonLink href="#explorer" variant="outline">
                Explore the network
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
