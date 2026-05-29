import type { Metadata } from "next";
import { businessInfo, services } from "@/data/site";
import type { BlogPost, BreadcrumbItem, FAQ, SEOFields, Service } from "@/types";

const openingHoursSpecification = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:30",
    closes: "18:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Saturday",
    opens: "10:30",
    closes: "17:00",
  },
];

function toAbsoluteUrl(url: string): string {
  if (url.startsWith("http")) {
    return url;
  }

  return `${businessInfo.baseUrl}${url}`;
}

function toSameAsUrl(url: string): string {
  if (url.startsWith("http")) {
    return url;
  }

  return `https://www.instagram.com/${url.replace("@", "")}`;
}

export function generatePageMetadata(seo: SEOFields): Metadata {
  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    alternates: {
      canonical: seo.canonicalUrl,
    },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      url: seo.canonicalUrl,
      images: [
        {
          url: seo.ogImage,
          alt: seo.ogTitle,
        },
      ],
      locale: "tr_TR",
      siteName: businessInfo.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [seo.ogImage],
    },
    robots: {
      index: !seo.noIndex,
      follow: !seo.noIndex,
    },
  };
}

export function generateServiceMetadata(service: Service): Metadata {
  return generatePageMetadata(service.seo);
}

export function generateBlogMetadata(post: BlogPost): Metadata {
  return {
    ...generatePageMetadata(post.seo),
    openGraph: {
      ...generatePageMetadata(post.seo).openGraph,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": `${businessInfo.baseUrl}/#localbusiness`,
    name: businessInfo.name,
    description: businessInfo.description,
    url: businessInfo.baseUrl,
    logo: businessInfo.logoUrl,
    image: businessInfo.defaultOgImage,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address,
      addressLocality: businessInfo.district,
      addressRegion: businessInfo.city,
      addressCountry: businessInfo.country,
    },
    areaServed: [businessInfo.city, businessInfo.district],
    openingHours: businessInfo.workingHours,
    openingHoursSpecification,
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Güzellik ve bakım hizmetleri",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
          url: service.seo.canonicalUrl,
          areaServed: [businessInfo.city, businessInfo.district],
        },
      })),
    },
    ...(businessInfo.instagram
      ? { sameAs: [toSameAsUrl(businessInfo.instagram)] }
      : {}),
  };
}

export function generateServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    image: toAbsoluteUrl(service.image),
    url: service.seo.canonicalUrl,
    provider: {
      "@type": "BeautySalon",
      "@id": `${businessInfo.baseUrl}/#localbusiness`,
      name: businessInfo.name,
      url: businessInfo.baseUrl,
      telephone: businessInfo.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: businessInfo.address,
        addressLocality: businessInfo.district,
        addressRegion: businessInfo.city,
        addressCountry: businessInfo.country,
      },
      openingHoursSpecification,
    },
    areaServed: [businessInfo.city, businessInfo.district],
  };
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${businessInfo.baseUrl}${item.href === "/" ? "" : item.href}`,
    })),
  };
}
