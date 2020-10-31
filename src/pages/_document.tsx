/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { Provider as StyletronProvider } from 'styletron-react';
import { Server, Sheet } from 'styletron-engine-atomic';

import { styletron } from '../styletron';

class MyDocument extends Document<{ stylesheets: Sheet[] }> {
  static getInitialProps(document: any) {
    const page = document.renderPage((App: any) => (props: any) => (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    ));
    const stylesheets = (styletron as Server).getStylesheets() || [];
    return { ...page, stylesheets };
  }

  render() {
    return (
      <Html>
        <Head>
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              data-hydrate={sheet.attrs['data-hydrate']}
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              media={sheet.attrs.media}
            />
          ))}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
