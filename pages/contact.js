import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import Contact from '../src/pages/Contact'

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contato - Estância Vitória</title>
        <meta name="description" content="Entre em contato com a Estância Vitória e solicite um orçamento para seu evento especial." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
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
