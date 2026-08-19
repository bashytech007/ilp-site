import { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface MetadataOptions {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
}

/**
 * Generate standardized Metadata object for Next.js routes
 */
export function generateMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  noIndex = false,
  type = "website",
}: MetadataOptions = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${siteConfig.tagline}`;

  return {
    title: fullTitle,
    description: description,
    openGraph: {
      title: fullTitle,
      description: description,
      type: type,
      url: siteConfig.url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    metadataBase: new URL(siteConfig.url),
  };
}

/**
 * Generate LegalService Schema.org JSON-LD for rich snippet search authority
 */
export function generateLegalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo/logo.png`,
    image: siteConfig.ogImage,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Victoria Island",
      addressLocality: "Lagos",
      addressRegion: "Lagos State",
      addressCountry: "NG",
    },
    telephone: siteConfig.contact.phone[0],
    email: siteConfig.contact.email,
    openingHours: "Mo-Fr 08:00-18:00",
    priceRange: "$$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Commercial & Corporate Legal Advisory Services",
      itemListElement: siteConfig.mainNav[2].children?.map((practice, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: practice.title,
          description: practice.description,
        },
        position: idx + 1,
      })),
    },
  };
}
