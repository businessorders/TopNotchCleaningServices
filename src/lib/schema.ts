import { companyInfo, services } from './data';
import { Service } from '@/types';

// LocalBusiness Schema
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${companyInfo.website}/#business`,
    name: companyInfo.name,
    image: `${companyInfo.website}/logo.png`,
    description: `Professional deep cleaning services in Dubai. Expert carpet cleaning, sofa cleaning, mattress cleaning, curtains cleaning, and house deep cleaning services.`,
    url: companyInfo.website,
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: companyInfo.address,
      addressLocality: companyInfo.city,
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2048,
      longitude: 55.2708,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
    priceRange: 'AED',
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1250',
    },
    sameAs: [
      'https://www.facebook.com/deepcleandubai',
      'https://www.instagram.com/deepcleandubai',
      'https://www.linkedin.com/company/deepcleandubai',
    ],
  };
}

// Service Schema for individual service pages
export function getServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${companyInfo.website}/services/${service.slug}/#service`,
    name: service.name,
    description: service.description,
    url: `${companyInfo.website}/services/${service.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${companyInfo.website}/#business`,
    },
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
    },
    serviceType: service.targetKeyword,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: {
        '@type': 'City',
        name: 'Dubai',
      },
    },
  };
}

// FAQ Schema
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// BreadcrumbList Schema
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Organization Schema
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyInfo.name,
    url: companyInfo.website,
    logo: `${companyInfo.website}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: companyInfo.phone,
      contactType: 'customer service',
      areaServed: 'AE',
      availableLanguage: ['English', 'Arabic'],
    },
    sameAs: [
      'https://www.facebook.com/deepcleandubai',
      'https://www.instagram.com/deepcleandubai',
    ],
  };
}

// WebSite Schema for sitelinks search
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: companyInfo.name,
    url: companyInfo.website,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${companyInfo.website}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// Review Schema
export function getReviewSchema(review: { name: string; rating: number; text: string; date: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
    },
    reviewBody: review.text,
    datePublished: review.date,
  };
}

// Service List Schema for homepage
export function getServiceListSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.tagline,
        url: `${companyInfo.website}/services/${service.slug}`,
      },
    })),
  };
}

// Combine all homepage schemas
export function getHomepageSchemas() {
  return [
    getLocalBusinessSchema(),
    getOrganizationSchema(),
    getWebSiteSchema(),
    getServiceListSchema(),
  ];
}

// Combine all service page schemas
export function getServicePageSchemas(service: Service) {
  return [
    getLocalBusinessSchema(),
    getServiceSchema(service),
    getFAQSchema(service.faqs),
    getBreadcrumbSchema([
      { name: 'Home', url: companyInfo.website },
      { name: 'Services', url: `${companyInfo.website}/#services` },
      { name: service.shortName, url: `${companyInfo.website}/services/${service.slug}` },
    ]),
  ];
}
