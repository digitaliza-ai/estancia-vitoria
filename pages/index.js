import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import Home from '../src/pages/Home'

export default function HomePage() {
  const pageUrl = 'https://estancia-vitoria.vercel.app';
  const pageTitle = 'Estância Vitória - Locação de Espaços para Eventos em Paranaváí';
  const pageDescription = 'Locação de espaços para casamentos, aniversários, formaturas e eventos corporativos em Paranaváí. Ambiente natural único com toda infraestrutura para seu evento especial.';
  const pageImage = 'https://estancia-vitoria.vercel.app/assets/img/logo.png';

  return (
    <>
      <Head>
        {/* Verificação Google Search Console */}
        <meta name="google-site-verification" content="rVI6U1mIT6RZ2COig8tbpIRAZIAM_aIvVrmDdV_DUlE" />
        
        {/* SEO Básico */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="estância vitória, locação de espaços, eventos paranaváí, casamento paranaváí, festa paranaváí, espaço para eventos, salão de festas, chácara para eventos, eventos corporativos, formatura, aniversário, confraternização" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:site_name" content="Estância Vitória" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={pageUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={pageUrl} />
        
        {/* Geo tags */}
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content="Paranaváí" />
        
        {/* Business Info */}
        <meta name="contact" content="+55 44 9 9171-8217" />
      </Head>
      
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
