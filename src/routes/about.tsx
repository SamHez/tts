import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TTS Trustable Technical Services" },
      { name: "description", content: "Founded in 1988, TTS Ltd is a diversified Rwandan investment company specialised in construction, scaffolding, equipment and maintenance services." },
      { property: "og:title", content: "About — Trustable Technical Services" },
      { property: "og:description", content: "Thirty-six years of trustable construction work in Rwanda." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="text-xs uppercase tracking-[0.22em] text-primary">About</div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-ink md:text-7xl text-balance">
            Trustable since <em className="text-primary">1988.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75">
            TTS Ltd is a diversified investment company that applies decades of
            experience to scaffolding, construction equipment and maintenance
            services across Rwanda.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-3 lg:px-10">
        {[
          { t: "Our Mission", b: "Direct our investments into high-impact areas — generating profit, creating employment for skilled youth, and producing attractive returns for our shareholders." },
          { t: "Our Values", b: "We are driven by passion and ideas, and dedicated to working together with uncompromising ethics and integrity." },
          { t: "Our Strategy", b: "We build long-term cross-border partnerships with strategic investors, regional investment funds and key stakeholders to enable sustained growth." },
        ].map((x) => (
          <div key={x.t} className="border-t border-border pt-8">
            <div className="text-xs uppercase tracking-[0.22em] text-primary">{x.t}</div>
            <p className="mt-5 text-lg leading-relaxed text-foreground/80">{x.b}</p>
          </div>
        ))}
      </section>

      <section className="border-t border-border bg-ink py-28 text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="max-w-3xl font-serif text-4xl text-background md:text-5xl">
            A company built on relationships, not transactions.
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-background/70">
              From access scaffolding for the Kigali Convention Centre to equipment on the Bugesera International Stadium, our work shows up wherever Rwanda is building its future.
            </p>
            <p className="text-lg leading-relaxed text-background/70">
              We are proud to have partnered with leading contractors on projects spanning sport, science, industry, energy and hospitality.
            </p>
          </div>
          <Link to="/projects" className="mt-12 inline-flex items-center gap-2 rounded-full border border-background/30 px-7 py-3.5 text-sm font-medium text-background transition-all hover:bg-background hover:text-ink">
            See selected projects →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}