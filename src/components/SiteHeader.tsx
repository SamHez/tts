import { Link } from "@tanstack/react-router";
import logo from "@/assets/tts-logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const wrap = transparent
    ? "absolute inset-x-0 top-0 z-40 bg-transparent"
    : "sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg";
  const brandPrimary = transparent ? "text-background" : "text-ink";
  const brandSub = transparent ? "text-background/70" : "text-muted-foreground";
  const navLink = transparent
    ? "group relative text-sm font-medium text-background/80 transition-colors hover:text-background"
    : "group relative text-sm font-medium text-foreground/75 transition-colors hover:text-primary";
  const navActive = transparent ? "text-background" : "text-primary";
  const cta = transparent
    ? "hidden rounded-full border border-background/40 bg-background/10 px-5 py-2.5 text-sm font-medium text-background backdrop-blur-md transition-all hover:bg-background hover:text-ink md:inline-flex"
    : "hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-primary md:inline-flex";
  return (
    <header className={wrap}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="TTS"
            width={44}
            height={44}
            className={
              "h-11 w-11 object-contain " +
              (transparent ? "rounded-md bg-background/90 p-1 shadow-md" : "")
            }
          />
          <div className="leading-tight">
            <div className={`font-serif text-xl ${brandPrimary}`}>TTS</div>
            <div className={`text-[10px] uppercase tracking-[0.22em] ${brandSub}`}>
              Trustable Technical Services
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={navLink}
              activeProps={{ className: navActive }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
              <span className={`absolute -bottom-1 left-0 h-px w-0 transition-all group-hover:w-full ${transparent ? "bg-background" : "bg-primary"}`} />
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className={cta}
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
}