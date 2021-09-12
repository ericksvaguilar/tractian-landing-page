import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
