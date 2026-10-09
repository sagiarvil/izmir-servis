import { business } from "../data/business";
import { seoRegistry } from "./registry";

export function getAutoRepairSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${business.siteUrl}/#autorepair`,
    "name": business.name,
    "alternateName": "İzmir Yağ Değişimi",
    "description": business.description,
    "url": business.siteUrl,
    "telephone": business.phoneE164,
    "email": business.email,
    "image": `${business.siteUrl}/images/logo.png`,
    "logo": `${business.siteUrl}/images/logo.png`,
    "priceRange": "₺₺",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address.street,
      "addressLocality": business.address.district,
      "addressRegion": "İzmir",
      "postalCode": "35410",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": business.address.geo.latitude,
      "longitude": business.address.geo.longitude
    },
    "hasMap": business.address.googleMapsUrl,
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:30",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:30",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      business.social.instagramShop,
      business.social.instagramMaster
    ],
    "areaServed": {
      "@type": "City",
      "name": "İzmir"
    }
  };
}

export function getBreadcrumbSchema(currentPath: string) {
  const route = seoRegistry[currentPath] || { breadcrumbName: "Sayfa", path: currentPath };
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Anasayfa",
      "item": business.siteUrl
    }
  ];

  if (currentPath !== "/") {
    items.push({
      "@type": "ListItem",
      "position": 2,
      "name": route.breadcrumbName,
      "item": `${business.siteUrl}${currentPath}`
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items
  };
}

export function getFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };
}
