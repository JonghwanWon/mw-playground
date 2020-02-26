import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@src/theme';
import { GlobalStyle } from '@src/theme/globalStyles';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
export default MyApp;
