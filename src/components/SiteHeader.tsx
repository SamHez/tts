import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import logoDark from "@/assets/tts-logo.png";
import logoWhite from "@/assets/tts-logo-white.png";
import { SITE_EMAIL } from "@/lib/seo";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isOverlay = !isScrolled;
  const isCentered = !isScrolled;

  const wrap = isOverlay
    ? "fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/90 via-black/50 to-transparent transition-all duration-300"
    : isScrolled
      ? "fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-lg transition-all duration-300 shadow-sm"
      : "fixed inset-x-0 top-0 z-50 transition-all duration-300";

  const navLink = isOverlay
    ? "group relative text-base font-medium tracking-wide text-white transition-colors hover:text-white/80"
    : "group relative text-base font-medium tracking-wide text-foreground/80 transition-colors hover:text-primary";

  const navActive = isOverlay ? "text-white drop-shadow-md" : "text-primary";

  const cta = isOverlay
    ? "hidden rounded-full border border-background/40 bg-background/10 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-all hover:bg-background hover:text-ink md:inline-flex"
    : "hidden rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-background transition-all hover:bg-primary md:inline-flex";

  const currentLogo = isOverlay ? logoWhite : logoDark;

  const leftLinks = links.slice(0, 3);
  const rightLinks = links.slice(3);

  return (
    <>
      <header className={wrap}>
        <div
          className={`mx-auto flex max-w-7xl px-6 lg:px-10 transition-all duration-300 ${isCentered ? "h-auto py-6" : "h-24 items-center justify-between"}`}
        >
          {isCentered ? (
            <div className="flex w-full items-center justify-between relative">
              {/* Left Contact Info */}
              <div className="hidden md:flex flex-1 flex-col items-start justify-center gap-1 text-sm font-medium text-white/90">
                <span className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-white" />
                  +250 788 751 529
                </span>
                <span className="flex items-center gap-2 text-white/70">
                  <Mail className="h-4 w-4 text-white" />
                  {SITE_EMAIL}
                </span>
              </div>

              {/* Mobile Logo (Absolute Center) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden flex items-center justify-center">
                <Link
                  to="/"
                  className="flex flex-shrink-0 items-center justify-center transition-transform hover:scale-105"
                >
                  <img
                    src={currentLogo}
                    alt="TTS"
                    className="h-10 w-auto object-contain drop-shadow-md transition-all duration-300"
                  />
                </Link>
              </div>

              {/* Center Area: Logo + Nav (Desktop) */}
              <div className="hidden md:flex flex-[2] flex-col items-center justify-center gap-5">
                <Link
                  to="/"
                  className="flex flex-shrink-0 items-center justify-center transition-transform hover:scale-105"
                >
                  <img
                    src={currentLogo}
                    alt="TTS"
                    className="h-10 w-auto object-contain drop-shadow-md transition-all duration-300"
                  />
                </Link>
                <nav className="hidden items-center justify-center gap-10 md:flex">
                  {links.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className={navLink}
                      activeProps={{ className: navActive }}
                      activeOptions={{ exact: l.to === "/" }}
                    >
                      {l.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-px w-0 transition-all group-hover:w-full bg-white`}
                      />
                    </Link>
                  ))}
                </nav>
              </div>

              {/* Right CTA */}
              <div className="flex flex-1 items-center justify-end gap-4 ml-auto md:ml-0">
                <Link to="/contact" className={cta}>
                  Request a Quote
                </Link>
                <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(true)}>
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-between relative">
              {/* Mobile Logo (Absolute Center) */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden flex items-center justify-center">
                <Link
                  to="/"
                  className="flex flex-shrink-0 items-center transition-transform hover:scale-105"
                >
                  <img
                    src={currentLogo}
                    alt="TTS"
                    className="h-12 w-auto object-contain transition-all duration-300"
                  />
                </Link>
              </div>

              {/* Left: Logo (Desktop) */}
              <div
                className={`hidden md:flex flex-1 items-center ${isCentered ? "justify-center" : "justify-start"}`}
              >
                <Link
                  to="/"
                  className="flex flex-shrink-0 items-center transition-transform hover:scale-105"
                >
                  <img
                    src={currentLogo}
                    alt="TTS"
                    className={`h-12 w-auto object-contain transition-all duration-300 ${isCentered ? "" : ""}`}
                  />
                </Link>
              </div>

              {/* Middle: Nav */}
              <nav
                className={`hidden flex-[2] items-center justify-center gap-10 md:flex ${isCentered ? "" : ""}`}
              >
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={navLink}
                    activeProps={{ className: navActive }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px w-0 transition-all group-hover:w-full bg-primary`}
                    />
                  </Link>
                ))}
              </nav>

              {/* Right: CTA */}
              <div className="flex flex-1 items-center justify-end gap-4 ml-auto md:ml-0">
                <Link to="/contact" className={cta}>
                  Request a Quote
                </Link>
                <button
                  className="md:hidden text-foreground"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-ink text-background flex flex-col p-6 animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-12">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={logoWhite} alt="TTS" className="h-10 w-auto" />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white/80 hover:text-white"
            >
              <X className="h-8 w-8" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-2xl font-serif">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 inline-block w-fit rounded-full bg-primary px-8 py-3 text-lg font-sans font-medium text-primary-foreground"
            >
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
