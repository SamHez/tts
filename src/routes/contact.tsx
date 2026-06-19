import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { FadeIn } from "@/components/FadeIn";
import { pageSeo, SITE_EMAIL } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageSeo({
      title: "Contact TTS | Trustable Technical Services Kigali, Rwanda",
      description:
        "Contact Trustable Technical Services Ltd in Gasabo District, Kigali for scaffolding rental, construction equipment and maintenance service enquiries.",
      path: "/contact",
      keywords:
        "contact TTS Rwanda, Trustable Technical Services email, scaffolding rental Kigali contact",
    }),
  component: ContactPage,
});

const fields = [
  { name: "name", label: "Full name", type: "text", required: true },
  { name: "company", label: "Company", type: "text", required: false },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: false },
] as const;

function ContactPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border bg-secondary/50 bg-page-header">
        <FadeIn className="mx-auto max-w-7xl px-6 py-28 lg:px-10 text-center">
          <div className="mt-20">
            <span className="inline-block bg-primary rounded-full px-3 py-1 text-xs uppercase tracking-[0.22em] text-white">
              Contact
            </span>
          </div>
          <h1 className="mt-6 mx-auto max-w-4xl font-serif text-5xl leading-[1.05] text-white md:text-5xl text-balance font-extrabold">
            Let's build something <em className="text-white">trustable.</em>
          </h1>
          <p className="mt-8 mx-auto max-w-2xl text-lg text-white">
            Reach our team in Kigali. We respond to project enquiries within one business day.
          </p>
        </FadeIn>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10">
        <div className="space-y-10">
          {[
            { k: "Office", v: "Gasabo District, Kigali, Rwanda" },
            { k: "Telephone", v: "+250 788 751 529\n+250 727 045 447" },
            { k: "Email", v: SITE_EMAIL },
            { k: "Business hours", v: "Monday – Friday\n8:00 a.m. – 6:30 p.m." },
          ].map((x, i) => (
            <FadeIn key={x.k} delay={i * 120} className="border-t border-border pt-6">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-primary">{x.k}</div>
                <div className="mt-3 whitespace-pre-line font-serif text-2xl text-ink">{x.v}</div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="rounded-3xl border border-border bg-card p-8 md:p-10" delay={80}>
          <form
            className=""
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const subject = encodeURIComponent(`Project enquiry — ${data.get("name") ?? ""}`);
              const body = encodeURIComponent(
                `Name: ${data.get("name")}\nCompany: ${data.get("company")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\n\n${data.get("message")}`,
              );
              window.location.href = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;
            }}
          >
            <h2 className="font-serif text-2xl text-ink">Send us a brief</h2>
            <div className="mt-6 grid gap-4">
              {fields.map((f) => (
                <label key={f.name} className="block">
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {f.label}
                  </span>
                  <input
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-ink outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                  />
                </label>
              ))}
              <label className="block">
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Project details
                </span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-ink outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/15"
                />
              </label>
              <button
                type="submit"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-background transition-all hover:bg-primary"
              >
                Send enquiry →
              </button>
            </div>
          </form>
        </FadeIn>
      </section>
    </SiteLayout>
  );
}
