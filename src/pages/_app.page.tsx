import '@/lib/dayjs'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { AuthProvider } from '@/context/auth-context'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/query-client'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['cyrillic']
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()

  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <style jsx global>{`
        html,
        * {
          font-family: ${inter.style.fontFamily};
        }

        textarea {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <main className={inter.className}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            {router.pathname.startsWith('/dashboard') ? (
              <GlobalStyles />
            ) : (
              <GlobalStyles removeBg />
            )}

            {getLayout(<Component {...pageProps} />)}
            <ToastContainer />
          </AuthProvider>
        </ThemeProvider>
      </main>
    </QueryClientProvider>
  )
}
