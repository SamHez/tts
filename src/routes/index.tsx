import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { FadeIn } from "@/components/FadeIn";
import heroVideo from "@/assets/hero-gacuriro.mp4";
import heroPoster from "@/assets/hero-scaffolding.jpg";
import projStadium from "@/assets/projects/Bugesera airport.jpg";
import projPlant from "@/assets/project-plant.jpg";
import projHydro from "@/assets/project-hydro.jpg";
import projConvention from "@/assets/project-convention.jpg";
import productCuplock from "@/assets/product-cuplock.png";
import bioNTechLogo from "@/assets/projects/BioNTech-Kigali-logo.jpg";
import cimerwaLogo from "@/assets/projects/Cimerwa-factory-logo.jpg";
import kccLogo from "@/assets/projects/Kigali-Convention-Centre-logo.jpg";
import inyangeLogo from "@/assets/projects/inyange-Milk-powder-logo.jpg";
import golfLogo from "@/assets/projects/kigali-Golf-course-logo.jpg";

import bugeseraAirport from "@/assets/projects/Bugesera airport.jpg";
import kccImg from "@/assets/projects/Kigali Convention Centre.jpg";
import milkPowderImg from "@/assets/projects/inyange Milk powder.jpeg";
import gasekeImg from "@/assets/projects/Gaseke Hydropower Plant.jpeg";

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


