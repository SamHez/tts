import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FadeIn } from "@/components/FadeIn";
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
          <section className="border-b border-border bg-secondary/50 bg-page-header">
            <FadeIn className="mx-auto max-w-7xl px-6 py-28 lg:px-10 text-center">
              <div className="mt-20">
                <span className="inline-block bg-primary rounded-full px-3 py-1 text-xs uppercase tracking-[0.22em] text-white">Services</span>
              </div>
              <h1 className="mt-6 mx-auto max-w-4xl font-serif text-5xl leading-[1.05] text-white md:text-5xl text-balance font-extrabold">
                Equipment, expertise <em className="text-white">and execution.</em>
              </h1>
              <p className="mt-8 mx-auto max-w-2xl text-lg text-white">
                Three complementary capabilities, one trusted partner. We support your project from first survey through long-term operation.
              </p>
            </FadeIn>
          </section>

      <section className="mx-auto max-w-7xl space-y-6 px-6 py-24 lg:px-10">
        {services.map((s, i) => (
          <FadeIn key={s.n} delay={i * 150} className="h-full">
            <article className="grid gap-10 rounded-3xl border border-border bg-card p-8 md:grid-cols-12 md:p-12">
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
                <div className="md:col-span-12 hidden">
                  <img src={productCuplock} alt="Cuplock scaffolding components" loading="lazy" width={1200} height={900} className="mt-4 aspect-[21/9] w-full rounded-2xl object-cover" />
                </div>
              )}
            </article>
          </FadeIn>
        ))}
      </section>

      {/* CTA */}
            <section className="mx-auto max-w-7xl px-6 py-15 lg:px-10">
              <FadeIn className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-20">
                <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
                  <h2 className="font-serif text-4xl text-ink md:text-5xl text-balance font-extrabold">
                    Have a project that needs <em className="text-primary">trustable</em> hands?
                  </h2>
                  <div className="lg:text-right">
                    <p className="max-w-md text-foreground/70 lg:ml-auto">
                      Tell us your scope, timeline and site. We'll respond with the right
                      equipment, crew and a clear plan.
                    </p>
                    <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-background transition-all hover:bg-primary">
                      Get in touch <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </section>
            
    </SiteLayout>
  );
}