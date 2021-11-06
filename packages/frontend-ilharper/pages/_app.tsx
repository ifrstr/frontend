import 'normalize.css'
import '@ifrstr/ui//styles/index.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'

import App from '@ifrstr/ui/components/layout/App'
import Main from '@ifrstr/ui/components/layout/Main'
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
      <Main>
        <Component {...pageProps} />
      </Main>
    </App>
  )
}

export default MyApp
