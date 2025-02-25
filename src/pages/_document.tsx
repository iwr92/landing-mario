import Document, { Html, Head, Main, NextScript } from 'next/document';
import { SessionProvider } from "next-auth/react";

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
        <SessionProvider>
          <Main />
          <NextScript />
          </SessionProvider>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
