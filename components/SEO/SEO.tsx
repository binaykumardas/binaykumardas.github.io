import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO: React.FC = () => {
  const name = "Binay Kumar Das";
  const shortName = "Binay";
  const jobTitle = "Software Engineer";
  const description = "Hi, I'm Binay Kumar Das, a Software Engineer based in Bhubaneswar, India. Welcome to my interactive VS Code themed developer portfolio.";
  
  // Your exact GitHub Pages URL
  const siteUrl = "https://binaykumardas.github.io"; 

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "givenName": shortName,
    "familyName": "Das",
    "jobTitle": jobTitle,
    "url": siteUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Bhubaneswar",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://linkedin.com/in/binaykumardas",
      "https://github.com/binaykumardas",
      "https://x.com/binaykumardas96"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{`${shortName} | ${name} - ${jobTitle}`}</title>
      <meta name="title" content={`${shortName} | ${name} - ${jobTitle}`} />
      <meta name="description" content={description} />
      <meta name="keywords" content="Binay, Binay Kumar Das, Binay portfolio, Software Engineer, React Developer, Frontend Developer, Bhubaneswar, India" />
      <meta name="author" content={name} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={`${name} - ${jobTitle}`} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={`${name} - ${jobTitle}`} />
      <meta property="twitter:description" content={description} />

      {/* Inject Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};