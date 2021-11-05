import 'normalize.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'

import App from '@ifrstr/ui/components/layout/App'
import NavBar from '@ifrstr/ui/components/layout/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <App>
      <NavBar
        links={[
          { name: 'Il Harper', href: '/' },
          { name: 'about', href: '/about' },
        ]}
      />
      <Component {...pageProps} />
    </App>
  )
}

export default MyApp
