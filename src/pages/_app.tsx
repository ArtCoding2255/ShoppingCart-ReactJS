import '@mantine/core/styles.css'
import '@/styles/globals.css'

import AppLayout from '@/components/AppLayout'
import themeConfig from '@/theme/theme'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'
import { ReactElement } from 'react'

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <MantineProvider theme={themeConfig}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </MantineProvider>
  )
}
