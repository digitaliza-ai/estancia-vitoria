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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
