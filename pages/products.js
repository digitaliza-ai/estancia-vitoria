import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import Products from '../src/pages/Products'

export default function ProductsPage() {
  const pageUrl = 'https://estancia-vitoria.vercel.app/products';
  const pageTitle = 'Galeria de Fotos - Estância Vitória | Paranaváí';
  const pageDescription = 'Veja fotos dos nossos espaços: salão interno, salão externo e eventos realizados. Conheça a estrutura completa da Estância Vitória em Paranaváí.';
  const pageImage = 'https://estancia-vitoria.vercel.app/assets/img/logo.png';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="galeria estância vitória, fotos eventos paranaváí, fotos salão de festas, eventos realizados, casamentos paranaváí fotos" />
        
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
        <Products />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
