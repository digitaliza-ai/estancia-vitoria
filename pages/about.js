import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import About from '../src/pages/About'

export default function AboutPage() {
  const pageUrl = 'https://estancia-vitoria.vercel.app/about';
  const pageTitle = 'Sobre a Estância Vitória - Nossa História e Espaços';
  const pageDescription = 'Conheça a história da Estância Vitória em Paranaváí. Espaços únicos em ambiente natural perfeito para casamentos, aniversários e eventos corporativos.';
  const pageImage = 'https://estancia-vitoria.vercel.app/assets/img/logo.png';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="sobre estância vitória, história, espaços para eventos paranaváí, local para casamento, chácara paranaváí" />
        
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
        <About />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
