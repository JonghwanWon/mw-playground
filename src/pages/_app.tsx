import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { seo } from '@src/config.seo';
import { theme } from '@src/theme';
import { GlobalStyle } from '@src/theme/globalStyles';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="author" content={seo.author} />
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
          <meta name="title" content={seo.siteTitle} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={seo.url} />
          <meta property="og:image" content={seo.siteImage} />
          <meta property="og:site_name" content={seo.siteName} />
          <meta property="og:title" content={seo.siteTitle} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:locale" content="ko_KR" />
          <meta name="twitter:card" content={seo.siteLargeImage} />
          <meta name="twitter:site" content={seo.siteImage} />
          <meta name="twitter:title" content={seo.siteTitle} />
          <meta name="twitter:description" content={seo.description} />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}
export default MyApp;
