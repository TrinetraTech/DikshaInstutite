// src/components/SEOHelmet.jsx
import { Helmet } from "react-helmet";

const SEOHelmet = ({
  title = "Diksha Classes – Patna",
  description = "Diksha Classes in Patna offers expert coaching for IIT-JEE, NEET, Foundation (XI & XII), and Pre-Foundation (VII–X) with experienced faculty and proven results.",
  keywords = "Diksha Classes Patna, IIT-JEE coaching Patna, NEET coaching Patna, Foundation classes, Pre-Foundation classes, best coaching Patna",
  url = "https://diksha.trinetr.tech/",
  image,
}) => (
  <Helmet>
    {/* Primary Meta Tags */}
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="canonical" href={url} />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    {image && <meta property="og:image" content={image} />}

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {image && <meta name="twitter:image" content={image} />}

    {/* Robots */}
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />

    {/* Structured Data */}
    <script type="application/ld+json">{`
      {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Diksha Classes",
        "url": "${url}",
        "logo": "${image || ''}",
        "description": "${description}",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Radhe Shyam Market, Akashwani Road, Near Passport Office",
          "addressLocality": "Patna-14",
          "addressRegion": "Bihar",
          "addressCountry": "India"
        },
        "telephone": "9955411119",
        "sameAs": []
      }
    `}</script>
  </Helmet>
);

export default SEOHelmet;
