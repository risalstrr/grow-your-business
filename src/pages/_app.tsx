import React from 'react'
import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { FooTer, NavBar } from '@elements'
import { AxiosProvider } from '@contexts'
import { AuthProvider } from 'src/components/contexts/AuthContext'
import GoogleAnalytics from '@bradgarropy/next-google-analytics'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AxiosProvider>
        <AuthProvider>
          <NavBar />
          <GoogleAnalytics measurementId={'G-PQNS05B6SN'} />
          <Component {...pageProps} />
          <FooTer />
        </AuthProvider>
      </AxiosProvider>
    </>
  )
}
