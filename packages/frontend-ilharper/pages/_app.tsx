import 'normalize.css'
import '@ifrstr/ui/build/index.css'
import '../styles/globals.css'

import type { AppProps } from 'next/app'

import { App, Main, Footer, NavBar } from '@ifrstr/ui'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element =>
  pageProps.useEmptyLayout ? (
    <Component {...pageProps} />
  ) : (
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

export default MyApp
