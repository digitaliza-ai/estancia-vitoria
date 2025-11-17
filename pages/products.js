import Head from 'next/head'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import WhatsAppFloat from '../src/components/WhatsAppFloat'
import Products from '../src/pages/Products'

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>Galeria - Estância Vitória</title>
        <meta name="description" content="Explore nossa galeria de fotos e conheça a beleza dos espaços da Estância Vitória." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
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
