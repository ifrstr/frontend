import 'normalize.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'

import App from '@ifrstr/ui/components/layout/App'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  )
}

export default MyApp