function Counter({ end, suffix = "" }: { end: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const duration = 2000;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <div ref={ref} className="text-4xl font-serif text-white">{count.toLocaleString()}{suffix}</div>;
}

function TextRotator() {
  const words = ["Biggest Builds.", "Flagship Projects."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-grid">
      {words.map((word, i) => (
        <span
          key={word}
          className={`col-start-1 row-start-1 transition-all duration-1000 ${i === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          aria-hidden={i !== index}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

function Index() {
  return (
    <SiteLayout transparentHeader>
      {/* HERO */}
      <section className="relative isolate h-screen min-h-[780px] w-full overflow-hidden">
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
        {/* Subtle cinematic vignette — keeps header logo + tagline readable without washing the footage  bg-gradient-to-t from-[#275b32] via-[#275b32]/60 to-transparent*/}
        <div className="absolute inset-x-0 top-0 -z-10 h-48 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2" />

        <div className="relative flex h-full flex-col justify-end items-center pb-32 md:pb-28">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-background/70">
              <span className="h-px w-8 bg-primary-glow" /> Est. 1988 · Kigali <span className="h-px w-8 bg-primary-glow" />
            </div>
            <h1 className=" mt-5 max-w-3xl font-serif text-3xl leading-snug text-background text-balance md:text-4xl lg:text-5xl">
              <span className="text-h1-hero">Trustable Technical Services</span><br />
              <span className="italic text-primary-glow text-hero">for Rwanda's Flagship Projects.</span>
            </h1>
            <div className="mt-3 flex flex-wrap justify-center gap-3">
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
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
          <div className="text-[10px] uppercase tracking-[0.3em] text-background/60">Scroll</div>
          <div className="h-12 w-px bg-gradient-to-b from-background/60 to-transparent" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-border bg-secondary/60 services-section">
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-28 lg:px-10">

          {/* Trusted Clients Bar */}
          <div className="mb-16 flex flex-col items-center gap-4">
            <div className="text-[10px] uppercase tracking-[0.22em] text-white/60">Our Trusted Clients</div>

            <div className="relative w-full overflow-hidden flex items-center h-16 [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
              <div className="flex w-max animate-marquee items-center gap-8 py-2">
                {[...Array(2)].map((_, j) => (
                  <div key={j} className="flex shrink-0 items-center gap-8 pr-8">
                    {[bioNTechLogo, cimerwaLogo, kccLogo, inyangeLogo, golfLogo].map((logo, i) => (
                      <div key={i} className="flex items-center justify-center">
                        <img src={logo} alt={`client-${i}`} className="h-12 w-auto rounded-lg border border-white/10 object-contain bg-white/5 p-1" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <FadeIn>
            <div className="flex flex-col items-center justify-center gap-6 text-center">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-white">What we do</div>
                <h2 className="mt-4 max-w-2xl font-serif text-4xl text-white md:text-4xl font-extrabold ">
                  Equipment, Expertise and Execution.
                </h2>
              </div>
              <Link to="/services" className="text-sm font-medium text-primary hover:text-primary-deep md:inline">
                All services →
              </Link>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-3 services-cards" >
            {[
              {
                n: "",
                title: "Scaffolding Rental",
                body: "Cuplock systems, ledgers, standards and accessories rented to spec for projects of any scale.",
                icon: "scaffold",
              },
              {
                n: "",
                title: "Machinery & Equipment",
                body: "Trusted construction equipment supply for stadiums, plants, hydro and commercial works.",
                icon: "gear",
              },
              {
                n: "",
                title: "Maintenance Services",
                body: "Specialist on-site maintenance keeping landmark facilities operating safely year after year.",
                icon: "wrench",
              },
            ].map((s, index) => (
              <FadeIn key={s.title} delay={index * 150} className="h-full">
                <article className="h-full group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all shadow-[0_4px_24px_-4px_rgba(0,0,0,0.12),0_1px_4px_-1px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.22),0_4px_16px_-4px_rgba(0,0,0,0.1)]">
                  <div className="font-serif text-sm text-primary">{s.n}</div>
                  <h3 className="flex items-center gap-3 font-serif text-2xl text-ink">
                    {s.icon === "scaffold" ? (
                      <svg className="h-6 w-6 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M3 3h18v2H3V3zm2 4h14v2H5V7zm-2 4h18v2H3v-2zm2 4h14v2H5v-2z" />
                      </svg>
                    ) : s.icon === "gear" ? (
                      <svg className="h-6 w-6 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M19.14 12.94c.04-.3.06-.6.06-.94s-.02-.64-.06-.94l2.03-1.58a.5.5 0 00.12-.63l-1.92-3.32a.5.5 0 00-.6-.22l-2.39.96a7.02 7.02 0 00-1.62-.94L14.5 2h-5l-.56 2.33c-.57.22-1.11.5-1.62.84l-2.39-.96a.5.5 0 00-.6.22L1.9 9.48a.5.5 0 00.12.63L4.05 11.7c-.04.31-.06.63-.06.95s.02.64.06.95L1.9 15.8a.5.5 0 00-.12.63l1.92 3.32c.14.24.43.34.67.24l2.39-.96c.51.34 1.05.62 1.62.84L9.5 22h5l.56-2.33c.57-.22 1.11-.5 1.62-.84l2.39.96c.24.1.53 0 .67-.24l1.92-3.32a.5.5 0 00-.12-.63l-2.03-1.58zM12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7z" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6 text-primary flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M22 12c0-5.52-4.48-10-10-10-1.66 0-3.22.38-4.62 1.06L3 6v6l6.06 4.62C9.78 18.62 10.87 18 12 18c5.52 0 10-4.48 10-10zM11 14H9v-2h2v2zm0-4H9V8h2v2zm4 4h-2v-2h2v2zm0-4h-2V8h2v2z" />
                      </svg>
                    )}
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="projects-section border-t border-border bg-ink py-28 text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-primary-glow">Selected work</div>
                <h2 className="mt-4 max-w-2xl font-serif text-4xl text-background md:text-5xl font-extrabold">
                  Trusted on Rwanda's landmarks.
                </h2>
              </div>
              <Link to="/projects" className="text-sm font-medium text-primary-glow hover:text-background">
                View portfolio →
              </Link>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { img: projStadium, name: "Bugesera International Airport", tag: "Ongoing · Scaffolding" },
              { img: kccImg, name: "Kigali Convention Centre", tag: "Renovation · Access scaffolding" },
              { img: milkPowderImg, name: "Milk Powder Plant", tag: "Industrial · Equipment" },
              { img: gasekeImg, name: "Gaseke Hydropower Plant", tag: "Energy · Maintenance" },
            ].map((p, index) => (
              <FadeIn key={p.name} delay={index * 150} className="h-full">
                <article className="h-full group relative overflow-hidden rounded-2xl">
                  <img src={p.img} alt={p.name} loading="lazy" width={1200} height={900} className="aspect-[4/5] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-primary-glow">{p.tag}</div>
                    <h3 className="mt-2 font-serif text-xl text-background">{p.name}</h3>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-15 lg:grid-cols-2 lg:px-10">

        <FadeIn className="flex flex-col justify-center">
          <div className="text-xs uppercase tracking-[0.22em] text-primary">About TTS</div>
          <h2 className="mt-4 font-serif text-4xl leading-tight font-extrabold text-ink md:text-5xl">
            Three decades of <em className="text-primary ">trustable</em> work.
          </h2>
          <div className=" mt-6 space-y-6 text-lg leading-relaxed text-foreground/80 lg:col-span-7">
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

          </div>
          <Link to="/about" className="mt-6 inline-flex items-center gap-2 pt-2 text-sm font-medium text-primary hover:text-primary-deep">
            Read our story <span aria-hidden>→</span>
          </Link>
        </FadeIn>

        <FadeIn delay={200} className="relative overflow-hidden rounded-3xl bg-ink">
          <img src={heroPoster} alt="Trustable Technical Services scaffolding" loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
        </FadeIn>
      </section>



      {/* FEATURED PRODUCT */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-10 lg:grid-cols-2 lg:px-10">
        <FadeIn className="relative overflow-hidden rounded-3xl">
          <img src={productCuplock} alt="Cuplock scaffolding components" loading="lazy" width={1200} height={900} className="h-full w-full object-cover" />
        </FadeIn>
        <FadeIn delay={200} className="flex flex-col justify-center">
          <div className="text-xs uppercase tracking-[0.22em] text-primary">Featured System</div>
          <h2 className="mt-4 font-serif text-4xl text-ink md:text-5xl font-bold">
            TTS Equipment
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
        </FadeIn>
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
