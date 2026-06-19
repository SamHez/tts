import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { FadeIn } from "@/components/FadeIn";
import { pageSeo } from "@/lib/seo";
import projStadium from "@/assets/project-stadium.jpg";
import projPlant from "@/assets/project-plant.jpg";
import projRica from "@/assets/projects/rica.jpeg";
import projHydro from "@/assets/project-hydro.jpg";
import projConvention from "@/assets/project-convention.jpg";

import bugeseraAirport from "@/assets/projects/Bugesera airport.jpg";
import kccImg from "@/assets/projects/Kigali Convention Centre.jpg";
import amahoroImg from "@/assets/projects/Amahoro national stadium.jpg";
import bioNTechImg from "@/assets/projects/BioNTech Kigali.jpeg";
import milkPowderImg from "@/assets/projects/inyange Milk powder.jpeg";
import gasekeImg from "@/assets/projects/Gaseke Hydropower Plant.jpeg";
import cimerwaImg from "@/assets/projects/Cimerwa factory.jpeg";
import golfImg from "@/assets/projects/kigali Golf course.jpeg";
import safariImg from "@/assets/projects/Safari Centre warehouse.jpeg";

export const Route = createFileRoute("/projects")({
  head: () =>
    pageSeo({
      title: "Projects | Scaffolding & Equipment Work by TTS Rwanda",
      description:
        "Explore selected Trustable Technical Services projects in Rwanda, including Bugesera International Airport, Kigali Convention Centre, BioNTech Kigali, Gaseke Hydropower and more.",
      path: "/projects",
      keywords:
        "TTS projects Rwanda, Bugesera Airport scaffolding, Kigali Convention Centre scaffolding, Rwanda construction portfolio",
    }),
  component: ProjectsPage,
});

const ongoing = [
  { name: "Bugesera International Airport", tag: "Scaffolding · Equipment", img: bugeseraAirport },
  { name: "RICA (Phase I & II)", tag: "Scaffolding · Maintenance", img: projRica },
];

const portfolio = [
  { name: "Bugesera Airport", tag: "Infrastructure · Aviation", img: bugeseraAirport },
  { name: "Kigali Convention Centre", tag: "Access scaffolding · Renovation", img: kccImg },
  { name: "Amahoro National Stadium", tag: "Scaffolding", img: amahoroImg },
  { name: "BioNTech Kigali", tag: "Industrial · Equipment", img: bioNTechImg },
  { name: "Milk Powder Plant", tag: "Industrial · Equipment", img: milkPowderImg },
  { name: "Gaseke Hydropower Plant", tag: "Energy · Maintenance", img: gasekeImg },
  { name: "Cimerwa Factory", tag: "Industrial · Equipment", img: cimerwaImg },
  { name: "Golf Course", tag: "Hospitality", img: golfImg },
  { name: "Safari Centre Warehouses", tag: "Commercial", img: safariImg },
  { name: "RICA (Phase I & II)", tag: "Scaffolding · Maintenance", img: projRica },
];

function ProjectsPage() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/50 bg-page-header">
        <FadeIn className="mx-auto max-w-7xl px-6 py-28 lg:px-10 text-center">
          <div className="mt-20">
            <span className="inline-block bg-primary rounded-full px-3 py-1 text-xs uppercase tracking-[0.22em] text-white">
              Projects
            </span>
          </div>
          <h1 className="mt-6 mx-auto max-w-4xl font-serif text-5xl leading-[1.05] text-white md:text-5xl text-balance font-extrabold">
            Trusted on Rwanda's <em className="text-white ">landmarks.</em>
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-lg text-white">
            A selection of the projects we've supplied, supported and maintained — spanning sport,
            science, hospitality, industry and energy.
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
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-primary-glow">
                    {p.tag}
                  </div>
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
                <article className="group cursor-pointer" onClick={() => setLightbox(p.img)}>
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={p.img}
                      alt={p.name}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-primary-glow">
                      {p.tag}
                    </div>
                    <h3 className="mt-1 font-serif text-lg text-background">{p.name}</h3>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
          <div className="mt-16 border-t border-background/15 pt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-glow hover:text-background"
            >
              Add your project to this list →
            </Link>
          </div>
        </div>
      </section>
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-h-[90vh] max-w-[90vw]">
            <button
              className="absolute -top-6 -right-6 rounded-full bg-black/60 p-2 text-white"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <img
              src={lightbox}
              alt="selected project"
              className="max-h-[90vh] w-auto rounded-2xl object-contain shadow-xl"
            />
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
