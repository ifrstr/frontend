import 'normalize.css'
import '@ifrstr/ui//styles/index.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'

import App from '@ifrstr/ui/components/layout/App'
import Main from '@ifrstr/ui/components/layout/Main'
import Footer from '@ifrstr/ui/components/layout/Footer'
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
      <Footer
        copyright="Hello from IlHarper Infrastructure."
        beian={[
          {
            href: 'https://beian.miit.gov.cn/',
            name: '浙ICP备2021029727号-1',
          },
        ]}
      />
    </App>
  )
}

export default MyApp
