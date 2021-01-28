import Document, { Head, Main, NextScript, Html } from 'next/document'
import React from 'react'
import { ServerStyleSheet } from 'styled-components'
import { THEME_COLOR, PROJECT_NAME } from '../configs'

export default class MyDocument extends Document<{ styleTags: any }> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="apple-touch-icon" href="/icon.png" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="icon" type="image/png" href="/favicon.png" />

          <meta name="apple-mobile-web-app-title" content={PROJECT_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content={THEME_COLOR} />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content={THEME_COLOR}
          />
        </Head>
        <body id="body">
          {this.props.styleTags}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
