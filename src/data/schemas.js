export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.hopeconstruction.co.in/#business",
  "name": "Hope Construction",
  "legalName": "Hope Construction",
  "url": "https://www.hopeconstruction.co.in",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.hopeconstruction.co.in/logo.png",
    "width": 1000,
    "height": 300
  },
  "image": "https://www.hopeconstruction.co.in/hero-back.png",
  "description": "Licensed residential and commercial construction company serving Tamil Nadu since 2014.",
  "telephone": "+91-7418828814",
  "email": "Hopeconstruction81@gmail.com",
  "foundingDate": "2014",
  "numberOfEmployees": { "@type": "QuantitativeValue", "value": 50 },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "349/B1, Vallam New Colony, Brindha Nagar",
    "addressLocality": "Chengalpattu",
    "addressRegion": "Tamil Nadu",
    "postalCode": "603001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.6819,
    "longitude": 80.0276
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "areaServed": [
    { "@type": "City", "name": "Chennai" },
    { "@type": "City", "name": "Tambaram" },
    { "@type": "City", "name": "Chengalpattu" },
    { "@type": "AdministrativeArea", "name": "Tamil Nadu" }
  ],
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, Bank Transfer, Cheque",
  "hasMap": "https://maps.google.com/?q=12.6819,80.0276",
  "sameAs": [
    "https://www.facebook.com/hopeconstruction",
    "https://www.instagram.com/hopeconstruction",
    "https://www.linkedin.com/company/hopeconstruction"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.hopeconstruction.co.in/#website",
  "name": "Hope Construction",
  "url": "https://www.hopeconstruction.co.in",
  "description": "Premium construction services in Tamil Nadu",
  "inLanguage": "en-IN",
  "publisher": { "@id": "https://www.hopeconstruction.co.in/#business" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://www.hopeconstruction.co.in/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.hopeconstruction.co.in/#organization",
  "name": "Hope Construction",
  "url": "https://www.hopeconstruction.co.in",
  "logo": "https://www.hopeconstruction.co.in/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7418828814",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Tamil"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "349/B1, Vallam New Colony, Brindha Nagar",
    "addressLocality": "Chengalpattu",
    "addressRegion": "Tamil Nadu",
    "postalCode": "603001",
    "addressCountry": "IN"
  }
};

export const getServiceSchema = (serviceName, description, url) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `https://www.hopeconstruction.co.in${url}#service`,
  "serviceType": serviceName,
  "provider": { "@id": "https://www.hopeconstruction.co.in/#business" },
  "name": serviceName,
  "description": description,
  "url": `https://www.hopeconstruction.co.in${url}`,
  "areaServed": { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": serviceName
  }
});

export const getFaqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ question, answer }) => ({
    "@type": "Question",
    "name": question,
    "acceptedAnswer": { "@type": "Answer", "text": answer }
  }))
});

export const getReviewSchema = (reviews) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.hopeconstruction.co.in/#business",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": reviews.length,
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": reviews.map(r => ({
    "@type": "Review",
    "author": { "@type": "Person", "name": r.name },
    "reviewRating": { "@type": "Rating", "ratingValue": r.rating },
    "reviewBody": r.text,
    "datePublished": r.date
  }))
});
