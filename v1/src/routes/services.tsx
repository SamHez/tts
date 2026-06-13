import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import productCuplock from "@/assets/product-cuplock.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Scaffolding, Equipment & Maintenance | TTS" },
      { name: "description", content: "Cuplock scaffolding rental, construction equipment and maintenance services from Trustable Technical Services Ltd, Kigali." },
      { property: "og:title", content: "Services — Trustable Technical Services" },
      { property: "og:description", content: "Scaffolding, equipment and maintenance services for Rwanda's construction sector." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Scaffolding Rental",
    body: "Cuplock systems and accessories delivered, erected and inspected by trained crews. From single-storey access to full stadium-scale facades.",
    items: ["Cuplock standards & ledgers", "Transoms, braces & base jacks", "Access stairs & guardrails", "Site survey & engineering"],
  },
  {
    n: "02",
    title: "Machinery & Equipment",
    body: "Reliable construction equipment supply for industrial, commercial and infrastructure projects across Rwanda.",
    items: ["Formwork & shoring", "Lifting & material handling", "Power tools & generators", "Long-term rental options"],
  },
  {
    n: "03",
    title: "Maintenance Services",
    body: "Specialist on-site teams keeping landmark facilities and industrial plants operating safely year after year.",
    items: ["Scheduled inspections", "Industrial maintenance", "Facility upkeep", "Renovation support"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="text-xs uppercase tracking-[0.22em] text-primary">Services</div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-ink md:text-7xl text-balance">
            Equipment, expertise <em className="text-primary">and execution.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75">
            Three complementary capabilities, one trusted partner. We support your project from first survey through long-term operation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-6 py-24 lg:px-10">
        {services.map((s, i) => (
          <article key={s.n} className="grid gap-10 rounded-3xl border border-border bg-card p-8 md:grid-cols-12 md:p-12">
            <div className="md:col-span-3">
              <div className="font-serif text-sm text-primary">{s.n}</div>
              <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">{s.title}</h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-lg leading-relaxed text-foreground/75">{s.body}</p>
            </div>
            <ul className="space-y-3 md:col-span-4">
              {s.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {it}
                </li>
              ))}
            </ul>
            {i === 0 && (
              <div className="md:col-span-12">
                <img src={productCuplock} alt="Cuplock scaffolding components" loading="lazy" width={1200} height={900} className="mt-4 aspect-[21/9] w-full rounded-2xl object-cover" />
              </div>
            )}
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <div className="rounded-3xl bg-ink p-12 text-background md:p-20">
          <h2 className="max-w-2xl font-serif text-4xl md:text-5xl">Ready to scope your project?</h2>
          <p className="mt-4 max-w-xl text-background/70">
            Share your site details and timeline. We'll respond with the right equipment list, crew plan and a clear quote.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-glow hover:text-ink">
            Request a quote →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}