# @ifrstr/ui

UI framework for IlHarper Infrastructure.

## Install

```sh
npm i -D @ifrstr/ui
# OR
yarn add -D @ifrstr/ui
```

```tsx
// _app.tsx

import '@ifrstr/ui/build/index.css'
import { App } from '@ifrstr/ui'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  )
}

export default MyApp
```

## LICENSE

MIT
