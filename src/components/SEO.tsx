import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image = '/images/logo.jpeg',
  url = 'https://fngeodrillingrd.com',
  type = 'website'
}: SEOProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FN Geodrilling",
    "description": "Servicios geotécnicos especializados en República Dominicana",
    "url": "https://fngeodrillingrd.com",
    "logo": "https://fngeodrillingrd.com/images/logo.jpeg",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Santo Domingo",
      "addressRegion": "Distrito Nacional",
      "addressCountry": "DO"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-849-449-7231",
      "contactType": "customer service"
    }
  };

  return (
    <Helmet>
      <title>{`${title} | FN Geodrilling`}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
} 