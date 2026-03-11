import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title,
  description,
  canonical,
  image = '/hero-back.png',
  type = 'website',
  schema,
  noindex = false,
  breadcrumbs,
}) {
  const baseUrl = 'https://www.hopeconstruction.co.in';
  
  // Ensure canonical starts with a slash if provided
  const safeCanonical = canonical ? (canonical.startsWith('/') ? canonical : `/${canonical}`) : '';
  const fullUrl = `${baseUrl}${safeCanonical}`;
  
  // Ensure image starts with a slash
  const safeImage = image.startsWith('/') ? image : `/${image}`;
  const fullImage = `${baseUrl}${safeImage}`;

  const breadcrumbSchema = breadcrumbs ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.url.startsWith('/') ? item.url : `/${item.url}`}`
    }))
  } : null;

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content={noindex 
        ? "noindex, nofollow" 
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} 
      />

      {/* Hreflang per page */}
      <link rel="alternate" hreflang="en-in" href={fullUrl} />
      <link rel="alternate" hreflang="x-default" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Hope Construction" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@hopeconstruction" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* Schema Markup Injection */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}

      {/* Breadcrumb Schema Injection */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
