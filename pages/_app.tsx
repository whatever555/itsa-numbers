import { Reset } from 'styled-reset'
import App from 'next/app'
import React from 'react'
import Head from 'next/head'
import { PROJECT_DESCRIPTION, PROJECT_NAME } from '../configs'

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const {
      Component,
      pageProps,
      router: { asPath },
    } = this.props
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{PROJECT_NAME}</title>
          <meta name="description" content={PROJECT_DESCRIPTION} />
        </Head>
        <Reset />
        <Component {...pageProps} path={asPath} />
      </>
    )
  }
}
