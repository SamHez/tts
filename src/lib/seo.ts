export const SITE_URL = "https://trustable.rw";
export const SITE_NAME = "Trustable Technical Services";
export const SITE_LEGAL_NAME = "Trustable Technical Services Ltd";
export const SITE_SHORT_NAME = "TTS";
export const SITE_EMAIL = "info@trustable.rw";
export const SITE_PHONE = "+250 788 751 529";
export const SITE_ADDRESS = "Gasabo District, Kigali, Rwanda";
export const SITE_IMAGE = `${SITE_URL}/favicon.png`;

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
};

export function absoluteUrl(path = "/") {
  return `${SITE_URL}${path === "/" ? "" : path}`;
}

export function pageSeo({ title, description, path, keywords }: SeoOptions) {
  const url = absoluteUrl(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          keywords ??
          "scaffolding Rwanda, scaffolding rental Kigali, construction equipment Rwanda, cuplock scaffolding, maintenance services Kigali, Trustable Technical Services",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "author", content: SITE_LEGAL_NAME },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: SITE_IMAGE },
      { property: "og:locale", content: "en_RW" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: SITE_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_LEGAL_NAME,
  alternateName: SITE_SHORT_NAME,
  url: SITE_URL,
  logo: SITE_IMAGE,
  image: SITE_IMAGE,
  email: SITE_EMAIL,
  telephone: SITE_PHONE,
  foundingDate: "2014",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gasabo District",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
  areaServed: {
    "@type": "Country",
    name: "Rwanda",
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cuplock scaffolding rental" } },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Construction equipment supply" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Industrial and facility maintenance" },
    },
  ],
};
