import Hero from "./components/home/Hero";
import About from "./components/home/About";
import OurPartners from "./components/home/OurPartners";
import CEOMessage from "./components/home/CEOMessage";
import Head from "next/head";

export const metadata = {
  title: "Bin Ali Medical Supplies Leading Healthcare Solutions in UAE",
  description:
    "Bin Ali Medical Supplies Leading Healthcare Solutions in UAE is the premier provider of medical equipment, pharmaceutical products, and healthcare solutions.",
  keywords:
    "medical supplies UAE, healthcare equipment Dubai, pharmaceutical distributor, medical devices Abu Dhabi, hospital supplies, dental equipment, surgical instruments, laboratory consumables, medical technology UAE",
  authors: [{ name: "Bin Ali Medical Supplies" }],
  creator: "Bin Ali Medical Supplies",
  publisher: "Bin Ali Medical Supplies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://binalimed.com/",
    siteName: "Bin Ali Medical Supplies",
    title: "Bin Ali Medical Supplies | Leading Healthcare Solutions in UAE",
    description:
      "Premier provider of medical equipment, pharmaceutical products, and healthcare solutions in the UAE. Trusted by hospitals and healthcare facilities across the United Arab Emirates.",
    images: [
      {
        url: "https://binalimed.com/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Bin Ali Medical Supplies Logo",
        type: "image/svg+xml",
      },
      {
        url: "https://binalimed.com/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Bin Ali Medical Supplies - Healthcare Solutions",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@binalimed",
    creator: "@binalimed",
    title: "Bin Ali Medical Supplies | Leading Healthcare Solutions in UAE",
    description:
      "Premier provider of medical equipment, pharmaceutical products, and healthcare solutions in the UAE. Trusted by hospitals and healthcare facilities.",
    images: {
      url: "https://binalimed.com/images/hero-bg.jpg",
      alt: "Bin Ali Medical Supplies - Healthcare Solutions",
    },
  },
  alternates: {
    canonical: "https://binalimed.com/",
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Bin Ali Medical",
    "application-name": "Bin Ali Medical Supplies",
    "msapplication-TileColor": "#202B76",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#202B76",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    HandheldFriendly: "True",
    MobileOptimized: "320",
    "target-densitydpi": "device-dpi",
    "viewport-fit": "cover",
    rating: "general",
    distribution: "global",
    "revisit-after": "1 days",
    expires: "never",
    pragma: "no-cache",
    "cache-control": "no-cache",
    "geo.region": "AE",
    "geo.country": "United Arab Emirates",
    "geo.placename": "Dubai, Abu Dhabi",
    "DC.title": "Bin Ali Medical Supplies",
    "DC.creator": "Bin Ali Medical Supplies",
    "DC.subject":
      "Medical Supplies, Healthcare Equipment, Pharmaceutical Distribution",
    "DC.description":
      "Leading provider of medical equipment and healthcare solutions in UAE",
    "DC.publisher": "Bin Ali Medical Supplies",
    "DC.contributor": "Healthcare Industry",
    "DC.date": new Date().toISOString().split("T")[0],
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.identifier": "https://binalimed.com/",
    "DC.source": "https://binalimed.com/",
    "DC.language": "en-US",
    "DC.relation": "https://binalimed.com/",
    "DC.coverage": "United Arab Emirates",
    "DC.rights": "© 2025 Bin Ali Medical Supplies. All rights reserved.",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://binalimed.com/#organization",
        name: "Bin Ali Medical Supplies",
        alternateName: "BAMS",
        url: "https://binalimed.com/",
        logo: {
          "@type": "ImageObject",
          url: "https://binalimed.com/images/logo.svg",
          width: 200,
          height: 60,
        },
        description:
          "Leading provider of medical equipment, pharmaceutical products, and healthcare solutions in the United Arab Emirates.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "AE",
          addressRegion: "Dubai",
          addressLocality: "Dubai",
          streetAddress: "Dubai, United Arab Emirates",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+971-445-20022",
          contactType: "customer service",
          areaServed: "AE",
          availableLanguage: ["en", "ar"],
        },
        sameAs: [
          "https://www.linkedin.com/company/bin-ali-medical-supplies",
          "https://twitter.com/binalimed",
          "https://www.facebook.com/binalimed",
        ],
        foundingDate: "2000",
        numberOfEmployees: "50-100",
        industry: "Healthcare",
        parentOrganization: {
          "@type": "Organization",
          name: "Bin Ali Medical Group",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://binalimed.com/#website",
        url: "https://binalimed.com/",
        name: "Bin Ali Medical Supplies",
        description: "Leading healthcare solutions provider in UAE",
        publisher: {
          "@id": "https://binalimed.com/#organization",
        },
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://binalimed.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://binalimed.com/#webpage",
        url: "https://binalimed.com/",
        name: "Home - Bin Ali Medical Supplies",
        isPartOf: {
          "@id": "https://binalimed.com/#website",
        },
        about: {
          "@id": "https://binalimed.com/#organization",
        },
        description:
          "Premier provider of medical equipment, pharmaceutical products, and healthcare solutions in the UAE.",
        breadcrumb: {
          "@id": "https://binalimed.com/#breadcrumb",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://binalimed.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://binalimed.com/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Medical Equipment Distribution",
        provider: {
          "@id": "https://binalimed.com/#organization",
        },
        description:
          "Distribution of high-quality medical equipment and supplies to healthcare facilities across the UAE.",
        serviceType: "Medical Equipment Distribution",
        areaServed: {
          "@type": "Country",
          name: "United Arab Emirates",
        },
      },
      {
        "@type": "Service",
        name: "Pharmaceutical Distribution",
        provider: {
          "@id": "https://binalimed.com/#organization",
        },
        description:
          "Pharmaceutical product distribution and supply chain management for healthcare providers.",
        serviceType: "Pharmaceutical Distribution",
        areaServed: {
          "@type": "Country",
          name: "United Arab Emirates",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg.jpg"
          type="image/jpeg"
        />
      </Head>
      <Hero />
      <About />
      <OurPartners />
      <CEOMessage />
    </>
  );
}
