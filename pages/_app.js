// Importar Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css'
import Head from 'next/head'

// Importar todos os estilos
import '../src/styles/style.css'
import '../src/styles/products.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Estância Vitória - Locação de Espaços para Eventos</title>
        <meta name="description" content="Estância Vitória - O local perfeito para seus eventos especiais. Locação de espaços para casamentos, aniversários e celebrações em ambiente natural único." />
        <meta name="keywords" content="estância, locação, eventos, casamentos, festas, espaço para eventos, celebrações" />
        <meta name="author" content="Estância Vitória" />
        <link rel="icon" type="image/png" href="/assets/img/logo.png" />
        <link rel="apple-touch-icon" href="/assets/img/logo.png" />
        <meta property="og:title" content="Estância Vitória - Locação de Espaços para Eventos" />
        <meta property="og:description" content="O local perfeito para seus eventos especiais em ambiente natural único." />
        <meta property="og:image" content="/assets/img/logo.png" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
