import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-ink text-background/85">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <div className="font-serif text-3xl text-background">Trustable Technical Services</div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-background/65">
            Since 1988, building Rwanda's most ambitious structures with scaffolding,
            equipment and maintenance services engineered for trust.
          </p>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-background/50">Company</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary-glow">About</Link></li>
            <li><Link to="/services" className="hover:text-primary-glow">Services</Link></li>
            <li><Link to="/projects" className="hover:text-primary-glow">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-primary-glow">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.2em] text-background/50">Contact</div>
          <ul className="space-y-2 text-sm text-background/75">
            <li>Gasabo District, Kigali, Rwanda</li>
            <li>+250 788 751 529</li>
            <li>+250 727 045 447</li>
            <li className="break-all">trustabletechnicalservices@gmail.com</li>
            <li className="pt-2 text-background/55">Mon–Fri · 8:00 – 18:30</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-background/50 md:flex-row md:items-center lg:px-10">
          <div>© {new Date().getFullYear()} Trustable Technical Services Ltd. All rights reserved.</div>
          <div>Registered February 1988 · Rwanda</div>
        </div>
      </div>
    </footer>
  );
}