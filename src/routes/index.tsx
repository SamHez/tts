import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import heroVideo from "@/assets/hero-gacuriro.mp4";
import heroPoster from "@/assets/hero-scaffolding.jpg";
import projStadium from "@/assets/project-stadium.jpg";
import projPlant from "@/assets/project-plant.jpg";
import projHydro from "@/assets/project-hydro.jpg";
import projConvention from "@/assets/project-convention.jpg";
import productCuplock from "@/assets/product-cuplock.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TTS — Trustable Technical Services | Scaffolding & Construction in Rwanda" },
      { name: "description", content: "Since 1988, TTS Ltd delivers premium scaffolding rental, construction equipment and maintenance services for Rwanda's most iconic projects." },
      { property: "og:title", content: "TTS — Trustable Technical Services" },
      { property: "og:description", content: "Scaffolding, equipment and maintenance services engineered for trust. Kigali, Rwanda — since 1988." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout transparentHeader>
      {/* HERO */}
      <section className="relative isolate h-screen min-h-[640px] w-full overflow-hidden">
        <video
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        {/* Subtle cinematic vignette — keeps header logo + tagline readable without washing the footage */}
        <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-ink/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-ink/75 via-ink/30 to-transparent" />

        <div className="relative flex h-full flex-col justify-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-20 md:pb-28 lg:px-10">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-background/70">
              <span className="h-px w-8 bg-primary-glow" /> Est. 1988 · Kigali
            </div>
            <h1 className="mt-5 max-w-2xl font-serif text-2xl leading-snug text-background text-balance md:text-3xl lg:text-4xl">
              Trustable Technical Services<br />
              <span className="italic text-primary-glow">for Rwanda's biggest builds.</span>
            </h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elev)] transition-all hover:bg-primary-glow hover:text-ink">
                Start a project
              </Link>
              <Link to="/projects" className="rounded-full border border-background/40 px-6 py-3 text-sm font-medium text-background backdrop-blur-md transition-all hover:bg-background/10">
                See our work →
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-background/60">
          Scroll
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-primary">What we do</div>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl text-ink md:text-5xl">
                Equipment, expertise and execution.
              </h2>
            </div>
            <Link to="/services" className="hidden text-sm font-medium text-primary hover:text-primary-deep md:inline">
              All services →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Scaffolding Rental",
                body: "Cuplock systems, ledgers, standards and accessories rented to spec for projects of any scale.",
              },
              {
                n: "02",
                title: "Machinery & Equipment",
                body: "Trusted construction equipment supply for stadiums, plants, hydro and commercial works.",
              },
              {
                n: "03",
                title: "Maintenance Services",
                body: "Specialist on-site maintenance keeping landmark facilities operating safely year after year.",
              },
            ].map((s) => (
              <article key={s.n} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elev)]">
                <div className="font-serif text-sm text-primary">{s.n}</div>
                <h3 className="mt-6 font-serif text-2xl text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <div className="mt-10 h-px w-full bg-border" />
                <div className="mt-4 text-xs uppercase tracking-[0.2em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Trustable →
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-[0.22em] text-primary">About TTS</div>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
            Three decades of <em className="text-primary">trustable</em> work.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80 lg:col-span-7">
          <p>
            Registered in February 1988, Trustable Technical Services (TTS) Ltd is a
            diversified investment company specialised in construction-related fields
            — scaffolding, machinery and equipment, and maintenance services.
          </p>
          <p>
            We direct our work into high-impact projects, creating employment for
            skilled youth while delivering uncompromising quality to our partners and
            attractive returns to our shareholders.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 pt-2 text-sm font-medium text-primary hover:text-primary-deep">
            Read our story <span aria-hidden>→</span>
          </Link>
        </div>
      </section>



      {/* FEATURED PRODUCT */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-28 lg:grid-cols-2 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-ink">
          <img src={productCuplock} alt="Cuplock scaffolding components" loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-xs uppercase tracking-[0.22em] text-primary">Featured System</div>
          <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
            Cuplock scaffolding & accessories.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/75">
            Our cuplock system is engineered for speed, safety and repeatable
            geometry — the same kit that wraps Rwanda's national stadiums and
            convention centres during renovation works.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-foreground/75">
            {["Hot-dip galvanized for corrosion resistance", "Compatible ledgers, standards & braces", "Trained crews available on request"].map((x) => (
              <li key={x} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" /> {x}
              </li>
            ))}
          </ul>
          <Link to="/services" className="mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-all hover:bg-ink hover:text-background">
            Explore equipment <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="border-t border-border bg-ink py-28 text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-primary-glow">Selected work</div>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl text-background md:text-5xl">
                Trusted on Rwanda's landmarks.
              </h2>
            </div>
            <Link to="/projects" className="text-sm font-medium text-primary-glow hover:text-background">
              View portfolio →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { img: projStadium, name: "Bugesera International Stadium", tag: "Ongoing · Scaffolding" },
              { img: projConvention, name: "Kigali Convention Centre", tag: "Renovation · Access scaffolding" },
              { img: projPlant, name: "Milk Powder Plant", tag: "Industrial · Equipment" },
              { img: projHydro, name: "Gaseke Hydropower Plant", tag: "Energy · Maintenance" },
            ].map((p) => (
              <article key={p.name} className="group relative overflow-hidden rounded-2xl">
                <img src={p.img} alt={p.name} loading="lazy" width={1200} height={900} className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-primary-glow">{p.tag}</div>
                  <h3 className="mt-2 font-serif text-xl text-background">{p.name}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-20">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <h2 className="font-serif text-4xl text-ink md:text-5xl text-balance">
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
        </div>
      </section>
    </SiteLayout>
  );
}
