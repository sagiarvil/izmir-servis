import { business } from '../data/business';

export function getAutoRepairSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${business.siteUrl}/#business`,
    "name": business.name,
    "alternateName": [business.serviceBrand, "İzmir Yağ Değişim Servisi"],
    "legalName": business.legalName,
    "url": business.siteUrl,
    "telephone": business.phoneE164,
    "email": business.email,
    "image": `${business.siteUrl}/images/logo.png`,
    "logo": `${business.siteUrl}/images/logo.png`,
    "description": business.description,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address.street,
      "addressLocality": business.address.district,
      "addressRegion": business.address.city,
      "postalCode": "35410",
      "addressCountry": "TR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": business.address.geo.latitude,
      "longitude": business.address.geo.longitude
    },
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
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Motor Yağı ve Bakım Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Motor Yağı Değişimi",
            "description": "Araç motor koduna uygun tam sentetik motor yağı değişimi ve seviye kalibrasyonu."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Yağ Filtresi Değişimi",
            "description": "Orijinal mikron partikül filtre elemanı ve conta montajı."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Periyodik Bakım",
            "description": "Dörtlü filtre seti, motor yağı ve 24 nokta mekanik güvenlik kontrolü."
          }
        }
      ]
    }
  };
}

export function getServiceSchema(service: { title: string; description: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "AutoRepair",
      "name": business.name,
      "url": business.siteUrl
    },
    "areaServed": {
      "@type": "City",
      "name": "İzmir"
    },
    "serviceType": "Otomotiv Bakım Hizmeti",
    "url": `${business.siteUrl}/${service.slug}/`
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${business.siteUrl}${item.path}`
    }))
  };
}

export function getFaqSchema(faqList: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };
}
