import App from 'next/app';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import { styletron, debug } from '../styletron';

import '~/styles/globals.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StyletronProvider debugAfterHydration debug={debug} value={styletron}>
        <BaseProvider theme={LightTheme}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </BaseProvider>
      </StyletronProvider>
    );
  }
}
