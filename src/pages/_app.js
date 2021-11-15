import Theme from '../styles/theme'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Head>
          <title>Felipe Silva 🤟 </title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Theme>
    </>
  )
}
