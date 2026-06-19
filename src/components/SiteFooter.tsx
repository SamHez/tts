import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logoWhite from "@/assets/tts-logo-white.png";
import { SITE_EMAIL } from "@/lib/seo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-ink text-background/85">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <Link to="/">
            <img src={logoWhite} alt="TTS" className="h-16 w-auto object-contain drop-shadow-md" />
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/65">
            Since 2014, building Rwanda's most ambitious structures with scaffolding, equipment and
            maintenance services engineered for trust.
          </p>
        </div>
        <div>
          <div className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
            Company
          </div>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="transition-colors hover:text-primary-glow">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="transition-colors hover:text-primary-glow">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" className="transition-colors hover:text-primary-glow">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-primary-glow">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
            Contact
          </div>
          <ul className="space-y-4 text-sm text-background/75">
            <li className="flex items-start gap-3 transition-colors hover:text-background">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
              <span>Gasabo District, Kigali, Rwanda</span>
            </li>
            <li className="flex items-start gap-3 transition-colors hover:text-background">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-glow" />
              <div className="flex flex-col gap-1">
                <span>+250 788 751 529</span>
              </div>
            </li>
            <li className="flex items-center gap-3 break-all transition-colors hover:text-background">
              <Mail className="h-4 w-4 shrink-0 text-primary-glow" />
              <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>
            </li>
            <li className="flex items-center gap-3 pt-2 text-background/55">
              <Clock className="h-4 w-4 shrink-0" />
              <span>Mon–Fri · 8:00 – 18:30</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 py-8 text-xs text-background/50 md:flex-row md:items-center lg:px-10">
          <div>
            © {new Date().getFullYear()} Trustable Technical Services Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
            Established 2014 · Rwanda
          </div>
        </div>
      </div>
    </footer>
  );
}
