import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const schemaOrgJsonLd = {
    "@context": "https://schema.org",
    "@type": "EventVenue",
    "name": "Estância Vitória",
    "description": "Locação de espaços para eventos em Paranaváí - casamentos, aniversários, formaturas e eventos corporativos",
    "url": "https://estancia-vitoria.vercel.app",
    "telephone": "+55-44-99171-8217",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paranaváí",
      "addressRegion": "PR",
      "addressCountry": "BR",
      "streetAddress": "Saída para Tamboara"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-23.0726",
      "longitude": "-52.4645"
    },
    "image": "https://estancia-vitoria.vercel.app/assets/img/logo.png",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "15"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/estanciavitoria",
      "https://www.facebook.com/estanciavitoria"
    ]
  };

  return (
    <Html lang="pt-BR">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preconnect para otimizar carregamento */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googleapis.com" />
        <link rel="preconnect" href="https://lh3.googleusercontent.com" />
        
        {/* Meta tags globais */}
        <meta name="author" content="Estância Vitória" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#2a4d6e" />
        
        {/* Verificação do Google Search Console */}
        <meta name="google-site-verification" content="rVI6U1mIT6RZ2COig8tbpIRAZIAM_aIvVrmDdV_DUlE" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJsonLd) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
