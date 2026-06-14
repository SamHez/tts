import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FadeIn } from "@/components/FadeIn";
import projStadium from "@/assets/project-stadium.jpg";
import projPlant from "@/assets/project-plant.jpg";
import projHydro from "@/assets/project-hydro.jpg";
import projConvention from "@/assets/project-convention.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — TTS Trustable Technical Services" },
      { name: "description", content: "Selected projects by TTS Ltd: Bugesera International Stadium, Kigali Convention Centre, BioNTech, Gaseke Hydropower and more." },
      { property: "og:title", content: "Projects — Trustable Technical Services" },
      { property: "og:description", content: "Trusted by Rwanda's most ambitious construction projects." },
    ],
  }),
  component: ProjectsPage,
});

const ongoing = [
  { name: "Bugesera International Stadium", tag: "Scaffolding · Equipment", img: projStadium },
  { name: "RICA (Phase I & II)", tag: "Scaffolding · Maintenance", img: projPlant },
];

const portfolio = [
  { name: "Kigali Convention Centre", tag: "Access scaffolding · Renovation", img: projConvention },
  { name: "Amahoro National Stadium", tag: "Scaffolding", img: projStadium },
  { name: "BioNTech Kigali", tag: "Industrial · Equipment", img: projPlant },
  { name: "Milk Powder Plant", tag: "Industrial · Equipment", img: projPlant },
  { name: "Gaseke Hydropower Plant", tag: "Energy · Maintenance", img: projHydro },
  { name: "Cimerwa Factory", tag: "Industrial · Equipment", img: projPlant },
  { name: "Golf Course", tag: "Hospitality", img: projConvention },
  { name: "Safari Centre Warehouses", tag: "Commercial", img: projConvention },
];

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/50">
        <FadeIn className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
          <div className="text-xs uppercase tracking-[0.22em] text-primary">Projects</div>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-ink md:text-7xl text-balance">
            Trusted on Rwanda's <em className="text-primary">landmarks.</em>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-foreground/75">
            A selection of the projects we've supplied, supported and maintained — spanning sport, science, hospitality, industry and energy.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">Ongoing contracts</h2>
          <span className="text-xs uppercase tracking-[0.22em] text-primary">Live</span>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {ongoing.map((p, index) => (
            <FadeIn key={p.name} delay={index * 150} className="h-full">
              <article className="h-full group relative overflow-hidden rounded-3xl border border-border">
                <img src={p.img} alt={p.name} loading="lazy" width={1200} height={900} className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-primary-glow">{p.tag}</div>
                  <h3 className="mt-2 font-serif text-2xl text-background md:text-3xl">{p.name}</h3>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-green py-24 text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-serif text-3xl md:text-4xl">Portfolio</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {portfolio.map((p, index) => (
              <FadeIn key={p.name} delay={index * 100}>
                <article className="group">
                  <div className="overflow-hidden rounded-2xl">
                    <img src={p.img} alt={p.name} loading="lazy" width={1200} height={900} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="mt-4">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-primary-glow">{p.tag}</div>
                    <h3 className="mt-1 font-serif text-lg text-background">{p.name}</h3>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
          <div className="mt-16 border-t border-background/15 pt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-primary-glow hover:text-background">
              Add your project to this list →
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}