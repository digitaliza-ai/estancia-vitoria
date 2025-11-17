import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import Services from '../src/pages/Services'

export default function ServicesPage() {
  const pageUrl = 'https://estancia-vitoria.vercel.app/services';
  const pageTitle = 'Nossos Espaços - Salões e Áreas para Eventos | Estância Vitória';
  const pageDescription = 'Conheça nossos espaços: Salão interno climatizado, salão externo coberto e área verde. Infraestrutura completa para eventos de até 300 pessoas em Paranaváí.';
  const pageImage = 'https://estancia-vitoria.vercel.app/assets/img/logo.png';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="salão de festas paranaváí, espaço para eventos, salão climatizado, área verde para eventos, infraestrutura para festas, local para casamento paranaváí" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
        
        <link rel="canonical" href={pageUrl} />
      </Head>
      
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
