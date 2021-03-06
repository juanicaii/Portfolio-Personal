import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'react-slidedown/lib/slidedown.css'
import 'react-circular-progressbar/dist/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
