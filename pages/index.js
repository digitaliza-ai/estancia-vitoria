import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import Home from '../src/pages/Home'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Estância Vitória - Locação de Espaços para Eventos</title>
        <meta name="description" content="Estância Vitória - O local perfeito para seus eventos especiais. Locação de espaços para casamentos, aniversários e celebrações." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
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
