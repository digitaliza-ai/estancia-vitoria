import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import Contact from '../src/pages/Contact'

export default function ContactPage() {
  const pageUrl = 'https://estancia-vitoria.vercel.app/contact';
  const pageTitle = 'Contato e Orçamento - Estância Vitória | Paranaváí';
  const pageDescription = 'Solicite seu orçamento para eventos na Estância Vitória. WhatsApp (44) 9 9171-8217. Atendemos casamentos, aniversários, formaturas e eventos corporativos em Paranaváí.';
  const pageImage = 'https://estancia-vitoria.vercel.app/assets/img/logo.png';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="orçamento evento paranaváí, contato estância vitória, agendar visita, whatsapp eventos, reservar espaço paranaváí" />
        
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
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
